import { Component, OnInit ,Inject} from '@angular/core';
import { TransactionsService } from '../../transactions/transactions.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.scss']
})
export class DebtorComponent implements OnInit {
  listDeptors :any=[] ;
  totalBalance :any ;

  constructor(
    private _TransactionsService:TransactionsService
    ,private toaster:ToastrService
    ,public dialog: MatDialogRef<DebtorComponent> , 
    public dialogpublic: MatDialog ,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    this.getSumBalance() ;
  }

  ngOnInit(): void {
    console.log("data = ",this.data);
    
  }

  getSumBalance(){
    this._TransactionsService.getSumBalance().subscribe({
      next :(res)=>{
        console.log(res);
        this.listDeptors=res?.result?.sumBalance ;
        this.totalBalance=this.listDeptors.reduce((sum=0,customerBalance:any)=>  sum + customerBalance.total_balance ,0) ;
        this.toaster.success("success get Deptors","success") ;
        
      },
      error :(err)=>{ 
        console.log(err);
        
      }
    })
  }
}
