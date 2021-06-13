import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {moviesById, moviesByIdEnd, ursMovies} from "../microElements";
import {Observable} from "rxjs";
import {INaked} from "../models/INaked";
import {IMovie} from "../models";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {

  }

  getMovies(id: number): Observable<INaked> {
    return this.httpClient.get<INaked>(ursMovies,{params:{
      'page': id+''
      }})
  }

  getDetails(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(moviesById + id + moviesByIdEnd)

  }

}
