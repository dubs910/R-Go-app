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
                title:'S1',
                title2:'Pinoy Style Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/Package 1/Snack1.png',
                description: 'Experience the savory delight of Pinoy-style Spaghetti with Tetra Juice Pack. A flavorful fusion that satisfies and tantalizes, this dish is a true Pinoy favorite.',
            },
            {
                id: 2,
                title:'S2',
                title2:'Chicken Sandwich + Tetra Drink',
                price: 90,
                image: '../../assets/img/Package 1/Snack2.png',
                description: 'Breakfast',
            },
            {
                id: 3,
                title:'S3',
                title2:'Bacon Egg Burger + Tetra Drink',
                price: 80,
                image: '../../assets/img/Package 1/Snack3.png',
                description: 'Breakfast',
            },
            {
                id: 4,
                title:'S4',
                title2:'Hotdog Sandwich + Tetra Drink',
                price: 95,
                image: '../../assets/img/Package 1/Snack4.png',
                description: 'Breakfast',
            },            
            {
                id: 5,
                title:'S5',
                title2:'Two Pizza Slices + Tetra Drink',
                price: 85,
                image: '../../assets/img/Package 1/Snack5.png',
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