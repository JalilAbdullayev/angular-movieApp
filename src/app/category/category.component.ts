import {Component, OnInit} from '@angular/core';
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category = null;

  error: any;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    }, error => this.error = error);
  }

  displayAll: boolean = true;

  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
