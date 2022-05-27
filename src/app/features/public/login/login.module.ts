import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PublicComponentsModule } from '@components/public-components.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    PublicComponentsModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
