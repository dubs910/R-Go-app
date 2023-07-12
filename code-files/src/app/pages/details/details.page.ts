import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: number;
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private toastCtrl: ToastController) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!
  }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id)!;
  }

  addItemToCart(){
    const cartitem: CartItem = {
      id: this.food.id,
      name: this.food.title2,
      price: this.food.price,
      image: this.food.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Food added to cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    await toast.present();
  }
}
