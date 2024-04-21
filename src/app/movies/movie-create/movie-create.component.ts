import {Component, model, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AlertifyService} from "../../services/alertify.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  model: any = {};

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

  createMovie(form: NgForm) {
    this.http.get<any[]>('http://localhost:3000/movies').subscribe(data => {
      const lastMovie = data[data.length - 1];
      const id = lastMovie ? Number(lastMovie.id) + 1 : 1;
      console.log(this.model);
      console.log(form)
      /*const movie = {
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
      })*/
    })
  }

  log(value: any) {
    console.log(value)
  }
}
