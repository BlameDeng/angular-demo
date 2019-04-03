import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core'

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent implements OnInit, OnChanges, DoCheck {
  className = 'red-color'
  width = 50
  index = 0

  @Output() myClick = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  ngDoCheck() {}

  changeColor = (e: MouseEvent) => {
    this.myClick.emit('myClick')
    this.className =
      this.className === 'red-color' ? 'green-color' : 'red-color'
  }

  changeIndex = (delta: number) => {
    if (this.index + delta >= 0 && this.index + delta <= 3) {
      this.index += delta
    }
  }

  changeDivSize = (divEl: HTMLDivElement) => {
    const { width } = divEl.style
    divEl.style.width = parseInt(width, 10) + 10 + 'px'
  }
}
