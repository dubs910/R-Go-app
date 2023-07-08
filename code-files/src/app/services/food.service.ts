import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";


@Injectable ({
    providedIn:'root',
})
export class FoodService {
    getFoods(): Food[]{
        return [
            {
                id: 1,
                title:'Spaghetti and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 1.png',
                description: 'ASDASD',
            },
        ];
    }
   getFood(id: number): Food | undefined{
    return this.getFoods().find((food) => food.id === id);
   }
}