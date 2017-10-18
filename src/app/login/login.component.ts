import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public loading: boolean = false;
  public msgError: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      if (this.username === "nabil" && this.password === "1234") {
        sessionStorage.setItem('currentUser', this.username);
        this.router.navigate(['/dashboard']);
        window.location.reload();
      } else {
        this.msgError = 'Nom d\'utilisateur ou le mot de passe est incorrect';
        setTimeout(() => { this.msgError = ''; }, 3000);
      }
      this.loading = false;
    }, 3000);
  }

}
