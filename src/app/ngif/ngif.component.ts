import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  show=true
  T= true
  toggleT() {
    this.T = !this.T;
  }
}
  


