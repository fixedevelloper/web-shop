"use strict";(self.webpackChunkcreativ=self.webpackChunkcreativ||[]).push([[527],{1527:(pe,q,s)=>{s.r(q),s.d(q,{SaleModule:()=>ce});var c=s(8583),g=s(8909),y=s(4762),m=s(9344),U=s(8645),x=s(5124),e=s(3018),b=s(7846),T=s(3903),h=s(5469),v=s(9075),r=s(3679),u=s(7552),M=s(7871),A=s(8308);function N(i,a){if(1&i&&(e.TgZ(0,"ng-option",27),e._uU(1),e.qZA()),2&i){const n=a.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n.name)}}function w(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"label",10),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ng-select",25),e.NdJ("ngModelChange",function(o){return e.CHM(n),e.oxw().product=o})("change",function(o){return e.CHM(n),e.oxw().onChangeProduct(o)}),e.YNc(6,N,2,2,"ng-option",26),e.qZA(),e.qZA(),e.qZA()}if(2&i){const n=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,3,"fields.product")),e.xp6(2),e.Q6J("ngModel",n.product),e.xp6(1),e.Q6J("ngForOf",n.products)}}function Q(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"div",9),e.TgZ(2,"label",10),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"input",17),e.NdJ("ngModelChange",function(o){return e.CHM(n),e.oxw().codebarre=o}),e.qZA(),e.qZA(),e.qZA()}if(2&i){const n=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,2,"fields.codebarre")),e.xp6(2),e.Q6J("ngModel",n.codebarre)}}function k(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"tr"),e._UZ(1,"td"),e.TgZ(2,"td"),e._UZ(3,"avatar",19),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e.TgZ(11,"button",28),e.NdJ("click",function(){const l=e.CHM(n).$implicit;return e.oxw().removeLine(l)}),e._UZ(12,"i",29),e.qZA(),e.qZA(),e.qZA()}if(2&i){const n=a.$implicit;e.xp6(3),e.Q6J("shape","square")("size",100)("src",n.product.image),e.xp6(2),e.Oqu(n.product.name),e.xp6(2),e.Oqu(n.quantity),e.xp6(2),e.Oqu(n.product.price)}}class Z{constructor(a,n,t,o,l,d,_,C){this.modalService=a,this.router=n,this.toaster=t,this.databaseService=o,this.translateservice=l,this.cdr=d,this.sanitizer=_,this.route=C,this.products=[],this.lines=[],this.product={},this.quantity=1,this.amount=0,this.amountttc=0,this.imageSrc="/assets/images/avatars/placeholder.png",this.sellecodebarre=!1,this.rows=[],this.user1$.subscribe(f=>{this.currentuser=f})}ngOnInit(){this.databaseService.ProductGet(this.currentuser.shop).subscribe(a=>{this.products=a.data,this.cdr.markForCheck()},a=>{console.log(a)})}onReset(){}onChangeProduct(a){this.imageSrc=a.image}addLine(){this.lines.push({product:this.product,product_id:this.product.id,quantity:this.quantity}),this.amount+=Number(this.product.pricesell*this.quantity),this.amountttc+=Number(this.product.pricesell*this.quantity),console.log(this.lines)}removeLine(a){var n=this.lines.indexOf(a);if(-1!==n){var t=Number(a.product.pricesell*a.quantity);this.amount-=t,this.amountttc-=t,this.lines.splice(n,1)}}saveCaisse(){if(null==this.customer)this.toaster.error("veuillez ajouter un client","Warning!");else{var a=[];this.lines.forEach((t,o)=>{a.push({id:t.product_id,quantity:t.quantity})});const n={data:{customer:this.customer,amount:this.amount,amounttc:this.amountttc,shop:this.currentuser.shop,seller:this.currentuser.seller,lines:a}};console.log(n),this.databaseService.SaleAdd(n).subscribe(t=>{this.toaster.success(this.translateservice.instant("MESSAGES.SAVE_SUCCESS"),"OK"),this.lines=[],this.amountttc=0,this.amount=0,this.quantity=0,console.log(t.data),this.cdr.markForCheck(),this.databaseService.getFactureduplicata(t.data.id).subscribe(o=>{console.log(o.data),window.open(o.data.link,"_blank")},o=>{})},t=>{console.log(t),this.toaster.error(t.error.detail,t.code+" "+t.message)})}}}Z.\u0275fac=function(a){return new(a||Z)(e.Y36(b.tT),e.Y36(g.F0),e.Y36(m._W),e.Y36(T.k),e.Y36(h.sK),e.Y36(e.sBO),e.Y36(v.H7),e.Y36(g.gz))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-caisse"]],features:[e._Bn([m._W])],decls:75,vars:54,consts:[[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-body"],[1,"form-check","form-switch"],[1,"form-check-label","ms-2"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],["class","col-md-4",4,"ngIf"],[1,"col-md-4"],[1,"form-group","mb-3"],[1,"form-label"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-3"],["type","button",1,"btn","btn-primary","mt-4",3,"click"],[1,"feather","icon-more-horizontal"],[1,"table","table-bordered","mt-3"],[4,"ngFor","ngForOf"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","mb-1"],[3,"shape","size","src"],[1,"h4"],[1,"text-danger"],[1,"text-success"],["type","button",1,"btn","btn","btn-light","me-2",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"feather","icon-trash"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"h4"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.qZA(),e.TgZ(4,"div",0),e.TgZ(5,"div",1),e.TgZ(6,"div",2),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.TgZ(9,"label",5),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"input",6),e.NdJ("ngModelChange",function(o){return n.sellecodebarre=o}),e.qZA(),e.qZA(),e.TgZ(13,"div",0),e.YNc(14,w,7,5,"div",7),e.YNc(15,Q,6,4,"div",7),e.TgZ(16,"div",8),e.TgZ(17,"div",9),e.TgZ(18,"label",10),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"input",11),e.NdJ("ngModelChange",function(o){return n.quantity=o}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",12),e.TgZ(23,"button",13),e.NdJ("click",function(){return n.addLine()}),e._UZ(24,"i",14),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",0),e.TgZ(26,"table",15),e.TgZ(27,"thead"),e.TgZ(28,"tr"),e.TgZ(29,"th"),e._uU(30,"#"),e.qZA(),e.TgZ(31,"th"),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"th"),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"th"),e._uU(38),e.ALo(39,"translate"),e.qZA(),e.TgZ(40,"th"),e._uU(41),e.ALo(42,"translate"),e.qZA(),e._UZ(43,"th"),e.qZA(),e.qZA(),e.TgZ(44,"tbody"),e.YNc(45,k,13,6,"tr",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(46,"div",8),e.TgZ(47,"div",2),e.TgZ(48,"div",3),e.TgZ(49,"div",9),e.TgZ(50,"label",10),e._uU(51),e.ALo(52,"translate"),e.qZA(),e.TgZ(53,"input",17),e.NdJ("ngModelChange",function(o){return n.customer=o}),e.qZA(),e.qZA(),e.TgZ(54,"div",18),e._UZ(55,"avatar",19),e.qZA(),e.TgZ(56,"div",0),e.TgZ(57,"p",20),e._uU(58),e.ALo(59,"translate"),e.TgZ(60,"span",21),e._uU(61),e.ALo(62,"currency"),e.qZA(),e.qZA(),e.TgZ(63,"p",20),e._uU(64),e.ALo(65,"translate"),e.TgZ(66,"span",22),e._uU(67),e.ALo(68,"currency"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(69,"div",0),e.TgZ(70,"button",23),e.NdJ("click",function(){return n.onReset()}),e._uU(71,"Reset"),e.qZA(),e.TgZ(72,"button",24),e.NdJ("click",function(){return n.saveCaisse()}),e._uU(73),e.ALo(74,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(2),e.Oqu(e.lcZ(3,22,"title.salecaisse")),e.xp6(8),e.Oqu(e.lcZ(11,24,"title.scancodebarre")),e.xp6(2),e.Q6J("ngModel",n.sellecodebarre),e.xp6(2),e.Q6J("ngIf",!n.sellecodebarre),e.xp6(1),e.Q6J("ngIf",n.sellecodebarre),e.xp6(4),e.Oqu(e.lcZ(20,26,"fields.quantity")),e.xp6(2),e.Q6J("ngModel",n.quantity),e.xp6(11),e.Oqu(e.lcZ(33,28,"fields.image")),e.xp6(3),e.Oqu(e.lcZ(36,30,"fields.product")),e.xp6(3),e.Oqu(e.lcZ(39,32,"fields.quantity")),e.xp6(3),e.Oqu(e.lcZ(42,34,"fields.price")),e.xp6(4),e.Q6J("ngForOf",n.lines),e.xp6(6),e.Oqu(e.lcZ(52,36,"fields.customer")),e.xp6(2),e.Q6J("ngModel",n.customer),e.xp6(2),e.Q6J("shape","square")("size",150)("src",n.imageSrc),e.xp6(3),e.hij("",e.lcZ(59,38,"fields.amount"),": "),e.xp6(3),e.hij("",e.gM2(62,40,n.amount,"xaf","",".2-2")," FCFA"),e.xp6(3),e.hij("",e.lcZ(65,45,"fields.amountttc"),": "),e.xp6(3),e.hij("",e.gM2(68,47,n.amountttc,"xaf","",".2-2")," FCFA"),e.xp6(6),e.Oqu(e.lcZ(74,52,"action.save")))},directives:[r.Wl,u.oH,r.JJ,r.On,c.O5,u.HK,r.wV,r.Fj,c.sg,M.A,A.w9,A.xv],pipes:[h.X$,c.H9],styles:[""]}),(0,y.gn)([(0,U.Ph)(x.j)],Z.prototype,"user1$",void 0);var O=s(7361);const S=["childModal"];function F(i,a){1&i&&(e.TgZ(0,"span",34),e._uU(1,"journ\xe9e comptable clotur\xe9e"),e.qZA())}function H(i,a){1&i&&(e.TgZ(0,"span",35),e._uU(1,"journ\xe9e comptable ouverte"),e.qZA())}const L=function(i){return{"foreign-color":i}};let Y=(()=>{class i{constructor(n,t,o,l,d){this.datePipe=n,this.modalService=t,this.cdr=o,this.authenticationService=l,this.databaseService=d,this.config={backdrop:!0,ignoreBackdropClick:!1},this.billet10000=0,this.piece50=0,this.piece100=0,this.piece500=0,this.billet500=0,this.billet1000=0,this.billet2000=0,this.billet5000=0,this.totalbilletage=0,this.billetv5000=0,this.billetv10000=0,this.billetv2000=0,this.billetv1000=0,this.billetv500=0,this.piecev500=0,this.piecev100=0,this.piecev50=0,this.totalstaus=!1}ngOnInit(){console.log(this.datecomptable),this.cdr.detectChanges()}openModal(n){this.modalRef=this.modalService.show(n,this.config)}hideChildModal(){}onChange(n){}billetageChange(n,t){5e3==t?this.billetv5000=n*t:1e4==t?this.billetv10000=n*t:2e3==t?this.billetv2000=n*t:1e3==t?this.billetv1000=n*t:500==t&&(this.billetv500=n*t),this.totalbilletage=this.billetv10000+this.billetv5000+this.billetv2000+this.billetv1000+this.billetv500+this.piecev500+ +this.piecev100+this.piecev50,this.totalstaus=this.totalbilletage>=this.solde}pieceChange(n,t){500==t?this.piecev500=n*t:100==t?this.piecev100=n*t:50==t&&(this.piecev50=n*t),this.totalbilletage=this.billetv10000+this.billetv5000+this.billetv2000+this.billetv1000+this.billetv500+this.piecev500+ +this.piecev100+this.piecev50,this.totalstaus=this.totalbilletage>=this.solde}cloture(){}decloture(){}confirmSolde(){this.conrfimdisabled=!0,this.cloturedisabled=!1}calcul(){this.totalbilletage=0,this.billet10000=0,this.billet5000=0,this.billet1000=0,this.billet2000=0,this.billet500=0,this.piece500=0,this.piece100=0,this.piece50=0}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(c.uU),e.Y36(b.tT),e.Y36(e.sBO),e.Y36(O.$),e.Y36(T.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-journecomptable"]],viewQuery:function(n,t){if(1&n&&e.Gf(S,5),2&n){let o;e.iGM(o=e.CRH())&&(t.childModal=o.first)}},outputs:{datecomptable:"datecomptable"},features:[e._Bn([m._W,c.uU])],decls:104,vars:54,consts:[[1,"row"],[1,"col-md-4"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"input-group","mb-3"],["id","basic-addon10000",1,"input-group-text"],["type","number","placeholder","0","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"min","ngModel","change","ngModelChange"],["type","text","placeholder","0.0","aria-label","Server",1,"form-control",3,"ngModel","ngModelChange"],["id","basic-addon5000",1,"input-group-text"],["id","basic-addon2000",1,"input-group-text"],["id","basic-addon1000",1,"input-group-text"],["id","basic-addon500",1,"input-group-text"],["id","basic-addonp500",1,"input-group-text"],["id","basic-addon100",1,"input-group-text"],["id","basic-addon50",1,"input-group-text"],[1,"card-footer"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"input-group","mb-3",3,"ngClass"],["disabled","","type","number","placeholder","0","aria-label","Username","aria-describedby","basic-addon1",1,"form-control","solde",3,"ngModel","ngModelChange"],[1,"col-md-8"],["class","btn btn-danger btn-sm",4,"ngIf"],["class","btn btn-success btn-sm",4,"ngIf"],[1,"form-group","mb-3"],[1,"form-label"],["type","date",1,"form-control",3,"ngModel","change","ngModelChange"],[1,"form-group","mb-3","col-md-6"],["type","number","disabled","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-6"],["readonly","","type","number","disabled","",1,"form-control","solde",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-primary","btn-lg","col-md-8","mb-2",3,"disabled","click"],[1,"col-md-6","d-grid","gap-2"],["type","button",1,"btn","btn-success","col-md-6",3,"disabled","click"],["type","button",1,"btn","btn-danger","col-md-6",3,"disabled","click"],[1,"btn","btn-danger","btn-sm"],[1,"btn","btn-success","btn-sm"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"h4"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.qZA(),e.TgZ(4,"div",0),e.TgZ(5,"div",1),e.TgZ(6,"div",2),e.TgZ(7,"div",3),e.TgZ(8,"h4"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.TgZ(11,"div",4),e.TgZ(12,"div",5),e.TgZ(13,"span",6),e._uU(14,"10000"),e.qZA(),e.TgZ(15,"input",7),e.NdJ("change",function(){return t.billetageChange(t.billet10000,1e4)})("ngModelChange",function(l){return t.billet10000=l}),e.qZA(),e.TgZ(16,"input",8),e.NdJ("ngModelChange",function(l){return t.billetv10000=l}),e.qZA(),e.qZA(),e.TgZ(17,"div",5),e.TgZ(18,"span",9),e._uU(19,"5000"),e.qZA(),e.TgZ(20,"input",7),e.NdJ("change",function(){return t.billetageChange(t.billet5000,5e3)})("ngModelChange",function(l){return t.billet5000=l}),e.qZA(),e.TgZ(21,"input",8),e.NdJ("ngModelChange",function(l){return t.billetv5000=l}),e.qZA(),e.qZA(),e.TgZ(22,"div",5),e.TgZ(23,"span",10),e._uU(24,"2000"),e.qZA(),e.TgZ(25,"input",7),e.NdJ("change",function(){return t.billetageChange(t.billet2000,2e3)})("ngModelChange",function(l){return t.billet2000=l}),e.qZA(),e.TgZ(26,"input",8),e.NdJ("ngModelChange",function(l){return t.billetv2000=l}),e.qZA(),e.qZA(),e.TgZ(27,"div",5),e.TgZ(28,"span",11),e._uU(29,"1000"),e.qZA(),e.TgZ(30,"input",7),e.NdJ("change",function(){return t.billetageChange(t.billet1000,1e3)})("ngModelChange",function(l){return t.billet1000=l}),e.qZA(),e.TgZ(31,"input",8),e.NdJ("ngModelChange",function(l){return t.billetv1000=l}),e.qZA(),e.qZA(),e.TgZ(32,"div",5),e.TgZ(33,"span",12),e._uU(34,"500"),e.qZA(),e.TgZ(35,"input",7),e.NdJ("change",function(){return t.billetageChange(t.billet500,500)})("ngModelChange",function(l){return t.billet500=l}),e.qZA(),e.TgZ(36,"input",8),e.NdJ("ngModelChange",function(l){return t.billetv500=l}),e.qZA(),e.qZA(),e.TgZ(37,"h5"),e._uU(38,"Pi\xe9ces"),e.qZA(),e.TgZ(39,"div",5),e.TgZ(40,"span",13),e._uU(41,"500"),e.qZA(),e.TgZ(42,"input",7),e.NdJ("change",function(){return t.pieceChange(t.piece500,500)})("ngModelChange",function(l){return t.piece500=l}),e.qZA(),e.TgZ(43,"input",8),e.NdJ("ngModelChange",function(l){return t.piecev500=l}),e.qZA(),e.qZA(),e.TgZ(44,"div",5),e.TgZ(45,"span",14),e._uU(46,"100"),e.qZA(),e.TgZ(47,"input",7),e.NdJ("change",function(){return t.pieceChange(t.piece100,100)})("ngModelChange",function(l){return t.piece100=l}),e.qZA(),e.TgZ(48,"input",8),e.NdJ("ngModelChange",function(l){return t.piecev100=l}),e.qZA(),e.qZA(),e.TgZ(49,"div",5),e.TgZ(50,"span",15),e._uU(51,"50"),e.qZA(),e.TgZ(52,"input",7),e.NdJ("change",function(){return t.pieceChange(t.piece50,50)})("ngModelChange",function(l){return t.piece50=l}),e.qZA(),e.TgZ(53,"input",8),e.NdJ("ngModelChange",function(l){return t.piecev50=l}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(54,"div",16),e.TgZ(55,"button",17),e.NdJ("click",function(){return t.calcul()}),e._uU(56,"Reset"),e.qZA(),e.TgZ(57,"h4"),e._uU(58,"Total:"),e.qZA(),e.TgZ(59,"div",18),e.TgZ(60,"input",19),e.NdJ("ngModelChange",function(l){return t.totalbilletage=l}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(61,"div",20),e.TgZ(62,"div",2),e.TgZ(63,"div",3),e.TgZ(64,"h5"),e._uU(65),e.YNc(66,F,2,0,"span",21),e.YNc(67,H,2,0,"span",22),e.qZA(),e.qZA(),e.TgZ(68,"div",4),e.TgZ(69,"div",23),e.TgZ(70,"label",24),e._uU(71,"Date"),e.qZA(),e.TgZ(72,"input",25),e.NdJ("change",function(l){return t.onChange(l)})("ngModelChange",function(l){return t.datecomptable=l}),e.qZA(),e.qZA(),e.TgZ(73,"div",26),e.TgZ(74,"label",24),e._uU(75),e.ALo(76,"translate"),e.qZA(),e.TgZ(77,"input",27),e.NdJ("ngModelChange",function(l){return t.soldeouverture=l}),e.qZA(),e.qZA(),e.TgZ(78,"div",0),e.TgZ(79,"div",28),e.TgZ(80,"div",23),e.TgZ(81,"label",24),e._uU(82),e.ALo(83,"translate"),e.qZA(),e.TgZ(84,"input",27),e.NdJ("ngModelChange",function(l){return t.versement=l}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(85,"div",28),e.TgZ(86,"div",23),e.TgZ(87,"label",24),e._uU(88),e.ALo(89,"translate"),e.qZA(),e.TgZ(90,"input",27),e.NdJ("ngModelChange",function(l){return t.retrait=l}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(91,"div",23),e.TgZ(92,"label",24),e._uU(93,"Solde"),e.qZA(),e.TgZ(94,"input",29),e.NdJ("ngModelChange",function(l){return t.solde=l}),e.qZA(),e.qZA(),e.TgZ(95,"button",30),e.NdJ("click",function(){return t.confirmSolde()}),e._uU(96,"Confirmer le solde"),e.qZA(),e.TgZ(97,"div",0),e.TgZ(98,"div",31),e.TgZ(99,"button",32),e.NdJ("click",function(){return t.cloture()}),e._uU(100,"Clotur\xe9"),e.qZA(),e.qZA(),e.TgZ(101,"div",31),e.TgZ(102,"button",33),e.NdJ("click",function(){return t.decloture()}),e._uU(103,"D\xe9clotur\xe9"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,42,"title.journeecomptable")),e.xp6(7),e.Oqu(e.lcZ(10,44,"title.billetage")),e.xp6(6),e.Q6J("min",0)("ngModel",t.billet10000),e.xp6(1),e.Q6J("ngModel",t.billetv10000),e.xp6(4),e.Q6J("min",0)("ngModel",t.billet5000),e.xp6(1),e.Q6J("ngModel",t.billetv5000),e.xp6(4),e.Q6J("min",0)("ngModel",t.billet2000),e.xp6(1),e.Q6J("ngModel",t.billetv2000),e.xp6(4),e.Q6J("min",0)("ngModel",t.billet1000),e.xp6(1),e.Q6J("ngModel",t.billetv1000),e.xp6(4),e.Q6J("min",0)("ngModel",t.billet500),e.xp6(1),e.Q6J("ngModel",t.billetv500),e.xp6(6),e.Q6J("min",0)("ngModel",t.piece500),e.xp6(1),e.Q6J("ngModel",t.piecev500),e.xp6(4),e.Q6J("min",0)("ngModel",t.piece100),e.xp6(1),e.Q6J("ngModel",t.piecev100),e.xp6(4),e.Q6J("min",0)("ngModel",t.piece50),e.xp6(1),e.Q6J("ngModel",t.piecev50),e.xp6(6),e.Q6J("ngClass",e.VKq(52,L,t.totalstaus)),e.xp6(1),e.Q6J("ngModel",t.totalbilletage),e.xp6(5),e.hij("",t.caisse,"- "),e.xp6(1),e.Q6J("ngIf",!t.caissestatus),e.xp6(1),e.Q6J("ngIf",t.caissestatus),e.xp6(5),e.Q6J("ngModel",t.datecomptable),e.xp6(3),e.Oqu(e.lcZ(76,46,"fields.soldeouverture")),e.xp6(2),e.Q6J("ngModel",t.soldeouverture),e.xp6(5),e.Oqu(e.lcZ(83,48,"fields.versement")),e.xp6(2),e.Q6J("ngModel",t.versement),e.xp6(4),e.Oqu(e.lcZ(89,50,"fields.retrait")),e.xp6(2),e.Q6J("ngModel",t.retrait),e.xp6(4),e.Q6J("ngModel",t.solde),e.xp6(1),e.Q6J("disabled",t.conrfimdisabled),e.xp6(4),e.Q6J("disabled",t.cloturedisabled),e.xp6(3),e.Q6J("disabled",t.uncloturedisabled))},directives:[r.qQ,r.wV,r.Fj,u.oH,r.JJ,r.On,c.mk,c.O5,u.HK],pipes:[h.X$],styles:[""]}),i})();var p=s(8550),j=s(1875),R=s(519),E=s(2201);function z(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",25),e.TgZ(1,"input",26),e.NdJ("change",function(){const o=e.CHM(n);return o.selectFn(!o.allRowsSelected)}),e.qZA(),e.qZA()}if(2&i){const n=a.allRowsSelected;e.xp6(1),e.Q6J("checked",n)}}function I(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",25),e.TgZ(1,"input",26),e.NdJ("change",function(o){return e.CHM(n).onCheckboxChangeFn(o)}),e.qZA(),e.qZA()}if(2&i){const n=a.isSelected;e.xp6(1),e.Q6J("checked",n)}}function B(i,a){1&i&&e._uU(0),2&i&&e.hij(" ",a.rowIndex+1," ")}function P(i,a){if(1&i&&(e.TgZ(0,"div",27),e._UZ(1,"avatar",28),e.TgZ(2,"div",29),e.TgZ(3,"div",30),e._uU(4),e.qZA(),e.qZA(),e.qZA()),2&i){const n=a.row;e.xp6(1),e.Q6J("size",38)("src",n.image),e.xp6(3),e.Oqu(n.customer)}}function W(i,a){1&i&&e._uU(0),2&i&&e.hij(" ",a.row.amount," ")}function G(i,a){1&i&&e._uU(0),2&i&&e.hij(" ",a.row.amounttc," ")}function D(i,a){1&i&&(e._uU(0),e.ALo(1,"date")),2&i&&e.hij(" ",e.lcZ(1,1,a.row.created_at)," ")}function K(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"dropdown",31),e.NdJ("click",function(o){return e.CHM(n),e.MAs(4).toggle(o)}),e.TgZ(1,"a",32),e._UZ(2,"i",33),e.qZA(),e.TgZ(3,"dropdown-menu",34,35),e.TgZ(5,"a",36),e.NdJ("click",function(){const l=e.CHM(n).row,d=e.oxw(),_=e.MAs(48);return d.showDetail(l,_)}),e.TgZ(6,"div",27),e._UZ(7,"i",37),e.TgZ(8,"span",29),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"a",36),e.NdJ("click",function(){const l=e.CHM(n).row;return e.oxw().print(l.id)}),e.TgZ(12,"div",27),e._UZ(13,"i",12),e.TgZ(14,"span",29),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&i&&(e.xp6(9),e.Oqu(e.lcZ(10,2,"action.show")),e.xp6(6),e.Oqu(e.lcZ(16,4,"action.print")))}function V(i,a){if(1&i&&(e.TgZ(0,"tr"),e._UZ(1,"td"),e.TgZ(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.qZA()),2&i){const n=a.$implicit;e.xp6(3),e.Oqu(n.article),e.xp6(2),e.Oqu(n.quantity),e.xp6(2),e.Oqu(n.price),e.xp6(2),e.Oqu(n.price*n.quantity)}}function X(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",38),e.TgZ(1,"div",39),e.TgZ(2,"h5",40),e._uU(3),e.qZA(),e.TgZ(4,"button",41),e.NdJ("click",function(){return e.CHM(n),e.oxw().decline()}),e.qZA(),e.qZA(),e.TgZ(5,"div",42),e.TgZ(6,"table",43),e.TgZ(7,"thead"),e.TgZ(8,"tr"),e.TgZ(9,"th"),e._uU(10,"#"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Produit"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Quantit\xe9"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Prix"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Total"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"tbody"),e.YNc(20,V,10,4,"tr",44),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",45),e.TgZ(22,"button",46),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return o.print(o.id_)}),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.qZA(),e.qZA()}if(2&i){const n=e.oxw();e.xp6(3),e.hij("Detail de la vente N\xb0 ",n.id_,""),e.xp6(17),e.Q6J("ngForOf",n.lines),e.xp6(3),e.Oqu(e.lcZ(24,3,"action.print"))}}let $=(()=>{class i{constructor(n,t,o,l,d,_,C,f,ue){this.modalService=n,this.router=t,this.toaster=o,this.databaseService=l,this.translateservice=d,this.formBuilder=_,this.cdr=C,this.sanitizer=f,this.route=ue,this.rows=[],this.lines=[],this.selected=[],this.columnMode=p.hq.force,this.SelectionType=p.RT,this.rowHeight="auto",this.scrollbarH=!1,this.datedebut=null,this.datefin=null,this.scrollbarH=!0,this.cdr.markForCheck()}ngOnInit(){this.databaseService.SaleGetByPeriodeAndUser(this.datedebut,this.datefin,1).subscribe(n=>{this.rows=n.data,this.cdr.markForCheck()},n=>{console.log(n)})}showDetail(n,t){this.lines=[],this.lines=n.lines,this.id_=n.id,this.modalRef=this.modalService.show(t,{class:"modal-lg"})}search(){this.databaseService.SaleGetByPeriodeAndUser(this.datedebut,this.datefin,1).subscribe(n=>{this.rows=n.data,this.cdr.markForCheck()},n=>{console.log(n)})}print(n){this.databaseService.getFactureduplicata(n).subscribe(t=>{console.log(t.data),window.open(t.data.link,"_blank")},t=>{})}decline(){this.modalRef.hide()}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(b.tT),e.Y36(g.F0),e.Y36(m._W),e.Y36(T.k),e.Y36(h.sK),e.Y36(r.qu),e.Y36(e.sBO),e.Y36(v.H7),e.Y36(g.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-mysale"]],viewQuery:function(n,t){if(1&n&&e.Gf(p.nE,5),2&n){let o;e.iGM(o=e.CRH())&&(t.table=o.first)}},features:[e._Bn([m._W])],decls:49,vars:47,consts:[[1,"card"],[1,"card-header"],[1,"card-title","mb-2","fw-bolder"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],[1,"row"],[1,"col-md-4"],[1,"form-group","mb-3"],[1,"form-label"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","mt-4",3,"click"],[1,"feather","icon-search"],["type","button",1,"btn","btn-outline-success","mt-4",3,"click"],[1,"feather","icon-printer"],[1,"card-body"],[1,"table-responsive"],[3,"rows","columnMode","headerHeight","footerHeight","limit","loadingIndicator","selected","selectionType","rowHeight","scrollbarH"],["table",""],[3,"width","sortable","canAutoResize","draggable","resizeable"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","#",3,"width"],["prop","name",3,"name","width","canAutoResize","resizeable"],[3,"name","width"],["cellClass","allow-overflow",3,"sortable","width"],["templatedetail",""],[1,"form-check","mb-0"],["type","checkbox",1,"form-check-input",3,"checked","change"],[1,"d-flex","align-items-center"],[3,"size","src"],[1,"ms-2"],[1,"text-dark","fw-bold"],["dropdownClass","d-block text-end ms-3",3,"click"],["href","javascript:void(0)",1,"px-2"],[1,"feather","icon-more-vertical"],["alignment","right"],["action",""],["dropdownItem","","href","javascript:void(0)",3,"click"],[1,"feather","icon-eye"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","text-center"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-success",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h4",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"label",7),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"input",8),e.NdJ("ngModelChange",function(l){return t.datedebut=l}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",5),e.TgZ(14,"div",6),e.TgZ(15,"label",7),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"input",8),e.NdJ("ngModelChange",function(l){return t.datefin=l}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",5),e.TgZ(20,"button",9),e.NdJ("click",function(){return t.search()}),e._UZ(21,"i",10),e.qZA(),e.TgZ(22,"button",11),e.NdJ("click",function(){return t.search()}),e._UZ(23,"i",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",13),e.TgZ(25,"div",14),e.TgZ(26,"ngx-datatable",15,16),e.TgZ(28,"ngx-datatable-column",17),e.YNc(29,z,2,1,"ng-template",18),e.YNc(30,I,2,1,"ng-template",19),e.qZA(),e.TgZ(31,"ngx-datatable-column",20),e.YNc(32,B,1,1,"ng-template",19),e.qZA(),e.TgZ(33,"ngx-datatable-column",21),e.ALo(34,"translate"),e.YNc(35,P,5,3,"ng-template",19),e.qZA(),e.TgZ(36,"ngx-datatable-column",22),e.ALo(37,"translate"),e.YNc(38,W,1,1,"ng-template",19),e.qZA(),e.TgZ(39,"ngx-datatable-column",22),e.ALo(40,"translate"),e.YNc(41,G,1,1,"ng-template",19),e.qZA(),e.TgZ(42,"ngx-datatable-column",22),e.ALo(43,"translate"),e.YNc(44,D,2,3,"ng-template",19),e.qZA(),e.TgZ(45,"ngx-datatable-column",23),e.YNc(46,K,17,6,"ng-template",19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(47,X,25,5,"ng-template",null,24,e.W1O)),2&n&&(e.xp6(3),e.Oqu(e.lcZ(4,33,"title.mysale")),e.xp6(7),e.Oqu(e.lcZ(11,35,"fields.datebegin")),e.xp6(2),e.Q6J("ngModel",t.datedebut),e.xp6(4),e.Oqu(e.lcZ(17,37,"fields.dateend")),e.xp6(2),e.Q6J("ngModel",t.datefin),e.xp6(8),e.Q6J("rows",t.rows)("columnMode",t.columnMode)("headerHeight",50)("footerHeight",100)("limit",10)("loadingIndicator",!0)("selected",t.selected)("selectionType",t.SelectionType.multi)("rowHeight",t.rowHeight)("scrollbarH",t.scrollbarH),e.xp6(2),e.Q6J("width",30)("sortable",!1)("canAutoResize",!1)("draggable",!1)("resizeable",!1),e.xp6(3),e.Q6J("width",20),e.xp6(2),e.s9C("name",e.lcZ(34,39,"fields.customer")),e.Q6J("width",150)("canAutoResize",!1)("resizeable",!1),e.xp6(3),e.s9C("name",e.lcZ(37,41,"fields.amount")),e.Q6J("width",70),e.xp6(3),e.s9C("name",e.lcZ(40,43,"fields.amountttc")),e.Q6J("width",70),e.xp6(3),e.s9C("name",e.lcZ(43,45,"fields.createdat")),e.Q6J("width",70),e.xp6(3),e.Q6J("sortable",!1)("width",40))},directives:[u.HK,r.Fj,u.oH,r.JJ,r.On,p.nE,p.UC,p.tk,p.vq,M.A,j.L,R.h,E.h,c.sg],pipes:[h.X$,c.uU],styles:[""]}),i})();var J=s(2471),ee=s(8272);const te=[{path:"caisse",component:Z,canActivate:[ee.t],data:{title:"Caisse",hidePageHeader:!0,authorities:[J.W.SELLER,J.W.ADMIN]}},{path:"mysale",component:$,data:{title:"Mysale",hidePageHeader:!0}},{path:"journecomptable",component:Y,data:{title:"Support",hidePageHeader:!0}}];let ne=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild(te)],g.Bz]}),i})();var oe=s(4466),ie=s(4079),le=s(902),ae=s(8900),se=s(2563),re=s(8932),de=s(8090);let ce=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[ie.h,b.zk,A.A0,le.n,c.ez,p.xD,ae.F,se.k,u.VN,u.VN.forRoot(),m.Rh.forRoot(),re.fx,de.d,oe.m,ne]]}),i})()}}]);