import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  apiUrl = 'https://tr360-frontend-exam-april.azurewebsites.net/lasurrealista/movies';

  getMovieList(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.apiUrl);

  }

  deleteMovie(id: number): Observable<Movie> {
      return this.http.delete<Movie>(`${this.apiUrl}/${id}`);
  }
}
