import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TpLoginComponent } from '@components/templates/tp-login/tp-login.component';
import { TpDashboardComponent } from '@components/templates/tp-dashboard/tp-dashboard.component';

import { HeaderComponent } from '@components/organisms/header/header.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { LogoLightComponent } from '@components/atoms/logo-light/logo-light.component';
import { ButtonComponent } from './atoms/buttons/button/button.component';
import { MainTitleComponent } from './atoms/typography/main-title/main-title.component';
import { SecondaryTitleComponent } from './atoms/typography/secondary-title/secondary-title.component';
import { NavItemComponent } from './atoms/nav-item/nav-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TpLoginComponent,
    TpDashboardComponent,
    HeaderComponent,
    NavbarComponent,
    LogoLightComponent,
    ButtonComponent,
    MainTitleComponent,
    SecondaryTitleComponent,
    NavItemComponent,
  ],
  exports: [
    TpLoginComponent,
    TpDashboardComponent,
  ]
})
export class PublicComponentsModule { }
