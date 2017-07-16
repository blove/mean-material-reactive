import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HerosRoutingModule { }