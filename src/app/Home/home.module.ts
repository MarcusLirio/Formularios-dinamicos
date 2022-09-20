import { CadastrosService } from '../cadastrados/cadastro-services/cadastros.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app.routing.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { TesteComponent } from './teste/teste.component';
@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    ConteudoComponent,
    HomeComponent,
    TesteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [CadastrosService,HttpClientModule],
  bootstrap: [HomeComponent],

})
export class HomeModule { 
}

