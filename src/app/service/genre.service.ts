import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {someUrl, urlGanreMoviesEndTest, urlGenre, urlGenreMovies, urlGenreMoviesEnd} from "../microElements/urlGenre";
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

  getByGenre(gernt: IGerne): Observable<INaked> {
    return this.httpClient.get<INaked>(urlGenreMovies + gernt?.id + urlGenreMoviesEnd)
  }

  nextBackPage(page: number, gernt: any): Observable<INaked> {
    console.log(page, gernt)
    return this.httpClient.get<INaked>(urlGanreMoviesEndTest + page + someUrl + gernt.id + urlGenreMoviesEnd)
  }
}
