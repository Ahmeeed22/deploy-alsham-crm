import { Component, OnInit ,Inject} from '@angular/core';
import { TransactionsService } from '../../transactions/transactions.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import {  catchError, forkJoin, map, of } from 'rxjs';



@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.scss']
})
export class DebtorComponent implements OnInit {
  listDeptors :any=[] ;
  totalBalance :any ;
  listDepts :any = []  ;
  sumBalance :any ;
  sumDeposit :any ; 

  constructor(
    private _TransactionsService:TransactionsService
    ,private toaster:ToastrService
    ,public dialog: MatDialogRef<DebtorComponent> , 
    public dialogpublic: MatDialog ,
    private _AuthService:AuthService ,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    // this.getSumBalance() ;
    this.getSumDeposites() ;
    console.log("tesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssst");
    
  }

  ngOnInit(): void {
    console.log("data = ",this.data);
    
  }

  getSumBalance(){
    this._TransactionsService.getSumBalance().subscribe({
      next :(res)=>{
        console.log("balanceee = ",res);
        this.listDeptors=res?.result?.sumBalance ;
        this.totalBalance=this.listDeptors.reduce((sum=0,customerBalance:any)=>  sum + customerBalance.total_balance ,0) ;
        this.toaster.success("success get Deptors","success") ;
        
      },
      error :(err)=>{ 
        console.log(err);
        
      }
    })
  }

  getSumDeposites() {
    console.log("test getSumDeposites");
    
    // return this._AuthService.getSumDeposit().pipe(
    //   map((res) => {
        
    //     this.sumDeposit=res.result.sumDeposite ;
    //     this.sumBalance = res.result.sumBalance ;
    //     this.listDepts = res.result.listDeptors ;
    //     console.log("resssssss  this.listDepts ",this.listDepts);
    //     return this.sumDeposit;
    //   }),
    //   catchError((err) => {
    //     console.log(err);
    //     return of(0); // Return an observable with a default value
    //   })
    // );
    this._AuthService.getSumDeposit().subscribe({
      next : (res)=>{
        console.log("res getSumDeposites", res);
        this.sumDeposit=res.result.sumDeposite ;
        this.sumBalance = res.result.sumBalance ;
        this.listDepts = res.result.listDeptors ;
      }
    })
  }
}
