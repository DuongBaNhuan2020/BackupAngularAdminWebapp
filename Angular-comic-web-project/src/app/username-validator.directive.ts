import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {User} from "./comic";
import {ComicService} from "./comic.service";

@Directive({
  selector: '[appUsernameValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UsernameValidatorDirective,
    multi: true,
  }],
})
export class UsernameValidatorDirective implements Validator {
  constructor(private comicService: ComicService) { }

  public validate(control: AbstractControl): ValidationErrors | null {
    return this.nameValidator()(control);
  }
  nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let isContain=false;
      let usersAll: User[];
      usersAll=[];
      this.comicService.getUsersList().subscribe((usersData: User[]) => {usersAll = usersData; });
      for (let value of usersAll) {
        alert(value.name)
        if (value.name?.includes(control.value)){
         isContain=true;
        }
      }
      const isValid=isContain;
      if (isValid) {
        return null;
      } else {
        return {
          namelValidator: {
            valid: false,
          },
        };
      }
    };

  }
}


