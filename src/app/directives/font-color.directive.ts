import { Directive, Input, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective {
  @Input('appFontColor') color: string | null = null

  @HostListener('mouseenter') onMouseEnter() {
    this.changeFontColor(this.color)
  }

  @HostListener('mouseleave') onmouseleave() {
    this.changeFontColor(null)
  }

  constructor(private el: ElementRef) {}

  changeFontColor = (color: string | null) => {
    this.el.nativeElement.style.color = color
  }
}
