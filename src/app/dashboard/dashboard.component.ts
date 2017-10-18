import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  active(element) {
    document.getElementById('accueil').className = '';
    document.getElementById('Ingenierie').className = '';
    document.getElementById('management').className = '';
    document.getElementById(element).className = 'active';
  }
}
