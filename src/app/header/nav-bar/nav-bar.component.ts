import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser:any
  user
  loggedIn:boolean
  open:boolean = false;
  
  constructor() { 
    this.loggedIn = this.loggedIn = !localStorage.getItem('token');
  }

  ngOnInit(): void {
    let userCredentials = JSON.parse(localStorage.getItem('token'));
    this.currentUser = userCredentials.user.username;
    return this.currentUser,
    

    this.user = JSON.parse(localStorage.getItem('token')),
    console.log (this.user)
    
  }
  logout(){
    this.user=localStorage.removeItem('token')
    console.log (this.user)
  }
  

  navOpen() {
    this.open = !this.open;
  }

}
