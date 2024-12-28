import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movieObj !: Imovie;
  constructor() { }
  ngOnInit(): void {
  }

}
