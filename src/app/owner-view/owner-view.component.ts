import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { BikeModels, Bike, Issue } from "../entities";
import { timer } from "rxjs";
import { MatDialog } from "@angular/material";
import { PinDialogComponent } from "../pin-dialog/pin-dialog.component";

@Component({
  selector: "app-owner-view",
  templateUrl: "./owner-view.component.html",
  styleUrls: ["./owner-view.component.scss"]
})
export class OwnerViewComponent implements OnInit {

  devInit = false;

  bike: Bike;
  spinnerFinished = false;
  spinnerDurationMs = 0; // SET TO 1200
  newRepairToggle = false;
  updateBikeToggle = false;

  newRepairText = "Neue Reparatur";
  statuses = [ {value: 0, name: "Ausstehend"}, {value: 1, name: "In Bearbeitung"}, {value: 2, name: "Bereit zur Abholung"}];
  bikeModels = [ BikeModels.LangLauefer, BikeModels.MountainMuncher, BikeModels.RoadRunner ];
  issueList = Issue.getAllIssues();

  constructor(private httpService: HttpService, public pinDialog: MatDialog) { }

  ngOnInit() {
    if (this.devInit) { this.devInitBike(); }
    this.bike = new Bike();
  }

  onClickGetBike(pin: number): void {
    /* this.httpService.ownerGetBike(pin).subscribe(bike => {
      console.log("subscription bike arg:" + JSON.parse(JSON.stringify(bike)));
      this.bike = bike;
      console.log("new bike: " + this.bike);
      this.delayAndCloseSpinner();
    }); */
    this.httpService.getBikeStatus(pin).subscribe(bike => {
      this.bike = this.setBikeProperties(bike);
      // this.delayAndCloseSpinner();
    });
  }

  onClickAddBike(model: string): void {
    this.openPinDialog(1337, "Sebastian");


    this.httpService.ownerAddBike(this.bike).subscribe(bike => {
      this.bike = bike;
      this.openPinDialog(this.bike.pin, this.bike.ownerName);
    });
  }

  onClickUpdateBike(): void {
    this.httpService.ownerUpdateBike(this.bike).subscribe(e => { });
  }

  delayAndCloseSpinner(): void {
    timer(this.spinnerDurationMs).subscribe(() => {
      this.spinnerFinished = true;
    });
  }

  setBikeProperties(bike): Bike {
    const tempBike = new Bike();
    tempBike.ownerName = bike.ownerName;
    tempBike.id = bike.id;
    tempBike.email = bike.email;
    tempBike.issues = bike.issues;
    tempBike.model = bike.model;
    tempBike.pin = bike.pin;
    tempBike.priority = bike.priority;
    tempBike.status = bike.status;
    return tempBike;
  }

  devInitBike(): void {
    this.bike = new Bike();
    this.bike.ownerName = "Horsti";
    this.bike.id = 1;
    this.bike.email = "horsti1969@gmail.com";
    this.bike.issues = [
      {id: null, number: Issue.Bremsendefekt.id, fixed: false},
      {id: null, number: Issue.Kettendefekt.id, fixed: false},
      {id: null, number: Issue.Vorderraddefekt.id, fixed: false}];
    this.bike.model = BikeModels.LangLauefer;
    this.bike.pin = null;
    this.bike.priority = 8;
    this.bike.status = 0;
    this.delayAndCloseSpinner();
  }

  initEmptyBike(): void {
    this.bike = new Bike();
    this.bike.ownerName = "s";
    this.bike.id = null;
    this.bike.email = "om";
    this.bike.issues = null;
    this.bike.model = "BikeModels.LangLauefer";
    this.bike.pin = null;
    this.bike.priority = 0;
    this.bike.status = 0;
    this.delayAndCloseSpinner();
  }

  switchNewRepairToggle(): void {
    this.newRepairToggle = !this.newRepairToggle;

    if (this.newRepairToggle) {
      this.newRepairText = "Abbrechen";
    } else {
      this.newRepairText = "Neue Reparatur";
    }
  }

  switchUpdateBikeToggle(): void {
    this.updateBikeToggle = !this.updateBikeToggle;
  }

  openPinDialog(pin: number, ownerName: string): void {
    const dialogRef = this.pinDialog.open(PinDialogComponent, {
      width: "250px", data: {pin, ownerName}
    });
  }
}
