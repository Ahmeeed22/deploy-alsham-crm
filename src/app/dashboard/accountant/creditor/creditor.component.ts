import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../customer/customers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.scss']
})
export class CreditorComponent implements OnInit {
  totalDeposite:any=0 ;
  listCreditors:any ;

  constructor(
    private _CustomersService:CustomersService
    ,private toaster:ToastrService
  ) {
    this.getCreditors() ;
   }

  ngOnInit(): void {
  }

  getCreditors(){
    this._CustomersService.getAllCustomersSearch({deposite :true}).subscribe({
      next : (res)=>{
        console.log(res);
        this.listCreditors=res.result ;
        // Calculate the sum of deposite using reduce
        this.totalDeposite = res.result.reduce((sum=0, customer:any) => sum + customer.deposite, 0);
        console.log('totalDeposite = ',this.totalDeposite);
        this.toaster.success("success get Creditors","success")
      }
    })
  }

}
