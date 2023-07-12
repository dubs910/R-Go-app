import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { CartItemsComponent } from "./cart-items.component";

@NgModule({
    declarations: [CartItemsComponent],
    imports: [CommonModule, IonicModule],
    exports: [CartItemsComponent],
})
export class CartItemsModule {}