import { NodeItem } from './../interfaces/node-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconSelect',
})
export class IconSelectPipe implements PipeTransform {
  transform(value: NodeItem['filetype']): string | null {
    if (value === 'folder') return 'folder-open-regular';
    else if (value === 'file') return 'file-regular';
    else if (value === 'unset') return null;
    return null;
  }
}
