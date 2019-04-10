import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { UserViewComponent } from "./user-view/user-view.component";
import { OwnerViewComponent } from "./owner-view/owner-view.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { IssueNumToStrPipe } from "./issue-num-to-str.pipe";
import { PinDialogComponent } from "./pin-dialog/pin-dialog.component";


@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    OwnerViewComponent,
    IssueNumToStrPipe,
    PinDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PinDialogComponent]
})
export class AppModule { }
