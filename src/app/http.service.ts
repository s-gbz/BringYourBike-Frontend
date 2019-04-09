import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Bike } from "./entities";

@Injectable({
  providedIn: "root"
})
export class HttpService {

  httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  bikeStatusUrl = "/bike-status";
  ownerAddBikeUrl = "/owner/add-bike";
  ownerUpdateBikeUrl = "/owner/update-bike";
  ownerGetBikeUrl = "/owner/get-bike";

  constructor(private http: HttpClient) { }

  getBikeStatus(id: number): Observable<Bike> {
    return this.http.get<Bike>(environment.serverUrl + this.bikeStatusUrl + `/{id}`, this.httpOptions);
  }

  ownerAddBike(bike: Bike): Observable<number> {
    const bikeJson = JSON.stringify({bike});
    return this.http.post<number>(environment.serverUrl + this.ownerAddBikeUrl, bikeJson, this.httpOptions);
  }

  ownerUpdateBike(bike: Bike): Observable<boolean> {
    const bikeJson = JSON.stringify({bike});
    return this.http.post<boolean>(environment.serverUrl + this.ownerUpdateBikeUrl, bikeJson, this.httpOptions);
  }

  ownerGetBike(id: number): Observable<Bike> {
    return this.http.get<Bike>(environment.serverUrl + this.ownerGetBikeUrl + `/{id}`, this.httpOptions);
  }
}
