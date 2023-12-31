"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8363],{8363:(q,d,r)=>{r.r(d),r.d(d,{MisPlanesPageModule:()=>x});var p=r(6814),g=r(95),o=r(29),u=r(1379),m=r(5861),P=r(5619),n=r(9468);let h=(()=>{var t;class i{constructor(e){this.modalCtrl=e}ngOnInit(){}regresar(){this.modalCtrl.dismiss()}}return(t=i).\u0275fac=function(e){return new(e||t)(n.Y36(o.IN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-plan-detail"]],inputs:{plan:"plan"},decls:24,vars:6,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["fill","clear",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],[1,"miTitle"],[3,"src"]],template:function(e,l){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),n.NdJ("tap",function(){return l.regresar()}),n._UZ(4,"ion-icon",4),n.qZA()(),n.TgZ(5,"ion-title",5),n._uU(6," PlanDetail "),n.qZA()()(),n.TgZ(7,"ion-content")(8,"ion-card"),n._UZ(9,"img",6),n.TgZ(10,"ion-card-header")(11,"ion-card-title")(12,"h2"),n._uU(13),n.qZA()(),n.TgZ(14,"ion-card-title")(15,"h3"),n._uU(16),n.qZA()()(),n.TgZ(17,"ion-card-content")(18,"h4"),n._uU(19),n.qZA(),n.TgZ(20,"h6"),n._uU(21),n.qZA(),n.TgZ(22,"p"),n._uU(23),n.qZA()()()()),2&e&&(n.xp6(9),n.s9C("src",l.plan.img,n.LSH),n.xp6(4),n.Oqu(l.plan.name),n.xp6(3),n.Oqu(l.plan.title),n.xp6(3),n.Oqu(l.plan.date),n.xp6(2),n.Oqu(l.plan.time),n.xp6(2),n.Oqu(l.plan.desc))},dependencies:[o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.W2,o.Gu,o.gu,o.wd,o.sr],styles:["h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-dark)}"]}),i})();var _=r(7612),f=r(5342);function Z(t,i){if(1&t){const a=n.EpF();n.TgZ(0,"ion-toolbar",6)(1,"ion-buttons",7)(2,"ion-button",8),n.NdJ("tap",function(){n.CHM(a);const l=n.oxw();return n.KtG(l.backButtonClickPlan())}),n._UZ(3,"ion-icon",9),n.qZA(),n.TgZ(4,"div",10),n._uU(5),n.ALo(6,"async"),n.qZA()(),n.TgZ(7,"ion-title"),n._uU(8," DeletePlan "),n.qZA(),n.TgZ(9,"ion-buttons",11)(10,"ion-button",8),n.NdJ("tap",function(){n.CHM(a);const l=n.oxw();return n.KtG(l.removeSelectedPlan())}),n._UZ(11,"ion-icon",12),n.qZA()()()}if(2&t){const a=n.oxw();n.xp6(5),n.Oqu(n.lcZ(6,1,a.planItemCount))}}function C(t,i){1&t&&(n.TgZ(0,"ion-toolbar",13)(1,"ion-buttons",7),n._UZ(2,"ion-menu-button"),n.qZA(),n.TgZ(3,"ion-title",14),n._uU(4," Mis Planes "),n.qZA()())}const T=function(t){return{"selected-plan":t}};function b(t,i){if(1&t){const a=n.EpF();n.TgZ(0,"ion-item-sliding",15),n.NdJ("press",function(){const s=n.CHM(a).$implicit,c=n.oxw();return n.KtG(c.selectPlan(s.id))}),n.TgZ(1,"ion-item",16)(2,"ion-thumbnail",7),n._UZ(3,"ion-img",17),n.qZA(),n.TgZ(4,"ion-label")(5,"h2")(6,"b"),n._uU(7),n.qZA()(),n.TgZ(8,"h2")(9,"b"),n._uU(10),n.qZA()()()(),n.TgZ(11,"ion-item-options",11)(12,"ion-item-option",18),n.NdJ("tap",function(){const s=n.CHM(a).$implicit,c=n.oxw();return n.KtG(c.planDetail(s))}),n._UZ(13,"ion-icon",19),n.qZA(),n.TgZ(14,"ion-item-option",6),n._UZ(15,"ion-icon",20),n.qZA()()()}if(2&t){const a=i.$implicit,e=n.oxw();n.Q6J("ngClass",n.VKq(4,T,e.selectedPlan===a.id)),n.xp6(3),n.s9C("src",a.img),n.xp6(4),n.Oqu(a.name),n.xp6(3),n.Oqu(a.title)}}const M=[{path:"",component:(()=>{var t;class i{constructor(e,l,s,c,A){this.navCtrl=e,this.alertCtrl=l,this.modalCtrl=s,this.uiService=c,this.planService=A,this.hostalcorzin=[],this.plan={title:"",desc:"",date:"",time:"",img:""},this.deletePlan=!1,this.planItemCount=new P.X(0)}ngOnInit(){this.loadPlanes()}recargar(e){this.loadPlanes(),this.planes=[]}loadPlanes(){this.planService.getPlanes().subscribe(e=>{this.planes=e})}planDetail(e){var l=this;return(0,m.Z)(function*(){yield(yield l.modalCtrl.create({mode:"md",component:h,componentProps:{plan:e}})).present()})()}clearPlan(){this.selectedPlan=null}selectPlan(e){this.deletePlan=!0,this.selectedPlan===e?this.clearPlan():this.selectedPlan=e,this.addPlanToolbar(this.plan)}addPlanToolbar(e){let l=!1;for(let s of this.hostalcorzin)if(s._id===e.id){s.amount+=1,l=!0;break}l||(e.amount=1,this.hostalcorzin.push(e)),this.planItemCount.next(this.planItemCount.value+1)}removeSelectedPlan(){var e=this;return(0,m.Z)(function*(){yield(yield e.alertCtrl.create({header:"Warning!!!",message:"You want to delete the message??",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:s=>{console.log("Confirmado Cancelar: blah"),e.backButtonClickPlan()}},{text:"OK",handler:()=>{console.log("Confirmado Aceptar"),e.planService.deletePlan(e.selectedPlan).subscribe(s=>{e.clearPlan(),e.loadPlanes(),e.backButtonClickPlan(),e.uiService.presentToast("Deleted plan")},s=>{console.log(s)})}}]})).present()})()}backButtonClickPlan(){this.clearPlan(),this.deletePlan=!1}}return(t=i).\u0275fac=function(e){return new(e||t)(n.Y36(o.SH),n.Y36(o.Br),n.Y36(o.IN),n.Y36(_.F),n.Y36(f.D))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-mis-planes"]],decls:8,vars:3,consts:[[1,"ion-no-border"],["color","tertiary",4,"ngIf"],["color","primary",4,"ngIf"],[1,"ion-padding"],["slot","fixed",3,"ionRefresh"],[3,"ngClass","press",4,"ngFor","ngForOf"],["color","tertiary"],["slot","start"],[3,"tap"],["color","light","slot","icon-only","md","arrow-back-sharp"],[1,"hostalcorzin-length"],["slot","end"],["color","light","slot","icon-only","md","trash-sharp"],["color","primary"],[1,"miTitle"],[3,"ngClass","press"],["button","","lines","none"],[3,"src"],["color","primary",3,"tap"],["md","eye-sharp","slot","icon-only","color","light"],["md","create-sharp","slot","icon-only","color","light"]],template:function(e,l){1&e&&(n.TgZ(0,"ion-header",0),n.YNc(1,Z,12,3,"ion-toolbar",1),n.YNc(2,C,5,0,"ion-toolbar",2),n.qZA(),n.TgZ(3,"ion-content",3)(4,"ion-refresher",4),n.NdJ("ionRefresh",function(c){return l.recargar(c)}),n._UZ(5,"ion-refresher-content"),n.qZA(),n.TgZ(6,"ion-list"),n.YNc(7,b,16,6,"ion-item-sliding",5),n.qZA()()),2&e&&(n.xp6(1),n.Q6J("ngIf",l.deletePlan),n.xp6(1),n.Q6J("ngIf",!l.deletePlan),n.xp6(5),n.Q6J("ngForOf",l.planes))},dependencies:[p.mk,p.sg,p.O5,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.Xz,o.Ie,o.u8,o.IK,o.td,o.Q$,o.q_,o.fG,o.nJ,o.Wo,o.Bs,o.wd,o.sr,p.Ov]}),i})()}];let v=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.Bz.forChild(M),u.Bz]}),i})();var y=r(822);let x=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.ez,g.u5,o.Pc,v,y.K]}),i})()}}]);