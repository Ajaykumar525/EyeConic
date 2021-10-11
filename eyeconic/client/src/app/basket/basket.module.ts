import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    MatIconModule,
    BasketRoutingModule,
    SharedModule
  ]
})
export class BasketModule { }
