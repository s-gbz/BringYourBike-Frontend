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

  bike: Bike;
  spinnerFinished = false;
  statusInfo = "";

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.devInitBike();
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
    this.bike.pin = 1234;
    this.bike.priority = 2;
    this.bike.status = 0;
    this.mapStatusInfoNumToString();
    this.delayAndCloseSpinner();
  }

  onClickGetBike(pin: number): void {
    this.httpService.getBikeStatus(pin).subscribe(bike => {
      this.bike = bike;
      this.mapStatusInfoNumToString();
      this.delayAndCloseSpinner();
    });
  }

  delayAndCloseSpinner(): void {
    // TODO: SET TO 1200
    timer(0).subscribe(() => {
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
    let tempBike = new Bike();
/*     this.bike.ownerName = bike.ownerName;
    this.bike.id = bike.id;
    this.bike.email = bike.email;
    this.bike.issues = bike.issues;
    this.bike.model = bike.model;
    this.bike.pin = bike.pin;
    this.bike.priority = bike.priority;
    this.bike.status = bike.status; */
    return tempBike;
  }
}
