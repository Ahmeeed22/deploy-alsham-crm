"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[592],{9325:(v,_,n)=>{n.d(_,{G:()=>t});var r=n(2340),o=n(4650),l=n(529);let t=(()=>{class a{constructor(e){this._HttpClient=e}getAllBanks(){return this._HttpClient.get(`${r.N.baseApi}getAllBankAccount`)}getAllBanksStatements(){return this._HttpClient.get(`${r.N.baseApi}allbankingTransactionHistory`)}addBankStatementAccount(e){return this._HttpClient.post(`${r.N.baseApi}addbankingTransactionHistory`,e)}}return a.\u0275fac=function(e){return new(e||a)(o.LFG(l.eN))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3851:(v,_,n)=>{n.d(_,{v:()=>t});var r=n(529),o=n(2340),l=n(4650);let t=(()=>{class a{constructor(e){this.http=e}getAllCustomers(){return this.http.get(`${o.N.baseApi}allcustomers`)}getAllCustomersSearch(e){let i=new r.LE;return(e?.name||0==e?.active||1==e?.active||e?.deposite)&&Object.entries(e).forEach(([h,m])=>{m&&(i=i.append(h,m)),"active"==h&&0==m&&(i=i.append("active",0))}),this.http.get(`${o.N.baseApi}searchCustomer`,{params:i})}deleteCustomer(e){return this.http.delete(`${o.N.baseApi}deleteCustomer/${e}`)}updateCustomer(e,i){return this.http.put(`${o.N.baseApi}updateCustomer/${e}`,i)}addCustomer(e){return this.http.post(`${o.N.baseApi}addCustomer`,e)}}return a.\u0275fac=function(e){return new(e||a)(l.LFG(r.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},4952:(v,_,n)=>{n.d(_,{T:()=>t});var r=n(2340),o=n(4650),l=n(529);let t=(()=>{class a{constructor(e){this.http=e}getAllOwners(e={}){return this.http.post(`${r.N.baseApi}getAllOwners`,e)}createOwner(e){return this.http.post(`${r.N.baseApi}addOwners`,e)}getCapitalAndOwnerDrawing(){return this.http.get(`${r.N.baseApi}getCapitalAndOwnerDrawing`)}}return a.\u0275fac=function(e){return new(e||a)(o.LFG(l.eN))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5009:(v,_,n)=>{n.d(_,{r:()=>t});var r=n(529),o=n(2340),l=n(4650);let t=(()=>{class a{constructor(e){this.http=e}getAllServices(){return this.http.get(`${o.N.baseApi}allservices`)}getAllServicesSearch(e){let i=new r.LE;return(e?.name||0==e?.active||1==e?.active)&&Object.entries(e).forEach(([h,m])=>{m&&(i=i.append(h,m)),"active"==h&&0==m&&(i=i.append("active",0))}),this.http.get(`${o.N.baseApi}searchservice`,{params:i})}addService(e){return this.http.post(`${o.N.baseApi}addservice`,e)}updateService(e,i){return this.http.put(`${o.N.baseApi}updateservice/${e}`,i)}deleteService(e){return this.http.delete(`${o.N.baseApi}deleteservice/${e}`)}}return a.\u0275fac=function(e){return new(e||a)(l.LFG(r.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},6e3:(v,_,n)=>{n.d(_,{h:()=>t});var r=n(2340),o=n(4650),l=n(529);let t=(()=>{class a{constructor(e){this._HttpClient=e}getAllSuppliers(){return this._HttpClient.get(`${r.N.baseApi}allsupplier`)}getAllSuppliersStatements(){return this._HttpClient.get(`${r.N.baseApi}allsupplierStatementAccount`)}addsupplierStatementAccount(e){return this._HttpClient.post(`${r.N.baseApi}addsupplierStatementAccount`,e)}}return a.\u0275fac=function(e){return new(e||a)(o.LFG(l.eN))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5793:(v,_,n)=>{n.d(_,{D:()=>S});var r=n(4006),o=n(5938),l=n(5976),t=n(4650),a=n(9299),u=n(7185),e=n(278),i=n(5076),h=n(5009),m=n(6895),g=n(4859),f=n(7392),E=n(9549),O=n(4144),C=n(9241);const D=["banks"],b=["type"];function T(d,A){if(1&d&&t._UZ(0,"app-ddl-searchable",16,17),2&d){const s=t.oxw();t.Q6J("objData",s.statusObj)}}function M(d,A){if(1&d&&t._UZ(0,"app-ddl-searchable",16,18),2&d){const s=t.oxw();t.Q6J("objData",s.banksObj)}}function P(d,A){if(1&d){const s=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(s);const p=t.oxw();return t.KtG(p.createTransactionAccount())}),t._uU(1,"Create"),t.qZA()}}let S=(()=>{class d{constructor(s,c,p,I,y,B,N,U,L){this.fb=s,this._Router=c,this.toaster=p,this._TransactionAccountService=I,this._TransactionsService=y,this.dialog=B,this.dialogpublic=N,this.data=U,this._ServicesService=L,this.statusObj={staticArray:[{id:"expenses",name:"Expenses"}],placeholder:"\u0627\u0644\u062d\u0627\u0644\u0629 ",placeholderEn:"Type",required:!0,searachable:!1,multiSelect:!1,oldSelectedItems:{id:"expenses",name:"Expenses"}},this.typeSupplyed=!1,this.createForm(),this.getAllBanksAccounts()}ngOnInit(){}createForm(){this.minDate=this.data?.dateExpire||new Date(1/2015),this.newServiceForm=this.fb.group({receiptNumber:[this.data?.receiptNumber||"",r.kI.required],amount:[this.data?.amount||0,r.kI.required]}),this.formValues={...this.newServiceForm.value}}createTransactionAccount(){var s=this.banks?.gettingResult()?.id||null;let c={...this.newServiceForm.value,type:this.type.gettingResult()?.id,accountId:s};console.log(c),this.newServiceForm.valid&&this.type.validate()?(console.log(this.newServiceForm),console.log(this.type.validate()),this._TransactionAccountService.addTransactionAccount(c).subscribe({next:p=>{console.log(p),this.toaster.success("success add transaction Account","success"),this.dialog.close(!0)},error:p=>{this.newServiceForm.markAllAsTouched()}})):(this.newServiceForm.markAllAsTouched(),this.type.validate(),console.log(this.newServiceForm),console.log(this.type.validate()))}testChange(){let s=!1;return Object.keys(this.formValues).forEach(c=>{this.formValues[c]!==this.newServiceForm.value[c]&&(s=!0)}),s}close(){let s;this.testChange()?(s=this.dialogpublic.open(l.P,{width:"750px",disableClose:!0}),s?.afterClosed().subscribe(c=>{"no"!==c&&this.dialog.close()})):this.dialog.close()}getAllBanksAccounts(){this._TransactionsService.getAllBankAccount().subscribe({next:s=>{console.log(s),this.banksObj={staticArray:s.result.rows,placeholder:"\u0627\u0644\u0628\u0646\u0643",placeholderEn:"Bank Account",required:!1,searachable:!0,multiSelect:!1,oldSelectedItems:this?.data?.service}},error:s=>{console.log(s)}})}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(r.qu),t.Y36(a.F0),t.Y36(u._W),t.Y36(e.A),t.Y36(i.v),t.Y36(o.so),t.Y36(o.uw),t.Y36(o.WI),t.Y36(h.r))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-add"]],viewQuery:function(s,c){if(1&s&&(t.Gf(D,5),t.Gf(b,5)),2&s){let p;t.iGM(p=t.CRH())&&(c.banks=p.first),t.iGM(p=t.CRH())&&(c.type=p.first)}},decls:28,vars:6,consts:[[1,"p-2"],[1,"d-flex","justify-content-between","align-items-center"],[1,"m-0"],["mat-flat-button","",1,"text-danger",3,"click"],[3,"formGroup"],[1,"row","mt-1"],[1,"col-md-12","my-2"],[3,"objData",4,"ngIf"],[1,"col-md-12"],["appearance","outline",1,"w-100","rounded",2,"border-radius","20px !important"],["matInput","","currencyMask","","type","text","formControlName","receiptNumber","placeholder","Receipt Number",3,"readonly"],["matInput","","currencyMask","","type","number","formControlName","amount","placeholder","Amount"],[1,"tw-p-3"],[1,"d-flex","justify-content-center","align-items-center"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2",3,"click",4,"ngIf"],["mat-flat-button","",1,"btn","btn-danger","py-1","px-5",3,"click"],[3,"objData"],["type",""],["banks",""],["mat-flat-button","",1,"btn","btn-success","py-1","px-5","mx-2",3,"click"]],template:function(s,c){1&s&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h1",2),t._uU(3),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return c.close()}),t.TgZ(5,"mat-icon"),t._uU(6,"close"),t.qZA()()(),t.TgZ(7,"form",4)(8,"div",5)(9,"div",6),t.YNc(10,T,2,1,"app-ddl-searchable",7),t.qZA(),t.TgZ(11,"div",8)(12,"mat-form-field",9)(13,"mat-label"),t._uU(14,"Receipt Number"),t.qZA(),t._UZ(15,"input",10),t.qZA()(),t.TgZ(16,"div",8)(17,"mat-form-field",9)(18,"mat-label"),t._uU(19,"Amount"),t.qZA(),t._UZ(20,"input",11),t.qZA()(),t.TgZ(21,"div",6),t.YNc(22,M,2,1,"app-ddl-searchable",7),t.qZA()()(),t.TgZ(23,"footer",12)(24,"div",13),t.YNc(25,P,2,0,"button",14),t.TgZ(26,"button",15),t.NdJ("click",function(){return c.close()}),t._uU(27,"Close"),t.qZA()()()()),2&s&&(t.xp6(3),t.Oqu(c.data?"Update Reminder":"Add New Reminder"),t.xp6(4),t.Q6J("formGroup",c.newServiceForm),t.xp6(3),t.Q6J("ngIf",c.statusObj),t.xp6(5),t.Q6J("readonly",c.typeSupplyed),t.xp6(7),t.Q6J("ngIf",c.banksObj),t.xp6(3),t.Q6J("ngIf",!c.data))},dependencies:[m.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,g.lW,f.Hw,E.KE,E.hX,O.Nt,C.g]}),d})()},278:(v,_,n)=>{n.d(_,{A:()=>t});var r=n(2340),o=n(4650),l=n(529);let t=(()=>{class a{constructor(e){this._httpClient=e}getAllTransactionAccount(e){return this._httpClient.post(`${r.N.baseApi}getAllTransactionAccount`,e)}addTransactionAccount(e){return this._httpClient.post(`${r.N.baseApi}addTransactionAccount`,e)}deleteTransactionAccount(e){return this._httpClient.delete(`${r.N.baseApi}deleteTransactionAccount/${e}`)}updateTransactionAccount(e,i){return this._httpClient.put(`${r.N.baseApi}updateTransactionAccount/${e}`,i)}}return a.\u0275fac=function(e){return new(e||a)(o.LFG(l.eN))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);