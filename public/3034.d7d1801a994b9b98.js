"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3034],{3034:(A,c,s)=>{s.r(c),s.d(c,{RegistroPageModule:()=>C});var p=s(6814),a=s(95),n=s(29),u=s(1379),Z=s(5861),o=s(9468),v=s(7612),y=s(2333);function P(e,r){1&e&&(o.TgZ(0,"ion-note",22),o._uU(1,"Email is invalid"),o.qZA())}function _(e,r){1&e&&o._UZ(0,"ion-input",23)}function b(e,r){1&e&&o._UZ(0,"ion-input",24)}function w(e,r){1&e&&(o.TgZ(0,"ion-note",22),o._uU(1,"Password needs to be 6 characters"),o.qZA())}function R(e,r){1&e&&o._UZ(0,"ion-icon",25)}function T(e,r){1&e&&o._UZ(0,"ion-icon",26)}const U=[{path:"",component:(()=>{var e;class r{constructor(i,t,g,m,f,h,d){this.fb=i,this.router=t,this.navCtrl=g,this.alertCtrl=m,this.loadingCtrl=f,this.uiService=h,this.authService=d,this.showPwd=!1}ngOnInit(){this.credentials=this.fb.group({avatar:["assets/img/avatar.png"],name:["Felipe",[a.kI.required]],email:["jfelipestc@gmail.com",[a.kI.required,a.kI.email]],password:["19041968",[a.kI.required,a.kI.minLength(6)]]})}get name(){return this.credentials.get("name")}get email(){return this.credentials.get("email")}get password(){return this.credentials.get("password")}regresar(){this.navCtrl.navigateBack("intro")}register(){var i=this;return(0,Z.Z)(function*(){const t=yield i.loadingCtrl.create({cssClass:"miLoging",message:"Please wait...",duration:2e3,spinner:"bubbles"});yield t.present(),i.authService.registro(i.credentials.value).then(d=>{!0===d?i.router.navigateByUrl("/home",{replaceUrl:!0}):i.uiService.alertaInformativaLogin("Error",d,"error")}),yield t.dismiss()})()}}return(e=r).\u0275fac=function(i){return new(i||e)(o.Y36(a.qu),o.Y36(u.F0),o.Y36(n.SH),o.Y36(n.Br),o.Y36(n.HT),o.Y36(v.F),o.Y36(y.e))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-registro"]],decls:48,vars:8,consts:[[1,"ion-no-border"],["slot","start"],[3,"tap"],["slot","icon-only","md","arrow-back-sharp","color","dark"],[3,"formGroup","ngSubmit"],[1,"input-group"],["lines","none"],["position","floating"],["type","text","formControlName","name"],["type","email","formControlName","email"],["slot","error",4,"ngIf"],["type","text","formControlName","password",4,"ngIf"],["type","password","formControlName","password",4,"ngIf"],["fill","clear","slot","end","color","dark",3,"tap"],["slot","icon-only","name","eye","color","dark",4,"ngIf"],["slot","icon-only","name","eye-off","color","dark",4,"ngIf"],["type","submit","expand","block","shape","round",1,"miBoton",3,"disabled"],[1,"text"],[1,"ion-text-center"],["type","button","expand","block","shape","round","routerLink","/login",1,"miBoton"],["type","button","expand","block","shape","round",1,"miBoton"],["md","logo-google","slot","start","color","light"],["slot","error"],["type","text","formControlName","password"],["type","password","formControlName","password"],["slot","icon-only","name","eye","color","dark"],["slot","icon-only","name","eye-off","color","dark"]],template:function(i,t){1&i&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),o.NdJ("tap",function(){return t.regresar()}),o._UZ(4,"ion-icon",3),o.qZA()(),o.TgZ(5,"ion-title"),o._uU(6," Registrate "),o.qZA()()(),o.TgZ(7,"ion-content")(8,"form",4),o.NdJ("ngSubmit",function(){return t.register()}),o.TgZ(9,"div",5)(10,"ion-item",6)(11,"ion-label",7),o._uU(12,"Name"),o.qZA(),o._UZ(13,"ion-input",8),o.qZA(),o.TgZ(14,"ion-item",6)(15,"ion-label",7),o._uU(16,"Email"),o.qZA(),o._UZ(17,"ion-input",9),o.YNc(18,P,2,0,"ion-note",10),o.qZA(),o.TgZ(19,"ion-item",6)(20,"ion-label",7),o._uU(21,"Password"),o.qZA(),o.YNc(22,_,1,0,"ion-input",11),o.YNc(23,b,1,0,"ion-input",12),o.YNc(24,w,2,0,"ion-note",10),o.TgZ(25,"ion-button",13),o.NdJ("tap",function(){return t.showPwd=!t.showPwd}),o.YNc(26,R,1,0,"ion-icon",14),o.YNc(27,T,1,0,"ion-icon",15),o.qZA()()(),o.TgZ(28,"ion-button",16),o._uU(29," Registrate "),o.qZA(),o.TgZ(30,"div",17)(31,"ion-text")(32,"h3",18)(33,"strong"),o._uU(34," Reg\xedstrate gratis y podr\xe1s acceder a todos los servicios de la app HostalCorz\xedn"),o.qZA()()(),o.TgZ(35,"ion-text",18)(36,"h3")(37,"strong"),o._uU(38,"\xbfYa tienes una cuenta?"),o.qZA()()()(),o.TgZ(39,"ion-button",19),o._uU(40," IniciarSesi\xf3n "),o.qZA(),o.TgZ(41,"ion-text",18)(42,"h1")(43,"strong"),o._uU(44,"OR"),o.qZA()()(),o.TgZ(45,"ion-button",20),o._uU(46," Continuar con Google "),o._UZ(47,"ion-icon",21),o.qZA()()()),2&i&&(o.xp6(8),o.Q6J("formGroup",t.credentials),o.xp6(10),o.Q6J("ngIf",(t.email.dirty||t.email.touched)&&t.email.errors),o.xp6(4),o.Q6J("ngIf",t.showPwd),o.xp6(1),o.Q6J("ngIf",!t.showPwd),o.xp6(1),o.Q6J("ngIf",(t.password.dirty||t.password.touched)&&t.password.errors),o.xp6(2),o.Q6J("ngIf",t.showPwd),o.xp6(1),o.Q6J("ngIf",!t.showPwd),o.xp6(1),o.Q6J("disabled",!t.credentials.valid))},dependencies:[p.O5,a._Y,a.JJ,a.JL,n.YG,n.Sm,n.W2,n.Gu,n.gu,n.pK,n.Ie,n.Q$,n.uN,n.yW,n.wd,n.sr,n.j9,n.YI,u.rH,a.sg,a.u],styles:[".input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}"]}),r})()}];let I=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.Bz.forChild(U),u.Bz]}),r})(),C=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[p.ez,a.u5,n.Pc,I,a.UX]}),r})()}}]);