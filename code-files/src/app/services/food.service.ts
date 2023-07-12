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
                title:'B1',
                title2:'Pork Mami w/ Egg + Tetra Drink',
                price: 90,
                image: '../../assets/img/FoodNew/Bfast1.png',
                description: 'Savor the perfect blend of flavors with our Pork Mami featuring a delightful addition of a perfectly cooked egg, accompanied by a refreshing Tetra Drink to complete your meal.',
            },
            {
                id: 2,
                title:'B2',
                title2:'Beef Tapa w/ Egg + Tetra Drink',
                price: 120,
                image: '../../assets/img/FoodNew/Bfast2.png',
                description: 'Indulge in the rich and savory goodness of our Beef Tapa paired with a refreshing Tetra Drink, creating a satisfying and flavorful combination for a delightful meal experience.',
            },
            {
                id: 3,
                title:'B3',
                title2:'Fried Tofu w/ vegetables',
                price: 100,
                image: '../../assets/img/FoodNew/Bfast3.png',
                description: 'Experience the harmony of flavors with our delectable Fried Tofu with Vegetables, featuring crispy tofu complemented by a medley of fresh and vibrant vegetables. Pair it with your drink of choice for a wholesome and satisfying dining experience.',
            },
            {
                id: 4,
                title:'B4',
                title2:'Siomai Rice + Tetra Drink',
                price: 80,
                image: '../../assets/img/FoodNew/Bfast4.png',
                description: 'Delight in our flavorful Siomai Rice, featuring succulent steamed dumplings and fragrant rice. Complete your meal with a refreshing drink, creating a satisfying combination of taste and refreshment.',
            },
            
            {
                id: 5,
                title:'L1',
                title2:'Chicken Fillet w/ Soup + Tetra Drink',
                price: 230,
                image: '../../assets/img/FoodNew/Lunch1.png',
                description: 'Savor our juicy Chicken Fillet paired with a refreshing drink for a delightful meal experience.',
            },
            {
                id: 6,
                title:'L2',
                title2:'Beef & Egg Ramen + Tetra Drink',
                price: 150,
                image: '../../assets/img/FoodNew/Lunch2.png',
                description: 'Indulge in our Beef & Egg Ramen for a satisfying lunch, accompanied by a refreshing drink.',
            },
            {
                id: 7,
                title:'L3',
                title2:'Pork Steak + Tetra Drink',
                price: 150,
                image: '../../assets/img/FoodNew/Lunch3.png',
                description: 'Experience the succulent flavors of our Pork Steak, perfectly grilled to perfection. Enhance your dining experience with a refreshing drink of your choice.',
            },
            {
                id: 8,
                title:'L4',
                title2:'Pork Fillet + Tetra Drink',
                price: 240,
                image: '../../assets/img/FoodNew/Lunch4.png',
                description: 'Enjoy a delicious lunch with our tender Pork Fillet, paired with a refreshing drink for a satisfying meal.',
            },
            {
                id: 9,
                title:'L5',
                title2:'Caldareta w/ Egg + Tetra Drink',
                price: 200,
                image: '../../assets/img/FoodNew/Lunch5.png',
                description: 'Delight in the rich and flavorful Caldareta, a hearty dish featuring tender meat simmered in a savory sauce. Accompanied by a perfectly cooked egg and served with your choice of drink, its a satisfying meal that will leave you wanting more.',
            },
            {
                id: 10,
                title:'S1',
                title2:'Pinoy Style Spaghetti + Tetra Drink',
                price: 75,
                image: '../../assets/img/FoodNew/Snack1.png',
                description: 'Experience the savory delight of Pinoy-style Spaghetti with Tetra Juice Pack. A flavorful fusion that satisfies and tantalizes, this dish is a true Pinoy favorite.',
            },
            {
                id: 11,
                title:'S2',
                title2:'Chicken Sandwich + Tetra Drink',
                price: 90,
                image: '../../assets/img/FoodNew/Snack2.png',
                description: 'Relish in the delightful flavors of our Chicken Sandwich, featuring juicy grilled chicken served on a soft bun. Complete your meal with a refreshing drink of your choice for a satisfying combination.',
            },
            {
                id: 12,
                title:'S3',
                title2:'Bacon Egg Burger + Tetra Drink',
                price: 80,
                image: '../../assets/img/FoodNew/Snack3.png',
                description: 'Indulge in the mouthwatering delight of our Bacon Egg Burger, featuring sizzling bacon, a perfectly cooked egg, and a juicy patty. Accompanied by a refreshing drink, its a flavor-packed meal that hits all the right spots.',
            },
            {
                id: 13,
                title:'S4',
                title2:'Hotdog Sandwich + Tetra Drink',
                price: 95,
                image: '../../assets/img/FoodNew/Snack4.png',
                description: 'Enjoy a classic favorite with our simple Hotdog Sandwich, a delicious combination of a juicy hotdog nestled in a soft bun. Complete your meal with a refreshing drink for a satisfying treat.',
            },            
            {
                id: 14,
                title:'S5',
                title2:'Two Pizza Slices + Tetra Drink',
                price: 85,
                image: '../../assets/img/FoodNew/Snack5.png',
                description: 'Satisfy your cravings with two mouthwatering slices of pizza, bursting with cheesy goodness. Pair it with a refreshing Tetra Drink for a delectable and satisfying combo.',
            },
        ];
    }
   getFood(id: number): Food | undefined{
    return this.getFoods().find((food) => food.id === id);
   }
}