import { PensamentoService } from './pensamento.service';
import { IPensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: IPensamento = {
    id: 1,
    conteudo: 'teste',
    autoria: 'Vic',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar();
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
