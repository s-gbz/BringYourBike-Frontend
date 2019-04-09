import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { UserViewComponent } from "./user-view/user-view.component";
import { OwnerViewComponent } from "./owner-view/owner-view.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    OwnerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
