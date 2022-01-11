import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FormGroup , FormControl} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username : new FormControl,
    email: new FormControl,
    password : new FormControl
  });
  backEndErrors:any
  constructor( private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.addUser(this.form.value).subscribe({
      next: (user) => {
        localStorage.setItem('token', JSON.stringify(user));
        this.router.navigateByUrl('/login');
      
      },
      error: (error) =>
        (this.backEndErrors = Object.entries(error.error.errors)),
    });
  }
}
