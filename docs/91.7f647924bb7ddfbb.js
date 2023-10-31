"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[91],{3851:(A,m,n)=>{n.d(m,{v:()=>g});var i=n(529),r=n(2340),t=n(4650);let g=(()=>{class s{constructor(e){this.http=e}getAllCustomers(){return this.http.get(`${r.N.baseApi}allcustomers`)}getAllCustomersSearch(e){let u=new i.LE;return(e?.name||0==e?.active||1==e?.active)&&Object.entries(e).forEach(([v,h])=>{h&&(u=u.append(v,h)),"active"==v&&0==h&&(u=u.append("active",0))}),this.http.get(`${r.N.baseApi}searchCustomer`,{params:u})}deleteCustomer(e){return this.http.delete(`${r.N.baseApi}deleteCustomer/${e}`)}updateCustomer(e,u){return this.http.put(`${r.N.baseApi}updateCustomer/${e}`,u)}addCustomer(e){return this.http.post(`${r.N.baseApi}addCustomer`,e)}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(i.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},3091:(A,m,n)=>{n.r(m),n.d(m,{DashboardModule:()=>f});var i=n(6895),r=n(9299),t=n(4650),g=n(5076),s=n(3851);const e=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class a{constructor(l,o){this._TransactionsService=l,this._CustomersService=o,this.pettyCash=0,this.detailsProfite={},this.count=0,this.detailsProfiteMonthly={},this.countMonthly=0,this.amountCash=0,this.dateToday=new Date;var c=new Date;c.setUTCHours(0,0,0,0);var d=new Date;d.setUTCHours(23,59,59,999),this.filteration={date:!0,startedDate:c.toISOString(),endDate:d.toISOString()}}ngOnInit(){this.getPettyCash(),this.getAllTransactions()}getAllTransactions(){this.filteration.offset=this.filteration.offset>0?this.filteration.offset-1:0,this._TransactionsService.getSummary(this.filteration).subscribe({next:l=>{console.log("daily",l),this.dailySummary=l},error:l=>{console.log(l)}})}startOfMonth(l){return new Date(l.getFullYear(),l.getMonth(),1)}getAllTransactionsMonthly(){new Date;let o=new Date(2019,10,10);var c=new Date;c.setUTCHours(23,59,59,999),this.filteration={date:!0,startedDate:o,endDate:c.toISOString()},this.filteration.offset=this.filteration.offset>0?this.filteration.offset-1:0,this._TransactionsService.getAllTransactions(this.filteration).subscribe({next:d=>{this.countMonthly=d.result.count,this.detailsProfiteMonthly={...d.allProfite[0]},this.amountCash=+this.detailsProfiteMonthly.paymentAmount+this.pettyCash-+this.detailsProfiteMonthly.total_price_without_profite}}),this._TransactionsService.getSummary(this.filteration).subscribe({next:d=>{console.log("monthly",d),this.monthlySummary=d},error:d=>{console.log(d)}})}getPettyCash(){this._CustomersService.getAllCustomersSearch({name:"petty Cash"}).subscribe({next:l=>{this.pettyCash=l.result[0]?.transactions[0]?.paymentAmount||0,this.getAllTransactionsMonthly()}})}ngOnDestroy(){}}return a.\u0275fac=function(l){return new(l||a)(t.Y36(g.v),t.Y36(s.v))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-home-dashboard"]],decls:188,vars:83,consts:[[1,"container"],[1,"row","my-3"],[1,"text-info"],[1,"row","my-2"],[1,"col-md-6","col-12","col-xl-4"],[1,"card","comp-card"],[1,"card-body"],[1,"row","align-items-center"],[1,"col"],[1,"m-b-25"],[1,"f-w-700","text-c-blue"],[1,"m-b-0"],[1,"col-auto"],[1,"fas","fa-eye","bg-c-blue"],[1,"f-w-700","text-c-green"],[1,"fas","fa-bullseye","bg-c-green"],[1,"f-w-700","text-c-yellow"],[1,"fas","fa-hand-paper","bg-c-yellow"],[1,"fas","fa-hashtag","bg-c-blue"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"Summary Of Day"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"h6",9),t._uU(11),t.qZA(),t.TgZ(12,"h3",10),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",11),t._uU(16),t.ALo(17,"date"),t.qZA()(),t.TgZ(18,"div",12),t._UZ(19,"i",13),t.qZA()()()()(),t.TgZ(20,"div",4)(21,"div",5)(22,"div",6)(23,"div",7)(24,"div",8)(25,"h6",9),t._uU(26,"Total Balance"),t.qZA(),t.TgZ(27,"h3",14),t._uU(28),t.ALo(29,"currency"),t.qZA(),t.TgZ(30,"p",11),t._uU(31),t.ALo(32,"date"),t.qZA()(),t.TgZ(33,"div",12),t._UZ(34,"i",15),t.qZA()()()()(),t.TgZ(35,"div",4)(36,"div",5)(37,"div",6)(38,"div",7)(39,"div",8)(40,"h6",9),t._uU(41,"Total Payment Amount"),t.qZA(),t.TgZ(42,"h3",16),t._uU(43),t.ALo(44,"currency"),t.qZA(),t.TgZ(45,"p",11),t._uU(46),t.ALo(47,"date"),t.qZA()(),t.TgZ(48,"div",12),t._UZ(49,"i",17),t.qZA()()()()(),t.TgZ(50,"div",4)(51,"div",5)(52,"div",6)(53,"div",7)(54,"div",8)(55,"h6",9),t._uU(56,"Numbers of Transactions"),t.qZA(),t.TgZ(57,"h3",10),t._uU(58),t.qZA(),t.TgZ(59,"p",11),t._uU(60),t.ALo(61,"date"),t.qZA()(),t.TgZ(62,"div",12),t._UZ(63,"i",18),t.qZA()()()()(),t.TgZ(64,"div",4)(65,"div",5)(66,"div",6)(67,"div",7)(68,"div",8)(69,"h6",9),t._uU(70,"Total Supply"),t.qZA(),t.TgZ(71,"h3",10),t._uU(72),t.ALo(73,"currency"),t.qZA(),t.TgZ(74,"p",11),t._uU(75),t.ALo(76,"date"),t.qZA()(),t.TgZ(77,"div",12),t._UZ(78,"i",13),t.qZA()()()()(),t.TgZ(79,"div",4)(80,"div",5)(81,"div",6)(82,"div",7)(83,"div",8)(84,"h6",9),t._uU(85,"Total Expenses"),t.qZA(),t.TgZ(86,"h3",14),t._uU(87),t.ALo(88,"currency"),t.qZA(),t.TgZ(89,"p",11),t._uU(90),t.ALo(91,"date"),t.qZA()(),t.TgZ(92,"div",12),t._UZ(93,"i",15),t.qZA()()()()()(),t.TgZ(94,"div",1)(95,"h3",2),t._uU(96,"Summary Of Month"),t.qZA()(),t.TgZ(97,"div",3)(98,"div",4)(99,"div",5)(100,"div",6)(101,"div",7)(102,"div",8)(103,"h6",9),t._uU(104),t.qZA(),t.TgZ(105,"h3",10),t._uU(106),t.ALo(107,"currency"),t.qZA(),t.TgZ(108,"p",11),t._uU(109),t.ALo(110,"date"),t.qZA()(),t.TgZ(111,"div",12),t._UZ(112,"i",13),t.qZA()()()()(),t.TgZ(113,"div",4)(114,"div",5)(115,"div",6)(116,"div",7)(117,"div",8)(118,"h6",9),t._uU(119,"Cash"),t.qZA(),t.TgZ(120,"h3",14),t._uU(121),t.ALo(122,"currency"),t.qZA(),t.TgZ(123,"p",11),t._uU(124),t.ALo(125,"date"),t.qZA()(),t.TgZ(126,"div",12),t._UZ(127,"i",15),t.qZA()()()()(),t.TgZ(128,"div",4)(129,"div",5)(130,"div",6)(131,"div",7)(132,"div",8)(133,"h6",9),t._uU(134,"Total Customer Deposit"),t.qZA(),t.TgZ(135,"h3",16),t._uU(136),t.ALo(137,"currency"),t.qZA(),t.TgZ(138,"p",11),t._uU(139),t.ALo(140,"date"),t.qZA()(),t.TgZ(141,"div",12),t._UZ(142,"i",17),t.qZA()()()()(),t.TgZ(143,"div",4)(144,"div",5)(145,"div",6)(146,"div",7)(147,"div",8)(148,"h6",9),t._uU(149,"Total Balance"),t.qZA(),t.TgZ(150,"h3",10),t._uU(151),t.ALo(152,"currency"),t.qZA(),t.TgZ(153,"p",11),t._uU(154),t.ALo(155,"date"),t.qZA()(),t.TgZ(156,"div",12),t._UZ(157,"i",18),t.qZA()()()()(),t.TgZ(158,"div",4)(159,"div",5)(160,"div",6)(161,"div",7)(162,"div",8)(163,"h6",9),t._uU(164,"Total Supply"),t.qZA(),t.TgZ(165,"h3",10),t._uU(166),t.ALo(167,"currency"),t.qZA(),t.TgZ(168,"p",11),t._uU(169),t.ALo(170,"date"),t.qZA()(),t.TgZ(171,"div",12),t._UZ(172,"i",13),t.qZA()()()()(),t.TgZ(173,"div",4)(174,"div",5)(175,"div",6)(176,"div",7)(177,"div",8)(178,"h6",9),t._uU(179,"Total Expenses"),t.qZA(),t.TgZ(180,"h3",14),t._uU(181),t.ALo(182,"currency"),t.qZA(),t.TgZ(183,"p",11),t._uU(184),t.ALo(185,"date"),t.qZA()(),t.TgZ(186,"div",12),t._UZ(187,"i",15),t.qZA()()()()()()()),2&l&&(t.xp6(11),t.hij("Total Profite "," ( Gross )",""),t.xp6(2),t.Oqu(t.xi3(14,26,(null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.total_profite_gross)-(null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.commission)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(17,29,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(29,31,(null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.balanceDue)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(32,34,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(44,36,(null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.paymentAmount)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(47,39,o.dateToday)),t.xp6(12),t.Oqu((null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.count)||0),t.xp6(2),t.Oqu(t.lcZ(61,41,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(73,43,(null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.sumSupply)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(76,46,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(88,48,(null==o.dailySummary||null==o.dailySummary.summary?null:o.dailySummary.summary.sumExpenses)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(91,51,o.dateToday)),t.xp6(14),t.hij("Total Profite "," ( Gross )",""),t.xp6(2),t.Oqu(t.xi3(107,53,(null==o.monthlySummary||null==o.monthlySummary.summary?null:o.monthlySummary.summary.total_profite_gross)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(110,56,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(122,58,(null==o.monthlySummary||null==o.monthlySummary.summary?null:o.monthlySummary.summary.currentCash)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(125,61,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(137,63,(null==o.monthlySummary||null==o.monthlySummary.summary?null:o.monthlySummary.summary.totalDeposit)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(140,66,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(152,68,(null==o.monthlySummary||null==o.monthlySummary.summary?null:o.monthlySummary.summary.balanceDue)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(155,71,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(167,73,(null==o.monthlySummary||null==o.monthlySummary.summary?null:o.monthlySummary.summary.sumSupply)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(170,76,o.dateToday)),t.xp6(12),t.Oqu(t.xi3(182,78,(null==o.monthlySummary||null==o.monthlySummary.summary?null:o.monthlySummary.summary.sumExpenses)||0," AED ")),t.xp6(3),t.Oqu(t.lcZ(185,81,o.dateToday)))},dependencies:[i.H9,i.uU],styles:[".card[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 5px #2b2b2b1a,0 11px 6px -7px #2b2b2b1a;border:none;margin-bottom:30px;transition:all .3s ease-in-out;position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box}.card-body[_ngcontent-%COMP%]{flex:1 1 auto;padding:1.25rem}.col[_ngcontent-%COMP%]{flex-basis:0;flex-grow:1;max-width:100%}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}h6[_ngcontent-%COMP%]{font-size:16px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:500;font-family:quicksand,sans-serif}.text-c-blue[_ngcontent-%COMP%]{color:#4099ff}.f-w-700[_ngcontent-%COMP%]{font-weight:700}h3[_ngcontent-%COMP%]{font-size:24px}.m-b-0[_ngcontent-%COMP%]{margin-bottom:0}p[_ngcontent-%COMP%]{font-size:14px}.comp-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;width:50px;height:50px;border-radius:5px;text-align:center;padding:17px;font-size:18px;text-shadow:0 6px 8px rgba(62,57,107,.18);transition:all .3s ease-in-out}.bg-c-blue[_ngcontent-%COMP%]{background:#4099ff}.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%]{font-weight:900}.text-c-green[_ngcontent-%COMP%]{color:#2ed8b6}.text-c-yellow[_ngcontent-%COMP%]{color:#ffb64d}.comp-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;width:50px;height:50px;border-radius:5px;text-align:center;padding:17px 0;font-size:18px;text-shadow:0 6px 8px rgba(62,57,107,.18);transition:all .3s ease-in-out}.card-body[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{border-radius:50%}.bg-c-yellow[_ngcontent-%COMP%]{background:#ffb64d}.bg-c-green[_ngcontent-%COMP%]{background:#2ed8b6}"]}),a})()},{path:"transactions",loadChildren:()=>Promise.all([n.e(578),n.e(592),n.e(270)]).then(n.bind(n,2270)).then(a=>a.TransactionsModule)},{path:"services",loadChildren:()=>Promise.all([n.e(578),n.e(592),n.e(83)]).then(n.bind(n,83)).then(a=>a.ServiceModule)},{path:"customers",loadChildren:()=>Promise.all([n.e(578),n.e(664)]).then(n.bind(n,8664)).then(a=>a.CustomerModule)},{path:"reminders",loadChildren:()=>Promise.all([n.e(578),n.e(592),n.e(519)]).then(n.bind(n,3519)).then(a=>a.ReminderModule)},{path:"transactionAccount",loadChildren:()=>Promise.all([n.e(578),n.e(592),n.e(290)]).then(n.bind(n,5290)).then(a=>a.TransactionAccountModule)},{path:"banks",loadChildren:()=>Promise.all([n.e(578),n.e(592),n.e(411)]).then(n.bind(n,411)).then(a=>a.BanksModule)},{path:"sppliers",loadChildren:()=>Promise.all([n.e(592),n.e(699)]).then(n.bind(n,2699)).then(a=>a.SuppliersModule)},{path:"owners",loadChildren:()=>Promise.all([n.e(592),n.e(248)]).then(n.bind(n,248)).then(a=>a.OwnersModule)},{path:"accountant",loadChildren:()=>n.e(712).then(n.bind(n,712)).then(a=>a.AccountantModule)}];let u=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[r.Bz.forChild(e),r.Bz]}),a})();var v=n(805),h=n(4006),Z=n(1941);let f=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[i.ez,u,v.m8,h.UX,h.u5,Z.q]}),a})()},5076:(A,m,n)=>{n.d(m,{v:()=>g});var i=n(2340),r=n(4650),t=n(529);let g=(()=>{class s{constructor(e){this.http=e,this.baseURL=i.N.baseApi}getAllTransactions(e){return this.http.post(`${this.baseURL}allTransactions`,e)}addTransaction(e){return this.http.post(`${this.baseURL}addTransaction`,e)}deleteTransaction(e){return this.http.patch(`${this.baseURL}deleteTransactionSoft/${e}`,{})}updateTransaction(e,u){return this.http.put(`${this.baseURL}updateTransaction/${e}`,u)}getSummary(e){return this.http.post(`${i.N.baseApi}getTransactionsSummary`,e)}getAllBankAccount(){return this.http.get(`${i.N.baseApi}getAllBankAccount`)}getAllsuppliers(){return this.http.get(`${i.N.baseApi}allsupplier`)}addDipostHistory(e){return this.http.post(`${i.N.baseApi}addDepositHistory`,e)}getExpensesSum(){return this.http.get(`${i.N.baseApi}getExpensesSum`)}}return s.\u0275fac=function(e){return new(e||s)(r.LFG(t.eN))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);