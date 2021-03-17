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

  sizes = ['small', 'medium', 'large'];

  cards = [
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
      'context': 'this is a paragraph',
      'sizes': ['small', 'medium', 'large'],
      'price': 19.99
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
    {
      'title': 'example title',
      'subtitle': 'subtitle here',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
