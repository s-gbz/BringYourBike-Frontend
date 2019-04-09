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

  bike: Bike;
  spinnerFinished = false;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.devInitBike();
  }

  devInitBike(): void {
    this.bike = new Bike();
    this.bike.id = 1;
    this.bike.email = "horsti1969@gmail.com";
    this.bike.issues = [
      {id: 1, issue: Issue.Bremsendefekt.importance, fixed: false},
      {id: 2, issue: Issue.Hinterlichtdefekt.importance, fixed: false}];
    this.bike.model = BikeModels.LangLauefer;
    this.bike.pin = 1234;
    this.bike.priority = 2;
    this.bike.status = 0;
    this.delayAndCloseSpinner();
  }

  onClickGetBike(pin: number): void {
    this.httpService.getBikeStatus(pin).subscribe(bike => {
      this.bike = bike;
      this.delayAndCloseSpinner();
    });
  }

  delayAndCloseSpinner(): void {
    timer(1200).subscribe(() => {
      this.spinnerFinished = true;
    });
  }

}
