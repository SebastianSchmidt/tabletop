(this.webpackJsonptabletop=this.webpackJsonptabletop||[]).push([[0],{10:function(e,t,n){e.exports={container:"Token_container__C3-vl",circle:"Token_circle__36Ifi",direction:"Token_direction__2emyN",selected:"Token_selected__1GyAX",current:"Token_current__P_JN5",north:"Token_north__2V4ME",south:"Token_south__2HjCE",west:"Token_west__2iXXe",east:"Token_east__Eu9f2"}},18:function(e,t,n){e.exports={cell:"GridItem_cell__hsSTq",firstRow:"GridItem_firstRow__8BhAg",lastColumn:"GridItem_lastColumn__320FC",droppable:"GridItem_droppable__yTq2v"}},24:function(e,t,n){e.exports={container:"App_container__7_OSo",field:"App_field__1Za-d",tokenPanel:"App_tokenPanel__1Y1io"}},29:function(e,t,n){e.exports={circle:"DraggableToken_circle__2e89C",dragging:"DraggableToken_dragging__3643i"}},32:function(e,t,n){e.exports={field:"Field_field__1PltA",gridWrapper:"Field_gridWrapper__oluTN"}},33:function(e,t,n){e.exports={container:"PanelCategory_container__2ywKt",title:"PanelCategory_title__2RLOE"}},36:function(e,t,n){e.exports={layer:"CustomDragLayer_layer__3Oi1J"}},37:function(e,t,n){e.exports={grid:"Grid_grid__5dSy0"}},38:function(e,t,n){e.exports={container:"PanelContainer_container__12MNC"}},40:function(e,t,n){e.exports={title:"Panel_title__2jCxg"}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(19),l=n.n(c),i=n(3),a=n(60),s=n(41),u=n(4),d=n(59),b=n(6),f=n(15),j=n.n(f),h=n(12),O=n.n(h),v=n(10),m=n.n(v),p="#000000",x="#FFFFFF";function g(e){return j.a.contrast(p,e)>=j.a.contrast(x,e)?p:x}var k=n(1),_=Object.freeze({north:"north",south:"south",west:"west",east:"east"});function y(e){var t=e.id,n=e.size,r=e.color,c=e.symbol,l=e.direction,i=e.onTokenClick,a=e.onDirectionClick,s=e.selected,u=e.circleRef,d=e.containerClassName,f=e.circleClassName,h=function(e,t){return Object(o.useCallback)((function(n){t&&(n.stopPropagation(),t(e))}),[e,t])}(t,i),v=T(_.north,t,a),p=T(_.south,t,a),x=T(_.west,t,a),y=T(_.east,t,a),N=function(e){return{backgroundColor:e,borderColor:j()(e).darken(2).saturate(2).hex(),textColor:g(e)}}(r),A=function(e){return{width:e+"px",height:e+"px"}}(n),I=function(e){return{backgroundColor:e.backgroundColor,borderColor:e.borderColor,color:e.textColor}}(N),E=function(e,t){var n=w(e);return{top:0,left:D(e),borderLeftWidth:n,borderRightWidth:n,borderBottomWidth:n,borderBottomColor:t.borderColor}}(n,N),F=function(e,t){var n=w(e);return{bottom:0,left:D(e),borderLeftWidth:n,borderRightWidth:n,borderTopWidth:n,borderTopColor:t.borderColor}}(n,N),W=function(e,t){var n=w(e);return{top:D(e),left:0,borderTopWidth:n,borderBottomWidth:n,borderRightWidth:n,borderRightColor:t.borderColor}}(n,N),S=function(e,t){var n=w(e);return{top:D(e),right:0,borderTopWidth:n,borderBottomWidth:n,borderLeftWidth:n,borderLeftColor:t.borderColor}}(n,N),z=O()(m.a.container,Object(b.a)({},m.a.selected,s),d),R=O()(m.a.circle,f);return Object(k.jsxs)("div",{className:z,style:A,children:[Object(k.jsx)("div",{ref:u,onClick:h,className:R,style:I,children:Object(k.jsx)("span",{children:c})}),C(_.north,v,E,m.a.north,m.a,l),C(_.south,p,F,m.a.south,m.a,l),C(_.west,x,W,m.a.west,m.a,l),C(_.east,y,S,m.a.east,m.a,l)]})}function C(e,t,n,o,r,c){var l=e===c;return Object(k.jsx)("div",{onClick:t,className:O()(o,r.direction,Object(b.a)({},r.current,l)),style:n})}function T(e,t,n){return Object(o.useCallback)((function(o){n&&(o.stopPropagation(),n(t,e))}),[e,t,n])}function w(e){return e/10*3+"px"}function D(e){return e/5+"px"}var N=n(9),A=n(61),I=n(29),E=n.n(I),F="Token";function W(e){var t=e.id,n=e.size,r=e.color,c=e.symbol,l=e.direction,i=Object(A.a)((function(){return{type:F,item:{id:t,size:n,color:r,symbol:c,direction:l},collect:function(e){return{isDragging:!!e.isDragging()}}}}),[t,n,r,c,l]),a=Object(N.a)(i,3),s=a[0].isDragging,d=a[1];!function(e){Object(o.useEffect)((function(){e(L,{captureDraggingState:!0})}),[e])}(a[2]);var f=O()(Object(b.a)({},E.a.dragging,s));return Object(k.jsx)(y,Object(u.a)(Object(u.a)({},e),{},{circleRef:d,containerClassName:f,circleClassName:E.a.circle}))}var S=n(42);function z(e){e.offset;var t=Object(S.a)(e,["offset"]),n=function(e){var t=e.offset,n=e.size/20*3,o=t.x-n,r=t.y-n;return{transform:"translate(".concat(o,"px, ").concat(r,"px)")}}(e);return Object(k.jsx)("div",{style:n,children:Object(k.jsx)(y,Object(u.a)({},t))})}var R=n(36),P=n.n(R);function B(){var e=Object(d.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),t=e.item,n=e.itemType,o=e.currentOffset;if(!e.isDragging||!o)return null;var r=function(e,t,n){switch(t){case F:return Object(k.jsx)(z,Object(u.a)({offset:n},e));default:return null}}(t,n,o);return r?Object(k.jsx)("div",{className:P.a.layer,children:r}):null}function M(e){var t=e.children;return Object(k.jsxs)(a.a,{backend:s.a,children:[Object(k.jsx)(B,{}),t]})}var L=new Image;L.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";var G=n(37),J=n.n(G),K=n(62),H=n(18),X=n.n(H),Y=n(13),q="field";function Q(e){return Math.max(1,Math.min(100,e))}var V=Object(Y.b)({name:q,initialState:{columns:1,rows:1,zoom:1,cells:[[null]],nextTokenId:0,tokenIds:[],tokens:{},selectedTokenId:null},reducers:{setDimensions:function(e,t){var n=Q(t.payload.columns),o=Q(t.payload.rows),r=n-e.columns;r>0?function(e,t){for(var n=e.columns,o=e.columns+t,r=n;r<o;r++){e.cells[r]=[];for(var c=0;c<e.rows;c++)e.cells[r][c]=null}}(e,r):r<0&&function(e,t){for(var n=e.columns-t,o=e.columns,r=n;r<o;r++)for(var c=function(t){var n=e.cells[r][t];n&&(e.tokenIds=e.tokenIds.filter((function(e){return e!==n})),delete e.tokens[n])},l=0;l<e.rows;l++)c(l);e.cells.splice(n,t)}(e,Math.abs(r)),e.columns=n;var c=o-e.rows;c>0?function(e,t){for(var n=e.rows,o=e.rows+t,r=0;r<e.columns;r++)for(var c=n;c<o;c++)e.cells[r][c]=null}(e,c):c<0&&function(e,t){for(var n=e.rows-t,o=e.rows,r=0;r<e.columns;r++){for(var c=function(t){var n=e.cells[r][t];n&&(e.tokenIds=e.tokenIds.filter((function(e){return e!==n})),delete e.tokens[n])},l=n;l<o;l++)c(l);e.cells[r].splice(n,t)}}(e,Math.abs(c)),e.rows=o},createToken:function(e,t){var n=Object(u.a)({id:e.nextTokenId+++""},t.payload);e.tokenIds.push(n.id),e.tokens[n.id]=n,e.cells[n.x][n.y]=n.id},moveToken:function(e,t){var n=t.payload,o=n.id,r=n.x,c=n.y,l=e.tokens[o];e.cells[l.x][l.y]=null,e.cells[r][c]=l.id,l.x=r,l.y=c},selectToken:function(e,t){var n=t.payload.id;e.selectedTokenId=n},unselectToken:function(e){e.selectedTokenId=null},setTokenDirection:function(e,t){var n=t.payload,o=n.id,r=n.direction;e.tokens[o].direction=r},toggleTokenDirection:function(e,t){var n=t.payload,o=n.id,r=n.direction,c=e.tokens[o];c.direction!==r?c.direction=r:c.direction=null},setTokenSymbol:function(e,t){var n=t.payload,o=n.id,r=n.symbol;e.tokens[o].symbol=r},setTokenColor:function(e,t){var n=t.payload,o=n.id,r=n.color;e.tokens[o].color=r}}});var Z=function(e){return e.field.columns},$=function(e){return e.field.rows},U=function(e){return e.field.zoom},ee=function(e){return e.field.tokenIds},te=function(e,t){return e.field.tokens[t]},ne=function(e){return e.field.selectedTokenId},oe=V.actions,re=oe.setDimensions,ce=oe.createToken,le=oe.moveToken,ie=oe.selectToken,ae=oe.unselectToken,se=oe.setTokenDirection,ue=oe.toggleTokenDirection,de=oe.setTokenSymbol,be=oe.setTokenColor;function fe(e){var t,n=e.x,o=e.y,r=e.columns,c=e.size,l=function(e,t){var n=Object(i.b)(),o=Object(i.c)((function(n){return function(e,t,n){return null===e.field.cells[t][n]}(n,e,t)}));return Object(K.a)((function(){return{accept:F,canDrop:function(){return o},drop:function(o){return function(e,t,n,o){var r=e.id;o(le({id:r,x:t,y:n}))}(o,e,t,n)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}}),[e,t,o,n])}(n,o),a=Object(N.a)(l,2),s=a[0],u=s.isOver,d=s.canDrop,f=a[1],j=O()(X.a.cell,(t={},Object(b.a)(t,X.a.firstRow,0===o),Object(b.a)(t,X.a.lastColumn,n===r-1),Object(b.a)(t,X.a.droppable,u&&d),t)),h=function(e){var t=e+"px";return{width:t,height:t,lineHeight:t}}(c);return Object(k.jsx)("div",{ref:f,className:j,style:h})}function je(e){var t=e.columns,n=e.rows,o=e.cellSize,r=e.children,c=function(e,t,n){return{width:e*n+"px",height:t*n+"px"}}(t,n,o),l=function(e,t,n){for(var o=[],r=0;r<t;r++)for(var c=0;c<e;c++)o.push(Object(k.jsx)(fe,{x:c,y:r,columns:e,size:n},c+";"+r));return o}(t,n,o);return Object(k.jsxs)("div",{className:J.a.grid,style:c,children:[l,r]})}function he(e){var t=e.id,n=e.size,r=Object(i.c)((function(e){return te(e,t)})),c=r.color,l=r.symbol,a=r.direction,s=r.x,u=r.y,d=Object(i.c)((function(e){return function(e,t){return e.field.selectedTokenId===t}(e,t)})),b=Object(i.b)(),f=Object(o.useCallback)((function(e){b(d?ae():ie({id:e}))}),[b,d]),j=Object(o.useCallback)((function(e,t){b(d?ue({id:e,direction:t}):ie({id:e}))}),[b,d]),h=function(e,t,n){return{position:"absolute",left:e*n+"px",top:t*n+"px",width:n+"px",height:n+"px"}}(s,u,n);return Object(k.jsx)("div",{style:h,children:Object(k.jsx)(W,{id:t,size:n,color:c,symbol:l,direction:a,onTokenClick:f,onDirectionClick:j,selected:d})})}var Oe=n(32),ve=n.n(Oe);function me(){var e=Object(i.c)(Z),t=Object(i.c)($),n=Object(i.c)(U),o=Object(i.c)(ee),r=function(e){return 100*e}(n),c=function(e,t){return e.map((function(e){return Object(k.jsx)(he,{id:e,size:t},e)}))}(o,r),l=Object(i.b)();return Object(k.jsx)("div",{className:ve.a.field,children:Object(k.jsx)("div",{className:ve.a.gridWrapper,onClick:function(){return l(ae())},children:Object(k.jsx)(je,{columns:e,rows:t,cellSize:r,children:c})})})}var pe=n(38),xe=n.n(pe),ge=n(39),ke=n.n(ge),_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(o.useState)(e),r=Object(N.a)(n,2),c=r[0],l=r[1];Object(o.useEffect)((function(){return l(e)}),[e]);var i={value:c,onChange:function(e){l(e.target.value),t&&t(e.target.value)}};return[i,c,l]},ye=n(8),Ce=n.n(ye);function Te(e){var t=e.label,n=e.max,r=e.value,c=e.onChange,l=e.onFocus,i=Object(o.useCallback)((function(e){e.length<=n&&c(e)}),[n,c]),a=_e(r,i),s=Object(N.a)(a,1)[0];return Object(k.jsxs)("div",{className:Ce.a.element,children:[Object(k.jsx)("label",{className:Ce.a.label,children:t}),Object(k.jsx)("input",Object(u.a)({className:Ce.a.input,type:"text",maxLength:n,onFocus:l},s))]})}function we(e){var t=e.value,n=e.label,r=e.onChange,c=Object(o.useCallback)((function(e){r&&r(e)}),[r]),l=_e(t,c),i=Object(N.a)(l,2),a=i[0],s=i[1],d=Object(o.useMemo)((function(){return e.options.map(De)}),[e.options]),b=Object(o.useMemo)((function(){return function(e,t){var n=t.find((function(t){return t.value===e}));return n?n.style:null}(s,d)}),[s,d]);return Object(k.jsxs)("div",{className:Ce.a.element,children:[n?Object(k.jsx)("label",{className:Ce.a.label,children:n}):null,Object(k.jsx)("select",Object(u.a)(Object(u.a)({className:Ce.a.select,style:b},a),{},{children:d.map(Ne)}))]})}function De(e){var t=null,n=null,o=null;return"object"===typeof e&&null!==e?(t=e.value,n=e.label,o=e.style):t=e+"",null!==n&&void 0!==n||(n=t),{value:t,label:n,style:o}}function Ne(e){var t=e.value,n=e.label,o=e.style;return Object(k.jsx)("option",{className:Ce.a.option,value:t,style:o,children:n},t)}var Ae=n(40),Ie=n.n(Ae);function Ee(e){var t=e.title,n=e.children;return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:Ie.a.title,children:t}),n]})}var Fe=n(33),We=n.n(Fe);function Se(e){var t=e.title,n=e.children;return Object(k.jsxs)("div",{className:We.a.container,children:[t?Object(k.jsx)("h2",{className:We.a.title,children:t}):null,n]})}function ze(){return Object(k.jsx)(Ee,{title:"Field",children:Object(k.jsx)(Re,{})})}function Re(){var e=Object(i.b)(),t=Object(i.c)(Z),n=Object(i.c)($),r=Object(o.useCallback)((function(t){e(re({columns:t,rows:n}))}),[e,n]),c=Object(o.useCallback)((function(n){e(re({columns:t,rows:n}))}),[e,t]);return Object(k.jsxs)(Se,{children:[Object(k.jsx)(Pe,{label:"Columns",value:t,onChange:r}),Object(k.jsx)(Pe,{label:"Rows",value:n,onChange:c})]})}function Pe(e){var t=e.label,n=e.value,o=e.onChange,r=ke()(1,101);return Object(k.jsx)(we,{label:t,options:r,value:n,onChange:o})}function Be(e){var t=e.id,n=Object(i.c)((function(e){var n=te(e,t).symbol;return null!==n?n:""})),r=Object(i.b)(),c=Object(o.useCallback)((function(e){r(de({id:t,symbol:e}))}),[r,t]);return Object(k.jsx)(Te,{label:"Symbol",max:"1",value:n,onChange:c,onFocus:function(e){return e.target.select()}})}var Me=[Le("Yellow","#fff2cc"),Le("Red","#f8cecc"),Le("Purple","#d1c4e9"),Le("Blue","#bbdefb"),Le("Green","#d5e8d4"),Le("Grey","#cfd8dc"),Le("Dark yellow","#fdd835"),Le("Dark red","#c62828"),Le("Dark purple","#673ab7"),Le("Dark blue","#1976d2"),Le("Dark green","#2e7d32"),Le("Dark gray","#647687")];function Le(e,t){return{label:e,value:Ge(t),style:{backgroundColor:t,color:g(t)}}}function Ge(e){return e?e.toLowerCase():null}function Je(e){var t=e.id,n=Object(i.c)((function(e){return Ge(te(e,t).color)})),r=Object(i.b)(),c=Object(o.useCallback)((function(e){r(be({id:t,color:e}))}),[r,t]);return Object(k.jsx)(we,{label:"Color",options:Me,value:n,onChange:c})}var Ke=[{label:"\ud83e\udc45 North",value:_.north},{label:"\ud83e\udc46 East",value:_.east},{label:"\ud83e\udc47 South",value:_.south},{label:"\ud83e\udc44 West",value:_.west},{label:"None",value:""}];function He(e){var t=e.id,n=Object(i.c)((function(e){var n=te(e,t).direction;return null!==n?n:""})),r=Object(i.b)(),c=Object(o.useCallback)((function(e){r(se({id:t,direction:""!==e?e:null}))}),[r,t]);return Object(k.jsx)(we,{label:"Direction",options:Ke,value:n,onChange:c})}function Xe(e){var t=e.id;return Object(k.jsx)(Ee,{title:"Token",children:Object(k.jsxs)(Se,{children:[Object(k.jsx)(Be,{id:t}),Object(k.jsx)(Je,{id:t}),Object(k.jsx)(He,{id:t})]})})}function Ye(){var e=Object(i.c)(ne);return Object(k.jsx)("div",{className:xe.a.container,children:e?Object(k.jsx)(Xe,{id:e}):Object(k.jsx)(ze,{})})}var qe=Object(Y.b)({name:"panel",initialState:{},reducers:{}}),Qe=n(24),Ve=n.n(Qe);var Ze=function(){return Object(k.jsxs)("div",{className:Ve.a.container,children:[Object(k.jsx)(me,{className:Ve.a.field}),Object(k.jsx)(Ye,{className:Ve.a.tokenPanel})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(53);var $e,Ue=Object(Y.a)({reducer:($e={},Object(b.a)($e,V.name,V.reducer),Object(b.a)($e,qe.name,qe.reducer),$e)});l.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(i.a,{store:Ue,children:Object(k.jsx)(M,{children:Object(k.jsx)(Ze,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),Ue.dispatch(re({columns:5,rows:5})),Ue.dispatch(ce({color:"#D5E8D4",symbol:"T",direction:_.west,x:3,y:4})),Ue.dispatch(ce({color:"#D5E8D4",symbol:"E",direction:_.south,x:1,y:0})),Ue.dispatch(ce({color:"#F8CECC",symbol:"M",direction:_.south,x:1,y:1})),Ue.dispatch(ce({color:"#F8CECC",symbol:"M",direction:_.south,x:2,y:2})),Ue.dispatch(ce({color:"#D5E8D4",symbol:"Y",direction:_.west,x:3,y:2})),Ue.dispatch(ce({color:"#D5E8D4",symbol:"K",direction:_.north,x:1,y:3})),Ue.dispatch(ce({color:"#647687",symbol:"",direction:null,x:4,y:0})),Ue.dispatch(ce({color:"#647687",symbol:"",direction:null,x:3,y:1})),Ue.dispatch(ce({color:"#647687",symbol:"",direction:null,x:0,y:2})),Ue.dispatch(ce({color:"#647687",symbol:"",direction:null,x:1,y:4}))},8:function(e,t,n){e.exports={element:"Forms_element__3Ktu0",label:"Forms_label__9aoLd",input:"Forms_input__34n01",select:"Forms_select__32bDl"}}},[[54,1,2]]]);
//# sourceMappingURL=main.73830ef9.chunk.js.map