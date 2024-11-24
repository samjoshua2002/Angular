import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], // Fixed property name
})
export class FormComponent {
  carName: string = ''; // Renamed to singular for clarity
  
  @Output() carAdded = new EventEmitter<string>(); // Corrected @Output syntax

  onSubmit() {
    if (this.carName.trim()) {
      this.carAdded.emit(this.carName); // Emit event with car name
      console.log(this.carName, 'submitted');
      this.carName = ''; // Clear input field
    }
  }
}
