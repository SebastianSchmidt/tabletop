(this.webpackJsonptabletop=this.webpackJsonptabletop||[]).push([[0],{13:function(e,t,o){e.exports={cell:"GridItem_cell__hsSTq",firstRow:"GridItem_firstRow__8BhAg",lastColumn:"GridItem_lastColumn__320FC",droppable:"GridItem_droppable__yTq2v"}},25:function(e,t,o){e.exports={field:"Field_field__1PltA",gridWrapper:"Field_gridWrapper__oluTN"}},29:function(e,t,o){e.exports={grid:"Grid_grid__5dSy0"}},4:function(e,t,o){e.exports={container:"Token_container__C3-vl",circle:"Token_circle__36Ifi",direction:"Token_direction__2emyN",selected:"Token_selected__1GyAX",current:"Token_current__P_JN5",north:"Token_north__2V4ME",south:"Token_south__2HjCE",west:"Token_west__2iXXe",east:"Token_east__Eu9f2",draggable:"Token_draggable__1ocar",dragging:"Token_dragging__1Uzd2"}},43:function(e,t,o){},44:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(14),c=o.n(i),l=o(3),a=o(49),s=o(32),d=o(29),u=o.n(d),b=o(6),f=o(17),h=o(51),p=o(9),j=o.n(p),g=o(13),m=o.n(g),x=o(50),k=o(4),_=o.n(k),O=o(20),y=o.n(O),v=o(2),C=Object.freeze({north:"north",south:"south",west:"west",east:"east"}),T="Token",w="#000000",D="#FFFFFF";function W(e){var t,o=e.id,r=e.size,i=e.color,c=e.symbol,l=e.direction,a=e.onTokenClick,s=e.onDirectionClick,d=e.selected,u=e.draggable,h=function(e,t){return Object(x.a)((function(){return{type:T,item:{id:e},canDrag:function(){return t},collect:function(e){return{isDragging:!!e.isDragging()}}}}),[e,t])}(o,u),p=Object(f.a)(h,2),g=p[0].isDragging,m=p[1],k=function(e,t){return Object(n.useCallback)((function(o){t&&(o.stopPropagation(),t(e))}),[e,t])}(o,a),O=I(C.north,o,s),W=I(C.south,o,s),N=I(C.west,o,s),B=I(C.east,o,s),R=function(e){var t=y.a.contrast(w,e)>=y.a.contrast(D,e);return{backgroundColor:e,borderColor:y()(e).darken(2).saturate(2).hex(),textColor:t?w:D}}(i),G=function(e){return{width:e+"px",height:e+"px"}}(r),S=function(e){return{backgroundColor:e.backgroundColor,borderColor:e.borderColor,color:e.textColor}}(R),L=function(e,t){var o=z(e);return{top:0,left:E(e),borderLeftWidth:o,borderRightWidth:o,borderBottomWidth:o,borderBottomColor:t.borderColor}}(r,R),M=function(e,t){var o=z(e);return{bottom:0,left:E(e),borderLeftWidth:o,borderRightWidth:o,borderTopWidth:o,borderTopColor:t.borderColor}}(r,R),P=function(e,t){var o=z(e);return{top:E(e),left:0,borderTopWidth:o,borderBottomWidth:o,borderRightWidth:o,borderRightColor:t.borderColor}}(r,R),A=function(e,t){var o=z(e);return{top:E(e),right:0,borderTopWidth:o,borderBottomWidth:o,borderLeftWidth:o,borderLeftColor:t.borderColor}}(r,R),J=j()(_.a.container,(t={},Object(b.a)(t,_.a.selected,d),Object(b.a)(t,_.a.dragging,g),t)),X=j()(_.a.circle,Object(b.a)({},_.a.draggable,u));return Object(v.jsxs)("div",{ref:m,className:J,style:G,children:[Object(v.jsx)("div",{onClick:k,className:X,style:S,children:Object(v.jsx)("span",{children:c})}),F(C.north,O,L,_.a.north,_.a,l),F(C.south,W,M,_.a.south,_.a,l),F(C.west,N,P,_.a.west,_.a,l),F(C.east,B,A,_.a.east,_.a,l)]})}function I(e,t,o){return Object(n.useCallback)((function(n){o&&(n.stopPropagation(),o(t,e))}),[e,t,o])}function z(e){return e/10*3+"px"}function E(e){return e/5+"px"}function F(e,t,o,n,r,i){var c=e===i;return Object(v.jsx)("div",{onClick:t,className:j()(n,r.direction,Object(b.a)({},r.current,c)),style:o})}var N=o(31),B=o(18),R="field",G=Object(B.b)({name:R,initialState:{columns:0,rows:0,zoom:1,cells:[],nextTokenId:0,tokenIds:[],tokens:{},selectedTokenId:null},reducers:{setDimensions:function(e,t){var o=t.payload,n=o.columns,r=o.rows;e.columns=n,e.rows=r;for(var i=0;i<n;i++){e.cells[i]=[];for(var c=0;c<r;c++)e.cells[i][c]=null}},createToken:function(e,t){var o=Object(N.a)({id:e.nextTokenId++},t.payload);e.tokenIds.push(o.id),e.tokens[o.id]=o,e.cells[o.x][o.y]=o.id},moveToken:function(e,t){var o=t.payload,n=o.id,r=o.x,i=o.y,c=e.tokens[n];e.cells[c.x][c.y]=null,e.cells[r][i]=c.id,c.x=r,c.y=i},selectToken:function(e,t){var o=t.payload.id;e.selectedTokenId=o},unselectToken:function(e){e.selectedTokenId=null},toggleDirection:function(e,t){var o=t.payload,n=o.id,r=o.direction,i=e.tokens[n];i.direction!==r?i.direction=r:i.direction=null}}}),S=function(e){return e.field.columns},L=function(e){return e.field.rows},M=function(e){return e.field.zoom},P=function(e){return e.field.tokenIds},A=G.actions,J=A.setDimensions,X=A.createToken,q=A.moveToken,H=A.selectToken,K=A.unselectToken,U=A.toggleDirection;function V(e){var t,o=e.x,n=e.y,r=e.columns,i=e.size,c=function(e,t){var o=Object(l.b)(),n=Object(l.c)((function(o){return function(e,t,o){return null===e.field.cells[t][o]}(o,e,t)}));return Object(h.a)((function(){return{accept:T,canDrop:function(){return n},drop:function(n){return function(e,t,o,n){var r=e.id;n(q({id:r,x:t,y:o}))}(n,e,t,o)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}}),[e,t,n,o])}(o,n),a=Object(f.a)(c,2),s=a[0],d=s.isOver,u=s.canDrop,p=a[1],g=j()(m.a.cell,(t={},Object(b.a)(t,m.a.firstRow,0===n),Object(b.a)(t,m.a.lastColumn,o===r-1),Object(b.a)(t,m.a.droppable,d&&u),t)),x=function(e){var t=e+"px";return{width:t,height:t,lineHeight:t}}(i);return Object(v.jsx)("div",{ref:p,className:g,style:x})}function Y(e){var t=e.columns,o=e.rows,n=e.cellSize,r=e.children,i=function(e,t,o){return{width:e*o+"px",height:t*o+"px"}}(t,o,n),c=function(e,t,o){for(var n=[],r=0;r<t;r++)for(var i=0;i<e;i++)n.push(Object(v.jsx)(V,{x:i,y:r,columns:e,size:o},i+";"+r));return n}(t,o,n);return Object(v.jsxs)("div",{className:u.a.grid,style:i,children:[c,r]})}function $(e){var t=e.id,o=e.size,r=Object(l.c)((function(e){return function(e,t){return e.field.tokens[t]}(e,t)})),i=r.color,c=r.symbol,a=r.direction,s=r.x,d=r.y,u=Object(l.c)((function(e){return function(e,t){return e.field.selectedTokenId===t}(e,t)})),b=Object(l.b)(),f=Object(n.useCallback)((function(e){b(u?K():H({id:e}))}),[b,u]),h=Object(n.useCallback)((function(e,t){b(u?U({id:e,direction:t}):H({id:e}))}),[b,u]),p=function(e,t,o){return{position:"absolute",left:e*o+"px",top:t*o+"px",width:o+"px",height:o+"px"}}(s,d,o);return Object(v.jsx)("div",{style:p,children:Object(v.jsx)(W,{id:t,size:o,color:i,symbol:c,direction:a,onTokenClick:f,onDirectionClick:h,selected:u,draggable:!0})})}var Q=o(25),Z=o.n(Q);function ee(){var e=Object(l.c)(S),t=Object(l.c)(L),o=Object(l.c)(M),n=Object(l.c)(P),r=function(e){return 100*e}(o),i=function(e,t){return e.map((function(e){return Object(v.jsx)($,{id:e,size:t},e)}))}(n,r),c=Object(l.b)();return Object(v.jsx)("div",{className:Z.a.field,children:Object(v.jsx)("div",{className:Z.a.gridWrapper,onClick:function(){return c(K())},children:Object(v.jsx)(Y,{columns:e,rows:t,cellSize:r,children:i})})})}var te=function(){return Object(v.jsx)(ee,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(43);var oe=Object(B.a)({reducer:Object(b.a)({},G.name,G.reducer)});c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(l.a,{store:oe,children:Object(v.jsx)(a.a,{backend:s.a,children:Object(v.jsx)(te,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),oe.dispatch(J({columns:5,rows:5})),oe.dispatch(X({color:"#D5E8D4",symbol:"T",direction:C.west,x:4,y:4})),oe.dispatch(X({color:"#D5E8D4",symbol:"E",direction:C.south,x:1,y:0})),oe.dispatch(X({color:"#F8CECC",symbol:"M",direction:C.south,x:1,y:1})),oe.dispatch(X({color:"#F8CECC",symbol:"M",direction:C.south,x:2,y:2})),oe.dispatch(X({color:"#D5E8D4",symbol:"Y",direction:C.west,x:3,y:2})),oe.dispatch(X({color:"#D5E8D4",symbol:"K",direction:C.north,x:1,y:3})),oe.dispatch(X({color:"#647687",symbol:"",direction:null,x:4,y:0})),oe.dispatch(X({color:"#647687",symbol:"",direction:null,x:3,y:1})),oe.dispatch(X({color:"#647687",symbol:"",direction:null,x:0,y:2})),oe.dispatch(X({color:"#647687",symbol:"",direction:null,x:1,y:4})),oe.dispatch(q({id:"0",x:3,y:4}))}},[[44,1,2]]]);
//# sourceMappingURL=main.7032ebad.chunk.js.map