import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  backEndErrors: any;
  constructor(private authService: AuthService, private router: Router) {}
  @Output() username = new EventEmitter();
  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.form.value).subscribe({
      next: (users) => {
        localStorage.setItem('token', JSON.stringify(users));

        this.router.navigateByUrl('/');
        
      },

      error: (error) =>
        (this.backEndErrors = Object.entries(error.error.errors)),
    });
  }
}
