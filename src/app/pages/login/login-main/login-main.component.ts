import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  loginForm: FormGroup;
  loginOk: any;
  
  loginData: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ]),
      //remember: new FormControl('',[]),
    });
   }

  login() : void{
    this.loginData = this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
    .subscribe(
      (res:any) => {
        this.loginOk = true;
        console.log(res);
        this.authService.setSessionData(res);
        this.router.navigateByUrl('/');
      },
      (err:any) => {
        this.loginOk = false;
        console.log('Error al iniciar sesión. Credenciales inválidas.');
      }
    );
  }

  ngOnInit(): void {
  }

}
