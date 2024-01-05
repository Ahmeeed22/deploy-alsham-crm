import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { DebtorComponent } from '../accountant/debtor/debtor.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import {  catchError, forkJoin, map, of } from 'rxjs';


@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  detailsProfite: any = {}
  totalBalance:any ;
  count: number = 0;
  filteration: any
  detailsProfiteMonthly: any = {}
  countMonthly: number = 0;
  amountCash: number = 0;
  dateToday = new Date();
  dailySummary: any;
  monthlySummary: any;
  sumBalance :any ;
  sumDeposit :any ;
  listDepts = [] ;

  constructor(
    private _TransactionsService: TransactionsService
    , public dialog: MatDialog ,
    private _AuthService:AuthService ,
  ){
    var start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    var end = new Date();
    end.setUTCHours(23, 59, 59, 999);

    this.filteration = {
      date: true,
      startedDate: start.toISOString(),
      endDate: end.toISOString(),
    }
  }


  ngOnInit(): void {
    // getting daily and monthly summary 
    this.getAllTransactions();
    this.gettingCash() ;
  }

  getAllTransactions() {
    this.filteration.offset = this.filteration.offset > 0 ? this.filteration.offset - 1 : 0
    this._TransactionsService.getSummary(this.filteration).subscribe({
      next: res => {
        console.log("daily", res);
        this.dailySummary = res
        this.getAllTransactionsMonthly();
      },
      error: err => {
        console.log(err);
      }
    })
  }
  // helper to get start of month 
  startOfMonth(date: any) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  getAllTransactionsMonthly() {
    let dt = new Date();
    let start = this.startOfMonth(dt).toISOString();
    // let start = new Date(2019,10,10); 
    var end = new Date();
    end.setUTCHours(23, 59, 59, 999);
    this.filteration = {
      date: true,
      startedDate: start,
      endDate: end.toISOString(),
    }
    this.filteration.offset = this.filteration.offset > 0 ? this.filteration.offset - 1 : 0
    this._TransactionsService.getSummary(this.filteration).subscribe({
      next: res => {
        console.log("monthly", res);
        this.monthlySummary = res ;
        this.getSumBalance()
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getSumBalance(){
    this._TransactionsService.getSumBalance().subscribe({
      next :(res)=>{
        console.log(res);
        let listDeptors=res?.result?.sumBalance ;
        
        this.totalBalance=listDeptors.reduce((sum=0,customerBalance:any)=>  sum + customerBalance.total_balance ,0) ;
        console.log(listDeptors , this.totalBalance);
        // this.toaster.success("success get Deptors","success") ;
        
      },
      error :(err)=>{ 
        console.log(err);
        
      }
    })
  }

  showAllDeptors() {
    const dialogRef = this.dialog.open(DebtorComponent, {
      width: "60%",
      disableClose: true ,
      data: true,
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.getAllTransactionAccount()
    });
  }

 gettingCash() {
  this._TransactionsService.getCash().subscribe({
    next : (res)=>{
      console.log(res);
      this.amountCash = res.result.cash ;
    },
    error : (err)=>{
      console.log(err);
      
    }
  })
 } 

 getSumDeposites() {
  return this._AuthService.getSumDeposit().pipe(
    map((res) => {
      console.log("resssssss ",res);
      
      this.sumDeposit=res.result.sumDeposite ;
      this.sumBalance = res.result.sumBalance ;
      this.listDepts = res.result.listDeptors ;
      return this.sumDeposit;
    }),
    catchError((err) => {
      console.log(err);
      return of(0); // Return an observable with a default value
    })
  );
}

}
