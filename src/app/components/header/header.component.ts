import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu = () => {
    let navLinks : any = document.getElementById("navLinks");
    navLinks.style.display = "block";
    navLinks.style.right = "0"
  }

  hideMenu = () => {
    let navLinks : any = document.getElementById("navLinks");
    navLinks.style.display = "none";
    navLinks.style.right = "-200px"
  }
}
