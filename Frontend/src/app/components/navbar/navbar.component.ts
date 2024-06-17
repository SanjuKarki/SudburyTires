import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() menu = new EventEmitter<string>();
  
  constructor(
    private router: Router
  ) { }

  logoutUser(){
    this.removeFromLocalStorage();
  }

  removeFromLocalStorage() {
    localStorage.removeItem('SignedIn');
    this.router.navigate(['login']);
  }

  getTiresByMenu(menu:string){
    debugger;
    this.menu.emit(menu);
  }

}
