import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortGenreRoutingModule } from './sort-genre-routing.module';
import { GenresComponent } from './genres/genres.component';
import { GanreComponent } from './ganre/ganre.component';
import {MoviesModule} from "../movie/movies.module";


@NgModule({
  declarations: [
    GenresComponent,
    GanreComponent
  ],
  imports: [
    CommonModule,
    SortGenreRoutingModule,
    MoviesModule
  ]
})
export class SortGenreModule { }
