import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CakeComponent } from "./cakes/cake.component";

const routes: Routes = [
  {
    path: "",
    component: CakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
