import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from './movie';
import { HightlightDirective } from './hightlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HightlightDirective, DisplayMoviesDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  movies: Movie[] = [
    new Movie(
      'The Shawshank Redemption',
      '1994',
      'https://picsum.photos/200/300',
      'Frank Darabont'
    ),
    new Movie(
      'The Godfather',
      '1972',
      'https://picsum.photos/200/300',
      'Francis Ford Coppola'
    ),
    new Movie(
      'The Dark Knight',
      '2008',
      'https://picsum.photos/200/300',
      'Christopher Nolan'
    ),
    new Movie(
      'The Godfather: Part II',
      '1974',
      'https://picsum.photos/200/300',
      'Francis Ford Coppola'
    ),
  ];

  status: string = 'Show' || 'Hide';
  displayMoviesList: boolean = true;

  toogleMovies() {
    this.displayMoviesList = !this.displayMoviesList;
    this.status = this.displayMoviesList ? 'Hide' : 'Show';
  }
}
