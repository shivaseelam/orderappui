import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { OrderSearchService } from './order-search.service';
import { OrderDetail } from '../orderdetail';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import {Router} from '@angular/router';
import { OrderRequestPayload } from './order-request-payload';
import { Application } from '../application';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {

  title: string;
  appid: number;
  orders: Order[];
  public orderDetail: OrderDetail = new OrderDetail();
  orderRequestPayload: OrderRequestPayload = new OrderRequestPayload("", "", "");
  selectedApp: string;
  ordersExist: boolean;
  disableButton: boolean;
  displayedColumns: ['appRefId', 'confirmationNo', 'orderNumber', 'timestamp', 'totalAmount'];

  dataSource: MatTableDataSource<Order>;
  //orderSource: Order[];

  //@ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public applications: Application[] = [
    {id: '12', value: 'Small Employer'},
    {id: '4', value: 'Quest Direct'},
    {id: '14', value: 'Cobranded'}
  ];  

  constructor(private orderservice:OrderSearchService, private route:Router) {
    let orders = [];
    this.dataSource = new MatTableDataSource(orders);
    //this.orderSource = [];
      
   }

   ngAfterViewInit() {
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      } 

  ngOnInit() {  
    this.title = "ORDER SEARCH PAGE"
    this.appid = 12; 
    this.ordersExist = false; 
    this.disableButton = true;     
  }
  
  getOrders(){ 
     this.orderservice.getOrders(this.orderRequestPayload).subscribe(data =>{ 
        this.orders  = this.convertDataToOrderObj(data);
        //this.orders = data;
       
        if (data.length>0) {
          this.ordersExist = true;
        } 
        this.disableButton = true;
        this.dataSource = new MatTableDataSource(this.orders);
        this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        //this.orderSource = this.orders;
        })
   }

   convertDataToOrderObj(data: any) {
      let orders = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let order: Order = new Order(element.appRefId, element.confirmationNo, element.orderNumber, 
          element.timestamp, element.totalAmount );
          orders.push(order);
      }
     return orders;
   }

   getAppName(event) {
     this.orderRequestPayload.appid = event; 
     this.checkSelection();    
   }

   startChangeEvent(event: Date) {
     this.orderRequestPayload.startdate = ""+event.getFullYear() + ((event.getMonth()> 8) ? (event.getMonth()+ 1) : ('0' + (event.getMonth()+ 1))) +  ((event.getDate()> 9) ?event.getDate().toString() : ('0' +event.getDate()));     
     this.checkSelection();
   }

   endChangeEvent(event: Date) {
     this.orderRequestPayload.enddate = ""+event.getFullYear() + ((event.getMonth()> 8) ? (event.getMonth()+ 1) : ('0' + (event.getMonth()+ 1))) +  ((event.getDate()> 9) ?event.getDate().toString() : ('0' +event.getDate()));     
     this.checkSelection();
   }

   checkSelection() {
     if(this.orderRequestPayload.appid != "" && this.orderRequestPayload.startdate != "" && this.orderRequestPayload.enddate !="")
        this.disableButton = false;
   }

} 
