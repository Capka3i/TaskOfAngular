import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../../service";
import {ActivatedRoute, Router} from "@angular/router";
import {IGerne, IMovie} from "../../../models";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  gernMovies: IMovie[]
  page: number = 1
  idGarne: any

  constructor(private genreService: GenreService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
        this.genreService.getByGenre(this.router.getCurrentNavigation()?.extras.state as IGerne).subscribe(value => this.gernMovies = value.results)
        this.idGarne = this.router.getCurrentNavigation()?.extras.state;
      }
    )

  }

  someFunc(number: number) {
    if (this.page >= 1) {
      this.page += number
      console.log(this.idGarne)
      this.activatedRoute.params.subscribe(() =>
        this.genreService.nextBackPage(this.page, this.idGarne).subscribe(value => this.gernMovies = value.results)
      )
    } else {
      this.page = 1
    }
  }

}
