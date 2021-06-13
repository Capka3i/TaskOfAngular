import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './appHeadComponents/appComponen/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {rout} from "./microElements";
import {GenreButtomsComponent} from './components/genreButton/genre-buttoms/genre-buttoms.component';
import {DetailsComponent} from './components/details/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreButtomsComponent,
    DetailsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rout),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
