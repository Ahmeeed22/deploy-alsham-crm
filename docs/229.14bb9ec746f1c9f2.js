"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[229],{1229:(v,a,r)=>{r.r(a),r.d(a,{AccountantModule:()=>A});var s=r(6895),l=r(9299),t=r(4650),u=r(5076),d=r(7185);function p(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.BQk()),2&e){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(t.xi3(5,2,o.total_balance," AED "))}}function m(e,n){if(1&e&&(t.TgZ(0,"tr",9),t.YNc(1,p,6,5,"ng-container",10),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("ngIf",0!==o.total_balance)}}let g=(()=>{class e{constructor(o,c){this._TransactionsService=o,this.toaster=c,this.listDeptors=[],this.getSumBalance()}ngOnInit(){}getSumBalance(){this._TransactionsService.getSumBalance().subscribe({next:o=>{console.log(o),this.listDeptors=o?.result?.sumBalance,this.totalBalance=this.listDeptors.reduce((c=0,i)=>c+i.total_balance,0),this.toaster.success("success get Deptors","success")},error:o=>{console.log(o)}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.v),t.Y36(d._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-debtor"]],decls:15,vars:1,consts:[[1,"container"],[1,"row","my-3"],[1,"col-12","header-container"],[1,"text-info"],[1,"row"],[1,"table","table-bordered","table-hover",2,"min-width","670px"],[1,"thead-dark"],["scope","col",1,"text-center"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],[4,"ngIf"],["scope","row",1,"w-50"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Deptors"),t.qZA()()(),t.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),t._uU(10,"Customer Name"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Amount"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,m,2,1,"tr",8),t.qZA()()()()),2&o&&(t.xp6(14),t.Q6J("ngForOf",c.listDeptors))},dependencies:[s.sg,s.O5,s.H9],styles:[".header-container[_ngcontent-%COMP%]{padding:15px;color:#333;border-bottom:1px solid #ccc}.header-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.header-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}"]}),e})();var h=r(3851);function C(e,n){if(1&e&&(t.TgZ(0,"tr",9)(1,"td",10),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA()()),2&e){const o=n.$implicit;t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(t.xi3(5,2,o.deposite," AED "))}}const f=[{path:"",redirectTo:"balanceSheat",pathMatch:"full"},{path:"deptors",component:g},{path:"creditors",component:(()=>{class e{constructor(o,c){this._CustomersService=o,this.toaster=c,this.totalDeposite=0,this.getCreditors()}ngOnInit(){}getCreditors(){this._CustomersService.getAllCustomersSearch({deposite:!0}).subscribe({next:o=>{console.log(o),this.listCreditors=o.result,this.totalDeposite=o.result.reduce((c=0,i)=>c+i.deposite,0),console.log("totalDeposite = ",this.totalDeposite),this.toaster.success("success get Creditors","success")}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(h.v),t.Y36(d._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-creditor"]],decls:15,vars:1,consts:[[1,"container"],[1,"row","my-3"],[1,"col-12","header-container"],[1,"text-info"],[1,"row"],[1,"table","table-bordered","table-hover",2,"min-width","670px"],[1,"thead-dark"],["scope","col",1,"text-center"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],["scope","row",1,"w-50"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Creditors"),t.qZA()()(),t.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),t._uU(10,"Customer Name"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Amount"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,C,6,5,"tr",8),t.qZA()()()()),2&o&&(t.xp6(14),t.Q6J("ngForOf",c.listCreditors))},dependencies:[s.sg,s.H9],styles:[".header-container[_ngcontent-%COMP%]{padding:15px;color:#333;border-bottom:1px solid #ccc}.header-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.header-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}"]}),e})()},{path:"balanceSheat",loadChildren:()=>Promise.all([r.e(592),r.e(197)]).then(r.bind(r,5197)).then(e=>e.BalanceSheatModule)}];let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(f),l.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,x]}),e})()}}]);