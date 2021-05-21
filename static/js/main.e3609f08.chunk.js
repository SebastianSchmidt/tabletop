(this.webpackJsonptabletop=this.webpackJsonptabletop||[]).push([[0],[,,,function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return r})),t.d(n,"i",(function(){return i})),t.d(n,"h",(function(){return a})),t.d(n,"f",(function(){return u})),t.d(n,"k",(function(){return s})),t.d(n,"j",(function(){return d})),t.d(n,"g",(function(){return b})),t.d(n,"a",(function(){return k})),t.d(n,"c",(function(){return W})),t.d(n,"e",(function(){return R})),t.d(n,"d",(function(){return B})),function(e){e.North="north",e.South="south",e.West="west",e.East="east",e.None="none"}(r||(r={}));var c=t(8),o=t(18),i=Object(o.b)({name:"tokens",initialState:{ids:[],entities:{}},reducers:{createToken:function(e,n){var t=n.payload,r=t.id,c={id:r,color:t.color,symbol:t.symbol,direction:t.direction};e.ids.push(r),e.entities[r]=c},updateToken:function(e,n){var t=n.payload.id,r=e.entities[t];r&&(e.entities[t]=Object(c.a)(Object(c.a)({},r),n.payload))},toggleTokenDirection:function(e,n){var t=n.payload,c=t.id,o=t.direction,i=e.entities[c];i&&(i.direction!==o?i.direction=o:i.direction=r.None)},deleteToken:function(e,n){var t=n.payload.id,r=e.ids.indexOf(t);r>-1&&(e.ids.splice(r,1),delete e.entities[t])}}}),a=function(e,n){return e.content.present.tokens.entities[n]},l=i.actions,u=l.createToken,s=l.updateToken,d=l.toggleTokenDirection,b=l.deleteToken,f=t(6),j=t(1),O=t(23),v=t.n(O),m=t(7),p=t.n(m),g=t(35),x=t(15),h=t.n(x),_=t(0);function k(e){var n=e.id,t=e.size,c=e.color,o=e.symbol,i=e.direction,a=e.selected,l=e.onTokenClick,u=e.onDirectionClick,s=e.circleRef,d=e.containerClassName,b=e.circleClassName,O=function(e,n){return Object(j.useCallback)((function(t){n&&(t.stopPropagation(),n(e))}),[e,n])}(n,l),m=N(r.North,n,u),x=N(r.South,n,u),k=N(r.West,n,u),D=N(r.East,n,u),w=function(e){var n=v()(e).get("lch.c")>10?2:0;return{backgroundColor:e,borderColor:v()(e).darken(2).saturate(n).hex(),textColor:Object(g.a)(e)}}(c),I=function(e){return{width:e+"px",height:e+"px"}}(t),A=function(e){return{backgroundColor:e.backgroundColor,borderColor:e.borderColor,color:e.textColor}}(w),S=function(e,n){var t=y(e);return{top:0,left:T(e),borderLeftWidth:t,borderRightWidth:t,borderBottomWidth:t,borderBottomColor:n.borderColor}}(t,w),F=function(e,n){var t=y(e);return{bottom:0,left:T(e),borderLeftWidth:t,borderRightWidth:t,borderTopWidth:t,borderTopColor:n.borderColor}}(t,w),M=function(e,n){var t=y(e);return{top:T(e),left:0,borderTopWidth:t,borderBottomWidth:t,borderRightWidth:t,borderRightColor:n.borderColor}}(t,w),E=function(e,n){var t=y(e);return{top:T(e),right:0,borderTopWidth:t,borderBottomWidth:t,borderLeftWidth:t,borderLeftColor:n.borderColor}}(t,w),R=p()(h.a.container,Object(f.a)({},h.a.selected,a),d),W=p()(h.a.circle,b);return Object(_.jsxs)("div",{className:R,style:I,children:[Object(_.jsx)("div",{ref:s,onClick:O,className:W,style:A,children:Object(_.jsx)("span",{children:o})}),Object(_.jsx)(C,{direction:r.North,currentDirection:i,onClick:m,className:h.a.north,style:S}),Object(_.jsx)(C,{direction:r.South,currentDirection:i,onClick:x,className:h.a.south,style:F}),Object(_.jsx)(C,{direction:r.West,currentDirection:i,onClick:k,className:h.a.west,style:M}),Object(_.jsx)(C,{direction:r.East,currentDirection:i,onClick:D,className:h.a.east,style:E})]})}function C(e){var n=e.direction,t=e.currentDirection,r=e.onClick,c=e.className,o=e.style,i=n===t;return Object(_.jsx)("div",{onClick:r,className:p()(c,h.a.direction,Object(f.a)({},h.a.current,i)),style:o})}function N(e,n,t){return Object(j.useCallback)((function(r){t&&(r.stopPropagation(),t(n,e))}),[e,n,t])}function y(e){return e/10*3+"px"}function T(e){return e/5+"px"}var D=t(11),w=t(78),I=t(22),A=t(4),S=t(5);function F(e){var n=e.id,t=e.size,c=e.onTokenClick,o=e.onDirectionClick,i=e.circleRef,l=e.containerClassName,u=e.circleClassName,s=Object(A.c)((function(e){return Object(S.b)(e)===n})),d=Object(A.c)((function(e){return a(e,n)})),b=d?d.symbol:"",f=d?d.color:"#cfd8dc",j=d?d.direction:r.None;return Object(_.jsx)(k,{id:n,size:t,color:f,symbol:b,direction:j,selected:s,onTokenClick:c,onDirectionClick:o,circleRef:i,containerClassName:l,circleClassName:u})}var M=t(41),E=t.n(M),R="Token";function W(e){var n=e.id,t=e.size,r={id:n,size:t},o=Object(w.a)((function(){return{type:R,item:r,collect:function(e){return{dragging:!!e.isDragging()}}}}),[n,t]),i=Object(D.a)(o,3),a=i[0].dragging,l=i[1],u=i[2];Object(I.b)(u);var s=p()(Object(f.a)({},E.a.dragging,a));return Object(_.jsx)(F,Object(c.a)(Object(c.a)({},e),{},{circleRef:l,containerClassName:s,circleClassName:E.a.circle}))}function B(e){var n=e.id,t=e.size,r=function(e,n){var t=e/20*3,r=n.x-t,c=n.y-t;return{transform:"translate(".concat(r,"px, ").concat(c,"px)")}}(t,e.offset);return Object(_.jsx)("div",{style:r,children:Object(_.jsx)(F,{id:n,size:t})})}},function(e,n,t){"use strict";t.d(n,"a",(function(){return L})),t.d(n,"c",(function(){return E})),t.d(n,"b",(function(){return R}));var r=t(1),c=t(19),o=t(16),i=t.n(o),a=t(22),l=t(7),u=t.n(l),s=t(21),d=t.n(s),b=t(0);function f(e){var n=e.children;return Object(b.jsx)("div",{className:d.a.group,children:n})}var j=t(3),O=t(5);function v(e){var n=e.label,t=e.disabled,r=e.onClick;return Object(b.jsx)("button",{className:d.a.button,onClick:r,disabled:t,children:n})}function m(){var e=E((function(e){return Object(O.b)(e)})),n=!e,t=R(),c=Object(r.useCallback)((function(){e&&t(Object(j.g)({id:e}))}),[e,t]);return Object(b.jsx)(v,{label:"Delete",disabled:n,onClick:c})}function p(){return Object(b.jsx)(f,{children:Object(b.jsx)(m,{})})}function g(){var e=!E(x),n=R();return Object(b.jsx)(v,{label:"Undo",onClick:function(){return n(o.ActionCreators.undo())},disabled:e})}function x(e){for(var n=0,t=Object.values(e);n<t.length;n++){var r=t[n];if(r&&r.past&&r.past.length>0)return!0}return!1}function h(){var e=!E(_),n=R();return Object(b.jsx)(v,{label:"Redo",onClick:function(){return n(o.ActionCreators.redo())},disabled:e})}function _(e){for(var n=0,t=Object.values(e);n<t.length;n++){var r=t[n];if(r&&r.future&&r.future.length>0)return!0}return!1}function k(){return Object(b.jsxs)(f,{children:[Object(b.jsx)(g,{}),Object(b.jsx)(h,{})]})}function C(){var e=R();return Object(b.jsx)(v,{label:"Panel",onClick:function(){return e(Object(O.g)())}})}function N(){return Object(b.jsx)(f,{children:Object(b.jsx)(C,{})})}var y,T=Object(r.memo)((function(e){var n=e.className;return Object(b.jsxs)("div",{className:u()(d.a.container,n),children:[Object(b.jsx)(p,{}),Object(b.jsx)(k,{}),Object(b.jsx)(N,{})]})})),D=t(9),w=t(20),I=t(6),A=t(18),S=t(14),F={limit:100,groupBy:Object(o.groupByActionTypes)(D.groupedFieldActions)},M=Object(A.a)({reducer:Object(I.a)({content:i()(Object(S.b)((y={},Object(I.a)(y,j.i.name,j.i.reducer),Object(I.a)(y,D.slice.name,D.slice.reducer),y)),F)},O.f.name,O.f.reducer)});function E(e,n){return Object(c.c)(e,n)}var R=function(){return Object(c.b)()},W=t(29),B=t.n(W);t(70);function z(){var e=E(O.c),n=function(e){var n=e?"200px":"0px";return{gridTemplateColumns:"".concat("auto"," ").concat(n)}}(e);return Object(b.jsxs)("div",{className:B.a.container,style:n,children:[Object(b.jsx)(T,{className:B.a.toolbar}),Object(b.jsx)(D.Field,{className:B.a.field}),e?Object(b.jsx)(w.b,{className:B.a.tokenPanel}):null]})}function L(){return Object(b.jsx)(r.StrictMode,{children:Object(b.jsx)(c.a,{store:M,children:Object(b.jsx)(a.a,{children:Object(b.jsx)(z,{})})})})}M.dispatch(Object(D.updateFieldDimensions)({columns:5,rows:5})),M.dispatch(o.ActionCreators.clearHistory())},function(e,n,t){"use strict";t.d(n,"f",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return l})),t.d(n,"d",(function(){return u})),t.d(n,"g",(function(){return d})),t.d(n,"e",(function(){return b})),t.d(n,"a",(function(){return f}));var r=t(18),c=t(3),o={panelVisible:!0,selectedTokenId:void 0},i=Object(r.b)({name:"view",initialState:o,reducers:{togglePanel:function(e){e.panelVisible=!e.panelVisible},selectToken:function(e,n){var t=n.payload.id;e.selectedTokenId=t},deselectToken:function(e){e.selectedTokenId=void 0}},extraReducers:function(e){e.addCase(c.g,(function(e,n){var t=n.payload.id;e.selectedTokenId===t&&(e.selectedTokenId=void 0)}))}}),a=function(e){return e.view.panelVisible},l=function(e){return e.view.selectedTokenId},u=function(e,n){return e.view.selectedTokenId===n},s=i.actions,d=s.togglePanel,b=s.selectToken,f=s.deselectToken},,,,function(e,n,t){"use strict";var r=t(49);t.o(r,"MAX_DIMENSIONS")&&t.d(n,"MAX_DIMENSIONS",(function(){return r.MAX_DIMENSIONS})),t.o(r,"MIN_DIMENSIONS")&&t.d(n,"MIN_DIMENSIONS",(function(){return r.MIN_DIMENSIONS})),t.o(r,"getColumns")&&t.d(n,"getColumns",(function(){return r.getColumns})),t.o(r,"getRows")&&t.d(n,"getRows",(function(){return r.getRows})),t.o(r,"groupedFieldActions")&&t.d(n,"groupedFieldActions",(function(){return r.groupedFieldActions})),t.o(r,"slice")&&t.d(n,"slice",(function(){return r.slice})),t.o(r,"updateFieldDimensions")&&t.d(n,"updateFieldDimensions",(function(){return r.updateFieldDimensions}));var c=t(17);t.d(n,"MAX_DIMENSIONS",(function(){return c.a})),t.d(n,"MIN_DIMENSIONS",(function(){return c.b})),t.d(n,"getColumns",(function(){return c.d})),t.d(n,"getRows",(function(){return c.e})),t.d(n,"groupedFieldActions",(function(){return c.f})),t.d(n,"slice",(function(){return c.h})),t.d(n,"updateFieldDimensions",(function(){return c.i}));var o=t(50);t.d(n,"Field",(function(){return o.a}))},,,,function(e,n,t){e.exports={element:"Forms_element__3Ktu0",label:"Forms_label__9aoLd",input:"Forms_input__34n01",select:"Forms_select__32bDl"}},,function(e,n,t){e.exports={container:"BaseToken_container__jdpcL",circle:"BaseToken_circle__170NU",direction:"BaseToken_direction__3CpQa",selected:"BaseToken_selected__2gzaC",current:"BaseToken_current__12_Yh",north:"BaseToken_north__Nv6fV",south:"BaseToken_south__3fbS4",west:"BaseToken_west__3DAO8",east:"BaseToken_east__28uYt"}},,function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"h",(function(){return l})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return f})),t.d(n,"c",(function(){return j})),t.d(n,"i",(function(){return v})),t.d(n,"g",(function(){return m})),t.d(n,"f",(function(){return p}));var r=t(18),c=t(3),o=1,i=100,a={columns:1,rows:1,cells:[[s(0,0)]]},l=Object(r.b)({name:"field",initialState:a,reducers:{updateFieldDimensions:function(e,n){var t=u(n.payload.columns),r=u(n.payload.rows),c=t-e.columns;c>0?function(e,n){for(var t=e.columns,r=e.columns+n,c=t;c<r;c++){e.cells[c]=[];for(var o=0;o<e.rows;o++)e.cells[c][o]=s(c,o)}}(e,c):c<0&&function(e,n){for(var t=e.columns-n,r=e.columns,c=t;c<r;c++)for(var o=0;o<e.rows;o++){var i=e.cells[c][o];console.log("TODO Delete Token:",i)}e.cells.splice(t,n)}(e,Math.abs(c)),e.columns=t;var o=r-e.rows;o>0?function(e,n){for(var t=e.rows,r=e.rows+n,c=0;c<e.columns;c++)for(var o=t;o<r;o++)e.cells[c][o]=s(c,o)}(e,o):o<0&&function(e,n){for(var t=e.rows-n,r=e.rows,c=0;c<e.columns;c++){for(var o=t;o<r;o++){var i=e.cells[c][o];console.log("TODO Delete Token:",i)}e.cells[c].splice(t,n)}}(e,Math.abs(o)),e.rows=r},moveToken:function(e,n){var t=n.payload,r=t.id,c=t.x,o=t.y;d(e,r),e.cells[c][o].tokenId=r}},extraReducers:function(e){e.addCase(c.f,(function(e,n){var t=n.payload,r=t.id,c=t.x,o=t.y;e.cells[c][o].tokenId=r})),e.addCase(c.g,(function(e,n){d(e,n.payload.id)}))}});function u(e){return Math.max(o,Math.min(i,e))}function s(e,n,t){return{x:e,y:n,tokenId:t}}function d(e,n){for(var t=0;t<e.columns;t++)for(var r=0;r<e.rows;r++){var c=e.cells[t][r];if(c.tokenId===n){c.tokenId=void 0;break}}}var b=function(e){return e.content.present.field.columns},f=function(e){return e.content.present.field.rows},j=function(e,n,t){var r=e.content.present.field.cells[n];return r?r[t]:void 0},O=l.actions,v=O.updateFieldDimensions,m=O.moveToken,p=[v.type]},,,function(e,n,t){"use strict";t.d(n,"b",(function(){return q})),t.d(n,"a",(function(){return J}));var r=t(1),c=t(19),o=t(7),i=t.n(o),a=t(5),l=t(54),u=t.n(l),s=t(4),d=t(8),b=t(11),f=function(e,n){var t=Object(r.useState)(e),c=Object(b.a)(t,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){return i(e)}),[e]),[{value:o,onChange:function(e){i(e.target.value),n&&n(e.target.value)}},o,i]},j=t(13),O=t.n(j),v=t(0);function m(e){var n=e.label,t=e.max,c=e.value,o=e.onChange,i=e.onFocus,a=function(e,n){return Object(r.useCallback)((function(t){t.length<=e&&n(t)}),[e,n])}(t,o),l=f(c,a),u=Object(b.a)(l,1)[0];return Object(v.jsxs)("div",{className:O.a.element,children:[n?Object(v.jsx)("label",{className:O.a.label,children:n}):null,Object(v.jsx)("input",Object(d.a)({className:O.a.input,type:"text",maxLength:t,onFocus:i},u))]})}function p(e){var n=e.label,t=e.options,c=e.value,o=function(e){return Object(r.useCallback)((function(n){e&&e(n)}),[e])}(e.onChange),i=f(c,o),a=Object(b.a)(i,2),l=a[0],u=a[1],s=function(e){return Object(r.useMemo)((function(){return e.map(g)}),[e])}(t),j=function(e,n){return Object(r.useMemo)((function(){return function(e,n){var t=n.find((function(n){return n.value===e}));return t?t.style:null}(e,n)}),[e,n])}(u,s);return Object(v.jsxs)("div",{className:O.a.element,children:[n?Object(v.jsx)("label",{className:O.a.label,children:n}):null,Object(v.jsx)("select",Object(d.a)(Object(d.a)({className:O.a.select,style:j},l),{},{children:s.map(x)}))]})}function g(e){var n=null,t=null,r=void 0;return"object"===typeof e&&null!==e&&void 0!==e.value?(n=e.value,t=e.label,r=e.style):n=e+"",null!==t&&void 0!==t||(t=n),{value:n,label:t,style:r}}function x(e){var n=e.value,t=e.label,r=e.style;return Object(v.jsx)("option",{className:O.a.option,value:n,style:r,children:t},n)}var h=t(9),_=t(55),k=t.n(_);function C(e){var n=e.title,t=e.children,r=e.className;return Object(v.jsxs)("div",{className:r,children:[Object(v.jsx)("h1",{className:k.a.title,children:n}),t]})}var N=t(44),y=t.n(N);function T(e){var n=e.title,t=e.children;return Object(v.jsxs)("div",{className:y.a.container,children:[n?Object(v.jsx)("h2",{className:y.a.title,children:n}):null,t]})}function D(){return Object(v.jsx)(C,{title:"Field",children:Object(v.jsx)(w,{})})}function w(){var e=Object(s.b)(),n=Object(s.c)(h.getColumns),t=Object(s.c)(h.getRows),c=Object(r.useCallback)((function(n){e(Object(h.updateFieldDimensions)({columns:n,rows:t}))}),[e,t]),o=Object(r.useCallback)((function(t){e(Object(h.updateFieldDimensions)({columns:n,rows:t}))}),[e,n]);return Object(v.jsxs)(T,{children:[Object(v.jsx)(I,{label:"Columns",value:n,onChange:c}),Object(v.jsx)(I,{label:"Rows",value:t,onChange:o})]})}function I(e){var n=e.label,t=e.value,r=e.onChange,c=u()(h.MIN_DIMENSIONS,h.MAX_DIMENSIONS+1);return Object(v.jsx)(p,{label:n,options:c,value:t+"",onChange:r})}var A=t(3);function S(e){var n=e.id,t=Object(s.c)((function(e){var t,r=null===(t=Object(A.h)(e,n))||void 0===t?void 0:t.symbol;return r||""})),c=Object(s.b)(),o=Object(r.useCallback)((function(e){c(Object(A.k)({id:n,symbol:e}))}),[c,n]);return Object(v.jsx)(m,{label:"Symbol",max:1,value:t,onChange:o,onFocus:function(e){return e.target.select()}})}var F=t(35),M=[E("Yellow","#fff2cc"),E("Red","#f8cecc"),E("Purple","#d1c4e9"),E("Blue","#bbdefb"),E("Green","#d5e8d4"),E("Grey","#cfd8dc"),E("Dark yellow","#fdd835"),E("Dark red","#c62828"),E("Dark purple","#673ab7"),E("Dark blue","#1976d2"),E("Dark green","#2e7d32"),E("Dark gray","#647687")];function E(e,n){return{label:e,value:R(n),style:{backgroundColor:n,color:Object(F.a)(n)}}}function R(e){return e?e.toLowerCase():null}function W(e){var n=e.id,t=Object(s.c)((function(e){var t;return R(null===(t=Object(A.h)(e,n))||void 0===t?void 0:t.color)})),c=Object(s.b)(),o=Object(r.useCallback)((function(e){c(Object(A.k)({id:n,color:e}))}),[c,n]);return t?Object(v.jsx)(p,{label:"Color",options:M,value:t,onChange:o}):null}var B=[{label:"\ud83e\udc45 North",value:A.b.North},{label:"\ud83e\udc46 East",value:A.b.East},{label:"\ud83e\udc47 South",value:A.b.South},{label:"\ud83e\udc44 West",value:A.b.West},{label:"None",value:A.b.None}];function z(e){var n=e.id,t=Object(s.c)((function(e){var t,r=null===(t=Object(A.h)(e,n))||void 0===t?void 0:t.direction;return r||A.b.None})),c=Object(s.b)(),o=Object(r.useCallback)((function(e){c(Object(A.k)({id:n,direction:e}))}),[c,n]);return Object(v.jsx)(p,{label:"Direction",options:B,value:t,onChange:o})}function L(e){var n=e.id;return Object(v.jsx)(C,{title:"Token",children:Object(v.jsxs)(T,{children:[Object(v.jsx)(S,{id:n}),Object(v.jsx)(W,{id:n}),Object(v.jsx)(z,{id:n})]})})}var P=t(6),G=t(78),V=t(22),X=t(27),Y=t.n(X),J={id:"",color:"#cfd8dc",symbol:"",direction:A.b.None},K={id:J.id,size:100};function H(){var e=Object(G.a)((function(){return{type:A.e,item:K,collect:function(e){return{dragging:!!e.isDragging()}}}})),n=Object(b.a)(e,3),t=n[0].dragging,r=n[1],c=n[2];Object(V.b)(c);var o=i()(Y.a.token,Object(P.a)({},Y.a.dragging,t));return Object(v.jsx)(C,{title:"Neuer Token",className:Y.a.panel,children:Object(v.jsx)("div",{className:Y.a.tokenWrapper,children:Object(v.jsx)(A.a,{id:K.id,size:K.size,color:J.color,symbol:"",direction:A.b.None,selected:!1,circleRef:r,circleClassName:o})})})}var Q=t(37),U=t.n(Q),q=Object(r.memo)((function(e){var n=e.className,t=Object(c.c)(a.b);return Object(v.jsxs)("div",{className:i()(U.a.container,n),children:[Object(v.jsx)("div",{className:U.a.dynamic,children:t?Object(v.jsx)(L,{id:t}):Object(v.jsx)(D,{})}),Object(v.jsx)("div",{className:U.a.newToken,children:Object(v.jsx)(H,{})})]})}))},function(e,n,t){e.exports={container:"Toolbar_container__3wR26",group:"Toolbar_group__38d8m",button:"Toolbar_button__1im3b"}},function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var r=t(77),c=t(56),o=t(8),i=t(76),a=t(3),l=t(52),u=t.n(l),s=t(0);function d(){var e=Object(i.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),n=e.item,t=e.itemType,r=e.currentOffset;if(!e.isDragging||!r)return null;var c=function(e,n,t){switch(e){case a.e:return Object(s.jsx)(a.d,Object(o.a)({offset:t},n));default:return null}}(t,n,r);return c?Object(s.jsx)("div",{className:u.a.layer,children:c}):null}function b(e){var n=e.children;return Object(s.jsxs)(r.a,{backend:c.a,children:[Object(s.jsx)(d,{}),n]})}var f=t(1),j=new Image;function O(e){Object(f.useEffect)((function(){e(j,{captureDraggingState:!0})}),[e])}j.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},,,,,function(e,n,t){e.exports={panel:"NewToken_panel__3BGVk",tokenWrapper:"NewToken_tokenWrapper__3f-4t",token:"NewToken_token__3SYsc",dragging:"NewToken_dragging__jMWyn"}},function(e,n,t){e.exports={cell:"Cell_cell__fv93r",firstRow:"Cell_firstRow__2E9oE",lastColumn:"Cell_lastColumn__2WNNW",droppable:"Cell_droppable__1P9wT"}},function(e,n,t){e.exports={container:"Layout_container__2El7r",toolbar:"Layout_toolbar__37LM2",field:"Layout_field__3DuOE",tokenPanel:"Layout_tokenPanel__3M8Lg"}},,,,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(23),c=t.n(r),o="#000000",i="#FFFFFF";function a(e){return c.a.contrast(o,e)>=c.a.contrast(i,e)?o:i}},,function(e,n,t){e.exports={container:"PanelContainer_container__12MNC",dynamic:"PanelContainer_dynamic__1-Gue",newToken:"PanelContainer_newToken__3Scll"}},,,,function(e,n,t){e.exports={circle:"DraggableToken_circle__2e89C",dragging:"DraggableToken_dragging__3643i"}},,,function(e,n,t){e.exports={container:"PanelCategory_container__2ywKt",title:"PanelCategory_title__2RLOE"}},function(e,n,t){e.exports={field:"Field_field__1PltA",gridWrapper:"Field_gridWrapper__oluTN"}},,,,function(e,n){},function(e,n,t){"use strict";t.d(n,"a",(function(){return N}));var r=t(1),c=t(7),o=t.n(c),i=t(4),a=t(5),l=t(53),u=t.n(l),s=t(17),d=t(6),b=t(11),f=t(79),j=t(80),O=t(3),v=t(20),m=t(0);function p(e){var n=e.id,t=e.size,c=Object(i.c)((function(e){return Object(a.d)(e,n)})),o=Object(i.b)(),l=function(e,n){return Object(r.useCallback)((function(t){n(e?Object(a.a)():Object(a.e)({id:t}))}),[n,e])}(c,o),u=function(e,n){return Object(r.useCallback)((function(t,r){n(e?Object(O.j)({id:t,direction:r}):Object(a.e)({id:t}))}),[e,n])}(c,o),s=function(e){return{position:"absolute",left:"-1px",top:"-1px",width:e+"px",height:e+"px"}}(t);return Object(m.jsx)("div",{style:s,children:Object(m.jsx)(O.c,{id:n,size:t,onTokenClick:l,onDirectionClick:u})})}var g=t(28),x=t.n(g);function h(e){var n,t=e.x,r=e.y,c=e.size,a=e.firstRow,l=e.lastColumn,u=Object(i.c)((function(e){return Object(s.c)(e,t,r)})),g=null===u||void 0===u?void 0:u.tokenId,h=function(e,n,t){var r=Object(i.b)();return Object(f.a)((function(){return{accept:O.e,canDrop:function(){return t},drop:function(t){return function(e,n,t,r){var c=r.id;c===v.a.id?e(Object(O.f)({x:n,y:t,id:Object(j.a)(),color:v.a.color,symbol:v.a.symbol,direction:v.a.direction})):e(Object(s.g)({x:n,y:t,id:c}))}(r,e,n,t)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}}),[e,n,t,r])}(t,r,void 0===g),_=Object(b.a)(h,2),k=_[0],C=k.isOver,N=k.canDrop,y=_[1],T=o()(x.a.cell,(n={},Object(d.a)(n,x.a.firstRow,a),Object(d.a)(n,x.a.lastColumn,l),Object(d.a)(n,x.a.droppable,C&&N),n)),D=function(e){var n=e+"px";return{width:n,height:n}}(c);return Object(m.jsx)("div",{ref:y,className:T,style:D,children:g?Object(m.jsx)(p,{id:g,size:c}):null})}function _(e){var n=e.cellSize,t=Object(i.c)(s.d),r=Object(i.c)(s.e),c=function(e,n,t){return{width:e*t+"px",height:n*t+"px"}}(t,r,n),o=function(e,n,t){for(var r=[],c=0;c<n;c++)for(var o=0===c,i=0;i<e;i++){var a=i===e-1;r.push(Object(m.jsx)(h,{x:i,y:c,size:t,firstRow:o,lastColumn:a},i+";"+c))}return r}(t,r,n);return Object(m.jsx)("div",{className:u.a.grid,style:c,children:o})}var k=t(45),C=t.n(k),N=Object(r.memo)((function(e){var n=e.className,t=Object(i.b)();return Object(m.jsx)("div",{className:o()(C.a.field,n),children:Object(m.jsx)("div",{className:C.a.gridWrapper,onClick:function(){return t(Object(a.a)())},children:Object(m.jsx)(_,{cellSize:100})})})}))},,function(e,n,t){e.exports={layer:"CustomDragLayer_layer__3Oi1J"}},function(e,n,t){e.exports={grid:"Grid_grid__5dSy0"}},,function(e,n,t){e.exports={title:"Panel_title__2jCxg"}},,function(e,n,t){"use strict";t.r(n);var r=t(31),c=t.n(r),o=t(4),i=t(0);c.a.render(Object(i.jsx)(o.a,{}),document.getElementById("root"))},,,,,,,,,,,,,function(e,n,t){}],[[57,1,2]]]);
//# sourceMappingURL=main.e3609f08.chunk.js.map