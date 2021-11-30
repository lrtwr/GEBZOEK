import { MainMenuComponent } from './main-menu/main-menu.component';
import { Component, OnInit} from '@angular/core';
import { GlobalObjects } from './lib/global-objects';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gebzoek';
  g=GlobalObjects;

  ngOnInit(){

  $('button').click(function(){
    alert('Wats up!');
     });
    }

    whatsupMore(){
      alert('whatsup more');
    }
}
