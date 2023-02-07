import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '',
      redirectTo: 'listarPensamentos',
      pathMatch: 'full'
   },
   {
      path: 'listarPensamentos',
      component: ListarPensamentosComponent
   },
   {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
   },
   {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
   }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
