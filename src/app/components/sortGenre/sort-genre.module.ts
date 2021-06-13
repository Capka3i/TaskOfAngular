import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortGenreRoutingModule } from './sort-genre-routing.module';
import { GenresComponent } from './genres/genres.component';
import {MoviesModule} from "../movie/movies.module";


@NgModule({
  declarations: [
    GenresComponent,
  ],
  imports: [
    CommonModule,
    SortGenreRoutingModule,
    MoviesModule
  ]
})
export class SortGenreModule { }
