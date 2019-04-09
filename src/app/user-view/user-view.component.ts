import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.scss"]
})
export class UserViewComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() { }

  onClickGetBike(id: number): void {
    console.log("onClickGetBike: " + id);

    this.httpService.getBikeStatus(id);
  }
}
