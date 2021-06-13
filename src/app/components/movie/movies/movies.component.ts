import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../../service";
import {IMovie} from "../../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[]
  page: number = 1


  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(log => {
      console.log(this.activatedRoute)
      this.moviesService.getMovies(this.page).subscribe(({results}) => this.movies = results)
    })
  }

  ngOnInit(): void {

  }


  someFunc(number: number) {
    if (this.page >= 1) {
      this.page += number
      this.activatedRoute.params.subscribe(log => {
        console.log(this.activatedRoute)
        this.moviesService.getMovies(this.page).subscribe(({results}) => this.movies = results)
      })
    } else {
      this.page = 1
    }

  }
}
