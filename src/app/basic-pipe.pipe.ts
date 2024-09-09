import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basicPipe',
  pure: false
})
export class BasicPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
 return Math.random();
  }

}
