import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urlGenre, urlGenreMovies, urlGenreMoviesEnd} from "../microElements/urlGenre";
import {Observable} from "rxjs";
import {IGerne, INaked} from "../models";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {

  }

  getGenre(): Observable<INaked> {
    return this.httpClient.get<INaked>(urlGenre)
  }

  getByGenre(gernt: IGerne):Observable<INaked> {
    return this.httpClient.get<INaked>(urlGenreMovies + gernt?.id + urlGenreMoviesEnd)
  }
}
