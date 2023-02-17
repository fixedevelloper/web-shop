"use strict";(self.webpackChunkcreativ=self.webpackChunkcreativ||[]).push([[975],{8975:(Y,T,s)=>{s.r(T),s.d(T,{AuthModule:()=>O});var g=s(8909),A=s(4762),d=s(8645),p=s(5124),t=s(3018),l=s(8168),r=s(3679);class b{constructor(){this._subs=[]}add(...o){this._subs=this._subs.concat(o)}set sink(o){this._subs.push(o)}unsubscribe(){this._subs.forEach(o=>o&&o.unsubscribe()),this._subs=[]}}let x=(()=>{class e{constructor(){this.subs=new b}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var w=s(2759),q=s(7361),y=s(3903),m=s(8583),a=s(7552),f=s(8308),U=s(5469);function C(e,o){1&e&&t._UZ(0,"div",17)}function _(e,o){if(1&e&&(t.TgZ(0,"ng-option",18),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.Q6J("value",n.id),t.xp6(1),t.Oqu(n.libelle)}}function F(e,o){if(1&e&&(t.TgZ(0,"div",19),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.error)}}function R(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",20),t.TgZ(2,"span",21),t._uU(3,"or login with"),t.qZA(),t.qZA(),t.TgZ(4,"div",22),t.TgZ(5,"div",23),t.TgZ(6,"button",24),t._UZ(7,"img",25),t.qZA(),t.qZA(),t.TgZ(8,"div",23),t.TgZ(9,"button",24),t._UZ(10,"img",26),t.qZA(),t.qZA(),t.TgZ(11,"div",23),t.TgZ(12,"button",24),t._UZ(13,"img",27),t.qZA(),t.qZA(),t.qZA(),t.qZA())}let h=(()=>{class e extends x{constructor(n,i,Z,k,V,N){super(),this.store=n,this.formBuilder=i,this.route=Z,this.router=k,this.authService=V,this.databaseService=N,this.showResult=!1,this.showPassword=!1,this.loading=!1,this.error="",this.thirPartyLogin=!1,this.shops=[],this.currentuser=JSON.parse(localStorage.getItem("auth"))}ngOnInit(){this.databaseService.ShopGet().subscribe(n=>{this.shops=n.data},n=>{console.log(n)}),this.formGroup=this.formBuilder.group({username:["",[r.kI.required]],password:["",[r.kI.required]],shop:["",[r.kI.required]]})}login(){this.loading=!0,this.store.dispatch(new w.m3(this.formGroup.getRawValue())).subscribe(n=>{this.loading=!1,this.router.navigate(["/dashboard"])},n=>{this.error="Invalid Login or password",console.log(n.message),this.loading=!1})}onShowPasswordClick(){this.showPassword=!this.showPassword}onReset(){this.formGroup.reset()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.yh),t.Y36(r.qu),t.Y36(g.gz),t.Y36(g.F0),t.Y36(q.$),t.Y36(y.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["login-form"]],inputs:{thirPartyLogin:"thirPartyLogin"},features:[t.qOj],decls:27,vars:13,consts:[["class","alert alert-danger",4,"ngIf"],[3,"formGroup","validSubmit"],[1,"form-group","mb-3"],[1,"form-label"],["type","text","formControlName","username",1,"form-control","no-validation-icon","no-success-validation"],[1,"mb-3"],[1,"form-label","d-flex","justify-content-between"],["href","#",1,"text-primary","font"],[1,"form-group","input-affix","flex-column"],[1,"d-none"],["formControlName","password",1,"form-control","no-validation-icon","no-success-validation",3,"type"],[1,"suffix-icon","feather","cursor-pointer","text-dark",3,"ngClass","click"],["formControlName","shop"],[3,"value",4,"ngFor","ngForOf"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],["type","submit",1,"btn","btn-primary","w-100",3,"disabled"],[4,"ngIf"],[1,"alert","alert-danger"],[3,"value"],[1,"alert","alert-danger","mt-3","mb-0"],[1,"divider"],[1,"divider-text","text-muted"],[1,"row"],[1,"col","px-1"],[1,"btn","btn-outline-secondary","w-100"],["src","/assets/images/thumbs/thumb-1.png","alt","",2,"max-width","20px"],["src","/assets/images/thumbs/thumb-2.png","alt","",2,"max-width","20px"],["src","/assets/images/thumbs/thumb-3.png","alt","",2,"max-width","20px"]],template:function(n,i){1&n&&(t.YNc(0,C,1,0,"div",0),t.TgZ(1,"form",1),t.NdJ("validSubmit",function(){return i.login()}),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4,"Username"),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t.TgZ(8,"span"),t._uU(9,"Password"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Forget Password?"),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"label",9),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",10),t.TgZ(16,"i",11),t.NdJ("click",function(){return i.onShowPasswordClick()}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",2),t.TgZ(18,"label",3),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"ng-select",12),t.YNc(22,_,2,2,"ng-option",13),t.qZA(),t.qZA(),t.YNc(23,F,2,1,"div",14),t.TgZ(24,"button",15),t._uU(25,"Log In"),t.qZA(),t.qZA(),t.YNc(26,R,14,0,"div",16)),2&n&&(t.Q6J("ngIf",i.showResult),t.xp6(1),t.Q6J("formGroup",i.formGroup),t.xp6(14),t.Q6J("type",i.showPassword?"text":"password"),t.xp6(1),t.Q6J("ngClass",i.showPassword?"icon-eye-off":"icon-eye"),t.xp6(3),t.Oqu(t.lcZ(20,11,"fields.shop")),t.xp6(3),t.Q6J("ngForOf",i.shops),t.xp6(1),t.Q6J("ngIf",i.error),t.xp6(1),t.ekj("auth-spinner",i.loading),t.Q6J("disabled",i.loading),t.xp6(2),t.Q6J("ngIf",i.thirPartyLogin))},directives:[m.O5,r._Y,r.JL,r.sg,a.MU,a.HK,r.Fj,a.oH,r.JJ,r.u,m.mk,f.w9,m.sg,f.xv],pipes:[U.X$],encapsulation:2}),e})();class u{constructor(o){this.router=o}ngOnInit(){this.user1$.subscribe(o=>{this.currentuser=o})}}u.\u0275fac=function(o){return new(o||u)(t.Y36(g.F0))},u.\u0275cmp=t.Xpm({type:u,selectors:[["login"]],decls:20,vars:0,consts:[[1,"auth-full-height","d-flex","flex-row","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"card"],[1,"card-body"],[1,"m-2"],[1,"d-flex","justify-content-center","mt-3"],["logoType","fold",1,"text-center"],[1,"text-center","mt-3"],[1,"fw-bolder"],[1,"text-muted"],[1,"text-center","mt-4"],["href","/auth/register-1"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t._UZ(8,"logo",8),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"h3",10),t._uU(11,"Sign In"),t.qZA(),t.TgZ(12,"p",11),t._uU(13,"Sign in your account to continue"),t.qZA(),t.qZA(),t._UZ(14,"login-form"),t.TgZ(15,"div",12),t.TgZ(16,"p",11),t._uU(17,"Don't have an account yet? "),t.TgZ(18,"a",13),t._uU(19,"Sign Up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l.R,h],encapsulation:2}),(0,A.gn)([(0,d.Ph)(p.j)],u.prototype,"user1$",void 0);let L=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["login-v2"]],decls:25,vars:0,consts:[[1,"auth-full-height"],[1,"row","m-0"],[1,"col","p-0","auth-full-height",2,"background-image","url('/assets/images/others/bg-1.jpg')"],[1,"d-flex","justify-content-between","flex-column","h-100","px-5","py-3"],[1,"w-100"],[1,"display-4","text-white","mb-4"],[1,"text-white","lead",2,"max-width","630px"],[1,"d-flex","justify-content-between"],[1,"text-white"],["href","",1,"text-white","text-link","me-3"],["href","",1,"text-white","text-link"],[1,"col-12","p-0","auth-full-height","bg-white",2,"max-width","450px"],[1,"d-flex","h-100","align-items-center","p-5"],[1,"d-flex","justify-content-center","mt-3"],[1,"text-center"],[1,"mt-4"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"div"),t.TgZ(5,"div",4),t.TgZ(6,"h1",5),t._uU(7,"Start with Espire"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up."),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"span",8),t._uU(12,"\xa9 2021 ThemeNate"),t.qZA(),t.TgZ(13,"div"),t.TgZ(14,"a",9),t._uU(15,"Legal"),t.qZA(),t.TgZ(16,"a",10),t._uU(17,"Privacy"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"div",12),t.TgZ(20,"div",4),t.TgZ(21,"div",13),t._UZ(22,"logo",14),t.qZA(),t.TgZ(23,"div",15),t._UZ(24,"login-form"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l.R,h],encapsulation:2}),e})();class c{constructor(o){this.router=o}ngOnInit(){this.user1$.subscribe(o=>{this.currentuser=o}),null!==this.currentuser.id&&this.router.navigate(["/dashboard"])}}function S(e,o){1&e&&(t.ynx(0),t.TgZ(1,"span",9),t._uU(2,"Password not match"),t.qZA(),t.BQk())}c.\u0275fac=function(o){return new(o||c)(t.Y36(g.F0))},c.\u0275cmp=t.Xpm({type:c,selectors:[["login-v3"]],decls:19,vars:2,consts:[[1,"auth-full-height","container","d-flex","flex-column","justify-content-center"],[1,"row","justify-content-center"],[1,"col-md-9"],[1,"card","row","mx-0","flex-row","overflow-hidden"],[1,"col-md-4","bg-size-cover","d-flex","align-items-center","p-4",2,"background-image","url('/assets/images/others/bg-2.jpg')"],[1,"mb-5"],[3,"white","height"],[1,"text-white"],[1,"text-white","mt-4","mb-5","o-75"],[1,"col-md-8","px-0"],[1,"card-body"],[1,"my-5","mx-auto",2,"max-width","350px"],[1,"mb-3"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t.TgZ(6,"div",5),t._UZ(7,"logo",6),t.qZA(),t.TgZ(8,"h3",7),t._uU(9,"X-SHOP"),t.qZA(),t.TgZ(10,"p",8),t._uU(11,"X-SHOP."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"div",11),t.TgZ(15,"div",12),t.TgZ(16,"h3"),t._uU(17,"Login"),t.qZA(),t.qZA(),t._UZ(18,"login-form"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("white",!0)("height",80))},directives:[l.R,h],encapsulation:2}),(0,A.gn)([(0,d.Ph)(p.j)],c.prototype,"user1$",void 0);let v=(()=>{class e{constructor(n){this.formBuilder=n,this.confirmationValidator=i=>i.value?i.value!==this.formGroup.controls.password.value?{confirm:!0,error:!0}:{}:{required:!0}}ngOnInit(){this.formGroup=this.formBuilder.group({username:[null,[r.kI.required]],email:[null,[r.kI.required,r.kI.email]],password:[null,[r.kI.required]],confirmPassword:[null,[r.kI.required,this.confirmationValidator]]})}register(){console.log(this.formGroup)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["register-form"]],decls:20,vars:2,consts:[[3,"formGroup","validSubmit"],[1,"form-group","mb-3"],[1,"form-label"],["type","text","formControlName","username",1,"form-control","no-validation-icon","no-success-validation"],["type","email","formControlName","email",1,"form-control","no-validation-icon","no-success-validation"],["type","password","formControlName","password",1,"form-control","no-validation-icon","no-success-validation"],["type","password","formControlName","confirmPassword",1,"form-control","no-validation-icon","no-success-validation"],[4,"ngIf"],["type","submit",1,"btn","btn-primary","d-block","w-100"],[1,"invalid-feedback"]],template:function(n,i){1&n&&(t.TgZ(0,"form",0),t.NdJ("validSubmit",function(){return i.register()}),t.TgZ(1,"div",1),t.TgZ(2,"label",2),t._uU(3,"Username"),t.qZA(),t._UZ(4,"input",3),t.qZA(),t.TgZ(5,"div",1),t.TgZ(6,"label",2),t._uU(7,"Email"),t.qZA(),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"label",2),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.TgZ(13,"div",1),t.TgZ(14,"label",2),t._uU(15,"Confirm Password"),t.qZA(),t._UZ(16,"input",6),t.YNc(17,S,3,0,"ng-container",7),t.qZA(),t.TgZ(18,"button",8),t._uU(19,"Sign Up"),t.qZA(),t.qZA()),2&n&&(t.Q6J("formGroup",i.formGroup),t.xp6(17),t.Q6J("ngIf",i.formGroup.get("confirmPassword").hasError("confirm")))},directives:[r._Y,r.JL,r.sg,a.MU,a.HK,r.Fj,a.oH,r.JJ,r.u,m.O5],encapsulation:2}),e})();const j=[{path:"login",component:c},{path:"login/v2",component:L},{path:"login/v3",component:u},{path:"register",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["register"]],decls:15,vars:0,consts:[[1,"auth-full-height","d-flex","flex-row","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-4"],[1,"card"],[1,"card-body"],[1,"m-2"],[1,"d-flex","justify-content-center","mt-3"],["logoType","fold",1,"text-center"],[1,"text-center","mt-3"],[1,"fw-bolder"],[1,"text-muted"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t._UZ(8,"logo",8),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"h3",10),t._uU(11,"Sign Up"),t.qZA(),t.TgZ(12,"p",11),t._uU(13,"Sign up account to get free reward!"),t.qZA(),t.qZA(),t._UZ(14,"register-form"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l.R,v],encapsulation:2}),e})()},{path:"register/v2",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["register-v2"]],decls:29,vars:0,consts:[[1,"auth-full-height"],[1,"row","m-0"],[1,"col","p-0","auth-full-height",2,"background-image","url('/assets/images/others/bg-4.jpg')"],[1,"d-flex","justify-content-between","flex-column","h-100","px-5","py-3"],[1,"w-100","text-center"],["src","/assets/images/others/img-1.png","alt","",1,"img-fluid",2,"max-height","430px"],[1,"display-4","mt-5","mb-4"],[1,"lead","mx-auto","text-muted",2,"max-width","630px"],[1,"d-flex","justify-content-between"],["href","",1,"text-link","ms-3"],["href","",1,"text-link"],[1,"col-12","p-0","auth-full-height","bg-white",2,"max-width","450px"],[1,"d-flex","h-100","align-items-center","p-5"],[1,"w-100"],[1,"d-flex","justify-content-center","mt-3"],["logoType","fold",1,"text-center"],[1,"text-center","mt-4"],[1,"mt-4"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"div"),t.TgZ(5,"div",4),t._UZ(6,"img",5),t.TgZ(7,"h1",6),t._uU(8,"Sign up with Espire"),t.qZA(),t.TgZ(9,"p",7),t._uU(10,"Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up."),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"span"),t._uU(13,"\xa9 2021 ThemeNate"),t.qZA(),t.TgZ(14,"div"),t.TgZ(15,"a",9),t._uU(16,"Legal"),t.qZA(),t.TgZ(17,"a",10),t._uU(18,"Privacy"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t.TgZ(20,"div",12),t.TgZ(21,"div",13),t.TgZ(22,"div",14),t._UZ(23,"logo",15),t.qZA(),t.TgZ(24,"div",16),t.TgZ(25,"h3"),t._uU(26,"Create Account"),t.qZA(),t.qZA(),t.TgZ(27,"div",17),t._UZ(28,"register-form"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l.R,v],encapsulation:2}),e})()},{path:"register/v3",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["register-v3"]],decls:19,vars:2,consts:[[1,"auth-full-height","container","d-flex","flex-column","justify-content-center"],[1,"row","justify-content-center"],[1,"col-md-9"],[1,"card","row","mx-0","flex-row","overflow-hidden"],[1,"col-md-4","bg-size-cover","d-flex","align-items-center","p-4",2,"background-image","url('/assets/images/others/bg-3.jpg')"],[1,"mb-5"],[3,"white","height"],[1,"text-white"],[1,"text-white","mt-4","mb-5","o-75"],[1,"col-md-8","px-0"],[1,"card-body"],[1,"my-5","mx-auto",2,"max-width","350px"],[1,"mb-3"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t.TgZ(6,"div",5),t._UZ(7,"logo",6),t.qZA(),t.TgZ(8,"h3",7),t._uU(9,"Make your work easier"),t.qZA(),t.TgZ(10,"p",8),t._uU(11,"Climb leg rub face on everything give attitude under the bed."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"div",11),t.TgZ(15,"div",12),t.TgZ(16,"h3",12),t._uU(17,"Sign Up"),t.qZA(),t._UZ(18,"register-form"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.Q6J("white",!0)("height",50))},directives:[l.R,v],encapsulation:2}),e})()}];let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(j)],g.Bz]}),e})();var P=s(4466),J=s(4079);let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[q.$],imports:[[I,P.m,J.h,f.A0,d.$l.forFeature([p.j]),m.ez,a.VN.forRoot()]]}),e})()}}]);