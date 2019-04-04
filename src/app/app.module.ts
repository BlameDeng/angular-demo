import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { DisplayDataComponent } from './components/display-data/display-data.component'
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component'
import { WidthChangeComponent } from './components/width-change/width-change.component'
import { DoubleNumberPipe } from './pipe/double-number.pipe'
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component'
import { InputChildComponent } from './components/component-interaction/input-child/input-child.component'
import { EventChildComponent } from './components/component-interaction/event-child/event-child.component'
import { DisplayResultPipe } from './pipe/display-result.pipe'
import { TimerChildComponent } from './components/component-interaction/timer-child/timer-child.component'
import { CountChildComponent } from './components/component-interaction/count-child/count-child.component'
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component'
import { ModalHostDirective } from './directives/modal-host.directive'
import { ModalComponent } from './components/dynamic-component/modal/modal.component'
import { AngularElementsComponent } from './components/angular-elements/angular-elements.component'
import { PopupComponent } from './components/angular-elements/popup/popup.component'
import { FontColorDirective } from './directives/font-color.directive'
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component'
import { MyIfDirective } from './directives/my-if.directive'
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ValidateFormComponent } from './components/validate-form/validate-form.component'

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    TemplateSyntaxComponent,
    WidthChangeComponent,
    DoubleNumberPipe,
    ComponentInteractionComponent,
    InputChildComponent,
    EventChildComponent,
    DisplayResultPipe,
    TimerChildComponent,
    CountChildComponent,
    DynamicComponentComponent,
    ModalHostDirective,
    ModalComponent,
    AngularElementsComponent,
    PopupComponent,
    FontColorDirective,
    CustomDirectivesComponent,
    MyIfDirective,
    ReactiveFormComponent,
    ValidateFormComponent
  ],
  entryComponents: [ModalComponent, PopupComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
