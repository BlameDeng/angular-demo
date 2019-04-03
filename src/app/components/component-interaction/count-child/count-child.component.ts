import { Component, OnInit } from '@angular/core'
import { CountService } from 'src/app/service/count.service'

@Component({
  selector: 'app-count-child',
  templateUrl: './count-child.component.html',
  styleUrls: ['./count-child.component.scss']
})
export class CountChildComponent implements OnInit {
  private count = 0

  constructor(private countService: CountService) {}

  ngOnInit() {}

  handleChangeCount = () => {
    this.count++
    this.countService.changeCount(this.count)
  }
}
