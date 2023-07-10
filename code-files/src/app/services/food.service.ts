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
                description: 'Snack',
            },
            {
                id: 2,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 3,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 4,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },            {
                id: 5,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 6,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 7,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 8,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 9,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
            {
                id: 10,
                title:'Clubhouse and Tetra juice',
                price: 75,
                image: '../../assets/img/Package 1/Choice 2.png',
                description: 'Breakfast',
            },
        ];
    }
   getFood(id: number): Food | undefined{
    return this.getFoods().find((food) => food.id === id);
   }
}