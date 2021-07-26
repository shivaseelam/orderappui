import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderSearchComponent } from './order-search/order-search.component';


export const routes: Routes = [
    {
        path: 'ordersearch',
        component: OrderSearchComponent
      },
      {
        path: 'orderdetail/:appid/:orderconfnum',
        component: OrderDetailsComponent
      },
      {
        // redirect any unrecognized paths to the home page
          path: '**',
          redirectTo: 'ordersearch',
          pathMatch: 'full'
      },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }