import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CartService } from 'src/app/services/cart.service';
import { CLOTHING_DATABASE } from '../../mock-clothing';

@Component({
  selector: 'app-display-clothing-template',
  templateUrl: './display-clothing-template.component.html',
  styleUrls: ['./display-clothing-template.component.css']
})
export class DisplayClothingTemplateComponent implements OnInit {
  clothingDB = CLOTHING_DATABASE;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  currentRoute;

  constructor(private route: ActivatedRoute, 
    public cartService: CartService,
    public dialog: MatDialog) {
    // assign current route to current path, e.g. 'home' for /home and 'men'
    // for /categories/men.
    // without if else check, program will throw an error
    if (this.route.snapshot.url.length === 1) {
      this.currentRoute = route.snapshot.url[0].path;
    }
    else if (this.route.snapshot.url.length === 2) {
      this.currentRoute = route.snapshot.url[1].path;
    }
  }

  ngOnInit(): void {
    switch (this.currentRoute) {
      case 'men':
        this.clothingDB = this.clothingDB.filter(clothing => clothing.categories.includes('men'));
        break;
      case 'women':
        this.clothingDB = this.clothingDB.filter(clothing => clothing.categories.includes('women'));
        break;
      case 'hats':
        this.clothingDB = this.clothingDB.filter(clothing => clothing.categories.includes('hats'));
        break;
      case 'pants':
        this.clothingDB = this.clothingDB.filter(clothing => clothing.categories.includes('pants'));
        break;
      case 'shirts':
        this.clothingDB = this.clothingDB.filter(clothing => clothing.categories.includes('shirts'));
        break;
      case 'socks':
        this.clothingDB = this.clothingDB.filter(clothing => clothing.categories.includes('socks'));
        break;
      default:
        this.clothingDB = this.clothingDB;
    }
  }

  addToCart(title, subtitle, imageUrl, price, size, color, quantity) {

    // modal popup description of order and direction to take afterwards (continue shopping
    // or go to shopping cart)
    const dialogRef = this.dialog.open(AddToCartModal, {
      width: '600px',
      data: {
        title: title, 
        subtitle: subtitle,
        imageUrl: imageUrl,
        price: price,
        size: size.value,
        color: color.value,
        quantity: quantity
      }
    });

    this.cartService.addToCart(title, subtitle, imageUrl, price, size.value, color.value, quantity);
  }
}

// component for modal
@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.html',
  styleUrls: ['./add-to-cart-modal.css']
})
export class AddToCartModal {

  constructor(
    public dialogRef: MatDialogRef<AddToCartModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  toShoppingCart(): void {
    this.dialogRef.close();
    this.router.navigate(['cart']);
  }


}
