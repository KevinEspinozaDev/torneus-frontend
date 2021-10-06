import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  loginForm: FormGroup;
  loginOk: any;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      nombreUsuario: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ]),
      remember: new FormControl('',[]),
    });
   }

  login() : any{
    this.loginOk = true;
    /*
    this.loginIn = true;
    this.authService.login(this.loginForm.controls.dni.value, this.loginForm.controls.userPass.value)
      .subscribe(
        res => {
          this.loginIn = false;
          this.authService.setDataLogin(res.data.access_token);
          this.router.navigateByUrl('');
        },
        err => {
          this.loginIn = false;
          console.log(err);
          this.loginError = err.message;
        }

    ) */
  }

  ngOnInit(): void {
  }

}
