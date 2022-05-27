import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PublicComponentsModule } from '@components/public-components.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PublicComponentsModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
