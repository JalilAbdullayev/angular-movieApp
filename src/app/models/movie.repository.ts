import {Movie} from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'jurassic-park.jpg'
    }, {
      id: 2,
      title: 'Movie 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'godzilla.jpg'
    }, {
      id: 3,
      title: 'Movie 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'the-hunger-games.jpg'
    }, {
      id: 4,
      title: 'Movie 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'rogue-one.jpg'
    }];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find(m => m.id === id);
  }
}
