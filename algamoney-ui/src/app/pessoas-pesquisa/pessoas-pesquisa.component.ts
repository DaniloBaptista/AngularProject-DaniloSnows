import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas: Pessoa[];

  cols: any[];
  ngOnInit() {
  this.pessoas = [
     { nome: 'Manoel Pinheiro', cidade: 'Uberlandia', estado: 'MG',
     status: 'Ativo'},
     { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP',
     status: 'Inativo'},
     { nome: 'Carla Souza', cidade: 'Florianopolis', estado: 'SC',
     status: 'Ativo'},
     { nome: 'Luis Pereira', cidade: 'Curitiba', estado: 'PR',
     status: 'Ativo'},
     { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ',
     status: 'Inativo'},
     { nome: 'José Pinheiro', cidade: 'Belem', estado: 'PA',
     status: 'Ativo'},
    ];

          this.cols = [
              { field: 'nome', header: 'Nome' },
              { field: 'cidade', header: 'Cidade' },
              { field: 'estado', header: 'Estado' },
              { field: 'status', header: 'Status' },
          ];
      }
 }

  export interface Pessoa {
      nome;
      cidade;
      estado;
      status;
  }


