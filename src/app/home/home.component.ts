import { center } from './../cardinterface';
import { Component, OnInit } from '@angular/core';
import { cards } from './card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  centers : center[]  = [];
  filterTerm: string ="";
  searchTerm: string = "";
  constructor() { }

  ngOnInit(): void {
    this.centers = [...cards];
  }
onSelect(card:center){
}
searchCenters(){
  if(this.searchTerm !== ""){
      this.centers = [...cards].filter((value,index)=> {
          return (value.name.toUpperCase().includes(this.searchTerm.toUpperCase())
          || value.vaccine.toUpperCase().includes(this.searchTerm.toUpperCase())
          || value.location.toUpperCase().includes(this.searchTerm.toUpperCase()));  
      });
  }
  else {
    this.centers = [...cards];
  }
}
filterCenters(){
  console.log("hi");
  if(this.filterTerm !== ""){
      this.centers = [...cards].filter((value,index)=> {
          return (value.location.toUpperCase().includes(this.filterTerm.toUpperCase()));  
      });
  }
  else {
    this.centers = [...cards];
  }
}
location = [
  { name: "Amman"},
  { name: "irbid"},
  { name: "madaba"},
  { name: "aqaba"},
  { name: "ajlon"}
];
selectedValue = null;
}
