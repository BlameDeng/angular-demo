import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core'
import { TimerChildComponent } from './timer-child/timer-child.component'
import { CountService } from 'src/app/service/count.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
  providers: [CountService]
})
export class ComponentInteractionComponent implements OnInit, OnDestroy {
  number: number = 10
  result: boolean | '' = ''
  countValue: number = 0

  @ViewChild(TimerChildComponent)
  private timerChildComponent: TimerChildComponent

  private subscription: Subscription

  constructor(private countService: CountService) {
    this.subscription = this.countService.count$.subscribe(count => {
      this.countValue = count
    })
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  increaseNumber = () => {
    this.number += 10
  }

  changeResult = (result: boolean) => {
    this.result = result
  }

  start = () => {
    this.timerChildComponent.start()
  }

  stop = () => {
    this.timerChildComponent.stop()
  }
}
