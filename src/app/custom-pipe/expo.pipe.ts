import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo',
  standalone: true
})
export class ExpoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * value;
  }

}
