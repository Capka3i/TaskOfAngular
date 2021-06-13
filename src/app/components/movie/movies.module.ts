import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from "./movies/movies.component";
import {MoviComponent} from "./movi/movi.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PageChangeComponent} from "./page-change/page-change.component";
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    MoviesComponent,
    MoviComponent,
    PageChangeComponent,
  ],
  exports: [
    MoviesComponent,
    MoviComponent,
    PageChangeComponent
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
