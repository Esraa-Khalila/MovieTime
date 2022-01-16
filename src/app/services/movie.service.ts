import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  Url: string =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7';
  search: string =
    'https://api.themoviedb.org/3/search/movie?api_key=bc63f0c08d018cf26d4cf02b8efde4d7&query=';

  constructor(private http: HttpClient) {}

  getFilm(): Observable<any> {
    return this.http.get<any>(this.Url);
  }
  trailer(id: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bc63f0c08d018cf26d4cf02b8efde4d7`;
    return this.http.get<any>(url);
  }
  getOneMovie(id: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=bc63f0c08d018cf26d4cf02b8efde4d7&language=en-US`;

    return this.http.get<any>(url);
  }
  Search(query: string) {
    return this.http.get<any>(`${this.search}${query}`);
  }
}
