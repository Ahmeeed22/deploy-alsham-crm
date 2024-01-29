import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/shared/ddl-searcheble/models/item';
import { DdlSearchableComponent } from 'src/app/shared/ddl-searcheble/ddl-searchable/ddl-searchable.component';
import { TransactionsService } from 'src/app/dashboard/transactions/transactions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.scss']
})
export class ComfirmationComponent{
  @ViewChild('banks') banks !: DdlSearchableComponent;
  banksObj!: Item;
  banksList:any = [] ;
  comm:boolean =false ;

  constructor( public dialog: MatDialogRef<ComfirmationComponent> , 
    public matDialog:MatDialog,
     @Inject(MAT_DIALOG_DATA) public data:any,
     private _TransactionsService:TransactionsService,
     private toaster:ToastrService
    ) { 
      if (data?.message == "Are You Sure to Pay This Commission ? ") {
        this.comm = true ;
      }

      this.comm ?  this.getAllBanksAccounts() : '' ;
    }

  
    getAllBanksAccounts() {
      this._TransactionsService.getAllBankAccount().subscribe({
        next: (res) => {
          console.log(res);
          this.banksList = res.result.rows ;
          const selectedBank = this.banksList.find((bank: any,{}) => bank.id === this?.data?.accountId);
          console.log("selectedBank " , selectedBank , this.data);
          
          this.banksObj = {
            staticArray: res.result.rows, placeholder: 'البنك', placeholderEn: 'Bank Account', required:  true, searachable: true, multiSelect: false, oldSelectedItems:selectedBank
          };
  
        },
        error: (err) => {
          console.log(err);
  
        }
      })
    }
    

  confirm(){
    if (this.comm) {
      if(!this.banks?.gettingResult()?.id ){
        this.toaster.info('must select bank' , "Info");
        return ;
      }
  
      console.log("this.banks?.gettingResult()?.id ",this.banks?.gettingResult()?.id);
      
      this.dialog.close({confirm:"yes",bankID:this.banks?.gettingResult()?.id})
    }else{
      this.dialog.close(true)
      this.matDialog.closeAll();
    }
    // this.matDialog.closeAll();
 
  }

  close(){
    if (this.comm) {
      this.dialog.close({confirm:'no',bankID:this.banks?.gettingResult()?.id});
    } else {
      this.dialog.close('no');      
    }
  }
}
