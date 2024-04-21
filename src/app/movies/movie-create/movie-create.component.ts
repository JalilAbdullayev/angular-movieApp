import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css',
  providers: [CategoryService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {
    console.log(title.value, description.value, imageUrl.value, categoryId.value)
  }
}
