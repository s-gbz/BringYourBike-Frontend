import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-pin-dialog",
  templateUrl: "./pin-dialog.component.html",
  styleUrls: ["./pin-dialog.component.scss"]
})
export class PinDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pin: number, ownerName: string }) {}

    closeDialog(): void {
    this.dialogRef.close();
  }
}
