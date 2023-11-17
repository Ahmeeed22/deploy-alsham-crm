import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { DebtorComponent } from './debtor/debtor.component';


@NgModule({
  declarations: [
    DebtorComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule
  ]
})
export class AccountantModule { }
