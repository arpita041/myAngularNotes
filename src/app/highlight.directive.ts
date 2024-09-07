import { Directive, ElementRef,HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private er:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('pink');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }


  highlight(color:string){
    this.renderer.setStyle(this.er.nativeElement,'background-color', color);
  }
}
