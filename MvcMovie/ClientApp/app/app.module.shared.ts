
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent } from './components/movies/createmovie.component';
import { DeleteMovieComponent } from './components/movies/deletemovie.component';
import { EditMovieComponent } from './components/movies/editmovie.component';
import { MovieDetailComponent } from './components/movies/moviedetails.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MoviesComponent,
        CreateMovieComponent,
        DeleteMovieComponent,
        EditMovieComponent,
        MovieDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'movies', component: MoviesComponent },
            { path: 'createmovie', component: CreateMovieComponent },
            { path: 'deletemovie/:id', component: DeleteMovieComponent },
            { path: 'editmovie/:id', component: EditMovieComponent },
            { path: 'moviedetails/:id', component: MovieDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
