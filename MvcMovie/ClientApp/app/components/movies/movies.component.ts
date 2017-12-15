import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';



@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

    public movies: Movie[];
    public moviesBak: Movie[];
    public searchTerm: string;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Movies').subscribe(result => {
            this.movies = result.json() as Movie[];
        }, error => console.error(error));
    }

    getMovie(id: number) {
        let movie = this.movies.find(m => m.ID == id);
        if (movie) {
            console.log("Selected: " + movie.Title);
        }
    }
    filter() {
        this.movies = this.moviesBak;

        if (this.searchTerm == "") {
            //Do nothing 
        } else {
            this.movies = this.movies.filter(m => m.Title.includes(this.searchTerm) || m.Genre.includes(this.searchTerm));
        }
    }
}

interface Movie {
    ID: number;
    Title: string;
    ReleaseDate: number;
    Price: string;
    Genre: string;
    Rating: string;
    Review: Review;
}

interface Review {
    ID: number;
    movieID: number;
    Name: string;
    Comment: string;
}
