import { Component} from '@angular/core';
import {  catchError, forkJoin, map, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BanksService } from 'src/app/dashboard/banks/banks.service';
import { OwnerService } from 'src/app/dashboard/owners/components/service/owner.service';
import { SppliersService } from 'src/app/dashboard/suppliers/sppliers.service';
import { TransactionsService } from 'src/app/dashboard/transactions/transactions.service';

@Component({
  selector: 'app-show-balance-sheat',
  templateUrl: './show-balance-sheat.component.html',
  styleUrls: ['./show-balance-sheat.component.scss']
})
export class ShowBalanceSheatComponent  {
  banks:any=[] ;
  suppliers:any=[];
  sumDeposit:any=0 ;
  sumBalance:any=0 ;
  sumCommission:any=0 ;
  sumCommissionPaied:any= 0;
  sumCapital:any=0 ;
  sumDrawing :any=0 ;
  totalProfie :any=0 ;
  assets :any=0 ;
  expenses :any=0 ;
  // cash :any=0 ;
  paymentAmount :any= 0;
  sumBanksBalance :any= 0;
  sumBalanceSupplier :any= 0;
  total_price_without_profite :any= 0;

  constructor(
    private _BanksService:BanksService ,
    private _SppliersService:SppliersService ,
    private _AuthService:AuthService ,
    private _OwnerService:OwnerService ,
    private _TransactionsService:TransactionsService
  ) { 
    this.getSumBalance() ;
  }

  calculateCash() {
    // this.cash =
    //   this.paymentAmount +
    //   this.sumDeposit +
    //   this.sumCapital -
    //   this.sumDrawing -
    //   this.expenses -
    //   this.total_price_without_profite -
    //   this.sumBalanceSupplier -
    //   this.sumBanksBalance;
  }


  getAllbanks() {
    return this._BanksService.getAllBanks().pipe(
      map((res) => {
        this.banks = res.result.rows;
        for (let index = 0; index < this.banks.length; index++) {
          this.sumBanksBalance += this.banks[index].balance;
        }
        return this.sumBanksBalance;
      }),
      catchError((err) => {
        console.log(err);
        return of(0); // Return an observable with a default value
      })
    );
  }

  getAllSuppliers() {
    return this._SppliersService.getAllSuppliers().pipe(
      map((res) => {
        this.suppliers = res.result.rows;
        for (let index = 0; index < this.suppliers.length; index++) {
          this.sumBalanceSupplier += this.suppliers[index].balance;
        }
        return this.sumBalanceSupplier;
      }),
      catchError((err) => {
        console.log(err);
        return of(0); // Return an observable with a default value
      })
    );
  }

  calculateAssets() {
    forkJoin([this.getAllbanks(), this.getAllSuppliers() ,this.getSumDeposites() ,]).subscribe(([banksBalance, suppliersBalance , sumDeposit ]) => {
      this.assets = banksBalance + suppliersBalance;
      console.log("assets = ",this.assets,"sumDeposit",sumDeposit);
      
    });
  }


  getSumDeposites() {
    return this._AuthService.getSumDeposit().pipe(
      map((res) => {
        console.log("resssssss ",res);
        
        this.sumDeposit=res.result.sumDeposite ;
        this.sumBalance = res.result.sumBalance ;
        return this.sumDeposit;
      }),
      catchError((err) => {
        console.log(err);
        return of(0); // Return an observable with a default value
      })
    );
  }

  getSumBalance(){
    // calc sum assets
    this.calculateAssets()
    // calc sum  total_price_without_profite , totalProfie 
      this._AuthService.getSumBalance().subscribe({
        next : (res)=>{
          console.log(res);
          // get cutomers balance ////////////////////////////////////////
          // this.sumBalance=res.result.sumBalanceCustomers ;

          this.sumCommission=res.result.sumCommission ;
          this.sumCommissionPaied =res.result.sumCommissionPaied ;
          this.paymentAmount = +res.result.totalPayment
          this.totalProfie=res.result.totalProfit ;
          this.total_price_without_profite = res.result.total_price_without_profite ;
          console.log("sumBalance ,sumCommission , totalProfie = ",res );
          // calc sumDrawing , sumCapital
          this._OwnerService.getCapitalAndOwnerDrawing().subscribe({
            next : (res)=>{
              this.sumDrawing=res.result.drowingSum ;
              this.sumCapital=res.result.investSum ;
              console.log(res);
              // calc cash
              this._TransactionsService.getExpensesSum().subscribe({
                next : (res)=>{
                  console.log( 'expensesSum ',res.expensesSum);
                  this.expenses=res.expensesSum ;
                  // calc cash
                  // this.cash = (this.paymentAmount + this.sumDeposit + this.sumCapital) - ( this.sumDrawing + this.expenses + this.total_price_without_profite   +this.sumBalanceSupplier + this.sumBanksBalance + this.sumCommissionPaied ) ;
                  console.log(`( ${this.paymentAmount} + ${this.sumDeposit} + ${this.sumCapital}) - ( ${this.sumDrawing} + ${this.expenses} + ${this.total_price_without_profite}   +${this.sumBalanceSupplier} + ${this.sumBanksBalance} + ${this.sumCommissionPaied} ) `);
                  
                },
                error :(err)=>{
                  console.log(err);
                  
                }
              })
            } ,
            error : (err)=>{
              console.log(err);
            }
          })
        }
      })
  }

}
