import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJSON',
  pure: false,
})
export class PrettyJSONPipe implements PipeTransform {
  transform(value: any): string {
    console.log(value);
    return JSON.stringify(value, null, 2);
  }
}
