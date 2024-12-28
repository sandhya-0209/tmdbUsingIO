import { Component } from '@angular/core';
import { Imovie } from './shared/models/movies';
import { movieArray } from './shared/const/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tmdbUsingIO';

  moviesArray : Array<Imovie> = movieArray;
}
