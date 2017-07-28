import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class MessageConfigService {
  validationMessages:any;
  constructor(private http:Http) {

  }
  fetchValidationMessages(resourceUrl: string){
    return this.http.get(resourceUrl).map((res:Response)=>{
      return res.json();
    }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getMessageforError(key:string, error: any){
    var validationMessage = this.validationMessages[key]?this.validationMessages[key]:this.validationMessages['miscellaneous'];
    if(typeof error != 'object') {
      return validationMessage;
    } else {
      //TODO return modified object with customized message
      switch (key) {
        case 'minlength':
          validationMessage.text = validationMessage.text.replace('$DYNAMIC_VALUE', error.requiredLength);
          break;
        case 'maxlength':
          validationMessage.text = validationMessage.text.replace('$DYNAMIC_VALUE', error.requiredLength);
          break;
        case 'pattern':
          validationMessage.text = validationMessage.text.replace('$DYNAMIC_VALUE', error.requiredPattern);
          break;
        default:
          break;
      }
      return validationMessage;
    }
  }
  getAllMessages(){
    //providing it via  service will avoid creating multiple instances.
    return this.validationMessages;
  }

}
