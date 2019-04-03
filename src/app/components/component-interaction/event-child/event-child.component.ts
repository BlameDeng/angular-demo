import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.scss']
})
export class EventChildComponent implements OnInit {
  @Output() vote = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit() {}

  handleVote = (result: boolean) => {
    this.vote.emit(result)
  }
}
