import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule, CarouselModule} from 'ngx-bootstrap';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent, OrderTotalsComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    MatPaginatorModule,
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    CarouselModule
  ]
})
export class SharedModule { }
