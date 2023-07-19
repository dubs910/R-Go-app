// cart.page.ts

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];
  filteredFoods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
    this.filteredFoods = this.foods;
  }

  getCategories() {
    this.categories = [
      {
        id: 0,
        label: 'All',
        icon: 'basket', 
        active: true,
      },
      {
        id: 1,
        label: 'Breakfast',
        icon: 'fast-food',
        active: false,
      },
      {
        id: 2,
        label: 'Lunch',
        icon: 'pizza', 
        active: false,
      },
      {
        id: 3,
        label: 'Snacks',
        icon: 'ice-cream', 
        active: false,
      },
    ];
  }

  goToDetailsPage(id: number) {
    this.router.navigate(['details', id]);
  }

  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.filteredFoods = this.foods.filter(
        (food) =>
          food.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          food.title2.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredFoods = this.foods;
    }
  }

  onCategoryClick(categoryId: number) {
    this.categories.forEach((category) => {
      category.active = category.id === categoryId;
    });

    if (categoryId === 0) {
      this.filteredFoods = this.foods;
    } else {
      this.filteredFoods = this.foods.filter((food) => food.categoryId === categoryId);
    }
  }
}
