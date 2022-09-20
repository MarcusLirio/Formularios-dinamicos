import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroModel } from '../cadastro-model/cadastro.model';
import { CadastroComponent } from 'src/app/Home/cadastro/cadastro.component';
import { CadastradosComponent } from '../cadastrados.component';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
 
  constructor(private http: HttpClient) {
}
  cadastrarContato(contato: CadastroModel): Observable<any>{
  return this.http
  .post("http://localhost:3000/posts", contato)
 }

  listarCadastro(): Observable<any>{
    return this.http
    .get("http://localhost:3000/posts");
  }
  atualizarCadastro(id:any, contato: CadastroModel): Observable<any>{
    return this.http
    .put("http://localhost:3000/posts".concat(id), contato);
  }

  removerCadastro(id: any): Observable<any>{
    return this.http
    .delete("http://localhost:3000/posts".concat(id));
  }
}

