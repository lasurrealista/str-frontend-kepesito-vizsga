import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  movie: Movie = new Movie();
  movieList$: Observable<Movie[]> = this.httpService.getMovieList();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

  }

  getMovies(): void {
    this.httpService.getMovieList();
  }

  deleteMovie(id: number): void {
    this.httpService.deleteMovie(id).subscribe(
      response =>console.log(response)
    );
  }

}
