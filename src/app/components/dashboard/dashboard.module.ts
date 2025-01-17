import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component
import { DashboardComponent} from './dashboard.component';
//Module
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
