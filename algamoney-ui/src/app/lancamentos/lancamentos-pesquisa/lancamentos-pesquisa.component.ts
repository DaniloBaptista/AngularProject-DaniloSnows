import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos: Lancamento[];



  cols: any[];
  ngOnInit() {
  this.lancamentos = [
   { tipo: 'DESPESA', descricao: 'Compra de pao', dataVencimento: new Date(2017, 5, 30),
     dataPagamento: new Date(2017, 5 , 30), valor: 455, pessoa: 'Padaria do josé' },
   { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(10, 6, 2017),
      dataPagamento: new Date(2017, 5 , 30), valor: 8000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: ' impostos', dataVencimento: new Date(20, 7, 2017),
      dataPagamento: new Date(2017, 5 , 30), valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Compra de pao', dataVencimento: new Date(20,7,27),
      dataPagamento: new Date(2017, 5 , 30), valor: 455, pessoa: 'Padaria do josé' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(10, 6, 2017),
      dataPagamento: new Date(2017, 5 , 30), valor: 8000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: ' impostos', dataVencimento: new Date(20, 7, 2017),
      dataPagamento: new Date(2017, 5 , 30), valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: ' impostos', dataVencimento: new Date(20, 7, 2017),
     dataPagamento: new Date(2017, 5 , 30), valor: 14312, pessoa: 'Ministério da Fazenda' }
    ];

          this.cols = [
              { field: 'pessoa', header: 'Pessoa' },
              { field: 'descricao', header: 'Descricao' },
              { field: 'dataVencimento', header: 'DataVencimento' },
              { field: 'dataPagamento', header: 'DataPagamento' },
              { field: 'valor', header: 'Valor' },
          ];
      }
 }

  export interface Lancamento {
      tipo;
      descricao;
      dataVencimento;
      dataPagamento;
      valor;
      pessoa;
  }


