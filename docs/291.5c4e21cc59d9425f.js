"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[291],{8291:(g,r,e)=>{e.r(r),e.d(r,{AccountantModule:()=>p});var a=e(6895),s=e(9299),t=e(4650),l=e(5076);function u(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.BQk()),2&n){const o=t.oxw().$implicit;t.xp6(2),t.Oqu(o.customer.name),t.xp6(2),t.Oqu(o.total_balance)}}function i(n,c){if(1&n&&(t.TgZ(0,"tr",9),t.YNc(1,u,5,2,"ng-container",10),t.qZA()),2&n){const o=c.$implicit;t.xp6(1),t.Q6J("ngIf",0!==o.total_balance)}}const d=[{path:"",redirectTo:"balanceSheat",pathMatch:"full"},{path:"deptors",component:(()=>{class n{constructor(o){this._TransactionsService=o,this.listDeptors=[],this.getSumBalance()}ngOnInit(){}getSumBalance(){this._TransactionsService.getSumBalance().subscribe({next:o=>{console.log(o.result.sumBalance),this.listDeptors=o.result.sumBalance},error:o=>{console.log(o)}})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-debtor"]],decls:15,vars:1,consts:[[1,"container"],[1,"row","my-3"],[1,"col-12"],[1,"text-info"],[1,"row"],[1,"table","table-bordered","table-hover",2,"min-width","670px"],[1,"thead-dark"],["scope","col",1,"text-center"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],[4,"ngIf"],["scope","row",1,"w-50"]],template:function(o,h){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Deptor"),t.qZA()()(),t.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),t._uU(10,"Customer Name"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Amount"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,i,2,1,"tr",8),t.qZA()()()()),2&o&&(t.xp6(14),t.Q6J("ngForOf",h.listDeptors))},dependencies:[a.sg,a.O5]}),n})()},{path:"balanceSheat",loadChildren:()=>Promise.all([e.e(592),e.e(197)]).then(e.bind(e,5197)).then(n=>n.BalanceSheatModule)}];let m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(d),s.Bz]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,m]}),n})()}}]);