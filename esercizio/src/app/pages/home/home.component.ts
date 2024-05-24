
import { CarServiceService } from './../../Models/car-service.service';
import { Component, OnInit } from '@angular/core';
import { icar } from "../../Models/icar";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  cars: icar[] = [];
  constructor(private carService:CarServiceService){

  }
  ngOnInit(): void {
    this.carService.getCars().subscribe((data:icar[]) => {
      this.cars = data;
    });
  }


}

