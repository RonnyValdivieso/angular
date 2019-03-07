import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let body = {
      email: this.email,
      password: this.password
    }
    this.authService.login(body)
      .subscribe((response:any) => {
        if (response.success === true) {
          console.log(response);
          this.authService.setToken(response.token);
          this.router.navigate(['/profile']);
        }
      });
  }

}
