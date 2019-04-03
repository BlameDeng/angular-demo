import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private count = new Subject<number>()

  count$ = this.count.asObservable()

  constructor() {}

  changeCount = (count: number) => {
    this.count.next(count)
  }
}
