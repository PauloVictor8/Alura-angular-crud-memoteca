import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentos = {
    conteudo: 'Aprendendo Angular',
    autoria: 'dev'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
  }

  cancelarPensamento() {
  }

}
