import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CLOTHING_DATABASE } from '../../mock-clothing';

@Component({
  selector: 'app-display-clothing-template',
  templateUrl: './display-clothing-template.component.html',
  styleUrls: ['./display-clothing-template.component.css']
})
export class DisplayClothingTemplateComponent implements OnInit {
  clothingDB = CLOTHING_DATABASE;
  currentRoute;

  constructor(private route: ActivatedRoute) {
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

}
