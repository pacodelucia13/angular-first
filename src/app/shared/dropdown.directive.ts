import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';
import {selector} from 'rxjs-compat/operator/publish';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
