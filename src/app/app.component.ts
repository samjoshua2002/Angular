import { Component, OnInit } from '@angular/core';

import { CounterComponent } from './counter/counter.component';

import { NGFORComponent } from './ngfor/ngfor.component';
import { ImageurlComponent } from './imageurl/imageurl.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent,NGFORComponent, ImageurlComponent,TwowaybindingComponent , NgifComponent,NgclassComponent,CustomDirectiveComponent],
  templateUrl: './app.component.html',
  // Alternatively, use inline template:
  // template: "<h1>Hello World</h1>",
  styleUrls: ['./app.component.css'] // Corrected `styleUrl` to `styleUrls` and made it an array
})
export class AppComponent implements OnInit {
  
  fullName: string = "Sam Joshua";
  title: string = "demo";
  

  user = {
    name: "Sanjay",
    age: 30,
    location: "Chennai",
  };
  status: any = null;
  ngOnInit() {
    this.status = {
      current: "true",
    };
  }

  getName() {
    return "Barnabas";
  }
  

 
  
}
