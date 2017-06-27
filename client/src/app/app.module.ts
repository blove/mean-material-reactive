import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from "@angular/material";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
