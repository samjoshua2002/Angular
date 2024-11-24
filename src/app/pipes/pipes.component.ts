import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title='Hello world'
  date=new Date();
  i=['item1','item2','item3','item4','item5']

  uppercase="SAM"
  lowercase="sam"

  money=200

}
