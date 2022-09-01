import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',]
})
export class NavbarComponent implements OnInit {
  faCartShopping=faCartShopping;
  faCog=faCog
  faSearch=faSearch
  constructor() { }

  ngOnInit(): void {
  }

}
