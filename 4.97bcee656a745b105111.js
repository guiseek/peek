(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{e3w9:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",function(){return G});var r=n("ACwI"),o=n("tAjX"),a=n("tyNb"),s=n("3Pt+"),c=n("fXoL"),i=n("u47x"),u=n("Wp6s"),m=n("wZkO"),p=n("kmnG"),b=n("qFsG");let l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",f=new Uint8Array(256);for(let j=0;j<l.length;j++)f[l.charCodeAt(j)]=j;function d(t,e){return function(t,e){const n=(65535&t)+(65535&e),r=(t>>>16)+(e>>>16)+(n>>>16);return[r>>>16,r<<16|65535&n]}(t,e)[1]}function w(t,e){return t<<e|t>>>32-e}var g=function(t){return t[t.Little=0]="Little",t[t.Big=1]="Big",t}({});function h(t,e,n,r){return t<20?[e&n|~e&r,1518500249]:t<40?[e^n^r,1859775393]:t<60?[e&n|e&r|n&r,2400959708]:[e^n^r,3395469782]}function O(t,e){return"string"==typeof t?e>=t.length?0:255&t.charCodeAt(e):e>=t.byteLength?0:255&t[e]}function P(t,e,n){let r=0;if(n===g.Big)for(let o=0;o<4;o++)r+=O(t,e+o)<<24-8*o;else for(let o=0;o<4;o++)r+=O(t,e+o)<<8*o;return r}var C=n("lJxs"),y=n("tk/3");let k=(()=>{class t{constructor(t){this._http=t}validate({value:t}){if(t){const e=function(t){const e=t;return function(t,e){const n=[];let[r,o,a,s,c]=[1732584193,4023233417,2562383102,271733878,3285377520];t[e>>5]|=128<<24-e%32,t[15+(e+64>>9<<4)]=e;for(let i=0;i<t.length;i+=16){const[e,u,m,p,b]=[r,o,a,s,c];for(let l=0;l<80;l++){n[l]=l<16?t[i+l]:w(n[l-3]^n[l-8]^n[l-14]^n[l-16],1);const[e,u]=h(l,o,a,s),m=[w(r,5),e,c,u,n[l]].reduce(d);[c,s,a,o,r]=[s,a,w(o,30),r,m]}[r,o,a,s,c]=[d(r,e),d(o,u),d(a,m),d(s,p),d(c,b)]}return function(t){let e="";for(let n=0;n<t.length;n++){const r=O(t,n);e+=(r>>>4).toString(16)+(15&r).toString(16)}return e.toLowerCase()}(function(t){return t.reduce((t,e)=>t+function(t){let e="";for(let n=0;n<4;n++)e+=String.fromCharCode(t>>>8*(3-n)&255);return e}(e),"")}([r,o,a,s,c]))}(function(t,e){const n=t.length+3>>>2,r=[];for(let o=0;o<n;o++)r[o]=P(t,4*o,e);return r}(e,g.Big),8*e.length)}(t),n=e.slice(0,5),r=({passhash:t})=>e.toUpperCase()===n.toUpperCase()+t;return this._http.post("/auth/check",{hash:n}).pipe(Object(C.a)((t=[])=>t.find(r)),Object(C.a)(t=>t?{pwned:t.records}:null))}}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(y.a))},t.\u0275dir=c.Fb({type:t,selectors:[["","peekPwnedCheck",""]],features:[c.yb([{provide:s.i,useExisting:t,multi:!0}])]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["peek-sign-up"]],inputs:{form:"form"},decls:21,vars:1,consts:[[3,"formGroup"],["matInput","","type","text","autofocus","","cdkFocusInitial","","autocomplete","given-name","formControlName","name"],["matInput","","type","text","name","username","autocomplete","username","formControlName","username"],["matInput","","peekPwnedCheck","","type","password","autocomplete","new-password","formControlName","password"]],template:function(t,e){1&t&&(c.Pb(0,"form",0),c.Pb(1,"mat-form-field"),c.Pb(2,"mat-label"),c.wc(3,"Nome"),c.Ob(),c.Lb(4,"input",1),c.Pb(5,"mat-hint"),c.wc(6,"Opcional"),c.Ob(),c.Ob(),c.Pb(7,"mat-form-field"),c.Pb(8,"mat-label"),c.wc(9,"Usu\xe1rio"),c.Ob(),c.Lb(10,"input",2),c.Pb(11,"mat-hint"),c.wc(12,"Apenas caracteres alfanum\xe9rico"),c.Ob(),c.Pb(13,"mat-error"),c.wc(14,"Obrigat\xf3rio"),c.Ob(),c.Ob(),c.Pb(15,"mat-form-field"),c.Pb(16,"mat-label"),c.wc(17,"Senha"),c.Ob(),c.Lb(18,"input",3),c.Pb(19,"mat-error"),c.wc(20,"Obrigat\xf3rio"),c.Ob(),c.Ob(),c.Ob()),2&t&&c.fc("formGroup",e.form)},directives:[s.q,s.m,s.g,p.c,p.g,b.a,s.a,s.l,s.e,p.f,p.b,k],styles:["[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{flex:1;margin-top:8px}"]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["peek-sign-in"]],inputs:{form:"form"},decls:15,vars:1,consts:[[3,"formGroup"],["matInput","","type","text","name","username","autocomplete","username","formControlName","username"],["matInput","","peekPwnedCheck","","type","password","autocomplete","current-password","formControlName","password"]],template:function(t,e){1&t&&(c.Pb(0,"form",0),c.Pb(1,"mat-form-field"),c.Pb(2,"mat-label"),c.wc(3,"Usu\xe1rio"),c.Ob(),c.Lb(4,"input",1),c.Pb(5,"mat-hint"),c.wc(6,"Apenas caracteres alfanum\xe9rico"),c.Ob(),c.Pb(7,"mat-error"),c.wc(8,"Obrigat\xf3rio"),c.Ob(),c.Ob(),c.Pb(9,"mat-form-field"),c.Pb(10,"mat-label"),c.wc(11,"Senha"),c.Ob(),c.Lb(12,"input",2),c.Pb(13,"mat-error"),c.wc(14,"Obrigat\xf3rio"),c.Ob(),c.Ob(),c.Ob()),2&t&&c.fc("formGroup",e.form)},directives:[s.q,s.m,s.g,p.c,p.g,b.a,s.a,s.l,s.e,p.f,p.b,k],styles:["[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{flex:1;margin-top:12px}"]}),t})();var L=n("ofXK"),_=n("bTqV");let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["peek-pwned-message"]],inputs:{pwned:"pwned"},decls:8,vars:1,consts:[[1,"mat-hint"]],template:function(t,e){1&t&&(c.Pb(0,"p"),c.wc(1," Esta senha est\xe1 publicamente vulner\xe1vel. "),c.Lb(2,"br"),c.wc(3),c.Pb(4,"span",0),c.wc(5,"ocorr\xeancias registradas"),c.Ob(),c.Lb(6,"br"),c.wc(7," Por favor, escolha outra.\n"),c.Ob()),2&t&&(c.zb(3),c.yc(" ",e.pwned," "))},styles:["[_nghost-%COMP%]{font-size:inherit;line-height:120%}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{font-size:80%}"]}),t})();function I(t,e){if(1&t&&c.Lb(0,"peek-pwned-message",8),2&t){const t=c.ac();c.fc("pwned",null==t.password.errors?null:t.password.errors.pwned)}}const A=[{path:"",component:(()=>{class t{constructor(t,e,n){this._focusMonitor=t,this.formBuilder=e,this.authFacade=n,this.error$=this.authFacade.error$,this.form=new s.f({name:new s.c("",[s.p.required]),username:new s.c("",[s.p.required]),password:new s.c("",[s.p.required,s.p.minLength(6)])},{updateOn:"blur"})}get password(){return this.form.get("password")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(i.g),c.Kb(s.b),c.Kb(r.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["peek-auth"]],decls:13,vars:5,consts:[["cdkTrapFocus","",3,"formGroup","ngSubmit"],["dynamicHeight","","mat-stretch-tabs","","animationDuration","2000ms"],["mat-card-content","","label","Cadastro"],[3,"form"],["mat-card-content","","label","Acesso"],[3,"pwned",4,"ngIf"],["mat-button","","tabindex","-1","type","reset"],["type","submit","color","accent","mat-stroked-button","",3,"disabled"],[3,"pwned"]],template:function(t,e){1&t&&(c.Pb(0,"form",0),c.Wb("ngSubmit",function(){return e.authFacade.login(e.form.value)}),c.Pb(1,"mat-card"),c.Pb(2,"mat-tab-group",1),c.Pb(3,"mat-tab",2),c.Lb(4,"peek-sign-up",3),c.Ob(),c.Pb(5,"mat-tab",4),c.Lb(6,"peek-sign-in",3),c.Ob(),c.Ob(),c.uc(7,I,1,1,"peek-pwned-message",5),c.Pb(8,"mat-card-actions"),c.Pb(9,"button",6),c.wc(10,"Limpar"),c.Ob(),c.Pb(11,"button",7),c.wc(12," Continuar "),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.fc("formGroup",e.form),c.zb(4),c.fc("form",e.form),c.zb(2),c.fc("form",e.form),c.zb(1),c.fc("ngIf",null==e.password.errors?null:e.password.errors.pwned),c.zb(4),c.fc("disabled",e.form.invalid))},directives:[s.q,s.m,i.e,s.g,u.a,m.b,m.a,u.c,x,v,L.k,u.b,_.b,M],styles:["[_nghost-%COMP%]{flex:1;display:flex;align-items:center;flex-direction:column;justify-content:center}[_nghost-%COMP%]   .mat-card[_ngcontent-%COMP%]{padding:8px 8px 16px;background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{margin:24px;display:flex;flex-flow:row wrap}"]}),t})()}];let q=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[a.d.forChild(A)],a.d]}),t})(),G=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[i.a,L.c,q,o.e,s.o,r.d]]}),t})()}}]);