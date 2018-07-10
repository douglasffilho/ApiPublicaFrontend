import { Component, OnInit } from '@angular/core';
import { CarsMakersService } from '../../../services/cars-makers/cars-makers.service';

@Component({
  selector: 'app-cars-makers-view',
  templateUrl: './cars-makers-view.component.html',
  styleUrls: ['./cars-makers-view.component.css']
})
export class CarsMakersViewComponent implements OnInit {

  makers: Array<any>;

  constructor(private carMakersService: CarsMakersService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.carMakersService
    .list()
    .subscribe(response => this.makers = response);
  }

}
