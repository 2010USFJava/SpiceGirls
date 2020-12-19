import { Component, OnInit, ViewEncapsulation, 
AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  public chicked = false;

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(event):void{
    event.preventDefault();
    event.stopPropagation();
    this.chicked=true;
  }

  @HostListener('document:click', ['event'])
  private clickedOutside(event):void{
   
  }


}
