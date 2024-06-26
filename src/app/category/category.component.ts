import {Component} from '@angular/core';
import {Category} from "../models/category";
import {CategoryRepository} from "../models/category.repository";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
// categories = ['Adventure', 'Romance', 'Sci-Fi', 'Drama'];
  categories: Category[];
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }
}
