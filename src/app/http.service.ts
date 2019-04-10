import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { Bike, BikeInterface } from "./entities";

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

/*   getBikeStatus(pin: number): Observable<BikeInterface> {
    return this.http.get<BikeInterface>(environment.serverUrl + this.bikeStatusUrl + `/${pin}`, this.httpOptions);
  } */

  getBikeStatus(pin: number): Observable<any> {
    return this.http.get<any>(environment.serverUrl + this.bikeStatusUrl + `/${pin}`, this.httpOptions);
  }

  ownerAddBike(bike: Bike): Observable<Bike> {
    bike.id = null;
    bike.pin = null;

    const bikeJson = JSON.stringify({bike}.bike);
    console.log(bikeJson);

    return this.http.post<Bike>(environment.serverUrl + this.ownerAddBikeUrl, bikeJson, this.httpOptions).pipe(tap(), catchError(this.handleError<Bike>("ownerAddBike")));
  }

  ownerUpdateBike(bike: Bike): Observable<boolean> {
    bike.priority = 2;

    const bikeJson = JSON.stringify({bike}.bike);
    console.log(bikeJson);

    return this.http.post<boolean>(environment.serverUrl + this.ownerUpdateBikeUrl, bikeJson, this.httpOptions);
  }

  ownerGetBike(pin: number): Observable<Bike> {
    return this.http.get<Bike>(environment.serverUrl + this.ownerGetBikeUrl + `/${pin}`, this.httpOptions).pipe(tap(), catchError(this.handleError<Bike>("ownerGetBike")));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
