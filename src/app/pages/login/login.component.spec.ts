import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get error control', () => {
    expect(component.errorControl).toBeTruthy();
  });

  it('should submit form with valid values', () => {
    const valid_form = {
      'email': 'test@test.com',
      'password': '12345', 
      'reminder': 'true'
    };
    component.loginForm.setValue(valid_form);
    component.submitForm();
    expect(component.loginForm.valid).toEqual(true);
  });

  it('should submit form with invalid values', () => {
    const invalid_form = {
      'email': 'testtest.com',
      'password': '1234',
      'reminder': 'true'
    };
    component.loginForm.setValue(invalid_form);
    component.submitForm();
    expect(component.loginForm.valid).toEqual(false);
  });

});
