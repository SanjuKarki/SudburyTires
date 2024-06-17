import { Component } from '@angular/core';
import { Router, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-tire-detail',
  templateUrl: './tire-detail.component.html',
  styleUrls: ['./tire-detail.component.scss']
})
export class TireDetailComponent {
  tires:any;
  selectedTire:any;

  constructor(private route: Router,private location: Location) { }

  ngOnInit(){
    debugger;
    let currentUrl = this.location.path();
    let id = currentUrl.split('/')[2];
    this.getTireById(id);
    //const id = +this.route.snapshot.paramMap.get('id');
    // this.route.params.subscribe(params => {
    //   // Extract the tireId from the params and convert it to a number
    //   this.tireId = +params['id'];
    //   // Now you have access to the tireId in this component
    //   console.log(this.tireId); // You can do whatever you need with this value
    // });

    //const filter = this.route.snapshot.queryParamMap.get('filter');
    // const id = +this.route.snapshot.params['id'];
    // this.route.paramMap.subscribe(params => {
    //   // Convert the string 'tireId' parameter to a number using the '+' operator
    //   this.tireId = +params.get('tireId');
    //   // Now you have access to the tireId in this component
    //   console.log(this.tireId); // You can do whatever you need with this value
    // });

    // this.tires = [
    //   { id: 1, imagePath: 'assets/imgs/80.jpg', name: 'Tire 1', brand: 'Brand A', size: '205/55R16', price: 150, detail:"Here are some links for the UI/UX design inspiration. Feel free to research other UI/UX design inspiration from other websites if needed! Also, do not forget to reference any online work that you used when resubmitting your design files." },
    //   { id: 2, imagePath: 'assets/imgs/80.jpg', name: 'Tire 2', brand: 'Brand B', size: '215/60R17', price: 170 , detail:"Here are some links for the UI/UX design inspiration. Feel free to research other UI/UX design inspiration from other websites if needed! Also, do not forget to reference any online work that you used when resubmitting your design files."},
    //   { id: 3, imagePath: 'assets/imgs/80.jpg', name: 'Tire 3', brand: 'Brand C', size: '225/65R18', price: 190 , detail:"Here are some links for the UI/UX design inspiration. Feel free to research other UI/UX design inspiration from other websites if needed! Also, do not forget to reference any online work that you used when resubmitting your design files."},
    //   // Add more tire objects as needed
    // ];

  }

  getTiresFromLocalStorage(): any {
    // Retrieve tire data from localStorage
    const tiress = localStorage.getItem('tires');
    // If there's no data, return an empty array
    if (!tiress) {
      return [];
    }
    // Parse and return the tire data
    return JSON.parse(tiress) as any;
  }
  getTireById(tireId: string) {
    // Get all tires from localStorage
    var getTiresFromStorage = this.getTiresFromLocalStorage();
    this.selectedTire = getTiresFromStorage.filter((x: Tire) => x.id.toString() === tireId)[0];
  }

}

interface Tire {
  id: number;
  imagePath: string;
  name: string;
  brand: string;
  size: string;
  price: number;
  detail: string;
}