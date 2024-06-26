import {Movie} from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [{
      id: 1,
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'jurassic-park.jpg',
      isPopular: true
    }, {
      id: 2,
      title: 'Movie 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'godzilla.jpg',
      isPopular: false
    }, {
      id: 3,
      title: 'Movie 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'the-hunger-games.jpg',
      isPopular: false
    }, {
      id: 4,
      title: 'Movie 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quidem.',
      imageUrl: 'rogue-one.jpg',
      isPopular: true
    }];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(m => m.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find(m => m.id === id);
  }
}
