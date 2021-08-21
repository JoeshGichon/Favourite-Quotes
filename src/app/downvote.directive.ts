import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appDownvote]'
})
export class DownvoteDirective {

  constructor(public elem:ElementRef) { }

  downVoteValue = 0;

  @HostListener("click") onClicks(){
    
    this.elem.nativeElement.style.textDecoration='line-through';

  }

}
