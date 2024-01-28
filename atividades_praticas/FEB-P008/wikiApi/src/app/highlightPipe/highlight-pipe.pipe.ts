import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe'
})
export class HighlightPipePipe implements PipeTransform {
  transform(text: string, searchTerm: string): string {
    if (!searchTerm) {
      return text;
    }

    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, '<b>$&</b>');
  }
}
