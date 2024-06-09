import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ErrorMsg: string ="";
  isValidUser: boolean = false;
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,private authService: AuthService,
    private router: Router,private apiService: AppService
  ) { }

  ngOnInit(){
    if(this.authService.isSignedIn){
      this.router.navigate(['home']);
    }
  }

  get password() { return this.loginForm.controls['password']; }
  get username() {
    return this.loginForm.controls['username'];
  }

  loginUser(){
    debugger;
    const { username, password } = this.loginForm.value;
    this.apiService.login(this.loginForm.value)
      .subscribe(
        response => {
          this.isValidUser=true;
          debugger;
          this.ErrorMsg = "User validated successfully"
          this.addToLocalStorage();
          this.router.navigate(['home']);

        }, // Handle success response
        error => {
          this.isValidUser=false;
          this.ErrorMsg = error.error.message == undefined ? "Login failed!" : error.error.message+"!";
        } // Handle error response
      );
  }

  // Add tire data to localStorage
addToLocalStorage() {
  localStorage.setItem('SignedIn', 'true');
}


  }