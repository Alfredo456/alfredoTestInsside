import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import users from '../../global/dataDummy/users.json';
import { NotificationsService } from '../../global/services/notifications.service';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userList = users;

  constructor(private formBuilder: FormBuilder, private _notificationsService: NotificationsService, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.generateForm();
  }

  public generateForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null, Validators.compose([Validators.required])),
    });
    console.log(this.userList);
  }

  login() {
    if (this.userList && this.userList.length > 0) {
      if (
        this.userList.find(
          (user: any) => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password
        )
      ) {
        console.log('entro');
        this._authService.getToken().subscribe(response => {
          console.log(response);
        });
      } else {
        this._notificationsService.showNotification('danger', 'Los datos suministrados son erroneos');
      }
    } else {
      this._notificationsService.showNotification('danger', 'Los datos suministrados son erroneos');
    }
  }
}
