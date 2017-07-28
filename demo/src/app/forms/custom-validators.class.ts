import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/rx';
export class CustomValidators {
    static forbiddenUserNames = ["Rahul", "Raj"];
    static existingUsers = ["John", "Mike"];
    static forbiddenNames(control:FormControl):{[s:string] : boolean}{
        if(CustomValidators.forbiddenUserNames.indexOf(control.value) != -1) {
          return {forbiddenNames : true};
        }
        return null;
    }
    constructor(){
    }
    static checkUserExists(control:FormControl) : Promise<any> | Observable<any>{
        const promise = new Promise<any>((resolve, reject)=>{
            setTimeout(function(){
                if(CustomValidators.existingUsers.indexOf(control.value) != -1){
                    resolve({'userExists': true});
                } else {
                    resolve(null);
                }
            }, 3000);
        });
        return promise;
    }
}