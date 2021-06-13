import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from "./movies/movies.component";
import {MoviComponent} from "./movi/movi.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    MoviesComponent,
    MoviComponent,
  ],
  exports: [
    MoviesComponent,
    MoviComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    AppModule
  ]
})
export class MoviesModule {
}
