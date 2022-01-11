import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  movie;
  movieImg;
  video;
  id;

  constructor(private movieService: MovieService, private route: Router) {}
  ngOnInit(): void {
    let url = this.route.url;
    let arrUrl = url.split('/');
    let id = arrUrl[arrUrl.length - 1];
    this.id = id;

    this.movieService.getOneMovie(id).subscribe((movie) => {
      console.log(movie);

      this.movie = movie;
    });
  }
  handleId(id: string) {
    this.movieService.trailer(id).subscribe((data: any) => {
      console.log(data);
      this.video = `https://www.youtube.com/embed/${data.results[0].key}`;
      window.scrollTo(0, 0);
      console.log(this.video);
    });
  }
  close() {
    this.video = false;
  }
}
