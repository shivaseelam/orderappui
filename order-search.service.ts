import { Injectable } from '@angular/core';
import { OrderSearchComponent } from './order-search.component';
import { catchError } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { OrderDetail } from '../orderdetail';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { BehaviorSubject } from 'rxjs';
import { OrderDetailRequestPayload } from '../order-details/order-details-request-payload';
import { OrderRequestPayload } from './order-request-payload';


@Injectable({
  providedIn: 'root'
})

export class OrderSearchService {
  private getOrdersUrl = 'http://10.44.200.6:7001/bw-seel-order-app/seelam/orders';
  private orderDetailUrl = 'http://10.44.200.6:7001/bw-seel-order-app/seelam/single/order';
  private httpOptions = {
      headers: new HttpHeaders( { 'Content-Type': 'application/json' })
   };
  
     constructor(private httpClient : HttpClient) {

     }

     getOrders(payload: OrderRequestPayload) : Observable<Order[]> {
        return this.httpClient.post<Order[]>(this.getOrdersUrl, payload, this.httpOptions)      
     }

     getOrderDetail(requestPayload: OrderDetailRequestPayload) : Observable<OrderDetail> {
        return this.httpClient.post<OrderDetail>(this.orderDetailUrl, requestPayload, this.httpOptions)      
     }     
  
}
