import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseOver]',
  standalone: true
})
export class MouseOverDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter')
  MouseEnter():void{
    this.element.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseleave')
  MouseLeave():void{
    this.element.nativeElement.style.backgroundColor="initial";
  }

}
