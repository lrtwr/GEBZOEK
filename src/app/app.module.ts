import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    MainMenuComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
