import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  profileList = []
  personList = []

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  personForm = this.fb.group({
    name: [''],
    age: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm.valueChanges.subscribe(data => {})
  }

  submitProfileForm = () => {
    const { value } = this.profileForm
    if (!value.firstName || !value.lastName) {
      return
    }
    this.profileList.push(value)
    this.profileForm.reset()
  }

  submitPersonForm = () => {
    const { value } = this.personForm
    if (!value.name || !value.age) {
      return
    }
    this.personList.push(value)
    this.personForm.reset()
  }
}
