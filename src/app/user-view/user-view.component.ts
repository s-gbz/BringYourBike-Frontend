import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Bike, Issue, BikeModels, Status } from "../entities";
import { timer } from "rxjs";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.scss"]
})
export class UserViewComponent implements OnInit {

  devInit = true;

  bike: Bike;
  spinnerFinished = false;
  // SET TO 1200
  spinnerDurationMs = 0;
  statusInfo = "";
  statuses = [ {value: 0, name: "Ausstehend"}, {value: 1, name: "In Bearbeitung"}, {value: 2, name: "Bereit zur Abholung"}];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    if (this.devInit) { this.devInitBike(); }
  }

  onClickGetBike(pin: number): void {
    this.httpService.getBikeStatus(pin).subscribe(bike => {
      this.bike = this.setBikeProperties(bike);
      this.delayAndCloseSpinner();
    });
  }

  delayAndCloseSpinner(): void {
    timer(this.spinnerDurationMs).subscribe(() => {
      this.spinnerFinished = true;
    });
  }

  mapStatusInfoNumToString(): void {
    if (this.bike) {
      const statusValue = this.bike.status;

      if (statusValue === 0) { this.statusInfo = Status.WAIT; }
      // tslint:disable-next-line: one-line
      else if (statusValue === 1) { this.statusInfo = Status.GOING; }
      // tslint:disable-next-line: one-line
      else if (statusValue === 2) { this.statusInfo = Status.READY; }
    }
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
    this.bike.pin = 1337;
    this.bike.priority = 2;
    this.bike.status = 0;
    this.mapStatusInfoNumToString();
    this.delayAndCloseSpinner();
  }
}
