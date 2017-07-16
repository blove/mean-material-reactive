import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule, MdSnackBarModule } from "@angular/material";
import { HerosRoutingModule } from "./heros-routing.module";
import { SharedModule } from "../shared/shared.module";
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    HerosRoutingModule,
    MdDialogModule,
    MdSnackBarModule,
    SharedModule
  ],
  declarations: [IndexComponent]
})
export class HerosModule { }
