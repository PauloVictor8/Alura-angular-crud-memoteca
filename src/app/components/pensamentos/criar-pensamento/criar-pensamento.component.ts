import { PensamentoService } from './../pensamento/pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentos = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamentos).subscribe(() => {
      this.route.navigate(['/listarPensamentos'])
    })
  }

  cancelarPensamento() {
    this.route.navigate(['/listarPensamentos'])
  }

}
