(this.webpackJsonptabletop=this.webpackJsonptabletop||[]).push([[0],{13:function(e,t,o){e.exports={cell:"GridItem_cell__3LwJZ",firstRow:"GridItem_firstRow__1mqF4",lastColumn:"GridItem_lastColumn__2ltTO",droppable:"GridItem_droppable__1nw-M"}},25:function(e,t,o){e.exports={field:"Field_field__2f4UB",gridWrapper:"Field_gridWrapper__3h4u_"}},29:function(e,t,o){e.exports={grid:"Grid_grid__3wkpf"}},4:function(e,t,o){e.exports={container:"Token_container__3Ducf",circle:"Token_circle__S159L",direction:"Token_direction__3q4-F",selected:"Token_selected__1ltss",current:"Token_current__3La9D",north:"Token_north__YAq4a",south:"Token_south__1u20C",west:"Token_west__2IazL",east:"Token_east__2T6jd",draggable:"Token_draggable__NJz0s",dragging:"Token_dragging__2Ya7w"}},43:function(e,t,o){},44:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),c=o(14),i=o.n(c),l=o(3),a=o(49),s=o(32),d=o(29),u=o.n(d),b=o(6),f=o(17),h=o(51),p=o(9),j=o.n(p),g=o(13),m=o.n(g),k=o(50),x=o(4),_=o.n(x),O=o(20),y=o.n(O),v=o(2),C=Object.freeze({north:"north",south:"south",west:"west",east:"east"}),w="Token",T="#000000",D="#FFFFFF";function W(e){var t,o=e.id,r=e.size,c=e.color,i=e.symbol,l=e.direction,a=e.onTokenClick,s=e.onDirectionClick,d=e.selected,u=e.draggable,h=function(e,t){return Object(k.a)((function(){return{type:w,item:{id:e},canDrag:function(){return t},collect:function(e){return{isDragging:!!e.isDragging()}}}}),[e,t])}(o,u),p=Object(f.a)(h,2),g=p[0].isDragging,m=p[1],x=function(e,t){return Object(n.useCallback)((function(o){t&&(o.stopPropagation(),t(e))}),[e,t])}(o,a),O=I(C.north,o,s),W=I(C.south,o,s),L=I(C.west,o,s),N=I(C.east,o,s),B=function(e){var t=y.a.contrast(T,e)>=y.a.contrast(D,e);return{backgroundColor:e,borderColor:y()(e).darken(2).saturate(2).hex(),textColor:t?T:D}}(c),R=function(e){return{width:e+"px",height:e+"px"}}(r),G=function(e){return{backgroundColor:e.backgroundColor,borderColor:e.borderColor,color:e.textColor}}(B),S=function(e,t){var o=z(e);return{top:0,left:F(e),borderLeftWidth:o,borderRightWidth:o,borderBottomWidth:o,borderBottomColor:t.borderColor}}(r,B),J=function(e,t){var o=z(e);return{bottom:0,left:F(e),borderLeftWidth:o,borderRightWidth:o,borderTopWidth:o,borderTopColor:t.borderColor}}(r,B),M=function(e,t){var o=z(e);return{top:F(e),left:0,borderTopWidth:o,borderBottomWidth:o,borderRightWidth:o,borderRightColor:t.borderColor}}(r,B),q=function(e,t){var o=z(e);return{top:F(e),right:0,borderTopWidth:o,borderBottomWidth:o,borderLeftWidth:o,borderLeftColor:t.borderColor}}(r,B),Y=j()(_.a.container,(t={},Object(b.a)(t,_.a.selected,d),Object(b.a)(t,_.a.dragging,g),t)),P=j()(_.a.circle,Object(b.a)({},_.a.draggable,u));return Object(v.jsxs)("div",{ref:m,className:Y,style:R,children:[Object(v.jsx)("div",{onClick:x,className:P,style:G,children:Object(v.jsx)("span",{children:i})}),E(C.north,O,S,_.a.north,_.a,l),E(C.south,W,J,_.a.south,_.a,l),E(C.west,L,M,_.a.west,_.a,l),E(C.east,N,q,_.a.east,_.a,l)]})}function I(e,t,o){return Object(n.useCallback)((function(n){o&&(n.stopPropagation(),o(t,e))}),[e,t,o])}function z(e){return e/10*3+"px"}function F(e){return e/5+"px"}function E(e,t,o,n,r,c){var i=e===c;return Object(v.jsx)("div",{onClick:t,className:j()(n,r.direction,Object(b.a)({},r.current,i)),style:o})}var L=o(31),N=o(18),B="field",R=Object(N.b)({name:B,initialState:{columns:0,rows:0,zoom:1,cells:[],nextTokenId:0,tokenIds:[],tokens:{},selectedTokenId:null},reducers:{setDimensions:function(e,t){var o=t.payload,n=o.columns,r=o.rows;e.columns=n,e.rows=r;for(var c=0;c<n;c++){e.cells[c]=[];for(var i=0;i<r;i++)e.cells[c][i]=null}},createToken:function(e,t){var o=Object(L.a)({id:e.nextTokenId++},t.payload);e.tokenIds.push(o.id),e.tokens[o.id]=o,e.cells[o.x][o.y]=o.id},moveToken:function(e,t){var o=t.payload,n=o.id,r=o.x,c=o.y,i=e.tokens[n];e.cells[i.x][i.y]=null,e.cells[r][c]=i.id,i.x=r,i.y=c},selectToken:function(e,t){var o=t.payload.id;e.selectedTokenId=o},unselectToken:function(e){e.selectedTokenId=null},toggleDirection:function(e,t){var o=t.payload,n=o.id,r=o.direction,c=e.tokens[n];c.direction!==r?c.direction=r:c.direction=null}}}),G=function(e){return e.field.columns},S=function(e){return e.field.rows},J=function(e){return e.field.zoom},M=function(e){return e.field.tokenIds},q=R.actions,Y=q.setDimensions,P=q.createToken,A=q.moveToken,H=q.selectToken,K=q.unselectToken,U=q.toggleDirection;function Z(e){var t,o=e.x,n=e.y,r=e.columns,c=e.size,i=function(e,t){var o=Object(l.b)(),n=Object(l.c)((function(o){return function(e,t,o){return null===e.field.cells[t][o]}(o,e,t)}));return Object(h.a)((function(){return{accept:w,canDrop:function(){return n},drop:function(n){return function(e,t,o,n){var r=e.id;n(A({id:r,x:t,y:o}))}(n,e,t,o)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}}),[e,t,n,o])}(o,n),a=Object(f.a)(i,2),s=a[0],d=s.isOver,u=s.canDrop,p=a[1],g=j()(m.a.cell,(t={},Object(b.a)(t,m.a.firstRow,0===n),Object(b.a)(t,m.a.lastColumn,o===r-1),Object(b.a)(t,m.a.droppable,d&&u),t)),k=function(e){var t=e+"px";return{width:t,height:t,lineHeight:t}}(c);return Object(v.jsx)("div",{ref:p,className:g,style:k})}function $(e){var t=e.columns,o=e.rows,n=e.cellSize,r=e.children,c=function(e,t,o){return{width:e*o+"px",height:t*o+"px"}}(t,o,n),i=function(e,t,o){for(var n=[],r=0;r<t;r++)for(var c=0;c<e;c++)n.push(Object(v.jsx)(Z,{x:c,y:r,columns:e,size:o},c+";"+r));return n}(t,o,n);return Object(v.jsxs)("div",{className:u.a.grid,style:c,children:[i,r]})}function Q(e){var t=e.id,o=e.size,r=Object(l.c)((function(e){return function(e,t){return e.field.tokens[t]}(e,t)})),c=r.color,i=r.symbol,a=r.direction,s=r.x,d=r.y,u=Object(l.c)((function(e){return function(e,t){return e.field.selectedTokenId===t}(e,t)})),b=Object(l.b)(),f=Object(n.useCallback)((function(e){b(u?K():H({id:e}))}),[b,u]),h=Object(n.useCallback)((function(e,t){b(u?U({id:e,direction:t}):H({id:e}))}),[b,u]),p=function(e,t,o){return{position:"absolute",left:e*o+"px",top:t*o+"px",width:o+"px",height:o+"px"}}(s,d,o);return Object(v.jsx)("div",{style:p,children:Object(v.jsx)(W,{id:t,size:o,color:c,symbol:i,direction:a,onTokenClick:f,onDirectionClick:h,selected:u,draggable:!0})})}var V=o(25),X=o.n(V);function ee(){var e=Object(l.c)(G),t=Object(l.c)(S),o=Object(l.c)(J),n=Object(l.c)(M),r=function(e){return 100*e}(o),c=function(e,t){return e.map((function(e){return Object(v.jsx)(Q,{id:e,size:t},e)}))}(n,r),i=Object(l.b)();return Object(v.jsx)("div",{className:X.a.field,children:Object(v.jsx)("div",{className:X.a.gridWrapper,onClick:function(){return i(K())},children:Object(v.jsx)($,{columns:e,rows:t,cellSize:r,children:c})})})}var te=function(){return Object(v.jsx)(ee,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(43);var oe=Object(N.a)({reducer:Object(b.a)({},R.name,R.reducer)});i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(l.a,{store:oe,children:Object(v.jsx)(a.a,{backend:s.a,children:Object(v.jsx)(te,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),oe.dispatch(Y({columns:5,rows:5})),oe.dispatch(P({color:"#D5E8D4",symbol:"T",direction:C.west,x:4,y:4})),oe.dispatch(P({color:"#D5E8D4",symbol:"E",direction:C.south,x:1,y:0})),oe.dispatch(P({color:"#F8CECC",symbol:"M",direction:C.south,x:1,y:1})),oe.dispatch(P({color:"#F8CECC",symbol:"M",direction:C.south,x:2,y:2})),oe.dispatch(P({color:"#D5E8D4",symbol:"Y",direction:C.west,x:3,y:2})),oe.dispatch(P({color:"#D5E8D4",symbol:"K",direction:C.north,x:1,y:3})),oe.dispatch(P({color:"#647687",symbol:"",direction:null,x:4,y:0})),oe.dispatch(P({color:"#647687",symbol:"",direction:null,x:3,y:1})),oe.dispatch(P({color:"#647687",symbol:"",direction:null,x:0,y:2})),oe.dispatch(P({color:"#647687",symbol:"",direction:null,x:1,y:4})),oe.dispatch(A({id:"0",x:3,y:4}))}},[[44,1,2]]]);
//# sourceMappingURL=main.978a1ef9.chunk.js.map