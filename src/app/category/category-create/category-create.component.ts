import {Component} from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css',
  providers: [CategoryService]
})
export class CategoryCreateComponent {
  constructor(private categoryService: CategoryService, private router: Router) {
  }

  createCategory(name: string) {
    const category: Category = {
      name: name
    }

    this.categoryService.createCategory(category).subscribe(() => {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    })
  }
}
