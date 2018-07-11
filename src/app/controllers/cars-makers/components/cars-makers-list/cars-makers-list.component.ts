import { Component, OnInit } from '@angular/core';
import { CarsMakersService } from '../../../../services/cars-makers/cars-makers.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cars-makers-list',
  templateUrl: './cars-makers-list.component.html',
  styleUrls: ['./cars-makers-list.component.css']
})
export class CarsMakersListComponent implements OnInit {

  makers: Array<any> = [];

  constructor(private carMakersService: CarsMakersService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    interval(5000).subscribe(i => {
      this.carMakersService
      .list()
      .subscribe(response => this.makers = response);
    });
  }

}
