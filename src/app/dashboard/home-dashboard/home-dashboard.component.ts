import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  detailsProfite: any = {}
  count: number = 0;
  filteration: any
  detailsProfiteMonthly: any = {}
  countMonthly: number = 0;
  amountCash: number = 0;
  dateToday = new Date();
  dailySummary: any;
  monthlySummary: any;
  constructor(
    private _TransactionsService: TransactionsService,
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
        this.monthlySummary = res
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
