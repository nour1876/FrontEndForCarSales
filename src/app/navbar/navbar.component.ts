import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
id:any;
  constructor() { }

  ngOnInit(): void {
this.id = localStorage.getItem('id');
  }

}
