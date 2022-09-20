import{CadastrosService} from './cadastrados/cadastro-services/cadastros.service'

import { AppRoutingModule } from './app.routing.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './Home/home.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Home/login/login.component';
import { CadastroComponent } from './Home/cadastro/cadastro.component';
import { CadastradosComponent } from './cadastrados/cadastrados.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './cadastrados/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    CadastradosComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
  ],
  providers: [CadastrosService,HttpClientModule],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { 
}

