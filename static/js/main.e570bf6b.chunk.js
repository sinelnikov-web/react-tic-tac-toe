(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c.n(r),a=c(6),n=c.n(a),i=(c(11),c.p,c(12),c(3)),o=c(1),u=c(4);var d=c(0),j=function(e){var t=e.score;return Object(d.jsxs)("div",{className:"shadow scoreboard",children:[Object(d.jsx)("h1",{className:"scoreboard__title",children:"\u0421\u0447\u0451\u0442"}),Object(d.jsxs)("div",{className:"user-panel",children:[Object(d.jsx)("div",{className:"shadow user-info bg-primary bg-gradient",children:Object(d.jsx)("span",{className:"x-user-score",children:t.cross})}),Object(d.jsx)("div",{className:"shadow user-info bg-danger bg-gradient",children:Object(d.jsx)("span",{className:"o-user-score",children:t.circle})})]})]})},b=function(){for(var e={},t=0,c=0;c<3;c++)for(var s=0;s<3;s++)e[t]={isClicked:!1,pos:[s,c],user:"",isHover:!1},t++;var a=Object(r.useState)("cross"),n=Object(u.a)(a,2),b=n[0],l=n[1],f=Object(r.useState)(""),O=Object(u.a)(f,2),h=O[0],v=O[1],g=Object(r.useState)(Object(o.a)({},e)),m=Object(u.a)(g,2),p=m[0],x=m[1],w=Object(r.useState)({cross:0,circle:0}),N=Object(u.a)(w,2),k=N[0],y=N[1];Object(r.useEffect)((function(){var e=function(e){for(var t=[],c=0,r=0;r<3;r++){for(var s=[],a=0;a<3;a++)s.push(e[c].user),c++;t.push(s)}for(var n=0;n<t.length;n++)if(!t[n].includes("")){var i=new Set(t[n]);if(1===i.size)return Array.from(i)[0]}for(var o=0;o<t.length;o++){var u=[t[0][o],t[1][o],t[2][o]];if(!u.includes("")){var d=new Set(u);if(1===d.size)return Array.from(d)[0]}}for(var j=[],b=[],l=0;l<t.length;l++)for(var f=0;f<t[l].length;f++)l===f&&j.push(t[l][f]),l+f===t[l].length-1&&b.push(t[l][f]);if(!j.includes("")){var O=new Set(j);if(1===O.size)return Array.from(O)[0]}if(!b.includes("")){var h=new Set(b);if(1===h.size)return Array.from(h)[0]}for(var v=0,g=0;g<t.length;g++)t[g].includes("")||v++;return 3===v&&"draw"}(p);e&&("draw"!==e&&y((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},e,t[e]+1))})),v(e))}),[p]);var S=function(e){var t=e.target.id;p[t].isClicked||(x((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t,Object(o.a)(Object(o.a)({},e[t]),{},{isClicked:!0,user:b})))})),l((function(e){return"cross"===e?"circle":"cross"})))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{score:k}),Object(d.jsxs)("div",{className:"shadow tic-tac-toe",children:[Object.keys(p).map((function(e){return Object(d.jsx)("div",{id:e,className:"shadow tic-tac-toe__field bg-gradient ".concat(p[e].user?"cross"===p[e].user?"bg-primary":"bg-danger":"no"),"data-column":p[e].pos[0],"data-row":p[e].pos[1],"data-user":p[e].user,onClick:S,onMouseEnter:function(e){return function(e){var t=e.target.id;p[t].isClicked||x((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t,Object(o.a)(Object(o.a)({},e[t]),{},{isHover:!0})))}))}(e)},onMouseLeave:function(e){return function(e){var t=e.target.id;p[t].isClicked||x((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t,Object(o.a)(Object(o.a)({},e[t]),{},{isHover:!1})))}))}(e)},children:Object(d.jsx)("span",{id:e,className:"shape ".concat(p[e].user," ").concat(!p[e].user&&p[e].isHover?b:""),"data-user":p[e].user})},e)})),Object(d.jsx)("div",{className:"message".concat(h?" open":""),id:"win",children:Object(d.jsxs)("div",{className:"shadow message__body",children:[Object(d.jsx)("h1",{className:"message__title text-".concat("cross"===h?"primary":"circle"===h?"danger":"default"),children:"cross"===h?"\u041f\u043e\u0431\u0435\u0434\u0438\u043b\u0438 \u043a\u0440\u0435\u0441\u0442\u0438\u043a\u0438!!!":"circle"===h?"\u041f\u043e\u0431\u0435\u0434\u0438\u043b\u0438 \u043d\u043e\u043b\u0438\u043a\u0438":"\u041d\u0438\u0447\u044c\u044f."}),Object(d.jsx)("button",{onClick:function(){x(Object(o.a)({},e)),v("")},className:"message__button btn btn-".concat("cross"===h?"primary":"circle"===h?"danger":"dark"),children:"Start new game!"})]})})]})]})};var l=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),r(e),s(e),a(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.e570bf6b.chunk.js.map