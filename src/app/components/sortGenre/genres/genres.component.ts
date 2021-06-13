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

  constructor(private genreService: GenreService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() =>
      this.genreService.getByGenre(this.router.getCurrentNavigation()?.extras.state as IGerne).subscribe(value => this.gernMovies = value.results)
    )

  }


}
