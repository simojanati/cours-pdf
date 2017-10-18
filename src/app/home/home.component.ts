import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
    //window.location.reload();
  }

  active(element) {
    document.getElementById('accueil').className = '';
    document.getElementById('Ingenierie').className = '';
    document.getElementById('management').className = '';
    document.getElementById(element).className = 'active';
}

}
