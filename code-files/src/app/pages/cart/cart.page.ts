import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

  getCategories() {
   this.categories = [
    {
      id: 1,
      label: 'All',
      image: '../../assets/icon/dish.png',
      active: true,
    },
    {
      id: 2,
      label: 'Breakfast',
      image: '../../assets/icon/pancake.png',
      active: false,
    },
    {
      id: 3,
      label: 'Lunch',
      image: '../../assets/icon/rice.png',
      active: false,
    },
    {
      id: 4,
      label: 'Snacks',
      image: '../../assets/icon/snack.png',
      active: false,
    },
  ];  
}
}
