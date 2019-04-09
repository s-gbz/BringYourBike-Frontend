import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Bike } from "../entities";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.scss"]
})
export class UserViewComponent implements OnInit {

  bike: Bike;
  constructor(private httpService: HttpService) { }

  ngOnInit() { }

  onClickGetBike(pin: number): void {
    this.httpService.getBikeStatus(pin).subscribe(bike => this.bike = bike);
  }
}
