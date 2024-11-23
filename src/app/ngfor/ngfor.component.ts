import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports:[CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'] // Corrected here
})
export class NGFORComponent {
  movies = [
    'bigil',
    'sarkar',
    'kathi',
    'varisu',
    'beast',
    'goat',
    'leo'
  ];

  // ngfor index
  fruits  = [
    'apple',
    'banana',
    'cherry',
    'pineapple',
    'watermelon',
    'orange'
  ]

}
