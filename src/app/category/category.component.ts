import { Component } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
categories = ['Adventure', 'Romance', 'Sci-Fi', 'Drama'];
}
