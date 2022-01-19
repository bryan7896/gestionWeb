import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './components/login/login.module';
import { ForgotPasswordModule } from './components/forgot-password/forgot-password.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RouterModule,
    CommonModule,
    LoginModule,
    ForgotPasswordModule
  ],
})
export class AuthModule { }
