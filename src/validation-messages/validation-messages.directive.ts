import { Directive, ElementRef,  OnInit, Renderer2, HostListener} from '@angular/core';
import {NgModel} from '@angular/forms';
import { MessageConfigService } from './';
@Directive({
  selector: '[appValidationMessages]'
})
export class ValidationMessagesDirective implements OnInit {
  validationMessages:any;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private model:NgModel, public messageConfigService: MessageConfigService) {
    this.validationMessages = this.messageConfigService.getAllMessages();
    var self = this;
    //trigger validation message(s) on form submission
    this.model.formDirective.ngSubmit.subscribe(function(data){
      self.triggerValidationMessages();
    });
    //trigger validation message(s) on value changes
    this.model.valueChanges.subscribe(function(){
      self.triggerValidationMessages();
    });
  }

  ngOnInit(){
    var self = this;
    setTimeout(function(){
      if(self.elementRef.nativeElement.hasAttribute('required')) {
        //Add required asterisk class on label
        self.renderer.addClass(self.elementRef.nativeElement.previousElementSibling, 'required');
      }
    }, 200);
  }
  @HostListener('input') onInput(){
    //trigger validation message(s) on input
    this.triggerValidationMessages();
  }

  @HostListener('blur') onBlur(){
    //trigger validation message(s) on focus out
    this.triggerValidationMessages();
  }
  triggerValidationMessages(){
    this.updateErrorMessages();
    if(this.model.invalid && (this.model.touched || this.model.formDirective.submitted)){
      for (var key in this.model.errors) {
        if(this.model.errors[key]){
          var validationMessage = this.messageConfigService.getMessageforError(key, this.model.errors[key]);
          this.createErrorMessage(key, validationMessage);
        }
      }
    }
  }
  createErrorMessage(errorType, validationMessage){
      var messageElement = this.elementRef.nativeElement.parentNode.querySelector('.'+validationMessage.selector);
      var presentErrors = Object.keys(this.model.errors);
      if(messageElement == null){
        if(errorType != 'required' && presentErrors.indexOf('required') == -1){
          var p = document.createElement('p');
          p.className += " text-danger validation-message";
          p.className += " "+validationMessage.selector;
          p.innerHTML = validationMessage.text;
          this.renderer.appendChild(this.elementRef.nativeElement.parentNode, p);
        } else if(errorType == 'required'){
          //if 'required' error is present remove other ones first
          var target = this.elementRef.nativeElement.parentNode.querySelector('.validation-message')
          if(target){
            target.remove();
          }
          var p = document.createElement('p');
          p.className += " text-danger validation-message";
          p.className += " "+validationMessage.selector;
          p.innerHTML = validationMessage.text;
          this.renderer.appendChild(this.elementRef.nativeElement.parentNode, p);
        }
      }
  }
  updateErrorMessages(){
    //check if we need to remove previously added error messages
    for(let errorType in this.validationMessages) {
      if(this.model.errors) {
        var presentErrors = Object.keys(this.model.errors);
        if(presentErrors.indexOf(errorType) === -1){
          var target = this.elementRef.nativeElement.parentNode.querySelector('.'+this.validationMessages[errorType].selector);
          if(target!=null) {
            target.remove();
          }
        }
      } else {
        //remove all errors as input is valid
        var target = this.elementRef.nativeElement.parentNode.querySelector('.validation-message')
        if(target){
          target.remove();
        }
      }
    }
  }
  //convert object to map
  transform(dict: Object): Array<any> {
    var a = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }
}