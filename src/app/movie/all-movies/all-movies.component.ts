import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/Movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies:Movie[]
  video:any;
  query: string = '';
  search:any;
  constructor(private movieServices:MovieService) { }

  ngOnInit(): void {
    this.movieServices.getFilm().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
  handleId(id: string) {
    this.movieServices.trailer(id).subscribe((data: any) => {
      console.log(data);
      this.video = `https://www.youtube.com/embed/${data.results[0].key}`;
      console.log(this.video);
      window.scrollTo(0,0)
    });
  }
  searchMovie() {
    this.movieServices.Search(this.query).subscribe((results) => {
      this.movies = results.results;
      console.log(results.results);
    });
  }

}
