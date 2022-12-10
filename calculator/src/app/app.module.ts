import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule, } from '@angular/material/form-field';
import { CalcComponent } from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,

  
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
