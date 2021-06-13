import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../models";
import {imageUrl} from "../../../microElements";

@Component({
  selector: 'app-movi',
  templateUrl: './movi.component.html',
  styleUrls: ['./movi.component.css']
})
export class MoviComponent implements OnInit {

  @Input()
  movie: IMovie

  imageUrl = imageUrl

  constructor() {
  }

  ngOnInit(): void {
  }

}
