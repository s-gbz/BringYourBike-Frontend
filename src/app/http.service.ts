import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Bike } from "./entities";

@Injectable({
  providedIn: "root"
})
export class HttpService {

  private httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  private bikeStatusUrl = "/bike-status";
  private ownerAddBikeUrl = "/owner/add-bike";
  private ownerUpdateBikeUrl = "/owner/update-bike";
  private ownerGetBikeUrl = "/owner/get-bike";

  constructor(private http: HttpClient) { }

  getBikeStatus(pin: number): Observable<Bike> {
    return this.http.get<Bike>(environment.serverUrl + this.bikeStatusUrl + `/${pin}`, this.httpOptions);
  }

  ownerAddBike(bike: Bike): Observable<number> {
    const bikeJson = JSON.stringify({bike});
    return this.http.post<number>(environment.serverUrl + this.ownerAddBikeUrl, bikeJson, this.httpOptions);
  }

  ownerUpdateBike(bike: Bike): Observable<boolean> {
    const bikeJson = JSON.stringify({bike});
    return this.http.post<boolean>(environment.serverUrl + this.ownerUpdateBikeUrl, bikeJson, this.httpOptions);
  }

  ownerGetBike(pin: number): Observable<Bike> {
    return this.http.get<Bike>(environment.serverUrl + this.ownerGetBikeUrl + `/${pin}`, this.httpOptions);
  }
}
