import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdBpiZzXUFWdQo93XDdjf2hk52qmuJXGM'
    })
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
