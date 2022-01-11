import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';

@Component({
  selector: 'app-last-movie',
  templateUrl: './last-movie.component.html',
  styleUrls: ['./last-movie.component.css'],
})
export class LastMovieComponent implements OnInit {
  movie: any;
  movieImg;
  video: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getFilm().subscribe((page: any) => {
      this.movie = page.results[0];
      this.movieImg = `http://image.tmdb.org/t/p/w185/${page.results[0].poster_path}`;
    });
  }
  handleId(id: string) {
    this.movieService.trailer(id).subscribe((data: any) => {
      console.log(data);
      this.video = `https://www.youtube.com/embed/${data.results[0].key}?autoplay=1`;
    });
  }
  close(){
    this.video=false
  }
}
