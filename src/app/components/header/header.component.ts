import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onAuthPage: boolean;
  currentRoute: string;

  constructor(private route: ActivatedRoute) {
    this.currentRoute = route.snapshot.url[0].path;
  }

  ngOnInit(): void {
    this.onAuthPage = false;
    if (this.currentRoute === 'sign-in' || this.currentRoute === 'sign-up') {
      this.onAuthPage = true;
    }
  }
}
