import { PensamentoService } from './../pensamento/pensamento.service';
import { IPensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: IPensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    }))
  }

}
