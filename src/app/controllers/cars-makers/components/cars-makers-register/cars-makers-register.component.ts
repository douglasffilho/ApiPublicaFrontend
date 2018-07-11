import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarMaker } from '../../../../models/car-maker';
import { CarsMakersService } from '../../../../services/cars-makers/cars-makers.service';

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

  imageFile = 'Escolha uma imagem para logotipo';

  constructor(private carsMakersService: CarsMakersService) { }

  ngOnInit() {
  }

  updateMessage(type: string, text: string) {
    this.messages = [];
    const message = { severity: type, summary: '', detail: text };
    this.messages.push(message);
  }

  setImage(event) {
    this.imageFile = 'Escolha uma imagem para logotipo';
    const file: File = event.target.files[0];

    if (file instanceof File) {

      const reader: FileReader = new FileReader();

      reader.onloadend = () => {
        this.carMaker.image = reader.result.substr(reader.result.indexOf(',') + 1);
        if (file !== undefined && file != null) {
          this.imageFile = file.name;
        }
      };

      reader.readAsDataURL(file);
    }
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
