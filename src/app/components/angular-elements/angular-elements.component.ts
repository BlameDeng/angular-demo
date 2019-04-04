import { Component, OnInit, Injector } from '@angular/core'
import { PopupService } from 'src/app/service/popup.service'
import { createCustomElement } from '@angular/elements'
import { PopupComponent } from './popup/popup.component'

@Component({
  selector: 'app-angular-elements',
  templateUrl: './angular-elements.component.html',
  styleUrls: ['./angular-elements.component.scss'],
  providers: [PopupService]
})
export class AngularElementsComponent implements OnInit {
  constructor(public injector: Injector, public popupService: PopupService) {
    const PopupElement = createCustomElement(PopupComponent, { injector })
    customElements.define('app-popup', PopupElement)
  }

  ngOnInit() {}

  showAsComponent = (inputEl: HTMLInputElement) => {
    if (!inputEl.value) {
      return
    }
    this.popupService.showAsComponent(inputEl.value)
    inputEl.value = ''
  }

  showAsElement = (inputEl: HTMLInputElement) => {
    if (!inputEl.value) {
      return
    }
    this.popupService.showAsElement(inputEl.value)
    inputEl.value = ''
  }
}
