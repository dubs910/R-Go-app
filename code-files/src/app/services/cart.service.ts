import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart-item.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items$ = new BehaviorSubject<CartItem[]>([
        {
            id: 1,
            name: 'Pork Mami w/ Egg + Tetra Drink',
            price: 90,
            quantity: 1,
            image: '../../assets/img/FoodNew/Bfast1.png'
        },
    ]);

    getCart(){
        return this.items$.asObservable();
    }

    addToCart(newItem: CartItem) {
        this.items$.next([...this.items$.getValue(), newItem]);
    }

    removeItem(id: number) {
        this.items$.next(this.items$.getValue().filter(item => item.id !== id));  
    }
}

