import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/Users';
import { Observable } from 'rxjs';
import { Users } from '../types/login';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL: string = 'https://api.realworld.io/api/users';
  APIUrl: string = 'https://api.realworld.io/api/users/login';
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.URL, { user: user });
  }
  login(users: Users) {
    return this.http.post<Users>(this.APIUrl, { user: users });
  }
 
  
}
