import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarMaker } from '../../../models/car-maker';
import { CarsMakersService } from '../../../services/cars-makers/cars-makers.service';

@Component({
  selector: 'app-cars-makers-register',
  templateUrl: './cars-makers-register.component.html',
  styleUrls: ['./cars-makers-register.component.css']
})
export class CarsMakersRegisterComponent implements OnInit {

  @Output()
  registeredCarMaker = new EventEmitter();

  carMaker: CarMaker = new CarMaker();

  messages = [];

  files = [];

  constructor(private carsMakersService: CarsMakersService) { }

  ngOnInit() {
  }

  updateMessage(type: string, text: string) {
    this.messages = [];
    const message = { severity: type, summary: '', detail: text };
    this.messages.push(message);
  }

  setImage(event) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = () => this.carMaker.image = reader.result.substr(reader.result.indexOf(',') + 1);

    reader.readAsDataURL(file);
  }

  register() {
    this.carsMakersService
      .register(this.carMaker)
      .subscribe(response => {
          this.carMaker = new CarMaker();
          this.registeredCarMaker.emit(response);
          this.updateMessage('success', 'Fabricante cadastrado');
        },
        error => this.updateMessage('error', error.error.errors[0].defaultMessage)
      );
  }

}
