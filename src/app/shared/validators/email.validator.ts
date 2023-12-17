import {FormControl} from '@angular/forms';
 
export class EmailValidator {
  static checkEmail(ct: FormControl): { [checkEmail: string]: boolean }{
    var requiredDomains = "@yopmail.com";
    var lowercaseValue = ct.value.toLowerCase();


    if (lowercaseValue.split("@")[1] == requiredDomains) {
      console.log(lowercaseValue.split("@")[1])
      return {'checkEmail' : true}
    }

    return {'checkEmail' : false}
  }
}