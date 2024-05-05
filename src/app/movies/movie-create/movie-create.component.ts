import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  model: any = {
    categoryId: "-1"
  };

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  movieForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imageUrl: new FormControl('', [Validators.required]),
    categoryId: new FormControl('-1', [Validators.required])
  });

  get title() {
    return this.movieForm.get('title');
  }

  get description() {
    return this.movieForm.get('description');
  }

  get imageUrl() {
    return this.movieForm.get('imageUrl');
  }

  get categoryId() {
    return this.movieForm.get('categoryId');
  }

  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: '-1'
    })
  }

  createMovie() {
    const movie = {
      id: 0,
      title: this.movieForm.value.title,
      description: this.movieForm.value.description,
      imageUrl: this.movieForm.value.imageUrl,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: this.movieForm.value.categoryId
    }

    this.movieService.createMovie(movie).subscribe(() => {
      this.router.navigate(['/movies']);
    })
  }
}
