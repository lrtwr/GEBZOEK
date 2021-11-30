import { Component, OnInit } from '@angular/core';
import { GlobalObjects } from '../lib/global-objects';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  g=GlobalObjects;
  constructor() {
    this.g.ApplicationMemory["jeroen"]="Grrrrrrr";
    this.g.AppMem["paul"]=555666777888999
   }

  ngOnInit(): void {
  }

}
