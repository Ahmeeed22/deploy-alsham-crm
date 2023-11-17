import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../transactions/transactions.service';

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.scss']
})
export class DebtorComponent implements OnInit {
  listDeptors :any=[]

  constructor(
    private _TransactionsService:TransactionsService
  ) { 
    this.getSumBalance() ;
  }

  ngOnInit(): void {
  }

  getSumBalance(){
    this._TransactionsService.getSumBalance().subscribe({
      next :(res)=>{
        console.log(res.result.sumBalance);
        this.listDeptors=res.result.sumBalance ;
        
      },
      error :(err)=>{
        console.log(err);
        
      }
    })
  }
}
