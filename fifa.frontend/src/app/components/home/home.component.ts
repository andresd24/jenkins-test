import { Component } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ fadeIn ]
})

export class HomeComponent  {
  title = 'Home';
}