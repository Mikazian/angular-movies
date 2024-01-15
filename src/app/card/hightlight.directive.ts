import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHightlight]',
  standalone: true,
})
export class HightlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') bgColor: string = '#ddd';
  @HostBinding('style.fontSize') textSize: string = '.875rem';

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#ddd'
    // );
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#eee'
    // );
    this.bgColor = '#eee';
    this.textSize = '1rem';
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#ddd'
    // );
    this.bgColor = '#ddd';
    this.textSize = '.875rem';
  }
}
