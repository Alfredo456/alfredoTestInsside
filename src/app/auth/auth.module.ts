import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, MatInputModule, RouterModule.forChild(AuthRoutes), ReactiveFormsModule],
})
export class AuthModule {}
