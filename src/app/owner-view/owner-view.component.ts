import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { BikeModels, Bike, Issue } from "../entities";
import { timer } from "rxjs";

@Component({
  selector: "app-owner-view",
  templateUrl: "./owner-view.component.html",
  styleUrls: ["./owner-view.component.scss"]
})
export class OwnerViewComponent implements OnInit {

  devInit = true;

  bike: Bike;
  spinnerFinished = false;
  spinnerDurationMs = 0; // SET TO 1200
  newRepairToggle = false;
  newRepairText = "Neue Reparatur";

  bikeModels = [ BikeModels.LangLauefer, BikeModels.MountainMuncher, BikeModels.RoadRunner ];
  issueList = Issue.getAllIssues();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    if (this.devInit) { this.devInitBike(); }
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
      this.delayAndCloseSpinner();
    });
  }

  onClickAddBike(): void {
    this.httpService.ownerAddBike(this.bike).subscribe(bike => {
      this.bike = bike;
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

  createBikeObjectFromProperties(): void {

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
      {id: null, number: Issue.Hinterlichtdefekt.id, fixed: false}];
    this.bike.model = BikeModels.LangLauefer;
    this.bike.pin = 8796;
    this.bike.priority = 8;
    this.bike.status = 0;
    this.delayAndCloseSpinner();
  }

  switchNewRepairToggle(): void {
    this.newRepairToggle = !this.newRepairToggle;

    if(this.newRepairToggle) {
      this.newRepairText = "Abbrechen";
    } else {
      this.newRepairText = "Neue Reparatur";
    }
  }
}
