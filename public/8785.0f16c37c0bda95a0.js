"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8785],{8785:(_,d,s)=>{s.r(d),s.d(d,{AccountPageModule:()=>Z});var g=s(6814),p=s(95),n=s(29),l=s(1379),t=s(9468),m=s(7612),h=s(3076);function A(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item-sliding")(1,"ion-item",5)(2,"ion-thumbnail",2),t._UZ(3,"ion-img",6),t.qZA(),t.TgZ(4,"ion-label")(5,"h2")(6,"b"),t._uU(7),t.qZA()()()(),t.TgZ(8,"ion-item-options",7)(9,"ion-item-option",8),t.NdJ("tap",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.accountDetail(a._id))}),t._UZ(10,"ion-icon",9),t.qZA(),t.TgZ(11,"ion-item-option",10),t.NdJ("tap",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.accountUpdate(a._id))}),t._UZ(12,"ion-icon",11),t.qZA()()()}if(2&o){const e=c.$implicit;t.xp6(3),t.s9C("src",e.avatar),t.xp6(4),t.Oqu(e.name)}}const v=[{path:"",component:(()=>{var o;class c{constructor(i,r,a,u,C,P,y){this.router=i,this.cd=r,this.navCtrl=a,this.alertCtrl=u,this.popoverCtrl=C,this.uiService=P,this.userService=y}ngOnInit(){this.loadUsers()}loadUsers(){this.userService.getUsers().subscribe(i=>{console.log(i),this.usuarios=i,this.cd.detectChanges()})}accountDetail(i){this.navCtrl.navigateForward(`/account-detail/${i}`)}accountUpdate(i){this.navCtrl.navigateForward(`/account-update/${i}`)}}return(o=c).\u0275fac=function(i){return new(i||o)(t.Y36(l.F0),t.Y36(t.sBO),t.Y36(n.SH),t.Y36(n.Br),t.Y36(n.Dh),t.Y36(m.F),t.Y36(h.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-account"]],decls:9,vars:1,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["button","","lines","none"],[3,"src"],["slot","end"],["color","primary",3,"tap"],["md","eye-sharp","slot","icon-only","color","light"],["color","tertiary",3,"tap"],["md","create-sharp","slot","icon-only","color","light"]],template:function(i,r){1&i&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5," Account "),t.qZA()()(),t.TgZ(6,"ion-content",3)(7,"ion-list"),t.YNc(8,A,13,2,"ion-item-sliding",4),t.qZA()()),2&i&&(t.xp6(8),t.Q6J("ngForOf",r.usuarios))},dependencies:[g.sg,n.Sm,n.W2,n.Gu,n.gu,n.Xz,n.Ie,n.u8,n.IK,n.td,n.Q$,n.q_,n.fG,n.Bs,n.wd,n.sr]}),c})()}];let f=(()=>{var o;class c{}return(o=c).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(v),l.Bz]}),c})(),Z=(()=>{var o;class c{}return(o=c).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,p.u5,n.Pc,f]}),c})()}}]);