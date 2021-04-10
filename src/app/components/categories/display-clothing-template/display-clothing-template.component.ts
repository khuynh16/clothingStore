import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CLOTHING_DATABASE } from '../../../mock-clothing';

@Component({
  selector: 'app-display-clothing-template',
  templateUrl: './display-clothing-template.component.html',
  styleUrls: ['./display-clothing-template.component.css']
})
export class DisplayClothingTemplateComponent implements OnInit {
  clothingDB = CLOTHING_DATABASE;
  currentRoute;

  constructor(private route: ActivatedRoute) {
    this.currentRoute = route.snapshot.url[1].path;
  }

  ngOnInit(): void {
    console.log(this.currentRoute);
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
    }
  }

}
