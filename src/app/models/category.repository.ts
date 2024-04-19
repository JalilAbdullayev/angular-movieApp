import {Category} from "./category";

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
