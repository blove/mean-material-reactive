import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "heros",
    loadChildren: "./heros/heros.module#HerosModule"
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/heros"
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
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
