import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DynamicChartService {

  api = 'http://124.123.123.91:20080/api/v1/subscriber/findNewSubscriptionVsRenewal';
  constructor(private http: HttpClient) { }
  getallchart() {
    return this.http.get(this.api);
  }
}
