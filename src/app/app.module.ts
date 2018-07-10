import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GrowlModule } from 'primeng/growl';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SafeImagePipe } from './utils/pipes/safe-image/safe-image.pipe';
import { CarsMakersRegisterComponent } from './controllers/cars-makers/cars-makers-register/cars-makers-register.component';
import { CarsMakersViewComponent } from './controllers/cars-makers/cars-makers-view/cars-makers-view.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SafeImagePipe,
    NavbarComponent,
    CarsMakersViewComponent,
    CarsMakersRegisterComponent
  ],
  imports: [
    FormsModule,
    GrowlModule,
    TableModule,
    ButtonModule,
    BrowserModule,
    MessageModule,
    MessagesModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
