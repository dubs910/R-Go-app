import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartListingPage } from './cart-listing.page';

describe('CartListingPage', () => {
  let component: CartListingPage;
  let fixture: ComponentFixture<CartListingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
