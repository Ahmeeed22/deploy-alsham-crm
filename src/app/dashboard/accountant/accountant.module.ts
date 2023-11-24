import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { DebtorComponent } from './debtor/debtor.component';
import { CreditorComponent } from './creditor/creditor.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DebtorComponent,
    CreditorComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule,
    MaterialModule,
  ]
})
export class AccountantModule { }
