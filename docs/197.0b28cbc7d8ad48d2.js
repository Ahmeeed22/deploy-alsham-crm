"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[197],{5197:(w,h,o)=>{o.r(h),o.d(h,{BalanceSheatModule:()=>B});var r=o(6895),c=o(9299),u=o(4004),l=o(262),p=o(9646),m=o(4128),t=o(4650),g=o(9325),d=o(6e3),f=o(9298),A=o(4952),Z=o(5076);function x(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA()()),2&n){const s=i.$implicit;t.xp6(2),t.Oqu(s.name),t.xp6(2),t.Oqu(t.xi3(5,2,s.balance," AED "))}}function S(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",8),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA()()),2&n){const s=i.$implicit;t.xp6(2),t.Oqu(s.name),t.xp6(2),t.Oqu(t.xi3(5,2,s.balance," AED "))}}const b=[{path:"",component:(()=>{class n{constructor(s,e,a,v,T){this._BanksService=s,this._SppliersService=e,this._AuthService=a,this._OwnerService=v,this._TransactionsService=T,this.banks=[],this.suppliers=[],this.sumDeposit=0,this.sumBalance=0,this.sumCommission=0,this.sumCapital=0,this.sumDrawing=0,this.totalProfie=0,this.assets=0,this.expenses=0,this.cash=0,this.paymentAmount=0,this.sumBanksBalance=0,this.sumBalanceSupplier=0,this.total_price_without_profite=0,this.getSumBalance()}calculateCash(){this.cash=this.paymentAmount+this.sumDeposit+this.sumCapital-this.sumDrawing-this.expenses-this.total_price_without_profite-this.sumBalanceSupplier-this.sumBanksBalance}getAllbanks(){return this._BanksService.getAllBanks().pipe((0,u.U)(s=>{this.banks=s.result.rows;for(let e=0;e<this.banks.length;e++)this.sumBanksBalance+=this.banks[e].balance;return this.sumBanksBalance}),(0,l.K)(s=>(console.log(s),(0,p.of)(0))))}getAllSuppliers(){return this._SppliersService.getAllSuppliers().pipe((0,u.U)(s=>{this.suppliers=s.result.rows;for(let e=0;e<this.suppliers.length;e++)this.sumBalanceSupplier+=this.suppliers[e].balance;return this.sumBalanceSupplier}),(0,l.K)(s=>(console.log(s),(0,p.of)(0))))}calculateAssets(){(0,m.D)([this.getAllbanks(),this.getAllSuppliers(),this.getSumDeposites()]).subscribe(([s,e,a])=>{this.assets=s+e,console.log("assets = ",this.assets,"sumDeposit",a)})}getSumDeposites(){return this._AuthService.getSumDeposit().pipe((0,u.U)(s=>(this.sumDeposit=s.result.sumDeposite,this.sumDeposit)),(0,l.K)(s=>(console.log(s),(0,p.of)(0))))}getSumBalance(){this.calculateAssets(),this._AuthService.getSumBalance().subscribe({next:s=>{this.sumBalance=s.result.sumBalanceCustomers,this.sumCommission=s.result.sumCommission,this.paymentAmount=+s.result.totalPayment,this.totalProfie=s.result.totalProfit,this.total_price_without_profite=s.result.total_price_without_profite,console.log("sumBalance ,sumCommission , totalProfie = ",s),this._OwnerService.getCapitalAndOwnerDrawing().subscribe({next:e=>{this.sumDrawing=e.result.drowingSum,this.sumCapital=e.result.investSum,console.log(e),this._TransactionsService.getExpensesSum().subscribe({next:a=>{console.log("expensesSum ",a.expensesSum),this.expenses=a.expensesSum,this.cash=this.paymentAmount+this.sumDeposit+this.sumCapital-(this.sumDrawing+this.expenses+this.total_price_without_profite+this.sumBalanceSupplier+this.sumBanksBalance)},error:a=>{console.log(a)}})},error:e=>{console.log(e)}})}})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(g.G),t.Y36(d.h),t.Y36(f.e),t.Y36(A.T),t.Y36(Z.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-show-balance-sheat"]],decls:111,vars:54,consts:[[1,"container"],[1,"row","my-3","mx-0"],[1,"text-info"],[1,"row"],[1,"table","table-bordered",2,"min-width","670px"],[1,"thead-dark"],["scope","col","colspan","2",1,"text-center"],[4,"ngFor","ngForOf"],["scope","row"],[1,"table-borderless","w-100"],[1,"d-flex","justify-content-between"],[2,"padding-left","0px !important"],[1,"bg-dark","font-weight-bolder","text-info"],[2,"border-right","2px solid #fff"],["scope","col","colspan","2",1,"text-center","bg-dark","text-white"],["scope","row",1,"co"],[1,"table","table-borderless","text-center"],[2,"border-bottom","2px solid #000","font-weight","600"],[1,""],["scope","row","colspan","2",1,"text-center","font-weight-bolder",2,"font-size","24px"],["scope","row",1,"w-50"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Balance sheet"),t.qZA()(),t.TgZ(4,"div",3)(5,"table",4)(6,"thead",5)(7,"tr")(8,"th",6),t._uU(9,"Assets"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,x,6,5,"tr",7),t.TgZ(12,"tr")(13,"td",8),t._uU(14,"Cash"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"currency"),t.qZA()(),t.YNc(18,S,6,5,"tr",7),t.TgZ(19,"tr")(20,"td",8),t._uU(21,"Debtors"),t.qZA(),t.TgZ(22,"td")(23,"table",9)(24,"tr",10)(25,"td",11),t._uU(26),t.ALo(27,"currency"),t.qZA(),t.TgZ(28,"div",12)(29,"td",13),t._uU(30,"Total"),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.ALo(33,"currency"),t.qZA()()()()()(),t.TgZ(34,"th",14),t._uU(35,"Liabilities"),t.qZA(),t.TgZ(36,"tr")(37,"td",8),t._uU(38,"Creditors"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.ALo(41,"currency"),t.qZA()(),t.TgZ(42,"tr")(43,"td",8),t._uU(44,"Commission "),t.qZA(),t.TgZ(45,"td")(46,"table",9)(47,"tr",10)(48,"td",11),t._uU(49),t.ALo(50,"currency"),t.qZA(),t.TgZ(51,"div",12)(52,"td",13),t._uU(53,"Total"),t.qZA(),t.TgZ(54,"td"),t._uU(55),t.ALo(56,"currency"),t.qZA()()()()()(),t.TgZ(57,"th",14),t._uU(58,"Owner Equity"),t.qZA(),t.TgZ(59,"tr")(60,"td",8),t._uU(61,"Capital"),t.qZA(),t.TgZ(62,"td"),t._uU(63),t.ALo(64,"currency"),t.qZA()(),t.TgZ(65,"tr")(66,"td",8),t._uU(67,"Owner Drawings "),t.qZA(),t.TgZ(68,"td"),t._uU(69),t.ALo(70,"currency"),t.qZA()(),t.TgZ(71,"tr")(72,"td",8),t._uU(73,"Net Profite"),t.qZA(),t.TgZ(74,"td")(75,"table",9)(76,"tr",10)(77,"td",11),t._uU(78),t.ALo(79,"currency"),t.qZA(),t.TgZ(80,"div",12)(81,"td",13),t._uU(82,"Total"),t.qZA(),t.TgZ(83,"td"),t._uU(84),t.ALo(85,"currency"),t.qZA()()()()()(),t.TgZ(86,"th",14),t._uU(87,"Basic Account Equations"),t.qZA(),t.TgZ(88,"tr")(89,"td",15),t._uU(90,"Equal Accounts"),t.qZA(),t.TgZ(91,"td")(92,"table",16)(93,"tr",17)(94,"td"),t._uU(95,"Assets"),t.qZA(),t.TgZ(96,"td"),t._uU(97,"Sum( Liabilities&&Owner Equity ) "),t.qZA()(),t.TgZ(98,"tr",18)(99,"td"),t._uU(100),t.ALo(101,"currency"),t.qZA(),t.TgZ(102,"td"),t._uU(103),t.ALo(104,"currency"),t.qZA()()()()(),t.TgZ(105,"th",14),t._uU(106,"Correct Mistakes"),t.qZA(),t.TgZ(107,"tr")(108,"td",19),t._uU(109),t.ALo(110,"currency"),t.qZA()()()()()()),2&s&&(t.xp6(11),t.Q6J("ngForOf",e.banks),t.xp6(5),t.Oqu(t.xi3(17,15,e.cash," AED ")),t.xp6(2),t.Q6J("ngForOf",e.suppliers),t.xp6(8),t.Oqu(t.xi3(27,18,e.sumBalance," AED ")),t.xp6(6),t.Oqu(t.xi3(33,21,e.assets+e.sumBalance+e.cash," AED ")),t.xp6(8),t.Oqu(t.xi3(41,24,e.sumDeposit," AED ")),t.xp6(9),t.Oqu(t.xi3(50,27,e.sumCommission," AED ")),t.xp6(6),t.Oqu(t.xi3(56,30,e.sumCommission+e.sumDeposit," AED ")),t.xp6(8),t.Oqu(t.xi3(64,33,e.sumCapital," AED ")),t.xp6(6),t.Oqu(t.xi3(70,36,e.sumDrawing," AED ")),t.xp6(9),t.Oqu(t.xi3(79,39,e.totalProfie-e.expenses," AED ")),t.xp6(6),t.Oqu(t.xi3(85,42,e.totalProfie-e.expenses+e.sumCapital-e.sumDrawing," AED ")),t.xp6(16),t.Oqu(t.xi3(101,45,e.assets+e.sumBalance+e.cash," AED ")),t.xp6(3),t.hij("",t.xi3(104,48,e.sumCommission+e.sumDeposit+e.totalProfie-e.expenses+e.sumCapital-e.sumDrawing," AED ")," "),t.xp6(6),t.Oqu(t.xi3(110,51,e.assets+e.cash+e.sumBalance-(e.sumCommission+e.sumDeposit+e.totalProfie-e.expenses+e.sumCapital-e.sumDrawing)," AED ")))},dependencies:[r.sg,r.H9],styles:["button[_ngcontent-%COMP%]{color:#fff;margin:0 5px}button.addTask[_ngcontent-%COMP%]{background-color:#63e38a!important;color:#fff;padding:2px 23px;font-size:20px}[_nghost-%COMP%]     table thead{background-color:#7e807e!important}[_nghost-%COMP%]     table thead .mat-header-cell{color:#fff}button[_ngcontent-%COMP%]{transition:all .4s;border-radius:13px}button[_ngcontent-%COMP%]:hover{border-radius:30px}.hhover[_ngcontent-%COMP%]:hover{color:#fff!important}th[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:0!important}[_nghost-%COMP%]     .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:141px}[_nghost-%COMP%]     .mat-form-field-label-wrapper{position:absolute;left:12px;z-index:1000;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[_nghost-%COMP%]     input.mat-input-element{margin-top:-.0625em;height:38px}[_nghost-%COMP%]     .mat-form-field-infix{padding:0!important}[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;inset:.25em 0 0;pointer-events:none;height:53px}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.45rem;vertical-align:top}table[_ngcontent-%COMP%]{padding:.15rem;vertical-align:top}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,C]}),n})()}}]);