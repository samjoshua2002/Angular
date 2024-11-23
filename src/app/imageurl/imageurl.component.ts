import { Component } from '@angular/core';

@Component({
  selector: 'app-imageurl',
  imports: [],
  templateUrl: './imageurl.component.html',
  styleUrl: './imageurl.component.css'
})
export class ImageurlComponent {
  image: string = "https://picsum.photos/200/300";
  Alt: string = "Angular Logo";

}
