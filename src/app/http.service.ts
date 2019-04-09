import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBikeStatus(id: number) {

  }
}
