import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy, OnChanges {
  @Input() message: string

  @Output() closed = new EventEmitter()

  private timerId: any

  constructor() {}

  ngOnInit() {
    this.timerId = setTimeout(() => {
      this.closed.emit()
    }, 3000)
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy() {
    if (this.timerId) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
  }
}
