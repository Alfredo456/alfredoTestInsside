import { AuthComponent } from './auth.component';
import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
];
