import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: number;
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!
  }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id)!;
  }
}
