import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderSearchService } from '../order-search/order-search.service';
import { OrderDetail } from '../orderdetail';
import { OrderDetailRequestPayload } from './order-details-request-payload';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  title: string;
  orderid : any;
  orderDetail : OrderDetail = new OrderDetail();
  orderRequestPayload: OrderDetailRequestPayload = new OrderDetailRequestPayload("", "");
  orderLoaded: boolean;

  constructor(private orderservice:OrderSearchService, private route:ActivatedRoute) {
   }

  ngOnInit() {
    this.title = "ORDER DETAIL PAGE"
    this.orderRequestPayload.appid = this.route.snapshot.params.appid;
    this.orderRequestPayload.orderconfnum = this.route.snapshot.params.orderconfnum;
    this.getOrderDetail(this.orderRequestPayload)
    this.orderLoaded = false;
  }

  getOrderDetail (requestPayload: OrderDetailRequestPayload) {
    this.orderservice.getOrderDetail(requestPayload).subscribe(data =>{
      this.orderDetail = data; 
      this.orderLoaded   = true;   
    })
  }

}
