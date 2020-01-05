import { NgForm } from '@angular/forms';
import { Component} from '@angular/core';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent   {
  cliente = new Cliente();
  profissoes = ['Programador', 'Empresario', 'Outra'];

  salvar(form: NgForm) {
    //this.cliente.nome = form.value.nome;
    //this.cliente.email = form.value.email;
    //this.cliente.profissao = form.value.profissao;

    console.log(form);
    //console.log(this.cliente);

    form.reset({ nome: 'Sebastiao', profissao: ''});

  }

}
