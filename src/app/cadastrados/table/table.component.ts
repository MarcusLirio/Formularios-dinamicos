import { Component, Input, OnInit } from '@angular/core';
import { CadastroModel } from '../cadastro-model/cadastro.model';
import { CadastrosService } from '../cadastro-services/cadastros.service';
@Component({
  selector: 'tabelas',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  contato: CadastroModel = new CadastroModel();
  cadastro:  Array<any> = new Array();
  constructor(private cadastroService: CadastrosService) { }

  ngOnInit(): void {
    this.listarCadastro();
  }

  listarCadastro(){
    this.cadastroService.listarCadastro().subscribe(cadastrados =>{
      this.cadastro = cadastrados;
    }, err => {
        console.log('Erro ao Listar os Contatos', err);
    })                   
  }

  remover(id:number){
    this.cadastroService.removerCadastro(id).subscribe(contato =>{
      this.contato = new CadastroModel();
      this.listarCadastro();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  }

  atualizar(id: number){
    this.cadastroService.atualizarCadastro(id,this.contato).subscribe(contato =>{
      this.contato = new CadastroModel();
      this.listarCadastro();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  }

}
