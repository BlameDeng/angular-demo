import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-timer-child',
  templateUrl: './timer-child.component.html',
  styleUrls: ['./timer-child.component.scss']
})
export class TimerChildComponent implements OnInit, OnDestroy {
  second: number = 0
  timerId: any = null

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.timerId) {
      window.clearInterval(this.timerId)
    }
  }

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.second++
      }, 1000)
    }
  }

  stop = () => {
    window.clearInterval(this.timerId)
    this.timerId = null
  }
}
