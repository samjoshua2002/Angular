import { Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { NGFORComponent } from './ngfor/ngfor.component';
import { ImageurlComponent } from './imageurl/imageurl.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    NGFORComponent,
    FormComponent,
    ImageurlComponent,
    TwowaybindingComponent,
    PipesComponent,
    NgifComponent,
    NgclassComponent,
    CustomDirectiveComponent,
    ResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected `styleUrls` property
})
export class AppComponent implements OnInit {
  // Data management
  carNames: string[] = []; // Shared list of car names

  fullName: string = 'Sam Joshua';
  title: string = 'demo';

  user = {
    name: 'Sanjay',
    age: 30,
    location: 'Chennai',
  };

  status: any = null;

  ngOnInit() {
    this.status = {
      current: 'true',
    };
  }

  getName() {
    return 'Barnabas';
  }

  // Event handler for car addition
  onCarAdded(carName: string) {
    if (carName.trim()) {
      this.carNames.push(carName); // Add to the shared list
      console.log(this.carNames, 'Updated car list from AppComponent');
    }
  }
}
