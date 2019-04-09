import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserViewComponent } from "./user-view/user-view.component";
import { OwnerViewComponent } from "./owner-view/owner-view.component";

const routes: Routes = [
  { path: "owner", component: OwnerViewComponent },
  { path: "user", component: UserViewComponent },
  { path: "**", component: OwnerViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
