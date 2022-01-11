import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  myForm = new FormGroup({
    userName: new FormControl(''),
    opinion: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    localStorage.setItem('form', JSON.stringify(this.myForm.value));
  }
}
