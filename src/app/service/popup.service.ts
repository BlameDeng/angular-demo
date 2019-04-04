import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef
} from '@angular/core'
import { PopupComponent } from '../components/angular-elements/popup/popup.component'
import { NgElement, WithProperties } from '@angular/elements'

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  showAsComponent = (message: string) => {
    if (!message) {
      return
    }

    const popup = document.createElement('popup-component')

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      PopupComponent
    )

    const popupComponentRef = factory.create(this.injector, [], popup)

    this.applicationRef.attachView(popupComponentRef.hostView)

    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup)
      this.applicationRef.detachView(popupComponentRef.hostView)
    })

    popupComponentRef.instance.message = message

    document.body.appendChild(popup)
  }

  showAsElement = (message: string) => {
    if (!message) {
      return
    }
    const popupEl: NgElement &
      WithProperties<PopupComponent> = document.createElement(
      'app-popup'
    ) as any

    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl))

    popupEl.message = message

    document.body.appendChild(popupEl)
  }
}
