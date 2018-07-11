import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrowlModule } from 'primeng/growl';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SafeImagePipe } from './utils/pipes/safe-image/safe-image.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsMakersListComponent } from './controllers/cars-makers/components/cars-makers-list/cars-makers-list.component';
import { CarsMakersRegisterComponent } from './controllers/cars-makers/components/cars-makers-register/cars-makers-register.component';
import { CarsMakersViewComponent } from './controllers/cars-makers/cars-makers-view/cars-makers-view.component';

registerLocaleData(localePt);

const appRoutes: Routes = [
  { path: 'cars-makers',
    component: CarsMakersViewComponent },
  { path: '',
    redirectTo: 'cars-makers',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SafeImagePipe,
    NavbarComponent,
    CarsMakersListComponent,
    CarsMakersRegisterComponent,
    CarsMakersViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    GrowlModule,
    TableModule,
    ButtonModule,
    RouterModule,
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
