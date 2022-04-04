import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MockComponent, MockDirective } from 'ng-mocks';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from '../../global/services/notifications.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, MockComponent(MatFormField), MockDirective(MatLabel)],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provider: NotificationsService,
          useValue: () => {
            showNotification: () => {};
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should create form with null values', () => {
    expect(component.loginForm.value).toEqual({ email: null, password: null });
  });

  describe('login', () => {
    /*    it('should success', () => {
      const consoleSpy = spyOn(console, 'log');
      component.loginForm.get('email')?.setValue('alfredo.casique456@gmail.com');
      component.loginForm.get('password')?.setValue('123');

      component.login();
      expect(consoleSpy).toHaveBeenCalledWith('entro');
    });*/

    it('should Error', () => {
      const consoleSpy = spyOn(component['_notificationsService'], 'showNotification');
      component.loginForm.get('email')?.setValue('alfredo.casique456@gmail.com');
      component.loginForm.get('password')?.setValue('123123123123');

      component.login();
      expect(consoleSpy).toHaveBeenCalledWith('danger', 'Los datos suministrados son erroneos');
    });

    it('should Error no users', () => {
      component.userList = null;
      const consoleSpy = spyOn(component['_notificationsService'], 'showNotification');
      component.loginForm.get('email')?.setValue('alfredo.casique456@gmail.com');
      component.loginForm.get('password')?.setValue('123123123123');

      component.login();
      expect(consoleSpy).toHaveBeenCalledWith('danger', 'Los datos suministrados son erroneos');
    });
  });
});
