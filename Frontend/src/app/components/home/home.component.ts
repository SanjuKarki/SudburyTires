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
menuSelected:string;
searchKey:string;
searchTitle:string = "All Tires";

constructor(
  private fb: FormBuilder,private location: Location,
  private router: Router,private apiService: AppService,private tiresService: TiresService
) {
 }
 
ngOnInit(){
  let currentUrl = this.location.path();
  this.menuSelected = currentUrl.split('/')[1];
  this.getTires("");
}

getTires(searchKey,isSearch=false){
    debugger;
    if(!isSearch){
      this.searchTitle = searchKey;
      this.searchKey = searchKey;
    }
    this.tiresService.getTires(searchKey).subscribe((res)=>{
      debugger;
      this.addToLocalStorage(res);
      this.tires = res;
});
}

// Add tire data to localStorage
addToLocalStorage(tire: any) {
  if(!localStorage.getItem('tires') || localStorage.getItem('tires') != JSON.stringify(tire) ){
  localStorage.setItem('tires', JSON.stringify(tire));
  }
}

receiveMessage($event: string) {
  debugger;
  this.getTires($event);
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
  onSale:boolean;
}