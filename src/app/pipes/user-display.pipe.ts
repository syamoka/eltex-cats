import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDisplay',
  standalone: true,
})
export class UserDisplayPipe implements PipeTransform {
  transform(user: any): string {
    if (!user) return '';
    return `User: ${user.name.first} ${user.name.last} #${user._id}`;
  }
}
