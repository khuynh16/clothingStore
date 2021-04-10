import { Component, OnInit } from '@angular/core';

import { CLOTHING_DATABASE } from '../../../mock-clothing';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  clothingDB = CLOTHING_DATABASE;

  constructor() { }

  ngOnInit(): void {
  }

}
