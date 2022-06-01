import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TpLoginComponent } from '@components/templates/tp-login/tp-login.component';
import { TpDashboardComponent } from '@components/templates/tp-dashboard/tp-dashboard.component';

import { HeaderComponent } from '@components/organisms/header/header.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { LogoLightComponent } from '@components/atoms/logo-light/logo-light.component';
import { ButtonMenuComponent } from './atoms/buttons/button-menu/button-menu.component';
import { MainTitleComponent } from './atoms/typography/main-title/main-title.component';
import { SecondaryTitleComponent } from './atoms/typography/secondary-title/secondary-title.component';
import { ButtonPrimaryComponent } from './atoms/buttons/button-primary/button-primary.component';
import { NavItemComponent } from './atoms/nav-item/nav-item.component';

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
    ButtonMenuComponent,
    MainTitleComponent,
    SecondaryTitleComponent,
    ButtonPrimaryComponent,
    NavItemComponent,
  ],
  exports: [
    TpLoginComponent,
    TpDashboardComponent,
  ]
})
export class PublicComponentsModule { }
