import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { TiresService } from 'src/app/services/tires.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
items: any;
tires:any;

constructor(
  private fb: FormBuilder,
  private router: Router,private apiService: AppService,private tiresService: TiresService
) {
  this.items = [
    {  label: 'On Special',  routerLink: '/' },
    {  label: 'Tires',   routerLink: '/' },
    {  label: 'Brands',   routerLink: '/' },
    {  label: 'Wheels',   routerLink: '/' },
    // Add more menu items as needed
  ];

 }
 
ngOnInit(){
//   this.tires = [
//     { id:1, name: "VISION GV8 INVADER", imagePath: "assets/imgs/80.jpg", detail:"fsdh sdfhsdlisd" },
//     { name: "Another Tire Name", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire Name", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire 2", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire Name", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire Name", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire 2", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire Name", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire Name", imagePath: "assets/imgs/80.jpg" },
//     { name: "Another Tire 2", imagePath: "assets/imgs/80.jpg" }
// ];

this.getTires();

}

getTires(){
    debugger;
    this.tiresService.getTires().subscribe((res)=>{
      debugger;
      this.tires = res;
      this.addToLocalStorage(this.tires);
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
addToLocalStorage(tire: Tire) {
  if(!localStorage.getItem('tires')){
  //const existingTires = localStorage.getItem('tires');
  //existingTires.push(tire);
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