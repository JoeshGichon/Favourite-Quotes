import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {

  constructor(public elem:ElementRef) { }

  

}
