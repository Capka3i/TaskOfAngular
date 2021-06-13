import {Component, OnInit} from '@angular/core';
import {GenreService, MoviesService} from "../../../service";
import {ActivatedRoute, Router} from "@angular/router";
import {IGerne} from "../../../models";

@Component({
  selector: 'app-genre-buttoms',
  templateUrl: './genre-buttoms.component.html',
  styleUrls: ['./genre-buttoms.component.css']
})
export class GenreButtomsComponent implements OnInit {


  gerne: IGerne[]

  constructor(private moviesService: MoviesService,
              private gerneService: GenreService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.gerneService.getGenre().subscribe(({genres}) => this.gerne = genres)
  }

  showGenre(someGern: IGerne) {
    this.router.navigate([someGern.name], {relativeTo: this.activatedRoute, state: someGern})
  }
}
