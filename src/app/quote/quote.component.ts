import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote("If you're already a front-end developer, well, pretend you're also wearing a pirate hat."," Ethan Marcotte"
    ),
    new Quote("Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.","Deep Immersion"
    ),
    new Quote("We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites." ,"Dr. Christopher Dayagdag"
    ),
  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
