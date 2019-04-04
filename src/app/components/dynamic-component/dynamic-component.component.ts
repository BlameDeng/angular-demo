import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core'
import { ModalHostDirective } from 'src/app/directives/modal-host.directive'
import { ModalComponent } from './modal/modal.component'

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild(ModalHostDirective)
  private modalHost: ModalHostDirective

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  loadModalComponent = () => {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ModalComponent
    )

    const viewContainerRef = this.modalHost.viewContainerRef

    viewContainerRef.clear()

    const componentRef = viewContainerRef.createComponent(componentFactory)
    componentRef.instance.message = 'aaaa'
  }

  removeModalComponent = () => {
    this.modalHost.viewContainerRef.clear()
  }
}
