import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-width-change',
  templateUrl: './width-change.component.html',
  styleUrls: ['./width-change.component.scss']
})
export class WidthChangeComponent implements OnInit {
  @Input() width: number = 20
  @Output() widthChange = new EventEmitter<number>()

  get _width() {
    return `${this.width}px`
  }

  constructor() {}

  ngOnInit() {}

  changeWidth = (delta: number) => {
    if (this.width + delta > 0) {
      this.width += delta
      this.widthChange.emit(this.width)
    }
  }
}
