import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-custom-directive',
  imports: [HighlightDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}
