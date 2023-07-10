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
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Snack',
            },
            {
                id: 2,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 3,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 4,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },            {
                id: 5,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 6,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 7,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 8,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 9,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 10,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 11,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 12,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 13,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 14,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 15,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 16,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 17,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
            {
                id: 18,
                title:'S1 Combo',
                title2:'Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack.png',
                description: 'Breakfast',
            },
        ];
    }
   getFood(id: number): Food | undefined{
    return this.getFoods().find((food) => food.id === id);
   }
}