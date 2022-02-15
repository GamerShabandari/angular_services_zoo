import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AddNewAnimalComponent } from './components/add-new-animal/add-new-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AddNewAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
