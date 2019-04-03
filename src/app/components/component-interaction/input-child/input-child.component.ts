import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core'

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss']
})
export class InputChildComponent implements OnInit, OnChanges {
  _number: number

  @Input() name: string
  @Input() set number(num: number) {
    this._number = num * 2
  }
  get number() {
    return this._number
  }

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}
