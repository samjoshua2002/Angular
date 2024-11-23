import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  title="counter"
  counter=0
  increment(){
    this.counter++;
  }
  decrement(){
    if (this.counter >0) {
      
      this.counter--;
    }
  }

}
