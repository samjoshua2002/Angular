import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  imports: [CommonModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  isPrimary = true;

  togglePrimary() {
    this.isPrimary = !this.isPrimary;
}}
