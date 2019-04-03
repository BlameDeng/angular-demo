import { Component, OnInit } from '@angular/core'
import { Person } from 'src/app/models/person'

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  xm: Person = new Person('xm', 'xm', 18, '西湖区1号')
  personList: Person[] = []
  visible: boolean = true

  constructor() {}

  ngOnInit() {
    const nameArray = ['Ann', 'Lily', 'Tom', 'Jack']
    nameArray.forEach((name, index) => {
      this.personList.push(
        new Person(String(index), name, 18, `西湖区${index + 2}号`)
      )
    })
  }

  trackByPersonList = (index: number, person: Person) => person.id

  toggleVisible = () => {
    this.visible = !this.visible
  }
}
