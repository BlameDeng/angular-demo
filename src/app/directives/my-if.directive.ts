import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  @Input()
  set appMyIf(condition: boolean) {
    if (condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      this.hasView = true
    } else if (!condition && this.hasView) {
      this.viewContainerRef.clear()
      this.hasView = false
    }
  }

  private hasView: boolean = false

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
