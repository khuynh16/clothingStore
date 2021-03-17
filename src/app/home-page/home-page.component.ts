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
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
    'card9'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
