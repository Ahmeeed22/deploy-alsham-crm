import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtorComponent } from './debtor/debtor.component';
import { CreditorComponent } from './creditor/creditor.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'balanceSheat',
    pathMatch : 'full'
  },
  {
    path : "deptors" ,
    component : DebtorComponent
  },
  {
    path : "creditors" ,
    component : CreditorComponent
  },
  {
    path : 'balanceSheat',
    loadChildren : ()=> import('./balance-sheat/balance-sheat.module').then(m => m.BalanceSheatModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }
