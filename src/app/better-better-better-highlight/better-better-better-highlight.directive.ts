import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBetterBetterHighlight]'
})
export class BetterBetterBetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'lightBlue');
  }

  @HostListener('mouseenter') mouseOver(eventDate: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'lightGreen');
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseLeave(eventDate: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}