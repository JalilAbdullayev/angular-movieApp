import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  error: string;

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private http: HttpClient,
              private alertify: AlertifyService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {
    if (!title.value || !description.value || !imageUrl.value || categoryId.value === '-1') {
      this.alertify.error('All fields are required!');
      return;
    }

    if (title.value.length < 5) {
      this.alertify.error('Title must be at least 5 characters long!');
      return;
    }

    if (description.value.length < 10 || description.value.length > 50) {
      this.alertify.error('Description must be between 10 and 50 characters long!');
      return;
    }

    const extensions = ['jpg', 'jpeg', 'png'];
    const extension = imageUrl.value.split('.').pop();
    if (extensions.indexOf(extension) === -1) {
      this.alertify.error('Supported image extensions: jpg, jpeg, png');
      return;
    }

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
