import {Routes} from "@angular/router";

export const rout: Routes = [{
  path: '',
  loadChildren: () => import('../components/movie/movies.module').then(m => m.MoviesModule)
}, {
  path: ':genre',
  loadChildren: () => import('../components/sortGenre/sort-genre.module').then(m => m.SortGenreModule)
}, {
  path: 'popular/:id', loadChildren: () => import('../components/details/details.module').then(m => m.DetailsModule)
}, {
  path: ':genre/popular/:id', loadChildren: () => import('../components/details/details.module').then(m => m.DetailsModule)
}
]
