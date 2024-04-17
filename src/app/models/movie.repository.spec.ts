import { MovieRepository } from './movie.repository';

describe('MovieRepository', () => {
  it('should create an instance', () => {
    expect(new MovieRepository()).toBeTruthy();
  });
});
