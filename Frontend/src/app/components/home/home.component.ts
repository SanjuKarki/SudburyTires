import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { TiresService } from 'src/app/services/tires.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
items: any;
tires:any;

constructor(
  private fb: FormBuilder,private location: Location,
  private router: Router,private apiService: AppService,private tiresService: TiresService
) {
 }
 
ngOnInit(){
  let currentUrl = this.location.path();
  let menuSelected = currentUrl.split('/')[1];
  this.getTires(menuSelected);
}

getTires(menuSelected:string){
    debugger;
    this.tiresService.getTires().subscribe((res)=>{
      debugger;
      this.addToLocalStorage(res);
      this.tires = res;
      if((menuSelected !='' || menuSelected !=undefined) && (menuSelected != "home")) {
      this.tires = res.filter(x => 
        (x.seasonType || '').toLowerCase() === (menuSelected || '').toLowerCase()
    );
  }
    }
        // response => {
        //   this.isValidUser=true;
        //   debugger;
        //   this.ErrorMsg = "User validated successfully"
        //   this.router.navigate(['home']);

        // }, // Handle success response
        // error => {
        //   this.isValidUser=false;
        //   this.ErrorMsg = error.error.message == undefined ? "Login failed!" : error.error.message+"!";
        // } // Handle error response
      );
}

// Add tire data to localStorage
addToLocalStorage(tire: any) {
  if(!localStorage.getItem('tires') || localStorage.getItem('tires') != JSON.stringify(tire) ){
  localStorage.setItem('tires', JSON.stringify(tire));
  }
}

getRows(tires: any[]): any[] {
  const itemsPerRow = 5; // Adjust this value based on the number of items you want per row
  const rows = [];

  for (let i = 0; i < tires.length; i += itemsPerRow) {
      rows.push(tires.slice(i, i + itemsPerRow));
  }

  return rows;
}

GetItemDetail(item:any){
  debugger;
  this.router.navigate(['tire-detail', item.id]);
  }
}
// Define your tire object
interface Tire {
  id: number;
  imagePath: string;
  name: string;
  brand: string;
  size: string;
  price: number;
  detail: string;
}