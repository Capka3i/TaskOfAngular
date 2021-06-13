import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../../service";
import {IMovie} from "../../../models";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[]


  constructor(private moviesService: MoviesService,
  ) {

  }

  ngOnInit()
    :
    void {
    this.moviesService.getMovies().subscribe(({results}) => this.movies = results)


  }


}
