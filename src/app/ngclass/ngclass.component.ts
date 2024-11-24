import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngclass',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  isPrimary = true;

  togglePrimary() {
    this.isPrimary = !this.isPrimary;
}

checkbox=true;

}
