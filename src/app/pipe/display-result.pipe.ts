import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'displayResult'
})
export class DisplayResultPipe implements PipeTransform {
  transform(value: boolean | '', args?: any): any {
    if (value === true) {
      return '赞成'
    } else if (value === false) {
      return '反对'
    } else {
      return '未投票'
    }
  }
}
