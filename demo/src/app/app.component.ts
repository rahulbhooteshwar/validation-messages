import { Component, OnInit } from '@angular/core';
import {MessageConfigService} from 'validation-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  startLoading = false;
  constructor(private messageConfigService: MessageConfigService){

  }
  ngOnInit(){
    var self = this;
    this.messageConfigService.fetchValidationMessages('/assets/validation-messages.json').subscribe(
    data=>{
      self.messageConfigService.validationMessages = data;
      self.startLoading = true;
    });
  }
}
