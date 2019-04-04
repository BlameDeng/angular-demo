import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss']
})
export class CustomDirectivesComponent implements OnInit {
  private visible = true

  constructor() {}

  ngOnInit() {}

  toggleVisible = () => {
    this.visible = !this.visible
  }
}
