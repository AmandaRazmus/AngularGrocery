import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [GroceryComponent]
})

export class AppModule { }
