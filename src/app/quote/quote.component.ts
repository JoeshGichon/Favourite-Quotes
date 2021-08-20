import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {quote:"If you're already a front-end developer, well, pretend you're also wearing a pirate hat.",quoteAuthor:" Ethan Marcotte"
    },
    {quote:"Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.",quoteAuthor:"Deep Immersion"
    },
    {quote:"We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.",quoteAuthor:"Dr. Christopher Dayagdag"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
