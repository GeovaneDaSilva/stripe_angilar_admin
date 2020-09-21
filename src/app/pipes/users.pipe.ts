import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultUsers = [];
    for (const user of value) {
      if (user.phone.toLowerCase().indexOf(arg.toLowerCase()) > -1 || user.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultUsers.push(user);
      };
    };
    
    return resultUsers;
  }

}
