import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // male shirt from: http://clipart-library.com/clipart/5cRXqAxEi.htm
  // female shirt from: https://wdrfree.com/stock-vector/female-t-shirt
  // hat from: https://grandcast.com.hk/headwear-templates
  images = [
    '../../assets/images/male shirt template.jpeg',
    '../../assets/images/female shirt template.png',
    '../../assets/images/hat template.png',
    '../../assets/images/male shirt template.jpeg',
    '../../assets/images/male shirt template.jpeg',
    '../../assets/images/hat template.png',
    '../../assets/images/hat template.png',
    '../../assets/images/hat template.png',
    '../../assets/images/female shirt template.png',
  ];

  cards = [
    {
      'title': 'Men\'s T-shirt',
      'subtitle': 'Astronaut Design',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 19.99,
      'categories': ['Men', 'Shirts']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 59.99,
      'categories': ['Women', 'Shirts']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 35.99,
      'categories': ['Hats']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 80.99,
      'categories': ['Men', 'Shirts']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 40.99,
      'categories': ['Men', 'Shirts']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 29.99,
      'categories': ['Hats']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 39.99,
      'categories': ['Hats']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 49.99,
      'categories': ['Hats']
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'sizes': ['small', 'medium', 'large'],
      'colors': ['red', 'green', 'blue', 'purple', 'yellow'],
      'price': 19.99,
      'categories': ['Women', 'Shirts']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
