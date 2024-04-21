import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {
    this.http.get<any[]>('http://localhost:3000/movies').subscribe(data => {
      const lastMovie = data[data.length - 1];

      const id = lastMovie ? Number(lastMovie.id) + 1 : 1;

      const movie = {
        id: id.toString(),
        title: title.value,
        description: description.value,
        imageUrl: imageUrl.value,
        isPopular: false,
        datePublished: new Date().getTime(),
        categoryId: categoryId.value
      }

      this.movieService.createMovie(movie).subscribe(data => {
        this.router.navigate(['/movies', data.id]);
      })
    })
  }
}
