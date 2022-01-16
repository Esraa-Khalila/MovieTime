import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser;
  user;
  open: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('token'));

    let userCredentials = JSON.parse(localStorage.getItem('token'));
    this.currentUser = userCredentials.user.username;

    return this.currentUser;
  }

  logout() {
    this.user = localStorage.removeItem('token');
  }

  navOpen() {
    this.open = !this.open;
  }
}
