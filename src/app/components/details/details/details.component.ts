import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../../service";
import {IMovie} from "../../../models";
import { imageUrl } from 'src/app/microElements';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movi: IMovie
  imageUrl = imageUrl


  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      this.moviesService.getDetails(params.id).subscribe(value => this.movi = value))
    console.log(this.movi)
  }

}
