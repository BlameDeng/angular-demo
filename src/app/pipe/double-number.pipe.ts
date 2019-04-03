import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'doubleNumber'
})
export class DoubleNumberPipe implements PipeTransform {
  transform(value: number, args?: any): number {
    return value * 2
  }
}
