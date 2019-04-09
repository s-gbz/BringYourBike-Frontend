import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
    ]
})
export class MaterialModule { }
