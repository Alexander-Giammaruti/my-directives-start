import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBetterHighlight]'
})
export class BetterBetterHighlightDirective implements OnInit {
  

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'lightBlue');
  }

  @HostListener('mouseenter') mouseOver(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'lightGreen');
  }

  @HostListener('mouseleave') mouseLeave(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }
}
