import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TpLoginComponent } from '@components/templates/tp-login/tp-login.component';
import { TpDashboardComponent } from '@components/templates/tp-dashboard/tp-dashboard.component';

import { HeaderComponent } from '@components/organisms/header/header.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { LogoLightComponent } from '@components/atoms/logo-light/logo-light.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TpLoginComponent,
    TpDashboardComponent,
    HeaderComponent,
    NavbarComponent,
    LogoLightComponent,
  ],
  exports: [
    TpLoginComponent,
    TpDashboardComponent,
  ]
})
export class PublicComponentsModule { }
