(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,n,r){"use strict";r.r(n),r.d(n,"AuthModule",function(){return p});var e=r("ofXK"),o=r("tyNb"),i=r("fXoL"),c=r("N/25"),s=r("zkoq"),a=r("bTqV");const u=[{path:"",children:[{path:"login",component:(()=>{class t{constructor(t,n){this.router=t,this.authService=n}login(){this.authService.login().subscribe(t=>{console.log(t),t.id&&this.router.navigate(["./heroes"])})}ingresarSinLogin(){this.authService.logout(),this.router.navigate(["./heroes"])}}return t.\u0275fac=function(n){return new(n||t)(i.Kb(o.b),i.Kb(c.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-login"]],decls:6,vars:0,consts:[["cols","1"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,n){1&t&&(i.Pb(0,"mat-grid-list",0),i.Pb(1,"mat-grid-tile"),i.Pb(2,"button",1),i.Xb("click",function(){return n.login()}),i.tc(3," Ingresar "),i.Ob(),i.Pb(4,"button",2),i.Xb("click",function(){return n.ingresarSinLogin()}),i.tc(5," Ingresar sin login "),i.Ob(),i.Ob(),i.Ob())},directives:[s.a,s.c,a.a],encapsulation:2}),t})()},{path:"registro",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-registro"]],decls:2,vars:0,template:function(t,n){1&t&&(i.Pb(0,"p"),i.tc(1,"registro works!"),i.Ob())},encapsulation:2}),t})()},{path:"**",redirectTo:"login"}]}];let l=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},imports:[[o.e.forChild(u)],o.e]}),t})();var b=r("hctd");let p=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},imports:[[e.b,l,b.a]]}),t})()}}]);