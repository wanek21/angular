import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isBurgerClicked = false;
  constructor() { }

  ngOnInit(): void {
  }

  clickBurger() {
    this.isBurgerClicked = !this.isBurgerClicked;
  }


}
