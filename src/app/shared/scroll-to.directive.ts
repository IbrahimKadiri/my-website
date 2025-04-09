import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: true
})
export class ScrollToDirective {
  @Input('appScrollTo') targetId!: string;

  @HostListener('click')
  onClick() {
    const element = document.getElementById(this.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
