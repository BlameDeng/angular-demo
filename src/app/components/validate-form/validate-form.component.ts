import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms'

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.scss']
})
export class ValidateFormComponent implements OnInit {
  reactiveForm: FormGroup

  constructor() {}

  ngOnInit() {
    this.reactiveForm = new FormGroup(
      {
        name: new FormControl(''),
        password: new FormControl('')
      },
      {
        validators: this.reactiveFormValidator
      }
    )
  }

  reactiveFormValidator: ValidatorFn = (controls: FormGroup) => {
    const name = controls.get('name')
    const password = controls.get('password')

    return name &&
      password &&
      name.value &&
      name.value.length >= 4 &&
      password.value &&
      password.value.length >= 6
      ? null
      : { invalid: true }
  }

  handleReactiveFormSubmit = () => {
    console.log(this.reactiveForm)
  }
}
