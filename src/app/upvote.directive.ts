import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {

  constructor(public elem:ElementRef) { }

  @HostListener("click") onClicks(){
    
    this.elem.nativeElement.style.textDecoration='line-through';

  }

  

}
