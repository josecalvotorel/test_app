import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public readonly translateService: TranslateService,
    public validationService: ValidationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validationService.EMAIL_PATTERN)]],
      password: ['', [Validators.required, Validators.minLength(this.validationService.PASSWORD_MIN_CHAR)]],
      reminder: ['false']
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      console.log(this.translateService.instant('COMMON.OK'));
      console.log(this.translateService.instant('LOGIN.SUBMITED_FIELDS'));
      console.log(this.loginForm.value);
    }
  }
}
