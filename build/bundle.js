/* ! For license information please see bundle.js.LICENSE.txt */
(()=>{
  let e; let t; const n={739: (e, t, n)=>{
    'use strict'; n.d(t, {A: ()=>l}); const r=n(601); const o=n.n(r); const a=n(314); const i=n.n(a)()(o()); i.push([e.id, '/* this gets exported as style.css and can be used for the default theming */\n/* these are the necessary styles for React Flow, they get used by base.css and style.css */\n.react-flow__container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.react-flow__pane {\n  z-index: 1;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.react-flow__pane.selection {\n    cursor: pointer;\n  }\n.react-flow__pane.dragging {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n  }\n.react-flow__viewport {\n  transform-origin: 0 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.react-flow__renderer {\n  z-index: 4;\n}\n.react-flow__selection {\n  z-index: 6;\n}\n.react-flow__nodesselection-rect:focus,\n.react-flow__nodesselection-rect:focus-visible {\n  outline: none;\n}\n.react-flow .react-flow__edges {\n  pointer-events: none;\n  overflow: visible;\n}\n.react-flow__edge-path,\n.react-flow__connection-path {\n  stroke: #b1b1b7;\n  stroke-width: 1;\n  fill: none;\n}\n.react-flow__edge {\n  pointer-events: visibleStroke;\n  cursor: pointer;\n}\n.react-flow__edge.animated path {\n    stroke-dasharray: 5;\n    -webkit-animation: dashdraw 0.5s linear infinite;\n            animation: dashdraw 0.5s linear infinite;\n  }\n.react-flow__edge.animated path.react-flow__edge-interaction {\n    stroke-dasharray: none;\n    -webkit-animation: none;\n            animation: none;\n  }\n.react-flow__edge.inactive {\n    pointer-events: none;\n  }\n.react-flow__edge.selected,\n  .react-flow__edge:focus,\n  .react-flow__edge:focus-visible {\n    outline: none;\n  }\n.react-flow__edge.selected .react-flow__edge-path,\n  .react-flow__edge:focus .react-flow__edge-path,\n  .react-flow__edge:focus-visible .react-flow__edge-path {\n    stroke: #555;\n  }\n.react-flow__edge-textwrapper {\n    pointer-events: all;\n  }\n.react-flow__edge-textbg {\n    fill: white;\n  }\n.react-flow__edge .react-flow__edge-text {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n.react-flow__connection {\n  pointer-events: none;\n}\n.react-flow__connection .animated {\n    stroke-dasharray: 5;\n    -webkit-animation: dashdraw 0.5s linear infinite;\n            animation: dashdraw 0.5s linear infinite;\n  }\n.react-flow__connectionline {\n  z-index: 1001;\n}\n.react-flow__nodes {\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n.react-flow__node {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: all;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.react-flow__node.dragging {\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n  }\n.react-flow__nodesselection {\n  z-index: 3;\n  transform-origin: left top;\n  pointer-events: none;\n}\n.react-flow__nodesselection-rect {\n    position: absolute;\n    pointer-events: all;\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n.react-flow__handle {\n  position: absolute;\n  pointer-events: none;\n  min-width: 5px;\n  min-height: 5px;\n  width: 6px;\n  height: 6px;\n  background: #1a192b;\n  border: 1px solid white;\n  border-radius: 100%;\n}\n.react-flow__handle.connectionindicator {\n    pointer-events: all;\n    cursor: crosshair;\n  }\n.react-flow__handle-bottom {\n    top: auto;\n    left: 50%;\n    bottom: -4px;\n    transform: translate(-50%, 0);\n  }\n.react-flow__handle-top {\n    left: 50%;\n    top: -4px;\n    transform: translate(-50%, 0);\n  }\n.react-flow__handle-left {\n    top: 50%;\n    left: -4px;\n    transform: translate(0, -50%);\n  }\n.react-flow__handle-right {\n    right: -4px;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n.react-flow__edgeupdater {\n  cursor: move;\n  pointer-events: all;\n}\n.react-flow__panel {\n  position: absolute;\n  z-index: 5;\n  margin: 15px;\n}\n.react-flow__panel.top {\n    top: 0;\n  }\n.react-flow__panel.bottom {\n    bottom: 0;\n  }\n.react-flow__panel.left {\n    left: 0;\n  }\n.react-flow__panel.right {\n    right: 0;\n  }\n.react-flow__panel.center {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n.react-flow__attribution {\n  font-size: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  padding: 2px 3px;\n  margin: 0;\n}\n.react-flow__attribution a {\n    text-decoration: none;\n    color: #999;\n  }\n@-webkit-keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n@keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n.react-flow__edgelabel-renderer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.react-flow__edge.updating .react-flow__edge-path {\n      stroke: #777;\n    }\n.react-flow__edge-text {\n    font-size: 10px;\n  }\n.react-flow__node.selectable:focus,\n  .react-flow__node.selectable:focus-visible {\n    outline: none;\n  }\n.react-flow__node-default,\n.react-flow__node-input,\n.react-flow__node-output,\n.react-flow__node-group {\n  padding: 10px;\n  border-radius: 3px;\n  width: 150px;\n  font-size: 12px;\n  color: #222;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #1a192b;\n  background-color: white;\n}\n.react-flow__node-default.selectable:hover, .react-flow__node-input.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {\n      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\n    }\n.react-flow__node-default.selectable.selected,\n    .react-flow__node-default.selectable:focus,\n    .react-flow__node-default.selectable:focus-visible,\n    .react-flow__node-input.selectable.selected,\n    .react-flow__node-input.selectable:focus,\n    .react-flow__node-input.selectable:focus-visible,\n    .react-flow__node-output.selectable.selected,\n    .react-flow__node-output.selectable:focus,\n    .react-flow__node-output.selectable:focus-visible,\n    .react-flow__node-group.selectable.selected,\n    .react-flow__node-group.selectable:focus,\n    .react-flow__node-group.selectable:focus-visible {\n      box-shadow: 0 0 0 0.5px #1a192b;\n    }\n.react-flow__node-group {\n  background-color: rgba(240, 240, 240, 0.25);\n}\n.react-flow__nodesselection-rect,\n.react-flow__selection {\n  background: rgba(0, 89, 220, 0.08);\n  border: 1px dotted rgba(0, 89, 220, 0.8);\n}\n.react-flow__nodesselection-rect:focus,\n  .react-flow__nodesselection-rect:focus-visible,\n  .react-flow__selection:focus,\n  .react-flow__selection:focus-visible {\n    outline: none;\n  }\n.react-flow__controls {\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n}\n.react-flow__controls-button {\n    border: none;\n    background: #fefefe;\n    border-bottom: 1px solid #eee;\n    box-sizing: content-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    padding: 5px;\n  }\n.react-flow__controls-button:hover {\n      background: #f4f4f4;\n    }\n.react-flow__controls-button svg {\n      width: 100%;\n      max-width: 12px;\n      max-height: 12px;\n    }\n.react-flow__controls-button:disabled {\n      pointer-events: none;\n    }\n.react-flow__controls-button:disabled svg {\n        fill-opacity: 0.4;\n      }\n.react-flow__minimap {\n  background-color: #fff;\n}\n.react-flow__resize-control {\n  position: absolute;\n}\n.react-flow__resize-control.left,\n.react-flow__resize-control.right {\n  cursor: ew-resize;\n}\n.react-flow__resize-control.top,\n.react-flow__resize-control.bottom {\n  cursor: ns-resize;\n}\n.react-flow__resize-control.top.left,\n.react-flow__resize-control.bottom.right {\n  cursor: nwse-resize;\n}\n.react-flow__resize-control.bottom.left,\n.react-flow__resize-control.top.right {\n  cursor: nesw-resize;\n}\n/* handle styles */\n.react-flow__resize-control.handle {\n  width: 4px;\n  height: 4px;\n  border: 1px solid #fff;\n  border-radius: 1px;\n  background-color: #3367d9;\n  transform: translate(-50%, -50%);\n}\n.react-flow__resize-control.handle.left {\n  left: 0;\n  top: 50%;\n}\n.react-flow__resize-control.handle.right {\n  left: 100%;\n  top: 50%;\n}\n.react-flow__resize-control.handle.top {\n  left: 50%;\n  top: 0;\n}\n.react-flow__resize-control.handle.bottom {\n  left: 50%;\n  top: 100%;\n}\n.react-flow__resize-control.handle.top.left {\n  left: 0;\n}\n.react-flow__resize-control.handle.bottom.left {\n  left: 0;\n}\n.react-flow__resize-control.handle.top.right {\n  left: 100%;\n}\n.react-flow__resize-control.handle.bottom.right {\n  left: 100%;\n}\n/* line styles */\n.react-flow__resize-control.line {\n  border-color: #3367d9;\n  border-width: 0;\n  border-style: solid;\n}\n.react-flow__resize-control.line.left,\n.react-flow__resize-control.line.right {\n  width: 1px;\n  transform: translate(-50%, 0);\n  top: 0;\n  height: 100%;\n}\n.react-flow__resize-control.line.left {\n  left: 0;\n  border-left-width: 1px;\n}\n.react-flow__resize-control.line.right {\n  left: 100%;\n  border-right-width: 1px;\n}\n.react-flow__resize-control.line.top,\n.react-flow__resize-control.line.bottom {\n  height: 1px;\n  transform: translate(0, -50%);\n  left: 0;\n  width: 100%;\n}\n.react-flow__resize-control.line.top {\n  top: 0;\n  border-top-width: 1px;\n}\n.react-flow__resize-control.line.bottom {\n  border-bottom-width: 1px;\n  top: 100%;\n}\n', '']); const l=i;
  }, 563: (e, t, n)=>{
    'use strict'; n.d(t, {A: ()=>l}); const r=n(601); const o=n.n(r); const a=n(314); const i=n.n(a)()(o()); i.push([e.id, '@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);']), i.push([e.id, 'body{background:#dfe3ff;background:linear-gradient(180deg, rgb(223, 227, 255) 0%, rgb(234, 220, 255) 100%);font-family:"Comfortaa",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;height:100vh;margin:0px 50px}h1,h2,h3,h4{font-family:"Poppins",sans-serif;color:#0b002d}h2{font-size:36px;font-weight:600;text-align:center}h3{font-weight:700;font-size:24px}h4{font-weight:400}.button{background:#556aff;color:#fff;font-weight:100;font-size:18px;text-decoration:none;border-radius:18px;border:none;padding:20px 50px;margin:10px 0px;font-family:"Comfortaa",sans-serif;box-shadow:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px;cursor:pointer}.button:hover{transition:.1s ease-in;letter-spacing:.02em;border-radius:16px}.container{padding:50px;background:#fff;padding:50px;margin:auto;border-radius:18px;color:#556aff}nav{margin:25px 60px 0px 60px;display:flex;justify-content:space-between;color:#556aff}.navbar-links{display:flex;font-size:16px}.navbar-links li{padding-left:50px;list-style:none}.logo{height:40px}.landing-page-grid{background:#fafafa;box-shadow:rgba(0,0,0,.1) 0px 1px 3px 0px,rgba(0,0,0,.06) 0px 1px 2px 0px;border-radius:18px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;align-items:center;text-align:center}@media(max-width: 1200px){.landing-page-grid{display:flex;justify-content:center;padding:50px}}.landing-page{background:#fff;padding:50px;border-radius:18px;display:flex;flex-direction:column;color:#556aff}.landing-page h1{font-size:64px;font-weight:400;letter-spacing:.02em;color:#0b002d;margin:0px 0px 50px 50px;line-height:1.1}.landing-page h1 span{color:#556aff;font-weight:600}.landing-page h4{color:#0b002d;padding:0px;letter-spacing:.04em;margin-top:10px}.landing-page h3{margin-bottom:10px;font-size:21px}.landing-page p{font-size:12px;font-weight:100}.landing-page .button{width:50%}.landing-page section{position:relative;grid-template-columns:repeat(1, 1fr);grid-template-rows:auto;grid-template-areas:"one" "two" "three" "four";row-gap:20px;column-gap:10px;font-size:18px;line-height:1.2;padding:20px 50px}.landing-page section div{position:relative;background:#fafafa;z-index:2;padding:10px;height:50px;border-radius:0px 18px 18px 18px;color:#0b002d;border:3px solid #0b002d;display:flex;align-items:center;justify-content:flex-start;width:400px;margin:20px;text-align:start}.landing-page section span{font-size:48px;padding-right:10px}.landing-page section .step-1{grid-area:one}.landing-page section .step-2{grid-area:two}.landing-page section .step-3{grid-area:three}.landing-page section .step-4{grid-area:four}@media(max-width: 1200px){.landing-page section{display:none}}.line{position:absolute;z-index:0;top:0;left:0;height:100%;width:100%}.landing-button-container{display:flex;flex-direction:column;align-items:center}.landing-button-container .button-2{background-color:#a3bdff;color:#fff}.form-container{background:#fff;padding:50px;border-radius:18px}form{display:flex;flex-direction:column;justify-content:center;padding:20px;border-radius:18px;max-width:800px;margin:auto;box-shadow:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px;color:#0b002d;background:#fff}form input,form label{margin:0px 20px;font-family:"Comfortaa",sans-serif}form input{border:none;box-shadow:rgba(0,0,0,.08) 3px 3px 6px 0px inset,rgba(255,255,255,.5) -3px -3px 6px 1px inset;padding:10px;background:#f8f9ff}form h3{text-align:center;font-weight:400}form .button{margin:25px auto;padding:10px 20px;width:200px}label{padding:15px 0px 5px 10px}.chart-page-container{display:flex;flex-direction:column}.db-query-container{background:#7300ff;border-radius:18px 18px 0px 0px;box-sizing:border-box;border:1px solid #7300ff;width:100%;color:#fff;padding:10px 30px 30px 30px;margin:auto}.db-query-container p{margin:5px}.db-query-container section{background:#fff;color:#000;padding:10px}.db-query-container section img{float:right;width:15px}.db-query-container section input{text-align:center;box-shadow:none;background:rgba(0,0,0,0);padding-top:1px;padding-bottom:3px;margin:0px;font-family:"Comfortaa",sans-serif;font-size:16px;border:2px solid #dadada}.db-query-container section form{display:flex;flex-direction:row;box-shadow:none;flex-wrap:wrap}.db-query-container section select{width:20px;border:none;background:#556aff;color:#fff;border-radius:0px 8px 8px 8px;font-size:18px;margin:5px;text-align:center;text-decoration:none;appearance:none;-moz-appearance:none;-webkit-appearance:none}.db-query-container section .button{letter-spacing:.02em}.react-flow{background-image:radial-gradient(#dadada 6%, transparent 0%);background-position:12px 12px;background-size:25px 25px;background-color:#fff}.custom-node{display:flex;justify-content:center;align-items:center}.custom-node button{border:none;background:rgba(0,0,0,0);margin:20px;font-family:"Comfortaa",sans-serif}.react-flow__handle-top{background:rgba(0,0,0,0);border:none}.react-flow__handle-bottom{background:rgba(0,0,0,0);border:none}.react-flow__handle-left{background:rgba(0,0,0,0);border:none}.react-flow__handle-right{background:rgba(0,0,0,0);border:none}.react-flow__node{background:#fff}.flowButton{background:none;font-family:"Comfortaa",sans-serif;border:none;text-align:left;padding:0px 10px;cursor:pointer;font-size:16px}.clicked{background:#efefef}.db-query-container button{font-family:"Comfortaa",sans-serif;margin:2px;border:none;padding:5px}[id^=undefined]{font-weight:800;background:#a3bdff;font-size:18px;text-align:center;padding:none;margin-left:10px;letter-spacing:.02em;border-radius:18px 18px 0px 0px}.clause-dropdown{color:red}.submenu{display:none}ul{cursor:pointer}.queryBuilder{background:#556aff;border-radius:0px 8px 8px 8px;color:#fff;text-align:center;font-size:12px;height:20px;width:50px;margin-top:3px;margin-left:2px;padding-top:5px;cursor:pointer}.queryBuilder ul{list-style:none;display:none;color:#000;background:#f1f0f0;z-index:2;position:relative;padding:20px;min-width:200px;text-align:left;font-size:12px;border-radius:0px 18px 18px 18px;box-shadow:rgba(50,50,93,.25) 0px 30px 60px -12px,rgba(0,0,0,.3) 0px 18px 36px -18px}.queryBuilder ul ul{box-shadow:none;margin-top:5px;margin:auto}.queryBuilder ul ul li{text-align:left;padding-left:20px}.queryBuilder ul ul li:hover{background:#dadada}.queryBuilder ul li{transition:.1s ease-out;padding:5px 0px;font-size:14px;cursor:pointer}.queryBuilder ul li:hover{transition:.01s ease-in;letter-spacing:.02em;color:blue}.top10{font-size:14px !important;font-weight:bold}.dropdownIcon{float:right;height:.7em}.dropdownIconExpanded{transition:.1s ease-out;transform:rotate(-180deg);float:right;height:.7em}.modal{display:grid;grid-template-rows:repeat(5, auto);padding-bottom:30px}.modal p{padding:0px 20px}.modal .button{padding:10px 20px;cursor:pointer;position:relative;margin:10px auto;width:75%}.modal p{display:none;text-align:center}.modal h3{font-family:"Poppins",sans-serif;font-size:24px;font-weight:bold;text-align:center}.modal img{float:right;cursor:help;position:relative}.overlay{margin:auto;margin-top:8%;overflow:auto;width:600px;background:linear-gradient(323deg, rgb(219, 224, 255) 0%, rgb(247, 248, 255) 100%);opacity:1;box-shadow:rgba(50,50,93,.25) 0px 30px 60px -12px,rgba(0,0,0,.3) 0px 18px 36px -18px;border-radius:18px;outline:none}.on-columns-modal{display:grid;grid-template-columns:repeat(3, auto);grid-template-rows:repeat(3, auto);justify-content:space-around;justify-items:center;grid-template-areas:"title title title" "tableOne on tableTwo" "buttonModal buttonModal buttonModal";padding:20px}.on-columns-modal button{font-size:12px}.on-columns-modal .button{grid-area:buttonModal;padding:10px 20px;margin-top:30px}.on-columns-modal h3{grid-area:title;text-align:center}.on-columns-modal div{display:flex;flex-direction:column;width:200px;background:#fafafa;border-radius:18px 18px 5px 5px}.on-columns-modal div h3{font-weight:800;font-family:"Comfortaa",sans-serif;background:#a3bdff;font-size:16px;text-align:center;padding:10px;margin:0px;letter-spacing:.02em;border-radius:18px 18px 0px 0px}.on-columns-modal div h1{grid-area:on}.on-columns-modal div button{padding:10px 10px;display:flex;justify-content:space-between}.on-columns-modal div button:hover{letter-spacing:.02em;cursor:pointer}.on-columns-modal .tableOne{grid-area:tableOne}.on-columns-modal .tableTwo{grid-area:tableTwo}.nodeGrid{display:flex;justify-content:space-between}.FKPK{color:#b0b0b0;margin-left:5px}.dataType{color:#b0b0b0;text-align:right}.label{text-align:right}', '']); const l=i;
  }, 314: (e)=>{
    'use strict'; e.exports=function(e) {
      const t=[]; return t.toString=function() {
        return this.map((function(t) {
          let n=''; const r=void 0!==t[5]; return t[4]&&(n+='@supports ('.concat(t[4], ') {')), t[2]&&(n+='@media '.concat(t[2], ' {')), r&&(n+='@layer'.concat(t[5].length>0?' '.concat(t[5]):'', ' {')), n+=e(t), r&&(n+='}'), t[2]&&(n+='}'), t[4]&&(n+='}'), n;
        })).join('');
      }, t.i=function(e, n, r, o, a) {
        'string'==typeof e&&(e=[[null, e, void 0]]); const i={}; if (r) {
          for (let l=0; l<this.length; l++) {
            const u=this[l][0]; null!=u&&(i[u]=!0);
          }
        } for (let s=0; s<e.length; s++) {
          const c=[].concat(e[s]); r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]='@layer'.concat(c[5].length>0?' '.concat(c[5]):'', ' {').concat(c[1], '}')), c[5]=a), n&&(c[2]?(c[1]='@media '.concat(c[2], ' {').concat(c[1], '}'), c[2]=n):c[2]=n), o&&(c[4]?(c[1]='@supports ('.concat(c[4], ') {').concat(c[1], '}'), c[4]=o):c[4]=''.concat(o)), t.push(c));
        }
      }, t;
    };
  }, 601: (e)=>{
    'use strict'; e.exports=function(e) {
      return e[1];
    };
  }, 792: (e, t, n)=>{
    let r; !function() {
      'use strict'; const o=!('undefined'==typeof window||!window.document||!window.document.createElement); const a={canUseDOM: o, canUseWorkers: 'undefined'!=typeof Worker, canUseEventListeners: o&&!(!window.addEventListener&&!window.attachEvent), canUseViewport: o&&!!window.screen}; void 0===(r=function() {
        return a;
      }.call(t, n, t, e))||(e.exports=r);
    }();
  }, 694: (e, t, n)=>{
    'use strict'; const r=n(925); function o() {} function a() {}a.resetWarningCache=o, e.exports=function() {
      function e(e, t, n, o, a, i) {
        if (i!==r) {
          const l=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'); throw l.name='Invariant Violation', l;
        }
      } function t() {
        return e;
      }e.isRequired=e; const n={array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: a, resetWarningCache: o}; return n.PropTypes=n, n;
    };
  }, 556: (e, t, n)=>{
    e.exports=n(694)();
  }, 925: (e)=>{
    'use strict'; e.exports='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  }, 551: (e, t, n)=>{
    'use strict'; const r=n(540); const o=n(982); function a(e) {
      for (var t='https://reactjs.org/docs/error-decoder.html?invariant='+e, n=1; n<arguments.length; n++)t+='&args[]='+encodeURIComponent(arguments[n]); return 'Minified React error #'+e+'; visit '+t+' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
    } const i=new Set; const l={}; function u(e, t) {
      s(e, t), s(e+'Capture', t);
    } function s(e, t) {
      for (l[e]=t, e=0; e<t.length; e++)i.add(t[e]);
    } const c=!('undefined'==typeof window||void 0===window.document||void 0===window.document.createElement); const d=Object.prototype.hasOwnProperty; const f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/; const p={}; const h={}; function m(e, t, n, r, o, a, i) {
      this.acceptsBooleans=2===t||3===t||4===t, this.attributeName=r, this.attributeNamespace=o, this.mustUseProperty=n, this.propertyName=e, this.type=t, this.sanitizeURL=a, this.removeEmptyString=i;
    } const g={}; 'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach((function(e) {
      g[e]=new m(e, 0, !1, e, null, !1, !1);
    })), [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach((function(e) {
      const t=e[0]; g[t]=new m(t, 1, !1, e[1], null, !1, !1);
    })), ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach((function(e) {
      g[e]=new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
    })), ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach((function(e) {
      g[e]=new m(e, 2, !1, e, null, !1, !1);
    })), 'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach((function(e) {
      g[e]=new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
    })), ['checked', 'multiple', 'muted', 'selected'].forEach((function(e) {
      g[e]=new m(e, 3, !0, e, null, !1, !1);
    })), ['capture', 'download'].forEach((function(e) {
      g[e]=new m(e, 4, !1, e, null, !1, !1);
    })), ['cols', 'rows', 'size', 'span'].forEach((function(e) {
      g[e]=new m(e, 6, !1, e, null, !1, !1);
    })), ['rowSpan', 'start'].forEach((function(e) {
      g[e]=new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
    })); const y=/[\-:]([a-z])/g; function v(e) {
      return e[1].toUpperCase();
    } function b(e, t, n, r) {
      let o=g.hasOwnProperty(t)?g[t]:null; (null!==o?0!==o.type:r||!(2<t.length)||'o'!==t[0]&&'O'!==t[0]||'n'!==t[1]&&'N'!==t[1])&&(function(e, t, n, r) {
        if (null==t||function(e, t, n, r) {
          if (null!==n&&0===n.type) return !1; switch (typeof t) {
            case 'function': case 'symbol': return !0; case 'boolean': return !r&&(null!==n?!n.acceptsBooleans:'data-'!==(e=e.toLowerCase().slice(0, 5))&&'aria-'!==e); default: return !1;
          }
        }(e, t, n, r)) return !0; if (r) return !1; if (null!==n) {
          switch (n.type) {
            case 3: return !t; case 4: return !1===t; case 5: return isNaN(t); case 6: return isNaN(t)||1>t;
          }
        } return !1;
      }(t, n, o, r)&&(n=null), r||null===o?function(e) {
        return !!d.call(h, e)||!d.call(p, e)&&(f.test(e)?h[e]=!0:(p[e]=!0, !1));
      }(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t, ''+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&'':n:(t=o.attributeName, r=o.attributeNamespace, null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?'':''+n, r?e.setAttributeNS(r, t, n):e.setAttribute(t, n))));
    }'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach((function(e) {
      const t=e.replace(y, v); g[t]=new m(t, 1, !1, e, null, !1, !1);
    })), 'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach((function(e) {
      const t=e.replace(y, v); g[t]=new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    })), ['xml:base', 'xml:lang', 'xml:space'].forEach((function(e) {
      const t=e.replace(y, v); g[t]=new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    })), ['tabIndex', 'crossOrigin'].forEach((function(e) {
      g[e]=new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
    })), g.xlinkHref=new m('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1), ['src', 'href', 'action', 'formAction'].forEach((function(e) {
      g[e]=new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
    })); const w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; const S=Symbol.for('react.element'); const x=Symbol.for('react.portal'); const E=Symbol.for('react.fragment'); const _=Symbol.for('react.strict_mode'); const k=Symbol.for('react.profiler'); const C=Symbol.for('react.provider'); const O=Symbol.for('react.context'); const N=Symbol.for('react.forward_ref'); const M=Symbol.for('react.suspense'); const P=Symbol.for('react.suspense_list'); const T=Symbol.for('react.memo'); const R=Symbol.for('react.lazy'); Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode'); const A=Symbol.for('react.offscreen'); Symbol.for('react.legacy_hidden'), Symbol.for('react.cache'), Symbol.for('react.tracing_marker'); const I=Symbol.iterator; function z(e) {
      return null===e||'object'!=typeof e?null:'function'==typeof(e=I&&e[I]||e['@@iterator'])?e:null;
    } let D; const L=Object.assign; function j(e) {
      if (void 0===D) {
        try {
          throw Error();
        } catch (e) {
          const t=e.stack.trim().match(/\n( *(at )?)/); D=t&&t[1]||'';
        }
      } return '\n'+D+e;
    } let F=!1; function q(e, t) {
      if (!e||F) return ''; F=!0; const n=Error.prepareStackTrace; Error.prepareStackTrace=void 0; try {
        if (t) {
          if (t=function() {
            throw Error();
          }, Object.defineProperty(t.prototype, 'props', {set: function() {
            throw Error();
          }}), 'object'==typeof Reflect&&Reflect.construct) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r=e;
            }Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r=e;
            }e.call(t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r=e;
          }e();
        }
      } catch (t) {
        if (t&&r&&'string'==typeof t.stack) {
          for (var o=t.stack.split('\n'), a=r.stack.split('\n'), i=o.length-1, l=a.length-1; 1<=i&&0<=l&&o[i]!==a[l];)l--; for (;1<=i&&0<=l; i--, l--) {
            if (o[i]!==a[l]) {
              if (1!==i||1!==l) {
                do {
                  if (i--, 0>--l||o[i]!==a[l]) {
                    let u='\n'+o[i].replace(' at new ', ' at '); return e.displayName&&u.includes('<anonymous>')&&(u=u.replace('<anonymous>', e.displayName)), u;
                  }
                } while (1<=i&&0<=l);
              } break;
            }
          }
        }
      } finally {
        F=!1, Error.prepareStackTrace=n;
      } return (e=e?e.displayName||e.name:'')?j(e):'';
    } function U(e) {
      switch (e.tag) {
        case 5: return j(e.type); case 16: return j('Lazy'); case 13: return j('Suspense'); case 19: return j('SuspenseList'); case 0: case 2: case 15: return q(e.type, !1); case 11: return q(e.type.render, !1); case 1: return q(e.type, !0); default: return '';
      }
    } function B(e) {
      if (null==e) return null; if ('function'==typeof e) return e.displayName||e.name||null; if ('string'==typeof e) return e; switch (e) {
        case E: return 'Fragment'; case x: return 'Portal'; case k: return 'Profiler'; case _: return 'StrictMode'; case M: return 'Suspense'; case P: return 'SuspenseList';
      } if ('object'==typeof e) {
        switch (e.$$typeof) {
          case O: return (e.displayName||'Context')+'.Consumer'; case C: return (e._context.displayName||'Context')+'.Provider'; case N: var t=e.render; return (e=e.displayName)||(e=''!==(e=t.displayName||t.name||'')?'ForwardRef('+e+')':'ForwardRef'), e; case T: return null!==(t=e.displayName||null)?t:B(e.type)||'Memo'; case R: t=e._payload, e=e._init; try {
            return B(e(t));
          } catch (e) {}
        }
      } return null;
    } function $(e) {
      const t=e.type; switch (e.tag) {
        case 24: return 'Cache'; case 9: return (t.displayName||'Context')+'.Consumer'; case 10: return (t._context.displayName||'Context')+'.Provider'; case 18: return 'DehydratedFragment'; case 11: return e=(e=t.render).displayName||e.name||'', t.displayName||(''!==e?'ForwardRef('+e+')':'ForwardRef'); case 7: return 'Fragment'; case 5: return t; case 4: return 'Portal'; case 3: return 'Root'; case 6: return 'Text'; case 16: return B(t); case 8: return t===_?'StrictMode':'Mode'; case 22: return 'Offscreen'; case 12: return 'Profiler'; case 21: return 'Scope'; case 13: return 'Suspense'; case 19: return 'SuspenseList'; case 25: return 'TracingMarker'; case 1: case 0: case 17: case 2: case 14: case 15: if ('function'==typeof t) return t.displayName||t.name||null; if ('string'==typeof t) return t;
      } return null;
    } function H(e) {
      switch (typeof e) {
        case 'boolean': case 'number': case 'string': case 'undefined': case 'object': return e; default: return '';
      }
    } function W(e) {
      const t=e.type; return (e=e.nodeName)&&'input'===e.toLowerCase()&&('checkbox'===t||'radio'===t);
    } function V(e) {
      e._valueTracker||(e._valueTracker=function(e) {
        const t=W(e)?'checked':'value'; const n=Object.getOwnPropertyDescriptor(e.constructor.prototype, t); let r=''+e[t]; if (!e.hasOwnProperty(t)&&void 0!==n&&'function'==typeof n.get&&'function'==typeof n.set) {
          const o=n.get; const a=n.set; return Object.defineProperty(e, t, {configurable: !0, get: function() {
            return o.call(this);
          }, set: function(e) {
            r=''+e, a.call(this, e);
          }}), Object.defineProperty(e, t, {enumerable: n.enumerable}), {getValue: function() {
            return r;
          }, setValue: function(e) {
            r=''+e;
          }, stopTracking: function() {
            e._valueTracker=null, delete e[t];
          }};
        }
      }(e));
    } function K(e) {
      if (!e) return !1; const t=e._valueTracker; if (!t) return !0; const n=t.getValue(); let r=''; return e&&(r=W(e)?e.checked?'true':'false':e.value), (e=r)!==n&&(t.setValue(e), !0);
    } function Q(e) {
      if (void 0===(e=e||('undefined'!=typeof document?document:void 0))) return null; try {
        return e.activeElement||e.body;
      } catch (t) {
        return e.body;
      }
    } function Y(e, t) {
      const n=t.checked; return L({}, t, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null!=n?n:e._wrapperState.initialChecked});
    } function X(e, t) {
      let n=null==t.defaultValue?'':t.defaultValue; const r=null!=t.checked?t.checked:t.defaultChecked; n=H(null!=t.value?t.value:n), e._wrapperState={initialChecked: r, initialValue: n, controlled: 'checkbox'===t.type||'radio'===t.type?null!=t.checked:null!=t.value};
    } function G(e, t) {
      null!=(t=t.checked)&&b(e, 'checked', t, !1);
    } function Z(e, t) {
      G(e, t); const n=H(t.value); const r=t.type; if (null!=n)'number'===r?(0===n&&''===e.value||e.value!=n)&&(e.value=''+n):e.value!==''+n&&(e.value=''+n); else if ('submit'===r||'reset'===r) return void e.removeAttribute('value'); t.hasOwnProperty('value')?ee(e, t.type, n):t.hasOwnProperty('defaultValue')&&ee(e, t.type, H(t.defaultValue)), null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked);
    } function J(e, t, n) {
      if (t.hasOwnProperty('value')||t.hasOwnProperty('defaultValue')) {
        const r=t.type; if (!('submit'!==r&&'reset'!==r||void 0!==t.value&&null!==t.value)) return; t=''+e._wrapperState.initialValue, n||t===e.value||(e.value=t), e.defaultValue=t;
      }''!==(n=e.name)&&(e.name=''), e.defaultChecked=!!e._wrapperState.initialChecked, ''!==n&&(e.name=n);
    } function ee(e, t, n) {
      'number'===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=''+e._wrapperState.initialValue:e.defaultValue!==''+n&&(e.defaultValue=''+n));
    } const te=Array.isArray; function ne(e, t, n, r) {
      if (e=e.options, t) {
        t={}; for (var o=0; o<n.length; o++)t['$'+n[o]]=!0; for (n=0; n<e.length; n++)o=t.hasOwnProperty('$'+e[n].value), e[n].selected!==o&&(e[n].selected=o), o&&r&&(e[n].defaultSelected=!0);
      } else {
        for (n=''+H(n), t=null, o=0; o<e.length; o++) {
          if (e[o].value===n) return e[o].selected=!0, void(r&&(e[o].defaultSelected=!0)); null!==t||e[o].disabled||(t=e[o]);
        }null!==t&&(t.selected=!0);
      }
    } function re(e, t) {
      if (null!=t.dangerouslySetInnerHTML) throw Error(a(91)); return L({}, t, {value: void 0, defaultValue: void 0, children: ''+e._wrapperState.initialValue});
    } function oe(e, t) {
      let n=t.value; if (null==n) {
        if (n=t.children, t=t.defaultValue, null!=n) {
          if (null!=t) throw Error(a(92)); if (te(n)) {
            if (1<n.length) throw Error(a(93)); n=n[0];
          }t=n;
        }null==t&&(t=''), n=t;
      }e._wrapperState={initialValue: H(n)};
    } function ae(e, t) {
      let n=H(t.value); const r=H(t.defaultValue); null!=n&&((n=''+n)!==e.value&&(e.value=n), null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)), null!=r&&(e.defaultValue=''+r);
    } function ie(e) {
      const t=e.textContent; t===e._wrapperState.initialValue&&''!==t&&null!==t&&(e.value=t);
    } function le(e) {
      switch (e) {
        case 'svg': return 'http://www.w3.org/2000/svg'; case 'math': return 'http://www.w3.org/1998/Math/MathML'; default: return 'http://www.w3.org/1999/xhtml';
      }
    } function ue(e, t) {
      return null==e||'http://www.w3.org/1999/xhtml'===e?le(t):'http://www.w3.org/2000/svg'===e&&'foreignObject'===t?'http://www.w3.org/1999/xhtml':e;
    } let se; let ce; const de=(ce=function(e, t) {
      if ('http://www.w3.org/2000/svg'!==e.namespaceURI||'innerHTML'in e)e.innerHTML=t; else {
        for ((se=se||document.createElement('div')).innerHTML='<svg>'+t.valueOf().toString()+'</svg>', t=se.firstChild; e.firstChild;)e.removeChild(e.firstChild); for (;t.firstChild;)e.appendChild(t.firstChild);
      }
    }, 'undefined'!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e, t, n, r) {
      MSApp.execUnsafeLocalFunction((function() {
        return ce(e, t);
      }));
    }:ce); function fe(e, t) {
      if (t) {
        const n=e.firstChild; if (n&&n===e.lastChild&&3===n.nodeType) return void(n.nodeValue=t);
      }e.textContent=t;
    } const pe={animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0}; const he=['Webkit', 'ms', 'Moz', 'O']; function me(e, t, n) {
      return null==t||'boolean'==typeof t||''===t?'':n||'number'!=typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(''+t).trim():t+'px';
    } function ge(e, t) {
      for (let n in e=e.style, t) {
        if (t.hasOwnProperty(n)) {
          const r=0===n.indexOf('--'); const o=me(n, t[n], r); 'float'===n&&(n='cssFloat'), r?e.setProperty(n, o):e[n]=o;
        }
      }
    }Object.keys(pe).forEach((function(e) {
      he.forEach((function(t) {
        t=t+e.charAt(0).toUpperCase()+e.substring(1), pe[t]=pe[e];
      }));
    })); const ye=L({menuitem: !0}, {area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0}); function ve(e, t) {
      if (t) {
        if (ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)) throw Error(a(137, e)); if (null!=t.dangerouslySetInnerHTML) {
          if (null!=t.children) throw Error(a(60)); if ('object'!=typeof t.dangerouslySetInnerHTML||!('__html'in t.dangerouslySetInnerHTML)) throw Error(a(61));
        } if (null!=t.style&&'object'!=typeof t.style) throw Error(a(62));
      }
    } function be(e, t) {
      if (-1===e.indexOf('-')) return 'string'==typeof t.is; switch (e) {
        case 'annotation-xml': case 'color-profile': case 'font-face': case 'font-face-src': case 'font-face-uri': case 'font-face-format': case 'font-face-name': case 'missing-glyph': return !1; default: return !0;
      }
    } let we=null; function Se(e) {
      return (e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement), 3===e.nodeType?e.parentNode:e;
    } let xe=null; let Ee=null; let _e=null; function ke(e) {
      if (e=wo(e)) {
        if ('function'!=typeof xe) throw Error(a(280)); let t=e.stateNode; t&&(t=xo(t), xe(e.stateNode, e.type, t));
      }
    } function Ce(e) {
Ee?_e?_e.push(e):_e=[e]:Ee=e;
    } function Oe() {
      if (Ee) {
        let e=Ee; const t=_e; if (_e=Ee=null, ke(e), t) for (e=0; e<t.length; e++)ke(t[e]);
      }
    } function Ne(e, t) {
      return e(t);
    } function Me() {} let Pe=!1; function Te(e, t, n) {
      if (Pe) return e(t, n); Pe=!0; try {
        return Ne(e, t, n);
      } finally {
        Pe=!1, (null!==Ee||null!==_e)&&(Me(), Oe());
      }
    } function Re(e, t) {
      let n=e.stateNode; if (null===n) return null; let r=xo(n); if (null===r) return null; n=r[t]; e:switch (t) {
        case 'onClick': case 'onClickCapture': case 'onDoubleClick': case 'onDoubleClickCapture': case 'onMouseDown': case 'onMouseDownCapture': case 'onMouseMove': case 'onMouseMoveCapture': case 'onMouseUp': case 'onMouseUpCapture': case 'onMouseEnter': (r=!r.disabled)||(r=!('button'===(e=e.type)||'input'===e||'select'===e||'textarea'===e)), e=!r; break e; default: e=!1;
      } if (e) return null; if (n&&'function'!=typeof n) throw Error(a(231, t, typeof n)); return n;
    } let Ae=!1; if (c) {
      try {
        const Ie={}; Object.defineProperty(Ie, 'passive', {get: function() {
          Ae=!0;
        }}), window.addEventListener('test', Ie, Ie), window.removeEventListener('test', Ie, Ie);
      } catch (ce) {
        Ae=!1;
      }
    } function ze(e, t, n, r, o, a, i, l, u) {
      const s=Array.prototype.slice.call(arguments, 3); try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    } let De=!1; let Le=null; let je=!1; let Fe=null; const qe={onError: function(e) {
      De=!0, Le=e;
    }}; function Ue(e, t, n, r, o, a, i, l, u) {
      De=!1, Le=null, ze.apply(qe, arguments);
    } function Be(e) {
      let t=e; let n=e; if (e.alternate) for (;t.return;)t=t.return; else {
        e=t; do {
          0!=(4098&(t=e).flags)&&(n=t.return), e=t.return;
        } while (e);
      } return 3===t.tag?n:null;
    } function $e(e) {
      if (13===e.tag) {
        let t=e.memoizedState; if (null===t&&null!==(e=e.alternate)&&(t=e.memoizedState), null!==t) return t.dehydrated;
      } return null;
    } function He(e) {
      if (Be(e)!==e) throw Error(a(188));
    } function We(e) {
      return null!==(e=function(e) {
        let t=e.alternate; if (!t) {
          if (null===(t=Be(e))) throw Error(a(188)); return t!==e?null:e;
        } for (var n=e, r=t; ;) {
          const o=n.return; if (null===o) break; let i=o.alternate; if (null===i) {
            if (null!==(r=o.return)) {
              n=r; continue;
            } break;
          } if (o.child===i.child) {
            for (i=o.child; i;) {
              if (i===n) return He(o), e; if (i===r) return He(o), t; i=i.sibling;
            } throw Error(a(188));
          } if (n.return!==r.return)n=o, r=i; else {
            for (var l=!1, u=o.child; u;) {
              if (u===n) {
                l=!0, n=o, r=i; break;
              } if (u===r) {
                l=!0, r=o, n=i; break;
              }u=u.sibling;
            } if (!l) {
              for (u=i.child; u;) {
                if (u===n) {
                  l=!0, n=i, r=o; break;
                } if (u===r) {
                  l=!0, r=i, n=o; break;
                }u=u.sibling;
              } if (!l) throw Error(a(189));
            }
          } if (n.alternate!==r) throw Error(a(190));
        } if (3!==n.tag) throw Error(a(188)); return n.stateNode.current===n?e:t;
      }(e))?Ve(e):null;
    } function Ve(e) {
      if (5===e.tag||6===e.tag) return e; for (e=e.child; null!==e;) {
        const t=Ve(e); if (null!==t) return t; e=e.sibling;
      } return null;
    } const Ke=o.unstable_scheduleCallback; const Qe=o.unstable_cancelCallback; const Ye=o.unstable_shouldYield; const Xe=o.unstable_requestPaint; const Ge=o.unstable_now; const Ze=o.unstable_getCurrentPriorityLevel; const Je=o.unstable_ImmediatePriority; const et=o.unstable_UserBlockingPriority; const tt=o.unstable_NormalPriority; const nt=o.unstable_LowPriority; const rt=o.unstable_IdlePriority; let ot=null; let at=null; const it=Math.clz32?Math.clz32:function(e) {
      return 0===(e>>>=0)?32:31-(lt(e)/ut|0)|0;
    }; var lt=Math.log; var ut=Math.LN2; let st=64; let ct=4194304; function dt(e) {
      switch (e&-e) {
        case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return 4194240&e; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return 130023424&e; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 1073741824; default: return e;
      }
    } function ft(e, t) {
      let n=e.pendingLanes; if (0===n) return 0; let r=0; let o=e.suspendedLanes; let a=e.pingedLanes; let i=268435455&n; if (0!==i) {
        const l=i&~o; 0!==l?r=dt(l):0!=(a&=i)&&(r=dt(a));
      } else 0!=(i=n&~o)?r=dt(i):0!==a&&(r=dt(a)); if (0===r) return 0; if (0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!=(4194240&a))) return t; if (0!=(4&r)&&(r|=16&n), 0!==(t=e.entangledLanes)) for (e=e.entanglements, t&=r; 0<t;)o=1<<(n=31-it(t)), r|=e[n], t&=~o; return r;
    } function pt(e, t) {
      switch (e) {
        case 1: case 2: case 4: return t+250; case 8: case 16: case 32: case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t+5e3; default: return -1;
      }
    } function ht(e) {
      return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0;
    } function mt() {
      const e=st; return 0==(4194240&(st<<=1))&&(st=64), e;
    } function gt(e) {
      for (var t=[], n=0; 31>n; n++)t.push(e); return t;
    } function yt(e, t, n) {
      e.pendingLanes|=t, 536870912!==t&&(e.suspendedLanes=0, e.pingedLanes=0), (e=e.eventTimes)[t=31-it(t)]=n;
    } function vt(e, t) {
      let n=e.entangledLanes|=t; for (e=e.entanglements; n;) {
        const r=31-it(n); const o=1<<r; o&t|e[r]&t&&(e[r]|=t), n&=~o;
      }
    } let bt=0; function wt(e) {
      return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1;
    } let St; let xt; let Et; let _t; let kt; let Ct=!1; const Ot=[]; let Nt=null; let Mt=null; let Pt=null; const Tt=new Map; const Rt=new Map; const At=[]; const It='mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(' '); function zt(e, t) {
      switch (e) {
        case 'focusin': case 'focusout': Nt=null; break; case 'dragenter': case 'dragleave': Mt=null; break; case 'mouseover': case 'mouseout': Pt=null; break; case 'pointerover': case 'pointerout': Tt.delete(t.pointerId); break; case 'gotpointercapture': case 'lostpointercapture': Rt.delete(t.pointerId);
      }
    } function Dt(e, t, n, r, o, a) {
      return null===e||e.nativeEvent!==a?(e={blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [o]}, null!==t&&null!==(t=wo(t))&&xt(t), e):(e.eventSystemFlags|=r, t=e.targetContainers, null!==o&&-1===t.indexOf(o)&&t.push(o), e);
    } function Lt(e) {
      let t=bo(e.target); if (null!==t) {
        const n=Be(t); if (null!==n) {
          if (13===(t=n.tag)) {
            if (null!==(t=$e(n))) {
              return e.blockedOn=t, void kt(e.priority, (function() {
                Et(n);
              }));
            }
          } else if (3===t&&n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null);
        }
      }e.blockedOn=null;
    } function jt(e) {
      if (null!==e.blockedOn) return !1; for (let t=e.targetContainers; 0<t.length;) {
        let n=Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (null!==n) return null!==(t=wo(n))&&xt(t), e.blockedOn=n, !1; const r=new(n=e.nativeEvent).constructor(n.type, n); we=r, n.target.dispatchEvent(r), we=null, t.shift();
      } return !0;
    } function Ft(e, t, n) {
      jt(e)&&n.delete(t);
    } function qt() {
      Ct=!1, null!==Nt&&jt(Nt)&&(Nt=null), null!==Mt&&jt(Mt)&&(Mt=null), null!==Pt&&jt(Pt)&&(Pt=null), Tt.forEach(Ft), Rt.forEach(Ft);
    } function Ut(e, t) {
      e.blockedOn===t&&(e.blockedOn=null, Ct||(Ct=!0, o.unstable_scheduleCallback(o.unstable_NormalPriority, qt)));
    } function Bt(e) {
      function t(t) {
        return Ut(t, e);
      } if (0<Ot.length) {
        Ut(Ot[0], e); for (var n=1; n<Ot.length; n++) {
          var r=Ot[n]; r.blockedOn===e&&(r.blockedOn=null);
        }
      } for (null!==Nt&&Ut(Nt, e), null!==Mt&&Ut(Mt, e), null!==Pt&&Ut(Pt, e), Tt.forEach(t), Rt.forEach(t), n=0; n<At.length; n++)(r=At[n]).blockedOn===e&&(r.blockedOn=null); for (;0<At.length&&null===(n=At[0]).blockedOn;)Lt(n), null===n.blockedOn&&At.shift();
    } const $t=w.ReactCurrentBatchConfig; let Ht=!0; function Wt(e, t, n, r) {
      const o=bt; const a=$t.transition; $t.transition=null; try {
        bt=1, Kt(e, t, n, r);
      } finally {
        bt=o, $t.transition=a;
      }
    } function Vt(e, t, n, r) {
      const o=bt; const a=$t.transition; $t.transition=null; try {
        bt=4, Kt(e, t, n, r);
      } finally {
        bt=o, $t.transition=a;
      }
    } function Kt(e, t, n, r) {
      if (Ht) {
        let o=Yt(e, t, n, r); if (null===o)Hr(e, t, r, Qt, n), zt(e, r); else if (function(e, t, n, r, o) {
          switch (t) {
            case 'focusin': return Nt=Dt(Nt, e, t, n, r, o), !0; case 'dragenter': return Mt=Dt(Mt, e, t, n, r, o), !0; case 'mouseover': return Pt=Dt(Pt, e, t, n, r, o), !0; case 'pointerover': var a=o.pointerId; return Tt.set(a, Dt(Tt.get(a)||null, e, t, n, r, o)), !0; case 'gotpointercapture': return a=o.pointerId, Rt.set(a, Dt(Rt.get(a)||null, e, t, n, r, o)), !0;
          } return !1;
        }(o, e, t, n, r))r.stopPropagation(); else if (zt(e, r), 4&t&&-1<It.indexOf(e)) {
          for (;null!==o;) {
            let a=wo(o); if (null!==a&&St(a), null===(a=Yt(e, t, n, r))&&Hr(e, t, r, Qt, n), a===o) break; o=a;
          }null!==o&&r.stopPropagation();
        } else Hr(e, t, r, null, n);
      }
    } var Qt=null; function Yt(e, t, n, r) {
      if (Qt=null, null!==(e=bo(e=Se(r)))) {
        if (null===(t=Be(e)))e=null; else if (13===(n=t.tag)) {
          if (null!==(e=$e(t))) return e; e=null;
        } else if (3===n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3===t.tag?t.stateNode.containerInfo:null; e=null;
        } else t!==e&&(e=null);
      } return Qt=e, null;
    } function Xt(e) {
      switch (e) {
        case 'cancel': case 'click': case 'close': case 'contextmenu': case 'copy': case 'cut': case 'auxclick': case 'dblclick': case 'dragend': case 'dragstart': case 'drop': case 'focusin': case 'focusout': case 'input': case 'invalid': case 'keydown': case 'keypress': case 'keyup': case 'mousedown': case 'mouseup': case 'paste': case 'pause': case 'play': case 'pointercancel': case 'pointerdown': case 'pointerup': case 'ratechange': case 'reset': case 'resize': case 'seeked': case 'submit': case 'touchcancel': case 'touchend': case 'touchstart': case 'volumechange': case 'change': case 'selectionchange': case 'textInput': case 'compositionstart': case 'compositionend': case 'compositionupdate': case 'beforeblur': case 'afterblur': case 'beforeinput': case 'blur': case 'fullscreenchange': case 'focus': case 'hashchange': case 'popstate': case 'select': case 'selectstart': return 1; case 'drag': case 'dragenter': case 'dragexit': case 'dragleave': case 'dragover': case 'mousemove': case 'mouseout': case 'mouseover': case 'pointermove': case 'pointerout': case 'pointerover': case 'scroll': case 'toggle': case 'touchmove': case 'wheel': case 'mouseenter': case 'mouseleave': case 'pointerenter': case 'pointerleave': return 4; case 'message': switch (Ze()) {
          case Je: return 1; case et: return 4; case tt: case nt: return 16; case rt: return 536870912; default: return 16;
        } default: return 16;
      }
    } let Gt=null; let Zt=null; let Jt=null; function en() {
      if (Jt) return Jt; let e; let t; const n=Zt; const r=n.length; const o='value'in Gt?Gt.value:Gt.textContent; const a=o.length; for (e=0; e<r&&n[e]===o[e]; e++);const i=r-e; for (t=1; t<=i&&n[r-t]===o[a-t]; t++);return Jt=o.slice(e, 1<t?1-t:void 0);
    } function tn(e) {
      const t=e.keyCode; return 'charCode'in e?0===(e=e.charCode)&&13===t&&(e=13):e=t, 10===e&&(e=13), 32<=e||13===e?e:0;
    } function nn() {
      return !0;
    } function rn() {
      return !1;
    } function on(e) {
      function t(t, n, r, o, a) {
        for (const i in this._reactName=t, this._targetInst=r, this.type=n, this.nativeEvent=o, this.target=a, this.currentTarget=null, e)e.hasOwnProperty(i)&&(t=e[i], this[i]=t?t(o):o[i]); return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn, this.isPropagationStopped=rn, this;
      } return L(t.prototype, {preventDefault: function() {
        this.defaultPrevented=!0; const e=this.nativeEvent; e&&(e.preventDefault?e.preventDefault():'unknown'!=typeof e.returnValue&&(e.returnValue=!1), this.isDefaultPrevented=nn);
      }, stopPropagation: function() {
        const e=this.nativeEvent; e&&(e.stopPropagation?e.stopPropagation():'unknown'!=typeof e.cancelBubble&&(e.cancelBubble=!0), this.isPropagationStopped=nn);
      }, persist: function() {}, isPersistent: nn}), t;
    } let an; let ln; let un; const sn={eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp||Date.now();
    }, defaultPrevented: 0, isTrusted: 0}; const cn=on(sn); const dn=L({}, sn, {view: 0, detail: 0}); const fn=on(dn); const pn=L({}, dn, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kn, button: 0, buttons: 0, relatedTarget: function(e) {
      return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget;
    }, movementX: function(e) {
      return 'movementX'in e?e.movementX:(e!==un&&(un&&'mousemove'===e.type?(an=e.screenX-un.screenX, ln=e.screenY-un.screenY):ln=an=0, un=e), an);
    }, movementY: function(e) {
      return 'movementY'in e?e.movementY:ln;
    }}); const hn=on(pn); const mn=on(L({}, pn, {dataTransfer: 0})); const gn=on(L({}, dn, {relatedTarget: 0})); const yn=on(L({}, sn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})); const vn=L({}, sn, {clipboardData: function(e) {
      return 'clipboardData'in e?e.clipboardData:window.clipboardData;
    }}); const bn=on(vn); const wn=on(L({}, sn, {data: 0})); const Sn={Esc: 'Escape', Spacebar: ' ', Left: 'ArrowLeft', Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Del: 'Delete', Win: 'OS', Menu: 'ContextMenu', Apps: 'ContextMenu', Scroll: 'ScrollLock', MozPrintableKey: 'Unidentified'}; const xn={8: 'Backspace', 9: 'Tab', 12: 'Clear', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Escape', 32: ' ', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'ScrollLock', 224: 'Meta'}; const En={Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey'}; function _n(e) {
      const t=this.nativeEvent; return t.getModifierState?t.getModifierState(e):!!(e=En[e])&&!!t[e];
    } function kn() {
      return _n;
    } const Cn=L({}, dn, {key: function(e) {
      if (e.key) {
        const t=Sn[e.key]||e.key; if ('Unidentified'!==t) return t;
      } return 'keypress'===e.type?13===(e=tn(e))?'Enter':String.fromCharCode(e):'keydown'===e.type||'keyup'===e.type?xn[e.keyCode]||'Unidentified':'';
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kn, charCode: function(e) {
      return 'keypress'===e.type?tn(e):0;
    }, keyCode: function(e) {
      return 'keydown'===e.type||'keyup'===e.type?e.keyCode:0;
    }, which: function(e) {
      return 'keypress'===e.type?tn(e):'keydown'===e.type||'keyup'===e.type?e.keyCode:0;
    }}); const On=on(Cn); const Nn=on(L({}, pn, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0})); const Mn=on(L({}, dn, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kn})); const Pn=on(L({}, sn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})); const Tn=L({}, pn, {deltaX: function(e) {
      return 'deltaX'in e?e.deltaX:'wheelDeltaX'in e?-e.wheelDeltaX:0;
    }, deltaY: function(e) {
      return 'deltaY'in e?e.deltaY:'wheelDeltaY'in e?-e.wheelDeltaY:'wheelDelta'in e?-e.wheelDelta:0;
    }, deltaZ: 0, deltaMode: 0}); const Rn=on(Tn); const An=[9, 13, 27, 32]; const In=c&&'CompositionEvent'in window; let zn=null; c&&'documentMode'in document&&(zn=document.documentMode); const Dn=c&&'TextEvent'in window&&!zn; const Ln=c&&(!In||zn&&8<zn&&11>=zn); const jn=String.fromCharCode(32); let Fn=!1; function qn(e, t) {
      switch (e) {
        case 'keyup': return -1!==An.indexOf(t.keyCode); case 'keydown': return 229!==t.keyCode; case 'keypress': case 'mousedown': case 'focusout': return !0; default: return !1;
      }
    } function Un(e) {
      return 'object'==typeof(e=e.detail)&&'data'in e?e.data:null;
    } let Bn=!1; const $n={'color': !0, 'date': !0, 'datetime': !0, 'datetime-local': !0, 'email': !0, 'month': !0, 'number': !0, 'password': !0, 'range': !0, 'search': !0, 'tel': !0, 'text': !0, 'time': !0, 'url': !0, 'week': !0}; function Hn(e) {
      const t=e&&e.nodeName&&e.nodeName.toLowerCase(); return 'input'===t?!!$n[e.type]:'textarea'===t;
    } function Wn(e, t, n, r) {
      Ce(r), 0<(t=Vr(t, 'onChange')).length&&(n=new cn('onChange', 'change', null, n, r), e.push({event: n, listeners: t}));
    } let Vn=null; let Kn=null; function Qn(e) {
      jr(e, 0);
    } function Yn(e) {
      if (K(So(e))) return e;
    } function Xn(e, t) {
      if ('change'===e) return t;
    } let Gn=!1; if (c) {
      let Zn; if (c) {
        let Jn='oninput'in document; if (!Jn) {
          const er=document.createElement('div'); er.setAttribute('oninput', 'return;'), Jn='function'==typeof er.oninput;
        }Zn=Jn;
      } else Zn=!1; Gn=Zn&&(!document.documentMode||9<document.documentMode);
    } function tr() {
      Vn&&(Vn.detachEvent('onpropertychange', nr), Kn=Vn=null);
    } function nr(e) {
      if ('value'===e.propertyName&&Yn(Kn)) {
        const t=[]; Wn(t, Kn, e, Se(e)), Te(Qn, t);
      }
    } function rr(e, t, n) {
'focusin'===e?(tr(), Kn=n, (Vn=t).attachEvent('onpropertychange', nr)):'focusout'===e&&tr();
    } function or(e) {
      if ('selectionchange'===e||'keyup'===e||'keydown'===e) return Yn(Kn);
    } function ar(e, t) {
      if ('click'===e) return Yn(t);
    } function ir(e, t) {
      if ('input'===e||'change'===e) return Yn(t);
    } const lr='function'==typeof Object.is?Object.is:function(e, t) {
      return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t;
    }; function ur(e, t) {
      if (lr(e, t)) return !0; if ('object'!=typeof e||null===e||'object'!=typeof t||null===t) return !1; const n=Object.keys(e); let r=Object.keys(t); if (n.length!==r.length) return !1; for (r=0; r<n.length; r++) {
        const o=n[r]; if (!d.call(t, o)||!lr(e[o], t[o])) return !1;
      } return !0;
    } function sr(e) {
      for (;e&&e.firstChild;)e=e.firstChild; return e;
    } function cr(e, t) {
      let n; let r=sr(e); for (e=0; r;) {
        if (3===r.nodeType) {
          if (n=e+r.textContent.length, e<=t&&n>=t) return {node: r, offset: t-e}; e=n;
        }e: {
          for (;r;) {
            if (r.nextSibling) {
              r=r.nextSibling; break e;
            }r=r.parentNode;
          }r=void 0;
        }r=sr(r);
      }
    } function dr(e, t) {
      return !(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e, t.parentNode):'contains'in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))));
    } function fr() {
      for (var e=window, t=Q(); t instanceof e.HTMLIFrameElement;) {
        try {
          var n='string'==typeof t.contentWindow.location.href;
        } catch (e) {
          n=!1;
        } if (!n) break; t=Q((e=t.contentWindow).document);
      } return t;
    } function pr(e) {
      const t=e&&e.nodeName&&e.nodeName.toLowerCase(); return t&&('input'===t&&('text'===e.type||'search'===e.type||'tel'===e.type||'url'===e.type||'password'===e.type)||'textarea'===t||'true'===e.contentEditable);
    } function hr(e) {
      let t=fr(); let n=e.focusedElem; let r=e.selectionRange; if (t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement, n)) {
        if (null!==r&&pr(n)) {
          if (t=r.start, void 0===(e=r.end)&&(e=t), 'selectionStart'in n)n.selectionStart=t, n.selectionEnd=Math.min(e, n.value.length); else if ((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection) {
            e=e.getSelection(); let o=n.textContent.length; let a=Math.min(r.start, o); r=void 0===r.end?a:Math.min(r.end, o), !e.extend&&a>r&&(o=r, r=a, a=o), o=cr(n, a); const i=cr(n, r); o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a>r?(e.addRange(t), e.extend(i.node, i.offset)):(t.setEnd(i.node, i.offset), e.addRange(t)));
          }
        } for (t=[], e=n; e=e.parentNode;)1===e.nodeType&&t.push({element: e, left: e.scrollLeft, top: e.scrollTop}); for ('function'==typeof n.focus&&n.focus(), n=0; n<t.length; n++)(e=t[n]).element.scrollLeft=e.left, e.element.scrollTop=e.top;
      }
    } const mr=c&&'documentMode'in document&&11>=document.documentMode; let gr=null; let yr=null; let vr=null; let br=!1; function wr(e, t, n) {
      let r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument; br||null==gr||gr!==Q(r)||(r='selectionStart'in(r=gr)&&pr(r)?{start: r.selectionStart, end: r.selectionEnd}:{anchorNode: (r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset}, vr&&ur(vr, r)||(vr=r, 0<(r=Vr(yr, 'onSelect')).length&&(t=new cn('onSelect', 'select', null, t, n), e.push({event: t, listeners: r}), t.target=gr)));
    } function Sr(e, t) {
      const n={}; return n[e.toLowerCase()]=t.toLowerCase(), n['Webkit'+e]='webkit'+t, n['Moz'+e]='moz'+t, n;
    } const xr={animationend: Sr('Animation', 'AnimationEnd'), animationiteration: Sr('Animation', 'AnimationIteration'), animationstart: Sr('Animation', 'AnimationStart'), transitionend: Sr('Transition', 'TransitionEnd')}; const Er={}; let _r={}; function kr(e) {
      if (Er[e]) return Er[e]; if (!xr[e]) return e; let t; const n=xr[e]; for (t in n) if (n.hasOwnProperty(t)&&t in _r) return Er[e]=n[t]; return e;
    }c&&(_r=document.createElement('div').style, 'AnimationEvent'in window||(delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), 'TransitionEvent'in window||delete xr.transitionend.transition); const Cr=kr('animationend'); const Or=kr('animationiteration'); const Nr=kr('animationstart'); const Mr=kr('transitionend'); const Pr=new Map; const Tr='abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(' '); function Rr(e, t) {
      Pr.set(e, t), u(t, [e]);
    } for (let Ar=0; Ar<Tr.length; Ar++) {
      const Ir=Tr[Ar]; Rr(Ir.toLowerCase(), 'on'+(Ir[0].toUpperCase()+Ir.slice(1)));
    }Rr(Cr, 'onAnimationEnd'), Rr(Or, 'onAnimationIteration'), Rr(Nr, 'onAnimationStart'), Rr('dblclick', 'onDoubleClick'), Rr('focusin', 'onFocus'), Rr('focusout', 'onBlur'), Rr(Mr, 'onTransitionEnd'), s('onMouseEnter', ['mouseout', 'mouseover']), s('onMouseLeave', ['mouseout', 'mouseover']), s('onPointerEnter', ['pointerout', 'pointerover']), s('onPointerLeave', ['pointerout', 'pointerover']), u('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')), u('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')), u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']), u('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')), u('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')), u('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')); const zr='abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '); const Dr=new Set('cancel close invalid load scroll toggle'.split(' ').concat(zr)); function Lr(e, t, n) {
      const r=e.type||'unknown-event'; e.currentTarget=n, function(e, t, n, r, o, i, l, u, s) {
        if (Ue.apply(this, arguments), De) {
          if (!De) throw Error(a(198)); const c=Le; De=!1, Le=null, je||(je=!0, Fe=c);
        }
      }(r, t, void 0, e), e.currentTarget=null;
    } function jr(e, t) {
      t=0!=(4&t); for (let n=0; n<e.length; n++) {
        let r=e[n]; const o=r.event; r=r.listeners; e: {
          let a=void 0; if (t) {
            for (var i=r.length-1; 0<=i; i--) {
              var l=r[i]; var u=l.instance; var s=l.currentTarget; if (l=l.listener, u!==a&&o.isPropagationStopped()) break e; Lr(o, l, s), a=u;
            }
          } else {
            for (i=0; i<r.length; i++) {
              if (u=(l=r[i]).instance, s=l.currentTarget, l=l.listener, u!==a&&o.isPropagationStopped()) break e; Lr(o, l, s), a=u;
            }
          }
        }
      } if (je) throw e=Fe, je=!1, Fe=null, e;
    } function Fr(e, t) {
      let n=t[go]; void 0===n&&(n=t[go]=new Set); const r=e+'__bubble'; n.has(r)||($r(t, e, 2, !1), n.add(r));
    } function qr(e, t, n) {
      let r=0; t&&(r|=4), $r(n, e, r, t);
    } const Ur='_reactListening'+Math.random().toString(36).slice(2); function Br(e) {
      if (!e[Ur]) {
        e[Ur]=!0, i.forEach((function(t) {
          'selectionchange'!==t&&(Dr.has(t)||qr(t, !1, e), qr(t, !0, e));
        })); const t=9===e.nodeType?e:e.ownerDocument; null===t||t[Ur]||(t[Ur]=!0, qr('selectionchange', !1, t));
      }
    } function $r(e, t, n, r) {
      switch (Xt(t)) {
        case 1: var o=Wt; break; case 4: o=Vt; break; default: o=Kt;
      }n=o.bind(null, t, n, e), o=void 0, !Ae||'touchstart'!==t&&'touchmove'!==t&&'wheel'!==t||(o=!0), r?void 0!==o?e.addEventListener(t, n, {capture: !0, passive: o}):e.addEventListener(t, n, !0):void 0!==o?e.addEventListener(t, n, {passive: o}):e.addEventListener(t, n, !1);
    } function Hr(e, t, n, r, o) {
      let a=r; if (0==(1&t)&&0==(2&t)&&null!==r) {
        e:for (;;) {
          if (null===r) return; let i=r.tag; if (3===i||4===i) {
            let l=r.stateNode.containerInfo; if (l===o||8===l.nodeType&&l.parentNode===o) break; if (4===i) {
              for (i=r.return; null!==i;) {
                var u=i.tag; if ((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o)) return; i=i.return;
              }
            } for (;null!==l;) {
              if (null===(i=bo(l))) return; if (5===(u=i.tag)||6===u) {
                r=a=i; continue e;
              }l=l.parentNode;
            }
          }r=r.return;
        }
      }Te((function() {
        let r=a; let o=Se(n); const i=[]; e: {
          var l=Pr.get(e); if (void 0!==l) {
            var u=cn; var s=e; switch (e) {
              case 'keypress': if (0===tn(n)) break e; case 'keydown': case 'keyup': u=On; break; case 'focusin': s='focus', u=gn; break; case 'focusout': s='blur', u=gn; break; case 'beforeblur': case 'afterblur': u=gn; break; case 'click': if (2===n.button) break e; case 'auxclick': case 'dblclick': case 'mousedown': case 'mousemove': case 'mouseup': case 'mouseout': case 'mouseover': case 'contextmenu': u=hn; break; case 'drag': case 'dragend': case 'dragenter': case 'dragexit': case 'dragleave': case 'dragover': case 'dragstart': case 'drop': u=mn; break; case 'touchcancel': case 'touchend': case 'touchmove': case 'touchstart': u=Mn; break; case Cr: case Or: case Nr: u=yn; break; case Mr: u=Pn; break; case 'scroll': u=fn; break; case 'wheel': u=Rn; break; case 'copy': case 'cut': case 'paste': u=bn; break; case 'gotpointercapture': case 'lostpointercapture': case 'pointercancel': case 'pointerdown': case 'pointermove': case 'pointerout': case 'pointerover': case 'pointerup': u=Nn;
            } var c=0!=(4&t); var d=!c&&'scroll'===e; var f=c?null!==l?l+'Capture':null:l; c=[]; for (var p, h=r; null!==h;) {
              var m=(p=h).stateNode; if (5===p.tag&&null!==m&&(p=m, null!==f&&null!=(m=Re(h, f))&&c.push(Wr(h, m, p))), d) break; h=h.return;
            }0<c.length&&(l=new u(l, s, null, n, o), i.push({event: l, listeners: c}));
          }
        } if (0==(7&t)) {
          if (u='mouseout'===e||'pointerout'===e, (!(l='mouseover'===e||'pointerover'===e)||n===we||!(s=n.relatedTarget||n.fromElement)||!bo(s)&&!s[mo])&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window, u?(u=r, null!==(s=(s=n.relatedTarget||n.toElement)?bo(s):null)&&(s!==(d=Be(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(u=null, s=r), u!==s)) {
            if (c=hn, m='onMouseLeave', f='onMouseEnter', h='mouse', 'pointerout'!==e&&'pointerover'!==e||(c=Nn, m='onPointerLeave', f='onPointerEnter', h='pointer'), d=null==u?l:So(u), p=null==s?l:So(s), (l=new c(m, h+'leave', u, n, o)).target=d, l.relatedTarget=p, m=null, bo(o)===r&&((c=new c(f, h+'enter', s, n, o)).target=p, c.relatedTarget=d, m=c), d=m, u&&s) {
              e: {
                for (f=s, h=0, p=c=u; p; p=Kr(p))h++; for (p=0, m=f; m; m=Kr(m))p++; for (;0<h-p;)c=Kr(c), h--; for (;0<p-h;)f=Kr(f), p--; for (;h--;) {
                  if (c===f||null!==f&&c===f.alternate) break e; c=Kr(c), f=Kr(f);
                }c=null;
              }
            } else c=null; null!==u&&Qr(i, l, u, c, !1), null!==s&&null!==d&&Qr(i, d, s, c, !0);
          } if ('select'===(u=(l=r?So(r):window).nodeName&&l.nodeName.toLowerCase())||'input'===u&&'file'===l.type) var g=Xn; else if (Hn(l)) {
            if (Gn)g=ir; else {
              g=or; var y=rr;
            }
          } else (u=l.nodeName)&&'input'===u.toLowerCase()&&('checkbox'===l.type||'radio'===l.type)&&(g=ar); switch (g&&(g=g(e, r))?Wn(i, g, n, o):(y&&y(e, l, r), 'focusout'===e&&(y=l._wrapperState)&&y.controlled&&'number'===l.type&&ee(l, 'number', l.value)), y=r?So(r):window, e) {
            case 'focusin': (Hn(y)||'true'===y.contentEditable)&&(gr=y, yr=r, vr=null); break; case 'focusout': vr=yr=gr=null; break; case 'mousedown': br=!0; break; case 'contextmenu': case 'mouseup': case 'dragend': br=!1, wr(i, n, o); break; case 'selectionchange': if (mr) break; case 'keydown': case 'keyup': wr(i, n, o);
          } let v; if (In) {
            e: {
              switch (e) {
                case 'compositionstart': var b='onCompositionStart'; break e; case 'compositionend': b='onCompositionEnd'; break e; case 'compositionupdate': b='onCompositionUpdate'; break e;
              }b=void 0;
            }
          } else Bn?qn(e, n)&&(b='onCompositionEnd'):'keydown'===e&&229===n.keyCode&&(b='onCompositionStart'); b&&(Ln&&'ko'!==n.locale&&(Bn||'onCompositionStart'!==b?'onCompositionEnd'===b&&Bn&&(v=en()):(Zt='value'in(Gt=o)?Gt.value:Gt.textContent, Bn=!0)), 0<(y=Vr(r, b)).length&&(b=new wn(b, e, null, n, o), i.push({event: b, listeners: y}), (v||null!==(v=Un(n)))&&(b.data=v))), (v=Dn?function(e, t) {
            switch (e) {
              case 'compositionend': return Un(t); case 'keypress': return 32!==t.which?null:(Fn=!0, jn); case 'textInput': return (e=t.data)===jn&&Fn?null:e; default: return null;
            }
          }(e, n):function(e, t) {
            if (Bn) return 'compositionend'===e||!In&&qn(e, t)?(e=en(), Jt=Zt=Gt=null, Bn=!1, e):null; switch (e) {
              case 'paste': default: return null; case 'keypress': if (!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey) {
                if (t.char&&1<t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which);
              } return null; case 'compositionend': return Ln&&'ko'!==t.locale?null:t.data;
            }
          }(e, n))&&0<(r=Vr(r, 'onBeforeInput')).length&&(o=new wn('onBeforeInput', 'beforeinput', null, n, o), i.push({event: o, listeners: r}), o.data=v);
        }jr(i, t);
      }));
    } function Wr(e, t, n) {
      return {instance: e, listener: t, currentTarget: n};
    } function Vr(e, t) {
      for (var n=t+'Capture', r=[]; null!==e;) {
        let o=e; let a=o.stateNode; 5===o.tag&&null!==a&&(o=a, null!=(a=Re(e, n))&&r.unshift(Wr(e, a, o)), null!=(a=Re(e, t))&&r.push(Wr(e, a, o))), e=e.return;
      } return r;
    } function Kr(e) {
      if (null===e) return null; do {
        e=e.return;
      } while (e&&5!==e.tag); return e||null;
    } function Qr(e, t, n, r, o) {
      for (var a=t._reactName, i=[]; null!==n&&n!==r;) {
        let l=n; let u=l.alternate; const s=l.stateNode; if (null!==u&&u===r) break; 5===l.tag&&null!==s&&(l=s, o?null!=(u=Re(n, a))&&i.unshift(Wr(n, u, l)):o||null!=(u=Re(n, a))&&i.push(Wr(n, u, l))), n=n.return;
      }0!==i.length&&e.push({event: t, listeners: i});
    } const Yr=/\r\n?/g; const Xr=/\u0000|\uFFFD/g; function Gr(e) {
      return ('string'==typeof e?e:''+e).replace(Yr, '\n').replace(Xr, '');
    } function Zr(e, t, n) {
      if (t=Gr(t), Gr(e)!==t&&n) throw Error(a(425));
    } function Jr() {} let eo=null; let to=null; function no(e, t) {
      return 'textarea'===e||'noscript'===e||'string'==typeof t.children||'number'==typeof t.children||'object'==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html;
    } const ro='function'==typeof setTimeout?setTimeout:void 0; const oo='function'==typeof clearTimeout?clearTimeout:void 0; const ao='function'==typeof Promise?Promise:void 0; const io='function'==typeof queueMicrotask?queueMicrotask:void 0!==ao?function(e) {
      return ao.resolve(null).then(e).catch(lo);
    }:ro; function lo(e) {
      setTimeout((function() {
        throw e;
      }));
    } function uo(e, t) {
      let n=t; let r=0; do {
        const o=n.nextSibling; if (e.removeChild(n), o&&8===o.nodeType) {
          if ('/$'===(n=o.data)) {
            if (0===r) return e.removeChild(o), void Bt(t); r--;
          } else '$'!==n&&'$?'!==n&&'$!'!==n||r++;
        } n=o;
      } while (n); Bt(t);
    } function so(e) {
      for (;null!=e; e=e.nextSibling) {
        let t=e.nodeType; if (1===t||3===t) break; if (8===t) {
          if ('$'===(t=e.data)||'$!'===t||'$?'===t) break; if ('/$'===t) return null;
        }
      } return e;
    } function co(e) {
      e=e.previousSibling; for (let t=0; e;) {
        if (8===e.nodeType) {
          const n=e.data; if ('$'===n||'$!'===n||'$?'===n) {
            if (0===t) return e; t--;
          } else '/$'===n&&t++;
        }e=e.previousSibling;
      } return null;
    } const fo=Math.random().toString(36).slice(2); const po='__reactFiber$'+fo; const ho='__reactProps$'+fo; var mo='__reactContainer$'+fo; var go='__reactEvents$'+fo; const yo='__reactListeners$'+fo; const vo='__reactHandles$'+fo; function bo(e) {
      let t=e[po]; if (t) return t; for (let n=e.parentNode; n;) {
        if (t=n[mo]||n[po]) {
          if (n=t.alternate, null!==t.child||null!==n&&null!==n.child) {
            for (e=co(e); null!==e;) {
              if (n=e[po]) return n; e=co(e);
            }
          } return t;
        }n=(e=n).parentNode;
      } return null;
    } function wo(e) {
      return !(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e;
    } function So(e) {
      if (5===e.tag||6===e.tag) return e.stateNode; throw Error(a(33));
    } function xo(e) {
      return e[ho]||null;
    } const Eo=[]; let _o=-1; function ko(e) {
      return {current: e};
    } function Co(e) {
      0>_o||(e.current=Eo[_o], Eo[_o]=null, _o--);
    } function Oo(e, t) {
      _o++, Eo[_o]=e.current, e.current=t;
    } const No={}; const Mo=ko(No); const Po=ko(!1); let To=No; function Ro(e, t) {
      const n=e.type.contextTypes; if (!n) return No; const r=e.stateNode; if (r&&r.__reactInternalMemoizedUnmaskedChildContext===t) return r.__reactInternalMemoizedMaskedChildContext; let o; const a={}; for (o in n)a[o]=t[o]; return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t, e.__reactInternalMemoizedMaskedChildContext=a), a;
    } function Ao(e) {
      return null!=e.childContextTypes;
    } function Io() {
      Co(Po), Co(Mo);
    } function zo(e, t, n) {
      if (Mo.current!==No) throw Error(a(168)); Oo(Mo, t), Oo(Po, n);
    } function Do(e, t, n) {
      let r=e.stateNode; if (t=t.childContextTypes, 'function'!=typeof r.getChildContext) return n; for (const o in r=r.getChildContext()) if (!(o in t)) throw Error(a(108, $(e)||'Unknown', o)); return L({}, n, r);
    } function Lo(e) {
      return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||No, To=Mo.current, Oo(Mo, e), Oo(Po, Po.current), !0;
    } function jo(e, t, n) {
      const r=e.stateNode; if (!r) throw Error(a(169)); n?(e=Do(e, t, To), r.__reactInternalMemoizedMergedChildContext=e, Co(Po), Co(Mo), Oo(Mo, e)):Co(Po), Oo(Po, n);
    } let Fo=null; let qo=!1; let Uo=!1; function Bo(e) {
null===Fo?Fo=[e]:Fo.push(e);
    } function $o() {
      if (!Uo&&null!==Fo) {
        Uo=!0; let e=0; const t=bt; try {
          const n=Fo; for (bt=1; e<n.length; e++) {
            let r=n[e]; do {
              r=r(!0);
            } while (null!==r);
          }Fo=null, qo=!1;
        } catch (t) {
          throw null!==Fo&&(Fo=Fo.slice(e+1)), Ke(Je, $o), t;
        } finally {
          bt=t, Uo=!1;
        }
      } return null;
    } const Ho=[]; let Wo=0; let Vo=null; let Ko=0; const Qo=[]; let Yo=0; let Xo=null; let Go=1; let Zo=''; function Jo(e, t) {
      Ho[Wo++]=Ko, Ho[Wo++]=Vo, Vo=e, Ko=t;
    } function ea(e, t, n) {
      Qo[Yo++]=Go, Qo[Yo++]=Zo, Qo[Yo++]=Xo, Xo=e; let r=Go; e=Zo; let o=32-it(r)-1; r&=~(1<<o), n+=1; let a=32-it(t)+o; if (30<a) {
        const i=o-o%5; a=(r&(1<<i)-1).toString(32), r>>=i, o-=i, Go=1<<32-it(t)+o|n<<o|r, Zo=a+e;
      } else Go=1<<a|n<<o|r, Zo=e;
    } function ta(e) {
      null!==e.return&&(Jo(e, 1), ea(e, 1, 0));
    } function na(e) {
      for (;e===Vo;)Vo=Ho[--Wo], Ho[Wo]=null, Ko=Ho[--Wo], Ho[Wo]=null; for (;e===Xo;)Xo=Qo[--Yo], Qo[Yo]=null, Zo=Qo[--Yo], Qo[Yo]=null, Go=Qo[--Yo], Qo[Yo]=null;
    } let ra=null; let oa=null; let aa=!1; let ia=null; function la(e, t) {
      const n=Rs(5, null, null, 0); n.elementType='DELETED', n.stateNode=t, n.return=e, null===(t=e.deletions)?(e.deletions=[n], e.flags|=16):t.push(n);
    } function ua(e, t) {
      switch (e.tag) {
        case 5: var n=e.type; return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t, ra=e, oa=so(t.firstChild), !0); case 6: return null!==(t=''===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t, ra=e, oa=null, !0); case 13: return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xo?{id: Go, overflow: Zo}:null, e.memoizedState={dehydrated: t, treeContext: n, retryLane: 1073741824}, (n=Rs(18, null, null, 0)).stateNode=t, n.return=e, e.child=n, ra=e, oa=null, !0); default: return !1;
      }
    } function sa(e) {
      return 0!=(1&e.mode)&&0==(128&e.flags);
    } function ca(e) {
      if (aa) {
        let t=oa; if (t) {
          const n=t; if (!ua(e, t)) {
            if (sa(e)) throw Error(a(418)); t=so(n.nextSibling); const r=ra; t&&ua(e, t)?la(r, n):(e.flags=-4097&e.flags|2, aa=!1, ra=e);
          }
        } else {
          if (sa(e)) throw Error(a(418)); e.flags=-4097&e.flags|2, aa=!1, ra=e;
        }
      }
    } function da(e) {
      for (e=e.return; null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return; ra=e;
    } function fa(e) {
      if (e!==ra) return !1; if (!aa) return da(e), aa=!0, !1; let t; if ((t=3!==e.tag)&&!(t=5!==e.tag)&&(t='head'!==(t=e.type)&&'body'!==t&&!no(e.type, e.memoizedProps)), t&&(t=oa)) {
        if (sa(e)) throw pa(), Error(a(418)); for (;t;)la(e, t), t=so(t.nextSibling);
      } if (da(e), 13===e.tag) {
        if (!(e=null!==(e=e.memoizedState)?e.dehydrated:null)) throw Error(a(317)); e: {
          for (e=e.nextSibling, t=0; e;) {
            if (8===e.nodeType) {
              const n=e.data; if ('/$'===n) {
                if (0===t) {
                  oa=so(e.nextSibling); break e;
                }t--;
              } else '$'!==n&&'$!'!==n&&'$?'!==n||t++;
            }e=e.nextSibling;
          }oa=null;
        }
      } else oa=ra?so(e.stateNode.nextSibling):null; return !0;
    } function pa() {
      for (let e=oa; e;)e=so(e.nextSibling);
    } function ha() {
      oa=ra=null, aa=!1;
    } function ma(e) {
null===ia?ia=[e]:ia.push(e);
    } const ga=w.ReactCurrentBatchConfig; function ya(e, t) {
      if (e&&e.defaultProps) {
        for (const n in t=L({}, t), e=e.defaultProps) void 0===t[n]&&(t[n]=e[n]); return t;
      } return t;
    } const va=ko(null); let ba=null; let wa=null; let Sa=null; function xa() {
      Sa=wa=ba=null;
    } function Ea(e) {
      const t=va.current; Co(va), e._currentValue=t;
    } function _a(e, t, n) {
      for (;null!==e;) {
        const r=e.alternate; if ((e.childLanes&t)!==t?(e.childLanes|=t, null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t), e===n) break; e=e.return;
      }
    } function ka(e, t) {
      ba=e, Sa=wa=null, null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(wl=!0), e.firstContext=null);
    } function Ca(e) {
      const t=e._currentValue; if (Sa!==e) {
        if (e={context: e, memoizedValue: t, next: null}, null===wa) {
          if (null===ba) throw Error(a(308)); wa=e, ba.dependencies={lanes: 0, firstContext: e};
        } else wa=wa.next=e;
      } return t;
    } let Oa=null; function Na(e) {
null===Oa?Oa=[e]:Oa.push(e);
    } function Ma(e, t, n, r) {
      const o=t.interleaved; return null===o?(n.next=n, Na(t)):(n.next=o.next, o.next=n), t.interleaved=n, Pa(e, r);
    } function Pa(e, t) {
      e.lanes|=t; let n=e.alternate; for (null!==n&&(n.lanes|=t), n=e, e=e.return; null!==e;)e.childLanes|=t, null!==(n=e.alternate)&&(n.childLanes|=t), n=e, e=e.return; return 3===n.tag?n.stateNode:null;
    } let Ta=!1; function Ra(e) {
      e.updateQueue={baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
    } function Aa(e, t) {
      e=e.updateQueue, t.updateQueue===e&&(t.updateQueue={baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects});
    } function Ia(e, t) {
      return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null};
    } function za(e, t, n) {
      let r=e.updateQueue; if (null===r) return null; if (r=r.shared, 0!=(2&Mu)) {
        var o=r.pending; return null===o?t.next=t:(t.next=o.next, o.next=t), r.pending=t, Pa(e, n);
      } return null===(o=r.interleaved)?(t.next=t, Na(r)):(t.next=o.next, o.next=t), r.interleaved=t, Pa(e, n);
    } function Da(e, t, n) {
      if (null!==(t=t.updateQueue)&&(t=t.shared, 0!=(4194240&n))) {
        let r=t.lanes; n|=r&=e.pendingLanes, t.lanes=n, vt(e, n);
      }
    } function La(e, t) {
      let n=e.updateQueue; let r=e.alternate; if (null!==r&&n===(r=r.updateQueue)) {
        let o=null; let a=null; if (null!==(n=n.firstBaseUpdate)) {
          do {
            const i={eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null}; null===a?o=a=i:a=a.next=i, n=n.next;
          } while (null!==n); null===a?o=a=t:a=a.next=t;
        } else o=a=t; return n={baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: r.shared, effects: r.effects}, void(e.updateQueue=n);
      }null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t, n.lastBaseUpdate=t;
    } function ja(e, t, n, r) {
      let o=e.updateQueue; Ta=!1; let a=o.firstBaseUpdate; let i=o.lastBaseUpdate; let l=o.shared.pending; if (null!==l) {
        o.shared.pending=null; var u=l; var s=u.next; u.next=null, null===i?a=s:i.next=s, i=u; var c=e.alternate; null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=s:l.next=s, c.lastBaseUpdate=u);
      } if (null!==a) {
        let d=o.baseState; for (i=0, c=s=u=null, l=a; ;) {
          let f=l.lane; let p=l.eventTime; if ((r&f)===f) {
            null!==c&&(c=c.next={eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null}); e: {
              let h=e; const m=l; switch (f=t, p=n, m.tag) {
                case 1: if ('function'==typeof(h=m.payload)) {
                  d=h.call(p, d, f); break e;
                }d=h; break e; case 3: h.flags=-65537&h.flags|128; case 0: if (null==(f='function'==typeof(h=m.payload)?h.call(p, d, f):h)) break e; d=L({}, d, f); break e; case 2: Ta=!0;
              }
            }null!==l.callback&&0!==l.lane&&(e.flags|=64, null===(f=o.effects)?o.effects=[l]:f.push(l));
          } else p={eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null}, null===c?(s=c=p, u=d):c=c.next=p, i|=f; if (null===(l=l.next)) {
            if (null===(l=o.shared.pending)) break; l=(f=l).next, f.next=null, o.lastBaseUpdate=f, o.shared.pending=null;
          }
        } if (null===c&&(u=d), o.baseState=u, o.firstBaseUpdate=s, o.lastBaseUpdate=c, null!==(t=o.shared.interleaved)) {
          o=t; do {
            i|=o.lane, o=o.next;
          } while (o!==t);
        } else null===a&&(o.shared.lanes=0); Lu|=i, e.lanes=i, e.memoizedState=d;
      }
    } function Fa(e, t, n) {
      if (e=t.effects, t.effects=null, null!==e) {
        for (t=0; t<e.length; t++) {
          let r=e[t]; const o=r.callback; if (null!==o) {
            if (r.callback=null, r=n, 'function'!=typeof o) throw Error(a(191, o)); o.call(r);
          }
        }
      }
    } const qa=(new r.Component).refs; function Ua(e, t, n, r) {
      n=null==(n=n(r, t=e.memoizedState))?t:L({}, t, n), e.memoizedState=n, 0===e.lanes&&(e.updateQueue.baseState=n);
    } const Ba={isMounted: function(e) {
      return !!(e=e._reactInternals)&&Be(e)===e;
    }, enqueueSetState: function(e, t, n) {
      e=e._reactInternals; const r=ts(); const o=ns(e); const a=Ia(r, o); a.payload=t, null!=n&&(a.callback=n), null!==(t=za(e, a, o))&&(rs(t, e, o, r), Da(t, e, o));
    }, enqueueReplaceState: function(e, t, n) {
      e=e._reactInternals; const r=ts(); const o=ns(e); const a=Ia(r, o); a.tag=1, a.payload=t, null!=n&&(a.callback=n), null!==(t=za(e, a, o))&&(rs(t, e, o, r), Da(t, e, o));
    }, enqueueForceUpdate: function(e, t) {
      e=e._reactInternals; const n=ts(); const r=ns(e); const o=Ia(n, r); o.tag=2, null!=t&&(o.callback=t), null!==(t=za(e, o, r))&&(rs(t, e, r, n), Da(t, e, r));
    }}; function $a(e, t, n, r, o, a, i) {
      return 'function'==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r, a, i):!(t.prototype&&t.prototype.isPureReactComponent&&ur(n, r)&&ur(o, a));
    } function Ha(e, t, n) {
      let r=!1; let o=No; let a=t.contextType; return 'object'==typeof a&&null!==a?a=Ca(a):(o=Ao(t)?To:Mo.current, a=(r=null!=(r=t.contextTypes))?Ro(e, o):No), t=new t(n, a), e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null, t.updater=Ba, e.stateNode=t, t._reactInternals=e, r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o, e.__reactInternalMemoizedMaskedChildContext=a), t;
    } function Wa(e, t, n, r) {
      e=t.state, 'function'==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n, r), 'function'==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n, r), t.state!==e&&Ba.enqueueReplaceState(t, t.state, null);
    } function Va(e, t, n, r) {
      const o=e.stateNode; o.props=n, o.state=e.memoizedState, o.refs=qa, Ra(e); let a=t.contextType; 'object'==typeof a&&null!==a?o.context=Ca(a):(a=Ao(t)?To:Mo.current, o.context=Ro(e, a)), o.state=e.memoizedState, 'function'==typeof(a=t.getDerivedStateFromProps)&&(Ua(e, t, a, n), o.state=e.memoizedState), 'function'==typeof t.getDerivedStateFromProps||'function'==typeof o.getSnapshotBeforeUpdate||'function'!=typeof o.UNSAFE_componentWillMount&&'function'!=typeof o.componentWillMount||(t=o.state, 'function'==typeof o.componentWillMount&&o.componentWillMount(), 'function'==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(), t!==o.state&&Ba.enqueueReplaceState(o, o.state, null), ja(e, n, o, r), o.state=e.memoizedState), 'function'==typeof o.componentDidMount&&(e.flags|=4194308);
    } function Ka(e, t, n) {
      if (null!==(e=n.ref)&&'function'!=typeof e&&'object'!=typeof e) {
        if (n._owner) {
          if (n=n._owner) {
            if (1!==n.tag) throw Error(a(309)); var r=n.stateNode;
          } if (!r) throw Error(a(147, e)); const o=r; const i=''+e; return null!==t&&null!==t.ref&&'function'==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e) {
            let t=o.refs; t===qa&&(t=o.refs={}), null===e?delete t[i]:t[i]=e;
          }, t._stringRef=i, t);
        } if ('string'!=typeof e) throw Error(a(284)); if (!n._owner) throw Error(a(290, e));
      } return e;
    } function Qa(e, t) {
      throw e=Object.prototype.toString.call(t), Error(a(31, '[object Object]'===e?'object with keys {'+Object.keys(t).join(', ')+'}':e));
    } function Ya(e) {
      return (0, e._init)(e._payload);
    } function Xa(e) {
      function t(t, n) {
        if (e) {
          const r=t.deletions; null===r?(t.deletions=[n], t.flags|=16):r.push(n);
        }
      } function n(n, r) {
        if (!e) return null; for (;null!==r;)t(n, r), r=r.sibling; return null;
      } function r(e, t) {
        for (e=new Map; null!==t;)null!==t.key?e.set(t.key, t):e.set(t.index, t), t=t.sibling; return e;
      } function o(e, t) {
        return (e=Is(e, t)).index=0, e.sibling=null, e;
      } function i(t, n, r) {
        return t.index=r, e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2, n):r:(t.flags|=2, n):(t.flags|=1048576, n);
      } function l(t) {
        return e&&null===t.alternate&&(t.flags|=2), t;
      } function u(e, t, n, r) {
        return null===t||6!==t.tag?((t=js(n, e.mode, r)).return=e, t):((t=o(t, n)).return=e, t);
      } function s(e, t, n, r) {
        const a=n.type; return a===E?d(e, t, n.props.children, r, n.key):null!==t&&(t.elementType===a||'object'==typeof a&&null!==a&&a.$$typeof===R&&Ya(a)===t.type)?((r=o(t, n.props)).ref=Ka(e, t, n), r.return=e, r):((r=zs(n.type, n.key, n.props, null, e.mode, r)).ref=Ka(e, t, n), r.return=e, r);
      } function c(e, t, n, r) {
        return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Fs(n, e.mode, r)).return=e, t):((t=o(t, n.children||[])).return=e, t);
      } function d(e, t, n, r, a) {
        return null===t||7!==t.tag?((t=Ds(n, e.mode, r, a)).return=e, t):((t=o(t, n)).return=e, t);
      } function f(e, t, n) {
        if ('string'==typeof t&&''!==t||'number'==typeof t) return (t=js(''+t, e.mode, n)).return=e, t; if ('object'==typeof t&&null!==t) {
          switch (t.$$typeof) {
            case S: return (n=zs(t.type, t.key, t.props, null, e.mode, n)).ref=Ka(e, null, t), n.return=e, n; case x: return (t=Fs(t, e.mode, n)).return=e, t; case R: return f(e, (0, t._init)(t._payload), n);
          } if (te(t)||z(t)) return (t=Ds(t, e.mode, n, null)).return=e, t; Qa(e, t);
        } return null;
      } function p(e, t, n, r) {
        let o=null!==t?t.key:null; if ('string'==typeof n&&''!==n||'number'==typeof n) return null!==o?null:u(e, t, ''+n, r); if ('object'==typeof n&&null!==n) {
          switch (n.$$typeof) {
            case S: return n.key===o?s(e, t, n, r):null; case x: return n.key===o?c(e, t, n, r):null; case R: return p(e, t, (o=n._init)(n._payload), r);
          } if (te(n)||z(n)) return null!==o?null:d(e, t, n, r, null); Qa(e, n);
        } return null;
      } function h(e, t, n, r, o) {
        if ('string'==typeof r&&''!==r||'number'==typeof r) return u(t, e=e.get(n)||null, ''+r, o); if ('object'==typeof r&&null!==r) {
          switch (r.$$typeof) {
            case S: return s(t, e=e.get(null===r.key?n:r.key)||null, r, o); case x: return c(t, e=e.get(null===r.key?n:r.key)||null, r, o); case R: return h(e, t, n, (0, r._init)(r._payload), o);
          } if (te(r)||z(r)) return d(t, e=e.get(n)||null, r, o, null); Qa(t, r);
        } return null;
      } function m(o, a, l, u) {
        for (var s=null, c=null, d=a, m=a=0, g=null; null!==d&&m<l.length; m++) {
d.index>m?(g=d, d=null):g=d.sibling; const y=p(o, d, l[m], u); if (null===y) {
  null===d&&(d=g); break;
}e&&d&&null===y.alternate&&t(o, d), a=i(y, a, m), null===c?s=y:c.sibling=y, c=y, d=g;
        } if (m===l.length) return n(o, d), aa&&Jo(o, m), s; if (null===d) {
          for (;m<l.length; m++)null!==(d=f(o, l[m], u))&&(a=i(d, a, m), null===c?s=d:c.sibling=d, c=d); return aa&&Jo(o, m), s;
        } for (d=r(o, d); m<l.length; m++)null!==(g=h(d, o, m, l[m], u))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key), a=i(g, a, m), null===c?s=g:c.sibling=g, c=g); return e&&d.forEach((function(e) {
          return t(o, e);
        })), aa&&Jo(o, m), s;
      } function g(o, l, u, s) {
        let c=z(u); if ('function'!=typeof c) throw Error(a(150)); if (null==(u=c.call(u))) throw Error(a(151)); for (var d=c=null, m=l, g=l=0, y=null, v=u.next(); null!==m&&!v.done; g++, v=u.next()) {
m.index>g?(y=m, m=null):y=m.sibling; const b=p(o, m, v.value, s); if (null===b) {
  null===m&&(m=y); break;
}e&&m&&null===b.alternate&&t(o, m), l=i(b, l, g), null===d?c=b:d.sibling=b, d=b, m=y;
        } if (v.done) return n(o, m), aa&&Jo(o, g), c; if (null===m) {
          for (;!v.done; g++, v=u.next())null!==(v=f(o, v.value, s))&&(l=i(v, l, g), null===d?c=v:d.sibling=v, d=v); return aa&&Jo(o, g), c;
        } for (m=r(o, m); !v.done; g++, v=u.next())null!==(v=h(m, o, g, v.value, s))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key), l=i(v, l, g), null===d?c=v:d.sibling=v, d=v); return e&&m.forEach((function(e) {
          return t(o, e);
        })), aa&&Jo(o, g), c;
      } return function e(r, a, i, u) {
        if ('object'==typeof i&&null!==i&&i.type===E&&null===i.key&&(i=i.props.children), 'object'==typeof i&&null!==i) {
          switch (i.$$typeof) {
            case S: e: {
              for (var s=i.key, c=a; null!==c;) {
                if (c.key===s) {
                  if ((s=i.type)===E) {
                    if (7===c.tag) {
                      n(r, c.sibling), (a=o(c, i.props.children)).return=r, r=a; break e;
                    }
                  } else if (c.elementType===s||'object'==typeof s&&null!==s&&s.$$typeof===R&&Ya(s)===c.type) {
                    n(r, c.sibling), (a=o(c, i.props)).ref=Ka(r, c, i), a.return=r, r=a; break e;
                  }n(r, c); break;
                }t(r, c), c=c.sibling;
              }i.type===E?((a=Ds(i.props.children, r.mode, u, i.key)).return=r, r=a):((u=zs(i.type, i.key, i.props, null, r.mode, u)).ref=Ka(r, a, i), u.return=r, r=u);
            } return l(r); case x: e: {
              for (c=i.key; null!==a;) {
                if (a.key===c) {
                  if (4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation) {
                    n(r, a.sibling), (a=o(a, i.children||[])).return=r, r=a; break e;
                  }n(r, a); break;
                }t(r, a), a=a.sibling;
              }(a=Fs(i, r.mode, u)).return=r, r=a;
            } return l(r); case R: return e(r, a, (c=i._init)(i._payload), u);
          } if (te(i)) return m(r, a, i, u); if (z(i)) return g(r, a, i, u); Qa(r, i);
        } return 'string'==typeof i&&''!==i||'number'==typeof i?(i=''+i, null!==a&&6===a.tag?(n(r, a.sibling), (a=o(a, i)).return=r, r=a):(n(r, a), (a=js(i, r.mode, u)).return=r, r=a), l(r)):n(r, a);
      };
    } const Ga=Xa(!0); const Za=Xa(!1); const Ja={}; const ei=ko(Ja); const ti=ko(Ja); const ni=ko(Ja); function ri(e) {
      if (e===Ja) throw Error(a(174)); return e;
    } function oi(e, t) {
      switch (Oo(ni, t), Oo(ti, e), Oo(ei, Ja), e=t.nodeType) {
        case 9: case 11: t=(t=t.documentElement)?t.namespaceURI:ue(null, ''); break; default: t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null, e=e.tagName);
      }Co(ei), Oo(ei, t);
    } function ai() {
      Co(ei), Co(ti), Co(ni);
    } function ii(e) {
      ri(ni.current); const t=ri(ei.current); const n=ue(t, e.type); t!==n&&(Oo(ti, e), Oo(ei, n));
    } function li(e) {
      ti.current===e&&(Co(ei), Co(ti));
    } const ui=ko(0); function si(e) {
      for (let t=e; null!==t;) {
        if (13===t.tag) {
          let n=t.memoizedState; if (null!==n&&(null===(n=n.dehydrated)||'$?'===n.data||'$!'===n.data)) return t;
        } else if (19===t.tag&&void 0!==t.memoizedProps.revealOrder) {
          if (0!=(128&t.flags)) return t;
        } else if (null!==t.child) {
          t.child.return=t, t=t.child; continue;
        } if (t===e) break; for (;null===t.sibling;) {
          if (null===t.return||t.return===e) return null; t=t.return;
        }t.sibling.return=t.return, t=t.sibling;
      } return null;
    } const ci=[]; function di() {
      for (let e=0; e<ci.length; e++)ci[e]._workInProgressVersionPrimary=null; ci.length=0;
    } const fi=w.ReactCurrentDispatcher; const pi=w.ReactCurrentBatchConfig; let hi=0; let mi=null; let gi=null; let yi=null; let vi=!1; let bi=!1; let wi=0; let Si=0; function xi() {
      throw Error(a(321));
    } function Ei(e, t) {
      if (null===t) return !1; for (let n=0; n<t.length&&n<e.length; n++) if (!lr(e[n], t[n])) return !1; return !0;
    } function _i(e, t, n, r, o, i) {
      if (hi=i, mi=t, t.memoizedState=null, t.updateQueue=null, t.lanes=0, fi.current=null===e||null===e.memoizedState?ll:ul, e=n(r, o), bi) {
        i=0; do {
          if (bi=!1, wi=0, 25<=i) throw Error(a(301)); i+=1, yi=gi=null, t.updateQueue=null, fi.current=sl, e=n(r, o);
        } while (bi);
      } if (fi.current=il, t=null!==gi&&null!==gi.next, hi=0, yi=gi=mi=null, vi=!1, t) throw Error(a(300)); return e;
    } function ki() {
      const e=0!==wi; return wi=0, e;
    } function Ci() {
      const e={memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null}; return null===yi?mi.memoizedState=yi=e:yi=yi.next=e, yi;
    } function Oi() {
      if (null===gi) {
        var e=mi.alternate; e=null!==e?e.memoizedState:null;
      } else e=gi.next; const t=null===yi?mi.memoizedState:yi.next; if (null!==t)yi=t, gi=e; else {
        if (null===e) throw Error(a(310)); e={memoizedState: (gi=e).memoizedState, baseState: gi.baseState, baseQueue: gi.baseQueue, queue: gi.queue, next: null}, null===yi?mi.memoizedState=yi=e:yi=yi.next=e;
      } return yi;
    } function Ni(e, t) {
      return 'function'==typeof t?t(e):t;
    } function Mi(e) {
      const t=Oi(); const n=t.queue; if (null===n) throw Error(a(311)); n.lastRenderedReducer=e; let r=gi; let o=r.baseQueue; let i=n.pending; if (null!==i) {
        if (null!==o) {
          var l=o.next; o.next=i.next, i.next=l;
        }r.baseQueue=o=i, n.pending=null;
      } if (null!==o) {
        i=o.next, r=r.baseState; let u=l=null; let s=null; let c=i; do {
          const d=c.lane; if ((hi&d)===d)null!==s&&(s=s.next={lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null}), r=c.hasEagerState?c.eagerState:e(r, c.action); else {
            const f={lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null}; null===s?(u=s=f, l=r):s=s.next=f, mi.lanes|=d, Lu|=d;
          }c=c.next;
        } while (null!==c&&c!==i); null===s?l=r:s.next=u, lr(r, t.memoizedState)||(wl=!0), t.memoizedState=r, t.baseState=l, t.baseQueue=s, n.lastRenderedState=r;
      } if (null!==(e=n.interleaved)) {
        o=e; do {
          i=o.lane, mi.lanes|=i, Lu|=i, o=o.next;
        } while (o!==e);
      } else null===o&&(n.lanes=0); return [t.memoizedState, n.dispatch];
    } function Pi(e) {
      const t=Oi(); const n=t.queue; if (null===n) throw Error(a(311)); n.lastRenderedReducer=e; const r=n.dispatch; let o=n.pending; let i=t.memoizedState; if (null!==o) {
        n.pending=null; let l=o=o.next; do {
          i=e(i, l.action), l=l.next;
        } while (l!==o); lr(i, t.memoizedState)||(wl=!0), t.memoizedState=i, null===t.baseQueue&&(t.baseState=i), n.lastRenderedState=i;
      } return [i, r];
    } function Ti() {} function Ri(e, t) {
      const n=mi; let r=Oi(); const o=t(); const i=!lr(r.memoizedState, o); if (i&&(r.memoizedState=o, wl=!0), r=r.queue, Hi(zi.bind(null, n, r, e), [e]), r.getSnapshot!==t||i||null!==yi&&1&yi.memoizedState.tag) {
        if (n.flags|=2048, Fi(9, Ii.bind(null, n, r, o, t), void 0, null), null===Pu) throw Error(a(349)); 0!=(30&hi)||Ai(n, t, o);
      } return o;
    } function Ai(e, t, n) {
      e.flags|=16384, e={getSnapshot: t, value: n}, null===(t=mi.updateQueue)?(t={lastEffect: null, stores: null}, mi.updateQueue=t, t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e);
    } function Ii(e, t, n, r) {
      t.value=n, t.getSnapshot=r, Di(t)&&Li(e);
    } function zi(e, t, n) {
      return n((function() {
        Di(t)&&Li(e);
      }));
    } function Di(e) {
      const t=e.getSnapshot; e=e.value; try {
        const n=t(); return !lr(e, n);
      } catch (e) {
        return !0;
      }
    } function Li(e) {
      const t=Pa(e, 1); null!==t&&rs(t, e, 1, -1);
    } function ji(e) {
      const t=Ci(); return 'function'==typeof e&&(e=e()), t.memoizedState=t.baseState=e, e={pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ni, lastRenderedState: e}, t.queue=e, e=e.dispatch=nl.bind(null, mi, e), [t.memoizedState, e];
    } function Fi(e, t, n, r) {
      return e={tag: e, create: t, destroy: n, deps: r, next: null}, null===(t=mi.updateQueue)?(t={lastEffect: null, stores: null}, mi.updateQueue=t, t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next, n.next=e, e.next=r, t.lastEffect=e), e;
    } function qi() {
      return Oi().memoizedState;
    } function Ui(e, t, n, r) {
      const o=Ci(); mi.flags|=e, o.memoizedState=Fi(1|t, n, void 0, void 0===r?null:r);
    } function Bi(e, t, n, r) {
      const o=Oi(); r=void 0===r?null:r; let a=void 0; if (null!==gi) {
        const i=gi.memoizedState; if (a=i.destroy, null!==r&&Ei(r, i.deps)) return void(o.memoizedState=Fi(t, n, a, r));
      }mi.flags|=e, o.memoizedState=Fi(1|t, n, a, r);
    } function $i(e, t) {
      return Ui(8390656, 8, e, t);
    } function Hi(e, t) {
      return Bi(2048, 8, e, t);
    } function Wi(e, t) {
      return Bi(4, 2, e, t);
    } function Vi(e, t) {
      return Bi(4, 4, e, t);
    } function Ki(e, t) {
      return 'function'==typeof t?(e=e(), t(e), function() {
        t(null);
      }):null!=t?(e=e(), t.current=e, function() {
        t.current=null;
      }):void 0;
    } function Qi(e, t, n) {
      return n=null!=n?n.concat([e]):null, Bi(4, 4, Ki.bind(null, t, e), n);
    } function Yi() {} function Xi(e, t) {
      const n=Oi(); t=void 0===t?null:t; const r=n.memoizedState; return null!==r&&null!==t&&Ei(t, r[1])?r[0]:(n.memoizedState=[e, t], e);
    } function Gi(e, t) {
      const n=Oi(); t=void 0===t?null:t; const r=n.memoizedState; return null!==r&&null!==t&&Ei(t, r[1])?r[0]:(e=e(), n.memoizedState=[e, t], e);
    } function Zi(e, t, n) {
      return 0==(21&hi)?(e.baseState&&(e.baseState=!1, wl=!0), e.memoizedState=n):(lr(n, t)||(n=mt(), mi.lanes|=n, Lu|=n, e.baseState=!0), t);
    } function Ji(e, t) {
      const n=bt; bt=0!==n&&4>n?n:4, e(!0); const r=pi.transition; pi.transition={}; try {
        e(!1), t();
      } finally {
        bt=n, pi.transition=r;
      }
    } function el() {
      return Oi().memoizedState;
    } function tl(e, t, n) {
      const r=ns(e); n={lane: r, action: n, hasEagerState: !1, eagerState: null, next: null}, rl(e)?ol(t, n):null!==(n=Ma(e, t, n, r))&&(rs(n, e, r, ts()), al(n, t, r));
    } function nl(e, t, n) {
      const r=ns(e); let o={lane: r, action: n, hasEagerState: !1, eagerState: null, next: null}; if (rl(e))ol(t, o); else {
        let a=e.alternate; if (0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer)) {
          try {
            const i=t.lastRenderedState; const l=a(i, n); if (o.hasEagerState=!0, o.eagerState=l, lr(l, i)) {
              const u=t.interleaved; return null===u?(o.next=o, Na(t)):(o.next=u.next, u.next=o), void(t.interleaved=o);
            }
          } catch (e) {}
        }null!==(n=Ma(e, t, o, r))&&(rs(n, e, r, o=ts()), al(n, t, r));
      }
    } function rl(e) {
      const t=e.alternate; return e===mi||null!==t&&t===mi;
    } function ol(e, t) {
      bi=vi=!0; const n=e.pending; null===n?t.next=t:(t.next=n.next, n.next=t), e.pending=t;
    } function al(e, t, n) {
      if (0!=(4194240&n)) {
        let r=t.lanes; n|=r&=e.pendingLanes, t.lanes=n, vt(e, n);
      }
    } var il={readContext: Ca, useCallback: xi, useContext: xi, useEffect: xi, useImperativeHandle: xi, useInsertionEffect: xi, useLayoutEffect: xi, useMemo: xi, useReducer: xi, useRef: xi, useState: xi, useDebugValue: xi, useDeferredValue: xi, useTransition: xi, useMutableSource: xi, useSyncExternalStore: xi, useId: xi, unstable_isNewReconciler: !1}; var ll={readContext: Ca, useCallback: function(e, t) {
      return Ci().memoizedState=[e, void 0===t?null:t], e;
    }, useContext: Ca, useEffect: $i, useImperativeHandle: function(e, t, n) {
      return n=null!=n?n.concat([e]):null, Ui(4194308, 4, Ki.bind(null, t, e), n);
    }, useLayoutEffect: function(e, t) {
      return Ui(4194308, 4, e, t);
    }, useInsertionEffect: function(e, t) {
      return Ui(4, 2, e, t);
    }, useMemo: function(e, t) {
      const n=Ci(); return t=void 0===t?null:t, e=e(), n.memoizedState=[e, t], e;
    }, useReducer: function(e, t, n) {
      const r=Ci(); return t=void 0!==n?n(t):t, r.memoizedState=r.baseState=t, e={pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t}, r.queue=e, e=e.dispatch=tl.bind(null, mi, e), [r.memoizedState, e];
    }, useRef: function(e) {
      return e={current: e}, Ci().memoizedState=e;
    }, useState: ji, useDebugValue: Yi, useDeferredValue: function(e) {
      return Ci().memoizedState=e;
    }, useTransition: function() {
      let e=ji(!1); const t=e[0]; return e=Ji.bind(null, e[1]), Ci().memoizedState=e, [t, e];
    }, useMutableSource: function() {}, useSyncExternalStore: function(e, t, n) {
      const r=mi; const o=Ci(); if (aa) {
        if (void 0===n) throw Error(a(407)); n=n();
      } else {
        if (n=t(), null===Pu) throw Error(a(349)); 0!=(30&hi)||Ai(r, t, n);
      }o.memoizedState=n; const i={value: n, getSnapshot: t}; return o.queue=i, $i(zi.bind(null, r, i, e), [e]), r.flags|=2048, Fi(9, Ii.bind(null, r, i, n, t), void 0, null), n;
    }, useId: function() {
      const e=Ci(); let t=Pu.identifierPrefix; if (aa) {
        var n=Zo; t=':'+t+'R'+(n=(Go&~(1<<32-it(Go)-1)).toString(32)+n), 0<(n=wi++)&&(t+='H'+n.toString(32)), t+=':';
      } else t=':'+t+'r'+(n=Si++).toString(32)+':'; return e.memoizedState=t;
    }, unstable_isNewReconciler: !1}; var ul={readContext: Ca, useCallback: Xi, useContext: Ca, useEffect: Hi, useImperativeHandle: Qi, useInsertionEffect: Wi, useLayoutEffect: Vi, useMemo: Gi, useReducer: Mi, useRef: qi, useState: function() {
      return Mi(Ni);
    }, useDebugValue: Yi, useDeferredValue: function(e) {
      return Zi(Oi(), gi.memoizedState, e);
    }, useTransition: function() {
      return [Mi(Ni)[0], Oi().memoizedState];
    }, useMutableSource: Ti, useSyncExternalStore: Ri, useId: el, unstable_isNewReconciler: !1}; var sl={readContext: Ca, useCallback: Xi, useContext: Ca, useEffect: Hi, useImperativeHandle: Qi, useInsertionEffect: Wi, useLayoutEffect: Vi, useMemo: Gi, useReducer: Pi, useRef: qi, useState: function() {
      return Pi(Ni);
    }, useDebugValue: Yi, useDeferredValue: function(e) {
      const t=Oi(); return null===gi?t.memoizedState=e:Zi(t, gi.memoizedState, e);
    }, useTransition: function() {
      return [Pi(Ni)[0], Oi().memoizedState];
    }, useMutableSource: Ti, useSyncExternalStore: Ri, useId: el, unstable_isNewReconciler: !1}; function cl(e, t) {
      try {
        let n=''; let r=t; do {
          n+=U(r), r=r.return;
        } while (r); var o=n;
      } catch (e) {
        o='\nError generating stack: '+e.message+'\n'+e.stack;
      } return {value: e, source: t, stack: o, digest: null};
    } function dl(e, t, n) {
      return {value: e, source: null, stack: null!=n?n:null, digest: null!=t?t:null};
    } function fl(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout((function() {
          throw e;
        }));
      }
    } const pl='function'==typeof WeakMap?WeakMap:Map; function hl(e, t, n) {
      (n=Ia(-1, n)).tag=3, n.payload={element: null}; const r=t.value; return n.callback=function() {
        Wu||(Wu=!0, Vu=r), fl(0, t);
      }, n;
    } function ml(e, t, n) {
      (n=Ia(-1, n)).tag=3; const r=e.type.getDerivedStateFromError; if ('function'==typeof r) {
        const o=t.value; n.payload=function() {
          return r(o);
        }, n.callback=function() {
          fl(0, t);
        };
      } const a=e.stateNode; return null!==a&&'function'==typeof a.componentDidCatch&&(n.callback=function() {
        fl(0, t), 'function'!=typeof r&&(null===Ku?Ku=new Set([this]):Ku.add(this)); const e=t.stack; this.componentDidCatch(t.value, {componentStack: null!==e?e:''});
      }), n;
    } function gl(e, t, n) {
      let r=e.pingCache; if (null===r) {
        r=e.pingCache=new pl; var o=new Set; r.set(t, o);
      } else void 0===(o=r.get(t))&&(o=new Set, r.set(t, o)); o.has(n)||(o.add(n), e=Cs.bind(null, e, t, n), t.then(e, e));
    } function yl(e) {
      do {
        var t; if ((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated), t) return e; e=e.return;
      } while (null!==e); return null;
    } function vl(e, t, n, r, o) {
      return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128, n.flags|=131072, n.flags&=-52805, 1===n.tag&&(null===n.alternate?n.tag=17:((t=Ia(-1, 1)).tag=2, za(n, t, 1))), n.lanes|=1), e):(e.flags|=65536, e.lanes=o, e);
    } const bl=w.ReactCurrentOwner; var wl=!1; function Sl(e, t, n, r) {
      t.child=null===e?Za(t, null, n, r):Ga(t, e.child, n, r);
    } function xl(e, t, n, r, o) {
      n=n.render; const a=t.ref; return ka(t, o), r=_i(e, t, n, r, a, o), n=ki(), null===e||wl?(aa&&n&&ta(t), t.flags|=1, Sl(e, t, r, o), t.child):(t.updateQueue=e.updateQueue, t.flags&=-2053, e.lanes&=~o, Wl(e, t, o));
    } function El(e, t, n, r, o) {
      if (null===e) {
        var a=n.type; return 'function'!=typeof a||As(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zs(n.type, null, r, t, t.mode, o)).ref=t.ref, e.return=t, t.child=e):(t.tag=15, t.type=a, _l(e, t, a, r, o));
      } if (a=e.child, 0==(e.lanes&o)) {
        const i=a.memoizedProps; if ((n=null!==(n=n.compare)?n:ur)(i, r)&&e.ref===t.ref) return Wl(e, t, o);
      } return t.flags|=1, (e=Is(a, r)).ref=t.ref, e.return=t, t.child=e;
    } function _l(e, t, n, r, o) {
      if (null!==e) {
        const a=e.memoizedProps; if (ur(a, r)&&e.ref===t.ref) {
          if (wl=!1, t.pendingProps=r=a, 0==(e.lanes&o)) return t.lanes=e.lanes, Wl(e, t, o); 0!=(131072&e.flags)&&(wl=!0);
        }
      } return Ol(e, t, n, r, o);
    } function kl(e, t, n) {
      let r=t.pendingProps; const o=r.children; const a=null!==e?e.memoizedState:null; if ('hidden'===r.mode) {
        if (0==(1&t.mode))t.memoizedState={baseLanes: 0, cachePool: null, transitions: null}, Oo(Iu, Au), Au|=n; else {
          if (0==(1073741824&n)) return e=null!==a?a.baseLanes|n:n, t.lanes=t.childLanes=1073741824, t.memoizedState={baseLanes: e, cachePool: null, transitions: null}, t.updateQueue=null, Oo(Iu, Au), Au|=e, null; t.memoizedState={baseLanes: 0, cachePool: null, transitions: null}, r=null!==a?a.baseLanes:n, Oo(Iu, Au), Au|=r;
        }
      } else null!==a?(r=a.baseLanes|n, t.memoizedState=null):r=n, Oo(Iu, Au), Au|=r; return Sl(e, t, o, n), t.child;
    } function Cl(e, t) {
      const n=t.ref; (null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512, t.flags|=2097152);
    } function Ol(e, t, n, r, o) {
      let a=Ao(n)?To:Mo.current; return a=Ro(t, a), ka(t, o), n=_i(e, t, n, r, a, o), r=ki(), null===e||wl?(aa&&r&&ta(t), t.flags|=1, Sl(e, t, n, o), t.child):(t.updateQueue=e.updateQueue, t.flags&=-2053, e.lanes&=~o, Wl(e, t, o));
    } function Nl(e, t, n, r, o) {
      if (Ao(n)) {
        var a=!0; Lo(t);
      } else a=!1; if (ka(t, o), null===t.stateNode)Hl(e, t), Ha(t, n, r), Va(t, n, r, o), r=!0; else if (null===e) {
        var i=t.stateNode; var l=t.memoizedProps; i.props=l; var u=i.context; var s=n.contextType; s='object'==typeof s&&null!==s?Ca(s):Ro(t, s=Ao(n)?To:Mo.current); var c=n.getDerivedStateFromProps; var d='function'==typeof c||'function'==typeof i.getSnapshotBeforeUpdate; d||'function'!=typeof i.UNSAFE_componentWillReceiveProps&&'function'!=typeof i.componentWillReceiveProps||(l!==r||u!==s)&&Wa(t, i, r, s), Ta=!1; var f=t.memoizedState; i.state=f, ja(t, r, i, o), u=t.memoizedState, l!==r||f!==u||Po.current||Ta?('function'==typeof c&&(Ua(t, n, c, r), u=t.memoizedState), (l=Ta||$a(t, n, l, r, f, u, s))?(d||'function'!=typeof i.UNSAFE_componentWillMount&&'function'!=typeof i.componentWillMount||('function'==typeof i.componentWillMount&&i.componentWillMount(), 'function'==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()), 'function'==typeof i.componentDidMount&&(t.flags|=4194308)):('function'==typeof i.componentDidMount&&(t.flags|=4194308), t.memoizedProps=r, t.memoizedState=u), i.props=r, i.state=u, i.context=s, r=l):('function'==typeof i.componentDidMount&&(t.flags|=4194308), r=!1);
      } else {
        i=t.stateNode, Aa(e, t), l=t.memoizedProps, s=t.type===t.elementType?l:ya(t.type, l), i.props=s, d=t.pendingProps, f=i.context, u='object'==typeof(u=n.contextType)&&null!==u?Ca(u):Ro(t, u=Ao(n)?To:Mo.current); const p=n.getDerivedStateFromProps; (c='function'==typeof p||'function'==typeof i.getSnapshotBeforeUpdate)||'function'!=typeof i.UNSAFE_componentWillReceiveProps&&'function'!=typeof i.componentWillReceiveProps||(l!==d||f!==u)&&Wa(t, i, r, u), Ta=!1, f=t.memoizedState, i.state=f, ja(t, r, i, o); let h=t.memoizedState; l!==d||f!==h||Po.current||Ta?('function'==typeof p&&(Ua(t, n, p, r), h=t.memoizedState), (s=Ta||$a(t, n, s, r, f, h, u)||!1)?(c||'function'!=typeof i.UNSAFE_componentWillUpdate&&'function'!=typeof i.componentWillUpdate||('function'==typeof i.componentWillUpdate&&i.componentWillUpdate(r, h, u), 'function'==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r, h, u)), 'function'==typeof i.componentDidUpdate&&(t.flags|=4), 'function'==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):('function'!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4), 'function'!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024), t.memoizedProps=r, t.memoizedState=h), i.props=r, i.state=h, i.context=u, r=s):('function'!=typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4), 'function'!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024), r=!1);
      } return Ml(e, t, n, r, a, o);
    } function Ml(e, t, n, r, o, a) {
      Cl(e, t); const i=0!=(128&t.flags); if (!r&&!i) return o&&jo(t, n, !1), Wl(e, t, a); r=t.stateNode, bl.current=t; const l=i&&'function'!=typeof n.getDerivedStateFromError?null:r.render(); return t.flags|=1, null!==e&&i?(t.child=Ga(t, e.child, null, a), t.child=Ga(t, null, l, a)):Sl(e, t, l, a), t.memoizedState=r.state, o&&jo(t, n, !0), t.child;
    } function Pl(e) {
      const t=e.stateNode; t.pendingContext?zo(0, t.pendingContext, t.pendingContext!==t.context):t.context&&zo(0, t.context, !1), oi(e, t.containerInfo);
    } function Tl(e, t, n, r, o) {
      return ha(), ma(o), t.flags|=256, Sl(e, t, n, r), t.child;
    } let Rl; let Al; let Il; let zl; const Dl={dehydrated: null, treeContext: null, retryLane: 0}; function Ll(e) {
      return {baseLanes: e, cachePool: null, transitions: null};
    } function jl(e, t, n) {
      let r; let o=t.pendingProps; let i=ui.current; let l=!1; let u=0!=(128&t.flags); if ((r=u)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)), r?(l=!0, t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1), Oo(ui, 1&i), null===e) return ca(t), null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:'$!'===e.data?t.lanes=8:t.lanes=1073741824, null):(u=o.children, e=o.fallback, l?(o=t.mode, l=t.child, u={mode: 'hidden', children: u}, 0==(1&o)&&null!==l?(l.childLanes=0, l.pendingProps=u):l=Ls(u, o, 0, null), e=Ds(e, o, n, null), l.return=t, e.return=t, l.sibling=e, t.child=l, t.child.memoizedState=Ll(n), t.memoizedState=Dl, e):Fl(t, u)); if (null!==(i=e.memoizedState)&&null!==(r=i.dehydrated)) {
        return function(e, t, n, r, o, i, l) {
          if (n) return 256&t.flags?(t.flags&=-257, ql(e, t, l, r=dl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child, t.flags|=128, null):(i=r.fallback, o=t.mode, r=Ls({mode: 'visible', children: r.children}, o, 0, null), (i=Ds(i, o, l, null)).flags|=2, r.return=t, i.return=t, r.sibling=i, t.child=r, 0!=(1&t.mode)&&Ga(t, e.child, null, l), t.child.memoizedState=Ll(l), t.memoizedState=Dl, i); if (0==(1&t.mode)) return ql(e, t, l, null); if ('$!'===o.data) {
            if (r=o.nextSibling&&o.nextSibling.dataset) var u=r.dgst; return r=u, ql(e, t, l, r=dl(i=Error(a(419)), r, void 0));
          } if (u=0!=(l&e.childLanes), wl||u) {
            if (null!==(r=Pu)) {
              switch (l&-l) {
                case 4: o=2; break; case 16: o=8; break; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: o=32; break; case 536870912: o=268435456; break; default: o=0;
              }0!==(o=0!=(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o, Pa(e, o), rs(r, e, o, -1));
            } return gs(), ql(e, t, l, r=dl(Error(a(421))));
          } return '$?'===o.data?(t.flags|=128, t.child=e.child, t=Ns.bind(null, e), o._reactRetry=t, null):(e=i.treeContext, oa=so(o.nextSibling), ra=t, aa=!0, ia=null, null!==e&&(Qo[Yo++]=Go, Qo[Yo++]=Zo, Qo[Yo++]=Xo, Go=e.id, Zo=e.overflow, Xo=t), (t=Fl(t, r.children)).flags|=4096, t);
        }(e, t, u, o, r, i, n);
      } if (l) {
        l=o.fallback, u=t.mode, r=(i=e.child).sibling; const s={mode: 'hidden', children: o.children}; return 0==(1&u)&&t.child!==i?((o=t.child).childLanes=0, o.pendingProps=s, t.deletions=null):(o=Is(i, s)).subtreeFlags=14680064&i.subtreeFlags, null!==r?l=Is(r, l):(l=Ds(l, u, n, null)).flags|=2, l.return=t, o.return=t, o.sibling=l, t.child=o, o=l, l=t.child, u=null===(u=e.child.memoizedState)?Ll(n):{baseLanes: u.baseLanes|n, cachePool: null, transitions: u.transitions}, l.memoizedState=u, l.childLanes=e.childLanes&~n, t.memoizedState=Dl, o;
      } return e=(l=e.child).sibling, o=Is(l, {mode: 'visible', children: o.children}), 0==(1&t.mode)&&(o.lanes=n), o.return=t, o.sibling=null, null!==e&&(null===(n=t.deletions)?(t.deletions=[e], t.flags|=16):n.push(e)), t.child=o, t.memoizedState=null, o;
    } function Fl(e, t) {
      return (t=Ls({mode: 'visible', children: t}, e.mode, 0, null)).return=e, e.child=t;
    } function ql(e, t, n, r) {
      return null!==r&&ma(r), Ga(t, e.child, null, n), (e=Fl(t, t.pendingProps.children)).flags|=2, t.memoizedState=null, e;
    } function Ul(e, t, n) {
      e.lanes|=t; const r=e.alternate; null!==r&&(r.lanes|=t), _a(e.return, t, n);
    } function Bl(e, t, n, r, o) {
      const a=e.memoizedState; null===a?e.memoizedState={isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o}:(a.isBackwards=t, a.rendering=null, a.renderingStartTime=0, a.last=r, a.tail=n, a.tailMode=o);
    } function $l(e, t, n) {
      let r=t.pendingProps; let o=r.revealOrder; const a=r.tail; if (Sl(e, t, r.children, n), 0!=(2&(r=ui.current)))r=1&r|2, t.flags|=128; else {
        if (null!==e&&0!=(128&e.flags)) {
          e:for (e=t.child; null!==e;) {
            if (13===e.tag)null!==e.memoizedState&&Ul(e, n, t); else if (19===e.tag)Ul(e, n, t); else if (null!==e.child) {
              e.child.return=e, e=e.child; continue;
            } if (e===t) break e; for (;null===e.sibling;) {
              if (null===e.return||e.return===t) break e; e=e.return;
            }e.sibling.return=e.return, e=e.sibling;
          }
        }r&=1;
      } if (Oo(ui, r), 0==(1&t.mode))t.memoizedState=null; else {
        switch (o) {
          case 'forwards': for (n=t.child, o=null; null!==n;)null!==(e=n.alternate)&&null===si(e)&&(o=n), n=n.sibling; null===(n=o)?(o=t.child, t.child=null):(o=n.sibling, n.sibling=null), Bl(t, !1, o, n, a); break; case 'backwards': for (n=null, o=t.child, t.child=null; null!==o;) {
            if (null!==(e=o.alternate)&&null===si(e)) {
              t.child=o; break;
            }e=o.sibling, o.sibling=n, n=o, o=e;
          }Bl(t, !0, n, null, a); break; case 'together': Bl(t, !1, null, null, void 0); break; default: t.memoizedState=null;
        }
      } return t.child;
    } function Hl(e, t) {
      0==(1&t.mode)&&null!==e&&(e.alternate=null, t.alternate=null, t.flags|=2);
    } function Wl(e, t, n) {
      if (null!==e&&(t.dependencies=e.dependencies), Lu|=t.lanes, 0==(n&t.childLanes)) return null; if (null!==e&&t.child!==e.child) throw Error(a(153)); if (null!==t.child) {
        for (n=Is(e=t.child, e.pendingProps), t.child=n, n.return=t; null!==e.sibling;)e=e.sibling, (n=n.sibling=Is(e, e.pendingProps)).return=t; n.sibling=null;
      } return t.child;
    } function Vl(e, t) {
      if (!aa) {
        switch (e.tailMode) {
          case 'hidden': t=e.tail; for (var n=null; null!==t;)null!==t.alternate&&(n=t), t=t.sibling; null===n?e.tail=null:n.sibling=null; break; case 'collapsed': n=e.tail; for (var r=null; null!==n;)null!==n.alternate&&(r=n), n=n.sibling; null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null;
        }
      }
    } function Kl(e) {
      const t=null!==e.alternate&&e.alternate.child===e.child; let n=0; let r=0; if (t) for (var o=e.child; null!==o;)n|=o.lanes|o.childLanes, r|=14680064&o.subtreeFlags, r|=14680064&o.flags, o.return=e, o=o.sibling; else for (o=e.child; null!==o;)n|=o.lanes|o.childLanes, r|=o.subtreeFlags, r|=o.flags, o.return=e, o=o.sibling; return e.subtreeFlags|=r, e.childLanes=n, t;
    } function Ql(e, t, n) {
      let r=t.pendingProps; switch (na(t), t.tag) {
        case 2: case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return Kl(t), null; case 1: case 17: return Ao(t.type)&&Io(), Kl(t), null; case 3: return r=t.stateNode, ai(), Co(Po), Co(Mo), di(), r.pendingContext&&(r.context=r.pendingContext, r.pendingContext=null), null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024, null!==ia&&(ls(ia), ia=null))), Al(e, t), Kl(t), null; case 5: li(t); var o=ri(ni.current); if (n=t.type, null!==e&&null!=t.stateNode)Il(e, t, n, r, o), e.ref!==t.ref&&(t.flags|=512, t.flags|=2097152); else {
          if (!r) {
            if (null===t.stateNode) throw Error(a(166)); return Kl(t), null;
          } if (e=ri(ei.current), fa(t)) {
            r=t.stateNode, n=t.type; var i=t.memoizedProps; switch (r[po]=t, r[ho]=i, e=0!=(1&t.mode), n) {
              case 'dialog': Fr('cancel', r), Fr('close', r); break; case 'iframe': case 'object': case 'embed': Fr('load', r); break; case 'video': case 'audio': for (o=0; o<zr.length; o++)Fr(zr[o], r); break; case 'source': Fr('error', r); break; case 'img': case 'image': case 'link': Fr('error', r), Fr('load', r); break; case 'details': Fr('toggle', r); break; case 'input': X(r, i), Fr('invalid', r); break; case 'select': r._wrapperState={wasMultiple: !!i.multiple}, Fr('invalid', r); break; case 'textarea': oe(r, i), Fr('invalid', r);
            } for (var u in ve(n, i), o=null, i) {
              if (i.hasOwnProperty(u)) {
                var s=i[u]; 'children'===u?'string'==typeof s?r.textContent!==s&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent, s, e), o=['children', s]):'number'==typeof s&&r.textContent!==''+s&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent, s, e), o=['children', ''+s]):l.hasOwnProperty(u)&&null!=s&&'onScroll'===u&&Fr('scroll', r);
              }
            } switch (n) {
              case 'input': V(r), J(r, i, !0); break; case 'textarea': V(r), ie(r); break; case 'select': case 'option': break; default: 'function'==typeof i.onClick&&(r.onclick=Jr);
            }r=o, t.updateQueue=r, null!==r&&(t.flags|=4);
          } else {
            u=9===o.nodeType?o:o.ownerDocument, 'http://www.w3.org/1999/xhtml'===e&&(e=le(n)), 'http://www.w3.org/1999/xhtml'===e?'script'===n?((e=u.createElement('div')).innerHTML='<script><\/script>', e=e.removeChild(e.firstChild)):'string'==typeof r.is?e=u.createElement(n, {is: r.is}):(e=u.createElement(n), 'select'===n&&(u=e, r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e, n), e[po]=t, e[ho]=r, Rl(e, t, !1, !1), t.stateNode=e; e: {
              switch (u=be(n, r), n) {
                case 'dialog': Fr('cancel', e), Fr('close', e), o=r; break; case 'iframe': case 'object': case 'embed': Fr('load', e), o=r; break; case 'video': case 'audio': for (o=0; o<zr.length; o++)Fr(zr[o], e); o=r; break; case 'source': Fr('error', e), o=r; break; case 'img': case 'image': case 'link': Fr('error', e), Fr('load', e), o=r; break; case 'details': Fr('toggle', e), o=r; break; case 'input': X(e, r), o=Y(e, r), Fr('invalid', e); break; case 'option': default: o=r; break; case 'select': e._wrapperState={wasMultiple: !!r.multiple}, o=L({}, r, {value: void 0}), Fr('invalid', e); break; case 'textarea': oe(e, r), o=re(e, r), Fr('invalid', e);
              } for (i in ve(n, o), s=o) {
                if (s.hasOwnProperty(i)) {
                  let c=s[i]; 'style'===i?ge(e, c):'dangerouslySetInnerHTML'===i?null!=(c=c?c.__html:void 0)&&de(e, c):'children'===i?'string'==typeof c?('textarea'!==n||''!==c)&&fe(e, c):'number'==typeof c&&fe(e, ''+c):'suppressContentEditableWarning'!==i&&'suppressHydrationWarning'!==i&&'autoFocus'!==i&&(l.hasOwnProperty(i)?null!=c&&'onScroll'===i&&Fr('scroll', e):null!=c&&b(e, i, c, u));
                }
              } switch (n) {
                case 'input': V(e), J(e, r, !1); break; case 'textarea': V(e), ie(e); break; case 'option': null!=r.value&&e.setAttribute('value', ''+H(r.value)); break; case 'select': e.multiple=!!r.multiple, null!=(i=r.value)?ne(e, !!r.multiple, i, !1):null!=r.defaultValue&&ne(e, !!r.multiple, r.defaultValue, !0); break; default: 'function'==typeof o.onClick&&(e.onclick=Jr);
              } switch (n) {
                case 'button': case 'input': case 'select': case 'textarea': r=!!r.autoFocus; break e; case 'img': r=!0; break e; default: r=!1;
              }
            }r&&(t.flags|=4);
          }null!==t.ref&&(t.flags|=512, t.flags|=2097152);
        } return Kl(t), null; case 6: if (e&&null!=t.stateNode)zl(e, t, e.memoizedProps, r); else {
          if ('string'!=typeof r&&null===t.stateNode) throw Error(a(166)); if (n=ri(ni.current), ri(ei.current), fa(t)) {
            if (r=t.stateNode, n=t.memoizedProps, r[po]=t, (i=r.nodeValue!==n)&&null!==(e=ra)) {
              switch (e.tag) {
                case 3: Zr(r.nodeValue, n, 0!=(1&e.mode)); break; case 5: !0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue, n, 0!=(1&e.mode));
              }
            }i&&(t.flags|=4);
          } else (r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t, t.stateNode=r;
        } return Kl(t), null; case 13: if (Co(ui), r=t.memoizedState, null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated) {
          if (aa&&null!==oa&&0!=(1&t.mode)&&0==(128&t.flags))pa(), ha(), t.flags|=98560, i=!1; else if (i=fa(t), null!==r&&null!==r.dehydrated) {
            if (null===e) {
              if (!i) throw Error(a(318)); if (!(i=null!==(i=t.memoizedState)?i.dehydrated:null)) throw Error(a(317)); i[po]=t;
            } else ha(), 0==(128&t.flags)&&(t.memoizedState=null), t.flags|=4; Kl(t), i=!1;
          } else null!==ia&&(ls(ia), ia=null), i=!0; if (!i) return 65536&t.flags?t:null;
        } return 0!=(128&t.flags)?(t.lanes=n, t):((r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192, 0!=(1&t.mode)&&(null===e||0!=(1&ui.current)?0===zu&&(zu=3):gs())), null!==t.updateQueue&&(t.flags|=4), Kl(t), null); case 4: return ai(), Al(e, t), null===e&&Br(t.stateNode.containerInfo), Kl(t), null; case 10: return Ea(t.type._context), Kl(t), null; case 19: if (Co(ui), null===(i=t.memoizedState)) return Kl(t), null; if (r=0!=(128&t.flags), null===(u=i.rendering)) {
          if (r)Vl(i, !1); else {
            if (0!==zu||null!==e&&0!=(128&e.flags)) {
              for (e=t.child; null!==e;) {
                if (null!==(u=si(e))) {
                  for (t.flags|=128, Vl(i, !1), null!==(r=u.updateQueue)&&(t.updateQueue=r, t.flags|=4), t.subtreeFlags=0, r=n, n=t.child; null!==n;)e=r, (i=n).flags&=14680066, null===(u=i.alternate)?(i.childLanes=0, i.lanes=e, i.child=null, i.subtreeFlags=0, i.memoizedProps=null, i.memoizedState=null, i.updateQueue=null, i.dependencies=null, i.stateNode=null):(i.childLanes=u.childLanes, i.lanes=u.lanes, i.child=u.child, i.subtreeFlags=0, i.deletions=null, i.memoizedProps=u.memoizedProps, i.memoizedState=u.memoizedState, i.updateQueue=u.updateQueue, i.type=u.type, e=u.dependencies, i.dependencies=null===e?null:{lanes: e.lanes, firstContext: e.firstContext}), n=n.sibling; return Oo(ui, 1&ui.current|2), t.child;
                }e=e.sibling;
              }
            }null!==i.tail&&Ge()>$u&&(t.flags|=128, r=!0, Vl(i, !1), t.lanes=4194304);
          }
        } else {
          if (!r) {
            if (null!==(e=si(u))) {
              if (t.flags|=128, r=!0, null!==(n=e.updateQueue)&&(t.updateQueue=n, t.flags|=4), Vl(i, !0), null===i.tail&&'hidden'===i.tailMode&&!u.alternate&&!aa) return Kl(t), null;
            } else 2*Ge()-i.renderingStartTime>$u&&1073741824!==n&&(t.flags|=128, r=!0, Vl(i, !1), t.lanes=4194304);
          } i.isBackwards?(u.sibling=t.child, t.child=u):(null!==(n=i.last)?n.sibling=u:t.child=u, i.last=u);
        } return null!==i.tail?(t=i.tail, i.rendering=t, i.tail=t.sibling, i.renderingStartTime=Ge(), t.sibling=null, n=ui.current, Oo(ui, r?1&n|2:1&n), t):(Kl(t), null); case 22: case 23: return fs(), r=null!==t.memoizedState, null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192), r&&0!=(1&t.mode)?0!=(1073741824&Au)&&(Kl(t), 6&t.subtreeFlags&&(t.flags|=8192)):Kl(t), null; case 24: case 25: return null;
      } throw Error(a(156, t.tag));
    } function Yl(e, t) {
      switch (na(t), t.tag) {
        case 1: return Ao(t.type)&&Io(), 65536&(e=t.flags)?(t.flags=-65537&e|128, t):null; case 3: return ai(), Co(Po), Co(Mo), di(), 0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128, t):null; case 5: return li(t), null; case 13: if (Co(ui), null!==(e=t.memoizedState)&&null!==e.dehydrated) {
          if (null===t.alternate) throw Error(a(340)); ha();
        } return 65536&(e=t.flags)?(t.flags=-65537&e|128, t):null; case 19: return Co(ui), null; case 4: return ai(), null; case 10: return Ea(t.type._context), null; case 22: case 23: return fs(), null; default: return null;
      }
    }Rl=function(e, t) {
      for (let n=t.child; null!==n;) {
        if (5===n.tag||6===n.tag)e.appendChild(n.stateNode); else if (4!==n.tag&&null!==n.child) {
          n.child.return=n, n=n.child; continue;
        } if (n===t) break; for (;null===n.sibling;) {
          if (null===n.return||n.return===t) return; n=n.return;
        }n.sibling.return=n.return, n=n.sibling;
      }
    }, Al=function() {}, Il=function(e, t, n, r) {
      let o=e.memoizedProps; if (o!==r) {
        e=t.stateNode, ri(ei.current); let a; let i=null; switch (n) {
          case 'input': o=Y(e, o), r=Y(e, r), i=[]; break; case 'select': o=L({}, o, {value: void 0}), r=L({}, r, {value: void 0}), i=[]; break; case 'textarea': o=re(e, o), r=re(e, r), i=[]; break; default: 'function'!=typeof o.onClick&&'function'==typeof r.onClick&&(e.onclick=Jr);
        } for (c in ve(n, r), n=null, o) {
          if (!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c]) {
            if ('style'===c) {
              var u=o[c]; for (a in u)u.hasOwnProperty(a)&&(n||(n={}), n[a]='');
            } else 'dangerouslySetInnerHTML'!==c&&'children'!==c&&'suppressContentEditableWarning'!==c&&'suppressHydrationWarning'!==c&&'autoFocus'!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c, null));
          }
        } for (c in r) {
          let s=r[c]; if (u=null!=o?o[c]:void 0, r.hasOwnProperty(c)&&s!==u&&(null!=s||null!=u)) {
            if ('style'===c) {
              if (u) {
                for (a in u)!u.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}), n[a]=''); for (a in s)s.hasOwnProperty(a)&&u[a]!==s[a]&&(n||(n={}), n[a]=s[a]);
              } else n||(i||(i=[]), i.push(c, n)), n=s;
            } else 'dangerouslySetInnerHTML'===c?(s=s?s.__html:void 0, u=u?u.__html:void 0, null!=s&&u!==s&&(i=i||[]).push(c, s)):'children'===c?'string'!=typeof s&&'number'!=typeof s||(i=i||[]).push(c, ''+s):'suppressContentEditableWarning'!==c&&'suppressHydrationWarning'!==c&&(l.hasOwnProperty(c)?(null!=s&&'onScroll'===c&&Fr('scroll', e), i||u===s||(i=[])):(i=i||[]).push(c, s));
          }
        }n&&(i=i||[]).push('style', n); var c=i; (t.updateQueue=c)&&(t.flags|=4);
      }
    }, zl=function(e, t, n, r) {
      n!==r&&(t.flags|=4);
    }; let Xl=!1; let Gl=!1; const Zl='function'==typeof WeakSet?WeakSet:Set; let Jl=null; function eu(e, t) {
      const n=e.ref; if (null!==n) {
        if ('function'==typeof n) {
          try {
            n(null);
          } catch (n) {
            ks(e, t, n);
          }
        } else n.current=null;
      }
    } function tu(e, t, n) {
      try {
        n();
      } catch (n) {
        ks(e, t, n);
      }
    } let nu=!1; function ru(e, t, n) {
      let r=t.updateQueue; if (null!==(r=null!==r?r.lastEffect:null)) {
        let o=r=r.next; do {
          if ((o.tag&e)===e) {
            const a=o.destroy; o.destroy=void 0, void 0!==a&&tu(t, n, a);
          }o=o.next;
        } while (o!==r);
      }
    } function ou(e, t) {
      if (null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)) {
        let n=t=t.next; do {
          if ((n.tag&e)===e) {
            const r=n.create; n.destroy=r();
          }n=n.next;
        } while (n!==t);
      }
    } function au(e) {
      const t=e.ref; if (null!==t) {
        const n=e.stateNode; e.tag, e=n, 'function'==typeof t?t(e):t.current=e;
      }
    } function iu(e) {
      let t=e.alternate; null!==t&&(e.alternate=null, iu(t)), e.child=null, e.deletions=null, e.sibling=null, 5===e.tag&&null!==(t=e.stateNode)&&(delete t[po], delete t[ho], delete t[go], delete t[yo], delete t[vo]), e.stateNode=null, e.return=null, e.dependencies=null, e.memoizedProps=null, e.memoizedState=null, e.pendingProps=null, e.stateNode=null, e.updateQueue=null;
    } function lu(e) {
      return 5===e.tag||3===e.tag||4===e.tag;
    } function uu(e) {
      e:for (;;) {
        for (;null===e.sibling;) {
          if (null===e.return||lu(e.return)) return null; e=e.return;
        } for (e.sibling.return=e.return, e=e.sibling; 5!==e.tag&&6!==e.tag&&18!==e.tag;) {
          if (2&e.flags) continue e; if (null===e.child||4===e.tag) continue e; e.child.return=e, e=e.child;
        } if (!(2&e.flags)) return e.stateNode;
      }
    } function su(e, t, n) {
      const r=e.tag; if (5===r||6===r)e=e.stateNode, t?8===n.nodeType?n.parentNode.insertBefore(e, t):n.insertBefore(e, t):(8===n.nodeType?(t=n.parentNode).insertBefore(e, n):(t=n).appendChild(e), null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Jr)); else if (4!==r&&null!==(e=e.child)) for (su(e, t, n), e=e.sibling; null!==e;)su(e, t, n), e=e.sibling;
    } function cu(e, t, n) {
      const r=e.tag; if (5===r||6===r)e=e.stateNode, t?n.insertBefore(e, t):n.appendChild(e); else if (4!==r&&null!==(e=e.child)) for (cu(e, t, n), e=e.sibling; null!==e;)cu(e, t, n), e=e.sibling;
    } let du=null; let fu=!1; function pu(e, t, n) {
      for (n=n.child; null!==n;)hu(e, t, n), n=n.sibling;
    } function hu(e, t, n) {
      if (at&&'function'==typeof at.onCommitFiberUnmount) {
        try {
          at.onCommitFiberUnmount(ot, n);
        } catch (e) {}
      } switch (n.tag) {
        case 5: Gl||eu(n, t); case 6: var r=du; var o=fu; du=null, pu(e, t, n), fu=o, null!==(du=r)&&(fu?(e=du, n=n.stateNode, 8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):du.removeChild(n.stateNode)); break; case 18: null!==du&&(fu?(e=du, n=n.stateNode, 8===e.nodeType?uo(e.parentNode, n):1===e.nodeType&&uo(e, n), Bt(e)):uo(du, n.stateNode)); break; case 4: r=du, o=fu, du=n.stateNode.containerInfo, fu=!0, pu(e, t, n), du=r, fu=o; break; case 0: case 11: case 14: case 15: if (!Gl&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)) {
          o=r=r.next; do {
            let a=o; const i=a.destroy; a=a.tag, void 0!==i&&(0!=(2&a)||0!=(4&a))&&tu(n, t, i), o=o.next;
          } while (o!==r);
        }pu(e, t, n); break; case 1: if (!Gl&&(eu(n, t), 'function'==typeof(r=n.stateNode).componentWillUnmount)) {
          try {
            r.props=n.memoizedProps, r.state=n.memoizedState, r.componentWillUnmount();
          } catch (e) {
            ks(n, t, e);
          }
        }pu(e, t, n); break; case 21: pu(e, t, n); break; case 22: 1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState, pu(e, t, n), Gl=r):pu(e, t, n); break; default: pu(e, t, n);
      }
    } function mu(e) {
      const t=e.updateQueue; if (null!==t) {
        e.updateQueue=null; let n=e.stateNode; null===n&&(n=e.stateNode=new Zl), t.forEach((function(t) {
          const r=Ms.bind(null, e, t); n.has(t)||(n.add(t), t.then(r, r));
        }));
      }
    } function gu(e, t) {
      const n=t.deletions; if (null!==n) {
        for (let r=0; r<n.length; r++) {
          const o=n[r]; try {
            const i=e; const l=t; let u=l; e:for (;null!==u;) {
              switch (u.tag) {
                case 5: du=u.stateNode, fu=!1; break e; case 3: case 4: du=u.stateNode.containerInfo, fu=!0; break e;
              }u=u.return;
            } if (null===du) throw Error(a(160)); hu(i, l, o), du=null, fu=!1; const s=o.alternate; null!==s&&(s.return=null), o.return=null;
          } catch (e) {
            ks(o, t, e);
          }
        }
      } if (12854&t.subtreeFlags) for (t=t.child; null!==t;)yu(t, e), t=t.sibling;
    } function yu(e, t) {
      let n=e.alternate; let r=e.flags; switch (e.tag) {
        case 0: case 11: case 14: case 15: if (gu(t, e), vu(e), 4&r) {
          try {
            ru(3, e, e.return), ou(3, e);
          } catch (t) {
            ks(e, e.return, t);
          } try {
            ru(5, e, e.return);
          } catch (t) {
            ks(e, e.return, t);
          }
        } break; case 1: gu(t, e), vu(e), 512&r&&null!==n&&eu(n, n.return); break; case 5: if (gu(t, e), vu(e), 512&r&&null!==n&&eu(n, n.return), 32&e.flags) {
          var o=e.stateNode; try {
            fe(o, '');
          } catch (t) {
            ks(e, e.return, t);
          }
        } if (4&r&&null!=(o=e.stateNode)) {
            var i=e.memoizedProps; var l=null!==n?n.memoizedProps:i; var u=e.type; var s=e.updateQueue; if (e.updateQueue=null, null!==s) {
              try {
                'input'===u&&'radio'===i.type&&null!=i.name&&G(o, i), be(u, l); var c=be(u, i); for (l=0; l<s.length; l+=2) {
                  var d=s[l]; var f=s[l+1]; 'style'===d?ge(o, f):'dangerouslySetInnerHTML'===d?de(o, f):'children'===d?fe(o, f):b(o, d, f, c);
                } switch (u) {
                  case 'input': Z(o, i); break; case 'textarea': ae(o, i); break; case 'select': var p=o._wrapperState.wasMultiple; o._wrapperState.wasMultiple=!!i.multiple; var h=i.value; null!=h?ne(o, !!i.multiple, h, !1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o, !!i.multiple, i.defaultValue, !0):ne(o, !!i.multiple, i.multiple?[]:'', !1));
                }o[ho]=i;
              } catch (t) {
                ks(e, e.return, t);
              }
            }
          } break; case 6: if (gu(t, e), vu(e), 4&r) {
          if (null===e.stateNode) throw Error(a(162)); o=e.stateNode, i=e.memoizedProps; try {
            o.nodeValue=i;
          } catch (t) {
            ks(e, e.return, t);
          }
        } break; case 3: if (gu(t, e), vu(e), 4&r&&null!==n&&n.memoizedState.isDehydrated) {
          try {
            Bt(t.containerInfo);
          } catch (t) {
            ks(e, e.return, t);
          }
        } break; case 4: default: gu(t, e), vu(e); break; case 13: gu(t, e), vu(e), 8192&(o=e.child).flags&&(i=null!==o.memoizedState, o.stateNode.isHidden=i, !i||null!==o.alternate&&null!==o.alternate.memoizedState||(Bu=Ge())), 4&r&&mu(e); break; case 22: if (d=null!==n&&null!==n.memoizedState, 1&e.mode?(Gl=(c=Gl)||d, gu(t, e), Gl=c):gu(t, e), vu(e), 8192&r) {
          if (c=null!==e.memoizedState, (e.stateNode.isHidden=c)&&!d&&0!=(1&e.mode)) {
            for (Jl=e, d=e.child; null!==d;) {
              for (f=Jl=d; null!==Jl;) {
                switch (h=(p=Jl).child, p.tag) {
                  case 0: case 11: case 14: case 15: ru(4, p, p.return); break; case 1: eu(p, p.return); var m=p.stateNode; if ('function'==typeof m.componentWillUnmount) {
                    r=p, n=p.return; try {
                      t=r, m.props=t.memoizedProps, m.state=t.memoizedState, m.componentWillUnmount();
                    } catch (e) {
                      ks(r, n, e);
                    }
                  } break; case 5: eu(p, p.return); break; case 22: if (null!==p.memoizedState) {
                    xu(f); continue;
                  }
                }null!==h?(h.return=p, Jl=h):xu(f);
              }d=d.sibling;
            }
          }e:for (d=null, f=e; ;) {
            if (5===f.tag) {
              if (null===d) {
                d=f; try {
                  o=f.stateNode, c?'function'==typeof(i=o.style).setProperty?i.setProperty('display', 'none', 'important'):i.display='none':(u=f.stateNode, l=null!=(s=f.memoizedProps.style)&&s.hasOwnProperty('display')?s.display:null, u.style.display=me('display', l));
                } catch (t) {
                  ks(e, e.return, t);
                }
              }
            } else if (6===f.tag) {
              if (null===d) {
                try {
                  f.stateNode.nodeValue=c?'':f.memoizedProps;
                } catch (t) {
                  ks(e, e.return, t);
                }
              }
            } else if ((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child) {
              f.child.return=f, f=f.child; continue;
            } if (f===e) break e; for (;null===f.sibling;) {
              if (null===f.return||f.return===e) break e; d===f&&(d=null), f=f.return;
            }d===f&&(d=null), f.sibling.return=f.return, f=f.sibling;
          }
        } break; case 19: gu(t, e), vu(e), 4&r&&mu(e); case 21:
      }
    } function vu(e) {
      const t=e.flags; if (2&t) {
        try {
          e: {
            for (let n=e.return; null!==n;) {
              if (lu(n)) {
                var r=n; break e;
              }n=n.return;
            } throw Error(a(160));
          } switch (r.tag) {
            case 5: var o=r.stateNode; 32&r.flags&&(fe(o, ''), r.flags&=-33), cu(e, uu(e), o); break; case 3: case 4: var i=r.stateNode.containerInfo; su(e, uu(e), i); break; default: throw Error(a(161));
          }
        } catch (t) {
          ks(e, e.return, t);
        }e.flags&=-3;
      }4096&t&&(e.flags&=-4097);
    } function bu(e, t, n) {
      Jl=e, wu(e, t, n);
    } function wu(e, t, n) {
      for (let r=0!=(1&e.mode); null!==Jl;) {
        const o=Jl; let a=o.child; if (22===o.tag&&r) {
          let i=null!==o.memoizedState||Xl; if (!i) {
            let l=o.alternate; let u=null!==l&&null!==l.memoizedState||Gl; l=Xl; const s=Gl; if (Xl=i, (Gl=u)&&!s) for (Jl=o; null!==Jl;)u=(i=Jl).child, 22===i.tag&&null!==i.memoizedState?Eu(o):null!==u?(u.return=i, Jl=u):Eu(o); for (;null!==a;)Jl=a, wu(a, t, n), a=a.sibling; Jl=o, Xl=l, Gl=s;
          }Su(e);
        } else 0!=(8772&o.subtreeFlags)&&null!==a?(a.return=o, Jl=a):Su(e);
      }
    } function Su(e) {
      for (;null!==Jl;) {
        const t=Jl; if (0!=(8772&t.flags)) {
          var n=t.alternate; try {
            if (0!=(8772&t.flags)) {
              switch (t.tag) {
                case 0: case 11: case 15: Gl||ou(5, t); break; case 1: var r=t.stateNode; if (4&t.flags&&!Gl) {
                  if (null===n)r.componentDidMount(); else {
                    const o=t.elementType===t.type?n.memoizedProps:ya(t.type, n.memoizedProps); r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                } var i=t.updateQueue; null!==i&&Fa(t, i, r); break; case 3: var l=t.updateQueue; if (null!==l) {
                  if (n=null, null!==t.child) {
                    switch (t.child.tag) {
                      case 5: case 1: n=t.child.stateNode;
                    }
                  }Fa(t, l, n);
                } break; case 5: var u=t.stateNode; if (null===n&&4&t.flags) {
                  n=u; const s=t.memoizedProps; switch (t.type) {
                    case 'button': case 'input': case 'select': case 'textarea': s.autoFocus&&n.focus(); break; case 'img': s.src&&(n.src=s.src);
                  }
                } break; case 6: case 4: case 12: case 19: case 17: case 21: case 22: case 23: case 25: break; case 13: if (null===t.memoizedState) {
                  const c=t.alternate; if (null!==c) {
                    const d=c.memoizedState; if (null!==d) {
                      const f=d.dehydrated; null!==f&&Bt(f);
                    }
                  }
                } break; default: throw Error(a(163));
              }
            }Gl||512&t.flags&&au(t);
          } catch (e) {
            ks(t, t.return, e);
          }
        } if (t===e) {
          Jl=null; break;
        } if (null!==(n=t.sibling)) {
          n.return=t.return, Jl=n; break;
        }Jl=t.return;
      }
    } function xu(e) {
      for (;null!==Jl;) {
        const t=Jl; if (t===e) {
          Jl=null; break;
        } const n=t.sibling; if (null!==n) {
          n.return=t.return, Jl=n; break;
        }Jl=t.return;
      }
    } function Eu(e) {
      for (;null!==Jl;) {
        const t=Jl; try {
          switch (t.tag) {
            case 0: case 11: case 15: var n=t.return; try {
              ou(4, t);
            } catch (e) {
              ks(t, n, e);
            } break; case 1: var r=t.stateNode; if ('function'==typeof r.componentDidMount) {
              const o=t.return; try {
                r.componentDidMount();
              } catch (e) {
                ks(t, o, e);
              }
            } var a=t.return; try {
                au(t);
              } catch (e) {
                ks(t, a, e);
              } break; case 5: var i=t.return; try {
              au(t);
            } catch (e) {
              ks(t, i, e);
            }
          }
        } catch (e) {
          ks(t, t.return, e);
        } if (t===e) {
          Jl=null; break;
        } const l=t.sibling; if (null!==l) {
          l.return=t.return, Jl=l; break;
        }Jl=t.return;
      }
    } let _u; const ku=Math.ceil; const Cu=w.ReactCurrentDispatcher; const Ou=w.ReactCurrentOwner; const Nu=w.ReactCurrentBatchConfig; var Mu=0; var Pu=null; let Tu=null; let Ru=0; var Au=0; var Iu=ko(0); var zu=0; let Du=null; var Lu=0; let ju=0; let Fu=0; let qu=null; let Uu=null; var Bu=0; var $u=1/0; let Hu=null; var Wu=!1; var Vu=null; var Ku=null; let Qu=!1; let Yu=null; let Xu=0; let Gu=0; let Zu=null; let Ju=-1; let es=0; function ts() {
      return 0!=(6&Mu)?Ge():-1!==Ju?Ju:Ju=Ge();
    } function ns(e) {
      return 0==(1&e.mode)?1:0!=(2&Mu)&&0!==Ru?Ru&-Ru:null!==ga.transition?(0===es&&(es=mt()), es):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Xt(e.type);
    } function rs(e, t, n, r) {
      if (50<Gu) throw Gu=0, Zu=null, Error(a(185)); yt(e, n, r), 0!=(2&Mu)&&e===Pu||(e===Pu&&(0==(2&Mu)&&(ju|=n), 4===zu&&us(e, Ru)), os(e, r), 1===n&&0===Mu&&0==(1&t.mode)&&($u=Ge()+500, qo&&$o()));
    } function os(e, t) {
      let n=e.callbackNode; !function(e, t) {
        for (let n=e.suspendedLanes, r=e.pingedLanes, o=e.expirationTimes, a=e.pendingLanes; 0<a;) {
          const i=31-it(a); const l=1<<i; const u=o[i]; -1===u?0!=(l&n)&&0==(l&r)||(o[i]=pt(l, t)):u<=t&&(e.expiredLanes|=l), a&=~l;
        }
      }(e, t); const r=ft(e, e===Pu?Ru:0); if (0===r)null!==n&&Qe(n), e.callbackNode=null, e.callbackPriority=0; else if (t=r&-r, e.callbackPriority!==t) {
        if (null!=n&&Qe(n), 1===t) {
0===e.tag?function(e) {
  qo=!0, Bo(e);
}(ss.bind(null, e)):Bo(ss.bind(null, e)), io((function() {
            0==(6&Mu)&&$o();
          })), n=null;
        } else {
          switch (wt(r)) {
            case 1: n=Je; break; case 4: n=et; break; case 16: default: n=tt; break; case 536870912: n=rt;
          }n=Ps(n, as.bind(null, e));
        }e.callbackPriority=t, e.callbackNode=n;
      }
    } function as(e, t) {
      if (Ju=-1, es=0, 0!=(6&Mu)) throw Error(a(327)); let n=e.callbackNode; if (Es()&&e.callbackNode!==n) return null; let r=ft(e, e===Pu?Ru:0); if (0===r) return null; if (0!=(30&r)||0!=(r&e.expiredLanes)||t)t=ys(e, r); else {
        t=r; var o=Mu; Mu|=2; var i=ms(); for (Pu===e&&Ru===t||(Hu=null, $u=Ge()+500, ps(e, t)); ;) {
          try {
            bs(); break;
          } catch (t) {
            hs(e, t);
          }
        }xa(), Cu.current=i, Mu=o, null!==Tu?t=0:(Pu=null, Ru=0, t=zu);
      } if (0!==t) {
        if (2===t&&0!==(o=ht(e))&&(r=o, t=is(e, o)), 1===t) throw n=Du, ps(e, 0), us(e, r), os(e, Ge()), n; if (6===t)us(e, r); else {
          if (o=e.current.alternate, 0==(30&r)&&!function(e) {
            for (let t=e; ;) {
              if (16384&t.flags) {
                var n=t.updateQueue; if (null!==n&&null!==(n=n.stores)) {
                  for (let r=0; r<n.length; r++) {
                    let o=n[r]; const a=o.getSnapshot; o=o.value; try {
                      if (!lr(a(), o)) return !1;
                    } catch (e) {
                      return !1;
                    }
                  }
                }
              } if (n=t.child, 16384&t.subtreeFlags&&null!==n)n.return=t, t=n; else {
                if (t===e) break; for (;null===t.sibling;) {
                  if (null===t.return||t.return===e) return !0; t=t.return;
                }t.sibling.return=t.return, t=t.sibling;
              }
            } return !0;
          }(o)&&(2===(t=ys(e, r))&&0!==(i=ht(e))&&(r=i, t=is(e, i)), 1===t)) throw n=Du, ps(e, 0), us(e, r), os(e, Ge()), n; switch (e.finishedWork=o, e.finishedLanes=r, t) {
            case 0: case 1: throw Error(a(345)); case 2: case 5: xs(e, Uu, Hu); break; case 3: if (us(e, r), (130023424&r)===r&&10<(t=Bu+500-Ge())) {
              if (0!==ft(e, 0)) break; if (((o=e.suspendedLanes)&r)!==r) {
                ts(), e.pingedLanes|=e.suspendedLanes&o; break;
              }e.timeoutHandle=ro(xs.bind(null, e, Uu, Hu), t); break;
            }xs(e, Uu, Hu); break; case 4: if (us(e, r), (4194240&r)===r) break; for (t=e.eventTimes, o=-1; 0<r;) {
              let l=31-it(r); i=1<<l, (l=t[l])>o&&(o=l), r&=~i;
            } if (r=o, 10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ku(r/1960))-r)) {
                e.timeoutHandle=ro(xs.bind(null, e, Uu, Hu), r); break;
              }xs(e, Uu, Hu); break; default: throw Error(a(329));
          }
        }
      } return os(e, Ge()), e.callbackNode===n?as.bind(null, e):null;
    } function is(e, t) {
      const n=qu; return e.current.memoizedState.isDehydrated&&(ps(e, t).flags|=256), 2!==(e=ys(e, t))&&(t=Uu, Uu=n, null!==t&&ls(t)), e;
    } function ls(e) {
null===Uu?Uu=e:Uu.push.apply(Uu, e);
    } function us(e, t) {
      for (t&=~Fu, t&=~ju, e.suspendedLanes|=t, e.pingedLanes&=~t, e=e.expirationTimes; 0<t;) {
        const n=31-it(t); const r=1<<n; e[n]=-1, t&=~r;
      }
    } function ss(e) {
      if (0!=(6&Mu)) throw Error(a(327)); Es(); let t=ft(e, 0); if (0==(1&t)) return os(e, Ge()), null; let n=ys(e, t); if (0!==e.tag&&2===n) {
        const r=ht(e); 0!==r&&(t=r, n=is(e, r));
      } if (1===n) throw n=Du, ps(e, 0), us(e, t), os(e, Ge()), n; if (6===n) throw Error(a(345)); return e.finishedWork=e.current.alternate, e.finishedLanes=t, xs(e, Uu, Hu), os(e, Ge()), null;
    } function cs(e, t) {
      const n=Mu; Mu|=1; try {
        return e(t);
      } finally {
        0===(Mu=n)&&($u=Ge()+500, qo&&$o());
      }
    } function ds(e) {
      null!==Yu&&0===Yu.tag&&0==(6&Mu)&&Es(); const t=Mu; Mu|=1; const n=Nu.transition; const r=bt; try {
        if (Nu.transition=null, bt=1, e) return e();
      } finally {
        bt=r, Nu.transition=n, 0==(6&(Mu=t))&&$o();
      }
    } function fs() {
      Au=Iu.current, Co(Iu);
    } function ps(e, t) {
      e.finishedWork=null, e.finishedLanes=0; let n=e.timeoutHandle; if (-1!==n&&(e.timeoutHandle=-1, oo(n)), null!==Tu) {
        for (n=Tu.return; null!==n;) {
          var r=n; switch (na(r), r.tag) {
            case 1: null!=(r=r.type.childContextTypes)&&Io(); break; case 3: ai(), Co(Po), Co(Mo), di(); break; case 5: li(r); break; case 4: ai(); break; case 13: case 19: Co(ui); break; case 10: Ea(r.type._context); break; case 22: case 23: fs();
          }n=n.return;
        }
      } if (Pu=e, Tu=e=Is(e.current, null), Ru=Au=t, zu=0, Du=null, Fu=ju=Lu=0, Uu=qu=null, null!==Oa) {
        for (t=0; t<Oa.length; t++) {
          if (null!==(r=(n=Oa[t]).interleaved)) {
            n.interleaved=null; const o=r.next; const a=n.pending; if (null!==a) {
              const i=a.next; a.next=o, r.next=i;
            }n.pending=r;
          }
        }Oa=null;
      } return e;
    } function hs(e, t) {
      for (;;) {
        let n=Tu; try {
          if (xa(), fi.current=il, vi) {
            for (let r=mi.memoizedState; null!==r;) {
              const o=r.queue; null!==o&&(o.pending=null), r=r.next;
            }vi=!1;
          } if (hi=0, yi=gi=mi=null, bi=!1, wi=0, Ou.current=null, null===n||null===n.return) {
            zu=1, Du=t, Tu=null; break;
          }e: {
            let i=e; const l=n.return; let u=n; let s=t; if (t=Ru, u.flags|=32768, null!==s&&'object'==typeof s&&'function'==typeof s.then) {
              const c=s; const d=u; const f=d.tag; if (0==(1&d.mode)&&(0===f||11===f||15===f)) {
                const p=d.alternate; p?(d.updateQueue=p.updateQueue, d.memoizedState=p.memoizedState, d.lanes=p.lanes):(d.updateQueue=null, d.memoizedState=null);
              } const h=yl(l); if (null!==h) {
                h.flags&=-257, vl(h, l, u, 0, t), 1&h.mode&&gl(i, c, t), s=c; const m=(t=h).updateQueue; if (null===m) {
                  const g=new Set; g.add(s), t.updateQueue=g;
                } else m.add(s); break e;
              } if (0==(1&t)) {
                gl(i, c, t), gs(); break e;
              }s=Error(a(426));
            } else if (aa&&1&u.mode) {
              const y=yl(l); if (null!==y) {
                0==(65536&y.flags)&&(y.flags|=256), vl(y, l, u, 0, t), ma(cl(s, u)); break e;
              }
            }i=s=cl(s, u), 4!==zu&&(zu=2), null===qu?qu=[i]:qu.push(i), i=l; do {
              switch (i.tag) {
                case 3: i.flags|=65536, t&=-t, i.lanes|=t, La(i, hl(0, s, t)); break e; case 1: u=s; var v=i.type; var b=i.stateNode; if (0==(128&i.flags)&&('function'==typeof v.getDerivedStateFromError||null!==b&&'function'==typeof b.componentDidCatch&&(null===Ku||!Ku.has(b)))) {
                  i.flags|=65536, t&=-t, i.lanes|=t, La(i, ml(i, u, t)); break e;
                }
              }i=i.return;
            } while (null!==i);
          }Ss(n);
        } catch (e) {
          t=e, Tu===n&&null!==n&&(Tu=n=n.return); continue;
        } break;
      }
    } function ms() {
      const e=Cu.current; return Cu.current=il, null===e?il:e;
    } function gs() {
      0!==zu&&3!==zu&&2!==zu||(zu=4), null===Pu||0==(268435455&Lu)&&0==(268435455&ju)||us(Pu, Ru);
    } function ys(e, t) {
      const n=Mu; Mu|=2; const r=ms(); for (Pu===e&&Ru===t||(Hu=null, ps(e, t)); ;) {
        try {
          vs(); break;
        } catch (t) {
          hs(e, t);
        }
      } if (xa(), Mu=n, Cu.current=r, null!==Tu) throw Error(a(261)); return Pu=null, Ru=0, zu;
    } function vs() {
      for (;null!==Tu;)ws(Tu);
    } function bs() {
      for (;null!==Tu&&!Ye();)ws(Tu);
    } function ws(e) {
      const t=_u(e.alternate, e, Au); e.memoizedProps=e.pendingProps, null===t?Ss(e):Tu=t, Ou.current=null;
    } function Ss(e) {
      let t=e; do {
        let n=t.alternate; if (e=t.return, 0==(32768&t.flags)) {
          if (null!==(n=Ql(n, t, Au))) return void(Tu=n);
        } else {
          if (null!==(n=Yl(n, t))) return n.flags&=32767, void(Tu=n); if (null===e) return zu=6, void(Tu=null); e.flags|=32768, e.subtreeFlags=0, e.deletions=null;
        } if (null!==(t=t.sibling)) return void(Tu=t); Tu=t=e;
      } while (null!==t); 0===zu&&(zu=5);
    } function xs(e, t, n) {
      const r=bt; const o=Nu.transition; try {
        Nu.transition=null, bt=1, function(e, t, n, r) {
          do {
            Es();
          } while (null!==Yu); if (0!=(6&Mu)) throw Error(a(327)); n=e.finishedWork; let o=e.finishedLanes; if (null===n) return null; if (e.finishedWork=null, e.finishedLanes=0, n===e.current) throw Error(a(177)); e.callbackNode=null, e.callbackPriority=0; let i=n.lanes|n.childLanes; if (function(e, t) {
            let n=e.pendingLanes&~t; e.pendingLanes=t, e.suspendedLanes=0, e.pingedLanes=0, e.expiredLanes&=t, e.mutableReadLanes&=t, e.entangledLanes&=t, t=e.entanglements; const r=e.eventTimes; for (e=e.expirationTimes; 0<n;) {
              const o=31-it(n); const a=1<<o; t[o]=0, r[o]=-1, e[o]=-1, n&=~a;
            }
          }(e, i), e===Pu&&(Tu=Pu=null, Ru=0), 0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Qu||(Qu=!0, Ps(tt, (function() {
            return Es(), null;
          }))), i=0!=(15990&n.flags), 0!=(15990&n.subtreeFlags)||i) {
            i=Nu.transition, Nu.transition=null; const l=bt; bt=1; const u=Mu; Mu|=4, Ou.current=null, function(e, t) {
              if (eo=Ht, pr(e=fr())) {
                if ('selectionStart'in e) var n={start: e.selectionStart, end: e.selectionEnd}; else {
                  e: {
                    let r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection(); if (r&&0!==r.rangeCount) {
                      n=r.anchorNode; const o=r.anchorOffset; const i=r.focusNode; r=r.focusOffset; try {
                        n.nodeType, i.nodeType;
                      } catch (e) {
                        n=null; break e;
                      } let l=0; let u=-1; let s=-1; let c=0; let d=0; let f=e; let p=null; t:for (;;) {
                        for (var h; f!==n||0!==o&&3!==f.nodeType||(u=l+o), f!==i||0!==r&&3!==f.nodeType||(s=l+r), 3===f.nodeType&&(l+=f.nodeValue.length), null!==(h=f.firstChild);)p=f, f=h; for (;;) {
                          if (f===e) break t; if (p===n&&++c===o&&(u=l), p===i&&++d===r&&(s=l), null!==(h=f.nextSibling)) break; p=(f=p).parentNode;
                        }f=h;
                      }n=-1===u||-1===s?null:{start: u, end: s};
                    } else n=null;
                  }
                }n=n||{start: 0, end: 0};
              } else n=null; for (to={focusedElem: e, selectionRange: n}, Ht=!1, Jl=t; null!==Jl;) {
                if (e=(t=Jl).child, 0!=(1028&t.subtreeFlags)&&null!==e)e.return=t, Jl=e; else {
                  for (;null!==Jl;) {
                    t=Jl; try {
                      var m=t.alternate; if (0!=(1024&t.flags)) {
                        switch (t.tag) {
                          case 0: case 11: case 15: case 5: case 6: case 4: case 17: break; case 1: if (null!==m) {
                            const g=m.memoizedProps; const y=m.memoizedState; const v=t.stateNode; const b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ya(t.type, g), y); v.__reactInternalSnapshotBeforeUpdate=b;
                          } break; case 3: var w=t.stateNode.containerInfo; 1===w.nodeType?w.textContent='':9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement); break; default: throw Error(a(163));
                        }
                      }
                    } catch (e) {
                      ks(t, t.return, e);
                    } if (null!==(e=t.sibling)) {
                      e.return=t.return, Jl=e; break;
                    }Jl=t.return;
                  }
                }
              }m=nu, nu=!1;
            }(e, n), yu(n, e), hr(to), Ht=!!eo, to=eo=null, e.current=n, bu(n, e, o), Xe(), Mu=u, bt=l, Nu.transition=i;
          } else e.current=n; if (Qu&&(Qu=!1, Yu=e, Xu=o), 0===(i=e.pendingLanes)&&(Ku=null), function(e) {
            if (at&&'function'==typeof at.onCommitFiberRoot) {
              try {
                at.onCommitFiberRoot(ot, e, void 0, 128==(128&e.current.flags));
              } catch (e) {}
            }
          }(n.stateNode), os(e, Ge()), null!==t) for (r=e.onRecoverableError, n=0; n<t.length; n++)r((o=t[n]).value, {componentStack: o.stack, digest: o.digest}); if (Wu) throw Wu=!1, e=Vu, Vu=null, e; 0!=(1&Xu)&&0!==e.tag&&Es(), 0!=(1&(i=e.pendingLanes))?e===Zu?Gu++:(Gu=0, Zu=e):Gu=0, $o();
        }(e, t, n, r);
      } finally {
        Nu.transition=o, bt=r;
      } return null;
    } function Es() {
      if (null!==Yu) {
        let e=wt(Xu); const t=Nu.transition; const n=bt; try {
          if (Nu.transition=null, bt=16>e?16:e, null===Yu) var r=!1; else {
            if (e=Yu, Yu=null, Xu=0, 0!=(6&Mu)) throw Error(a(331)); const o=Mu; for (Mu|=4, Jl=e.current; null!==Jl;) {
              let i=Jl; var l=i.child; if (0!=(16&Jl.flags)) {
                var u=i.deletions; if (null!==u) {
                  for (let s=0; s<u.length; s++) {
                    const c=u[s]; for (Jl=c; null!==Jl;) {
                      let d=Jl; switch (d.tag) {
                        case 0: case 11: case 15: ru(8, d, i);
                      } const f=d.child; if (null!==f)f.return=d, Jl=f; else {
                        for (;null!==Jl;) {
                          const p=(d=Jl).sibling; const h=d.return; if (iu(d), d===c) {
                            Jl=null; break;
                          } if (null!==p) {
                            p.return=h, Jl=p; break;
                          }Jl=h;
                        }
                      }
                    }
                  } const m=i.alternate; if (null!==m) {
                    let g=m.child; if (null!==g) {
                      m.child=null; do {
                        const y=g.sibling; g.sibling=null, g=y;
                      } while (null!==g);
                    }
                  }Jl=i;
                }
              } if (0!=(2064&i.subtreeFlags)&&null!==l)l.return=i, Jl=l; else {
                e:for (;null!==Jl;) {
                  if (0!=(2048&(i=Jl).flags)) {
                    switch (i.tag) {
                      case 0: case 11: case 15: ru(9, i, i.return);
                    }
                  } const v=i.sibling; if (null!==v) {
                    v.return=i.return, Jl=v; break e;
                  }Jl=i.return;
                }
              }
            } const b=e.current; for (Jl=b; null!==Jl;) {
              const w=(l=Jl).child; if (0!=(2064&l.subtreeFlags)&&null!==w)w.return=l, Jl=w; else {
                e:for (l=b; null!==Jl;) {
                  if (0!=(2048&(u=Jl).flags)) {
                    try {
                      switch (u.tag) {
                        case 0: case 11: case 15: ou(9, u);
                      }
                    } catch (e) {
                      ks(u, u.return, e);
                    }
                  } if (u===l) {
                    Jl=null; break e;
                  } const S=u.sibling; if (null!==S) {
                    S.return=u.return, Jl=S; break e;
                  }Jl=u.return;
                }
              }
            } if (Mu=o, $o(), at&&'function'==typeof at.onPostCommitFiberRoot) {
              try {
                at.onPostCommitFiberRoot(ot, e);
              } catch (e) {}
            }r=!0;
          } return r;
        } finally {
          bt=n, Nu.transition=t;
        }
      } return !1;
    } function _s(e, t, n) {
      e=za(e, t=hl(0, t=cl(n, t), 1), 1), t=ts(), null!==e&&(yt(e, 1, t), os(e, t));
    } function ks(e, t, n) {
      if (3===e.tag)_s(e, e, n); else {
        for (;null!==t;) {
          if (3===t.tag) {
            _s(t, e, n); break;
          } if (1===t.tag) {
            const r=t.stateNode; if ('function'==typeof t.type.getDerivedStateFromError||'function'==typeof r.componentDidCatch&&(null===Ku||!Ku.has(r))) {
              t=za(t, e=ml(t, e=cl(n, e), 1), 1), e=ts(), null!==t&&(yt(t, 1, e), os(t, e)); break;
            }
          }t=t.return;
        }
      }
    } function Cs(e, t, n) {
      const r=e.pingCache; null!==r&&r.delete(t), t=ts(), e.pingedLanes|=e.suspendedLanes&n, Pu===e&&(Ru&n)===n&&(4===zu||3===zu&&(130023424&Ru)===Ru&&500>Ge()-Bu?ps(e, 0):Fu|=n), os(e, t);
    } function Os(e, t) {
      0===t&&(0==(1&e.mode)?t=1:(t=ct, 0==(130023424&(ct<<=1))&&(ct=4194304))); const n=ts(); null!==(e=Pa(e, t))&&(yt(e, t, n), os(e, n));
    } function Ns(e) {
      const t=e.memoizedState; let n=0; null!==t&&(n=t.retryLane), Os(e, n);
    } function Ms(e, t) {
      let n=0; switch (e.tag) {
        case 13: var r=e.stateNode; var o=e.memoizedState; null!==o&&(n=o.retryLane); break; case 19: r=e.stateNode; break; default: throw Error(a(314));
      }null!==r&&r.delete(t), Os(e, n);
    } function Ps(e, t) {
      return Ke(e, t);
    } function Ts(e, t, n, r) {
      this.tag=e, this.key=n, this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null, this.index=0, this.ref=null, this.pendingProps=t, this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null, this.mode=r, this.subtreeFlags=this.flags=0, this.deletions=null, this.childLanes=this.lanes=0, this.alternate=null;
    } function Rs(e, t, n, r) {
      return new Ts(e, t, n, r);
    } function As(e) {
      return !(!(e=e.prototype)||!e.isReactComponent);
    } function Is(e, t) {
      let n=e.alternate; return null===n?((n=Rs(e.tag, t, e.key, e.mode)).elementType=e.elementType, n.type=e.type, n.stateNode=e.stateNode, n.alternate=e, e.alternate=n):(n.pendingProps=t, n.type=e.type, n.flags=0, n.subtreeFlags=0, n.deletions=null), n.flags=14680064&e.flags, n.childLanes=e.childLanes, n.lanes=e.lanes, n.child=e.child, n.memoizedProps=e.memoizedProps, n.memoizedState=e.memoizedState, n.updateQueue=e.updateQueue, t=e.dependencies, n.dependencies=null===t?null:{lanes: t.lanes, firstContext: t.firstContext}, n.sibling=e.sibling, n.index=e.index, n.ref=e.ref, n;
    } function zs(e, t, n, r, o, i) {
      let l=2; if (r=e, 'function'==typeof e)As(e)&&(l=1); else if ('string'==typeof e)l=5; else {
        e:switch (e) {
          case E: return Ds(n.children, o, i, t); case _: l=8, o|=8; break; case k: return (e=Rs(12, n, t, 2|o)).elementType=k, e.lanes=i, e; case M: return (e=Rs(13, n, t, o)).elementType=M, e.lanes=i, e; case P: return (e=Rs(19, n, t, o)).elementType=P, e.lanes=i, e; case A: return Ls(n, o, i, t); default: if ('object'==typeof e&&null!==e) {
            switch (e.$$typeof) {
              case C: l=10; break e; case O: l=9; break e; case N: l=11; break e; case T: l=14; break e; case R: l=16, r=null; break e;
            }
          } throw Error(a(130, null==e?e:typeof e, ''));
        }
      } return (t=Rs(l, n, t, o)).elementType=e, t.type=r, t.lanes=i, t;
    } function Ds(e, t, n, r) {
      return (e=Rs(7, e, r, t)).lanes=n, e;
    } function Ls(e, t, n, r) {
      return (e=Rs(22, e, r, t)).elementType=A, e.lanes=n, e.stateNode={isHidden: !1}, e;
    } function js(e, t, n) {
      return (e=Rs(6, e, null, t)).lanes=n, e;
    } function Fs(e, t, n) {
      return (t=Rs(4, null!==e.children?e.children:[], e.key, t)).lanes=n, t.stateNode={containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}, t;
    } function qs(e, t, n, r, o) {
      this.tag=t, this.containerInfo=e, this.finishedWork=this.pingCache=this.current=this.pendingChildren=null, this.timeoutHandle=-1, this.callbackNode=this.pendingContext=this.context=null, this.callbackPriority=0, this.eventTimes=gt(0), this.expirationTimes=gt(-1), this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0, this.entanglements=gt(0), this.identifierPrefix=r, this.onRecoverableError=o, this.mutableSourceEagerHydrationData=null;
    } function Us(e, t, n, r, o, a, i, l, u) {
      return e=new qs(e, t, n, l, u), 1===t?(t=1, !0===a&&(t|=8)):t=0, a=Rs(3, null, null, t), e.current=a, a.stateNode=e, a.memoizedState={element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null}, Ra(a), e;
    } function Bs(e) {
      if (!e) return No; e: {
        if (Be(e=e._reactInternals)!==e||1!==e.tag) throw Error(a(170)); var t=e; do {
          switch (t.tag) {
            case 3: t=t.stateNode.context; break e; case 1: if (Ao(t.type)) {
              t=t.stateNode.__reactInternalMemoizedMergedChildContext; break e;
            }
          }t=t.return;
        } while (null!==t); throw Error(a(171));
      } if (1===e.tag) {
        const n=e.type; if (Ao(n)) return Do(e, n, t);
      } return t;
    } function $s(e, t, n, r, o, a, i, l, u) {
      return (e=Us(n, r, !0, e, 0, a, 0, l, u)).context=Bs(null), n=e.current, (a=Ia(r=ts(), o=ns(n))).callback=null!=t?t:null, za(n, a, o), e.current.lanes=o, yt(e, o, r), os(e, r), e;
    } function Hs(e, t, n, r) {
      const o=t.current; const a=ts(); const i=ns(o); return n=Bs(n), null===t.context?t.context=n:t.pendingContext=n, (t=Ia(a, i)).payload={element: e}, null!==(r=void 0===r?null:r)&&(t.callback=r), null!==(e=za(o, t, i))&&(rs(e, o, i, a), Da(e, o, i)), i;
    } function Ws(e) {
      return (e=e.current).child?(e.child.tag, e.child.stateNode):null;
    } function Vs(e, t) {
      if (null!==(e=e.memoizedState)&&null!==e.dehydrated) {
        const n=e.retryLane; e.retryLane=0!==n&&n<t?n:t;
      }
    } function Ks(e, t) {
      Vs(e, t), (e=e.alternate)&&Vs(e, t);
    }_u=function(e, t, n) {
      if (null!==e) {
        if (e.memoizedProps!==t.pendingProps||Po.current)wl=!0; else {
          if (0==(e.lanes&n)&&0==(128&t.flags)) {
            return wl=!1, function(e, t, n) {
              switch (t.tag) {
                case 3: Pl(t), ha(); break; case 5: ii(t); break; case 1: Ao(t.type)&&Lo(t); break; case 4: oi(t, t.stateNode.containerInfo); break; case 10: var r=t.type._context; var o=t.memoizedProps.value; Oo(va, r._currentValue), r._currentValue=o; break; case 13: if (null!==(r=t.memoizedState)) return null!==r.dehydrated?(Oo(ui, 1&ui.current), t.flags|=128, null):0!=(n&t.child.childLanes)?jl(e, t, n):(Oo(ui, 1&ui.current), null!==(e=Wl(e, t, n))?e.sibling:null); Oo(ui, 1&ui.current); break; case 19: if (r=0!=(n&t.childLanes), 0!=(128&e.flags)) {
                  if (r) return $l(e, t, n); t.flags|=128;
                } if (null!==(o=t.memoizedState)&&(o.rendering=null, o.tail=null, o.lastEffect=null), Oo(ui, ui.current), r) break; return null; case 22: case 23: return t.lanes=0, kl(e, t, n);
              } return Wl(e, t, n);
            }(e, t, n);
          } wl=0!=(131072&e.flags);
        }
      } else wl=!1, aa&&0!=(1048576&t.flags)&&ea(t, Ko, t.index); switch (t.lanes=0, t.tag) {
        case 2: var r=t.type; Hl(e, t), e=t.pendingProps; var o=Ro(t, Mo.current); ka(t, n), o=_i(null, t, r, e, o, n); var i=ki(); return t.flags|=1, 'object'==typeof o&&null!==o&&'function'==typeof o.render&&void 0===o.$$typeof?(t.tag=1, t.memoizedState=null, t.updateQueue=null, Ao(r)?(i=!0, Lo(t)):i=!1, t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null, Ra(t), o.updater=Ba, t.stateNode=o, o._reactInternals=t, Va(t, r, e, n), t=Ml(null, t, r, !0, i, n)):(t.tag=0, aa&&i&&ta(t), Sl(null, t, o, n), t=t.child), t; case 16: r=t.elementType; e: {
          switch (Hl(e, t), e=t.pendingProps, r=(o=r._init)(r._payload), t.type=r, o=t.tag=function(e) {
            if ('function'==typeof e) return As(e)?1:0; if (null!=e) {
              if ((e=e.$$typeof)===N) return 11; if (e===T) return 14;
            } return 2;
          }(r), e=ya(r, e), o) {
            case 0: t=Ol(null, t, r, e, n); break e; case 1: t=Nl(null, t, r, e, n); break e; case 11: t=xl(null, t, r, e, n); break e; case 14: t=El(null, t, r, ya(r.type, e), n); break e;
          } throw Error(a(306, r, ''));
        } return t; case 0: return r=t.type, o=t.pendingProps, Ol(e, t, r, o=t.elementType===r?o:ya(r, o), n); case 1: return r=t.type, o=t.pendingProps, Nl(e, t, r, o=t.elementType===r?o:ya(r, o), n); case 3: e: {
          if (Pl(t), null===e) throw Error(a(387)); r=t.pendingProps, o=(i=t.memoizedState).element, Aa(e, t), ja(t, r, null, n); var l=t.memoizedState; if (r=l.element, i.isDehydrated) {
            if (i={element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions}, t.updateQueue.baseState=i, t.memoizedState=i, 256&t.flags) {
              t=Tl(e, t, r, n, o=cl(Error(a(423)), t)); break e;
            } if (r!==o) {
              t=Tl(e, t, r, n, o=cl(Error(a(424)), t)); break e;
            } for (oa=so(t.stateNode.containerInfo.firstChild), ra=t, aa=!0, ia=null, n=Za(t, null, r, n), t.child=n; n;)n.flags=-3&n.flags|4096, n=n.sibling;
          } else {
            if (ha(), r===o) {
              t=Wl(e, t, n); break e;
            }Sl(e, t, r, n);
          }t=t.child;
        } return t; case 5: return ii(t), null===e&&ca(t), r=t.type, o=t.pendingProps, i=null!==e?e.memoizedProps:null, l=o.children, no(r, o)?l=null:null!==i&&no(r, i)&&(t.flags|=32), Cl(e, t), Sl(e, t, l, n), t.child; case 6: return null===e&&ca(t), null; case 13: return jl(e, t, n); case 4: return oi(t, t.stateNode.containerInfo), r=t.pendingProps, null===e?t.child=Ga(t, null, r, n):Sl(e, t, r, n), t.child; case 11: return r=t.type, o=t.pendingProps, xl(e, t, r, o=t.elementType===r?o:ya(r, o), n); case 7: return Sl(e, t, t.pendingProps, n), t.child; case 8: case 12: return Sl(e, t, t.pendingProps.children, n), t.child; case 10: e: {
          if (r=t.type._context, o=t.pendingProps, i=t.memoizedProps, l=o.value, Oo(va, r._currentValue), r._currentValue=l, null!==i) {
            if (lr(i.value, l)) {
              if (i.children===o.children&&!Po.current) {
                t=Wl(e, t, n); break e;
              }
            } else {
              for (null!==(i=t.child)&&(i.return=t); null!==i;) {
                let u=i.dependencies; if (null!==u) {
                  l=i.child; for (let s=u.firstContext; null!==s;) {
                    if (s.context===r) {
                      if (1===i.tag) {
                        (s=Ia(-1, n&-n)).tag=2; let c=i.updateQueue; if (null!==c) {
                          const d=(c=c.shared).pending; null===d?s.next=s:(s.next=d.next, d.next=s), c.pending=s;
                        }
                      }i.lanes|=n, null!==(s=i.alternate)&&(s.lanes|=n), _a(i.return, n, t), u.lanes|=n; break;
                    }s=s.next;
                  }
                } else if (10===i.tag)l=i.type===t.type?null:i.child; else if (18===i.tag) {
                  if (null===(l=i.return)) throw Error(a(341)); l.lanes|=n, null!==(u=l.alternate)&&(u.lanes|=n), _a(l, n, t), l=i.sibling;
                } else l=i.child; if (null!==l)l.return=i; else {
                  for (l=i; null!==l;) {
                    if (l===t) {
                      l=null; break;
                    } if (null!==(i=l.sibling)) {
                      i.return=l.return, l=i; break;
                    }l=l.return;
                  }
                }i=l;
              }
            }
          }Sl(e, t, o.children, n), t=t.child;
        } return t; case 9: return o=t.type, r=t.pendingProps.children, ka(t, n), r=r(o=Ca(o)), t.flags|=1, Sl(e, t, r, n), t.child; case 14: return o=ya(r=t.type, t.pendingProps), El(e, t, r, o=ya(r.type, o), n); case 15: return _l(e, t, t.type, t.pendingProps, n); case 17: return r=t.type, o=t.pendingProps, o=t.elementType===r?o:ya(r, o), Hl(e, t), t.tag=1, Ao(r)?(e=!0, Lo(t)):e=!1, ka(t, n), Ha(t, r, o), Va(t, r, o, n), Ml(null, t, r, !0, e, n); case 19: return $l(e, t, n); case 22: return kl(e, t, n);
      } throw Error(a(156, t.tag));
    }; const Qs='function'==typeof reportError?reportError:function(e) {
      console.error(e);
    }; function Ys(e) {
      this._internalRoot=e;
    } function Xs(e) {
      this._internalRoot=e;
    } function Gs(e) {
      return !(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType);
    } function Zs(e) {
      return !(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||' react-mount-point-unstable '!==e.nodeValue));
    } function Js() {} function ec(e, t, n, r, o) {
      const a=n._reactRootContainer; if (a) {
        var i=a; if ('function'==typeof o) {
          const l=o; o=function() {
            const e=Ws(i); l.call(e);
          };
        }Hs(t, i, e, o);
      } else {
        i=function(e, t, n, r, o) {
          if (o) {
            if ('function'==typeof r) {
              const a=r; r=function() {
                const e=Ws(i); a.call(e);
              };
            } var i=$s(t, r, e, 0, null, !1, 0, '', Js); return e._reactRootContainer=i, e[mo]=i.current, Br(8===e.nodeType?e.parentNode:e), ds(), i;
          } for (;o=e.lastChild;)e.removeChild(o); if ('function'==typeof r) {
            const l=r; r=function() {
              const e=Ws(u); l.call(e);
            };
          } var u=Us(e, 0, !1, null, 0, !1, 0, '', Js); return e._reactRootContainer=u, e[mo]=u.current, Br(8===e.nodeType?e.parentNode:e), ds((function() {
            Hs(t, u, n, r);
          })), u;
        }(n, t, e, o, r);
      } return Ws(i);
    }Xs.prototype.render=Ys.prototype.render=function(e) {
      const t=this._internalRoot; if (null===t) throw Error(a(409)); Hs(e, t, null, null);
    }, Xs.prototype.unmount=Ys.prototype.unmount=function() {
      const e=this._internalRoot; if (null!==e) {
        this._internalRoot=null; const t=e.containerInfo; ds((function() {
          Hs(null, e, null, null);
        })), t[mo]=null;
      }
    }, Xs.prototype.unstable_scheduleHydration=function(e) {
      if (e) {
        const t=_t(); e={blockedOn: null, target: e, priority: t}; for (var n=0; n<At.length&&0!==t&&t<At[n].priority; n++);At.splice(n, 0, e), 0===n&&Lt(e);
      }
    }, St=function(e) {
      switch (e.tag) {
        case 3: var t=e.stateNode; if (t.current.memoizedState.isDehydrated) {
          const n=dt(t.pendingLanes); 0!==n&&(vt(t, 1|n), os(t, Ge()), 0==(6&Mu)&&($u=Ge()+500, $o()));
        } break; case 13: ds((function() {
          const t=Pa(e, 1); if (null!==t) {
            const n=ts(); rs(t, e, 1, n);
          }
        })), Ks(e, 1);
      }
    }, xt=function(e) {
      if (13===e.tag) {
        const t=Pa(e, 134217728); null!==t&&rs(t, e, 134217728, ts()), Ks(e, 134217728);
      }
    }, Et=function(e) {
      if (13===e.tag) {
        const t=ns(e); const n=Pa(e, t); null!==n&&rs(n, e, t, ts()), Ks(e, t);
      }
    }, _t=function() {
      return bt;
    }, kt=function(e, t) {
      const n=bt; try {
        return bt=e, t();
      } finally {
        bt=n;
      }
    }, xe=function(e, t, n) {
      switch (t) {
        case 'input': if (Z(e, n), t=n.name, 'radio'===n.type&&null!=t) {
          for (n=e; n.parentNode;)n=n.parentNode; for (n=n.querySelectorAll('input[name='+JSON.stringify(''+t)+'][type="radio"]'), t=0; t<n.length; t++) {
            const r=n[t]; if (r!==e&&r.form===e.form) {
              const o=xo(r); if (!o) throw Error(a(90)); K(r), Z(r, o);
            }
          }
        } break; case 'textarea': ae(e, n); break; case 'select': null!=(t=n.value)&&ne(e, !!n.multiple, t, !1);
      }
    }, Ne=cs, Me=ds; const tc={usingClientEntryPoint: !1, Events: [wo, So, xo, Ce, Oe, cs]}; const nc={findFiberByHostInstance: bo, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom'}; const rc={bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
      return null===(e=We(e))?null:e.stateNode;
    }, findFiberByHostInstance: nc.findFiberByHostInstance||function() {
      return null;
    }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'}; if ('undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      const oc=__REACT_DEVTOOLS_GLOBAL_HOOK__; if (!oc.isDisabled&&oc.supportsFiber) {
        try {
          ot=oc.inject(rc), at=oc;
        } catch (ce) {}
      }
    }t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc, t.createPortal=function(e, t) {
      const n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null; if (!Gs(t)) throw Error(a(200)); return function(e, t, n) {
        const r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null; return {$$typeof: x, key: null==r?null:''+r, children: e, containerInfo: t, implementation: n};
      }(e, t, null, n);
    }, t.createRoot=function(e, t) {
      if (!Gs(e)) throw Error(a(299)); let n=!1; let r=''; let o=Qs; return null!=t&&(!0===t.unstable_strictMode&&(n=!0), void 0!==t.identifierPrefix&&(r=t.identifierPrefix), void 0!==t.onRecoverableError&&(o=t.onRecoverableError)), t=Us(e, 1, !1, null, 0, n, 0, r, o), e[mo]=t.current, Br(8===e.nodeType?e.parentNode:e), new Ys(t);
    }, t.findDOMNode=function(e) {
      if (null==e) return null; if (1===e.nodeType) return e; const t=e._reactInternals; if (void 0===t) {
        if ('function'==typeof e.render) throw Error(a(188)); throw e=Object.keys(e).join(','), Error(a(268, e));
      } return null===(e=We(t))?null:e.stateNode;
    }, t.flushSync=function(e) {
      return ds(e);
    }, t.hydrate=function(e, t, n) {
      if (!Zs(t)) throw Error(a(200)); return ec(null, e, t, !0, n);
    }, t.hydrateRoot=function(e, t, n) {
      if (!Gs(e)) throw Error(a(405)); const r=null!=n&&n.hydratedSources||null; let o=!1; let i=''; let l=Qs; if (null!=n&&(!0===n.unstable_strictMode&&(o=!0), void 0!==n.identifierPrefix&&(i=n.identifierPrefix), void 0!==n.onRecoverableError&&(l=n.onRecoverableError)), t=$s(t, null, e, 1, null!=n?n:null, o, 0, i, l), e[mo]=t.current, Br(e), r) for (e=0; e<r.length; e++)o=(o=(n=r[e])._getVersion)(n._source), null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n, o]:t.mutableSourceEagerHydrationData.push(n, o); return new Xs(t);
    }, t.render=function(e, t, n) {
      if (!Zs(t)) throw Error(a(200)); return ec(null, e, t, !1, n);
    }, t.unmountComponentAtNode=function(e) {
      if (!Zs(e)) throw Error(a(40)); return !!e._reactRootContainer&&(ds((function() {
        ec(null, null, e, !1, (function() {
          e._reactRootContainer=null, e[mo]=null;
        }));
      })), !0);
    }, t.unstable_batchedUpdates=cs, t.unstable_renderSubtreeIntoContainer=function(e, t, n, r) {
      if (!Zs(n)) throw Error(a(200)); if (null==e||void 0===e._reactInternals) throw Error(a(38)); return ec(e, t, n, !1, r);
    }, t.version='18.2.0-next-9e3b772b8-20220608';
  }, 338: (e, t, n)=>{
    'use strict'; const r=n(961); t.createRoot=r.createRoot, t.hydrateRoot=r.hydrateRoot;
  }, 961: (e, t, n)=>{
    'use strict'; !function e() {
      if ('undefined'!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&'function'==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    }(), e.exports=n(551);
  }, 345: (e, t, n)=>{
    'use strict'; function r() {
      const e=this.constructor.getDerivedStateFromProps(this.props, this.state); null!=e&&this.setState(e);
    } function o(e) {
      this.setState(function(t) {
        const n=this.constructor.getDerivedStateFromProps(e, t); return null!=n?n:null;
      }.bind(this));
    } function a(e, t) {
      try {
        var n=this.props; var r=this.state; this.props=e, this.state=t, this.__reactInternalSnapshotFlag=!0, this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n, r);
      } finally {
        this.props=n, this.state=r;
      }
    } function i(e) {
      const t=e.prototype; if (!t||!t.isReactComponent) throw new Error('Can only polyfill class components'); if ('function'!=typeof e.getDerivedStateFromProps&&'function'!=typeof t.getSnapshotBeforeUpdate) return e; let n=null; let i=null; let l=null; if ('function'==typeof t.componentWillMount?n='componentWillMount':'function'==typeof t.UNSAFE_componentWillMount&&(n='UNSAFE_componentWillMount'), 'function'==typeof t.componentWillReceiveProps?i='componentWillReceiveProps':'function'==typeof t.UNSAFE_componentWillReceiveProps&&(i='UNSAFE_componentWillReceiveProps'), 'function'==typeof t.componentWillUpdate?l='componentWillUpdate':'function'==typeof t.UNSAFE_componentWillUpdate&&(l='UNSAFE_componentWillUpdate'), null!==n||null!==i||null!==l) {
        const u=e.displayName||e.name; const s='function'==typeof e.getDerivedStateFromProps?'getDerivedStateFromProps()':'getSnapshotBeforeUpdate()'; throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n'+u+' uses '+s+' but also contains the following legacy lifecycles:'+(null!==n?'\n  '+n:'')+(null!==i?'\n  '+i:'')+(null!==l?'\n  '+l:'')+'\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks');
      } if ('function'==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r, t.componentWillReceiveProps=o), 'function'==typeof t.getSnapshotBeforeUpdate) {
        if ('function'!=typeof t.componentDidUpdate) throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'); t.componentWillUpdate=a; const c=t.componentDidUpdate; t.componentDidUpdate=function(e, t, n) {
          const r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n; c.call(this, e, t, r);
        };
      } return e;
    }n.r(t), n.d(t, {polyfill: ()=>i}), r.__suppressDeprecationWarning=!0, o.__suppressDeprecationWarning=!0, a.__suppressDeprecationWarning=!0;
  }, 720: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.bodyOpenClassName=t.portalClassName=void 0; const r=Object.assign||function(e) {
      for (let t=1; t<arguments.length; t++) {
        const n=arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; const o=function() {
      function e(e, t) {
        for (let n=0; n<t.length; n++) {
          const r=t[n]; r.enumerable=r.enumerable||!1, r.configurable=!0, 'value'in r&&(r.writable=!0), Object.defineProperty(e, r.key, r);
        }
      } return function(t, n, r) {
        return n&&e(t.prototype, n), r&&e(t, r), t;
      };
    }(); const a=n(540); const i=h(a); const l=h(n(961)); const u=h(n(556)); const s=h(n(90)); const c=function(e) {
      if (e&&e.__esModule) return e; const t={}; if (null!=e) for (const n in e)Object.prototype.hasOwnProperty.call(e, n)&&(t[n]=e[n]); return t.default=e, t;
    }(n(462)); const d=n(834); const f=h(d); const p=n(345); function h(e) {
      return e&&e.__esModule?e:{default: e};
    } function m(e, t) {
      if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
    } const g=t.portalClassName='ReactModalPortal'; const y=t.bodyOpenClassName='ReactModal__Body--open'; const v=d.canUseDOM&&void 0!==l.default.createPortal; const b=function(e) {
      return document.createElement(e);
    }; const w=function() {
      return v?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer;
    }; function S(e) {
      return e();
    } const x=function(e) {
      function t() {
        let e; let n; let o; !function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, t); for (var a=arguments.length, u=Array(a), c=0; c<a; c++)u[c]=arguments[c]; return n=o=m(this, (e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), o.removePortal=function() {
          !v&&l.default.unmountComponentAtNode(o.node); const e=S(o.props.parentSelector); e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
        }, o.portalRef=function(e) {
          o.portal=e;
        }, o.renderPortal=function(e) {
          const n=w()(o, i.default.createElement(s.default, r({defaultStyles: t.defaultStyles}, e)), o.node); o.portalRef(n);
        }, m(o, n);
      } return function(e, t) {
        if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):e.__proto__=t);
      }(t, e), o(t, [{key: 'componentDidMount', value: function() {
        d.canUseDOM&&(v||(this.node=b('div')), this.node.className=this.props.portalClassName, S(this.props.parentSelector).appendChild(this.node), !v&&this.renderPortal(this.props));
      }}, {key: 'getSnapshotBeforeUpdate', value: function(e) {
        return {prevParent: S(e.parentSelector), nextParent: S(this.props.parentSelector)};
      }}, {key: 'componentDidUpdate', value: function(e, t, n) {
        if (d.canUseDOM) {
          const r=this.props; const o=r.isOpen; const a=r.portalClassName; e.portalClassName!==a&&(this.node.className=a); const i=n.prevParent; const l=n.nextParent; l!==i&&(i.removeChild(this.node), l.appendChild(this.node)), (e.isOpen||o)&&!v&&this.renderPortal(this.props);
        }
      }}, {key: 'componentWillUnmount', value: function() {
        if (d.canUseDOM&&this.node&&this.portal) {
          const e=this.portal.state; const t=Date.now(); const n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS); n?(e.beforeClose||this.portal.closeWithTimeout(), setTimeout(this.removePortal, n-t)):this.removePortal();
        }
      }}, {key: 'render', value: function() {
        return d.canUseDOM&&v?(!this.node&&v&&(this.node=b('div')), w()(i.default.createElement(s.default, r({ref: this.portalRef, defaultStyles: t.defaultStyles}, this.props)), this.node)):null;
      }}], [{key: 'setAppElement', value: function(e) {
        c.setElement(e);
      }}]), t;
    }(a.Component); x.propTypes={isOpen: u.default.bool.isRequired, style: u.default.shape({content: u.default.object, overlay: u.default.object}), portalClassName: u.default.string, bodyOpenClassName: u.default.string, htmlOpenClassName: u.default.string, className: u.default.oneOfType([u.default.string, u.default.shape({base: u.default.string.isRequired, afterOpen: u.default.string.isRequired, beforeClose: u.default.string.isRequired})]), overlayClassName: u.default.oneOfType([u.default.string, u.default.shape({base: u.default.string.isRequired, afterOpen: u.default.string.isRequired, beforeClose: u.default.string.isRequired})]), appElement: u.default.oneOfType([u.default.instanceOf(f.default), u.default.instanceOf(d.SafeHTMLCollection), u.default.instanceOf(d.SafeNodeList), u.default.arrayOf(u.default.instanceOf(f.default))]), onAfterOpen: u.default.func, onRequestClose: u.default.func, closeTimeoutMS: u.default.number, ariaHideApp: u.default.bool, shouldFocusAfterRender: u.default.bool, shouldCloseOnOverlayClick: u.default.bool, shouldReturnFocusAfterClose: u.default.bool, preventScroll: u.default.bool, parentSelector: u.default.func, aria: u.default.object, data: u.default.object, role: u.default.string, contentLabel: u.default.string, shouldCloseOnEsc: u.default.bool, overlayRef: u.default.func, contentRef: u.default.func, id: u.default.string, overlayElement: u.default.func, contentElement: u.default.func}, x.defaultProps={isOpen: !1, portalClassName: g, bodyOpenClassName: y, role: 'dialog', ariaHideApp: !0, closeTimeoutMS: 0, shouldFocusAfterRender: !0, shouldCloseOnEsc: !0, shouldCloseOnOverlayClick: !0, shouldReturnFocusAfterClose: !0, preventScroll: !1, parentSelector: function() {
      return document.body;
    }, overlayElement: function(e, t) {
      return i.default.createElement('div', e, t);
    }, contentElement: function(e, t) {
      return i.default.createElement('div', e, t);
    }}, x.defaultStyles={overlay: {position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.75)'}, content: {position: 'absolute', top: '40px', left: '40px', right: '40px', bottom: '40px', border: '1px solid #ccc', background: '#fff', overflow: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: '4px', outline: 'none', padding: '20px'}}, (0, p.polyfill)(x), t.default=x;
  }, 90: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); const r=Object.assign||function(e) {
      for (let t=1; t<arguments.length; t++) {
        const n=arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
      } return e;
    }; const o='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
      return typeof e;
    }:function(e) {
      return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
    }; const a=function() {
      function e(e, t) {
        for (let n=0; n<t.length; n++) {
          const r=t[n]; r.enumerable=r.enumerable||!1, r.configurable=!0, 'value'in r&&(r.writable=!0), Object.defineProperty(e, r.key, r);
        }
      } return function(t, n, r) {
        return n&&e(t.prototype, n), r&&e(t, r), t;
      };
    }(); const i=n(540); const l=g(n(556)); const u=m(n(791)); const s=g(n(67)); const c=m(n(462)); const d=m(n(838)); const f=n(834); const p=g(f); const h=g(n(628)); function m(e) {
      if (e&&e.__esModule) return e; const t={}; if (null!=e) for (const n in e)Object.prototype.hasOwnProperty.call(e, n)&&(t[n]=e[n]); return t.default=e, t;
    } function g(e) {
      return e&&e.__esModule?e:{default: e};
    }n(727); const y={overlay: 'ReactModal__Overlay', content: 'ReactModal__Content'}; let v=0; const b=function(e) {
      function t(e) {
        !function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, t); const n=function(e, t) {
          if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); return !t||'object'!=typeof t&&'function'!=typeof t?e:t;
        }(this, (t.__proto__||Object.getPrototypeOf(t)).call(this, e)); return n.setOverlayRef=function(e) {
          n.overlay=e, n.props.overlayRef&&n.props.overlayRef(e);
        }, n.setContentRef=function(e) {
          n.content=e, n.props.contentRef&&n.props.contentRef(e);
        }, n.afterClose=function() {
          const e=n.props; const t=e.appElement; const r=e.ariaHideApp; const o=e.htmlOpenClassName; const a=e.bodyOpenClassName; const i=e.parentSelector; const l=i&&i().ownerDocument||document; a&&d.remove(l.body, a), o&&d.remove(l.getElementsByTagName('html')[0], o), r&&v>0&&0==(v-=1)&&c.show(t), n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(u.returnFocus(n.props.preventScroll), u.teardownScopedFocus()):u.popWithoutFocus()), n.props.onAfterClose&&n.props.onAfterClose(), h.default.deregister(n);
        }, n.open=function() {
          n.beforeOpen(), n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer), n.setState({beforeClose: !1})):(n.props.shouldFocusAfterRender&&(u.setupScopedFocus(n.node), u.markForFocusLater()), n.setState({isOpen: !0}, (function() {
            n.openAnimationFrame=requestAnimationFrame((function() {
              n.setState({afterOpen: !0}), n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl: n.overlay, contentEl: n.content});
            }));
          })));
        }, n.close=function() {
n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout();
        }, n.focusContent=function() {
          return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll: !0});
        }, n.closeWithTimeout=function() {
          const e=Date.now()+n.props.closeTimeoutMS; n.setState({beforeClose: !0, closesAt: e}, (function() {
            n.closeTimer=setTimeout(n.closeWithoutTimeout, n.state.closesAt-Date.now());
          }));
        }, n.closeWithoutTimeout=function() {
          n.setState({beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null}, n.afterClose);
        }, n.handleKeyDown=function(e) {
          (function(e) {
            return 'Tab'===e.code||9===e.keyCode;
          })(e)&&(0, s.default)(n.content, e), n.props.shouldCloseOnEsc&&function(e) {
            return 'Escape'===e.code||27===e.keyCode;
          }(e)&&(e.stopPropagation(), n.requestClose(e));
        }, n.handleOverlayOnClick=function(e) {
          null===n.shouldClose&&(n.shouldClose=!0), n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()), n.shouldClose=null;
        }, n.handleContentOnMouseUp=function() {
          n.shouldClose=!1;
        }, n.handleOverlayOnMouseDown=function(e) {
          n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault();
        }, n.handleContentOnClick=function() {
          n.shouldClose=!1;
        }, n.handleContentOnMouseDown=function() {
          n.shouldClose=!1;
        }, n.requestClose=function(e) {
          return n.ownerHandlesClose()&&n.props.onRequestClose(e);
        }, n.ownerHandlesClose=function() {
          return n.props.onRequestClose;
        }, n.shouldBeClosed=function() {
          return !n.state.isOpen&&!n.state.beforeClose;
        }, n.contentHasFocus=function() {
          return document.activeElement===n.content||n.content.contains(document.activeElement);
        }, n.buildClassName=function(e, t) {
          const r='object'===(void 0===t?'undefined':o(t))?t:{base: y[e], afterOpen: y[e]+'--after-open', beforeClose: y[e]+'--before-close'}; let a=r.base; return n.state.afterOpen&&(a=a+' '+r.afterOpen), n.state.beforeClose&&(a=a+' '+r.beforeClose), 'string'==typeof t&&t?a+' '+t:a;
        }, n.attributesFromObject=function(e, t) {
          return Object.keys(t).reduce((function(n, r) {
            return n[e+'-'+r]=t[r], n;
          }), {});
        }, n.state={afterOpen: !1, beforeClose: !1}, n.shouldClose=null, n.moveFromContentToOverlay=null, n;
      } return function(e, t) {
        if ('function'!=typeof t&&null!==t) throw new TypeError('Super expression must either be null or a function, not '+typeof t); e.prototype=Object.create(t&&t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e, t):e.__proto__=t);
      }(t, e), a(t, [{key: 'componentDidMount', value: function() {
        this.props.isOpen&&this.open();
      }}, {key: 'componentDidUpdate', value: function(e, t) {
this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(), this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent();
      }}, {key: 'componentWillUnmount', value: function() {
        this.state.isOpen&&this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }}, {key: 'beforeOpen', value: function() {
        const e=this.props; const t=e.appElement; const n=e.ariaHideApp; const r=e.htmlOpenClassName; const o=e.bodyOpenClassName; const a=e.parentSelector; const i=a&&a().ownerDocument||document; o&&d.add(i.body, o), r&&d.add(i.getElementsByTagName('html')[0], r), n&&(v+=1, c.hide(t)), h.default.register(this);
      }}, {key: 'render', value: function() {
        const e=this.props; const t=e.id; const n=e.className; const o=e.overlayClassName; const a=e.defaultStyles; const i=e.children; const l=n?{}:a.content; const u=o?{}:a.overlay; if (this.shouldBeClosed()) return null; const s={ref: this.setOverlayRef, className: this.buildClassName('overlay', o), style: r({}, u, this.props.style.overlay), onClick: this.handleOverlayOnClick, onMouseDown: this.handleOverlayOnMouseDown}; const c=r({'id': t, 'ref': this.setContentRef, 'style': r({}, l, this.props.style.content), 'className': this.buildClassName('content', n), 'tabIndex': '-1', 'onKeyDown': this.handleKeyDown, 'onMouseDown': this.handleContentOnMouseDown, 'onMouseUp': this.handleContentOnMouseUp, 'onClick': this.handleContentOnClick, 'role': this.props.role, 'aria-label': this.props.contentLabel}, this.attributesFromObject('aria', r({modal: !0}, this.props.aria)), this.attributesFromObject('data', this.props.data||{}), {'data-testid': this.props.testId}); const d=this.props.contentElement(c, i); return this.props.overlayElement(s, d);
      }}]), t;
    }(i.Component); b.defaultProps={style: {overlay: {}, content: {}}, defaultStyles: {}}, b.propTypes={isOpen: l.default.bool.isRequired, defaultStyles: l.default.shape({content: l.default.object, overlay: l.default.object}), style: l.default.shape({content: l.default.object, overlay: l.default.object}), className: l.default.oneOfType([l.default.string, l.default.object]), overlayClassName: l.default.oneOfType([l.default.string, l.default.object]), parentSelector: l.default.func, bodyOpenClassName: l.default.string, htmlOpenClassName: l.default.string, ariaHideApp: l.default.bool, appElement: l.default.oneOfType([l.default.instanceOf(p.default), l.default.instanceOf(f.SafeHTMLCollection), l.default.instanceOf(f.SafeNodeList), l.default.arrayOf(l.default.instanceOf(p.default))]), onAfterOpen: l.default.func, onAfterClose: l.default.func, onRequestClose: l.default.func, closeTimeoutMS: l.default.number, shouldFocusAfterRender: l.default.bool, shouldCloseOnOverlayClick: l.default.bool, shouldReturnFocusAfterClose: l.default.bool, preventScroll: l.default.bool, role: l.default.string, contentLabel: l.default.string, aria: l.default.object, data: l.default.object, children: l.default.node, shouldCloseOnEsc: l.default.bool, overlayRef: l.default.func, contentRef: l.default.func, id: l.default.string, overlayElement: l.default.func, contentElement: l.default.func, testId: l.default.string}, t.default=b, e.exports=t.default;
  }, 462: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.resetState=function() {
      i&&(i.removeAttribute?i.removeAttribute('aria-hidden'):null!=i.length?i.forEach((function(e) {
        return e.removeAttribute('aria-hidden');
      })):document.querySelectorAll(i).forEach((function(e) {
        return e.removeAttribute('aria-hidden');
      }))), i=null;
    }, t.log=function() {}, t.assertNodeList=l, t.setElement=function(e) {
      let t=e; if ('string'==typeof t&&a.canUseDOM) {
        const n=document.querySelectorAll(t); l(n, t), t=n;
      } return i=t||i;
    }, t.validateElement=u, t.hide=function(e) {
      let t=!0; let n=!1; let r=void 0; try {
        for (var o, a=u(e)[Symbol.iterator](); !(t=(o=a.next()).done); t=!0)o.value.setAttribute('aria-hidden', 'true');
      } catch (e) {
        n=!0, r=e;
      } finally {
        try {
          !t&&a.return&&a.return();
        } finally {
          if (n) throw r;
        }
      }
    }, t.show=function(e) {
      let t=!0; let n=!1; let r=void 0; try {
        for (var o, a=u(e)[Symbol.iterator](); !(t=(o=a.next()).done); t=!0)o.value.removeAttribute('aria-hidden');
      } catch (e) {
        n=!0, r=e;
      } finally {
        try {
          !t&&a.return&&a.return();
        } finally {
          if (n) throw r;
        }
      }
    }, t.documentNotReadyOrSSRTesting=function() {
      i=null;
    }; let r; const o=(r=n(771))&&r.__esModule?r:{default: r}; var a=n(834); var i=null; function l(e, t) {
      if (!e||!e.length) throw new Error('react-modal: No elements were found for selector '+t+'.');
    } function u(e) {
      const t=e||i; return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0, o.default)(!1, ['react-modal: App element is not defined.', 'Please use `Modal.setAppElement(el)` or set `appElement={el}`.', 'This is needed so screen readers don\'t see main content', 'when modal is opened. It is not recommended, but you can opt-out', 'by setting `ariaHideApp={false}`.'].join(' ')), []);
    }
  }, 727: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.resetState=function() {
      for (let e=[a, i], t=0; t<e.length; t++) {
        const n=e[t]; n&&n.parentNode&&n.parentNode.removeChild(n);
      }a=i=null, l=[];
    }, t.log=function() {
      console.log('bodyTrap ----------'), console.log(l.length); for (let e=[a, i], t=0; t<e.length; t++) {
        const n=e[t]||{}; console.log(n.nodeName, n.className, n.id);
      }console.log('edn bodyTrap ----------');
    }; let r; const o=(r=n(628))&&r.__esModule?r:{default: r}; var a=void 0; var i=void 0; var l=[]; function u() {
      0!==l.length&&l[l.length-1].focusContent();
    }o.default.subscribe((function(e, t) {
      a||i||((a=document.createElement('div')).setAttribute('data-react-modal-body-trap', ''), a.style.position='absolute', a.style.opacity='0', a.setAttribute('tabindex', '0'), a.addEventListener('focus', u), (i=a.cloneNode()).addEventListener('focus', u)), (l=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a, document.body.firstChild), document.body.lastChild!==i&&document.body.appendChild(i)):(a.parentElement&&a.parentElement.removeChild(a), i.parentElement&&i.parentElement.removeChild(i));
    }));
  }, 838: (e, t)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.resetState=function() {
      const e=document.getElementsByTagName('html')[0]; for (const t in n)o(e, n[t]); const a=document.body; for (const i in r)o(a, r[i]); n={}, r={};
    }, t.log=function() {}; var n={}; var r={}; function o(e, t) {
      e.classList.remove(t);
    }t.add=function(e, t) {
      return o=e.classList, a='html'==e.nodeName.toLowerCase()?n:r, void t.split(' ').forEach((function(e) {
        !function(e, t) {
          e[t]||(e[t]=0), e[t]+=1;
        }(a, e), o.add(e);
      })); let o; let a;
    }, t.remove=function(e, t) {
      return o=e.classList, a='html'==e.nodeName.toLowerCase()?n:r, void t.split(' ').forEach((function(e) {
        !function(e, t) {
          e[t]&&(e[t]-=1);
        }(a, e), 0===a[e]&&o.remove(e);
      })); let o; let a;
    };
  }, 791: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.resetState=function() {
      a=[];
    }, t.log=function() {}, t.handleBlur=u, t.handleFocus=s, t.markForFocusLater=function() {
      a.push(document.activeElement);
    }, t.returnFocus=function() {
      const e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]; let t=null; try {
        return void(0!==a.length&&(t=a.pop()).focus({preventScroll: e}));
      } catch (e) {
        console.warn(['You tried to return focus to', t, 'but it is not in the DOM anymore'].join(' '));
      }
    }, t.popWithoutFocus=function() {
      a.length>0&&a.pop();
    }, t.setupScopedFocus=function(e) {
      i=e, window.addEventListener?(window.addEventListener('blur', u, !1), document.addEventListener('focus', s, !0)):(window.attachEvent('onBlur', u), document.attachEvent('onFocus', s));
    }, t.teardownScopedFocus=function() {
      i=null, window.addEventListener?(window.removeEventListener('blur', u), document.removeEventListener('focus', s)):(window.detachEvent('onBlur', u), document.detachEvent('onFocus', s));
    }; let r; const o=(r=n(411))&&r.__esModule?r:{default: r}; var a=[]; var i=null; let l=!1; function u() {
      l=!0;
    } function s() {
      if (l) {
        if (l=!1, !i) return; setTimeout((function() {
          i.contains(document.activeElement)||((0, o.default)(i)[0]||i).focus();
        }), 0);
      }
    }
  }, 628: (e, t)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.log=function() {
      console.log('portalOpenInstances ----------'), console.log(r.openInstances.length), r.openInstances.forEach((function(e) {
        return console.log(e);
      })), console.log('end portalOpenInstances ----------');
    }, t.resetState=function() {
      r=new n;
    }; var n=function e() {
      const t=this; !function(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }(this, e), this.register=function(e) {
        -1===t.openInstances.indexOf(e)&&(t.openInstances.push(e), t.emit('register'));
      }, this.deregister=function(e) {
        const n=t.openInstances.indexOf(e); -1!==n&&(t.openInstances.splice(n, 1), t.emit('deregister'));
      }, this.subscribe=function(e) {
        t.subscribers.push(e);
      }, this.emit=function(e) {
        t.subscribers.forEach((function(n) {
          return n(e, t.openInstances.slice());
        }));
      }, this.openInstances=[], this.subscribers=[];
    }; var r=new n; t.default=r;
  }, 834: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0; let r; const o=((r=n(792))&&r.__esModule?r:{default: r}).default; const a=o.canUseDOM?window.HTMLElement:{}; t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{}, t.SafeNodeList=o.canUseDOM?window.NodeList:{}, t.canUseDOM=o.canUseDOM, t.default=a;
  }, 67: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.default=function(e, t) {
      const n=(0, o.default)(e); if (n.length) {
        let r=void 0; const i=t.shiftKey; const l=n[0]; const u=n[n.length-1]; const s=a(); if (e===s) {
          if (!i) return; r=u;
        } if (u!==s||i||(r=l), l===s&&i&&(r=u), r) return t.preventDefault(), void r.focus(); const c=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent); if (null!=c&&'Chrome'!=c[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)) {
          let d=n.indexOf(s); if (d>-1&&(d+=i?-1:1), void 0===(r=n[d])) return t.preventDefault(), void(r=i?u:l).focus(); t.preventDefault(), r.focus();
        }
      } else t.preventDefault();
    }; let r; var o=(r=n(411))&&r.__esModule?r:{default: r}; function a() {
      const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document; return e.activeElement.shadowRoot?a(e.activeElement.shadowRoot):e.activeElement;
    }e.exports=t.default;
  }, 411: (e, t)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.default=function e(t) {
      return [].slice.call(t.querySelectorAll('*'), 0).reduce((function(t, n) {
        return t.concat(n.shadowRoot?e(n.shadowRoot):[n]);
      }), []).filter(i);
    }; const n='none'; const r='contents'; const o=/input|select|textarea|button|object|iframe/; function a(e) {
      const t=e.offsetWidth<=0&&e.offsetHeight<=0; if (t&&!e.innerHTML) return !0; try {
        const o=window.getComputedStyle(e); const a=o.getPropertyValue('display'); return t?a!==r&&function(e, t) {
          return 'visible'!==t.getPropertyValue('overflow')||e.scrollWidth<=0&&e.scrollHeight<=0;
        }(e, o):a===n;
      } catch (e) {
        return console.warn('Failed to inspect element style'), !1;
      }
    } function i(e) {
      let t=e.getAttribute('tabindex'); null===t&&(t=void 0); const n=isNaN(t); return (n||t>=0)&&function(e, t) {
        const n=e.nodeName.toLowerCase(); return (o.test(n)&&!e.disabled||'a'===n&&e.href||t)&&function(e) {
          for (let t=e, n=e.getRootNode&&e.getRootNode(); t&&t!==document.body;) {
            if (n&&t===n&&(t=n.host.parentNode), a(t)) return !1; t=t.parentNode;
          } return !0;
        }(e);
      }(e, !n);
    }e.exports=t.default;
  }, 312: (e, t, n)=>{
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); let r; const o=(r=n(720))&&r.__esModule?r:{default: r}; t.default=o.default, e.exports=t.default;
  }, 287: (e, t)=>{
    'use strict'; const n=Symbol.for('react.element'); const r=Symbol.for('react.portal'); const o=Symbol.for('react.fragment'); const a=Symbol.for('react.strict_mode'); const i=Symbol.for('react.profiler'); const l=Symbol.for('react.provider'); const u=Symbol.for('react.context'); const s=Symbol.for('react.forward_ref'); const c=Symbol.for('react.suspense'); const d=Symbol.for('react.memo'); const f=Symbol.for('react.lazy'); const p=Symbol.iterator; const h={isMounted: function() {
      return !1;
    }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {}}; const m=Object.assign; const g={}; function y(e, t, n) {
      this.props=e, this.context=t, this.refs=g, this.updater=n||h;
    } function v() {} function b(e, t, n) {
      this.props=e, this.context=t, this.refs=g, this.updater=n||h;
    }y.prototype.isReactComponent={}, y.prototype.setState=function(e, t) {
      if ('object'!=typeof e&&'function'!=typeof e&&null!=e) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'); this.updater.enqueueSetState(this, e, t, 'setState');
    }, y.prototype.forceUpdate=function(e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }, v.prototype=y.prototype; const w=b.prototype=new v; w.constructor=b, m(w, y.prototype), w.isPureReactComponent=!0; const S=Array.isArray; const x=Object.prototype.hasOwnProperty; const E={current: null}; const _={key: !0, ref: !0, __self: !0, __source: !0}; function k(e, t, r) {
      let o; const a={}; let i=null; let l=null; if (null!=t) for (o in void 0!==t.ref&&(l=t.ref), void 0!==t.key&&(i=''+t.key), t)x.call(t, o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]); let u=arguments.length-2; if (1===u)a.children=r; else if (1<u) {
        for (var s=Array(u), c=0; c<u; c++)s[c]=arguments[c+2]; a.children=s;
      } if (e&&e.defaultProps) for (o in u=e.defaultProps) void 0===a[o]&&(a[o]=u[o]); return {$$typeof: n, type: e, key: i, ref: l, props: a, _owner: E.current};
    } function C(e) {
      return 'object'==typeof e&&null!==e&&e.$$typeof===n;
    } const O=/\/+/g; function N(e, t) {
      return 'object'==typeof e&&null!==e&&null!=e.key?function(e) {
        const t={'=': '=0', ':': '=2'}; return '$'+e.replace(/[=:]/g, (function(e) {
          return t[e];
        }));
      }(''+e.key):t.toString(36);
    } function M(e, t, o, a, i) {
      let l=typeof e; 'undefined'!==l&&'boolean'!==l||(e=null); let u=!1; if (null===e)u=!0; else {
        switch (l) {
          case 'string': case 'number': u=!0; break; case 'object': switch (e.$$typeof) {
            case n: case r: u=!0;
          }
        }
      } if (u) {
        return i=i(u=e), e=''===a?'.'+N(u, 0):a, S(i)?(o='', null!=e&&(o=e.replace(O, '$&/')+'/'), M(i, t, o, '', (function(e) {
          return e;
        }))):null!=i&&(C(i)&&(i=function(e, t) {
          return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner};
        }(i, o+(!i.key||u&&u.key===i.key?'':(''+i.key).replace(O, '$&/')+'/')+e)), t.push(i)), 1;
      } if (u=0, a=''===a?'.':a+':', S(e)) {
        for (var s=0; s<e.length; s++) {
          var c=a+N(l=e[s], s); u+=M(l, t, o, c, i);
        }
      } else if (c=function(e) {
        return null===e||'object'!=typeof e?null:'function'==typeof(e=p&&e[p]||e['@@iterator'])?e:null;
      }(e), 'function'==typeof c) for (e=c.call(e), s=0; !(l=e.next()).done;)u+=M(l=l.value, t, o, c=a+N(l, s++), i); else if ('object'===l) throw t=String(e), Error('Objects are not valid as a React child (found: '+('[object Object]'===t?'object with keys {'+Object.keys(e).join(', ')+'}':t)+'). If you meant to render a collection of children, use an array instead.'); return u;
    } function P(e, t, n) {
      if (null==e) return e; const r=[]; let o=0; return M(e, r, '', '', (function(e) {
        return t.call(n, e, o++);
      })), r;
    } function T(e) {
      if (-1===e._status) {
        let t=e._result; (t=t()).then((function(t) {
          0!==e._status&&-1!==e._status||(e._status=1, e._result=t);
        }), (function(t) {
          0!==e._status&&-1!==e._status||(e._status=2, e._result=t);
        })), -1===e._status&&(e._status=0, e._result=t);
      } if (1===e._status) return e._result.default; throw e._result;
    } const R={current: null}; const A={transition: null}; const I={ReactCurrentDispatcher: R, ReactCurrentBatchConfig: A, ReactCurrentOwner: E}; t.Children={map: P, forEach: function(e, t, n) {
      P(e, (function() {
        t.apply(this, arguments);
      }), n);
    }, count: function(e) {
      let t=0; return P(e, (function() {
        t++;
      })), t;
    }, toArray: function(e) {
      return P(e, (function(e) {
        return e;
      }))||[];
    }, only: function(e) {
      if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.'); return e;
    }}, t.Component=y, t.Fragment=o, t.Profiler=i, t.PureComponent=b, t.StrictMode=a, t.Suspense=c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I, t.cloneElement=function(e, t, r) {
      if (null==e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed '+e+'.'); const o=m({}, e.props); let a=e.key; let i=e.ref; let l=e._owner; if (null!=t) {
        if (void 0!==t.ref&&(i=t.ref, l=E.current), void 0!==t.key&&(a=''+t.key), e.type&&e.type.defaultProps) var u=e.type.defaultProps; for (s in t)x.call(t, s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s]);
      } var s=arguments.length-2; if (1===s)o.children=r; else if (1<s) {
        u=Array(s); for (let c=0; c<s; c++)u[c]=arguments[c+2]; o.children=u;
      } return {$$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l};
    }, t.createContext=function(e) {
      return (e={$$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null}).Provider={$$typeof: l, _context: e}, e.Consumer=e;
    }, t.createElement=k, t.createFactory=function(e) {
      const t=k.bind(null, e); return t.type=e, t;
    }, t.createRef=function() {
      return {current: null};
    }, t.forwardRef=function(e) {
      return {$$typeof: s, render: e};
    }, t.isValidElement=C, t.lazy=function(e) {
      return {$$typeof: f, _payload: {_status: -1, _result: e}, _init: T};
    }, t.memo=function(e, t) {
      return {$$typeof: d, type: e, compare: void 0===t?null:t};
    }, t.startTransition=function(e) {
      const t=A.transition; A.transition={}; try {
        e();
      } finally {
        A.transition=t;
      }
    }, t.unstable_act=function() {
      throw Error('act(...) is not supported in production builds of React.');
    }, t.useCallback=function(e, t) {
      return R.current.useCallback(e, t);
    }, t.useContext=function(e) {
      return R.current.useContext(e);
    }, t.useDebugValue=function() {}, t.useDeferredValue=function(e) {
      return R.current.useDeferredValue(e);
    }, t.useEffect=function(e, t) {
      return R.current.useEffect(e, t);
    }, t.useId=function() {
      return R.current.useId();
    }, t.useImperativeHandle=function(e, t, n) {
      return R.current.useImperativeHandle(e, t, n);
    }, t.useInsertionEffect=function(e, t) {
      return R.current.useInsertionEffect(e, t);
    }, t.useLayoutEffect=function(e, t) {
      return R.current.useLayoutEffect(e, t);
    }, t.useMemo=function(e, t) {
      return R.current.useMemo(e, t);
    }, t.useReducer=function(e, t, n) {
      return R.current.useReducer(e, t, n);
    }, t.useRef=function(e) {
      return R.current.useRef(e);
    }, t.useState=function(e) {
      return R.current.useState(e);
    }, t.useSyncExternalStore=function(e, t, n) {
      return R.current.useSyncExternalStore(e, t, n);
    }, t.useTransition=function() {
      return R.current.useTransition();
    }, t.version='18.2.0';
  }, 540: (e, t, n)=>{
    'use strict'; e.exports=n(287);
  }, 463: (e, t)=>{
    'use strict'; function n(e, t) {
      let n=e.length; e.push(t); e:for (;0<n;) {
        const r=n-1>>>1; const o=e[r]; if (!(0<a(o, t))) break e; e[r]=t, e[n]=o, n=r;
      }
    } function r(e) {
      return 0===e.length?null:e[0];
    } function o(e) {
      if (0===e.length) return null; const t=e[0]; const n=e.pop(); if (n!==t) {
        e[0]=n; e:for (let r=0, o=e.length, i=o>>>1; r<i;) {
          const l=2*(r+1)-1; const u=e[l]; const s=l+1; const c=e[s]; if (0>a(u, n))s<o&&0>a(c, u)?(e[r]=c, e[s]=n, r=s):(e[r]=u, e[l]=n, r=l); else {
            if (!(s<o&&0>a(c, n))) break e; e[r]=c, e[s]=n, r=s;
          }
        }
      } return t;
    } function a(e, t) {
      const n=e.sortIndex-t.sortIndex; return 0!==n?n:e.id-t.id;
    } if ('object'==typeof performance&&'function'==typeof performance.now) {
      const i=performance; t.unstable_now=function() {
        return i.now();
      };
    } else {
      const l=Date; const u=l.now(); t.unstable_now=function() {
        return l.now()-u;
      };
    } const s=[]; const c=[]; let d=1; let f=null; let p=3; let h=!1; let m=!1; let g=!1; const y='function'==typeof setTimeout?setTimeout:null; const v='function'==typeof clearTimeout?clearTimeout:null; const b='undefined'!=typeof setImmediate?setImmediate:null; function w(e) {
      for (let t=r(c); null!==t;) {
        if (null===t.callback)o(c); else {
          if (!(t.startTime<=e)) break; o(c), t.sortIndex=t.expirationTime, n(s, t);
        }t=r(c);
      }
    } function S(e) {
      if (g=!1, w(e), !m) {
        if (null!==r(s))m=!0, A(x); else {
          const t=r(c); null!==t&&I(S, t.startTime-e);
        }
      }
    } function x(e, n) {
      m=!1, g&&(g=!1, v(C), C=-1), h=!0; const a=p; try {
        for (w(n), f=r(s); null!==f&&(!(f.expirationTime>n)||e&&!M());) {
          const i=f.callback; if ('function'==typeof i) {
            f.callback=null, p=f.priorityLevel; const l=i(f.expirationTime<=n); n=t.unstable_now(), 'function'==typeof l?f.callback=l:f===r(s)&&o(s), w(n);
          } else o(s); f=r(s);
        } if (null!==f) var u=!0; else {
          const d=r(c); null!==d&&I(S, d.startTime-n), u=!1;
        } return u;
      } finally {
        f=null, p=a, h=!1;
      }
    }'undefined'!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling); let E; let _=!1; let k=null; var C=-1; let O=5; let N=-1; function M() {
      return !(t.unstable_now()-N<O);
    } function P() {
      if (null!==k) {
        const e=t.unstable_now(); N=e; let n=!0; try {
          n=k(!0, e);
        } finally {
n?E():(_=!1, k=null);
        }
      } else _=!1;
    } if ('function'==typeof b) {
      E=function() {
        b(P);
      };
    } else if ('undefined'!=typeof MessageChannel) {
      const T=new MessageChannel; const R=T.port2; T.port1.onmessage=P, E=function() {
        R.postMessage(null);
      };
    } else {
      E=function() {
        y(P, 0);
      };
    } function A(e) {
      k=e, _||(_=!0, E());
    } function I(e, n) {
      C=y((function() {
        e(t.unstable_now());
      }), n);
    }t.unstable_IdlePriority=5, t.unstable_ImmediatePriority=1, t.unstable_LowPriority=4, t.unstable_NormalPriority=3, t.unstable_Profiling=null, t.unstable_UserBlockingPriority=2, t.unstable_cancelCallback=function(e) {
      e.callback=null;
    }, t.unstable_continueExecution=function() {
      m||h||(m=!0, A(x));
    }, t.unstable_forceFrameRate=function(e) {
0>e||125<e?console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'):O=0<e?Math.floor(1e3/e):5;
    }, t.unstable_getCurrentPriorityLevel=function() {
      return p;
    }, t.unstable_getFirstCallbackNode=function() {
      return r(s);
    }, t.unstable_next=function(e) {
      switch (p) {
        case 1: case 2: case 3: var t=3; break; default: t=p;
      } const n=p; p=t; try {
        return e();
      } finally {
        p=n;
      }
    }, t.unstable_pauseExecution=function() {}, t.unstable_requestPaint=function() {}, t.unstable_runWithPriority=function(e, t) {
      switch (e) {
        case 1: case 2: case 3: case 4: case 5: break; default: e=3;
      } const n=p; p=e; try {
        return t();
      } finally {
        p=n;
      }
    }, t.unstable_scheduleCallback=function(e, o, a) {
      const i=t.unstable_now(); switch (a='object'==typeof a&&null!==a&&'number'==typeof(a=a.delay)&&0<a?i+a:i, e) {
        case 1: var l=-1; break; case 2: l=250; break; case 5: l=1073741823; break; case 4: l=1e4; break; default: l=5e3;
      } return e={id: d++, callback: o, priorityLevel: e, startTime: a, expirationTime: l=a+l, sortIndex: -1}, a>i?(e.sortIndex=a, n(c, e), null===r(s)&&e===r(c)&&(g?(v(C), C=-1):g=!0, I(S, a-i))):(e.sortIndex=l, n(s, e), m||h||(m=!0, A(x))), e;
    }, t.unstable_shouldYield=M, t.unstable_wrapCallback=function(e) {
      const t=p; return function() {
        const n=p; p=t; try {
          return e.apply(this, arguments);
        } finally {
          p=n;
        }
      };
    };
  }, 982: (e, t, n)=>{
    'use strict'; e.exports=n(463);
  }, 72: (e)=>{
    'use strict'; const t=[]; function n(e) {
      for (var n=-1, r=0; r<t.length; r++) {
        if (t[r].identifier===e) {
          n=r; break;
        }
      } return n;
    } function r(e, r) {
      for (var a={}, i=[], l=0; l<e.length; l++) {
        const u=e[l]; const s=r.base?u[0]+r.base:u[0]; const c=a[s]||0; const d=''.concat(s, ' ').concat(c); a[s]=c+1; const f=n(d); const p={css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5]}; if (-1!==f)t[f].references++, t[f].updater(p); else {
          const h=o(p, r); r.byIndex=l, t.splice(l, 0, {identifier: d, updater: h, references: 1});
        }i.push(d);
      } return i;
    } function o(e, t) {
      const n=t.domAPI(t); return n.update(e), function(t) {
        if (t) {
          if (t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer) return; n.update(e=t);
        } else n.remove();
      };
    }e.exports=function(e, o) {
      let a=r(e=e||[], o=o||{}); return function(e) {
        e=e||[]; for (let i=0; i<a.length; i++) {
          const l=n(a[i]); t[l].references--;
        } for (var u=r(e, o), s=0; s<a.length; s++) {
          const c=n(a[s]); 0===t[c].references&&(t[c].updater(), t.splice(c, 1));
        }a=u;
      };
    };
  }, 659: (e)=>{
    'use strict'; const t={}; e.exports=function(e, n) {
      const r=function(e) {
        if (void 0===t[e]) {
          let n=document.querySelector(e); if (window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement) {
            try {
              n=n.contentDocument.head;
            } catch (e) {
              n=null;
            }
          }t[e]=n;
        } return t[e];
      }(e); if (!r) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.'); r.appendChild(n);
    };
  }, 159: (e)=>{
    'use strict'; e.exports=function(e) {
      const t=document.createElement('style'); return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
    };
  }, 56: (e, t, n)=>{
    'use strict'; e.exports=function(e) {
      const t=n.nc; t&&e.setAttribute('nonce', t);
    };
  }, 825: (e)=>{
    'use strict'; e.exports=function(e) {
      if ('undefined'==typeof document) return {update: function() {}, remove: function() {}}; const t=e.insertStyleElement(e); return {update: function(n) {
        !function(e, t, n) {
          let r=''; n.supports&&(r+='@supports ('.concat(n.supports, ') {')), n.media&&(r+='@media '.concat(n.media, ' {')); const o=void 0!==n.layer; o&&(r+='@layer'.concat(n.layer.length>0?' '.concat(n.layer):'', ' {')), r+=n.css, o&&(r+='}'), n.media&&(r+='}'), n.supports&&(r+='}'); const a=n.sourceMap; a&&'undefined'!=typeof btoa&&(r+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')), t.styleTagTransform(r, e, t.options);
        }(t, e, n);
      }, remove: function() {
        !function(e) {
          if (null===e.parentNode) return !1; e.parentNode.removeChild(e);
        }(t);
      }};
    };
  }, 113: (e)=>{
    'use strict'; e.exports=function(e, t) {
      if (t.styleSheet)t.styleSheet.cssText=e; else {
        for (;t.firstChild;)t.removeChild(t.firstChild); t.appendChild(document.createTextNode(e));
      }
    };
  }, 63: (e, t, n)=>{
    'use strict'; const r=n(540); const o='function'==typeof Object.is?Object.is:function(e, t) {
      return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t;
    }; const a=r.useState; const i=r.useEffect; const l=r.useLayoutEffect; const u=r.useDebugValue; function s(e) {
      const t=e.getSnapshot; e=e.value; try {
        const n=t(); return !o(e, n);
      } catch (e) {
        return !0;
      }
    } const c='undefined'==typeof window||void 0===window.document||void 0===window.document.createElement?function(e, t) {
      return t();
    }:function(e, t) {
      const n=t(); const r=a({inst: {value: n, getSnapshot: t}}); const o=r[0].inst; const c=r[1]; return l((function() {
        o.value=n, o.getSnapshot=t, s(o)&&c({inst: o});
      }), [e, n, t]), i((function() {
        return s(o)&&c({inst: o}), e((function() {
          s(o)&&c({inst: o});
        }));
      }), [e]), u(n), n;
    }; t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c;
  }, 940: (e, t, n)=>{
    'use strict'; const r=n(540); const o=n(888); const a='function'==typeof Object.is?Object.is:function(e, t) {
      return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t;
    }; const i=o.useSyncExternalStore; const l=r.useRef; const u=r.useEffect; const s=r.useMemo; const c=r.useDebugValue; t.useSyncExternalStoreWithSelector=function(e, t, n, r, o) {
      let d=l(null); if (null===d.current) {
        var f={hasValue: !1, value: null}; d.current=f;
      } else f=d.current; d=s((function() {
        function e(e) {
          if (!u) {
            if (u=!0, i=e, e=r(e), void 0!==o&&f.hasValue) {
              var t=f.value; if (o(t, e)) return l=t;
            } return l=e;
          } if (t=l, a(i, e)) return t; const n=r(e); return void 0!==o&&o(t, n)?t:(i=e, l=n);
        } let i; let l; var u=!1; const s=void 0===n?null:n; return [function() {
          return e(t());
        }, null===s?void 0:function() {
          return e(s());
        }];
      }), [t, n, r, o]); const p=i(e, d[0], d[1]); return u((function() {
        f.hasValue=!0, f.value=p;
      }), [p]), c(p), p;
    };
  }, 154: (e, t, n)=>{
    'use strict'; const r=n(540); const o='function'==typeof Object.is?Object.is:function(e, t) {
      return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t;
    }; const a=r.useSyncExternalStore; const i=r.useRef; const l=r.useEffect; const u=r.useMemo; const s=r.useDebugValue; t.useSyncExternalStoreWithSelector=function(e, t, n, r, c) {
      let d=i(null); if (null===d.current) {
        var f={hasValue: !1, value: null}; d.current=f;
      } else f=d.current; d=u((function() {
        function e(e) {
          if (!l) {
            if (l=!0, a=e, e=r(e), void 0!==c&&f.hasValue) {
              var t=f.value; if (c(t, e)) return i=t;
            } return i=e;
          } if (t=i, o(a, e)) return t; const n=r(e); return void 0!==c&&c(t, n)?t:(a=e, i=n);
        } let a; let i; var l=!1; const u=void 0===n?null:n; return [function() {
          return e(t());
        }, null===u?void 0:function() {
          return e(u());
        }];
      }), [t, n, r, c]); const p=a(e, d[0], d[1]); return l((function() {
        f.hasValue=!0, f.value=p;
      }), [p]), s(p), p;
    };
  }, 888: (e, t, n)=>{
    'use strict'; e.exports=n(63);
  }, 242: (e, t, n)=>{
    'use strict'; e.exports=n(940);
  }, 418: (e, t, n)=>{
    'use strict'; e.exports=n(154);
  }, 771: (e)=>{
    'use strict'; e.exports=function() {};
  }}; const r={}; function o(e) {
    const t=r[e]; if (void 0!==t) return t.exports; const a=r[e]={id: e, exports: {}}; return n[e](a, a.exports, o), a.exports;
  }o.n=(e)=>{
    const t=e&&e.__esModule?()=>e.default:()=>e; return o.d(t, {a: t}), t;
  }, t=Object.getPrototypeOf?(e)=>Object.getPrototypeOf(e):(e)=>e.__proto__, o.t=function(n, r) {
    if (1&r&&(n=this(n)), 8&r) return n; if ('object'==typeof n&&n) {
      if (4&r&&n.__esModule) return n; if (16&r&&'function'==typeof n.then) return n;
    } const a=Object.create(null); o.r(a); const i={}; e=e||[null, t({}), t([]), t(t)]; for (let l=2&r&&n; 'object'==typeof l&&!~e.indexOf(l); l=t(l))Object.getOwnPropertyNames(l).forEach(((e)=>i[e]=()=>n[e])); return i.default=()=>n, o.d(a, i), a;
  }, o.d=(e, t)=>{
    for (const n in t)o.o(t, n)&&!o.o(e, n)&&Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
  }, o.o=(e, t)=>Object.prototype.hasOwnProperty.call(e, t), o.r=(e)=>{
    'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
  }, o.p='/', o.nc=void 0, (()=>{
    'use strict'; const e=o(540); const t=o.t(e, 2); const n=o(338); const r=function() {
      return e.createElement('section', null, e.createElement('div', {className: 'step-1'}, e.createElement('span', null, '1.'), ' Make sure your local database is running'), e.createElement('div', {className: 'step-2'}, e.createElement('span', null, '2.'), ' Enter your databse credentials'), e.createElement('div', {className: 'step-3'}, e.createElement('span', null, '3.'), ' Click on the table and columns you need'), e.createElement('div', {className: 'step-4'}, e.createElement('span', null, '4.'), ' Copy your SQL query and use it in your own codebase'), e.createElement('svg', {className: 'line', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100'}, e.createElement('path', {d: 'M 20 10 Q 20 50 20 90', fill: 'none', stroke: '#0b002d', strokeWidth: '0.5'})));
    }; function a() {
      return a=Object.assign?Object.assign.bind():function(e) {
        for (let t=1; t<arguments.length; t++) {
          const n=arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
        } return e;
      }, a.apply(this, arguments);
    } let i; !function(e) {
      e.Pop='POP', e.Push='PUSH', e.Replace='REPLACE';
    }(i||(i={})); const l='popstate'; function u(e, t) {
      if (!1===e||null==e) throw new Error(t);
    } function s(e, t) {
      if (!e) {
        'undefined'!=typeof console&&console.warn(t); try {
          throw new Error(t);
        } catch (e) {}
      }
    } function c(e, t) {
      return {usr: e.state, key: e.key, idx: t};
    } function d(e, t, n, r) {
      return void 0===n&&(n=null), a({pathname: 'string'==typeof e?e:e.pathname, search: '', hash: ''}, 'string'==typeof t?p(t):t, {state: n, key: t&&t.key||r||Math.random().toString(36).substr(2, 8)});
    } function f(e) {
      let {pathname: t='/', search: n='', hash: r=''}=e; return n&&'?'!==n&&(t+='?'===n.charAt(0)?n:'?'+n), r&&'#'!==r&&(t+='#'===r.charAt(0)?r:'#'+r), t;
    } function p(e) {
      const t={}; if (e) {
        const n=e.indexOf('#'); n>=0&&(t.hash=e.substr(n), e=e.substr(0, n)); const r=e.indexOf('?'); r>=0&&(t.search=e.substr(r), e=e.substr(0, r)), e&&(t.pathname=e);
      } return t;
    } let h; function m(e, t, n) {
      void 0===n&&(n='/'); const r=M(('string'==typeof t?p(t):t).pathname||'/', n); if (null==r) return null; const o=g(e); !function(e) {
        e.sort(((e, t)=>e.score!==t.score?t.score-e.score:function(e, t) {
          return e.length===t.length&&e.slice(0, -1).every(((e, n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0;
        }(e.routesMeta.map(((e)=>e.childrenIndex)), t.routesMeta.map(((e)=>e.childrenIndex)))));
      }(o); let a=null; for (let e=0; null==a&&e<o.length; ++e) {
        const t=N(r); a=C(o[e], t);
      } return a;
    } function g(e, t, n, r) {
      void 0===t&&(t=[]), void 0===n&&(n=[]), void 0===r&&(r=''); const o=(e, o, a)=>{
        const i={relativePath: void 0===a?e.path||'':a, caseSensitive: !0===e.caseSensitive, childrenIndex: o, route: e}; i.relativePath.startsWith('/')&&(u(i.relativePath.startsWith(r), 'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath=i.relativePath.slice(r.length)); const l=A([r, i.relativePath]); const s=n.concat(i); e.children&&e.children.length>0&&(u(!0!==e.index, 'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'), g(e.children, t, s, l)), (null!=e.path||e.index)&&t.push({path: l, score: k(l, e.index), routesMeta: s});
      }; return e.forEach(((e, t)=>{
        let n; if (''!==e.path&&null!=(n=e.path)&&n.includes('?')) for (const n of y(e.path))o(e, t, n); else o(e, t);
      })), t;
    } function y(e) {
      const t=e.split('/'); if (0===t.length) return []; const [n, ...r]=t; const o=n.endsWith('?'); const a=n.replace(/\?$/, ''); if (0===r.length) return o?[a, '']:[a]; const i=y(r.join('/')); const l=[]; return l.push(...i.map(((e)=>''===e?a:[a, e].join('/')))), o&&l.push(...i), l.map(((t)=>e.startsWith('/')&&''===t?'/':t));
    }!function(e) {
      e.data='data', e.deferred='deferred', e.redirect='redirect', e.error='error';
    }(h||(h={})), new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']); const v=/^:[\w-]+$/; const b=3; const w=2; const S=1; const x=10; const E=-2; const _=(e)=>'*'===e; function k(e, t) {
      const n=e.split('/'); let r=n.length; return n.some(_)&&(r+=E), t&&(r+=w), n.filter(((e)=>!_(e))).reduce(((e, t)=>e+(v.test(t)?b:''===t?S:x)), r);
    } function C(e, t) {
      const {routesMeta: n}=e; const r={}; let o='/'; const a=[]; for (let e=0; e<n.length; ++e) {
        const i=n[e]; const l=e===n.length-1; const u='/'===o?t:t.slice(o.length)||'/'; const s=O({path: i.relativePath, caseSensitive: i.caseSensitive, end: l}, u); if (!s) return null; Object.assign(r, s.params); const c=i.route; a.push({params: r, pathname: A([o, s.pathname]), pathnameBase: I(A([o, s.pathnameBase])), route: c}), '/'!==s.pathnameBase&&(o=A([o, s.pathnameBase]));
      } return a;
    } function O(e, t) {
      'string'==typeof e&&(e={path: e, caseSensitive: !1, end: !0}); const [n, r]=function(e, t, n) {
        void 0===t&&(t=!1), void 0===n&&(n=!0), s('*'===e||!e.endsWith('*')||e.endsWith('/*'), 'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/, '/*')+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/, '/*')+'".'); const r=[]; let o='^'+e.replace(/\/*\*?$/, '').replace(/^\/*/, '/').replace(/[\\.*+^${}|()[\]]/g, '\\$&').replace(/\/:([\w-]+)(\?)?/g, ((e, t, n)=>(r.push({paramName: t, isOptional: null!=n}), n?'/?([^\\/]+)?':'/([^\\/]+)'))); return e.endsWith('*')?(r.push({paramName: '*'}), o+='*'===e||'/*'===e?'(.*)$':'(?:\\/(.+)|\\/*)$'):n?o+='\\/*$':''!==e&&'/'!==e&&(o+='(?:(?=\\/|$))'), [new RegExp(o, t?void 0:'i'), r];
      }(e.path, e.caseSensitive, e.end); const o=t.match(n); if (!o) return null; const a=o[0]; let i=a.replace(/(.)\/+$/, '$1'); const l=o.slice(1); return {params: r.reduce(((e, t, n)=>{
        const {paramName: r, isOptional: o}=t; if ('*'===r) {
          const e=l[n]||''; i=a.slice(0, a.length-e.length).replace(/(.)\/+$/, '$1');
        } const u=l[n]; return e[r]=o&&!u?void 0:(u||'').replace(/%2F/g, '/'), e;
      }), {}), pathname: a, pathnameBase: i, pattern: e};
    } function N(e) {
      try {
        return e.split('/').map(((e)=>decodeURIComponent(e).replace(/\//g, '%2F'))).join('/');
      } catch (t) {
        return s(!1, 'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+').'), e;
      }
    } function M(e, t) {
      if ('/'===t) return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; const n=t.endsWith('/')?t.length-1:t.length; const r=e.charAt(n); return r&&'/'!==r?null:e.slice(n)||'/';
    } function P(e, t, n, r) {
      return 'Cannot include a \''+e+'\' character in a manually specified `to.'+t+'` field ['+JSON.stringify(r)+'].  Please separate it out to the `to.'+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';
    } function T(e, t) {
      const n=function(e) {
        return e.filter(((e, t)=>0===t||e.route.path&&e.route.path.length>0));
      }(e); return t?n.map(((t, n)=>n===e.length-1?t.pathname:t.pathnameBase)):n.map(((e)=>e.pathnameBase));
    } function R(e, t, n, r) {
      let o; void 0===r&&(r=!1), 'string'==typeof e?o=p(e):(o=a({}, e), u(!o.pathname||!o.pathname.includes('?'), P('?', 'pathname', 'search', o)), u(!o.pathname||!o.pathname.includes('#'), P('#', 'pathname', 'hash', o)), u(!o.search||!o.search.includes('#'), P('#', 'search', 'hash', o))); let i; const l=''===e||''===o.pathname; const s=l?'/':o.pathname; if (null==s)i=n; else {
        let e=t.length-1; if (!r&&s.startsWith('..')) {
          const t=s.split('/'); for (;'..'===t[0];)t.shift(), e-=1; o.pathname=t.join('/');
        }i=e>=0?t[e]:'/';
      } const c=function(e, t) {
        void 0===t&&(t='/'); const {pathname: n, search: r='', hash: o=''}='string'==typeof e?p(e):e; const a=n?n.startsWith('/')?n:function(e, t) {
          const n=t.replace(/\/+$/, '').split('/'); return e.split('/').forEach(((e)=>{
'..'===e?n.length>1&&n.pop():'.'!==e&&n.push(e);
          })), n.length>1?n.join('/'):'/';
        }(n, t):t; return {pathname: a, search: z(r), hash: D(o)};
      }(o, i); const d=s&&'/'!==s&&s.endsWith('/'); const f=(l||'.'===s)&&n.endsWith('/'); return c.pathname.endsWith('/')||!d&&!f||(c.pathname+='/'), c;
    } const A=(e)=>e.join('/').replace(/\/\/+/g, '/'); const I=(e)=>e.replace(/\/+$/, '').replace(/^\/*/, '/'); const z=(e)=>e&&'?'!==e?e.startsWith('?')?e:'?'+e:''; const D=(e)=>e&&'#'!==e?e.startsWith('#')?e:'#'+e:''; Error; const L=['post', 'put', 'patch', 'delete']; const j=(new Set(L), ['get', ...L]); function F() {
      return F=Object.assign?Object.assign.bind():function(e) {
        for (let t=1; t<arguments.length; t++) {
          const n=arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
        } return e;
      }, F.apply(this, arguments);
    } new Set(j), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), Symbol('deferred'); const q=e.createContext(null); const U=e.createContext(null); const B=e.createContext(null); const $=e.createContext(null); const H=e.createContext({outlet: null, matches: [], isDataRoute: !1}); const W=e.createContext(null); function V() {
      return null!=e.useContext($);
    } function K() {
      return V()||u(!1), e.useContext($).location;
    } function Q(t) {
      e.useContext(B).static||e.useLayoutEffect(t);
    } function Y() {
      const {isDataRoute: t}=e.useContext(H); return t?function() {
        const {router: t}=function(t) {
          const n=e.useContext(q); return n||u(!1), n;
        }(ne.UseNavigateStable); const n=oe(re.UseNavigateStable); const r=e.useRef(!1); Q((()=>{
          r.current=!0;
        })); const o=e.useCallback((function(e, o) {
          void 0===o&&(o={}), r.current&&('number'==typeof e?t.navigate(e):t.navigate(e, F({fromRouteId: n}, o)));
        }), [t, n]); return o;
      }():function() {
        V()||u(!1); const t=e.useContext(q); const {basename: n, future: r, navigator: o}=e.useContext(B); const {matches: a}=e.useContext(H); const {pathname: i}=K(); const l=JSON.stringify(T(a, r.v7_relativeSplatPath)); const s=e.useRef(!1); Q((()=>{
          s.current=!0;
        })); const c=e.useCallback((function(e, r) {
          if (void 0===r&&(r={}), !s.current) return; if ('number'==typeof e) return void o.go(e); const a=R(e, JSON.parse(l), i, 'path'===r.relative); null==t&&'/'!==n&&(a.pathname='/'===a.pathname?n:A([n, a.pathname])), (r.replace?o.replace:o.push)(a, r.state, r);
        }), [n, o, l, i, t]); return c;
      }();
    } function X(t, n) {
      const {relative: r}=void 0===n?{}:n; const {future: o}=e.useContext(B); const {matches: a}=e.useContext(H); const {pathname: i}=K(); const l=JSON.stringify(T(a, o.v7_relativeSplatPath)); return e.useMemo((()=>R(t, JSON.parse(l), i, 'path'===r)), [t, l, i, r]);
    } function G(t, n, r, o) {
      V()||u(!1); const {navigator: a}=e.useContext(B); const {matches: l}=e.useContext(H); const s=l[l.length-1]; const c=s?s.params:{}; const d=(s&&s.pathname, s?s.pathnameBase:'/'); s&&s.route; let f; const h=K(); if (n) {
        let g; const e='string'==typeof n?p(n):n; '/'===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||u(!1), f=e;
      } else f=h; const y=f.pathname||'/'; let v=y; if ('/'!==d) {
        const e=d.replace(/^\//, '').split('/'); v='/'+y.replace(/^\//, '').split('/').slice(e.length).join('/');
      } const b=m(t, {pathname: v}); const w=function(t, n, r, o) {
        let a; if (void 0===n&&(n=[]), void 0===r&&(r=null), void 0===o&&(o=null), null==t) {
          let i; if (null==(i=r)||!i.errors) return null; t=r.matches;
        } let l=t; const s=null==(a=r)?void 0:a.errors; if (null!=s) {
          const e=l.findIndex(((e)=>e.route.id&&(null==s?void 0:s[e.route.id]))); e>=0||u(!1), l=l.slice(0, Math.min(l.length, e+1));
        } let c=!1; let d=-1; if (r&&o&&o.v7_partialHydration) {
          for (let e=0; e<l.length; e++) {
            const t=l[e]; if ((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e), t.route.id) {
              const {loaderData: e, errors: n}=r; const o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]); if (t.route.lazy||o) {
                c=!0, l=d>=0?l.slice(0, d+1):[l[0]]; break;
              }
            }
          }
        } return l.reduceRight(((t, o, a)=>{
          let i; let u=!1; let f=null; let p=null; let h; r&&(i=s&&o.route.id?s[o.route.id]:void 0, f=o.route.errorElement||J, c&&(d<0&&0===a?(ae[h='route-fallback']||(ae[h]=!0), u=!0, p=null):d===a&&(u=!0, p=o.route.hydrateFallbackElement||null))); const m=n.concat(l.slice(0, a+1)); const g=()=>{
            let n; return n=i?f:u?p:o.route.Component?e.createElement(o.route.Component, null):o.route.element?o.route.element:t, e.createElement(te, {match: o, routeContext: {outlet: t, matches: m, isDataRoute: null!=r}, children: n});
          }; return r&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?e.createElement(ee, {location: r.location, revalidation: r.revalidation, component: f, error: i, children: g(), routeContext: {outlet: null, matches: m, isDataRoute: !0}}):g();
        }), null);
      }(b&&b.map(((e)=>Object.assign({}, e, {params: Object.assign({}, c, e.params), pathname: A([d, a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]), pathnameBase: '/'===e.pathnameBase?d:A([d, a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))), l, r, o); return n&&w?e.createElement($.Provider, {value: {location: F({pathname: '/', search: '', hash: '', state: null, key: 'default'}, f), navigationType: i.Pop}}, w):w;
    } function Z() {
      const t=function() {
        let t; const n=e.useContext(W); const r=function(t) {
          const n=e.useContext(U); return n||u(!1), n;
        }(re.UseRouteError); const o=oe(re.UseRouteError); return void 0!==n?n:null==(t=r.errors)?void 0:t[o];
      }(); const n=function(e) {
        return null!=e&&'number'==typeof e.status&&'string'==typeof e.statusText&&'boolean'==typeof e.internal&&'data'in e;
      }(t)?t.status+' '+t.statusText:t instanceof Error?t.message:JSON.stringify(t); const r=t instanceof Error?t.stack:null; const o={padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)'}; return e.createElement(e.Fragment, null, e.createElement('h2', null, 'Unexpected Application Error!'), e.createElement('h3', {style: {fontStyle: 'italic'}}, n), r?e.createElement('pre', {style: o}, r):null, null);
    } const J=e.createElement(Z, null); class ee extends e.Component {
      constructor(e) {
        super(e), this.state={location: e.location, revalidation: e.revalidation, error: e.error};
      } static getDerivedStateFromError(e) {
        return {error: e};
      } static getDerivedStateFromProps(e, t) {
        return t.location!==e.location||'idle'!==t.revalidation&&'idle'===e.revalidation?{error: e.error, location: e.location, revalidation: e.revalidation}:{error: void 0!==e.error?e.error:t.error, location: t.location, revalidation: e.revalidation||t.revalidation};
      }componentDidCatch(e, t) {
        console.error('React Router caught the following error during render', e, t);
      }render() {
        return void 0!==this.state.error?e.createElement(H.Provider, {value: this.props.routeContext}, e.createElement(W.Provider, {value: this.state.error, children: this.props.component})):this.props.children;
      }
    } function te(t) {
      const {routeContext: n, match: r, children: o}=t; const a=e.useContext(q); return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id), e.createElement(H.Provider, {value: n}, o);
    } var ne=function(e) {
      return e.UseBlocker='useBlocker', e.UseRevalidator='useRevalidator', e.UseNavigateStable='useNavigate', e;
    }(ne||{}); var re=function(e) {
      return e.UseBlocker='useBlocker', e.UseLoaderData='useLoaderData', e.UseActionData='useActionData', e.UseRouteError='useRouteError', e.UseNavigation='useNavigation', e.UseRouteLoaderData='useRouteLoaderData', e.UseMatches='useMatches', e.UseRevalidator='useRevalidator', e.UseNavigateStable='useNavigate', e.UseRouteId='useRouteId', e;
    }(re||{}); function oe(t) {
      const n=function(t) {
        const n=e.useContext(H); return n||u(!1), n;
      }(); const r=n.matches[n.matches.length-1]; return r.route.id||u(!1), r.route.id;
    } const ae={}; function ie(e) {
      u(!1);
    } function le(t) {
      let {basename: n='/', children: r=null, location: o, navigationType: a=i.Pop, navigator: l, static: s=!1, future: c}=t; V()&&u(!1); const d=n.replace(/^\/*/, '/'); const f=e.useMemo((()=>({basename: d, navigator: l, static: s, future: F({v7_relativeSplatPath: !1}, c)})), [d, c, l, s]); 'string'==typeof o&&(o=p(o)); const {pathname: h='/', search: m='', hash: g='', state: y=null, key: v='default'}=o; const b=e.useMemo((()=>{
        const e=M(h, d); return null==e?null:{location: {pathname: e, search: m, hash: g, state: y, key: v}, navigationType: a};
      }), [d, h, m, g, y, v, a]); return null==b?null:e.createElement(B.Provider, {value: f}, e.createElement($.Provider, {children: r, value: b}));
    } function ue(e) {
      const {children: t, location: n}=e; return G(se(t), n);
    } function se(t, n) {
      void 0===n&&(n=[]); const r=[]; return e.Children.forEach(t, ((t, o)=>{
        if (!e.isValidElement(t)) return; const a=[...n, o]; if (t.type===e.Fragment) return void r.push.apply(r, se(t.props.children, a)); t.type!==ie&&u(!1), t.props.index&&t.props.children&&u(!1); const i={id: t.props.id||a.join('-'), caseSensitive: t.props.caseSensitive, element: t.props.element, Component: t.props.Component, index: t.props.index, path: t.props.path, loader: t.props.loader, action: t.props.action, errorElement: t.props.errorElement, ErrorBoundary: t.props.ErrorBoundary, hasErrorBoundary: null!=t.props.ErrorBoundary||null!=t.props.errorElement, shouldRevalidate: t.props.shouldRevalidate, handle: t.props.handle, lazy: t.props.lazy}; t.props.children&&(i.children=se(t.props.children, a)), r.push(i);
      })), r;
    } function ce(e) {
      return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }t.startTransition, new Promise((()=>{})), e.Component; const de=(()=>'function'==typeof Symbol&&Symbol.observable||'@@observable')(); const fe=()=>Math.random().toString(36).substring(7).split('').join('.'); const pe={INIT: `@@redux/INIT${fe()}`, REPLACE: `@@redux/REPLACE${fe()}`, PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${fe()}`}; function he(e) {
      if ('object'!=typeof e||null===e) return !1; let t=e; for (;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t); return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e);
    } function me(e, t, n) {
      if ('function'!=typeof e) throw new Error(ce(2)); if ('function'==typeof t&&'function'==typeof n||'function'==typeof n&&'function'==typeof arguments[3]) throw new Error(ce(0)); if ('function'==typeof t&&void 0===n&&(n=t, t=void 0), void 0!==n) {
        if ('function'!=typeof n) throw new Error(ce(1)); return n(me)(e, t);
      } let r=e; let o=t; let a=new Map; let i=a; let l=0; let u=!1; function s() {
        i===a&&(i=new Map, a.forEach(((e, t)=>{
          i.set(t, e);
        })));
      } function c() {
        if (u) throw new Error(ce(3)); return o;
      } function d(e) {
        if ('function'!=typeof e) throw new Error(ce(4)); if (u) throw new Error(ce(5)); let t=!0; s(); const n=l++; return i.set(n, e), function() {
          if (t) {
            if (u) throw new Error(ce(6)); t=!1, s(), i.delete(n), a=null;
          }
        };
      } function f(e) {
        if (!he(e)) throw new Error(ce(7)); if (void 0===e.type) throw new Error(ce(8)); if ('string'!=typeof e.type) throw new Error(ce(17)); if (u) throw new Error(ce(9)); try {
          u=!0, o=r(o, e);
        } finally {
          u=!1;
        } return (a=i).forEach(((e)=>{
          e();
        })), e;
      } return f({type: pe.INIT}), {dispatch: f, subscribe: d, getState: c, replaceReducer: function(e) {
        if ('function'!=typeof e) throw new Error(ce(10)); r=e, f({type: pe.REPLACE});
      }, [de]: function() {
        const e=d; return {subscribe(t) {
          if ('object'!=typeof t||null===t) throw new Error(ce(11)); function n() {
            const e=t; e.next&&e.next(c());
          } return n(), {unsubscribe: e(n)};
        }, [de]() {
          return this;
        }};
      }};
    } function ge(e) {
      const t=Object.keys(e); const n={}; for (let r=0; r<t.length; r++) {
        const o=t[r]; 'function'==typeof e[o]&&(n[o]=e[o]);
      } const r=Object.keys(n); let o; try {
        !function(e) {
          Object.keys(e).forEach(((t)=>{
            const n=e[t]; if (void 0===n(void 0, {type: pe.INIT})) throw new Error(ce(12)); if (void 0===n(void 0, {type: pe.PROBE_UNKNOWN_ACTION()})) throw new Error(ce(13));
          }));
        }(n);
      } catch (e) {
        o=e;
      } return function(e={}, t) {
        if (o) throw o; let a=!1; const i={}; for (let o=0; o<r.length; o++) {
          const l=r[o]; const u=n[l]; const s=e[l]; const c=u(s, t); if (void 0===c) throw t&&t.type, new Error(ce(14)); i[l]=c, a=a||c!==s;
        } return a=a||r.length!==Object.keys(e).length, a?i:e;
      };
    } function ye(...e) {
      return 0===e.length?(e)=>e:1===e.length?e[0]:e.reduce(((e, t)=>(...n)=>e(t(...n))));
    } function ve(e) {
      return he(e)&&'type'in e&&'string'==typeof e.type;
    } const be=Symbol.for('immer-nothing'); const we=Symbol.for('immer-draftable'); const Se=Symbol.for('immer-state'); function xe(e, ...t) {
      throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
    } const Ee=Object.getPrototypeOf; function _e(e) {
      return !!e&&!!e[Se];
    } function ke(e) {
      return !!e&&(Oe(e)||Array.isArray(e)||!!e[we]||!!e.constructor?.[we]||Ae(e)||Ie(e));
    } const Ce=Object.prototype.constructor.toString(); function Oe(e) {
      if (!e||'object'!=typeof e) return !1; const t=Ee(e); if (null===t) return !0; const n=Object.hasOwnProperty.call(t, 'constructor')&&t.constructor; return n===Object||'function'==typeof n&&Function.toString.call(n)===Ce;
    } function Ne(e, t) {
0===Me(e)?Object.entries(e).forEach((([n, r])=>{
  t(n, r, e);
})):e.forEach(((n, r)=>t(r, n, e)));
    } function Me(e) {
      const t=e[Se]; return t?t.type_:Array.isArray(e)?1:Ae(e)?2:Ie(e)?3:0;
    } function Pe(e, t) {
      return 2===Me(e)?e.has(t):Object.prototype.hasOwnProperty.call(e, t);
    } function Te(e, t) {
      return 2===Me(e)?e.get(t):e[t];
    } function Re(e, t, n) {
      const r=Me(e); 2===r?e.set(t, n):3===r?e.add(n):e[t]=n;
    } function Ae(e) {
      return e instanceof Map;
    } function Ie(e) {
      return e instanceof Set;
    } function ze(e) {
      return e.copy_||e.base_;
    } function De(e, t) {
      if (Ae(e)) return new Map(e); if (Ie(e)) return new Set(e); if (Array.isArray(e)) return Array.prototype.slice.call(e); if (!t&&Oe(e)) {
        if (!Ee(e)) {
          const t=Object.create(null); return Object.assign(t, e);
        } return {...e};
      } const n=Object.getOwnPropertyDescriptors(e); delete n[Se]; const r=Reflect.ownKeys(n); for (let t=0; t<r.length; t++) {
        const o=r[t]; const a=n[o]; !1===a.writable&&(a.writable=!0, a.configurable=!0), (a.get||a.set)&&(n[o]={configurable: !0, writable: !0, enumerable: a.enumerable, value: e[o]});
      } return Object.create(Ee(e), n);
    } function Le(e, t=!1) {
      return Fe(e)||_e(e)||!ke(e)||(Me(e)>1&&(e.set=e.add=e.clear=e.delete=je), Object.freeze(e), t&&Ne(e, ((e, t)=>Le(t, !0)))), e;
    } function je() {
      xe(2);
    } function Fe(e) {
      return Object.isFrozen(e);
    } let qe; const Ue={}; function Be(e) {
      const t=Ue[e]; return t||xe(0), t;
    } function $e() {
      return qe;
    } function He(e, t) {
      t&&(Be('Patches'), e.patches_=[], e.inversePatches_=[], e.patchListener_=t);
    } function We(e) {
      Ve(e), e.drafts_.forEach(Qe), e.drafts_=null;
    } function Ve(e) {
      e===qe&&(qe=e.parent_);
    } function Ke(e) {
      return qe={drafts_: [], parent_: qe, immer_: e, canAutoFreeze_: !0, unfinalizedDrafts_: 0};
    } function Qe(e) {
      const t=e[Se]; 0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0;
    } function Ye(e, t) {
      t.unfinalizedDrafts_=t.drafts_.length; const n=t.drafts_[0]; return void 0!==e&&e!==n?(n[Se].modified_&&(We(t), xe(4)), ke(e)&&(e=Xe(t, e), t.parent_||Ze(t, e)), t.patches_&&Be('Patches').generateReplacementPatches_(n[Se].base_, e, t.patches_, t.inversePatches_)):e=Xe(t, n, []), We(t), t.patches_&&t.patchListener_(t.patches_, t.inversePatches_), e!==be?e:void 0;
    } function Xe(e, t, n) {
      if (Fe(t)) return t; const r=t[Se]; if (!r) return Ne(t, ((o, a)=>Ge(e, r, t, o, a, n))), t; if (r.scope_!==e) return t; if (!r.modified_) return Ze(e, r.base_, !0), r.base_; if (!r.finalized_) {
        r.finalized_=!0, r.scope_.unfinalizedDrafts_--; const t=r.copy_; let o=t; let a=!1; 3===r.type_&&(o=new Set(t), t.clear(), a=!0), Ne(o, ((o, i)=>Ge(e, r, t, o, i, n, a))), Ze(e, t, !1), n&&e.patches_&&Be('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_);
      } return r.copy_;
    } function Ge(e, t, n, r, o, a, i) {
      if (_e(o)) {
        const i=Xe(e, o, a&&t&&3!==t.type_&&!Pe(t.assigned_, r)?a.concat(r):void 0); if (Re(n, r, i), !_e(i)) return; e.canAutoFreeze_=!1;
      } else i&&n.add(o); if (ke(o)&&!Fe(o)) {
        if (!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1) return; Xe(e, o), t&&t.scope_.parent_||Ze(e, o);
      }
    } function Ze(e, t, n=!1) {
      !e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Le(t, n);
    } const Je={get(e, t) {
      if (t===Se) return e; const n=ze(e); if (!Pe(n, t)) {
        return function(e, t, n) {
          const r=nt(t, n); return r?'value'in r?r.value:r.get?.call(e.draft_):void 0;
        }(e, n, t);
      } const r=n[t]; return e.finalized_||!ke(r)?r:r===tt(e.base_, t)?(ot(e), e.copy_[t]=at(r, e)):r;
    }, has: (e, t)=>t in ze(e), ownKeys: (e)=>Reflect.ownKeys(ze(e)), set(e, t, n) {
      const r=nt(ze(e), t); if (r?.set) return r.set.call(e.draft_, n), !0; if (!e.modified_) {
        const r=tt(ze(e), t); const i=r?.[Se]; if (i&&i.base_===n) return e.copy_[t]=n, e.assigned_[t]=!1, !0; if (((o=n)===(a=r)?0!==o||1/o==1/a:o!=o&&a!=a)&&(void 0!==n||Pe(e.base_, t))) return !0; ot(e), rt(e);
      } let o; let a; return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n, e.assigned_[t]=!0), !0;
    }, deleteProperty: (e, t)=>(void 0!==tt(e.base_, t)||t in e.base_?(e.assigned_[t]=!1, ot(e), rt(e)):delete e.assigned_[t], e.copy_&&delete e.copy_[t], !0), getOwnPropertyDescriptor(e, t) {
      const n=ze(e); const r=Reflect.getOwnPropertyDescriptor(n, t); return r?{writable: !0, configurable: 1!==e.type_||'length'!==t, enumerable: r.enumerable, value: n[t]}:r;
    }, defineProperty() {
      xe(11);
    }, getPrototypeOf: (e)=>Ee(e.base_), setPrototypeOf() {
      xe(12);
    }}; const et={}; function tt(e, t) {
      const n=e[Se]; return (n?ze(n):e)[t];
    } function nt(e, t) {
      if (!(t in e)) return; let n=Ee(e); for (;n;) {
        const e=Object.getOwnPropertyDescriptor(n, t); if (e) return e; n=Ee(n);
      }
    } function rt(e) {
      e.modified_||(e.modified_=!0, e.parent_&&rt(e.parent_));
    } function ot(e) {
      e.copy_||(e.copy_=De(e.base_, e.scope_.immer_.useStrictShallowCopy_));
    } function at(e, t) {
      const n=Ae(e)?Be('MapSet').proxyMap_(e, t):Ie(e)?Be('MapSet').proxySet_(e, t):function(e, t) {
        const n=Array.isArray(e); const r={type_: n?1:0, scope_: t?t.scope_:$e(), modified_: !1, finalized_: !1, assigned_: {}, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1}; let o=r; let a=Je; n&&(o=[r], a=et); const {revoke: i, proxy: l}=Proxy.revocable(o, a); return r.draft_=l, r.revoke_=i, l;
      }(e, t); return (t?t.scope_:$e()).drafts_.push(n), n;
    } function it(e) {
      return _e(e)||xe(10), lt(e);
    } function lt(e) {
      if (!ke(e)||Fe(e)) return e; const t=e[Se]; let n; if (t) {
        if (!t.modified_) return t.base_; t.finalized_=!0, n=De(e, t.scope_.immer_.useStrictShallowCopy_);
      } else n=De(e, !0); return Ne(n, ((e, t)=>{
        Re(n, e, lt(t));
      })), t&&(t.finalized_=!1), n;
    } function ut() {
      const e='replace'; const t='add'; const n='remove'; function r(e) {
        if (!ke(e)) return e; if (Array.isArray(e)) return e.map(r); if (Ae(e)) return new Map(Array.from(e.entries()).map((([e, t])=>[e, r(t)]))); if (Ie(e)) return new Set(Array.from(e).map(r)); const t=Object.create(Ee(e)); for (const n in e)t[n]=r(e[n]); return Pe(e, we)&&(t[we]=e[we]), t;
      } function o(e) {
        return _e(e)?r(e):e;
      } let a; let i; i={applyPatches_: function(o, a) {
        return a.forEach(((a)=>{
          const {path: i, op: l}=a; let u=o; for (let e=0; e<i.length-1; e++) {
            const t=Me(u); let n=i[e]; 'string'!=typeof n&&'number'!=typeof n&&(n=''+n), 0!==t&&1!==t||'__proto__'!==n&&'constructor'!==n||xe(19), 'function'==typeof u&&'prototype'===n&&xe(19), u=Te(u, n), 'object'!=typeof u&&xe(18, i.join('/'));
          } const s=Me(u); const c=r(a.value); const d=i[i.length-1]; switch (l) {
            case e: switch (s) {
              case 2: return u.set(d, c); case 3: xe(16); default: return u[d]=c;
            } case t: switch (s) {
              case 1: return '-'===d?u.push(c):u.splice(d, 0, c); case 2: return u.set(d, c); case 3: return u.add(c); default: return u[d]=c;
            } case n: switch (s) {
              case 1: return u.splice(d, 1); case 2: return u.delete(d); case 3: return u.delete(a.value); default: return delete u[d];
            } default: xe(17);
          }
        })), o;
      }, generatePatches_: function(r, a, i, l) {
        switch (r.type_) {
          case 0: case 2: return function(r, a, i, l) {
            const {base_: u, copy_: s}=r; Ne(r.assigned_, ((r, c)=>{
              const d=Te(u, r); const f=Te(s, r); const p=c?Pe(u, r)?e:t:n; if (d===f&&p===e) return; const h=a.concat(r); i.push(p===n?{op: p, path: h}:{op: p, path: h, value: f}), l.push(p===t?{op: n, path: h}:p===n?{op: t, path: h, value: o(d)}:{op: e, path: h, value: o(d)});
            }));
          }(r, a, i, l); case 1: return function(r, a, i, l) {
            let {base_: u, assigned_: s}=r; let c=r.copy_; c.length<u.length&&([u, c]=[c, u], [i, l]=[l, i]); for (let t=0; t<u.length; t++) {
              if (s[t]&&c[t]!==u[t]) {
                const n=a.concat([t]); i.push({op: e, path: n, value: o(c[t])}), l.push({op: e, path: n, value: o(u[t])});
              }
            } for (let e=u.length; e<c.length; e++) {
              const n=a.concat([e]); i.push({op: t, path: n, value: o(c[e])});
            } for (let e=c.length-1; u.length<=e; --e) {
              const t=a.concat([e]); l.push({op: n, path: t});
            }
          }(r, a, i, l); case 3: return function(e, r, o, a) {
            const {base_: i, copy_: l}=e; let u=0; i.forEach(((e)=>{
              if (!l.has(e)) {
                const i=r.concat([u]); o.push({op: n, path: i, value: e}), a.unshift({op: t, path: i, value: e});
              }u++;
            })), u=0, l.forEach(((e)=>{
              if (!i.has(e)) {
                const i=r.concat([u]); o.push({op: t, path: i, value: e}), a.unshift({op: n, path: i, value: e});
              }u++;
            }));
          }(r, a, i, l);
        }
      }, generateReplacementPatches_: function(t, n, r, o) {
        r.push({op: e, path: [], value: n===be?void 0:n}), o.push({op: e, path: [], value: t});
      }}, Ue[a='Patches']||(Ue[a]=i);
    }Ne(Je, ((e, t)=>{
      et[e]=function() {
        return arguments[0]=arguments[0][0], t.apply(this, arguments);
      };
    })), et.deleteProperty=function(e, t) {
      return et.set.call(this, e, t, void 0);
    }, et.set=function(e, t, n) {
      return Je.set.call(this, e[0], t, n, e[0]);
    }; const st=new class {
      constructor(e) {
        this.autoFreeze_=!0, this.useStrictShallowCopy_=!1, this.produce=(e, t, n)=>{
          if ('function'==typeof e&&'function'!=typeof t) {
            const n=t; t=e; const r=this; return function(e=n, ...o) {
              return r.produce(e, ((e)=>t.call(this, e, ...o)));
            };
          } let r; if ('function'!=typeof t&&xe(6), void 0!==n&&'function'!=typeof n&&xe(7), ke(e)) {
            const o=Ke(this); const a=at(e, void 0); let i=!0; try {
              r=t(a), i=!1;
            } finally {
i?We(o):Ve(o);
            } return He(o, n), Ye(r, o);
          } if (!e||'object'!=typeof e) {
            if (r=t(e), void 0===r&&(r=e), r===be&&(r=void 0), this.autoFreeze_&&Le(r, !0), n) {
              const t=[]; const o=[]; Be('Patches').generateReplacementPatches_(e, r, t, o), n(t, o);
            } return r;
          }xe(1);
        }, this.produceWithPatches=(e, t)=>{
          if ('function'==typeof e) return (t, ...n)=>this.produceWithPatches(t, ((t)=>e(t, ...n))); let n; let r; return [this.produce(e, t, ((e, t)=>{
            n=e, r=t;
          })), n, r];
        }, 'boolean'==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze), 'boolean'==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy);
      }createDraft(e) {
        ke(e)||xe(8), _e(e)&&(e=it(e)); const t=Ke(this); const n=at(e, void 0); return n[Se].isManual_=!0, Ve(t), n;
      }finishDraft(e, t) {
        const n=e&&e[Se]; n&&n.isManual_||xe(9); const {scope_: r}=n; return He(r, t), Ye(void 0, r);
      }setAutoFreeze(e) {
        this.autoFreeze_=e;
      }setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_=e;
      }applyPatches(e, t) {
        let n; for (n=t.length-1; n>=0; n--) {
          const r=t[n]; if (0===r.path.length&&'replace'===r.op) {
            e=r.value; break;
          }
        }n>-1&&(t=t.slice(n+1)); const r=Be('Patches').applyPatches_; return _e(e)?r(e, t):this.produce(e, ((e)=>r(e, t)));
      }
    }; const ct=st.produce; const dt=st.produceWithPatches.bind(st); const ft=(st.setAutoFreeze.bind(st), st.setUseStrictShallowCopy.bind(st), st.applyPatches.bind(st)); st.createDraft.bind(st), st.finishDraft.bind(st); const pt=(e)=>Array.isArray(e)?e:[e]; Symbol(), Object.getPrototypeOf({}); const ht='undefined'!=typeof WeakRef?WeakRef:class {
      constructor(e) {
        this.value=e;
      }deref() {
        return this.value;
      }
    }; const mt=0; const gt=1; function yt() {
      return {s: mt, v: void 0, o: null, p: null};
    } function vt(e, t={}) {
      let n=yt(); const {resultEqualityCheck: r}=t; let o; let a=0; function i() {
        let t=n; const {length: i}=arguments; for (let e=0, n=i; e<n; e++) {
          const n=arguments[e]; if ('function'==typeof n||'object'==typeof n&&null!==n) {
            let e=t.o; null===e&&(t.o=e=new WeakMap); const r=e.get(n); void 0===r?(t=yt(), e.set(n, t)):t=r;
          } else {
            let e=t.p; null===e&&(t.p=e=new Map); const r=e.get(n); void 0===r?(t=yt(), e.set(n, t)):t=r;
          }
        } const l=t; let u; if (t.s===gt?u=t.v:(u=e.apply(null, arguments), a++), l.s=gt, r) {
          const e=o?.deref?.()??o; null!=e&&r(e, u)&&(u=e, 0!==a&&a--), o='object'==typeof u&&null!==u||'function'==typeof u?new ht(u):u;
        } return l.v=u, u;
      } return i.clearCache=()=>{
        n=yt(), i.resetResultsCount();
      }, i.resultsCount=()=>a, i.resetResultsCount=()=>{
        a=0;
      }, i;
    } function bt(e, ...t) {
      const n='function'==typeof e?{memoize: e, memoizeOptions: t}:e; const r=(...e)=>{
        let t; let r=0; let o=0; let a={}; let i=e.pop(); 'object'==typeof i&&(a=i, i=e.pop()), function(e, t='expected a function, instead received '+typeof e) {
          if ('function'!=typeof e) throw new TypeError(t);
        }(i, `createSelector expects an output function after the inputs, but received: [${typeof i}]`); const l={...n, ...a}; const {memoize: u, memoizeOptions: s=[], argsMemoize: c=vt, argsMemoizeOptions: d=[], devModeChecks: f={}}=l; const p=pt(s); const h=pt(d); const m=function(e) {
          const t=Array.isArray(e[0])?e[0]:e; return function(e, t='expected all items to be functions, instead received the following types: ') {
            if (!e.every(((e)=>'function'==typeof e))) {
              const n=e.map(((e)=>'function'==typeof e?`function ${e.name||'unnamed'}()`:typeof e)).join(', '); throw new TypeError(`${t}[${n}]`);
            }
          }(t, 'createSelector expects all input-selectors to be functions, but received the following types: '), t;
        }(e); const g=u((function() {
          return r++, i.apply(null, arguments);
        }), ...p); const y=c((function() {
          o++; const e=function(e, t) {
            const n=[]; const {length: r}=e; for (let o=0; o<r; o++)n.push(e[o].apply(null, t)); return n;
          }(m, arguments); return t=g.apply(null, e), t;
        }), ...h); return Object.assign(y, {resultFunc: i, memoizedResultFunc: g, dependencies: m, dependencyRecomputations: ()=>o, resetDependencyRecomputations: ()=>{
          o=0;
        }, lastResult: ()=>t, recomputations: ()=>r, resetRecomputations: ()=>{
          r=0;
        }, memoize: u, argsMemoize: c});
      }; return Object.assign(r, {withTypes: ()=>r}), r;
    } const wt=bt(vt); var St=Object.assign(((e, t=wt)=>{
      !function(e, t='expected an object, instead received '+typeof e) {
        if ('object'!=typeof e) throw new TypeError(t);
      }(e, 'createStructuredSelector expects first argument to be an object where each property is a selector, instead received a '+typeof e); const n=Object.keys(e); return t(n.map(((t)=>e[t])), ((...e)=>e.reduce(((e, t, r)=>(e[n[r]]=t, e)), {})));
    }), {withTypes: ()=>St}); function xt(e) {
      return ({dispatch: t, getState: n})=>(r)=>(o)=>'function'==typeof o?o(t, n, e):r(o);
    } const Et=xt(); const _t=xt; const kt=(((...e)=>{
      const t=bt(...e); const n=Object.assign(((...e)=>{
        const n=t(...e); const r=(e, ...t)=>n(_e(e)?it(e):e, ...t); return Object.assign(r, n), r;
      }), {withTypes: ()=>n});
    })(vt), 'undefined'!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function() {
      if (0!==arguments.length) return 'object'==typeof arguments[0]?ye:ye.apply(null, arguments);
    }); const Ct=('undefined'!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__, (e)=>e&&'function'==typeof e.match); function Ot(e, t) {
      function n(...n) {
        if (t) {
          const r=t(...n); if (!r) throw new Error(fn(0)); return {type: e, payload: r.payload, ...'meta'in r&&{meta: r.meta}, ...'error'in r&&{error: r.error}};
        } return {type: e, payload: n[0]};
      } return n.toString=()=>`${e}`, n.type=e, n.match=(t)=>ve(t)&&t.type===e, n;
    } const Nt=class e extends Array {
      constructor(...t) {
        super(...t), Object.setPrototypeOf(this, e.prototype);
      } static get [Symbol.species]() {
        return e;
      }concat(...e) {
        return super.concat.apply(this, e);
      }prepend(...t) {
        return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this));
      }
    }; function Mt(e) {
      return ke(e)?ct(e, (()=>{})):e;
    } function Pt(e, t, n) {
      if (e.has(t)) {
        let r=e.get(t); return n.update&&(r=n.update(r, t, e), e.set(t, r)), r;
      } if (!n.insert) throw new Error(fn(10)); const r=n.insert(t, e); return e.set(t, r), r;
    } const Tt='RTK_autoBatch'; const Rt=()=>(e)=>({payload: e, meta: {[Tt]: !0}}); const At=(e)=>(t)=>{
      setTimeout(t, e);
    }; const It='undefined'!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:At(10); function zt(e) {
      const t={}; const n=[]; let r; const o={addCase(e, n) {
        const r='string'==typeof e?e:e.type; if (!r) throw new Error(fn(28)); if (r in t) throw new Error(fn(29)); return t[r]=n, o;
      }, addMatcher: (e, t)=>(n.push({matcher: e, reducer: t}), o), addDefaultCase: (e)=>(r=e, o)}; return e(o), [t, n, r];
    } const Dt=(e=21)=>{
      let t=''; let n=e; for (;n--;)t+='ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[64*Math.random()|0]; return t;
    }; const Lt=(e, t)=>Ct(e)?e.match(t):e(t); function jt(...e) {
      return (t)=>e.some(((e)=>Lt(e, t)));
    } function Ft(...e) {
      return (t)=>e.every(((e)=>Lt(e, t)));
    } function qt(e, t) {
      if (!e||!e.meta) return !1; const n='string'==typeof e.meta.requestId; const r=t.indexOf(e.meta.requestStatus)>-1; return n&&r;
    } function Ut(e) {
      return 'function'==typeof e[0]&&'pending'in e[0]&&'fulfilled'in e[0]&&'rejected'in e[0];
    } function Bt(...e) {
      return 0===e.length?(e)=>qt(e, ['pending']):Ut(e)?(t)=>jt(...e.map(((e)=>e.pending)))(t):Bt()(e[0]);
    } function $t(...e) {
      return 0===e.length?(e)=>qt(e, ['rejected']):Ut(e)?(t)=>jt(...e.map(((e)=>e.rejected)))(t):$t()(e[0]);
    } function Ht(...e) {
      const t=(e)=>e&&e.meta&&e.meta.rejectedWithValue; return 0===e.length||Ut(e)?(n)=>Ft($t(...e), t)(n):Ht()(e[0]);
    } function Wt(...e) {
      return 0===e.length?(e)=>qt(e, ['fulfilled']):Ut(e)?(t)=>jt(...e.map(((e)=>e.fulfilled)))(t):Wt()(e[0]);
    } function Vt(...e) {
      return 0===e.length?(e)=>qt(e, ['pending', 'fulfilled', 'rejected']):Ut(e)?(t)=>{
        const n=[]; for (const t of e)n.push(t.pending, t.rejected, t.fulfilled); return jt(...n)(t);
      }:Vt()(e[0]);
    } const Kt=['name', 'message', 'stack', 'code']; const Qt=class {
      constructor(e, t) {
        this.payload=e, this.meta=t;
      }_type;
    }; const Yt=class {
      constructor(e, t) {
        this.payload=e, this.meta=t;
      }_type;
    }; const Xt=(e)=>{
      if ('object'==typeof e&&null!==e) {
        const t={}; for (const n of Kt)'string'==typeof e[n]&&(t[n]=e[n]); return t;
      } return {message: String(e)};
    }; const Gt=(()=>{
      function e(e, t, n) {
        const r=Ot(e+'/fulfilled', ((e, t, n, r)=>({payload: e, meta: {...r||{}, arg: n, requestId: t, requestStatus: 'fulfilled'}}))); const o=Ot(e+'/pending', ((e, t, n)=>({payload: void 0, meta: {...n||{}, arg: t, requestId: e, requestStatus: 'pending'}}))); const a=Ot(e+'/rejected', ((e, t, r, o, a)=>({payload: o, error: (n&&n.serializeError||Xt)(e||'Rejected'), meta: {...a||{}, arg: r, requestId: t, rejectedWithValue: !!o, requestStatus: 'rejected', aborted: 'AbortError'===e?.name, condition: 'ConditionError'===e?.name}}))); return Object.assign((function(e) {
          return (i, l, u)=>{
            const s=n?.idGenerator?n.idGenerator(e):Dt(); const c=new AbortController; let d; let f; function p(e) {
              f=e, c.abort();
            } const h=async function() {
              let h; try {
                let a=n?.condition?.(e, {getState: l, extra: u}); if (null!==(m=a)&&'object'==typeof m&&'function'==typeof m.then&&(a=await a), !1===a||c.signal.aborted) throw {name: 'ConditionError', message: 'Aborted due to condition callback returning false.'}; const g=new Promise(((e, t)=>{
                  d=()=>{
                    t({name: 'AbortError', message: f||'Aborted'});
                  }, c.signal.addEventListener('abort', d);
                })); i(o(s, e, n?.getPendingMeta?.({requestId: s, arg: e}, {getState: l, extra: u}))), h=await Promise.race([g, Promise.resolve(t(e, {dispatch: i, getState: l, extra: u, requestId: s, signal: c.signal, abort: p, rejectWithValue: (e, t)=>new Qt(e, t), fulfillWithValue: (e, t)=>new Yt(e, t)})).then(((t)=>{
                  if (t instanceof Qt) throw t; return t instanceof Yt?r(t.payload, s, e, t.meta):r(t, s, e);
                }))]);
              } catch (t) {
                h=t instanceof Qt?a(null, s, e, t.payload, t.meta):a(t, s, e);
              } finally {
                d&&c.signal.removeEventListener('abort', d);
              } let m; return n&&!n.dispatchConditionRejection&&a.match(h)&&h.meta.condition||i(h), h;
            }(); return Object.assign(h, {abort: p, requestId: s, arg: e, unwrap: ()=>h.then(Zt)});
          };
        }), {pending: o, rejected: a, fulfilled: r, settled: jt(a, r), typePrefix: e});
      } return e.withTypes=()=>e, e;
    })(); function Zt(e) {
      if (e.meta&&e.meta.rejectedWithValue) throw e.payload; if (e.error) throw e.error; return e.payload;
    } const Jt=Symbol.for('rtk-slice-createasyncthunk'); function en(e, t) {
      return `${e}/${t}`;
    } function tn({creators: e}={}) {
      const t=e?.asyncThunk?.[Jt]; return function(e) {
        const {name: n, reducerPath: r=n}=e; if (!n) throw new Error(fn(11)); const o=('function'==typeof e.reducers?e.reducers(function() {
          function e(e, t) {
            return {_reducerDefinitionType: 'asyncThunk', payloadCreator: e, ...t};
          } return e.withTypes=()=>e, {reducer: (e)=>Object.assign({[e.name]: (...t)=>e(...t)}[e.name], {_reducerDefinitionType: 'reducer'}), preparedReducer: (e, t)=>({_reducerDefinitionType: 'reducerWithPrepare', prepare: e, reducer: t}), asyncThunk: e};
        }()):e.reducers)||{}; const a=Object.keys(o); const i={sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: []}; const l={addCase(e, t) {
          const n='string'==typeof e?e:e.type; if (!n) throw new Error(fn(12)); if (n in i.sliceCaseReducersByType) throw new Error(fn(13)); return i.sliceCaseReducersByType[n]=t, l;
        }, addMatcher: (e, t)=>(i.sliceMatchers.push({matcher: e, reducer: t}), l), exposeAction: (e, t)=>(i.actionCreators[e]=t, l), exposeCaseReducer: (e, t)=>(i.sliceCaseReducersByName[e]=t, l)}; function u() {
          const [t={}, n=[], r]='function'==typeof e.extraReducers?zt(e.extraReducers):[e.extraReducers]; const o={...t, ...i.sliceCaseReducersByType}; return function(e, t) {
            let a; const [l, u, s]=zt(((e)=>{
              for (const t in o)e.addCase(t, o[t]); for (const t of i.sliceMatchers)e.addMatcher(t.matcher, t.reducer); for (const t of n)e.addMatcher(t.matcher, t.reducer); r&&e.addDefaultCase(r);
            })); if ('function'==typeof e)a=()=>Mt(e()); else {
              const t=Mt(e); a=()=>t;
            } function c(e=a(), t) {
              let n=[l[t.type], ...u.filter((({matcher: e})=>e(t))).map((({reducer: e})=>e))]; return 0===n.filter(((e)=>!!e)).length&&(n=[s]), n.reduce(((e, n)=>{
                if (n) {
                  if (_e(e)) {
                    const r=n(e, t); return void 0===r?e:r;
                  } if (ke(e)) return ct(e, ((e)=>n(e, t))); {const r=n(e, t); if (void 0===r) {
                    if (null===e) return e; throw new Error(fn(9));
                  } return r;}
                } return e;
              }), e);
            } return c.getInitialState=a, c;
          }(e.initialState);
        }a.forEach(((r)=>{
          const a=o[r]; const i={reducerName: r, type: en(n, r), createNotation: 'function'==typeof e.reducers}; !function(e) {
            return 'asyncThunk'===e._reducerDefinitionType;
          }(a)?function({type: e, reducerName: t, createNotation: n}, r, o) {
            let a; let i; if ('reducer'in r) {
              if (n&&!function(e) {
                return 'reducerWithPrepare'===e._reducerDefinitionType;
              }(r)) throw new Error(fn(17)); a=r.reducer, i=r.prepare;
            } else a=r; o.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, i?Ot(e, i):Ot(e));
          }(i, a, l):function({type: e, reducerName: t}, n, r, o) {
            if (!o) throw new Error(fn(18)); const {payloadCreator: a, fulfilled: i, pending: l, rejected: u, settled: s, options: c}=n; const d=o(e, a, c); r.exposeAction(t, d), i&&r.addCase(d.fulfilled, i), l&&r.addCase(d.pending, l), u&&r.addCase(d.rejected, u), s&&r.addMatcher(d.settled, s), r.exposeCaseReducer(t, {fulfilled: i||on, pending: l||on, rejected: u||on, settled: s||on});
          }(i, a, l, t);
        })); const s=(e)=>e; const c=new Map; let d; function f(e, t) {
          return d||(d=u()), d(e, t);
        } function p() {
          return d||(d=u()), d.getInitialState();
        } function h(t, n=!1) {
          function r(e) {
            let r=e[t]; return void 0===r&&n&&(r=p()), r;
          } function o(t=s) {
            const r=Pt(c, n, {insert: ()=>new WeakMap}); return Pt(r, t, {insert: ()=>{
              const r={}; for (const [o, a] of Object.entries(e.selectors??{}))r[o]=nn(a, t, p, n); return r;
            }});
          } return {reducerPath: t, getSelectors: o, get selectors() {
            return o(r);
          }, selectSlice: r};
        } const m={name: n, reducer: f, actions: i.actionCreators, caseReducers: i.sliceCaseReducersByName, getInitialState: p, ...h(r), injectInto(e, {reducerPath: t, ...n}={}) {
          const o=t??r; return e.inject({reducerPath: o, reducer: f}, n), {...m, ...h(o, !0)};
        }}; return m;
      };
    } function nn(e, t, n, r) {
      function o(o, ...a) {
        let i=t(o); return void 0===i&&r&&(i=n()), e(i, ...a);
      } return o.unwrapped=e, o;
    } const rn=tn(); function on() {} const {assign: an}=Object; const ln='listenerMiddleware'; const un=(e)=>{
      let {type: t, actionCreator: n, matcher: r, predicate: o, effect: a}=e; if (t)o=Ot(t).match; else if (n)t=n.type, o=n.match; else if (r)o=r; else if (!o) throw new Error(fn(21)); return ((e, t)=>{
        if ('function'!=typeof e) throw new Error(fn(32));
      })(a), {predicate: o, type: t, effect: a};
    }; var sn=Object.assign(((e)=>{
      const {type: t, predicate: n, effect: r}=un(e); return {id: Dt(), effect: r, type: t, predicate: n, pending: new Set, unsubscribe: ()=>{
        throw new Error(fn(22));
      }};
    }), {withTypes: ()=>sn}); var cn=Object.assign(Ot(`${ln}/add`), {withTypes: ()=>cn}); var dn=(Ot(`${ln}/removeAll`), Object.assign(Ot(`${ln}/remove`), {withTypes: ()=>dn})); function fn(e) {
      return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }Symbol.for('rtk-state-proxy-original'); var pn=((e)=>(e.uninitialized='uninitialized', e.pending='pending', e.fulfilled='fulfilled', e.rejected='rejected', e))(pn||{}); const hn=(e)=>[].concat(...e); const mn=he; function gn(e, t) {
      if (e===t||!(mn(e)&&mn(t)||Array.isArray(e)&&Array.isArray(t))) return t; const n=Object.keys(t); const r=Object.keys(e); let o=n.length===r.length; const a=Array.isArray(t)?[]:{}; for (const r of n)a[r]=gn(e[r], t[r]), o&&(o=e[r]===a[r]); return o?e:a;
    } const yn=(...e)=>fetch(...e); const vn=(e)=>e.status>=200&&e.status<=299; const bn=(e)=>/ion\/(vnd\.api\+)?json/.test(e.get('content-type')||''); function wn(e) {
      if (!he(e)) return e; const t={...e}; for (const [e, n] of Object.entries(t)) void 0===n&&delete t[e]; return t;
    } const Sn=class {
      constructor(e, t=void 0) {
        this.value=e, this.meta=t;
      }
    }; const xn=Ot('__rtkq/focused'); const En=Ot('__rtkq/unfocused'); const _n=Ot('__rtkq/online'); const kn=Ot('__rtkq/offline'); let Cn=!1; function On(e) {
      return 'query'===e.type;
    } function Nn(e, t, n, r, o, a) {
      return 'function'==typeof e?e(t, n, r, o).map(Mn).map(a):Array.isArray(e)?e.map(Mn).map(a):[];
    } function Mn(e) {
      return 'string'==typeof e?{type: e}:e;
    } function Pn(e) {
      return null!=e;
    } function Tn(e) {
      let t=0; for (const n in e)t++; return t;
    } const Rn=Symbol('forceQueryFn'); const An=(e)=>'function'==typeof e[Rn]; function In(e) {
      return e;
    } function zn(e, t, n, r) {
      return Nn(n[e.meta.arg.endpointName][t], Wt(e)?e.payload:void 0, Ht(e)?e.payload:void 0, e.meta.arg.originalArgs, 'baseQueryMeta'in e.meta?e.meta.baseQueryMeta:void 0, r);
    } function Dn(e, t, n) {
      const r=e[t]; r&&n(r);
    } function Ln(e) {
      return ('arg'in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId;
    } function jn(e, t, n) {
      const r=e[Ln(t)]; r&&n(r);
    } const Fn={}; function qn({reducerPath: e, queryThunk: t, mutationThunk: n, context: {endpointDefinitions: r, apiUid: o, extractRehydrationInfo: a, hasRehydrationInfo: i}, assertTagType: l, config: u}) {
      const s=Ot(`${e}/resetApiState`); const c=rn({name: `${e}/queries`, initialState: Fn, reducers: {removeQueryResult: {reducer(e, {payload: {queryCacheKey: t}}) {
        delete e[t];
      }, prepare: Rt()}, queryResultPatched: {reducer(e, {payload: {queryCacheKey: t, patches: n}}) {
        Dn(e, t, ((e)=>{
          e.data=ft(e.data, n.concat());
        }));
      }, prepare: Rt()}}, extraReducers(e) {
        e.addCase(t.pending, ((e, {meta: t, meta: {arg: n}})=>{
          const r=An(n); e[n.queryCacheKey]??={status: 'uninitialized', endpointName: n.endpointName}, Dn(e, n.queryCacheKey, ((e)=>{
            e.status='pending', e.requestId=r&&e.requestId?e.requestId:t.requestId, void 0!==n.originalArgs&&(e.originalArgs=n.originalArgs), e.startedTimeStamp=t.startedTimeStamp;
          }));
        })).addCase(t.fulfilled, ((e, {meta: t, payload: n})=>{
          Dn(e, t.arg.queryCacheKey, ((e)=>{
            if (e.requestId!==t.requestId&&!An(t.arg)) return; const {merge: o}=r[t.arg.endpointName]; if (e.status='fulfilled', o) {
              if (void 0!==e.data) {
                const {fulfilledTimeStamp: r, arg: a, baseQueryMeta: i, requestId: l}=t; const u=ct(e.data, ((e)=>o(e, n, {arg: a.originalArgs, baseQueryMeta: i, fulfilledTimeStamp: r, requestId: l}))); e.data=u;
              } else e.data=n;
            } else e.data=r[t.arg.endpointName].structuralSharing??1?gn(_e(e.data)?(_e(a=e.data)||xe(15), a[Se].base_):e.data, n):n; let a; delete e.error, e.fulfilledTimeStamp=t.fulfilledTimeStamp;
          }));
        })).addCase(t.rejected, ((e, {meta: {condition: t, arg: n, requestId: r}, error: o, payload: a})=>{
          Dn(e, n.queryCacheKey, ((e)=>{
            if (t);else {
              if (e.requestId!==r) return; e.status='rejected', e.error=a??o;
            }
          }));
        })).addMatcher(i, ((e, t)=>{
          const {queries: n}=a(t); for (const [t, r] of Object.entries(n))'fulfilled'!==r?.status&&'rejected'!==r?.status||(e[t]=r);
        }));
      }}); const d=rn({name: `${e}/mutations`, initialState: Fn, reducers: {removeMutationResult: {reducer(e, {payload: t}) {
        const n=Ln(t); n in e&&delete e[n];
      }, prepare: Rt()}}, extraReducers(e) {
        e.addCase(n.pending, ((e, {meta: t, meta: {requestId: n, arg: r, startedTimeStamp: o}})=>{
          r.track&&(e[Ln(t)]={requestId: n, status: 'pending', endpointName: r.endpointName, startedTimeStamp: o});
        })).addCase(n.fulfilled, ((e, {payload: t, meta: n})=>{
          n.arg.track&&jn(e, n, ((e)=>{
            e.requestId===n.requestId&&(e.status='fulfilled', e.data=t, e.fulfilledTimeStamp=n.fulfilledTimeStamp);
          }));
        })).addCase(n.rejected, ((e, {payload: t, error: n, meta: r})=>{
          r.arg.track&&jn(e, r, ((e)=>{
            e.requestId===r.requestId&&(e.status='rejected', e.error=t??n);
          }));
        })).addMatcher(i, ((e, t)=>{
          const {mutations: n}=a(t); for (const [t, r] of Object.entries(n))'fulfilled'!==r?.status&&'rejected'!==r?.status||t===r?.requestId||(e[t]=r);
        }));
      }}); const f=rn({name: `${e}/invalidation`, initialState: Fn, reducers: {updateProvidedBy: {reducer(e, t) {
        const {queryCacheKey: n, providedTags: r}=t.payload; for (const t of Object.values(e)) {
          for (const e of Object.values(t)) {
            const t=e.indexOf(n); -1!==t&&e.splice(t, 1);
          }
        } for (const {type: t, id: o} of r) {
          const r=(e[t]??={})[o||'__internal_without_id']??=[]; r.includes(n)||r.push(n);
        }
      }, prepare: Rt()}}, extraReducers(e) {
        e.addCase(c.actions.removeQueryResult, ((e, {payload: {queryCacheKey: t}})=>{
          for (const n of Object.values(e)) {
            for (const e of Object.values(n)) {
              const n=e.indexOf(t); -1!==n&&e.splice(n, 1);
            }
          }
        })).addMatcher(i, ((e, t)=>{
          const {provided: n}=a(t); for (const [t, r] of Object.entries(n)) {
            for (const [n, o] of Object.entries(r)) {
              const r=(e[t]??={})[n||'__internal_without_id']??=[]; for (const e of o)r.includes(e)||r.push(e);
            }
          }
        })).addMatcher(jt(Wt(t), Ht(t)), ((e, t)=>{
          const n=zn(t, 'providesTags', r, l); const {queryCacheKey: o}=t.meta.arg; f.caseReducers.updateProvidedBy(e, f.actions.updateProvidedBy({queryCacheKey: o, providedTags: n}));
        }));
      }}); const p=rn({name: `${e}/subscriptions`, initialState: Fn, reducers: {updateSubscriptionOptions(e, t) {}, unsubscribeQueryResult(e, t) {}, internal_getRTKQSubscriptions() {}}}); const h=rn({name: `${e}/internalSubscriptions`, initialState: Fn, reducers: {subscriptionsUpdated: {reducer: (e, t)=>ft(e, t.payload), prepare: Rt()}}}); const m=rn({name: `${e}/config`, initialState: {online: 'undefined'==typeof navigator||void 0===navigator.onLine||navigator.onLine, focused: 'undefined'==typeof document||'hidden'!==document.visibilityState, middlewareRegistered: !1, ...u}, reducers: {middlewareRegistered(e, {payload: t}) {
        e.middlewareRegistered='conflict'!==e.middlewareRegistered&&o===t||'conflict';
      }}, extraReducers: (e)=>{
        e.addCase(_n, ((e)=>{
          e.online=!0;
        })).addCase(kn, ((e)=>{
          e.online=!1;
        })).addCase(xn, ((e)=>{
          e.focused=!0;
        })).addCase(En, ((e)=>{
          e.focused=!1;
        })).addMatcher(i, ((e)=>({...e})));
      }}); const g=ge({queries: c.reducer, mutations: d.reducer, provided: f.reducer, subscriptions: h.reducer, config: m.reducer}); return {reducer: (e, t)=>g(s.match(t)?void 0:e, t), actions: {...m.actions, ...c.actions, ...p.actions, ...h.actions, ...d.actions, ...f.actions, resetApiState: s}};
    } const Un=Symbol.for('RTKQ/skipToken'); const Bn={status: 'uninitialized'}; const $n=ct(Bn, (()=>{})); const Hn=ct(Bn, (()=>{})); const Wn=WeakMap?new WeakMap:void 0; const Vn=({endpointName: e, queryArgs: t})=>{
      let n=''; const r=Wn?.get(t); if ('string'==typeof r)n=r; else {
        const e=JSON.stringify(t, ((e, t)=>he(t)?Object.keys(t).sort().reduce(((e, n)=>(e[n]=t[n], e)), {}):t)); he(t)&&Wn?.set(t, e), n=e;
      } return `${e}(${n})`;
    }; function Kn(...e) {
      return function(t) {
        const n=vt(((e)=>t.extractRehydrationInfo?.(e, {reducerPath: t.reducerPath??'api'}))); const r={reducerPath: 'api', keepUnusedDataFor: 60, refetchOnMountOrArgChange: !1, refetchOnFocus: !1, refetchOnReconnect: !1, invalidationBehavior: 'delayed', ...t, extractRehydrationInfo: n, serializeQueryArgs(e) {
          let n=Vn; if ('serializeQueryArgs'in e.endpointDefinition) {
            const t=e.endpointDefinition.serializeQueryArgs; n=(e)=>{
              const n=t(e); return 'string'==typeof n?n:Vn({...e, queryArgs: n});
            };
          } else t.serializeQueryArgs&&(n=t.serializeQueryArgs); return n(e);
        }, tagTypes: [...t.tagTypes||[]]}; const o={endpointDefinitions: {}, batch(e) {
          e();
        }, apiUid: Dt(), extractRehydrationInfo: n, hasRehydrationInfo: vt(((e)=>null!=n(e)))}; const a={injectEndpoints: function(e) {
          const t=e.endpoints({query: (e)=>({...e, type: 'query'}), mutation: (e)=>({...e, type: 'mutation'})}); for (const [n, r] of Object.entries(t)) {
            if (!0!==e.overrideExisting&&n in o.endpointDefinitions) {
              if ('throw'===e.overrideExisting) throw new Error(fn(39));
            } else {
              o.endpointDefinitions[n]=r; for (const e of i)e.injectEndpoint(n, r);
            }
          } return a;
        }, enhanceEndpoints({addTagTypes: e, endpoints: t}) {
          if (e) for (const t of e)r.tagTypes.includes(t)||r.tagTypes.push(t); if (t) for (const [e, n] of Object.entries(t))'function'==typeof n?n(o.endpointDefinitions[e]):Object.assign(o.endpointDefinitions[e]||{}, n); return a;
        }}; const i=e.map(((e)=>e.init(a, r, o))); return a.injectEndpoints({endpoints: t.endpoints});
      };
    } const Qn=({reducerPath: e, api: t, context: n, internalState: r})=>{
      const {removeQueryResult: o, unsubscribeQueryResult: a}=t.internalActions; function i(e) {
        const t=r.currentSubscriptions[e]; return !!t&&!function(e) {
          for (const t in e) return !1; return !0;
        }(t);
      } const l={}; function u(e, t, r, a) {
        const u=n.endpointDefinitions[t]; const s=u?.keepUnusedDataFor??a.keepUnusedDataFor; if (s===1/0) return; const c=Math.max(0, Math.min(s, 2147482.647)); if (!i(e)) {
          const t=l[e]; t&&clearTimeout(t), l[e]=setTimeout((()=>{
            i(e)||r.dispatch(o({queryCacheKey: e})), delete l[e];
          }), 1e3*c);
        }
      } return (r, o, i)=>{
        if (a.match(r)) {
          const t=o.getState()[e]; const {queryCacheKey: n}=r.payload; u(n, t.queries[n]?.endpointName, o, t.config);
        } if (t.util.resetApiState.match(r)) for (const [e, t] of Object.entries(l))t&&clearTimeout(t), delete l[e]; if (n.hasRehydrationInfo(r)) {
          const t=o.getState()[e]; const {queries: a}=n.extractRehydrationInfo(r); for (const [e, n] of Object.entries(a))u(e, n?.endpointName, o, t.config);
        }
      };
    }; const Yn=({reducerPath: e, context: t, context: {endpointDefinitions: n}, mutationThunk: r, queryThunk: o, api: a, assertTagType: i, refetchQuery: l, internalState: u})=>{
      const {removeQueryResult: s}=a.internalActions; const c=jt(Wt(r), Ht(r)); const d=jt(Wt(r, o), $t(r, o)); let f=[]; function p(n, r) {
        const o=r.getState(); const i=o[e]; if (f.push(...n), 'delayed'===i.config.invalidationBehavior&&function(e) {
          for (const t in e.queries) if ('pending'===e.queries[t]?.status) return !0; for (const t in e.mutations) if ('pending'===e.mutations[t]?.status) return !0; return !1;
        }(i)) return; const c=f; if (f=[], 0===c.length) return; const d=a.util.selectInvalidatedBy(o, c); t.batch((()=>{
          const e=Array.from(d.values()); for (const {queryCacheKey: t} of e) {
            const e=i.queries[t]; const n=u.currentSubscriptions[t]??{}; e&&(0===Tn(n)?r.dispatch(s({queryCacheKey: t})):'uninitialized'!==e.status&&r.dispatch(l(e, t)));
          }
        }));
      } return (e, t)=>{
c(e)?p(zn(e, 'invalidatesTags', n, i), t):d(e)?p([], t):a.util.invalidateTags.match(e)&&p(Nn(e.payload, void 0, void 0, void 0, void 0, i), t);
      };
    }; const Xn=({reducerPath: e, queryThunk: t, api: n, refetchQuery: r, internalState: o})=>{
      const a={}; function i({queryCacheKey: t}, n) {
        const l=n.getState()[e]; const u=l.queries[t]; const c=o.currentSubscriptions[t]; if (!u||'uninitialized'===u.status) return; const {lowestPollingInterval: d, skipPollingIfUnfocused: f}=s(c); if (!Number.isFinite(d)) return; const p=a[t]; p?.timeout&&(clearTimeout(p.timeout), p.timeout=void 0); const h=Date.now()+d; a[t]={nextPollTimestamp: h, pollingInterval: d, timeout: setTimeout((()=>{
          !l.config.focused&&f||n.dispatch(r(u, t)), i({queryCacheKey: t}, n);
        }), d)};
      } function l({queryCacheKey: t}, n) {
        const r=n.getState()[e].queries[t]; const l=o.currentSubscriptions[t]; if (!r||'uninitialized'===r.status) return; const {lowestPollingInterval: c}=s(l); if (!Number.isFinite(c)) return void u(t); const d=a[t]; const f=Date.now()+c; (!d||f<d.nextPollTimestamp)&&i({queryCacheKey: t}, n);
      } function u(e) {
        const t=a[e]; t?.timeout&&clearTimeout(t.timeout), delete a[e];
      } function s(e={}) {
        let t=!1; let n=Number.POSITIVE_INFINITY; for (const r in e)e[r].pollingInterval&&(n=Math.min(e[r].pollingInterval, n), t=e[r].skipPollingIfUnfocused||t); return {lowestPollingInterval: n, skipPollingIfUnfocused: t};
      } return (e, r)=>{
        (n.internalActions.updateSubscriptionOptions.match(e)||n.internalActions.unsubscribeQueryResult.match(e))&&l(e.payload, r), (t.pending.match(e)||t.rejected.match(e)&&e.meta.condition)&&l(e.meta.arg, r), (t.fulfilled.match(e)||t.rejected.match(e)&&!e.meta.condition)&&i(e.meta.arg, r), n.util.resetApiState.match(e)&&function() {
          for (const e of Object.keys(a))u(e);
        }();
      };
    }; const Gn=new Error('Promise never resolved before cacheEntryRemoved.'); const Zn=({api: e, reducerPath: t, context: n, queryThunk: r, mutationThunk: o, internalState: a})=>{
      const i=Vt(r); const l=Vt(o); const u=Wt(r, o); const s={}; function c(t, r, o, a, i) {
        const l=n.endpointDefinitions[t]; const u=l?.onCacheEntryAdded; if (!u) return; const c={}; const d=new Promise(((e)=>{
          c.cacheEntryRemoved=e;
        })); const f=Promise.race([new Promise(((e)=>{
          c.valueResolved=e;
        })), d.then((()=>{
          throw Gn;
        }))]); f.catch((()=>{})), s[o]=c; const p=e.endpoints[t].select('query'===l.type?r:o); const h=a.dispatch(((e, t, n)=>n)); const m={...a, getCacheEntry: ()=>p(a.getState()), requestId: i, extra: h, updateCachedData: 'query'===l.type?(n)=>a.dispatch(e.util.updateQueryData(t, r, n)):void 0, cacheDataLoaded: f, cacheEntryRemoved: d}; const g=u(r, m); Promise.resolve(g).catch(((e)=>{
          if (e!==Gn) throw e;
        }));
      } return (n, a, d)=>{
        const f=function(t) {
          return i(t)?t.meta.arg.queryCacheKey:l(t)?t.meta.arg.fixedCacheKey??t.meta.requestId:e.internalActions.removeQueryResult.match(t)?t.payload.queryCacheKey:e.internalActions.removeMutationResult.match(t)?Ln(t.payload):'';
        }(n); if (r.pending.match(n)) {
          const e=d[t].queries[f]; const r=a.getState()[t].queries[f]; !e&&r&&c(n.meta.arg.endpointName, n.meta.arg.originalArgs, f, a, n.meta.requestId);
        } else if (o.pending.match(n))a.getState()[t].mutations[f]&&c(n.meta.arg.endpointName, n.meta.arg.originalArgs, f, a, n.meta.requestId); else if (u(n)) {
          const e=s[f]; e?.valueResolved&&(e.valueResolved({data: n.payload, meta: n.meta.baseQueryMeta}), delete e.valueResolved);
        } else if (e.internalActions.removeQueryResult.match(n)||e.internalActions.removeMutationResult.match(n)) {
          const e=s[f]; e&&(delete s[f], e.cacheEntryRemoved());
        } else if (e.util.resetApiState.match(n)) for (const [e, t] of Object.entries(s)) delete s[e], t.cacheEntryRemoved();
      };
    }; const Jn=({api: e, context: t, queryThunk: n, mutationThunk: r})=>{
      const o=Bt(n, r); const a=$t(n, r); const i=Wt(n, r); const l={}; return (n, r)=>{
        if (o(n)) {
          const {requestId: o, arg: {endpointName: a, originalArgs: i}}=n.meta; const u=t.endpointDefinitions[a]; const s=u?.onQueryStarted; if (s) {
            const t={}; const n=new Promise(((e, n)=>{
              t.resolve=e, t.reject=n;
            })); n.catch((()=>{})), l[o]=t; const c=e.endpoints[a].select('query'===u.type?i:o); const d=r.dispatch(((e, t, n)=>n)); const f={...r, getCacheEntry: ()=>c(r.getState()), requestId: o, extra: d, updateCachedData: 'query'===u.type?(t)=>r.dispatch(e.util.updateQueryData(a, i, t)):void 0, queryFulfilled: n}; s(i, f);
          }
        } else if (i(n)) {
          const {requestId: e, baseQueryMeta: t}=n.meta; l[e]?.resolve({data: n.payload, meta: t}), delete l[e];
        } else if (a(n)) {
          const {requestId: e, rejectedWithValue: t, baseQueryMeta: r}=n.meta; l[e]?.reject({error: n.payload??n.error, isUnhandledError: !t, meta: r}), delete l[e];
        }
      };
    }; const er=({api: e, context: {apiUid: t}, reducerPath: n})=>(n, r)=>{
      e.util.resetApiState.match(n)&&r.dispatch(e.internalActions.middlewareRegistered(t));
    }; function tr(e) {
      const {reducerPath: t, queryThunk: n, api: r, context: o}=e; const {apiUid: a}=o; const i={invalidateTags: Ot(`${t}/invalidateTags`)}; const l=(e)=>e.type.startsWith(`${t}/`); const u=[er, Qn, Yn, Xn, Zn, Jn]; return {middleware: (n)=>{
        let i=!1; const c={...e, internalState: {currentSubscriptions: {}}, refetchQuery: s, isThisApiSliceAction: l}; const d=u.map(((e)=>e(c))); const f=(({api: e, queryThunk: t, internalState: n})=>{
          const r=`${e.reducerPath}/subscriptions`; let o=null; let a=null; const {updateSubscriptionOptions: i, unsubscribeQueryResult: l}=e.internalActions; const u=()=>n.currentSubscriptions; const s={getSubscriptions: u, getSubscriptionCount: (e)=>Tn(u()[e]??{}), isRequestSubscribed: (e, t)=>{
            const n=u(); return !!n?.[e]?.[t];
          }}; return (u, c)=>{
            if (o||(o=JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(u)) return o=n.currentSubscriptions={}, a=null, [!0, !1]; if (e.internalActions.internal_getRTKQSubscriptions.match(u)) return [!1, s]; const d=((n, r)=>{
              if (i.match(r)) {
                const {queryCacheKey: e, requestId: t, options: o}=r.payload; return n?.[e]?.[t]&&(n[e][t]=o), !0;
              } if (l.match(r)) {
                const {queryCacheKey: e, requestId: t}=r.payload; return n[e]&&delete n[e][t], !0;
              } if (e.internalActions.removeQueryResult.match(r)) return delete n[r.payload.queryCacheKey], !0; if (t.pending.match(r)) {
                const {meta: {arg: e, requestId: t}}=r; const o=n[e.queryCacheKey]??={}; return o[`${t}_running`]={}, e.subscribe&&(o[t]=e.subscriptionOptions??o[t]??{}), !0;
              } let o=!1; if (t.fulfilled.match(r)||t.rejected.match(r)) {
                const e=n[r.meta.arg.queryCacheKey]||{}; const t=`${r.meta.requestId}_running`; o||=!!e[t], delete e[t];
              } if (t.rejected.match(r)) {
                const {meta: {condition: e, arg: t, requestId: a}}=r; if (e&&t.subscribe) {
                  const e=n[t.queryCacheKey]??={}; e[a]=t.subscriptionOptions??e[a]??{}, o=!0;
                }
              } return o;
            })(n.currentSubscriptions, u); let f=!0; if (d) {
              a||(a=setTimeout((()=>{
                const t=JSON.parse(JSON.stringify(n.currentSubscriptions)); const [, r]=dt(o, (()=>t)); c.next(e.internalActions.subscriptionsUpdated(r)), o=t, a=null;
              }), 500)); const i='string'==typeof u.type&&!!u.type.startsWith(r); const l=t.rejected.match(u)&&u.meta.condition&&!!u.meta.arg.subscribe; f=!i&&!l;
            } return [f, !1];
          };
        })(c); const p=(({reducerPath: e, context: t, api: n, refetchQuery: r, internalState: o})=>{
          const {removeQueryResult: a}=n.internalActions; function i(n, i) {
            const l=n.getState()[e]; const u=l.queries; const s=o.currentSubscriptions; t.batch((()=>{
              for (const e of Object.keys(s)) {
                const t=u[e]; const o=s[e]; o&&t&&(Object.values(o).some(((e)=>!0===e[i]))||Object.values(o).every(((e)=>void 0===e[i]))&&l.config[i])&&(0===Tn(o)?n.dispatch(a({queryCacheKey: e})):'uninitialized'!==t.status&&n.dispatch(r(t, e)));
              }
            }));
          } return (e, t)=>{
            xn.match(e)&&i(t, 'refetchOnFocus'), _n.match(e)&&i(t, 'refetchOnReconnect');
          };
        })(c); return (e)=>(u)=>{
          if (!ve(u)) return e(u); i||(i=!0, n.dispatch(r.internalActions.middlewareRegistered(a))); const s={...n, next: e}; const c=n.getState(); const [h, m]=f(u, s, c); let g; if (g=h?e(u):m, n.getState()[t]&&(p(u, s, c), l(u)||o.hasRehydrationInfo(u))) for (const e of d)e(u, s, c); return g;
        };
      }, actions: i}; function s(e, t, r={}) {
        return n({type: 'query', endpointName: e.endpointName, originalArgs: e.originalArgs, subscribe: !1, forceRefetch: !0, queryCacheKey: t, ...r});
      }
    } function nr(e, ...t) {
      return Object.assign(e, ...t);
    } const rr=Symbol(); const or=({createSelector: e=wt}={})=>({name: rr, init(t, {baseQuery: n, tagTypes: r, reducerPath: o, serializeQueryArgs: a, keepUnusedDataFor: i, refetchOnMountOrArgChange: l, refetchOnFocus: u, refetchOnReconnect: s, invalidationBehavior: c}, d) {
      ut(); const f=(e)=>e; Object.assign(t, {reducerPath: o, endpoints: {}, internalActions: {onOnline: _n, onOffline: kn, onFocus: xn, onFocusLost: En}, util: {}}); const {queryThunk: p, mutationThunk: h, patchQueryData: m, updateQueryData: g, upsertQueryData: y, prefetch: v, buildMatchThunkActions: b}=function({reducerPath: e, baseQuery: t, context: {endpointDefinitions: n}, serializeQueryArgs: r, api: o, assertTagType: a}) {
        const i=async (e, {signal: r, abort: o, rejectWithValue: a, fulfillWithValue: i, dispatch: u, getState: s, extra: c})=>{
          const d=n[e.endpointName]; try {
            let n; let a=In; const f={signal: r, abort: o, dispatch: u, getState: s, extra: c, endpoint: e.endpointName, type: e.type, forced: 'query'===e.type?l(e, s()):void 0}; const p='query'===e.type?e[Rn]:void 0; if (p?n=p():d.query?(n=await t(d.query(e.originalArgs), f, d.extraOptions), d.transformResponse&&(a=d.transformResponse)):n=await d.queryFn(e.originalArgs, f, d.extraOptions, ((e)=>t(e, f, d.extraOptions))), n.error) throw new Sn(n.error, n.meta); return i(await a(n.data, n.meta, e.originalArgs), {fulfilledTimeStamp: Date.now(), baseQueryMeta: n.meta, [Tt]: !0});
          } catch (t) {
            let n=t; if (n instanceof Sn) {
              let t=In; d.query&&d.transformErrorResponse&&(t=d.transformErrorResponse); try {
                return a(await t(n.value, n.meta, e.originalArgs), {baseQueryMeta: n.meta, [Tt]: !0});
              } catch (e) {
                n=e;
              }
            } throw console.error(n), n;
          }
        }; function l(t, n) {
          const r=n[e]?.queries?.[t.queryCacheKey]; const o=n[e]?.config.refetchOnMountOrArgChange; const a=r?.fulfilledTimeStamp; const i=t.forceRefetch??(t.subscribe&&o); return !!i&&(!0===i||(Number(new Date)-Number(a))/1e3>=i);
        } function u(e) {
          return (t)=>t?.meta?.arg?.endpointName===e;
        } return {queryThunk: Gt(`${e}/executeQuery`, i, {getPendingMeta: ()=>({startedTimeStamp: Date.now(), [Tt]: !0}), condition(t, {getState: r}) {
          const o=r(); const a=o[e]?.queries?.[t.queryCacheKey]; const i=a?.fulfilledTimeStamp; const u=t.originalArgs; const s=a?.originalArgs; const c=n[t.endpointName]; return !(!An(t)&&('pending'===a?.status||!l(t, o)&&(!On(c)||!c?.forceRefetch?.({currentArg: u, previousArg: s, endpointState: a, state: o}))&&i));
        }, dispatchConditionRejection: !0}), mutationThunk: Gt(`${e}/executeMutation`, i, {getPendingMeta: ()=>({startedTimeStamp: Date.now(), [Tt]: !0})}), prefetch: (e, t, n)=>(r, a)=>{
          const i=((e)=>'force'in e)(n)&&n.force; const l=((e)=>'ifOlderThan'in e)(n)&&n.ifOlderThan; const u=(n=!0)=>{
            const r={forceRefetch: n, isPrefetch: !0}; return o.endpoints[e].initiate(t, r);
          }; const s=o.endpoints[e].select(t)(a()); if (i)r(u()); else if (l) {
            const e=s?.fulfilledTimeStamp; if (!e) return void r(u()); (Number(new Date)-Number(new Date(e)))/1e3>=l&&r(u());
          } else r(u(!1));
        }, updateQueryData: (e, t, n, r=!0)=>(a, i)=>{
          const l=o.endpoints[e].select(t)(i()); let u; const s={patches: [], inversePatches: [], undo: ()=>a(o.util.patchQueryData(e, t, s.inversePatches, r))}; if ('uninitialized'===l.status) return s; if ('data'in l) {
            if (ke(l.data)) {
              const [e, t, r]=dt(l.data, n); s.patches.push(...t), s.inversePatches.push(...r), u=e;
            } else u=n(l.data), s.patches.push({op: 'replace', path: [], value: u}), s.inversePatches.push({op: 'replace', path: [], value: l.data});
          } return a(o.util.patchQueryData(e, t, s.patches, r)), s;
        }, upsertQueryData: (e, t, n)=>(r)=>r(o.endpoints[e].initiate(t, {subscribe: !1, forceRefetch: !0, [Rn]: ()=>({data: n})})), patchQueryData: (e, t, i, l)=>(u, s)=>{
          const c=n[e]; const d=r({queryArgs: t, endpointDefinition: c, endpointName: e}); if (u(o.internalActions.queryResultPatched({queryCacheKey: d, patches: i})), !l) return; const f=o.endpoints[e].select(t)(s()); const p=Nn(c.providesTags, f.data, void 0, t, {}, a); u(o.internalActions.updateProvidedBy({queryCacheKey: d, providedTags: p}));
        }, buildMatchThunkActions: function(e, t) {
          return {matchPending: Ft(Bt(e), u(t)), matchFulfilled: Ft(Wt(e), u(t)), matchRejected: Ft($t(e), u(t))};
        }};
      }({baseQuery: n, reducerPath: o, context: d, api: t, serializeQueryArgs: a, assertTagType: f}); const {reducer: w, actions: S}=qn({context: d, queryThunk: p, mutationThunk: h, reducerPath: o, assertTagType: f, config: {refetchOnFocus: u, refetchOnReconnect: s, refetchOnMountOrArgChange: l, keepUnusedDataFor: i, reducerPath: o, invalidationBehavior: c}}); nr(t.util, {patchQueryData: m, updateQueryData: g, upsertQueryData: y, prefetch: v, resetApiState: S.resetApiState}), nr(t.internalActions, S); const {middleware: x, actions: E}=tr({reducerPath: o, context: d, queryThunk: p, mutationThunk: h, api: t, assertTagType: f}); nr(t.util, E), nr(t, {reducer: w, middleware: x}); const {buildQuerySelector: _, buildMutationSelector: k, selectInvalidatedBy: C, selectCachedArgsForQuery: O}=function({serializeQueryArgs: e, reducerPath: t, createSelector: n}) {
        const r=(e)=>$n; const o=(e)=>Hn; return {buildQuerySelector: function(t, o) {
          return (l)=>{
            const u=e({queryArgs: l, endpointDefinition: o, endpointName: t}); return n(l===Un?r:(e)=>i(e)?.queries?.[u]??$n, a);
          };
        }, buildMutationSelector: function() {
          return (e)=>{
            let t; return t='object'==typeof e?Ln(e)??Un:e, n(t===Un?o:(e)=>i(e)?.mutations?.[t]??Hn, a);
          };
        }, selectInvalidatedBy: function(e, n) {
          const r=e[t]; const o=new Set; for (const e of n.map(Mn)) {
            const t=r.provided[e.type]; if (!t) continue; const n=(void 0!==e.id?t[e.id]:hn(Object.values(t)))??[]; for (const e of n)o.add(e);
          } return hn(Array.from(o.values()).map(((e)=>{
            const t=r.queries[e]; return t?[{queryCacheKey: e, endpointName: t.endpointName, originalArgs: t.originalArgs}]:[];
          })));
        }, selectCachedArgsForQuery: function(e, n) {
          return Object.values(e[t].queries).filter(((e)=>e?.endpointName===n&&'uninitialized'!==e.status)).map(((e)=>e.originalArgs));
        }}; function a(e) {
          return {...e, ...(t=e.status, {status: t, isUninitialized: 'uninitialized'===t, isLoading: 'pending'===t, isSuccess: 'fulfilled'===t, isError: 'rejected'===t})}; let t;
        } function i(e) {
          return e[t];
        }
      }({serializeQueryArgs: a, reducerPath: o, createSelector: e}); nr(t.util, {selectInvalidatedBy: C, selectCachedArgsForQuery: O}); const {buildInitiateQuery: N, buildInitiateMutation: M, getRunningMutationThunk: P, getRunningMutationsThunk: T, getRunningQueriesThunk: R, getRunningQueryThunk: A}=function({serializeQueryArgs: e, queryThunk: t, mutationThunk: n, api: r, context: o}) {
        const a=new Map; const i=new Map; const {unsubscribeQueryResult: l, removeMutationResult: u, updateSubscriptionOptions: s}=r.internalActions; return {buildInitiateQuery: function(n, o) {
          const i=(u, {subscribe: c=!0, forceRefetch: d, subscriptionOptions: f, [Rn]: p, ...h}={})=>(m, g)=>{
            const y=e({queryArgs: u, endpointDefinition: o, endpointName: n}); const v=t({...h, type: 'query', subscribe: c, forceRefetch: d, subscriptionOptions: f, endpointName: n, originalArgs: u, queryCacheKey: y, [Rn]: p}); const b=r.endpoints[n].select(u); const w=m(v); const S=b(g()); const {requestId: x, abort: E}=w; const _=S.requestId!==x; const k=a.get(m)?.[y]; const C=()=>b(g()); const O=Object.assign(p?w.then(C):_&&!k?Promise.resolve(S):Promise.all([k, w]).then(C), {arg: u, requestId: x, subscriptionOptions: f, queryCacheKey: y, abort: E, async unwrap() {
              const e=await O; if (e.isError) throw e.error; return e.data;
            }, refetch: ()=>m(i(u, {subscribe: !1, forceRefetch: !0})), unsubscribe() {
              c&&m(l({queryCacheKey: y, requestId: x}));
            }, updateSubscriptionOptions(e) {
              O.subscriptionOptions=e, m(s({endpointName: n, requestId: x, queryCacheKey: y, options: e}));
            }}); if (!k&&!_&&!p) {
              const e=a.get(m)||{}; e[y]=O, a.set(m, e), O.then((()=>{
                delete e[y], Tn(e)||a.delete(m);
              }));
            } return O;
          }; return i;
        }, buildInitiateMutation: function(e) {
          return (t, {track: r=!0, fixedCacheKey: o}={})=>(a, l)=>{
            const s=n({type: 'mutation', endpointName: e, originalArgs: t, track: r, fixedCacheKey: o}); const c=a(s); const {requestId: d, abort: f, unwrap: p}=c; const h=(m=(e)=>({error: e}), c.unwrap().then(((e)=>({data: e}))).catch(m)); let m; const g=Object.assign(h, {arg: c.arg, requestId: d, abort: f, unwrap: p, reset: ()=>{
              a(u({requestId: d, fixedCacheKey: o}));
            }}); const y=i.get(a)||{}; return i.set(a, y), y[d]=g, g.then((()=>{
              delete y[d], Tn(y)||i.delete(a);
            })), o&&(y[o]=g, g.then((()=>{
              y[o]===g&&(delete y[o], Tn(y)||i.delete(a));
            }))), g;
          };
        }, getRunningQueryThunk: function(t, n) {
          return (r)=>{
            const i=o.endpointDefinitions[t]; const l=e({queryArgs: n, endpointDefinition: i, endpointName: t}); return a.get(r)?.[l];
          };
        }, getRunningMutationThunk: function(e, t) {
          return (e)=>i.get(e)?.[t];
        }, getRunningQueriesThunk: function() {
          return (e)=>Object.values(a.get(e)||{}).filter(Pn);
        }, getRunningMutationsThunk: function() {
          return (e)=>Object.values(i.get(e)||{}).filter(Pn);
        }};
      }({queryThunk: p, mutationThunk: h, api: t, serializeQueryArgs: a, context: d}); return nr(t.util, {getRunningMutationThunk: P, getRunningMutationsThunk: T, getRunningQueryThunk: A, getRunningQueriesThunk: R}), {name: rr, injectEndpoint(e, n) {
        const r=t; r.endpoints[e]??={}, On(n)?nr(r.endpoints[e], {name: e, select: _(e, n), initiate: N(e, n)}, b(p, e)):'mutation'===n.type&&nr(r.endpoints[e], {name: e, select: k(), initiate: M(e)}, b(h, e));
      }};
    }}); const ar=(or(), o(418)); const ir=e; const lr=Symbol.for('react-redux-context'); const ur='undefined'!=typeof globalThis?globalThis:{}; function sr() {
      if (!ir.createContext) return {}; const e=ur[lr]??(ur[lr]=new Map); let t=e.get(ir.createContext); return t||(t=ir.createContext(null), e.set(ir.createContext, t)), t;
    } const cr=sr(); function dr(e=cr) {
      return function() {
        return ir.useContext(e);
      };
    } const fr=dr(); let pr=()=>{
      throw new Error('uSES not initialized!');
    }; const hr=(e, t)=>e===t; function mr(e=cr) {
      const t=e===cr?fr:dr(e); const n=(e, n={})=>{
        const {equalityFn: r=hr, devModeChecks: o={}}='function'==typeof n?{equalityFn: n}:n; const {store: a, subscription: i, getServerState: l, stabilityCheck: u, identityFunctionCheck: s}=t(); const c=(ir.useRef(!0), ir.useCallback({[e.name]: (t)=>e(t)}[e.name], [e, u, o.stabilityCheck])); const d=pr(i.addNestedSub, a.getState, l||a.getState, c, r); return ir.useDebugValue(d), d;
      }; return Object.assign(n, {withTypes: ()=>n}), n;
    } const gr=mr(); function yr(e) {
      e();
    }Symbol.for('react.element'), Symbol.for('react.portal'), Symbol.for('react.fragment'), Symbol.for('react.strict_mode'), Symbol.for('react.profiler'), Symbol.for('react.provider'), Symbol.for('react.context'), Symbol.for('react.server_context'), Symbol.for('react.forward_ref'), Symbol.for('react.suspense'), Symbol.for('react.suspense_list'), Symbol.for('react.memo'), Symbol.for('react.lazy'), Symbol.for('react.offscreen'), Symbol.for('react.client.reference'); const vr={notify() {}, get: ()=>[]}; const br='undefined'!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?ir.useLayoutEffect:ir.useEffect; function wr(e, t) {
      return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t;
    } function Sr(e, t) {
      if (wr(e, t)) return !0; if ('object'!=typeof e||null===e||'object'!=typeof t||null===t) return !1; const n=Object.keys(e); const r=Object.keys(t); if (n.length!==r.length) return !1; for (let r=0; r<n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r])||!wr(e[n[r]], t[n[r]])) return !1; return !0;
    }Object.defineProperty, Object.getOwnPropertyNames, Object.getOwnPropertySymbols, Object.getOwnPropertyDescriptor, Object.getPrototypeOf, Object.prototype; const xr=function({store: e, context: t, children: n, serverState: r, stabilityCheck: o='once', identityFunctionCheck: a='once'}) {
      const i=ir.useMemo((()=>{
        const t=function(e, t) {
          let n; let r=vr; let o=0; let a=!1; function i() {
            s.onStateChange&&s.onStateChange();
          } function l() {
            o++, n||(n=t?t.addNestedSub(i):e.subscribe(i), r=function() {
              let e=null; let t=null; return {clear() {
                e=null, t=null;
              }, notify() {
                yr((()=>{
                  let t=e; for (;t;)t.callback(), t=t.next;
                }));
              }, get() {
                const t=[]; let n=e; for (;n;)t.push(n), n=n.next; return t;
              }, subscribe(n) {
                let r=!0; const o=t={callback: n, next: null, prev: t}; return o.prev?o.prev.next=o:e=o, function() {
                  r&&null!==e&&(r=!1, o.next?o.next.prev=o.prev:t=o.prev, o.prev?o.prev.next=o.next:e=o.next);
                };
              }};
            }());
          } function u() {
            o--, n&&0===o&&(n(), n=void 0, r.clear(), r=vr);
          } const s={addNestedSub: function(e) {
            l(); const t=r.subscribe(e); let n=!1; return ()=>{
              n||(n=!0, t(), u());
            };
          }, notifyNestedSubs: function() {
            r.notify();
          }, handleChangeWrapper: i, isSubscribed: function() {
            return a;
          }, trySubscribe: function() {
            a||(a=!0, l());
          }, tryUnsubscribe: function() {
            a&&(a=!1, u());
          }, getListeners: ()=>r}; return s;
        }(e); return {store: e, subscription: t, getServerState: r?()=>r:void 0, stabilityCheck: o, identityFunctionCheck: a};
      }), [e, r, o, a]); const l=ir.useMemo((()=>e.getState()), [e]); br((()=>{
        const {subscription: t}=i; return t.onStateChange=t.notifyNestedSubs, t.trySubscribe(), l!==e.getState()&&t.notifyNestedSubs(), ()=>{
          t.tryUnsubscribe(), t.onStateChange=void 0;
        };
      }), [i, l]); const u=t||cr; return ir.createElement(u.Provider, {value: i}, n);
    }; function Er(e=cr) {
      const t=e===cr?fr:dr(e); const n=()=>{
        const {store: e}=t(); return e;
      }; return Object.assign(n, {withTypes: ()=>n}), n;
    } const _r=Er(); function kr(e=cr) {
      const t=e===cr?_r:Er(e); const n=()=>t().dispatch; return Object.assign(n, {withTypes: ()=>n}), n;
    } let Cr; const Or=kr(); const Nr=yr; function Mr(e, ...t) {
      return Object.assign(e, ...t);
    } function Pr(e) {
      return e.replace(e[0], e[0].toUpperCase());
    }Cr=ar.useSyncExternalStoreWithSelector, pr=Cr, e.useSyncExternalStore; const Tr=WeakMap?new WeakMap:void 0; const Rr=({endpointName: e, queryArgs: t})=>{
      let n=''; const r=Tr?.get(t); if ('string'==typeof r)n=r; else {
        const e=JSON.stringify(t, ((e, t)=>he(t)?Object.keys(t).sort().reduce(((e, n)=>(e[n]=t[n], e)), {}):t)); he(t)&&Tr?.set(t, e), n=e;
      } return `${e}(${n})`;
    }; const Ar=Symbol(); function Ir(t, n, r, o) {
      const a=(0, e.useMemo)((()=>({queryArgs: t, serialized: 'object'==typeof t?n({queryArgs: t, endpointDefinition: r, endpointName: o}):t})), [t, n, r, o]); const i=(0, e.useRef)(a); return (0, e.useEffect)((()=>{
        i.current.serialized!==a.serialized&&(i.current=a);
      }), [a]), i.current.serialized===a.serialized?i.current.queryArgs:t;
    } function zr(t) {
      const n=(0, e.useRef)(t); return (0, e.useEffect)((()=>{
        Sr(n.current, t)||(n.current=t);
      }), [t]), Sr(n.current, t)?n.current:t;
    } const Dr='undefined'!=typeof window&&window.document&&window.document.createElement?e.useLayoutEffect:e.useEffect; const Lr=(e)=>e.isUninitialized?{...e, isUninitialized: !1, isFetching: !0, isLoading: void 0===e.data, status: pn.pending}:e; const jr=Symbol(); const Fr=Kn(or(), (({batch: t=Nr, hooks: n={useDispatch: Or, useSelector: gr, useStore: _r}, createSelector: r=wt, unstable__sideEffectsInRender: o=!1, ...a}={})=>({name: jr, init(a, {serializeQueryArgs: i}, l) {
      const u=a; const {buildQueryHooks: s, buildMutationHook: c, usePrefetch: d}=function({api: t, moduleOptions: {batch: n, hooks: {useDispatch: r, useSelector: o, useStore: a}, unstable__sideEffectsInRender: i, createSelector: l}, serializeQueryArgs: u, context: s}) {
        const c=i?(e)=>e():e.useEffect; return {buildQueryHooks: function(i) {
          const f=(n, {refetchOnReconnect: o, refetchOnFocus: a, refetchOnMountOrArgChange: l, skip: u=!1, pollingInterval: d=0, skipPollingIfUnfocused: f=!1}={})=>{
            const {initiate: p}=t.endpoints[i]; const h=r(); const m=(0, e.useRef)(); if (!m.current) {
              const e=h(t.internalActions.internal_getRTKQSubscriptions()); m.current=e;
            } const g=Ir(u?Un:n, Rr, s.endpointDefinitions[i], i); const y=zr({refetchOnReconnect: o, refetchOnFocus: a, pollingInterval: d, skipPollingIfUnfocused: f}); const v=(0, e.useRef)(!1); const b=(0, e.useRef)(); const {queryCacheKey: w, requestId: S}=b.current||{}; let x=!1; w&&S&&(x=m.current.isRequestSubscribed(w, S)); const E=!x&&v.current; return c((()=>{
              v.current=x;
            })), c((()=>{
              E&&(b.current=void 0);
            }), [E]), c((()=>{
              const e=b.current; if (g===Un) return e?.unsubscribe(), void(b.current=void 0); const t=b.current?.subscriptionOptions; if (e&&e.arg===g)y!==t&&e.updateSubscriptionOptions(y); else {
                e?.unsubscribe(); const t=h(p(g, {subscriptionOptions: y, forceRefetch: l})); b.current=t;
              }
            }), [h, p, l, g, y, E]), (0, e.useEffect)((()=>()=>{
              b.current?.unsubscribe(), b.current=void 0;
            }), []), (0, e.useMemo)((()=>({refetch: ()=>{
              if (!b.current) throw new Error(fn(38)); return b.current?.refetch();
            }})), []);
          }; const p=({refetchOnReconnect: o, refetchOnFocus: a, pollingInterval: l=0, skipPollingIfUnfocused: u=!1}={})=>{
            const {initiate: s}=t.endpoints[i]; const d=r(); const [f, p]=(0, e.useState)(Ar); const h=(0, e.useRef)(); const m=zr({refetchOnReconnect: o, refetchOnFocus: a, pollingInterval: l, skipPollingIfUnfocused: u}); c((()=>{
              const e=h.current?.subscriptionOptions; m!==e&&h.current?.updateSubscriptionOptions(m);
            }), [m]); const g=(0, e.useRef)(m); c((()=>{
              g.current=m;
            }), [m]); const y=(0, e.useCallback)((function(e, t=!1) {
              let r; return n((()=>{
                h.current?.unsubscribe(), h.current=r=d(s(e, {subscriptionOptions: g.current, forceRefetch: !t})), p(e);
              })), r;
            }), [d, s]); return (0, e.useEffect)((()=>()=>{
              h?.current?.unsubscribe();
            }), []), (0, e.useEffect)((()=>{
              f===Ar||h.current||y(f, !0);
            }), [f, y]), (0, e.useMemo)((()=>[y, f]), [y, f]);
          }; const h=(n, {skip: r=!1, selectFromResult: c}={})=>{
            const {select: f}=t.endpoints[i]; const p=Ir(r?Un:n, u, s.endpointDefinitions[i], i); const h=(0, e.useRef)(); const m=(0, e.useMemo)((()=>l([f(p), (e, t)=>t, (e)=>p], d, {memoizeOptions: {resultEqualityCheck: Sr}})), [f, p]); const g=(0, e.useMemo)((()=>c?l([m], c, {devModeChecks: {identityFunctionCheck: 'never'}}):m), [m, c]); const y=o(((e)=>g(e, h.current)), Sr); const v=a(); const b=m(v.getState(), h.current); return Dr((()=>{
              h.current=b;
            }), [b]), y;
          }; return {useQueryState: h, useQuerySubscription: f, useLazyQuerySubscription: p, useLazyQuery(t) {
            const [n, r]=p(t); const o=h(r, {...t, skip: r===Ar}); const a=(0, e.useMemo)((()=>({lastArg: r})), [r]); return (0, e.useMemo)((()=>[n, o, a]), [n, o, a]);
          }, useQuery(t, n) {
            const r=f(t, n); const o=h(t, {selectFromResult: t===Un||n?.skip?void 0:Lr, ...n}); const {data: a, status: i, isLoading: l, isSuccess: u, isError: s, error: c}=o; return (0, e.useDebugValue)({data: a, status: i, isLoading: l, isSuccess: u, isError: s, error: c}), (0, e.useMemo)((()=>({...o, ...r})), [o, r]);
          }};
        }, buildMutationHook: function(a) {
          return ({selectFromResult: i, fixedCacheKey: u}={})=>{
            const {select: s, initiate: c}=t.endpoints[a]; const d=r(); const [f, p]=(0, e.useState)(); (0, e.useEffect)((()=>()=>{
              f?.arg.fixedCacheKey||f?.reset();
            }), [f]); const h=(0, e.useCallback)((function(e) {
              const t=d(c(e, {fixedCacheKey: u})); return p(t), t;
            }), [d, c, u]); const {requestId: m}=f||{}; const g=(0, e.useMemo)((()=>s({fixedCacheKey: u, requestId: f?.requestId})), [u, f, s]); const y=(0, e.useMemo)((()=>i?l([g], i):g), [i, g]); const v=o(y, Sr); const b=null==u?f?.arg.originalArgs:void 0; const w=(0, e.useCallback)((()=>{
              n((()=>{
                f&&p(void 0), u&&d(t.internalActions.removeMutationResult({requestId: m, fixedCacheKey: u}));
              }));
            }), [d, u, f, m]); const {endpointName: S, data: x, status: E, isLoading: _, isSuccess: k, isError: C, error: O}=v; (0, e.useDebugValue)({endpointName: S, data: x, status: E, isLoading: _, isSuccess: k, isError: C, error: O}); const N=(0, e.useMemo)((()=>({...v, originalArgs: b, reset: w})), [v, b, w]); return (0, e.useMemo)((()=>[h, N]), [h, N]);
          };
        }, usePrefetch: function(n, o) {
          const a=r(); const i=zr(o); return (0, e.useCallback)(((e, r)=>a(t.util.prefetch(n, e, {...i, ...r}))), [n, a, i]);
        }}; function d(e, t, n) {
          if (t?.endpointName&&e.isUninitialized) {
            const {endpointName: e}=t; const r=s.endpointDefinitions[e]; u({queryArgs: t.originalArgs, endpointDefinition: r, endpointName: e})===u({queryArgs: n, endpointDefinition: r, endpointName: e})&&(t=void 0);
          } let r=e.isSuccess?e.data:t?.data; void 0===r&&(r=e.data); const o=void 0!==r; const a=e.isLoading; const i=!o&&a; const l=e.isSuccess||a&&o; return {...e, data: r, currentData: e.data, isFetching: a, isLoading: i, isSuccess: l};
        }
      }({api: a, moduleOptions: {batch: t, hooks: n, unstable__sideEffectsInRender: o, createSelector: r}, serializeQueryArgs: i, context: l}); return Mr(u, {usePrefetch: d}), Mr(l, {batch: t}), {injectEndpoint(e, t) {
        if ('query'===t.type) {
          const {useQuery: t, useLazyQuery: n, useLazyQuerySubscription: r, useQueryState: o, useQuerySubscription: i}=s(e); Mr(u.endpoints[e], {useQuery: t, useLazyQuery: n, useLazyQuerySubscription: r, useQueryState: o, useQuerySubscription: i}), a[`use${Pr(e)}Query`]=t, a[`useLazy${Pr(e)}Query`]=n;
        } else if ('mutation'===t.type) {
          const t=c(e); Mr(u.endpoints[e], {useMutation: t}), a[`use${Pr(e)}Mutation`]=t;
        }
      }};
    }}))()); const qr=Fr({reducerPath: 'api', baseQuery: function({baseUrl: e, prepareHeaders: t=((e)=>e), fetchFn: n=yn, paramsSerializer: r, isJsonContentType: o=bn, jsonContentType: a='application/json', jsonReplacer: i, timeout: l, responseHandler: u, validateStatus: s, ...c}={}) {
      return 'undefined'==typeof fetch&&n===yn&&console.warn('Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'), async (f, p)=>{
        const {signal: h, getState: m, extra: g, endpoint: y, forced: v, type: b}=p; let w; let {url: S, headers: x=new Headers(c.headers), params: E, responseHandler: _=u??'json', validateStatus: k=s??vn, timeout: C=l, ...O}='string'==typeof f?{url: f}:f; const N={...c, signal: h, ...O}; x=new Headers(wn(x)), N.headers=await t(x, {getState: m, extra: g, endpoint: y, forced: v, type: b})||x; const M=(e)=>'object'==typeof e&&(he(e)||Array.isArray(e)||'function'==typeof e.toJSON); if (!N.headers.has('content-type')&&M(N.body)&&N.headers.set('content-type', a), M(N.body)&&o(N.headers)&&(N.body=JSON.stringify(N.body, i)), E) {
          const e=~S.indexOf('?')?'&':'?'; S+=e+(r?r(E):new URLSearchParams(wn(E)));
        }S=function(e, t) {
          if (!e) return t; if (!t) return e; if (function(e) {
            return new RegExp('(^|:)//').test(e);
          }(t)) return t; const n=e.endsWith('/')||!t.startsWith('?')?'/':''; return `${e=((e)=>e.replace(/\/$/, ''))(e)}${n}${t=((e)=>e.replace(/^\//, ''))(t)}`;
        }(e, S); const P=new Request(S, N); w={request: new Request(S, N)}; let T; let R=!1; const A=C&&setTimeout((()=>{
          R=!0, p.abort();
        }), C); try {
          T=await n(P);
        } catch (e) {
          return {error: {status: R?'TIMEOUT_ERROR':'FETCH_ERROR', error: String(e)}, meta: w};
        } finally {
          A&&clearTimeout(A);
        } const I=T.clone(); let z; w.response=I; let D=''; try {
          let e; if (await Promise.all([d(T, _).then(((e)=>z=e), ((t)=>e=t)), I.text().then(((e)=>D=e), (()=>{}))]), e) throw e;
        } catch (e) {
          return {error: {status: 'PARSING_ERROR', originalStatus: T.status, data: D, error: String(e)}, meta: w};
        } return k(T, z)?{data: z, meta: w}:{error: {status: T.status, data: z}, meta: w};
      }; async function d(e, t) {
        if ('function'==typeof t) return t(e); if ('content-type'===t&&(t=o(e.headers)?'json':'text'), 'json'===t) {
          const t=await e.text(); return t.length?JSON.parse(t):null;
        } return e.text();
      }
    }({baseUrl: 'http://localhost:3000'}), endpoints: function(e) {
      return {connect: e.mutation({query: function(e) {
        return {url: '/connect', method: 'POST', headers: {'Content-Type': 'application/json'}, body: e};
      }})};
    }}); const Ur=qr.useConnectMutation; function Br(e) {
      return Br='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
      }, Br(e);
    } function $r() {
      $r=function() {
        return t;
      }; let e; var t={}; const n=Object.prototype; const r=n.hasOwnProperty; const o=Object.defineProperty||function(e, t, n) {
        e[t]=n.value;
      }; const a='function'==typeof Symbol?Symbol:{}; const i=a.iterator||'@@iterator'; const l=a.asyncIterator||'@@asyncIterator'; const u=a.toStringTag||'@@toStringTag'; function s(e, t, n) {
        return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t];
      } try {
        s({}, '');
      } catch (e) {
        s=function(e, t, n) {
          return e[t]=n;
        };
      } function c(e, t, n, r) {
        const a=t&&t.prototype instanceof y?t:y; const i=Object.create(a.prototype); const l=new P(r||[]); return o(i, '_invoke', {value: C(e, n, l)}), i;
      } function d(e, t, n) {
        try {
          return {type: 'normal', arg: e.call(t, n)};
        } catch (e) {
          return {type: 'throw', arg: e};
        }
      }t.wrap=c; const f='suspendedStart'; const p='suspendedYield'; const h='executing'; const m='completed'; const g={}; function y() {} function v() {} function b() {} let w={}; s(w, i, (function() {
        return this;
      })); const S=Object.getPrototypeOf; const x=S&&S(S(T([]))); x&&x!==n&&r.call(x, i)&&(w=x); const E=b.prototype=y.prototype=Object.create(w); function _(e) {
        ['next', 'throw', 'return'].forEach((function(t) {
          s(e, t, (function(e) {
            return this._invoke(t, e);
          }));
        }));
      } function k(e, t) {
        function n(o, a, i, l) {
          const u=d(e[o], e, a); if ('throw'!==u.type) {
            const s=u.arg; const c=s.value; return c&&'object'==Br(c)&&r.call(c, '__await')?t.resolve(c.__await).then((function(e) {
              n('next', e, i, l);
            }), (function(e) {
              n('throw', e, i, l);
            })):t.resolve(c).then((function(e) {
              s.value=e, i(s);
            }), (function(e) {
              return n('throw', e, i, l);
            }));
          }l(u.arg);
        } let a; o(this, '_invoke', {value: function(e, r) {
          function o() {
            return new t((function(t, o) {
              n(e, r, t, o);
            }));
          } return a=a?a.then(o, o):o();
        }});
      } function C(t, n, r) {
        let o=f; return function(a, i) {
          if (o===h) throw new Error('Generator is already running'); if (o===m) {
            if ('throw'===a) throw i; return {value: e, done: !0};
          } for (r.method=a, r.arg=i; ;) {
            const l=r.delegate; if (l) {
              const u=O(l, r); if (u) {
                if (u===g) continue; return u;
              }
            } if ('next'===r.method)r.sent=r._sent=r.arg; else if ('throw'===r.method) {
              if (o===f) throw o=m, r.arg; r.dispatchException(r.arg);
            } else 'return'===r.method&&r.abrupt('return', r.arg); o=h; const s=d(t, n, r); if ('normal'===s.type) {
              if (o=r.done?m:p, s.arg===g) continue; return {value: s.arg, done: r.done};
            }'throw'===s.type&&(o=m, r.method='throw', r.arg=s.arg);
          }
        };
      } function O(t, n) {
        const r=n.method; const o=t.iterator[r]; if (o===e) return n.delegate=null, 'throw'===r&&t.iterator.return&&(n.method='return', n.arg=e, O(t, n), 'throw'===n.method)||'return'!==r&&(n.method='throw', n.arg=new TypeError('The iterator does not provide a \''+r+'\' method')), g; const a=d(o, t.iterator, n.arg); if ('throw'===a.type) return n.method='throw', n.arg=a.arg, n.delegate=null, g; const i=a.arg; return i?i.done?(n[t.resultName]=i.value, n.next=t.nextLoc, 'return'!==n.method&&(n.method='next', n.arg=e), n.delegate=null, g):i:(n.method='throw', n.arg=new TypeError('iterator result is not an object'), n.delegate=null, g);
      } function N(e) {
        const t={tryLoc: e[0]}; 1 in e&&(t.catchLoc=e[1]), 2 in e&&(t.finallyLoc=e[2], t.afterLoc=e[3]), this.tryEntries.push(t);
      } function M(e) {
        const t=e.completion||{}; t.type='normal', delete t.arg, e.completion=t;
      } function P(e) {
        this.tryEntries=[{tryLoc: 'root'}], e.forEach(N, this), this.reset(!0);
      } function T(t) {
        if (t||''===t) {
          const n=t[i]; if (n) return n.call(t); if ('function'==typeof t.next) return t; if (!isNaN(t.length)) {
            let o=-1; const a=function n() {
              for (;++o<t.length;) if (r.call(t, o)) return n.value=t[o], n.done=!1, n; return n.value=e, n.done=!0, n;
            }; return a.next=a;
          }
        } throw new TypeError(Br(t)+' is not iterable');
      } return v.prototype=b, o(E, 'constructor', {value: b, configurable: !0}), o(b, 'constructor', {value: v, configurable: !0}), v.displayName=s(b, u, 'GeneratorFunction'), t.isGeneratorFunction=function(e) {
        const t='function'==typeof e&&e.constructor; return !!t&&(t===v||'GeneratorFunction'===(t.displayName||t.name));
      }, t.mark=function(e) {
        return Object.setPrototypeOf?Object.setPrototypeOf(e, b):(e.__proto__=b, s(e, u, 'GeneratorFunction')), e.prototype=Object.create(E), e;
      }, t.awrap=function(e) {
        return {__await: e};
      }, _(k.prototype), s(k.prototype, l, (function() {
        return this;
      })), t.AsyncIterator=k, t.async=function(e, n, r, o, a) {
        void 0===a&&(a=Promise); const i=new k(c(e, n, r, o), a); return t.isGeneratorFunction(n)?i:i.next().then((function(e) {
          return e.done?e.value:i.next();
        }));
      }, _(E), s(E, u, 'Generator'), s(E, i, (function() {
        return this;
      })), s(E, 'toString', (function() {
        return '[object Generator]';
      })), t.keys=function(e) {
        const t=Object(e); const n=[]; for (const r in t)n.push(r); return n.reverse(), function e() {
          for (;n.length;) {
            const r=n.pop(); if (r in t) return e.value=r, e.done=!1, e;
          } return e.done=!0, e;
        };
      }, t.values=T, P.prototype={constructor: P, reset: function(t) {
        if (this.prev=0, this.next=0, this.sent=this._sent=e, this.done=!1, this.delegate=null, this.method='next', this.arg=e, this.tryEntries.forEach(M), !t) for (const n in this)'t'===n.charAt(0)&&r.call(this, n)&&!isNaN(+n.slice(1))&&(this[n]=e);
      }, stop: function() {
        this.done=!0; const e=this.tryEntries[0].completion; if ('throw'===e.type) throw e.arg; return this.rval;
      }, dispatchException: function(t) {
        if (this.done) throw t; const n=this; function o(r, o) {
          return l.type='throw', l.arg=t, n.next=r, o&&(n.method='next', n.arg=e), !!o;
        } for (let a=this.tryEntries.length-1; a>=0; --a) {
          const i=this.tryEntries[a]; var l=i.completion; if ('root'===i.tryLoc) return o('end'); if (i.tryLoc<=this.prev) {
            const u=r.call(i, 'catchLoc'); const s=r.call(i, 'finallyLoc'); if (u&&s) {
              if (this.prev<i.catchLoc) return o(i.catchLoc, !0); if (this.prev<i.finallyLoc) return o(i.finallyLoc);
            } else if (u) {
              if (this.prev<i.catchLoc) return o(i.catchLoc, !0);
            } else {
              if (!s) throw new Error('try statement without catch or finally'); if (this.prev<i.finallyLoc) return o(i.finallyLoc);
            }
          }
        }
      }, abrupt: function(e, t) {
        for (let n=this.tryEntries.length-1; n>=0; --n) {
          const o=this.tryEntries[n]; if (o.tryLoc<=this.prev&&r.call(o, 'finallyLoc')&&this.prev<o.finallyLoc) {
            var a=o; break;
          }
        }a&&('break'===e||'continue'===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null); const i=a?a.completion:{}; return i.type=e, i.arg=t, a?(this.method='next', this.next=a.finallyLoc, g):this.complete(i);
      }, complete: function(e, t) {
        if ('throw'===e.type) throw e.arg; return 'break'===e.type||'continue'===e.type?this.next=e.arg:'return'===e.type?(this.rval=this.arg=e.arg, this.method='return', this.next='end'):'normal'===e.type&&t&&(this.next=t), g;
      }, finish: function(e) {
        for (let t=this.tryEntries.length-1; t>=0; --t) {
          const n=this.tryEntries[t]; if (n.finallyLoc===e) return this.complete(n.completion, n.afterLoc), M(n), g;
        }
      }, catch: function(e) {
        for (let t=this.tryEntries.length-1; t>=0; --t) {
          const n=this.tryEntries[t]; if (n.tryLoc===e) {
            const r=n.completion; if ('throw'===r.type) {
              var o=r.arg; M(n);
            } return o;
          }
        } throw new Error('illegal catch attempt');
      }, delegateYield: function(t, n, r) {
        return this.delegate={iterator: T(t), resultName: n, nextLoc: r}, 'next'===this.method&&(this.arg=e), g;
      }}, t;
    } function Hr(e, t, n, r, o, a, i) {
      try {
        var l=e[a](i); var u=l.value;
      } catch (e) {
        return void n(e);
      }l.done?t(u):Promise.resolve(u).then(r, o);
    } function Wr(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const Vr=function(t) {
      let n; let r; const o=Y(); const a=(n=Ur({fixedCacheKey: 'databaseSchema'}), r=2, function(e) {
        if (Array.isArray(e)) return e;
      }(n)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(n, r)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return Wr(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wr(e, t):void 0;
        }
      }(n, r)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }()); const i=a[0]; const l=a[1]; const u=(l.isLoading, l.isError); console.log(t); const s=function() {
        const e=function(e) {
          return function() {
            const t=this; const n=arguments; return new Promise((function(r, o) {
              const a=e.apply(t, n); function i(e) {
                Hr(a, r, o, i, l, 'next', e);
              } function l(e) {
                Hr(a, r, o, i, l, 'throw', e);
              }i(void 0);
            }));
          };
        }($r().mark((function e(n) {
          let r; let a; let l; return $r().wrap((function(e) {
            for (;;) {
              switch (e.prev=e.next) {
                case 0: return n.preventDefault(), console.log(n.target.elements), r={}, 'hosted'===t.location?r.uri=n.target.elements.uri.value:(r.user=n.target.elements.user.value, r.host=n.target.elements.host.value, r.database=n.target.elements.database.value, r.port=n.target.elements.port.value), e.prev=4, e.next=7, i(r); case 7: a=e.sent, l=a.data, console.log('we got something back!', l), o('/chart'), e.next=16; break; case 13: e.prev=13, e.t0=e.catch(4), console.error('we have an error', e.t0); case 16: case 'end': return e.stop();
              }
            }
          }), e, null, [[4, 13]]);
        }))); return function(t) {
          return e.apply(this, arguments);
        };
      }(); return 'hosted'===t.location?e.createElement('form', {onSubmit: s}, e.createElement('h3', null, 'Connect to Database'), e.createElement('label', {htmlFor: 'uri'}, 'Connection URI'), e.createElement('input', {type: 'text', name: 'uri', id: 'uri'}), e.createElement('button', {type: 'submit', className: 'button', value: 'submit'}, 'Submit'), u&&e.createElement('div', null, 'Error submitting form')):e.createElement('form', {onSubmit: s}, e.createElement('h3', null, 'Connect to Database'), e.createElement('label', {htmlFor: 'user'}, 'User'), e.createElement('input', {type: 'text', name: 'user', id: 'user'}), e.createElement('label', {htmlFor: 'host'}, 'Host'), e.createElement('input', {type: 'text', name: 'host', id: 'host'}), e.createElement('label', {htmlFor: 'database'}, 'Database'), e.createElement('input', {type: 'text', name: 'database', id: 'database'}), e.createElement('label', {htmlFor: 'port'}, 'Port'), e.createElement('input', {type: 'text', name: 'port', id: 'port'}), e.createElement('button', {type: 'submit', className: 'button', value: 'submit'}, 'Submit'), u&&e.createElement('div', null, 'Error submitting form'));
    }; const Kr=o(961); const Qr=o.t(Kr, 2); function Yr() {
      return Yr=Object.assign?Object.assign.bind():function(e) {
        for (let t=1; t<arguments.length; t++) {
          const n=arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r)&&(e[r]=n[r]);
        } return e;
      }, Yr.apply(this, arguments);
    } new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']); const Xr=['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'unstable_viewTransition']; try {
      window.__reactRouterVersion='6';
    } catch (e) {} new Map; const Gr=t.startTransition; function Zr(t) {
      const {basename: n, children: r, future: o, window: s}=t; const p=e.useRef(); null==p.current&&(p.current=function(e) {
        return void 0===e&&(e={}), function(e, t, n, r) {
          void 0===r&&(r={}); const {window: o=document.defaultView, v5Compat: s=!1}=r; const p=o.history; let h=i.Pop; let m=null; let g=y(); function y() {
            return (p.state||{idx: null}).idx;
          } function v() {
            h=i.Pop; const e=y(); const t=null==e?null:e-g; g=e, m&&m({action: h, location: w.location, delta: t});
          } function b(e) {
            const t='null'!==o.location.origin?o.location.origin:o.location.href; let n='string'==typeof e?e:f(e); return n=n.replace(/ $/, '%20'), u(t, 'No window.location.(origin|href) available to create URL for href: '+n), new URL(n, t);
          }null==g&&(g=0, p.replaceState(a({}, p.state, {idx: g}), '')); const w={get action() {
            return h;
          }, get location() {
            return e(o, p);
          }, listen(e) {
            if (m) throw new Error('A history only accepts one active listener'); return o.addEventListener(l, v), m=e, ()=>{
              o.removeEventListener(l, v), m=null;
            };
          }, createHref: (e)=>t(o, e), createURL: b, encodeLocation(e) {
            const t=b(e); return {pathname: t.pathname, search: t.search, hash: t.hash};
          }, push: function(e, t) {
            h=i.Push; const r=d(w.location, e, t); n&&n(r, e), g=y()+1; const a=c(r, g); const l=w.createHref(r); try {
              p.pushState(a, '', l);
            } catch (e) {
              if (e instanceof DOMException&&'DataCloneError'===e.name) throw e; o.location.assign(l);
            }s&&m&&m({action: h, location: w.location, delta: 1});
          }, replace: function(e, t) {
            h=i.Replace; const r=d(w.location, e, t); n&&n(r, e), g=y(); const o=c(r, g); const a=w.createHref(r); p.replaceState(o, '', a), s&&m&&m({action: h, location: w.location, delta: 0});
          }, go: (e)=>p.go(e)}; return w;
        }((function(e, t) {
          const {pathname: n, search: r, hash: o}=e.location; return d('', {pathname: n, search: r, hash: o}, t.state&&t.state.usr||null, t.state&&t.state.key||'default');
        }), (function(e, t) {
          return 'string'==typeof t?t:f(t);
        }), null, e);
      }({window: s, v5Compat: !0})); const h=p.current; const [m, g]=e.useState({action: h.action, location: h.location}); const {v7_startTransition: y}=o||{}; const v=e.useCallback(((e)=>{
y&&Gr?Gr((()=>g(e))):g(e);
      }), [g, y]); return e.useLayoutEffect((()=>h.listen(v)), [h, v]), e.createElement(le, {basename: n, children: r, location: m.location, navigationType: m.action, navigator: h, future: o});
    }Qr.flushSync, t.useId; const Jr='undefined'!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement; const eo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i; const to=e.forwardRef((function(t, n) {
      let r; let {onClick: o, relative: a, reloadDocument: i, replace: l, state: s, target: c, to: d, preventScrollReset: p, unstable_viewTransition: h}=t; const m=function(e, t) {
        if (null==e) return {}; let n; let r; const o={}; const a=Object.keys(e); for (r=0; r<a.length; r++)n=a[r], t.indexOf(n)>=0||(o[n]=e[n]); return o;
      }(t, Xr); const {basename: g}=e.useContext(B); let y=!1; if ('string'==typeof d&&eo.test(d)&&(r=d, Jr)) {
        try {
          const e=new URL(window.location.href); const t=d.startsWith('//')?new URL(e.protocol+d):new URL(d); const n=M(t.pathname, g); t.origin===e.origin&&null!=n?d=n+t.search+t.hash:y=!0;
        } catch (e) {}
      } const v=function(t, n) {
        const {relative: r}=void 0===n?{}:n; V()||u(!1); const {basename: o, navigator: a}=e.useContext(B); const {hash: i, pathname: l, search: s}=X(t, {relative: r}); let c=l; return '/'!==o&&(c='/'===l?o:A([o, l])), a.createHref({pathname: c, search: s, hash: i});
      }(d, {relative: a}); const b=function(t, n) {
        const {target: r, replace: o, state: a, preventScrollReset: i, relative: l, unstable_viewTransition: u}=void 0===n?{}:n; const s=Y(); const c=K(); const d=X(t, {relative: l}); return e.useCallback(((e)=>{
          if (function(e, t) {
            return !(0!==e.button||t&&'_self'!==t||function(e) {
              return !!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey);
            }(e));
          }(e, r)) {
            e.preventDefault(); const n=void 0!==o?o:f(c)===f(d); s(t, {replace: n, state: a, preventScrollReset: i, relative: l, unstable_viewTransition: u});
          }
        }), [c, s, d, o, a, r, t, i, l, u]);
      }(d, {replace: l, state: s, target: c, preventScrollReset: p, relative: a, unstable_viewTransition: h}); return e.createElement('a', Yr({}, m, {href: r||v, onClick: y||i?o:function(e) {
        o&&o(e), e.defaultPrevented||b(e);
      }, ref: n, target: c}));
    })); let no; let ro; (function(e) {
      e.UseScrollRestoration='useScrollRestoration', e.UseSubmit='useSubmit', e.UseSubmitFetcher='useSubmitFetcher', e.UseFetcher='useFetcher', e.useViewTransitionState='useViewTransitionState';
    })(no||(no={})), function(e) {
      e.UseFetcher='useFetcher', e.UseFetchers='useFetchers', e.UseScrollRestoration='useScrollRestoration';
    }(ro||(ro={})); const oo=function() {
      return e.createElement('div', {className: 'landing-page'}, e.createElement('h1', null, 'Say goodbye to ', e.createElement('br', null), 'inefficiencies ', e.createElement('br', null), 'and hello to ', e.createElement('br', null), e.createElement('span', null, 'precision with Yesql')), e.createElement('div', {className: 'landing-page-grid'}, e.createElement('div', null, e.createElement(r, null)), e.createElement('div', null, e.createElement('h3', null, 'In a world where time is currency,', e.createElement('br', null), 'optimize SQL queries effortlessly with Yesql.'), e.createElement('h4', null, 'Visualize records, columns, and table segments to', e.createElement('br', null), 'craft finely tuned queries for optimal performance.'), e.createElement('div', {className: 'landing-button-container'}, e.createElement(to, {className: 'button button-1', to: '/formpage'}, 'Connect to local Database'), e.createElement(to, {className: 'button button-2', to: '/hostedFormPage'}, 'Connect to hosted Database')))));
    }; const ao=o.p+'51b74e752554fd943e5a940ff2585cf1.png'; const io=function() {
      return e.createElement('nav', null, e.createElement('img', {className: 'logo', src: ao, alt: 'yesql_logo'}), e.createElement('ul', {className: 'navbar-links'}, e.createElement('li', null, 'Github'), e.createElement('li', null, 'Contact')));
    }; function lo(e) {
      if ('string'==typeof e||'number'==typeof e) return ''+e; let t=''; if (Array.isArray(e)) for (let n, r=0; r<e.length; r++)''!==(n=lo(e[r]))&&(t+=(t&&' ')+n); else for (const n in e)e[n]&&(t+=(t&&' ')+n); return t;
    } const uo=o(242); const so=(e)=>{
      let t; const n=new Set; const r=(e, r)=>{
        const o='function'==typeof e?e(t):e; if (!Object.is(o, t)) {
          const e=t; t=(null!=r?r:'object'!=typeof o||null===o)?o:Object.assign({}, t, o), n.forEach(((n)=>n(t, e)));
        }
      }; const o=()=>t; const a={setState: r, getState: o, getInitialState: ()=>i, subscribe: (e)=>(n.add(e), ()=>n.delete(e)), destroy: ()=>{
        console.warn('[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'), n.clear();
      }}; const i=t=e(r, o, a); return a;
    }; const {useDebugValue: co}=e; const {useSyncExternalStoreWithSelector: fo}=uo; const po=(e)=>e; function ho(e, t=po, n) {
      const r=fo(e.subscribe, e.getState, e.getServerState||e.getInitialState, t, n); return co(r), r;
    } const mo=(e, t)=>{
      const n=((e)=>e?so(e):so)(e); const r=(e, r=t)=>ho(n, e, r); return Object.assign(r, n), r;
    }; function go(e, t) {
      if (Object.is(e, t)) return !0; if ('object'!=typeof e||null===e||'object'!=typeof t||null===t) return !1; if (e instanceof Map&&t instanceof Map) {
        if (e.size!==t.size) return !1; for (const [n, r] of e) if (!Object.is(r, t.get(n))) return !1; return !0;
      } if (e instanceof Set&&t instanceof Set) {
        if (e.size!==t.size) return !1; for (const n of e) if (!t.has(n)) return !1; return !0;
      } const n=Object.keys(e); if (n.length!==Object.keys(t).length) return !1; for (const r of n) if (!Object.prototype.hasOwnProperty.call(t, r)||!Object.is(e[r], t[r])) return !1; return !0;
    } const yo={value: ()=>{}}; function vo() {
      for (var e, t=0, n=arguments.length, r={}; t<n; ++t) {
        if (!(e=arguments[t]+'')||e in r||/[\s.]/.test(e)) throw new Error('illegal type: '+e); r[e]=[];
      } return new bo(r);
    } function bo(e) {
      this._=e;
    } function wo(e, t) {
      for (var n, r=0, o=e.length; r<o; ++r) if ((n=e[r]).name===t) return n.value;
    } function So(e, t, n) {
      for (let r=0, o=e.length; r<o; ++r) {
        if (e[r].name===t) {
          e[r]=yo, e=e.slice(0, r).concat(e.slice(r+1)); break;
        }
      } return null!=n&&e.push({name: t, value: n}), e;
    }bo.prototype=vo.prototype={constructor: bo, on: function(e, t) {
      let n; let r; const o=this._; const a=(r=o, (e+'').trim().split(/^|\s+/).map((function(e) {
        let t=''; const n=e.indexOf('.'); if (n>=0&&(t=e.slice(n+1), e=e.slice(0, n)), e&&!r.hasOwnProperty(e)) throw new Error('unknown type: '+e); return {type: e, name: t};
      }))); let i=-1; const l=a.length; if (!(arguments.length<2)) {
        if (null!=t&&'function'!=typeof t) throw new Error('invalid callback: '+t); for (;++i<l;) if (n=(e=a[i]).type)o[n]=So(o[n], e.name, t); else if (null==t) for (n in o)o[n]=So(o[n], e.name, null); return this;
      } for (;++i<l;) if ((n=(e=a[i]).type)&&(n=wo(o[n], e.name))) return n;
    }, copy: function() {
      const e={}; const t=this._; for (const n in t)e[n]=t[n].slice(); return new bo(e);
    }, call: function(e, t) {
      if ((n=arguments.length-2)>0) for (var n, r, o=new Array(n), a=0; a<n; ++a)o[a]=arguments[a+2]; if (!this._.hasOwnProperty(e)) throw new Error('unknown type: '+e); for (a=0, n=(r=this._[e]).length; a<n; ++a)r[a].value.apply(t, o);
    }, apply: function(e, t, n) {
      if (!this._.hasOwnProperty(e)) throw new Error('unknown type: '+e); for (let r=this._[e], o=0, a=r.length; o<a; ++o)r[o].value.apply(t, n);
    }}; const xo=vo; function Eo() {} function _o(e) {
      return null==e?Eo:function() {
        return this.querySelector(e);
      };
    } function ko() {
      return [];
    } function Co(e) {
      return null==e?ko:function() {
        return this.querySelectorAll(e);
      };
    } function Oo(e) {
      return function() {
        return this.matches(e);
      };
    } function No(e) {
      return function(t) {
        return t.matches(e);
      };
    } const Mo=Array.prototype.find; function Po() {
      return this.firstElementChild;
    } const To=Array.prototype.filter; function Ro() {
      return Array.from(this.children);
    } function Ao(e) {
      return new Array(e.length);
    } function Io(e, t) {
      this.ownerDocument=e.ownerDocument, this.namespaceURI=e.namespaceURI, this._next=null, this._parent=e, this.__data__=t;
    } function zo(e, t, n, r, o, a) {
      for (var i, l=0, u=t.length, s=a.length; l<s; ++l)(i=t[l])?(i.__data__=a[l], r[l]=i):n[l]=new Io(e, a[l]); for (;l<u; ++l)(i=t[l])&&(o[l]=i);
    } function Do(e, t, n, r, o, a, i) {
      let l; let u; let s; const c=new Map; const d=t.length; const f=a.length; const p=new Array(d); for (l=0; l<d; ++l)(u=t[l])&&(p[l]=s=i.call(u, u.__data__, l, t)+'', c.has(s)?o[l]=u:c.set(s, u)); for (l=0; l<f; ++l)s=i.call(e, a[l], l, a)+'', (u=c.get(s))?(r[l]=u, u.__data__=a[l], c.delete(s)):n[l]=new Io(e, a[l]); for (l=0; l<d; ++l)(u=t[l])&&c.get(p[l])===u&&(o[l]=u);
    } function Lo(e) {
      return e.__data__;
    } function jo(e) {
      return 'object'==typeof e&&'length'in e?e:Array.from(e);
    } function Fo(e, t) {
      return e<t?-1:e>t?1:e>=t?0:NaN;
    }Io.prototype={constructor: Io, appendChild: function(e) {
      return this._parent.insertBefore(e, this._next);
    }, insertBefore: function(e, t) {
      return this._parent.insertBefore(e, t);
    }, querySelector: function(e) {
      return this._parent.querySelector(e);
    }, querySelectorAll: function(e) {
      return this._parent.querySelectorAll(e);
    }}; const qo='http://www.w3.org/1999/xhtml'; const Uo={svg: 'http://www.w3.org/2000/svg', xhtml: qo, xlink: 'http://www.w3.org/1999/xlink', xml: 'http://www.w3.org/XML/1998/namespace', xmlns: 'http://www.w3.org/2000/xmlns/'}; function Bo(e) {
      let t=e+=''; const n=t.indexOf(':'); return n>=0&&'xmlns'!==(t=e.slice(0, n))&&(e=e.slice(n+1)), Uo.hasOwnProperty(t)?{space: Uo[t], local: e}:e;
    } function $o(e) {
      return function() {
        this.removeAttribute(e);
      };
    } function Ho(e) {
      return function() {
        this.removeAttributeNS(e.space, e.local);
      };
    } function Wo(e, t) {
      return function() {
        this.setAttribute(e, t);
      };
    } function Vo(e, t) {
      return function() {
        this.setAttributeNS(e.space, e.local, t);
      };
    } function Ko(e, t) {
      return function() {
        const n=t.apply(this, arguments); null==n?this.removeAttribute(e):this.setAttribute(e, n);
      };
    } function Qo(e, t) {
      return function() {
        const n=t.apply(this, arguments); null==n?this.removeAttributeNS(e.space, e.local):this.setAttributeNS(e.space, e.local, n);
      };
    } function Yo(e) {
      return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView;
    } function Xo(e) {
      return function() {
        this.style.removeProperty(e);
      };
    } function Go(e, t, n) {
      return function() {
        this.style.setProperty(e, t, n);
      };
    } function Zo(e, t, n) {
      return function() {
        const r=t.apply(this, arguments); null==r?this.style.removeProperty(e):this.style.setProperty(e, r, n);
      };
    } function Jo(e, t) {
      return e.style.getPropertyValue(t)||Yo(e).getComputedStyle(e, null).getPropertyValue(t);
    } function ea(e) {
      return function() {
        delete this[e];
      };
    } function ta(e, t) {
      return function() {
        this[e]=t;
      };
    } function na(e, t) {
      return function() {
        const n=t.apply(this, arguments); null==n?delete this[e]:this[e]=n;
      };
    } function ra(e) {
      return e.trim().split(/^|\s+/);
    } function oa(e) {
      return e.classList||new aa(e);
    } function aa(e) {
      this._node=e, this._names=ra(e.getAttribute('class')||'');
    } function ia(e, t) {
      for (let n=oa(e), r=-1, o=t.length; ++r<o;)n.add(t[r]);
    } function la(e, t) {
      for (let n=oa(e), r=-1, o=t.length; ++r<o;)n.remove(t[r]);
    } function ua(e) {
      return function() {
        ia(this, e);
      };
    } function sa(e) {
      return function() {
        la(this, e);
      };
    } function ca(e, t) {
      return function() {
        (t.apply(this, arguments)?ia:la)(this, e);
      };
    } function da() {
      this.textContent='';
    } function fa(e) {
      return function() {
        this.textContent=e;
      };
    } function pa(e) {
      return function() {
        const t=e.apply(this, arguments); this.textContent=null==t?'':t;
      };
    } function ha() {
      this.innerHTML='';
    } function ma(e) {
      return function() {
        this.innerHTML=e;
      };
    } function ga(e) {
      return function() {
        const t=e.apply(this, arguments); this.innerHTML=null==t?'':t;
      };
    } function ya() {
      this.nextSibling&&this.parentNode.appendChild(this);
    } function va() {
      this.previousSibling&&this.parentNode.insertBefore(this, this.parentNode.firstChild);
    } function ba(e) {
      return function() {
        const t=this.ownerDocument; const n=this.namespaceURI; return n===qo&&t.documentElement.namespaceURI===qo?t.createElement(e):t.createElementNS(n, e);
      };
    } function wa(e) {
      return function() {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    } function Sa(e) {
      const t=Bo(e); return (t.local?wa:ba)(t);
    } function xa() {
      return null;
    } function Ea() {
      const e=this.parentNode; e&&e.removeChild(this);
    } function _a() {
      const e=this.cloneNode(!1); const t=this.parentNode; return t?t.insertBefore(e, this.nextSibling):e;
    } function ka() {
      const e=this.cloneNode(!0); const t=this.parentNode; return t?t.insertBefore(e, this.nextSibling):e;
    } function Ca(e) {
      return function() {
        const t=this.__on; if (t) {
          for (var n, r=0, o=-1, a=t.length; r<a; ++r)n=t[r], e.type&&n.type!==e.type||n.name!==e.name?t[++o]=n:this.removeEventListener(n.type, n.listener, n.options); ++o?t.length=o:delete this.__on;
        }
      };
    } function Oa(e, t, n) {
      return function() {
        let r; const o=this.__on; const a=function(e) {
          return function(t) {
            e.call(this, t, this.__data__);
          };
        }(t); if (o) for (let i=0, l=o.length; i<l; ++i) if ((r=o[i]).type===e.type&&r.name===e.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener=a, r.options=n), void(r.value=t); this.addEventListener(e.type, a, n), r={type: e.type, name: e.name, value: t, listener: a, options: n}, o?o.push(r):this.__on=[r];
      };
    } function Na(e, t, n) {
      const r=Yo(e); let o=r.CustomEvent; 'function'==typeof o?o=new o(t, n):(o=r.document.createEvent('Event'), n?(o.initEvent(t, n.bubbles, n.cancelable), o.detail=n.detail):o.initEvent(t, !1, !1)), e.dispatchEvent(o);
    } function Ma(e, t) {
      return function() {
        return Na(this, e, t);
      };
    } function Pa(e, t) {
      return function() {
        return Na(this, e, t.apply(this, arguments));
      };
    }aa.prototype={add: function(e) {
      this._names.indexOf(e)<0&&(this._names.push(e), this._node.setAttribute('class', this._names.join(' ')));
    }, remove: function(e) {
      const t=this._names.indexOf(e); t>=0&&(this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')));
    }, contains: function(e) {
      return this._names.indexOf(e)>=0;
    }}; const Ta=[null]; function Ra(e, t) {
      this._groups=e, this._parents=t;
    } function Aa() {
      return new Ra([[document.documentElement]], Ta);
    }Ra.prototype=Aa.prototype={constructor: Ra, select: function(e) {
      'function'!=typeof e&&(e=_o(e)); for (var t=this._groups, n=t.length, r=new Array(n), o=0; o<n; ++o) for (var a, i, l=t[o], u=l.length, s=r[o]=new Array(u), c=0; c<u; ++c)(a=l[c])&&(i=e.call(a, a.__data__, c, l))&&('__data__'in a&&(i.__data__=a.__data__), s[c]=i); return new Ra(r, this._parents);
    }, selectAll: function(e) {
      e='function'==typeof e?function(e) {
        return function() {
          return null==(t=e.apply(this, arguments))?[]:Array.isArray(t)?t:Array.from(t); let t;
        };
      }(e):Co(e); for (var t=this._groups, n=t.length, r=[], o=[], a=0; a<n; ++a) for (var i, l=t[a], u=l.length, s=0; s<u; ++s)(i=l[s])&&(r.push(e.call(i, i.__data__, s, l)), o.push(i)); return new Ra(r, o);
    }, selectChild: function(e) {
      return this.select(null==e?Po:function(e) {
        return function() {
          return Mo.call(this.children, e);
        };
      }('function'==typeof e?e:No(e)));
    }, selectChildren: function(e) {
      return this.selectAll(null==e?Ro:function(e) {
        return function() {
          return To.call(this.children, e);
        };
      }('function'==typeof e?e:No(e)));
    }, filter: function(e) {
      'function'!=typeof e&&(e=Oo(e)); for (var t=this._groups, n=t.length, r=new Array(n), o=0; o<n; ++o) for (var a, i=t[o], l=i.length, u=r[o]=[], s=0; s<l; ++s)(a=i[s])&&e.call(a, a.__data__, s, i)&&u.push(a); return new Ra(r, this._parents);
    }, data: function(e, t) {
      if (!arguments.length) return Array.from(this, Lo); let n; const r=t?Do:zo; const o=this._parents; const a=this._groups; 'function'!=typeof e&&(n=e, e=function() {
        return n;
      }); for (var i=a.length, l=new Array(i), u=new Array(i), s=new Array(i), c=0; c<i; ++c) {
        const d=o[c]; const f=a[c]; const p=f.length; const h=jo(e.call(d, d&&d.__data__, c, o)); const m=h.length; const g=u[c]=new Array(m); const y=l[c]=new Array(m); r(d, f, g, y, s[c]=new Array(p), h, t); for (var v, b, w=0, S=0; w<m; ++w) {
          if (v=g[w]) {
            for (w>=S&&(S=w+1); !(b=y[S])&&++S<m;);v._next=b||null;
          }
        }
      } return (l=new Ra(l, o))._enter=u, l._exit=s, l;
    }, enter: function() {
      return new Ra(this._enter||this._groups.map(Ao), this._parents);
    }, exit: function() {
      return new Ra(this._exit||this._groups.map(Ao), this._parents);
    }, join: function(e, t, n) {
      let r=this.enter(); let o=this; const a=this.exit(); return 'function'==typeof e?(r=e(r))&&(r=r.selection()):r=r.append(e+''), null!=t&&(o=t(o))&&(o=o.selection()), null==n?a.remove():n(a), r&&o?r.merge(o).order():o;
    }, merge: function(e) {
      for (var t=e.selection?e.selection():e, n=this._groups, r=t._groups, o=n.length, a=r.length, i=Math.min(o, a), l=new Array(o), u=0; u<i; ++u) for (var s, c=n[u], d=r[u], f=c.length, p=l[u]=new Array(f), h=0; h<f; ++h)(s=c[h]||d[h])&&(p[h]=s); for (;u<o; ++u)l[u]=n[u]; return new Ra(l, this._parents);
    }, selection: function() {
      return this;
    }, order: function() {
      for (let e=this._groups, t=-1, n=e.length; ++t<n;) for (var r, o=e[t], a=o.length-1, i=o[a]; --a>=0;)(r=o[a])&&(i&&4^r.compareDocumentPosition(i)&&i.parentNode.insertBefore(r, i), i=r); return this;
    }, sort: function(e) {
      function t(t, n) {
        return t&&n?e(t.__data__, n.__data__):!t-!n;
      }e||(e=Fo); for (var n=this._groups, r=n.length, o=new Array(r), a=0; a<r; ++a) {
        for (var i, l=n[a], u=l.length, s=o[a]=new Array(u), c=0; c<u; ++c)(i=l[c])&&(s[c]=i); s.sort(t);
      } return new Ra(o, this._parents).order();
    }, call: function() {
      const e=arguments[0]; return arguments[0]=this, e.apply(null, arguments), this;
    }, nodes: function() {
      return Array.from(this);
    }, node: function() {
      for (let e=this._groups, t=0, n=e.length; t<n; ++t) {
        for (let r=e[t], o=0, a=r.length; o<a; ++o) {
          const i=r[o]; if (i) return i;
        }
      } return null;
    }, size: function() {
      let e=0; for (const t of this)++e; return e;
    }, empty: function() {
      return !this.node();
    }, each: function(e) {
      for (let t=this._groups, n=0, r=t.length; n<r; ++n) for (var o, a=t[n], i=0, l=a.length; i<l; ++i)(o=a[i])&&e.call(o, o.__data__, i, a); return this;
    }, attr: function(e, t) {
      const n=Bo(e); if (arguments.length<2) {
        const r=this.node(); return n.local?r.getAttributeNS(n.space, n.local):r.getAttribute(n);
      } return this.each((null==t?n.local?Ho:$o:'function'==typeof t?n.local?Qo:Ko:n.local?Vo:Wo)(n, t));
    }, style: function(e, t, n) {
      return arguments.length>1?this.each((null==t?Xo:'function'==typeof t?Zo:Go)(e, t, null==n?'':n)):Jo(this.node(), e);
    }, property: function(e, t) {
      return arguments.length>1?this.each((null==t?ea:'function'==typeof t?na:ta)(e, t)):this.node()[e];
    }, classed: function(e, t) {
      const n=ra(e+''); if (arguments.length<2) {
        for (let r=oa(this.node()), o=-1, a=n.length; ++o<a;) if (!r.contains(n[o])) return !1; return !0;
      } return this.each(('function'==typeof t?ca:t?ua:sa)(n, t));
    }, text: function(e) {
      return arguments.length?this.each(null==e?da:('function'==typeof e?pa:fa)(e)):this.node().textContent;
    }, html: function(e) {
      return arguments.length?this.each(null==e?ha:('function'==typeof e?ga:ma)(e)):this.node().innerHTML;
    }, raise: function() {
      return this.each(ya);
    }, lower: function() {
      return this.each(va);
    }, append: function(e) {
      const t='function'==typeof e?e:Sa(e); return this.select((function() {
        return this.appendChild(t.apply(this, arguments));
      }));
    }, insert: function(e, t) {
      const n='function'==typeof e?e:Sa(e); const r=null==t?xa:'function'==typeof t?t:_o(t); return this.select((function() {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments)||null);
      }));
    }, remove: function() {
      return this.each(Ea);
    }, clone: function(e) {
      return this.select(e?ka:_a);
    }, datum: function(e) {
      return arguments.length?this.property('__data__', e):this.node().__data__;
    }, on: function(e, t, n) {
      let r; let o; const a=function(e) {
        return e.trim().split(/^|\s+/).map((function(e) {
          let t=''; const n=e.indexOf('.'); return n>=0&&(t=e.slice(n+1), e=e.slice(0, n)), {type: e, name: t};
        }));
      }(e+''); const i=a.length; if (!(arguments.length<2)) {
        for (l=t?Oa:Ca, r=0; r<i; ++r) this.each(l(a[r], t, n)); return this;
      } var l=this.node().__on; if (l) for (var u, s=0, c=l.length; s<c; ++s) for (r=0, u=l[s]; r<i; ++r) if ((o=a[r]).type===u.type&&o.name===u.name) return u.value;
    }, dispatch: function(e, t) {
      return this.each(('function'==typeof t?Pa:Ma)(e, t));
    }, [Symbol.iterator]: function* () {
      for (let e=this._groups, t=0, n=e.length; t<n; ++t) for (var r, o=e[t], a=0, i=o.length; a<i; ++a)(r=o[a])&&(yield r);
    }}; const Ia=Aa; function za(e) {
      return 'string'==typeof e?new Ra([[document.querySelector(e)]], [document.documentElement]):new Ra([[e]], Ta);
    } const Da={passive: !1}; const La={capture: !0, passive: !1}; function ja(e) {
      e.stopImmediatePropagation();
    } function Fa(e) {
      e.preventDefault(), e.stopImmediatePropagation();
    } function qa(e) {
      const t=e.document.documentElement; const n=za(e).on('dragstart.drag', Fa, La); 'onselectstart'in t?n.on('selectstart.drag', Fa, La):(t.__noselect=t.style.MozUserSelect, t.style.MozUserSelect='none');
    } function Ua(e, t) {
      const n=e.document.documentElement; const r=za(e).on('dragstart.drag', null); t&&(r.on('click.drag', Fa, La), setTimeout((function() {
        r.on('click.drag', null);
      }), 0)), 'onselectstart'in n?r.on('selectstart.drag', null):(n.style.MozUserSelect=n.__noselect, delete n.__noselect);
    } function Ba(e) {
      return ((e=Math.exp(e))+1/e)/2;
    } const $a=function e(t, n, r) {
      function o(e, o) {
        let a; let i; const l=e[0]; const u=e[1]; const s=e[2]; const c=o[0]; const d=o[1]; const f=o[2]; const p=c-l; const h=d-u; const m=p*p+h*h; if (m<1e-12) {
          i=Math.log(f/s)/t, a=function(e) {
            return [l+e*p, u+e*h, s*Math.exp(t*e*i)];
          };
        } else {
          const g=Math.sqrt(m); const y=(f*f-s*s+r*m)/(2*s*n*g); const v=(f*f-s*s-r*m)/(2*f*n*g); const b=Math.log(Math.sqrt(y*y+1)-y); const w=Math.log(Math.sqrt(v*v+1)-v); i=(w-b)/t, a=function(e) {
            let r; const o=e*i; const a=Ba(b); const c=s/(n*g)*(a*(r=t*o+b, ((r=Math.exp(2*r))-1)/(r+1))-function(e) {
              return ((e=Math.exp(e))-1/e)/2;
            }(b)); return [l+c*p, u+c*h, s*a/Ba(t*o+b)];
          };
        } return a.duration=1e3*i*t/Math.SQRT2, a;
      } return o.rho=function(t) {
        const n=Math.max(.001, +t); const r=n*n; return e(n, r, r*r);
      }, o;
    }(Math.SQRT2, 2, 4); function Ha(e, t) {
      if (e=function(e) {
        let t; for (;t=e.sourceEvent;)e=t; return e;
      }(e), void 0===t&&(t=e.currentTarget), t) {
        const n=t.ownerSVGElement||t; if (n.createSVGPoint) {
          let r=n.createSVGPoint(); return r.x=e.clientX, r.y=e.clientY, [(r=r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
        } if (t.getBoundingClientRect) {
          const o=t.getBoundingClientRect(); return [e.clientX-o.left-t.clientLeft, e.clientY-o.top-t.clientTop];
        }
      } return [e.pageX, e.pageY];
    } let Wa; let Va; let Ka=0; let Qa=0; let Ya=0; const Xa=1e3; let Ga=0; let Za=0; let Ja=0; const ei='object'==typeof performance&&performance.now?performance:Date; const ti='object'==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e) {
      setTimeout(e, 17);
    }; function ni() {
      return Za||(ti(ri), Za=ei.now()+Ja);
    } function ri() {
      Za=0;
    } function oi() {
      this._call=this._time=this._next=null;
    } function ai(e, t, n) {
      const r=new oi; return r.restart(e, t, n), r;
    } function ii() {
      Za=(Ga=ei.now())+Ja, Ka=Qa=0; try {
        !function() {
          ni(), ++Ka; for (var e, t=Wa; t;)(e=Za-t._time)>=0&&t._call.call(void 0, e), t=t._next; --Ka;
        }();
      } finally {
        Ka=0, function() {
          for (var e, t, n=Wa, r=1/0; n;)n._call?(r>n._time&&(r=n._time), e=n, n=n._next):(t=n._next, n._next=null, n=e?e._next=t:Wa=t); Va=e, ui(r);
        }(), Za=0;
      }
    } function li() {
      const e=ei.now(); const t=e-Ga; t>Xa&&(Ja-=t, Ga=e);
    } function ui(e) {
      Ka||(Qa&&(Qa=clearTimeout(Qa)), e-Za>24?(e<1/0&&(Qa=setTimeout(ii, e-ei.now()-Ja)), Ya&&(Ya=clearInterval(Ya))):(Ya||(Ga=ei.now(), Ya=setInterval(li, Xa)), Ka=1, ti(ii)));
    } function si(e, t, n) {
      const r=new oi; return t=null==t?0:+t, r.restart(((n)=>{
        r.stop(), e(n+t);
      }), t, n), r;
    }oi.prototype=ai.prototype={constructor: oi, restart: function(e, t, n) {
      if ('function'!=typeof e) throw new TypeError('callback is not a function'); n=(null==n?ni():+n)+(null==t?0:+t), this._next||Va===this||(Va?Va._next=this:Wa=this, Va=this), this._call=e, this._time=n, ui();
    }, stop: function() {
      this._call&&(this._call=null, this._time=1/0, ui());
    }}; const ci=xo('start', 'end', 'cancel', 'interrupt'); const di=[]; const fi=0; const pi=3; function hi(e, t, n, r, o, a) {
      const i=e.__transition; if (i) {
        if (n in i) return;
      } else e.__transition={}; !function(e, t, n) {
        let r; const o=e.__transition; function a(u) {
          let s; let c; let d; let f; if (1!==n.state) return l(); for (s in o) {
            if ((f=o[s]).name===n.name) {
              if (f.state===pi) return si(a); 4===f.state?(f.state=6, f.timer.stop(), f.on.call('interrupt', e, e.__data__, f.index, f.group), delete o[s]):+s<t&&(f.state=6, f.timer.stop(), f.on.call('cancel', e, e.__data__, f.index, f.group), delete o[s]);
            }
          } if (si((function() {
            n.state===pi&&(n.state=4, n.timer.restart(i, n.delay, n.time), i(u));
          })), n.state=2, n.on.call('start', e, e.__data__, n.index, n.group), 2===n.state) {
            for (n.state=pi, r=new Array(d=n.tween.length), s=0, c=-1; s<d; ++s)(f=n.tween[s].value.call(e, e.__data__, n.index, n.group))&&(r[++c]=f); r.length=c+1;
          }
        } function i(t) {
          for (let o=t<n.duration?n.ease.call(null, t/n.duration):(n.timer.restart(l), n.state=5, 1), a=-1, i=r.length; ++a<i;)r[a].call(e, o); 5===n.state&&(n.on.call('end', e, e.__data__, n.index, n.group), l());
        } function l() {
          for (const r in n.state=6, n.timer.stop(), delete o[t], o) return; delete e.__transition;
        }o[t]=n, n.timer=ai((function(e) {
          n.state=1, n.timer.restart(a, n.delay, n.time), n.delay<=e&&a(e-n.delay);
        }), 0, n.time);
      }(e, n, {name: t, index: r, group: o, on: ci, tween: di, time: a.time, delay: a.delay, duration: a.duration, ease: a.ease, timer: null, state: fi});
    } function mi(e, t) {
      const n=yi(e, t); if (n.state>fi) throw new Error('too late; already scheduled'); return n;
    } function gi(e, t) {
      const n=yi(e, t); if (n.state>pi) throw new Error('too late; already running'); return n;
    } function yi(e, t) {
      let n=e.__transition; if (!n||!(n=n[t])) throw new Error('transition not found'); return n;
    } function vi(e, t) {
      let n; let r; let o; const a=e.__transition; let i=!0; if (a) {
        for (o in t=null==t?null:t+'', a)(n=a[o]).name===t?(r=n.state>2&&n.state<5, n.state=6, n.timer.stop(), n.on.call(r?'interrupt':'cancel', e, e.__data__, n.index, n.group), delete a[o]):i=!1; i&&delete e.__transition;
      }
    } function bi(e, t) {
      return e=+e, t=+t, function(n) {
        return e*(1-n)+t*n;
      };
    } let wi; const Si=180/Math.PI; const xi={translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1}; function Ei(e, t, n, r, o, a) {
      let i; let l; let u; return (i=Math.sqrt(e*e+t*t))&&(e/=i, t/=i), (u=e*n+t*r)&&(n-=e*u, r-=t*u), (l=Math.sqrt(n*n+r*r))&&(n/=l, r/=l, u/=l), e*r<t*n&&(e=-e, t=-t, u=-u, i=-i), {translateX: o, translateY: a, rotate: Math.atan2(t, e)*Si, skewX: Math.atan(u)*Si, scaleX: i, scaleY: l};
    } function _i(e, t, n, r) {
      function o(e) {
        return e.length?e.pop()+' ':'';
      } return function(a, i) {
        const l=[]; const u=[]; return a=e(a), i=e(i), function(e, r, o, a, i, l) {
          if (e!==o||r!==a) {
            const u=i.push('translate(', null, t, null, n); l.push({i: u-4, x: bi(e, o)}, {i: u-2, x: bi(r, a)});
          } else (o||a)&&i.push('translate('+o+t+a+n);
        }(a.translateX, a.translateY, i.translateX, i.translateY, l, u), function(e, t, n, a) {
e!==t?(e-t>180?t+=360:t-e>180&&(e+=360), a.push({i: n.push(o(n)+'rotate(', null, r)-2, x: bi(e, t)})):t&&n.push(o(n)+'rotate('+t+r);
        }(a.rotate, i.rotate, l, u), function(e, t, n, a) {
e!==t?a.push({i: n.push(o(n)+'skewX(', null, r)-2, x: bi(e, t)}):t&&n.push(o(n)+'skewX('+t+r);
        }(a.skewX, i.skewX, l, u), function(e, t, n, r, a, i) {
          if (e!==n||t!==r) {
            const l=a.push(o(a)+'scale(', null, ',', null, ')'); i.push({i: l-4, x: bi(e, n)}, {i: l-2, x: bi(t, r)});
          } else 1===n&&1===r||a.push(o(a)+'scale('+n+','+r+')');
        }(a.scaleX, a.scaleY, i.scaleX, i.scaleY, l, u), a=i=null, function(e) {
          for (var t, n=-1, r=u.length; ++n<r;)l[(t=u[n]).i]=t.x(e); return l.join('');
        };
      };
    } const ki=_i((function(e) {
      const t=new('function'==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+''); return t.isIdentity?xi:Ei(t.a, t.b, t.c, t.d, t.e, t.f);
    }), 'px, ', 'px)', 'deg)'); const Ci=_i((function(e) {
      return null==e?xi:(wi||(wi=document.createElementNS('http://www.w3.org/2000/svg', 'g')), wi.setAttribute('transform', e), (e=wi.transform.baseVal.consolidate())?Ei((e=e.matrix).a, e.b, e.c, e.d, e.e, e.f):xi);
    }), ', ', ')', ')'); function Oi(e, t) {
      let n; let r; return function() {
        const o=gi(this, e); const a=o.tween; if (a!==n) {
          for (let i=0, l=(r=n=a).length; i<l; ++i) {
            if (r[i].name===t) {
              (r=r.slice()).splice(i, 1); break;
            }
          }
        }o.tween=r;
      };
    } function Ni(e, t, n) {
      let r; let o; if ('function'!=typeof n) throw new Error; return function() {
        const a=gi(this, e); const i=a.tween; if (i!==r) {
          o=(r=i).slice(); for (var l={name: t, value: n}, u=0, s=o.length; u<s; ++u) {
            if (o[u].name===t) {
              o[u]=l; break;
            }
          }u===s&&o.push(l);
        }a.tween=o;
      };
    } function Mi(e, t, n) {
      const r=e._id; return e.each((function() {
        const e=gi(this, r); (e.value||(e.value={}))[t]=n.apply(this, arguments);
      })), function(e) {
        return yi(e, r).value[t];
      };
    } function Pi(e, t, n) {
      e.prototype=t.prototype=n, n.constructor=e;
    } function Ti(e, t) {
      const n=Object.create(e.prototype); for (const r in t)n[r]=t[r]; return n;
    } function Ri() {} const Ai=.7; const Ii=1/Ai; const zi='\\s*([+-]?\\d+)\\s*'; const Di='\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*'; const Li='\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*'; const ji=/^#([0-9a-f]{3,8})$/; const Fi=new RegExp(`^rgb\\(${zi},${zi},${zi}\\)$`); const qi=new RegExp(`^rgb\\(${Li},${Li},${Li}\\)$`); const Ui=new RegExp(`^rgba\\(${zi},${zi},${zi},${Di}\\)$`); const Bi=new RegExp(`^rgba\\(${Li},${Li},${Li},${Di}\\)$`); const $i=new RegExp(`^hsl\\(${Di},${Li},${Li}\\)$`); const Hi=new RegExp(`^hsla\\(${Di},${Li},${Li},${Di}\\)$`); const Wi={aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074}; function Vi() {
      return this.rgb().formatHex();
    } function Ki() {
      return this.rgb().formatRgb();
    } function Qi(e) {
      let t; let n; return e=(e+'').trim().toLowerCase(), (t=ji.exec(e))?(n=t[1].length, t=parseInt(t[1], 16), 6===n?Yi(t):3===n?new Zi(t>>8&15|t>>4&240, t>>4&15|240&t, (15&t)<<4|15&t, 1):8===n?Xi(t>>24&255, t>>16&255, t>>8&255, (255&t)/255):4===n?Xi(t>>12&15|t>>8&240, t>>8&15|t>>4&240, t>>4&15|240&t, ((15&t)<<4|15&t)/255):null):(t=Fi.exec(e))?new Zi(t[1], t[2], t[3], 1):(t=qi.exec(e))?new Zi(255*t[1]/100, 255*t[2]/100, 255*t[3]/100, 1):(t=Ui.exec(e))?Xi(t[1], t[2], t[3], t[4]):(t=Bi.exec(e))?Xi(255*t[1]/100, 255*t[2]/100, 255*t[3]/100, t[4]):(t=$i.exec(e))?ol(t[1], t[2]/100, t[3]/100, 1):(t=Hi.exec(e))?ol(t[1], t[2]/100, t[3]/100, t[4]):Wi.hasOwnProperty(e)?Yi(Wi[e]):'transparent'===e?new Zi(NaN, NaN, NaN, 0):null;
    } function Yi(e) {
      return new Zi(e>>16&255, e>>8&255, 255&e, 1);
    } function Xi(e, t, n, r) {
      return r<=0&&(e=t=n=NaN), new Zi(e, t, n, r);
    } function Gi(e, t, n, r) {
      return 1===arguments.length?((o=e)instanceof Ri||(o=Qi(o)), o?new Zi((o=o.rgb()).r, o.g, o.b, o.opacity):new Zi):new Zi(e, t, n, null==r?1:r); let o;
    } function Zi(e, t, n, r) {
      this.r=+e, this.g=+t, this.b=+n, this.opacity=+r;
    } function Ji() {
      return `#${rl(this.r)}${rl(this.g)}${rl(this.b)}`;
    } function el() {
      const e=tl(this.opacity); return `${1===e?'rgb(':'rgba('}${nl(this.r)}, ${nl(this.g)}, ${nl(this.b)}${1===e?')':`, ${e})`}`;
    } function tl(e) {
      return isNaN(e)?1:Math.max(0, Math.min(1, e));
    } function nl(e) {
      return Math.max(0, Math.min(255, Math.round(e)||0));
    } function rl(e) {
      return ((e=nl(e))<16?'0':'')+e.toString(16);
    } function ol(e, t, n, r) {
      return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN), new il(e, t, n, r);
    } function al(e) {
      if (e instanceof il) return new il(e.h, e.s, e.l, e.opacity); if (e instanceof Ri||(e=Qi(e)), !e) return new il; if (e instanceof il) return e; const t=(e=e.rgb()).r/255; const n=e.g/255; const r=e.b/255; const o=Math.min(t, n, r); const a=Math.max(t, n, r); let i=NaN; let l=a-o; const u=(a+o)/2; return l?(i=t===a?(n-r)/l+6*(n<r):n===a?(r-t)/l+2:(t-n)/l+4, l/=u<.5?a+o:2-a-o, i*=60):l=u>0&&u<1?0:i, new il(i, l, u, e.opacity);
    } function il(e, t, n, r) {
      this.h=+e, this.s=+t, this.l=+n, this.opacity=+r;
    } function ll(e) {
      return (e=(e||0)%360)<0?e+360:e;
    } function ul(e) {
      return Math.max(0, Math.min(1, e||0));
    } function sl(e, t, n) {
      return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t);
    } function cl(e, t, n, r, o) {
      const a=e*e; const i=a*e; return ((1-3*e+3*a-i)*t+(4-6*a+3*i)*n+(1+3*e+3*a-3*i)*r+i*o)/6;
    }Pi(Ri, Qi, {copy(e) {
      return Object.assign(new this.constructor, this, e);
    }, displayable() {
      return this.rgb().displayable();
    }, hex: Vi, formatHex: Vi, formatHex8: function() {
      return this.rgb().formatHex8();
    }, formatHsl: function() {
      return al(this).formatHsl();
    }, formatRgb: Ki, toString: Ki}), Pi(Zi, Gi, Ti(Ri, {brighter(e) {
      return e=null==e?Ii:Math.pow(Ii, e), new Zi(this.r*e, this.g*e, this.b*e, this.opacity);
    }, darker(e) {
      return e=null==e?Ai:Math.pow(Ai, e), new Zi(this.r*e, this.g*e, this.b*e, this.opacity);
    }, rgb() {
      return this;
    }, clamp() {
      return new Zi(nl(this.r), nl(this.g), nl(this.b), tl(this.opacity));
    }, displayable() {
      return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1;
    }, hex: Ji, formatHex: Ji, formatHex8: function() {
      return `#${rl(this.r)}${rl(this.g)}${rl(this.b)}${rl(255*(isNaN(this.opacity)?1:this.opacity))}`;
    }, formatRgb: el, toString: el})), Pi(il, (function(e, t, n, r) {
      return 1===arguments.length?al(e):new il(e, t, n, null==r?1:r);
    }), Ti(Ri, {brighter(e) {
      return e=null==e?Ii:Math.pow(Ii, e), new il(this.h, this.s, this.l*e, this.opacity);
    }, darker(e) {
      return e=null==e?Ai:Math.pow(Ai, e), new il(this.h, this.s, this.l*e, this.opacity);
    }, rgb() {
      const e=this.h%360+360*(this.h<0); const t=isNaN(e)||isNaN(this.s)?0:this.s; const n=this.l; const r=n+(n<.5?n:1-n)*t; const o=2*n-r; return new Zi(sl(e>=240?e-240:e+120, o, r), sl(e, o, r), sl(e<120?e+240:e-120, o, r), this.opacity);
    }, clamp() {
      return new il(ll(this.h), ul(this.s), ul(this.l), tl(this.opacity));
    }, displayable() {
      return (0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1;
    }, formatHsl() {
      const e=tl(this.opacity); return `${1===e?'hsl(':'hsla('}${ll(this.h)}, ${100*ul(this.s)}%, ${100*ul(this.l)}%${1===e?')':`, ${e})`}`;
    }})); const dl=(e)=>()=>e; function fl(e, t) {
      const n=t-e; return n?function(e, t) {
        return function(n) {
          return e+n*t;
        };
      }(e, n):dl(isNaN(e)?t:e);
    } const pl=function e(t) {
      const n=function(e) {
        return 1==(e=+e)?fl:function(t, n) {
          return n-t?function(e, t, n) {
            return e=Math.pow(e, n), t=Math.pow(t, n)-e, n=1/n, function(r) {
              return Math.pow(e+r*t, n);
            };
          }(t, n, e):dl(isNaN(t)?n:t);
        };
      }(t); function r(e, t) {
        const r=n((e=Gi(e)).r, (t=Gi(t)).r); const o=n(e.g, t.g); const a=n(e.b, t.b); const i=fl(e.opacity, t.opacity); return function(t) {
          return e.r=r(t), e.g=o(t), e.b=a(t), e.opacity=i(t), e+'';
        };
      } return r.gamma=e, r;
    }(1); function hl(e) {
      return function(t) {
        let n; let r; const o=t.length; let a=new Array(o); let i=new Array(o); let l=new Array(o); for (n=0; n<o; ++n)r=Gi(t[n]), a[n]=r.r||0, i[n]=r.g||0, l[n]=r.b||0; return a=e(a), i=e(i), l=e(l), r.opacity=1, function(e) {
          return r.r=a(e), r.g=i(e), r.b=l(e), r+'';
        };
      };
    }hl((function(e) {
      const t=e.length-1; return function(n) {
        const r=n<=0?n=0:n>=1?(n=1, t-1):Math.floor(n*t); const o=e[r]; const a=e[r+1]; const i=r>0?e[r-1]:2*o-a; const l=r<t-1?e[r+2]:2*a-o; return cl((n-r/t)*t, i, o, a, l);
      };
    })), hl((function(e) {
      const t=e.length; return function(n) {
        const r=Math.floor(((n%=1)<0?++n:n)*t); const o=e[(r+t-1)%t]; const a=e[r%t]; const i=e[(r+1)%t]; const l=e[(r+2)%t]; return cl((n-r/t)*t, o, a, i, l);
      };
    })); const ml=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g; const gl=new RegExp(ml.source, 'g'); function yl(e, t) {
      let n; let r; let o; let a=ml.lastIndex=gl.lastIndex=0; let i=-1; const l=[]; const u=[]; for (e+='', t+=''; (n=ml.exec(e))&&(r=gl.exec(t));)(o=r.index)>a&&(o=t.slice(a, o), l[i]?l[i]+=o:l[++i]=o), (n=n[0])===(r=r[0])?l[i]?l[i]+=r:l[++i]=r:(l[++i]=null, u.push({i, x: bi(n, r)})), a=gl.lastIndex; return a<t.length&&(o=t.slice(a), l[i]?l[i]+=o:l[++i]=o), l.length<2?u[0]?function(e) {
        return function(t) {
          return e(t)+'';
        };
      }(u[0].x):function(e) {
        return function() {
          return e;
        };
      }(t):(t=u.length, function(e) {
        for (var n, r=0; r<t; ++r)l[(n=u[r]).i]=n.x(e); return l.join('');
      });
    } function vl(e, t) {
      let n; return ('number'==typeof t?bi:t instanceof Qi?pl:(n=Qi(t))?(t=n, pl):yl)(e, t);
    } function bl(e) {
      return function() {
        this.removeAttribute(e);
      };
    } function wl(e) {
      return function() {
        this.removeAttributeNS(e.space, e.local);
      };
    } function Sl(e, t, n) {
      let r; let o; const a=n+''; return function() {
        const i=this.getAttribute(e); return i===a?null:i===r?o:o=t(r=i, n);
      };
    } function xl(e, t, n) {
      let r; let o; const a=n+''; return function() {
        const i=this.getAttributeNS(e.space, e.local); return i===a?null:i===r?o:o=t(r=i, n);
      };
    } function El(e, t, n) {
      let r; let o; let a; return function() {
        let i; let l; const u=n(this); if (null!=u) return (i=this.getAttribute(e))===(l=u+'')?null:i===r&&l===o?a:(o=l, a=t(r=i, u)); this.removeAttribute(e);
      };
    } function _l(e, t, n) {
      let r; let o; let a; return function() {
        let i; let l; const u=n(this); if (null!=u) return (i=this.getAttributeNS(e.space, e.local))===(l=u+'')?null:i===r&&l===o?a:(o=l, a=t(r=i, u)); this.removeAttributeNS(e.space, e.local);
      };
    } function kl(e, t) {
      let n; let r; function o() {
        const o=t.apply(this, arguments); return o!==r&&(n=(r=o)&&function(e, t) {
          return function(n) {
            this.setAttributeNS(e.space, e.local, t.call(this, n));
          };
        }(e, o)), n;
      } return o._value=t, o;
    } function Cl(e, t) {
      let n; let r; function o() {
        const o=t.apply(this, arguments); return o!==r&&(n=(r=o)&&function(e, t) {
          return function(n) {
            this.setAttribute(e, t.call(this, n));
          };
        }(e, o)), n;
      } return o._value=t, o;
    } function Ol(e, t) {
      return function() {
        mi(this, e).delay=+t.apply(this, arguments);
      };
    } function Nl(e, t) {
      return t=+t, function() {
        mi(this, e).delay=t;
      };
    } function Ml(e, t) {
      return function() {
        gi(this, e).duration=+t.apply(this, arguments);
      };
    } function Pl(e, t) {
      return t=+t, function() {
        gi(this, e).duration=t;
      };
    } const Tl=Ia.prototype.constructor; function Rl(e) {
      return function() {
        this.style.removeProperty(e);
      };
    } let Al=0; function Il(e, t, n, r) {
      this._groups=e, this._parents=t, this._name=n, this._id=r;
    } function zl() {
      return ++Al;
    } const Dl=Ia.prototype; Il.prototype=function(e) {
      return Ia().transition(e);
    }.prototype={constructor: Il, select: function(e) {
      const t=this._name; const n=this._id; 'function'!=typeof e&&(e=_o(e)); for (var r=this._groups, o=r.length, a=new Array(o), i=0; i<o; ++i) for (var l, u, s=r[i], c=s.length, d=a[i]=new Array(c), f=0; f<c; ++f)(l=s[f])&&(u=e.call(l, l.__data__, f, s))&&('__data__'in l&&(u.__data__=l.__data__), d[f]=u, hi(d[f], t, n, f, d, yi(l, n))); return new Il(a, this._parents, t, n);
    }, selectAll: function(e) {
      const t=this._name; const n=this._id; 'function'!=typeof e&&(e=Co(e)); for (var r=this._groups, o=r.length, a=[], i=[], l=0; l<o; ++l) {
        for (var u, s=r[l], c=s.length, d=0; d<c; ++d) {
          if (u=s[d]) {
            for (var f, p=e.call(u, u.__data__, d, s), h=yi(u, n), m=0, g=p.length; m<g; ++m)(f=p[m])&&hi(f, t, n, m, p, h); a.push(p), i.push(u);
          }
        }
      } return new Il(a, i, t, n);
    }, selectChild: Dl.selectChild, selectChildren: Dl.selectChildren, filter: function(e) {
      'function'!=typeof e&&(e=Oo(e)); for (var t=this._groups, n=t.length, r=new Array(n), o=0; o<n; ++o) for (var a, i=t[o], l=i.length, u=r[o]=[], s=0; s<l; ++s)(a=i[s])&&e.call(a, a.__data__, s, i)&&u.push(a); return new Il(r, this._parents, this._name, this._id);
    }, merge: function(e) {
      if (e._id!==this._id) throw new Error; for (var t=this._groups, n=e._groups, r=t.length, o=n.length, a=Math.min(r, o), i=new Array(r), l=0; l<a; ++l) for (var u, s=t[l], c=n[l], d=s.length, f=i[l]=new Array(d), p=0; p<d; ++p)(u=s[p]||c[p])&&(f[p]=u); for (;l<r; ++l)i[l]=t[l]; return new Il(i, this._parents, this._name, this._id);
    }, selection: function() {
      return new Tl(this._groups, this._parents);
    }, transition: function() {
      for (var e=this._name, t=this._id, n=zl(), r=this._groups, o=r.length, a=0; a<o; ++a) {
        for (var i, l=r[a], u=l.length, s=0; s<u; ++s) {
          if (i=l[s]) {
            const c=yi(i, t); hi(i, e, n, s, l, {time: c.time+c.delay+c.duration, delay: 0, duration: c.duration, ease: c.ease});
          }
        }
      } return new Il(r, this._parents, e, n);
    }, call: Dl.call, nodes: Dl.nodes, node: Dl.node, size: Dl.size, empty: Dl.empty, each: Dl.each, on: function(e, t) {
      const n=this._id; return arguments.length<2?yi(this.node(), n).on.on(e):this.each(function(e, t, n) {
        let r; let o; const a=function(e) {
          return (e+'').trim().split(/^|\s+/).every((function(e) {
            const t=e.indexOf('.'); return t>=0&&(e=e.slice(0, t)), !e||'start'===e;
          }));
        }(t)?mi:gi; return function() {
          const i=a(this, e); const l=i.on; l!==r&&(o=(r=l).copy()).on(t, n), i.on=o;
        };
      }(n, e, t));
    }, attr: function(e, t) {
      const n=Bo(e); const r='transform'===n?Ci:vl; return this.attrTween(e, 'function'==typeof t?(n.local?_l:El)(n, r, Mi(this, 'attr.'+e, t)):null==t?(n.local?wl:bl)(n):(n.local?xl:Sl)(n, r, t));
    }, attrTween: function(e, t) {
      let n='attr.'+e; if (arguments.length<2) return (n=this.tween(n))&&n._value; if (null==t) return this.tween(n, null); if ('function'!=typeof t) throw new Error; const r=Bo(e); return this.tween(n, (r.local?kl:Cl)(r, t));
    }, style: function(e, t, n) {
      const r='transform'==(e+='')?ki:vl; return null==t?this.styleTween(e, function(e, t) {
        let n; let r; let o; return function() {
          const a=Jo(this, e); const i=(this.style.removeProperty(e), Jo(this, e)); return a===i?null:a===n&&i===r?o:o=t(n=a, r=i);
        };
      }(e, r)).on('end.style.'+e, Rl(e)):'function'==typeof t?this.styleTween(e, function(e, t, n) {
        let r; let o; let a; return function() {
          const i=Jo(this, e); let l=n(this); let u=l+''; return null==l&&(this.style.removeProperty(e), u=l=Jo(this, e)), i===u?null:i===r&&u===o?a:(o=u, a=t(r=i, l));
        };
      }(e, r, Mi(this, 'style.'+e, t))).each(function(e, t) {
        let n; let r; let o; let a; const i='style.'+t; const l='end.'+i; return function() {
          const u=gi(this, e); const s=u.on; const c=null==u.value[i]?a||(a=Rl(t)):void 0; s===n&&o===c||(r=(n=s).copy()).on(l, o=c), u.on=r;
        };
      }(this._id, e)):this.styleTween(e, function(e, t, n) {
        let r; let o; const a=n+''; return function() {
          const i=Jo(this, e); return i===a?null:i===r?o:o=t(r=i, n);
        };
      }(e, r, t), n).on('end.style.'+e, null);
    }, styleTween: function(e, t, n) {
      let r='style.'+(e+=''); if (arguments.length<2) return (r=this.tween(r))&&r._value; if (null==t) return this.tween(r, null); if ('function'!=typeof t) throw new Error; return this.tween(r, function(e, t, n) {
        let r; let o; function a() {
          const a=t.apply(this, arguments); return a!==o&&(r=(o=a)&&function(e, t, n) {
            return function(r) {
              this.style.setProperty(e, t.call(this, r), n);
            };
          }(e, a, n)), r;
        } return a._value=t, a;
      }(e, t, null==n?'':n));
    }, text: function(e) {
      return this.tween('text', 'function'==typeof e?function(e) {
        return function() {
          const t=e(this); this.textContent=null==t?'':t;
        };
      }(Mi(this, 'text', e)):function(e) {
        return function() {
          this.textContent=e;
        };
      }(null==e?'':e+''));
    }, textTween: function(e) {
      let t='text'; if (arguments.length<1) return (t=this.tween(t))&&t._value; if (null==e) return this.tween(t, null); if ('function'!=typeof e) throw new Error; return this.tween(t, function(e) {
        let t; let n; function r() {
          const r=e.apply(this, arguments); return r!==n&&(t=(n=r)&&function(e) {
            return function(t) {
              this.textContent=e.call(this, t);
            };
          }(r)), t;
        } return r._value=e, r;
      }(e));
    }, remove: function() {
      return this.on('end.remove', function(e) {
        return function() {
          const t=this.parentNode; for (const n in this.__transition) if (+n!==e) return; t&&t.removeChild(this);
        };
      }(this._id));
    }, tween: function(e, t) {
      const n=this._id; if (e+='', arguments.length<2) {
        for (var r, o=yi(this.node(), n).tween, a=0, i=o.length; a<i; ++a) if ((r=o[a]).name===e) return r.value; return null;
      } return this.each((null==t?Oi:Ni)(n, e, t));
    }, delay: function(e) {
      const t=this._id; return arguments.length?this.each(('function'==typeof e?Ol:Nl)(t, e)):yi(this.node(), t).delay;
    }, duration: function(e) {
      const t=this._id; return arguments.length?this.each(('function'==typeof e?Ml:Pl)(t, e)):yi(this.node(), t).duration;
    }, ease: function(e) {
      const t=this._id; return arguments.length?this.each(function(e, t) {
        if ('function'!=typeof t) throw new Error; return function() {
          gi(this, e).ease=t;
        };
      }(t, e)):yi(this.node(), t).ease;
    }, easeVarying: function(e) {
      if ('function'!=typeof e) throw new Error; return this.each(function(e, t) {
        return function() {
          const n=t.apply(this, arguments); if ('function'!=typeof n) throw new Error; gi(this, e).ease=n;
        };
      }(this._id, e));
    }, end: function() {
      let e; let t; const n=this; const r=n._id; let o=n.size(); return new Promise((function(a, i) {
        const l={value: i}; const u={value: function() {
          0==--o&&a();
        }}; n.each((function() {
          const n=gi(this, r); const o=n.on; o!==e&&((t=(e=o).copy())._.cancel.push(l), t._.interrupt.push(l), t._.end.push(u)), n.on=t;
        })), 0===o&&a();
      }));
    }, [Symbol.iterator]: Dl[Symbol.iterator]}; const Ll={time: null, delay: 0, duration: 250, ease: function(e) {
      return ((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2;
    }}; function jl(e, t) {
      for (var n; !(n=e.__transition)||!(n=n[t]);) if (!(e=e.parentNode)) throw new Error(`transition ${t} not found`); return n;
    }Ia.prototype.interrupt=function(e) {
      return this.each((function() {
        vi(this, e);
      }));
    }, Ia.prototype.transition=function(e) {
      let t; let n; e instanceof Il?(t=e._id, e=e._name):(t=zl(), (n=Ll).time=ni(), e=null==e?null:e+''); for (var r=this._groups, o=r.length, a=0; a<o; ++a) for (var i, l=r[a], u=l.length, s=0; s<u; ++s)(i=l[s])&&hi(i, e, t, s, l, n||jl(i, t)); return new Il(r, this._parents, e, t);
    }; const Fl=(e)=>()=>e; function ql(e, {sourceEvent: t, target: n, transform: r, dispatch: o}) {
      Object.defineProperties(this, {type: {value: e, enumerable: !0, configurable: !0}, sourceEvent: {value: t, enumerable: !0, configurable: !0}, target: {value: n, enumerable: !0, configurable: !0}, transform: {value: r, enumerable: !0, configurable: !0}, _: {value: o}});
    } function Ul(e, t, n) {
      this.k=e, this.x=t, this.y=n;
    }Ul.prototype={constructor: Ul, scale: function(e) {
      return 1===e?this:new Ul(this.k*e, this.x, this.y);
    }, translate: function(e, t) {
      return 0===e&0===t?this:new Ul(this.k, this.x+this.k*e, this.y+this.k*t);
    }, apply: function(e) {
      return [e[0]*this.k+this.x, e[1]*this.k+this.y];
    }, applyX: function(e) {
      return e*this.k+this.x;
    }, applyY: function(e) {
      return e*this.k+this.y;
    }, invert: function(e) {
      return [(e[0]-this.x)/this.k, (e[1]-this.y)/this.k];
    }, invertX: function(e) {
      return (e-this.x)/this.k;
    }, invertY: function(e) {
      return (e-this.y)/this.k;
    }, rescaleX: function(e) {
      return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
    }, rescaleY: function(e) {
      return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
    }, toString: function() {
      return 'translate('+this.x+','+this.y+') scale('+this.k+')';
    }}; const Bl=new Ul(1, 0, 0); function $l(e) {
      e.stopImmediatePropagation();
    } function Hl(e) {
      e.preventDefault(), e.stopImmediatePropagation();
    } function Wl(e) {
      return !(e.ctrlKey&&'wheel'!==e.type||e.button);
    } function Vl() {
      let e=this; return e instanceof SVGElement?(e=e.ownerSVGElement||e).hasAttribute('viewBox')?[[(e=e.viewBox.baseVal).x, e.y], [e.x+e.width, e.y+e.height]]:[[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]:[[0, 0], [e.clientWidth, e.clientHeight]];
    } function Kl() {
      return this.__zoom||Bl;
    } function Ql(e) {
      return -e.deltaY*(1===e.deltaMode?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1);
    } function Yl() {
      return navigator.maxTouchPoints||'ontouchstart'in this;
    } function Xl(e, t, n) {
      const r=e.invertX(t[0][0])-n[0][0]; const o=e.invertX(t[1][0])-n[1][0]; const a=e.invertY(t[0][1])-n[0][1]; const i=e.invertY(t[1][1])-n[1][1]; return e.translate(o>r?(r+o)/2:Math.min(0, r)||Math.max(0, o), i>a?(a+i)/2:Math.min(0, a)||Math.max(0, i));
    }Ul.prototype; const Gl=(e)=>()=>e; function Zl(e, {sourceEvent: t, subject: n, target: r, identifier: o, active: a, x: i, y: l, dx: u, dy: s, dispatch: c}) {
      Object.defineProperties(this, {type: {value: e, enumerable: !0, configurable: !0}, sourceEvent: {value: t, enumerable: !0, configurable: !0}, subject: {value: n, enumerable: !0, configurable: !0}, target: {value: r, enumerable: !0, configurable: !0}, identifier: {value: o, enumerable: !0, configurable: !0}, active: {value: a, enumerable: !0, configurable: !0}, x: {value: i, enumerable: !0, configurable: !0}, y: {value: l, enumerable: !0, configurable: !0}, dx: {value: u, enumerable: !0, configurable: !0}, dy: {value: s, enumerable: !0, configurable: !0}, _: {value: c}});
    } function Jl(e) {
      return !e.ctrlKey&&!e.button;
    } function eu() {
      return this.parentNode;
    } function tu(e, t) {
      return null==t?{x: e.x, y: e.y}:t;
    } function nu() {
      return navigator.maxTouchPoints||'ontouchstart'in this;
    }Zl.prototype.on=function() {
      const e=this._.on.apply(this._, arguments); return e===this._?this:e;
    }; const ru=(0, e.createContext)(null); const ou=ru.Provider; const au={error001: ()=>'[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001', error002: ()=>'It looks like you\'ve created a new nodeTypes or edgeTypes object. If this wasn\'t on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.', error003: (e)=>`Node type "${e}" not found. Using fallback type "default".`, error004: ()=>'The React Flow parent container needs a width and a height to render the graph.', error005: ()=>'Only child nodes can use a parent extent.', error006: ()=>'Can\'t create edge. An edge needs a source and a target.', error007: (e)=>`The old edge with id=${e} does not exist.`, error009: (e)=>`Marker type "${e}" doesn't exist.`, error008: (e, t)=>`Couldn't create edge for ${e?'target':'source'} handle id: "${e?t.targetHandle:t.sourceHandle}", edge id: ${t.id}.`, error010: ()=>'Handle: No node id found. Make sure to only use a Handle inside a custom Node.', error011: (e)=>`Edge type "${e}" not found. Using fallback type "default".`, error012: (e)=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`}; const iu=au.error001(); function lu(t, n) {
      const r=(0, e.useContext)(ru); if (null===r) throw new Error(iu); return ho(r, t, n);
    } const uu=()=>{
      const t=(0, e.useContext)(ru); if (null===t) throw new Error(iu); return (0, e.useMemo)((()=>({getState: t.getState, setState: t.setState, subscribe: t.subscribe, destroy: t.destroy})), [t]);
    }; const su=(e)=>e.userSelectionActive?'none':'all'; function cu({position: t, children: n, className: r, style: o, ...a}) {
      const i=lu(su); const l=`${t}`.split('-'); return e.createElement('div', {className: lo(['react-flow__panel', r, ...l]), style: {...o, pointerEvents: i}, ...a}, n);
    } function du({proOptions: t, position: n='bottom-right'}) {
      return t?.hideAttribution?null:e.createElement(cu, {'position': n, 'className': 'react-flow__attribution', 'data-message': 'Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro'}, e.createElement('a', {'href': 'https://reactflow.dev', 'target': '_blank', 'rel': 'noopener noreferrer', 'aria-label': 'React Flow attribution'}, 'React Flow'));
    } const fu=(0, e.memo)((({x: t, y: n, label: r, labelStyle: o={}, labelShowBg: a=!0, labelBgStyle: i={}, labelBgPadding: l=[2, 4], labelBgBorderRadius: u=2, children: s, className: c, ...d})=>{
      const f=(0, e.useRef)(null); const [p, h]=(0, e.useState)({x: 0, y: 0, width: 0, height: 0}); const m=lo(['react-flow__edge-textwrapper', c]); return (0, e.useEffect)((()=>{
        if (f.current) {
          const e=f.current.getBBox(); h({x: e.x, y: e.y, width: e.width, height: e.height});
        }
      }), [r]), void 0!==r&&r?e.createElement('g', {transform: `translate(${t-p.width/2} ${n-p.height/2})`, className: m, visibility: p.width?'visible':'hidden', ...d}, a&&e.createElement('rect', {width: p.width+2*l[0], x: -l[0], y: -l[1], height: p.height+2*l[1], className: 'react-flow__edge-textbg', style: i, rx: u, ry: u}), e.createElement('text', {className: 'react-flow__edge-text', y: p.height/2, dy: '0.3em', ref: f, style: o}, r), s):null;
    })); const pu=(e)=>({width: e.offsetWidth, height: e.offsetHeight}); const hu=(e, t=0, n=1)=>Math.min(Math.max(e, t), n); const mu=(e={x: 0, y: 0}, t)=>({x: hu(e.x, t[0][0], t[1][0]), y: hu(e.y, t[0][1], t[1][1])}); const gu=(e, t, n)=>e<t?hu(Math.abs(e-t), 1, 50)/50:e>n?-hu(Math.abs(e-n), 1, 50)/50:0; const yu=(e, t)=>[20*gu(e.x, 35, t.width-35), 20*gu(e.y, 35, t.height-35)]; const vu=(e)=>e.getRootNode?.()||window?.document; const bu=({x: e, y: t, width: n, height: r})=>({x: e, y: t, x2: e+n, y2: t+r}); const wu=(e)=>({...e.positionAbsolute||{x: 0, y: 0}, width: e.width||0, height: e.height||0}); const Su=(e, t)=>{
      const n=Math.max(0, Math.min(e.x+e.width, t.x+t.width)-Math.max(e.x, t.x)); const r=Math.max(0, Math.min(e.y+e.height, t.y+t.height)-Math.max(e.y, t.y)); return Math.ceil(n*r);
    }; const xu=(e)=>!isNaN(e)&&isFinite(e); const Eu=Symbol.for('internals'); const _u=['Enter', ' ', 'Escape']; const ku=(e, t)=>{}; function Cu(e) {
      const t=((e)=>'nativeEvent'in e)(e)?e.nativeEvent:e; const n=t.composedPath?.()?.[0]||e.target; return ['INPUT', 'SELECT', 'TEXTAREA'].includes(n?.nodeName)||n?.hasAttribute('contenteditable')||!!n?.closest('.nokey');
    } const Ou=(e)=>'clientX'in e; const Nu=(e, t)=>{
      const n=Ou(e); const r=n?e.clientX:e.touches?.[0].clientX; const o=n?e.clientY:e.touches?.[0].clientY; return {x: r-(t?.left??0), y: o-(t?.top??0)};
    }; const Mu=()=>'undefined'!=typeof navigator&&navigator?.userAgent?.indexOf('Mac')>=0; const Pu=({id: t, path: n, labelX: r, labelY: o, label: a, labelStyle: i, labelShowBg: l, labelBgStyle: u, labelBgPadding: s, labelBgBorderRadius: c, style: d, markerEnd: f, markerStart: p, interactionWidth: h=20})=>e.createElement(e.Fragment, null, e.createElement('path', {id: t, style: d, d: n, fill: 'none', className: 'react-flow__edge-path', markerEnd: f, markerStart: p}), h&&e.createElement('path', {d: n, fill: 'none', strokeOpacity: 0, strokeWidth: h, className: 'react-flow__edge-interaction'}), a&&xu(r)&&xu(o)?e.createElement(fu, {x: r, y: o, label: a, labelStyle: i, labelShowBg: l, labelBgStyle: u, labelBgPadding: s, labelBgBorderRadius: c}):null); function Tu(e, t, n) {
      return void 0===n?n:(r)=>{
        const o=t().edges.find(((t)=>t.id===e)); o&&n(r, {...o});
      };
    } function Ru({sourceX: e, sourceY: t, targetX: n, targetY: r}) {
      const o=Math.abs(n-e)/2; const a=n<e?n+o:n-o; const i=Math.abs(r-t)/2; return [a, r<t?r+i:r-i, o, i];
    } function Au({sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: l}) {
      const u=.125*e+.375*o+.375*i+.125*n; const s=.125*t+.375*a+.375*l+.125*r; return [u, s, Math.abs(u-e), Math.abs(s-t)];
    } let Iu; let zu; let Du; let Lu; let ju; let Fu; function qu({pos: e, x1: t, y1: n, x2: r, y2: o}) {
      return e===Fu.Left||e===Fu.Right?[.5*(t+r), n]:[t, .5*(n+o)];
    } function Uu({sourceX: e, sourceY: t, sourcePosition: n=Fu.Bottom, targetX: r, targetY: o, targetPosition: a=Fu.Top}) {
      const [i, l]=qu({pos: n, x1: e, y1: t, x2: r, y2: o}); const [u, s]=qu({pos: a, x1: r, y1: o, x2: e, y2: t}); const [c, d, f, p]=Au({sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: i, sourceControlY: l, targetControlX: u, targetControlY: s}); return [`M${e},${t} C${i},${l} ${u},${s} ${r},${o}`, c, d, f, p];
    }Pu.displayName='BaseEdge', function(e) {
      e.Strict='strict', e.Loose='loose';
    }(Iu||(Iu={})), function(e) {
      e.Free='free', e.Vertical='vertical', e.Horizontal='horizontal';
    }(zu||(zu={})), function(e) {
      e.Partial='partial', e.Full='full';
    }(Du||(Du={})), function(e) {
      e.Bezier='default', e.Straight='straight', e.Step='step', e.SmoothStep='smoothstep', e.SimpleBezier='simplebezier';
    }(Lu||(Lu={})), function(e) {
      e.Arrow='arrow', e.ArrowClosed='arrowclosed';
    }(ju||(ju={})), function(e) {
      e.Left='left', e.Top='top', e.Right='right', e.Bottom='bottom';
    }(Fu||(Fu={})); const Bu=(0, e.memo)((({sourceX: t, sourceY: n, targetX: r, targetY: o, sourcePosition: a=Fu.Bottom, targetPosition: i=Fu.Top, label: l, labelStyle: u, labelShowBg: s, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: f, style: p, markerEnd: h, markerStart: m, interactionWidth: g})=>{
      const [y, v, b]=Uu({sourceX: t, sourceY: n, sourcePosition: a, targetX: r, targetY: o, targetPosition: i}); return e.createElement(Pu, {path: y, labelX: v, labelY: b, label: l, labelStyle: u, labelShowBg: s, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: f, style: p, markerEnd: h, markerStart: m, interactionWidth: g});
    })); Bu.displayName='SimpleBezierEdge'; const $u={[Fu.Left]: {x: -1, y: 0}, [Fu.Right]: {x: 1, y: 0}, [Fu.Top]: {x: 0, y: -1}, [Fu.Bottom]: {x: 0, y: 1}}; const Hu=(e, t)=>Math.sqrt(Math.pow(t.x-e.x, 2)+Math.pow(t.y-e.y, 2)); function Wu({sourceX: e, sourceY: t, sourcePosition: n=Fu.Bottom, targetX: r, targetY: o, targetPosition: a=Fu.Top, borderRadius: i=5, centerX: l, centerY: u, offset: s=20}) {
      const [c, d, f, p, h]=function({source: e, sourcePosition: t=Fu.Bottom, target: n, targetPosition: r=Fu.Top, center: o, offset: a}) {
        const i=$u[t]; const l=$u[r]; const u={x: e.x+i.x*a, y: e.y+i.y*a}; const s={x: n.x+l.x*a, y: n.y+l.y*a}; const c=(({source: e, sourcePosition: t=Fu.Bottom, target: n})=>t===Fu.Left||t===Fu.Right?e.x<n.x?{x: 1, y: 0}:{x: -1, y: 0}:e.y<n.y?{x: 0, y: 1}:{x: 0, y: -1})({source: u, sourcePosition: t, target: s}); const d=0!==c.x?'x':'y'; const f=c[d]; let p; let h; let m=[]; const g={x: 0, y: 0}; const y={x: 0, y: 0}; const [v, b, w, S]=Ru({sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y}); if (i[d]*l[d]==-1) {
          p=o.x||v, h=o.y||b; const e=[{x: p, y: u.y}, {x: p, y: s.y}]; const t=[{x: u.x, y: h}, {x: s.x, y: h}]; m=i[d]===f?'x'===d?e:t:'x'===d?t:e;
        } else {
          const o=[{x: u.x, y: s.y}]; const c=[{x: s.x, y: u.y}]; if (m='x'===d?i.x===f?c:o:i.y===f?o:c, t===r) {
            const t=Math.abs(e[d]-n[d]); if (t<=a) {
              const r=Math.min(a-1, a-t); i[d]===f?g[d]=(u[d]>e[d]?-1:1)*r:y[d]=(s[d]>n[d]?-1:1)*r;
            }
          } if (t!==r) {
            const e='x'===d?'y':'x'; const t=i[d]===l[e]; const n=u[e]>s[e]; const r=u[e]<s[e]; (1===i[d]&&(!t&&n||t&&r)||1!==i[d]&&(!t&&r||t&&n))&&(m='x'===d?o:c);
          } const v={x: u.x+g.x, y: u.y+g.y}; const b={x: s.x+y.x, y: s.y+y.y}; Math.max(Math.abs(v.x-m[0].x), Math.abs(b.x-m[0].x))>=Math.max(Math.abs(v.y-m[0].y), Math.abs(b.y-m[0].y))?(p=(v.x+b.x)/2, h=m[0].y):(p=m[0].x, h=(v.y+b.y)/2);
        } return [[e, {x: u.x+g.x, y: u.y+g.y}, ...m, {x: s.x+y.x, y: s.y+y.y}, n], p, h, w, S];
      }({source: {x: e, y: t}, sourcePosition: n, target: {x: r, y: o}, targetPosition: a, center: {x: l, y: u}, offset: s}); return [c.reduce(((e, t, n)=>{
        let r=''; return r=n>0&&n<c.length-1?function(e, t, n, r) {
          const o=Math.min(Hu(e, t)/2, Hu(t, n)/2, r); const {x: a, y: i}=t; if (e.x===a&&a===n.x||e.y===i&&i===n.y) return `L${a} ${i}`; if (e.y===i) return `L ${a+o*(e.x<n.x?-1:1)},${i}Q ${a},${i} ${a},${i+o*(e.y<n.y?1:-1)}`; const l=e.x<n.x?1:-1; return `L ${a},${i+o*(e.y<n.y?-1:1)}Q ${a},${i} ${a+o*l},${i}`;
        }(c[n-1], t, c[n+1], i):`${0===n?'M':'L'}${t.x} ${t.y}`, e+r;
      }), ''), d, f, p, h];
    } const Vu=(0, e.memo)((({sourceX: t, sourceY: n, targetX: r, targetY: o, label: a, labelStyle: i, labelShowBg: l, labelBgStyle: u, labelBgPadding: s, labelBgBorderRadius: c, style: d, sourcePosition: f=Fu.Bottom, targetPosition: p=Fu.Top, markerEnd: h, markerStart: m, pathOptions: g, interactionWidth: y})=>{
      const [v, b, w]=Wu({sourceX: t, sourceY: n, sourcePosition: f, targetX: r, targetY: o, targetPosition: p, borderRadius: g?.borderRadius, offset: g?.offset}); return e.createElement(Pu, {path: v, labelX: b, labelY: w, label: a, labelStyle: i, labelShowBg: l, labelBgStyle: u, labelBgPadding: s, labelBgBorderRadius: c, style: d, markerEnd: h, markerStart: m, interactionWidth: y});
    })); Vu.displayName='SmoothStepEdge'; const Ku=(0, e.memo)(((t)=>e.createElement(Vu, {...t, pathOptions: (0, e.useMemo)((()=>({borderRadius: 0, offset: t.pathOptions?.offset})), [t.pathOptions?.offset])}))); Ku.displayName='StepEdge'; const Qu=(0, e.memo)((({sourceX: t, sourceY: n, targetX: r, targetY: o, label: a, labelStyle: i, labelShowBg: l, labelBgStyle: u, labelBgPadding: s, labelBgBorderRadius: c, style: d, markerEnd: f, markerStart: p, interactionWidth: h})=>{
      const [m, g, y]=function({sourceX: e, sourceY: t, targetX: n, targetY: r}) {
        const [o, a, i, l]=Ru({sourceX: e, sourceY: t, targetX: n, targetY: r}); return [`M ${e},${t}L ${n},${r}`, o, a, i, l];
      }({sourceX: t, sourceY: n, targetX: r, targetY: o}); return e.createElement(Pu, {path: m, labelX: g, labelY: y, label: a, labelStyle: i, labelShowBg: l, labelBgStyle: u, labelBgPadding: s, labelBgBorderRadius: c, style: d, markerEnd: f, markerStart: p, interactionWidth: h});
    })); function Yu(e, t) {
      return e>=0?.5*e:25*t*Math.sqrt(-e);
    } function Xu({pos: e, x1: t, y1: n, x2: r, y2: o, c: a}) {
      switch (e) {
        case Fu.Left: return [t-Yu(t-r, a), n]; case Fu.Right: return [t+Yu(r-t, a), n]; case Fu.Top: return [t, n-Yu(n-o, a)]; case Fu.Bottom: return [t, n+Yu(o-n, a)];
      }
    } function Gu({sourceX: e, sourceY: t, sourcePosition: n=Fu.Bottom, targetX: r, targetY: o, targetPosition: a=Fu.Top, curvature: i=.25}) {
      const [l, u]=Xu({pos: n, x1: e, y1: t, x2: r, y2: o, c: i}); const [s, c]=Xu({pos: a, x1: r, y1: o, x2: e, y2: t, c: i}); const [d, f, p, h]=Au({sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: l, sourceControlY: u, targetControlX: s, targetControlY: c}); return [`M${e},${t} C${l},${u} ${s},${c} ${r},${o}`, d, f, p, h];
    }Qu.displayName='StraightEdge'; const Zu=(0, e.memo)((({sourceX: t, sourceY: n, targetX: r, targetY: o, sourcePosition: a=Fu.Bottom, targetPosition: i=Fu.Top, label: l, labelStyle: u, labelShowBg: s, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: f, style: p, markerEnd: h, markerStart: m, pathOptions: g, interactionWidth: y})=>{
      const [v, b, w]=Gu({sourceX: t, sourceY: n, sourcePosition: a, targetX: r, targetY: o, targetPosition: i, curvature: g?.curvature}); return e.createElement(Pu, {path: v, labelX: b, labelY: w, label: l, labelStyle: u, labelShowBg: s, labelBgStyle: c, labelBgPadding: d, labelBgBorderRadius: f, style: p, markerEnd: h, markerStart: m, interactionWidth: y});
    })); Zu.displayName='BezierEdge'; const Ju=(0, e.createContext)(null); const es=Ju.Provider; Ju.Consumer; const ts=({source: e, sourceHandle: t, target: n, targetHandle: r})=>`reactflow__edge-${e}${t||''}-${n}${r||''}`; const ns=(e, t)=>void 0===e?'':'string'==typeof e?e:`${t?`${t}__`:''}${Object.keys(e).sort().map(((t)=>`${t}=${e[t]}`)).join('&')}`; const rs=({x: e, y: t}, [n, r, o], a, [i, l])=>{
      const u={x: (e-n)/o, y: (t-r)/o}; return a?{x: i*Math.round(u.x/i), y: l*Math.round(u.y/l)}:u;
    }; const os=({x: e, y: t}, [n, r, o])=>({x: e*o+n, y: t*o+r}); const as=(e, t=[0, 0])=>{
      if (!e) return {x: 0, y: 0, positionAbsolute: {x: 0, y: 0}}; const n=(e.width??0)*t[0]; const r=(e.height??0)*t[1]; const o={x: e.position.x-n, y: e.position.y-r}; return {...o, positionAbsolute: e.positionAbsolute?{x: e.positionAbsolute.x-n, y: e.positionAbsolute.y-r}:o};
    }; const is=(e, t=[0, 0])=>{
      if (0===e.length) return {x: 0, y: 0, width: 0, height: 0}; return (({x: e, y: t, x2: n, y2: r})=>({x: e, y: t, width: n-e, height: r-t}))(e.reduce(((e, n)=>{
        const {x: r, y: o}=as(n, t).positionAbsolute; return a=e, i=bu({x: r, y: o, width: n.width||0, height: n.height||0}), {x: Math.min(a.x, i.x), y: Math.min(a.y, i.y), x2: Math.max(a.x2, i.x2), y2: Math.max(a.y2, i.y2)}; let a; let i;
      }), {x: 1/0, y: 1/0, x2: -1/0, y2: -1/0}));
    }; const ls=(e, t, [n, r, o]=[0, 0, 1], a=!1, i=!1, l=[0, 0])=>{
      const u={x: (t.x-n)/o, y: (t.y-r)/o, width: t.width/o, height: t.height/o}; const s=[]; return e.forEach(((e)=>{
        const {width: t, height: n, selectable: r=!0, hidden: o=!1}=e; if (i&&!r||o) return !1; const {positionAbsolute: c}=as(e, l); const d={x: c.x, y: c.y, width: t||0, height: n||0}; const f=Su(u, d); (void 0===t||void 0===n||null===t||null===n||a&&f>0||f>=(t||0)*(n||0)||e.dragging)&&s.push(e);
      })), s;
    }; const us=(e, t)=>{
      const n=e.map(((e)=>e.id)); return t.filter(((e)=>n.includes(e.source)||n.includes(e.target)));
    }; const ss=(e, t, n, r, o, a=.1)=>{
      const i=t/(e.width*(1+a)); const l=n/(e.height*(1+a)); const u=Math.min(i, l); const s=hu(u, r, o); return {x: t/2-(e.x+e.width/2)*s, y: n/2-(e.y+e.height/2)*s, zoom: s};
    }; const cs=(e, t=0)=>e.transition().duration(t); function ds(e, t, n, r) {
      return (t[n]||[]).reduce(((t, o)=>(`${e.id}-${o.id}-${n}`!==r&&t.push({id: o.id||null, type: n, nodeId: e.id, x: (e.positionAbsolute?.x??0)+o.x+o.width/2, y: (e.positionAbsolute?.y??0)+o.y+o.height/2}), t)), []);
    } const fs={source: null, target: null, sourceHandle: null, targetHandle: null}; const ps=()=>({handleDomNode: null, isValid: !1, connection: fs, endHandle: null}); function hs(e, t, n, r, o, a, i) {
      const l='target'===o; const u=i.querySelector(`.react-flow__handle[data-id="${e?.nodeId}-${e?.id}-${e?.type}"]`); const s={...ps(), handleDomNode: u}; if (u) {
        const e=ms(void 0, u); const o=u.getAttribute('data-nodeid'); const i=u.getAttribute('data-handleid'); const c=u.classList.contains('connectable'); const d=u.classList.contains('connectableend'); const f={source: l?o:n, sourceHandle: l?i:r, target: l?n:o, targetHandle: l?r:i}; s.connection=f, c&&d&&(t===Iu.Strict?l&&'source'===e||!l&&'target'===e:o!==n||i!==r)&&(s.endHandle={nodeId: o, handleId: i, type: e}, s.isValid=a(f));
      } return s;
    } function ms(e, t) {
      return e||(t?.classList.contains('target')?'target':t?.classList.contains('source')?'source':null);
    } function gs(e) {
      e?.classList.remove('valid', 'connecting', 'react-flow__handle-valid', 'react-flow__handle-connecting');
    } function ys(e, t) {
      let n=null; return t?n='valid':e&&!t&&(n='invalid'), n;
    } function vs({event: e, handleId: t, nodeId: n, onConnect: r, isTarget: o, getState: a, setState: i, isValidConnection: l, edgeUpdaterType: u, onEdgeUpdateEnd: s}) {
      const c=vu(e.target); const {connectionMode: d, domNode: f, autoPanOnConnect: p, connectionRadius: h, onConnectStart: m, panBy: g, getNodes: y, cancelConnection: v}=a(); let b; let w=0; const {x: S, y: x}=Nu(e); const E=c?.elementFromPoint(S, x); const _=ms(u, E); const k=f?.getBoundingClientRect(); if (!k||!_) return; let C; let O=Nu(e, k); let N=!1; let M=null; let P=!1; let T=null; const R=function({nodes: e, nodeId: t, handleId: n, handleType: r}) {
        return e.reduce(((e, o)=>{
          if (o[Eu]) {
            const {handleBounds: a}=o[Eu]; let i=[]; let l=[]; a&&(i=ds(o, a, 'source', `${t}-${n}-${r}`), l=ds(o, a, 'target', `${t}-${n}-${r}`)), e.push(...i, ...l);
          } return e;
        }), []);
      }({nodes: y(), nodeId: n, handleId: t, handleType: _}); const A=()=>{
        if (!p) return; const [e, t]=yu(O, k); g({x: e, y: t}), w=requestAnimationFrame(A);
      }; function I(e) {
        const {transform: r}=a(); O=Nu(e, k); const {handle: u, validHandleResult: s}=function(e, t, n, r, o, a) {
          const {x: i, y: l}=Nu(e); const u=t.elementsFromPoint(i, l).find(((e)=>e.classList.contains('react-flow__handle'))); if (u) {
            const e=u.getAttribute('data-nodeid'); if (e) {
              const t=ms(void 0, u); const r=u.getAttribute('data-handleid'); const i=a({nodeId: e, id: r, type: t}); if (i) {
                const a=o.find(((n)=>n.nodeId===e&&n.type===t&&n.id===r)); return {handle: {id: r, type: t, nodeId: e, x: a?.x||n.x, y: a?.y||n.y}, validHandleResult: i};
              }
            }
          } let s=[]; let c=1/0; if (o.forEach(((e)=>{
            const t=Math.sqrt((e.x-n.x)**2+(e.y-n.y)**2); if (t<=r) {
              const n=a(e); t<=c&&(t<c?s=[{handle: e, validHandleResult: n}]:t===c&&s.push({handle: e, validHandleResult: n}), c=t);
            }
          })), !s.length) return {handle: null, validHandleResult: ps()}; if (1===s.length) return s[0]; const d=s.some((({validHandleResult: e})=>e.isValid)); const f=s.some((({handle: e})=>'target'===e.type)); return s.find((({handle: e, validHandleResult: t})=>f?'target'===e.type:!d||t.isValid))||s[0];
        }(e, c, rs(O, r, !1, [1, 1]), h, R, ((e)=>hs(e, d, n, t, o?'target':'source', l, c))); if (b=u, N||(A(), N=!0), T=s.handleDomNode, M=s.connection, P=s.isValid, i({connectionPosition: b&&P?os({x: b.x, y: b.y}, r):O, connectionStatus: ys(!!b, P), connectionEndHandle: s.endHandle}), !b&&!P&&!T) return gs(C); M.source!==M.target&&T&&(gs(C), C=T, T.classList.add('connecting', 'react-flow__handle-connecting'), T.classList.toggle('valid', P), T.classList.toggle('react-flow__handle-valid', P));
      } function z(e) {
        (b||T)&&M&&P&&r?.(M), a().onConnectEnd?.(e), u&&s?.(e), gs(C), v(), cancelAnimationFrame(w), N=!1, P=!1, M=null, T=null, c.removeEventListener('mousemove', I), c.removeEventListener('mouseup', z), c.removeEventListener('touchmove', I), c.removeEventListener('touchend', z);
      }i({connectionPosition: O, connectionStatus: null, connectionNodeId: n, connectionHandleId: t, connectionHandleType: _, connectionStartHandle: {nodeId: n, handleId: t, type: _}, connectionEndHandle: null}), m?.(e, {nodeId: n, handleId: t, handleType: _}), c.addEventListener('mousemove', I), c.addEventListener('mouseup', z), c.addEventListener('touchmove', I), c.addEventListener('touchend', z);
    } const bs=()=>!0; const ws=(e)=>({connectionStartHandle: e.connectionStartHandle, connectOnClick: e.connectOnClick, noPanClassName: e.noPanClassName}); const Ss=(0, e.forwardRef)((({type: t='source', position: n=Fu.Top, isValidConnection: r, isConnectable: o=!0, isConnectableStart: a=!0, isConnectableEnd: i=!0, id: l, onConnect: u, children: s, className: c, onMouseDown: d, onTouchStart: f, ...p}, h)=>{
      const m=l||null; const g='target'===t; const y=uu(); const v=(0, e.useContext)(Ju); const {connectOnClick: b, noPanClassName: w}=lu(ws, go); const {connecting: S, clickConnecting: x}=lu(((e, t, n)=>(r)=>{
        const {connectionStartHandle: o, connectionEndHandle: a, connectionClickStartHandle: i}=r; return {connecting: o?.nodeId===e&&o?.handleId===t&&o?.type===n||a?.nodeId===e&&a?.handleId===t&&a?.type===n, clickConnecting: i?.nodeId===e&&i?.handleId===t&&i?.type===n};
      })(v, m, t), go); v||y.getState().onError?.('010', au.error010()); const E=(e)=>{
        const {defaultEdgeOptions: t, onConnect: n, hasDefaultEdges: r}=y.getState(); const o={...t, ...e}; if (r) {
          const {edges: e, setEdges: t}=y.getState(); t(((e, t)=>{
            if (!e.source||!e.target) return au.error006(), t; let n; let r; return n='id'in(r=e)&&'source'in r&&'target'in r?{...e}:{...e, id: ts(e)}, ((e, t)=>t.some(((t)=>!(t.source!==e.source||t.target!==e.target||t.sourceHandle!==e.sourceHandle&&(t.sourceHandle||e.sourceHandle)||t.targetHandle!==e.targetHandle&&(t.targetHandle||e.targetHandle)))))(n, t)?t:t.concat(n);
          })(o, e));
        }n?.(o), u?.(o);
      }; const _=(e)=>{
        if (!v) return; const t=Ou(e); a&&(t&&0===e.button||!t)&&vs({event: e, handleId: m, nodeId: v, onConnect: E, isTarget: g, getState: y.getState, setState: y.setState, isValidConnection: r||y.getState().isValidConnection||bs}), t?d?.(e):f?.(e);
      }; return e.createElement('div', {'data-handleid': m, 'data-nodeid': v, 'data-handlepos': n, 'data-id': `${v}-${m}-${t}`, 'className': lo(['react-flow__handle', `react-flow__handle-${n}`, 'nodrag', w, c, {source: !g, target: g, connectable: o, connectablestart: a, connectableend: i, connecting: x, connectionindicator: o&&(a&&!S||i&&S)}]), 'onMouseDown': _, 'onTouchStart': _, 'onClick': b?(e)=>{
        const {onClickConnectStart: n, onClickConnectEnd: o, connectionClickStartHandle: i, connectionMode: l, isValidConnection: u}=y.getState(); if (!v||!i&&!a) return; if (!i) return n?.(e, {nodeId: v, handleId: m, handleType: t}), void y.setState({connectionClickStartHandle: {nodeId: v, type: t, handleId: m}}); const s=vu(e.target); const c=r||u||bs; const {connection: d, isValid: f}=hs({nodeId: v, id: m, type: t}, l, i.nodeId, i.handleId||null, i.type, c, s); f&&E(d), o?.(e), y.setState({connectionClickStartHandle: null});
      }:void 0, 'ref': h, ...p}, s);
    })); Ss.displayName='Handle'; const xs=(0, e.memo)(Ss); const Es=({data: t, isConnectable: n, targetPosition: r=Fu.Top, sourcePosition: o=Fu.Bottom})=>e.createElement(e.Fragment, null, e.createElement(xs, {type: 'target', position: r, isConnectable: n}), t?.label, e.createElement(xs, {type: 'source', position: o, isConnectable: n})); Es.displayName='DefaultNode'; const _s=(0, e.memo)(Es); const ks=({data: t, isConnectable: n, sourcePosition: r=Fu.Bottom})=>e.createElement(e.Fragment, null, t?.label, e.createElement(xs, {type: 'source', position: r, isConnectable: n})); ks.displayName='InputNode'; const Cs=(0, e.memo)(ks); const Os=({data: t, isConnectable: n, targetPosition: r=Fu.Top})=>e.createElement(e.Fragment, null, e.createElement(xs, {type: 'target', position: r, isConnectable: n}), t?.label); Os.displayName='OutputNode'; const Ns=(0, e.memo)(Os); const Ms=()=>null; Ms.displayName='GroupNode'; const Ps=(e)=>({selectedNodes: e.getNodes().filter(((e)=>e.selected)), selectedEdges: e.edges.filter(((e)=>e.selected))}); const Ts=(e)=>e.id; function Rs(e, t) {
      return go(e.selectedNodes.map(Ts), t.selectedNodes.map(Ts))&&go(e.selectedEdges.map(Ts), t.selectedEdges.map(Ts));
    } const As=(0, e.memo)((({onSelectionChange: t})=>{
      const n=uu(); const {selectedNodes: r, selectedEdges: o}=lu(Ps, Rs); return (0, e.useEffect)((()=>{
        const e={nodes: r, edges: o}; t?.(e), n.getState().onSelectionChange.forEach(((t)=>t(e)));
      }), [r, o, t]), null;
    })); As.displayName='SelectionListener'; const Is=(e)=>!!e.onSelectionChange; function zs({onSelectionChange: t}) {
      const n=lu(Is); return t||n?e.createElement(As, {onSelectionChange: t}):null;
    } const Ds=(e)=>({setNodes: e.setNodes, setEdges: e.setEdges, setDefaultNodesAndEdges: e.setDefaultNodesAndEdges, setMinZoom: e.setMinZoom, setMaxZoom: e.setMaxZoom, setTranslateExtent: e.setTranslateExtent, setNodeExtent: e.setNodeExtent, reset: e.reset}); function Ls(t, n) {
      (0, e.useEffect)((()=>{
        void 0!==t&&n(t);
      }), [t]);
    } function js(t, n, r) {
      (0, e.useEffect)((()=>{
        void 0!==n&&r({[t]: n});
      }), [n]);
    } const Fs=({nodes: t, edges: n, defaultNodes: r, defaultEdges: o, onConnect: a, onConnectStart: i, onConnectEnd: l, onClickConnectStart: u, onClickConnectEnd: s, nodesDraggable: c, nodesConnectable: d, nodesFocusable: f, edgesFocusable: p, edgesUpdatable: h, elevateNodesOnSelect: m, minZoom: g, maxZoom: y, nodeExtent: v, onNodesChange: b, onEdgesChange: w, elementsSelectable: S, connectionMode: x, snapGrid: E, snapToGrid: _, translateExtent: k, connectOnClick: C, defaultEdgeOptions: O, fitView: N, fitViewOptions: M, onNodesDelete: P, onEdgesDelete: T, onNodeDrag: R, onNodeDragStart: A, onNodeDragStop: I, onSelectionDrag: z, onSelectionDragStart: D, onSelectionDragStop: L, noPanClassName: j, nodeOrigin: F, rfId: q, autoPanOnConnect: U, autoPanOnNodeDrag: B, onError: $, connectionRadius: H, isValidConnection: W, nodeDragThreshold: V})=>{
      const {setNodes: K, setEdges: Q, setDefaultNodesAndEdges: Y, setMinZoom: X, setMaxZoom: G, setTranslateExtent: Z, setNodeExtent: J, reset: ee}=lu(Ds, go); const te=uu(); return (0, e.useEffect)((()=>{
        const e=o?.map(((e)=>({...e, ...O}))); return Y(r, e), ()=>{
          ee();
        };
      }), []), js('defaultEdgeOptions', O, te.setState), js('connectionMode', x, te.setState), js('onConnect', a, te.setState), js('onConnectStart', i, te.setState), js('onConnectEnd', l, te.setState), js('onClickConnectStart', u, te.setState), js('onClickConnectEnd', s, te.setState), js('nodesDraggable', c, te.setState), js('nodesConnectable', d, te.setState), js('nodesFocusable', f, te.setState), js('edgesFocusable', p, te.setState), js('edgesUpdatable', h, te.setState), js('elementsSelectable', S, te.setState), js('elevateNodesOnSelect', m, te.setState), js('snapToGrid', _, te.setState), js('snapGrid', E, te.setState), js('onNodesChange', b, te.setState), js('onEdgesChange', w, te.setState), js('connectOnClick', C, te.setState), js('fitViewOnInit', N, te.setState), js('fitViewOnInitOptions', M, te.setState), js('onNodesDelete', P, te.setState), js('onEdgesDelete', T, te.setState), js('onNodeDrag', R, te.setState), js('onNodeDragStart', A, te.setState), js('onNodeDragStop', I, te.setState), js('onSelectionDrag', z, te.setState), js('onSelectionDragStart', D, te.setState), js('onSelectionDragStop', L, te.setState), js('noPanClassName', j, te.setState), js('nodeOrigin', F, te.setState), js('rfId', q, te.setState), js('autoPanOnConnect', U, te.setState), js('autoPanOnNodeDrag', B, te.setState), js('onError', $, te.setState), js('connectionRadius', H, te.setState), js('isValidConnection', W, te.setState), js('nodeDragThreshold', V, te.setState), Ls(t, K), Ls(n, Q), Ls(g, X), Ls(y, G), Ls(k, Z), Ls(v, J), null;
    }; const qs={display: 'none'}; const Us={position: 'absolute', width: 1, height: 1, margin: -1, border: 0, padding: 0, overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(100%)'}; const Bs='react-flow__node-desc'; const $s='react-flow__edge-desc'; const Hs='react-flow__aria-live'; const Ws=(e)=>e.ariaLiveMessage; function Vs({rfId: t}) {
      const n=lu(Ws); return e.createElement('div', {'id': `${Hs}-${t}`, 'aria-live': 'assertive', 'aria-atomic': 'true', 'style': Us}, n);
    } function Ks({rfId: t, disableKeyboardA11y: n}) {
      return e.createElement(e.Fragment, null, e.createElement('div', {id: `${Bs}-${t}`, style: qs}, 'Press enter or space to select a node.', !n&&'You can then use the arrow keys to move the node around.', ' Press delete to remove it and escape to cancel.', ' '), e.createElement('div', {id: `${$s}-${t}`, style: qs}, 'Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.'), !n&&e.createElement(Vs, {rfId: t}));
    } const Qs=(t=null, n={actInsideInputWithModifier: !0})=>{
      const [r, o]=(0, e.useState)(!1); const a=(0, e.useRef)(!1); const i=(0, e.useRef)(new Set([])); const [l, u]=(0, e.useMemo)((()=>{
        if (null!==t) {
          const e=(Array.isArray(t)?t:[t]).filter(((e)=>'string'==typeof e)).map(((e)=>e.split('+'))); const n=e.reduce(((e, t)=>e.concat(...t)), []); return [e, n];
        } return [[], []];
      }), [t]); return (0, e.useEffect)((()=>{
        const e='undefined'!=typeof document?document:null; const r=n?.target||e; if (null!==t) {
          const e=(e)=>{
            if (a.current=e.ctrlKey||e.metaKey||e.shiftKey, (!a.current||a.current&&!n.actInsideInputWithModifier)&&Cu(e)) return !1; const t=Xs(e.code, u); i.current.add(e[t]), Ys(l, i.current, !1)&&(e.preventDefault(), o(!0));
          }; const t=(e)=>{
            if ((!a.current||a.current&&!n.actInsideInputWithModifier)&&Cu(e)) return !1; const t=Xs(e.code, u); Ys(l, i.current, !0)?(o(!1), i.current.clear()):i.current.delete(e[t]), 'Meta'===e.key&&i.current.clear(), a.current=!1;
          }; const s=()=>{
            i.current.clear(), o(!1);
          }; return r?.addEventListener('keydown', e), r?.addEventListener('keyup', t), window.addEventListener('blur', s), ()=>{
            r?.removeEventListener('keydown', e), r?.removeEventListener('keyup', t), window.removeEventListener('blur', s);
          };
        }
      }), [t, o]), r;
    }; function Ys(e, t, n) {
      return e.filter(((e)=>n||e.length===t.size)).some(((e)=>e.every(((e)=>t.has(e)))));
    } function Xs(e, t) {
      return t.includes(e)?'code':'key';
    } function Gs(e, t, n, r) {
      if (!e.parentNode) return n; const o=t.get(e.parentNode); const a=as(o, r); return Gs(o, t, {x: (n.x??0)+a.x, y: (n.y??0)+a.y, z: (o[Eu]?.z??0)>(n.z??0)?o[Eu]?.z??0:n.z??0}, r);
    } function Zs(e, t, n) {
      e.forEach(((r)=>{
        if (r.parentNode&&!e.has(r.parentNode)) throw new Error(`Parent node ${r.parentNode} not found`); if (r.parentNode||n?.[r.id]) {
          const {x: o, y: a, z: i}=Gs(r, e, {...r.position, z: r[Eu]?.z??0}, t); r.positionAbsolute={x: o, y: a}, r[Eu].z=i, n?.[r.id]&&(r[Eu].isParent=!0);
        }
      }));
    } function Js(e, t, n, r) {
      const o=new Map; const a={}; const i=r?1e3:0; return e.forEach(((e)=>{
        const n=(xu(e.zIndex)?e.zIndex:0)+(e.selected?i:0); const r=t.get(e.id); const l={...e, positionAbsolute: {x: e.position.x, y: e.position.y}}; e.parentNode&&(a[e.parentNode]=!0); const u=r?.type&&r?.type!==e.type; Object.defineProperty(l, Eu, {enumerable: !1, value: {handleBounds: u?void 0:r?.[Eu]?.handleBounds, z: n}}), o.set(e.id, l);
      })), Zs(o, n, a), o;
    } function ec(e, t={}) {
      const {getNodes: n, width: r, height: o, minZoom: a, maxZoom: i, d3Zoom: l, d3Selection: u, fitViewOnInitDone: s, fitViewOnInit: c, nodeOrigin: d}=e(); const f=t.initial&&!s&&c; if (l&&u&&(f||!t.initial)) {
        const e=n().filter(((e)=>{
          const n=t.includeHiddenNodes?e.width&&e.height:!e.hidden; return t.nodes?.length?n&&t.nodes.some(((t)=>t.id===e.id)):n;
        })); const s=e.every(((e)=>e.width&&e.height)); if (e.length>0&&s) {
          const n=is(e, d); const {x: s, y: c, zoom: f}=ss(n, r, o, t.minZoom??a, t.maxZoom??i, t.padding??.1); const p=Bl.translate(s, c).scale(f); return 'number'==typeof t.duration&&t.duration>0?l.transform(cs(u, t.duration), p):l.transform(u, p), !0;
        }
      } return !1;
    } function tc(e, t) {
      return e.forEach(((e)=>{
        const n=t.get(e.id); n&&t.set(n.id, {...n, [Eu]: n[Eu], selected: e.selected});
      })), new Map(t);
    } function nc(e, t) {
      return t.map(((t)=>{
        const n=e.find(((e)=>e.id===t.id)); return n&&(t.selected=n.selected), t;
      }));
    } function rc({changedNodes: e, changedEdges: t, get: n, set: r}) {
      const {nodeInternals: o, edges: a, onNodesChange: i, onEdgesChange: l, hasDefaultNodes: u, hasDefaultEdges: s}=n(); e?.length&&(u&&r({nodeInternals: tc(e, o)}), i?.(e)), t?.length&&(s&&r({edges: nc(t, a)}), l?.(t));
    } const oc=()=>{}; const ac={zoomIn: oc, zoomOut: oc, zoomTo: oc, getZoom: ()=>1, setViewport: oc, getViewport: ()=>({x: 0, y: 0, zoom: 1}), fitView: ()=>!1, setCenter: oc, fitBounds: oc, project: (e)=>e, screenToFlowPosition: (e)=>e, flowToScreenPosition: (e)=>e, viewportInitialized: !1}; const ic=(e)=>({d3Zoom: e.d3Zoom, d3Selection: e.d3Selection}); function lc() {
      const t=(()=>{
        const t=uu(); const {d3Zoom: n, d3Selection: r}=lu(ic, go); const o=(0, e.useMemo)((()=>r&&n?{zoomIn: (e)=>n.scaleBy(cs(r, e?.duration), 1.2), zoomOut: (e)=>n.scaleBy(cs(r, e?.duration), 1/1.2), zoomTo: (e, t)=>n.scaleTo(cs(r, t?.duration), e), getZoom: ()=>t.getState().transform[2], setViewport: (e, o)=>{
          const [a, i, l]=t.getState().transform; const u=Bl.translate(e.x??a, e.y??i).scale(e.zoom??l); n.transform(cs(r, o?.duration), u);
        }, getViewport: ()=>{
          const [e, n, r]=t.getState().transform; return {x: e, y: n, zoom: r};
        }, fitView: (e)=>ec(t.getState, e), setCenter: (e, o, a)=>{
          const {width: i, height: l, maxZoom: u}=t.getState(); const s=void 0!==a?.zoom?a.zoom:u; const c=i/2-e*s; const d=l/2-o*s; const f=Bl.translate(c, d).scale(s); n.transform(cs(r, a?.duration), f);
        }, fitBounds: (e, o)=>{
          const {width: a, height: i, minZoom: l, maxZoom: u}=t.getState(); const {x: s, y: c, zoom: d}=ss(e, a, i, l, u, o?.padding??.1); const f=Bl.translate(s, c).scale(d); n.transform(cs(r, o?.duration), f);
        }, project: (e)=>{
          const {transform: n, snapToGrid: r, snapGrid: o}=t.getState(); return console.warn('[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position'), rs(e, n, r, o);
        }, screenToFlowPosition: (e)=>{
          const {transform: n, snapToGrid: r, snapGrid: o, domNode: a}=t.getState(); if (!a) return e; const {x: i, y: l}=a.getBoundingClientRect(); const u={x: e.x-i, y: e.y-l}; return rs(u, n, r, o);
        }, flowToScreenPosition: (e)=>{
          const {transform: n, domNode: r}=t.getState(); if (!r) return e; const {x: o, y: a}=r.getBoundingClientRect(); const i=os(e, n); return {x: i.x+o, y: i.y+a};
        }, viewportInitialized: !0}:ac), [n, r]); return o;
      })(); const n=uu(); const r=(0, e.useCallback)((()=>n.getState().getNodes().map(((e)=>({...e})))), []); const o=(0, e.useCallback)(((e)=>n.getState().nodeInternals.get(e)), []); const a=(0, e.useCallback)((()=>{
        const {edges: e=[]}=n.getState(); return e.map(((e)=>({...e})));
      }), []); const i=(0, e.useCallback)(((e)=>{
        const {edges: t=[]}=n.getState(); return t.find(((t)=>t.id===e));
      }), []); const l=(0, e.useCallback)(((e)=>{
        const {getNodes: t, setNodes: r, hasDefaultNodes: o, onNodesChange: a}=n.getState(); const i=t(); const l='function'==typeof e?e(i):e; if (o)r(l); else if (a) {
          a(0===l.length?i.map(((e)=>({type: 'remove', id: e.id}))):l.map(((e)=>({item: e, type: 'reset'}))));
        }
      }), []); const u=(0, e.useCallback)(((e)=>{
        const {edges: t=[], setEdges: r, hasDefaultEdges: o, onEdgesChange: a}=n.getState(); const i='function'==typeof e?e(t):e; o?r(i):a&&a(0===i.length?t.map(((e)=>({type: 'remove', id: e.id}))):i.map(((e)=>({item: e, type: 'reset'}))));
      }), []); const s=(0, e.useCallback)(((e)=>{
        const t=Array.isArray(e)?e:[e]; const {getNodes: r, setNodes: o, hasDefaultNodes: a, onNodesChange: i}=n.getState(); if (a)o([...r(), ...t]); else if (i) {
          i(t.map(((e)=>({item: e, type: 'add'}))));
        }
      }), []); const c=(0, e.useCallback)(((e)=>{
        const t=Array.isArray(e)?e:[e]; const {edges: r=[], setEdges: o, hasDefaultEdges: a, onEdgesChange: i}=n.getState(); a?o([...r, ...t]):i&&i(t.map(((e)=>({item: e, type: 'add'}))));
      }), []); const d=(0, e.useCallback)((()=>{
        const {getNodes: e, edges: t=[], transform: r}=n.getState(); const [o, a, i]=r; return {nodes: e().map(((e)=>({...e}))), edges: t.map(((e)=>({...e}))), viewport: {x: o, y: a, zoom: i}};
      }), []); const f=(0, e.useCallback)((({nodes: e, edges: t})=>{
        const {nodeInternals: r, getNodes: o, edges: a, hasDefaultNodes: i, hasDefaultEdges: l, onNodesDelete: u, onEdgesDelete: s, onNodesChange: c, onEdgesChange: d}=n.getState(); const f=(e||[]).map(((e)=>e.id)); const p=(t||[]).map(((e)=>e.id)); const h=o().reduce(((e, t)=>{
          const n=!f.includes(t.id)&&t.parentNode&&e.find(((e)=>e.id===t.parentNode)); return ('boolean'!=typeof t.deletable||t.deletable)&&(f.includes(t.id)||n)&&e.push(t), e;
        }), []); const m=a.filter(((e)=>'boolean'!=typeof e.deletable||e.deletable)); const g=m.filter(((e)=>p.includes(e.id))); if (h||g) {
          const e=us(h, m); const t=[...g, ...e]; const o=t.reduce(((e, t)=>(e.includes(t.id)||e.push(t.id), e)), []); (l||i)&&(l&&n.setState({edges: a.filter(((e)=>!o.includes(e.id)))}), i&&(h.forEach(((e)=>{
            r.delete(e.id);
          })), n.setState({nodeInternals: new Map(r)}))), o.length>0&&(s?.(t), d&&d(o.map(((e)=>({id: e, type: 'remove'}))))), h.length>0&&(u?.(h), c)&&c(h.map(((e)=>({id: e.id, type: 'remove'}))));
        }
      }), []); const p=(0, e.useCallback)(((e)=>{
        const t=xu((o=e).width)&&xu(o.height)&&xu(o.x)&&xu(o.y); const r=t?null:n.getState().nodeInternals.get(e.id); let o; return t||r?[t?e:wu(r), r, t]:[null, null, t];
      }), []); const h=(0, e.useCallback)(((e, t=!0, r)=>{
        const [o, a, i]=p(e); return o?(r||n.getState().getNodes()).filter(((e)=>{
          if (!(i||e.id!==a.id&&e.positionAbsolute)) return !1; const n=wu(e); const r=Su(n, o); return t&&r>0||r>=o.width*o.height;
        })):[];
      }), []); const m=(0, e.useCallback)(((e, t, n=!0)=>{
        const [r]=p(e); if (!r) return !1; const o=Su(r, t); return n&&o>0||o>=r.width*r.height;
      }), []); return (0, e.useMemo)((()=>({...t, getNodes: r, getNode: o, getEdges: a, getEdge: i, setNodes: l, setEdges: u, addNodes: s, addEdges: c, toObject: d, deleteElements: f, getIntersectingNodes: h, isNodeIntersecting: m})), [t, r, o, a, i, l, u, s, c, d, f, h, m]);
    } const uc={actInsideInputWithModifier: !1}; const sc={position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}; const cc=(e)=>({x: e.x, y: e.y, zoom: e.k}); const dc=(e, t)=>e.target.closest(`.${t}`); const fc=(e, t)=>2===t&&Array.isArray(e)&&e.includes(2); const pc=(e)=>{
      const t=e.ctrlKey&&Mu()?10:1; return -e.deltaY*(1===e.deltaMode?.05:e.deltaMode?1:.002)*t;
    }; const hc=(e)=>({d3Zoom: e.d3Zoom, d3Selection: e.d3Selection, d3ZoomHandler: e.d3ZoomHandler, userSelectionActive: e.userSelectionActive}); const mc=({onMove: t, onMoveStart: n, onMoveEnd: r, onPaneContextMenu: o, zoomOnScroll: a=!0, zoomOnPinch: i=!0, panOnScroll: l=!1, panOnScrollSpeed: u=.5, panOnScrollMode: s=zu.Free, zoomOnDoubleClick: c=!0, elementsSelectable: d, panOnDrag: f=!0, defaultViewport: p, translateExtent: h, minZoom: m, maxZoom: g, zoomActivationKeyCode: y, preventScrolling: v=!0, children: b, noWheelClassName: w, noPanClassName: S})=>{
      const x=(0, e.useRef)(); const E=uu(); const _=(0, e.useRef)(!1); const k=(0, e.useRef)(!1); const C=(0, e.useRef)(null); const O=(0, e.useRef)({x: 0, y: 0, zoom: 0}); const {d3Zoom: N, d3Selection: M, d3ZoomHandler: P, userSelectionActive: T}=lu(hc, go); const R=Qs(y); const A=(0, e.useRef)(0); const I=(0, e.useRef)(!1); const z=(0, e.useRef)(); return function(t) {
        const n=uu(); (0, e.useEffect)((()=>{
          let e; const r=()=>{
            if (!t.current) return; const e=pu(t.current); 0!==e.height&&0!==e.width||n.getState().onError?.('004', au.error004()), n.setState({width: e.width||500, height: e.height||500});
          }; return r(), window.addEventListener('resize', r), t.current&&(e=new ResizeObserver((()=>r())), e.observe(t.current)), ()=>{
            window.removeEventListener('resize', r), e&&t.current&&e.unobserve(t.current);
          };
        }), []);
      }(C), (0, e.useEffect)((()=>{
        if (C.current) {
          const e=C.current.getBoundingClientRect(); const t=function() {
            let e; let t; let n; let r=Wl; let o=Vl; let a=Xl; let i=Ql; let l=Yl; const u=[0, 1/0]; const s=[[-1/0, -1/0], [1/0, 1/0]]; let c=250; let d=$a; const f=xo('start', 'zoom', 'end'); const p=500; const h=150; let m=0; let g=10; function y(e) {
              e.property('__zoom', Kl).on('wheel.zoom', _, {passive: !1}).on('mousedown.zoom', k).on('dblclick.zoom', C).filter(l).on('touchstart.zoom', O).on('touchmove.zoom', N).on('touchend.zoom touchcancel.zoom', M).style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
            } function v(e, t) {
              return (t=Math.max(u[0], Math.min(u[1], t)))===e.k?e:new Ul(t, e.x, e.y);
            } function b(e, t, n) {
              const r=t[0]-n[0]*e.k; const o=t[1]-n[1]*e.k; return r===e.x&&o===e.y?e:new Ul(e.k, r, o);
            } function w(e) {
              return [(+e[0][0]+ +e[1][0])/2, (+e[0][1]+ +e[1][1])/2];
            } function S(e, t, n, r) {
              e.on('start.zoom', (function() {
                x(this, arguments).event(r).start();
              })).on('interrupt.zoom end.zoom', (function() {
                x(this, arguments).event(r).end();
              })).tween('zoom', (function() {
                const e=this; const a=arguments; const i=x(e, a).event(r); const l=o.apply(e, a); const u=null==n?w(l):'function'==typeof n?n.apply(e, a):n; const s=Math.max(l[1][0]-l[0][0], l[1][1]-l[0][1]); const c=e.__zoom; const f='function'==typeof t?t.apply(e, a):t; const p=d(c.invert(u).concat(s/c.k), f.invert(u).concat(s/f.k)); return function(e) {
                  if (1===e)e=f; else {
                    const t=p(e); const n=s/t[2]; e=new Ul(n, u[0]-t[0]*n, u[1]-t[1]*n);
                  }i.zoom(null, e);
                };
              }));
            } function x(e, t, n) {
              return !n&&e.__zooming||new E(e, t);
            } function E(e, t) {
              this.that=e, this.args=t, this.active=0, this.sourceEvent=null, this.extent=o.apply(e, t), this.taps=0;
            } function _(e, ...t) {
              if (r.apply(this, arguments)) {
                const n=x(this, t).event(e); const o=this.__zoom; const l=Math.max(u[0], Math.min(u[1], o.k*Math.pow(2, i.apply(this, arguments)))); const c=Ha(e); if (n.wheel)n.mouse[0][0]===c[0]&&n.mouse[0][1]===c[1]||(n.mouse[1]=o.invert(n.mouse[0]=c)), clearTimeout(n.wheel); else {
                  if (o.k===l) return; n.mouse=[c, o.invert(c)], vi(this), n.start();
                }Hl(e), n.wheel=setTimeout((function() {
                  n.wheel=null, n.end();
                }), h), n.zoom('mouse', a(b(v(o, l), n.mouse[0], n.mouse[1]), n.extent, s));
              }
            } function k(e, ...t) {
              if (!n&&r.apply(this, arguments)) {
                const o=e.currentTarget; const i=x(this, t, !0).event(e); var l=za(e.view).on('mousemove.zoom', (function(e) {
                  if (Hl(e), !i.moved) {
                    const t=e.clientX-c; const n=e.clientY-d; i.moved=t*t+n*n>m;
                  }i.event(e).zoom('mouse', a(b(i.that.__zoom, i.mouse[0]=Ha(e, o), i.mouse[1]), i.extent, s));
                }), !0).on('mouseup.zoom', (function(e) {
                  l.on('mousemove.zoom mouseup.zoom', null), Ua(e.view, i.moved), Hl(e), i.event(e).end();
                }), !0); const u=Ha(e, o); var c=e.clientX; var d=e.clientY; qa(e.view), $l(e), i.mouse=[u, this.__zoom.invert(u)], vi(this), i.start();
              }
            } function C(e, ...t) {
              if (r.apply(this, arguments)) {
                const n=this.__zoom; const i=Ha(e.changedTouches?e.changedTouches[0]:e, this); const l=n.invert(i); const u=n.k*(e.shiftKey?.5:2); const d=a(b(v(n, u), i, l), o.apply(this, t), s); Hl(e), c>0?za(this).transition().duration(c).call(S, d, i, e):za(this).call(y.transform, d, i, e);
              }
            } function O(n, ...o) {
              if (r.apply(this, arguments)) {
                let a; let i; let l; let u; const s=n.touches; const c=s.length; const d=x(this, o, n.changedTouches.length===c).event(n); for ($l(n), i=0; i<c; ++i)u=[u=Ha(l=s[i], this), this.__zoom.invert(u), l.identifier], d.touch0?d.touch1||d.touch0[2]===u[2]||(d.touch1=u, d.taps=0):(d.touch0=u, a=!0, d.taps=1+!!e); e&&(e=clearTimeout(e)), a&&(d.taps<2&&(t=u[0], e=setTimeout((function() {
                  e=null;
                }), p)), vi(this), d.start());
              }
            } function N(e, ...t) {
              if (this.__zooming) {
                let n; let r; let o; let i; const l=x(this, t).event(e); const u=e.changedTouches; const c=u.length; for (Hl(e), n=0; n<c; ++n)o=Ha(r=u[n], this), l.touch0&&l.touch0[2]===r.identifier?l.touch0[0]=o:l.touch1&&l.touch1[2]===r.identifier&&(l.touch1[0]=o); if (r=l.that.__zoom, l.touch1) {
                  const d=l.touch0[0]; const f=l.touch0[1]; const p=l.touch1[0]; const h=l.touch1[1]; var m=(m=p[0]-d[0])*m+(m=p[1]-d[1])*m; var g=(g=h[0]-f[0])*g+(g=h[1]-f[1])*g; r=v(r, Math.sqrt(m/g)), o=[(d[0]+p[0])/2, (d[1]+p[1])/2], i=[(f[0]+h[0])/2, (f[1]+h[1])/2];
                } else {
                  if (!l.touch0) return; o=l.touch0[0], i=l.touch0[1];
                }l.zoom('touch', a(b(r, o, i), l.extent, s));
              }
            } function M(e, ...r) {
              if (this.__zooming) {
                let o; let a; const i=x(this, r).event(e); const l=e.changedTouches; const u=l.length; for ($l(e), n&&clearTimeout(n), n=setTimeout((function() {
                  n=null;
                }), p), o=0; o<u; ++o)a=l[o], i.touch0&&i.touch0[2]===a.identifier?delete i.touch0:i.touch1&&i.touch1[2]===a.identifier&&delete i.touch1; if (i.touch1&&!i.touch0&&(i.touch0=i.touch1, delete i.touch1), i.touch0)i.touch0[1]=this.__zoom.invert(i.touch0[0]); else if (i.end(), 2===i.taps&&(a=Ha(a, this), Math.hypot(t[0]-a[0], t[1]-a[1])<g)) {
                  const s=za(this).on('dblclick.zoom'); s&&s.apply(this, arguments);
                }
              }
            } return y.transform=function(e, t, n, r) {
              const o=e.selection?e.selection():e; o.property('__zoom', Kl), e!==o?S(e, t, n, r):o.interrupt().each((function() {
                x(this, arguments).event(r).start().zoom(null, 'function'==typeof t?t.apply(this, arguments):t).end();
              }));
            }, y.scaleBy=function(e, t, n, r) {
              y.scaleTo(e, (function() {
                return this.__zoom.k*('function'==typeof t?t.apply(this, arguments):t);
              }), n, r);
            }, y.scaleTo=function(e, t, n, r) {
              y.transform(e, (function() {
                const e=o.apply(this, arguments); const r=this.__zoom; const i=null==n?w(e):'function'==typeof n?n.apply(this, arguments):n; const l=r.invert(i); const u='function'==typeof t?t.apply(this, arguments):t; return a(b(v(r, u), i, l), e, s);
              }), n, r);
            }, y.translateBy=function(e, t, n, r) {
              y.transform(e, (function() {
                return a(this.__zoom.translate('function'==typeof t?t.apply(this, arguments):t, 'function'==typeof n?n.apply(this, arguments):n), o.apply(this, arguments), s);
              }), null, r);
            }, y.translateTo=function(e, t, n, r, i) {
              y.transform(e, (function() {
                const e=o.apply(this, arguments); const i=this.__zoom; const l=null==r?w(e):'function'==typeof r?r.apply(this, arguments):r; return a(Bl.translate(l[0], l[1]).scale(i.k).translate('function'==typeof t?-t.apply(this, arguments):-t, 'function'==typeof n?-n.apply(this, arguments):-n), e, s);
              }), r, i);
            }, E.prototype={event: function(e) {
              return e&&(this.sourceEvent=e), this;
            }, start: function() {
              return 1==++this.active&&(this.that.__zooming=this, this.emit('start')), this;
            }, zoom: function(e, t) {
              return this.mouse&&'mouse'!==e&&(this.mouse[1]=t.invert(this.mouse[0])), this.touch0&&'touch'!==e&&(this.touch0[1]=t.invert(this.touch0[0])), this.touch1&&'touch'!==e&&(this.touch1[1]=t.invert(this.touch1[0])), this.that.__zoom=t, this.emit('zoom'), this;
            }, end: function() {
              return 0==--this.active&&(delete this.that.__zooming, this.emit('end')), this;
            }, emit: function(e) {
              const t=za(this.that).datum(); f.call(e, this.that, new ql(e, {sourceEvent: this.sourceEvent, target: y, type: e, transform: this.that.__zoom, dispatch: f}), t);
            }}, y.wheelDelta=function(e) {
              return arguments.length?(i='function'==typeof e?e:Fl(+e), y):i;
            }, y.filter=function(e) {
              return arguments.length?(r='function'==typeof e?e:Fl(!!e), y):r;
            }, y.touchable=function(e) {
              return arguments.length?(l='function'==typeof e?e:Fl(!!e), y):l;
            }, y.extent=function(e) {
              return arguments.length?(o='function'==typeof e?e:Fl([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), y):o;
            }, y.scaleExtent=function(e) {
              return arguments.length?(u[0]=+e[0], u[1]=+e[1], y):[u[0], u[1]];
            }, y.translateExtent=function(e) {
              return arguments.length?(s[0][0]=+e[0][0], s[1][0]=+e[1][0], s[0][1]=+e[0][1], s[1][1]=+e[1][1], y):[[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
            }, y.constrain=function(e) {
              return arguments.length?(a=e, y):a;
            }, y.duration=function(e) {
              return arguments.length?(c=+e, y):c;
            }, y.interpolate=function(e) {
              return arguments.length?(d=e, y):d;
            }, y.on=function() {
              const e=f.on.apply(f, arguments); return e===f?y:e;
            }, y.clickDistance=function(e) {
              return arguments.length?(m=(e=+e)*e, y):Math.sqrt(m);
            }, y.tapDistance=function(e) {
              return arguments.length?(g=+e, y):g;
            }, y;
          }().scaleExtent([m, g]).translateExtent(h); const n=za(C.current).call(t); const r=Bl.translate(p.x, p.y).scale(hu(p.zoom, m, g)); const o=[[0, 0], [e.width, e.height]]; const a=t.constrain()(r, o, h); t.transform(n, a), t.wheelDelta(pc), E.setState({d3Zoom: t, d3Selection: n, d3ZoomHandler: n.on('wheel.zoom'), transform: [a.x, a.y, a.k], domNode: C.current.closest('.react-flow')});
        }
      }), []), (0, e.useEffect)((()=>{
        M&&N&&(!l||R||T?void 0!==P&&M.on('wheel.zoom', (function(e, t) {
          if (!v||dc(e, w)) return null; e.preventDefault(), P.call(this, e, t);
        }), {passive: !1}):M.on('wheel.zoom', ((e)=>{
          if (dc(e, w)) return !1; e.preventDefault(), e.stopImmediatePropagation(); const o=M.property('__zoom').k||1; const a=Mu(); if (e.ctrlKey&&i&&a) {
            const t=Ha(e); const n=pc(e); const r=o*Math.pow(2, n); return void N.scaleTo(M, r, t, e);
          } const l=1===e.deltaMode?20:1; let c=s===zu.Vertical?0:e.deltaX*l; let d=s===zu.Horizontal?0:e.deltaY*l; !a&&e.shiftKey&&s!==zu.Vertical&&(c=e.deltaY*l, d=0), N.translateBy(M, -c/o*u, -d/o*u, {internal: !0}); const f=cc(M.property('__zoom')); const {onViewportChangeStart: p, onViewportChange: h, onViewportChangeEnd: m}=E.getState(); clearTimeout(z.current), I.current||(I.current=!0, n?.(e, f), p?.(f)), I.current&&(t?.(e, f), h?.(f), z.current=setTimeout((()=>{
            r?.(e, f), m?.(f), I.current=!1;
          }), 150));
        }), {passive: !1}));
      }), [T, l, s, M, N, P, R, i, v, w, n, t, r]), (0, e.useEffect)((()=>{
        N&&N.on('start', ((e)=>{
          if (!e.sourceEvent||e.sourceEvent.internal) return null; A.current=e.sourceEvent?.button; const {onViewportChangeStart: t}=E.getState(); const r=cc(e.transform); _.current=!0, O.current=r, 'mousedown'===e.sourceEvent?.type&&E.setState({paneDragging: !0}), t?.(r), n?.(e.sourceEvent, r);
        }));
      }), [N, n]), (0, e.useEffect)((()=>{
        N&&(T&&!_.current?N.on('zoom', null):T||N.on('zoom', ((e)=>{
          const {onViewportChange: n}=E.getState(); if (E.setState({transform: [e.transform.x, e.transform.y, e.transform.k]}), k.current=!(!o||!fc(f, A.current??0)), (t||n)&&!e.sourceEvent?.internal) {
            const r=cc(e.transform); n?.(r), t?.(e.sourceEvent, r);
          }
        })));
      }), [T, N, t, f, o]), (0, e.useEffect)((()=>{
        N&&N.on('end', ((e)=>{
          if (!e.sourceEvent||e.sourceEvent.internal) return null; const {onViewportChangeEnd: t}=E.getState(); if (_.current=!1, E.setState({paneDragging: !1}), o&&fc(f, A.current??0)&&!k.current&&o(e.sourceEvent), k.current=!1, (r||t)&&(n=O.current, a=e.transform, n.x!==a.x||n.y!==a.y||n.zoom!==a.k)) {
            const n=cc(e.transform); O.current=n, clearTimeout(x.current), x.current=setTimeout((()=>{
              t?.(n), r?.(e.sourceEvent, n);
            }), l?150:0);
          } let n; let a;
        }));
      }), [N, l, f, r, o]), (0, e.useEffect)((()=>{
        N&&N.filter(((e)=>{
          const t=R||a; const n=i&&e.ctrlKey; if ((!0===f||Array.isArray(f)&&f.includes(1))&&1===e.button&&'mousedown'===e.type&&(dc(e, 'react-flow__node')||dc(e, 'react-flow__edge'))) return !0; if (!(f||t||l||c||i)) return !1; if (T) return !1; if (!c&&'dblclick'===e.type) return !1; if (dc(e, w)&&'wheel'===e.type) return !1; if (dc(e, S)&&('wheel'!==e.type||l&&'wheel'===e.type&&!R)) return !1; if (!i&&e.ctrlKey&&'wheel'===e.type) return !1; if (!t&&!l&&!n&&'wheel'===e.type) return !1; if (!f&&('mousedown'===e.type||'touchstart'===e.type)) return !1; if (Array.isArray(f)&&!f.includes(e.button)&&('mousedown'===e.type||'touchstart'===e.type)) return !1; const r=Array.isArray(f)&&f.includes(e.button)||!e.button||e.button<=1; return (!e.ctrlKey||'wheel'===e.type)&&r;
        }));
      }), [T, N, a, i, l, c, f, d, R]), e.createElement('div', {className: 'react-flow__renderer', ref: C, style: sc}, b);
    }; const gc=(e)=>({userSelectionActive: e.userSelectionActive, userSelectionRect: e.userSelectionRect}); function yc() {
      const {userSelectionActive: t, userSelectionRect: n}=lu(gc, go); return t&&n?e.createElement('div', {className: 'react-flow__selection react-flow__container', style: {width: n.width, height: n.height, transform: `translate(${n.x}px, ${n.y}px)`}}):null;
    } function vc(e, t) {
      const n=e.find(((e)=>e.id===t.parentNode)); if (n) {
        const e=t.position.x+t.width-n.width; const r=t.position.y+t.height-n.height; if (e>0||r>0||t.position.x<0||t.position.y<0) {
          if (n.style={...n.style}||{}, n.style.width=n.style.width??n.width, n.style.height=n.style.height??n.height, e>0&&(n.style.width+=e), r>0&&(n.style.height+=r), t.position.x<0) {
            const e=Math.abs(t.position.x); n.position.x=n.position.x-e, n.style.width+=e, t.position.x=0;
          } if (t.position.y<0) {
            const e=Math.abs(t.position.y); n.position.y=n.position.y-e, n.style.height+=e, t.position.y=0;
          }n.width=n.style.width, n.height=n.style.height;
        }
      }
    } function bc(e, t) {
      if (e.some(((e)=>'reset'===e.type))) return e.filter(((e)=>'reset'===e.type)).map(((e)=>e.item)); const n=e.filter(((e)=>'add'===e.type)).map(((e)=>e.item)); return t.reduce(((t, n)=>{
        const r=e.filter(((e)=>e.id===n.id)); if (0===r.length) return t.push(n), t; const o={...n}; for (const e of r) {
          if (e) {
            switch (e.type) {
              case 'select': o.selected=e.selected; break; case 'position': void 0!==e.position&&(o.position=e.position), void 0!==e.positionAbsolute&&(o.positionAbsolute=e.positionAbsolute), void 0!==e.dragging&&(o.dragging=e.dragging), o.expandParent&&vc(t, o); break; case 'dimensions': void 0!==e.dimensions&&(o.width=e.dimensions.width, o.height=e.dimensions.height), void 0!==e.updateStyle&&(o.style={...o.style||{}, ...e.dimensions}), 'boolean'==typeof e.resizing&&(o.resizing=e.resizing), o.expandParent&&vc(t, o); break; case 'remove': return t;
            }
          }
        } return t.push(o), t;
      }), n);
    } function wc(e, t) {
      return bc(e, t);
    } const Sc=(e, t)=>({id: e, type: 'select', selected: t}); function xc(e, t) {
      return e.reduce(((e, n)=>{
        const r=t.includes(n.id); return !n.selected&&r?(n.selected=!0, e.push(Sc(n.id, !0))):n.selected&&!r&&(n.selected=!1, e.push(Sc(n.id, !1))), e;
      }), []);
    } const Ec=(e, t)=>(n)=>{
      n.target===t.current&&e?.(n);
    }; const _c=(e)=>({userSelectionActive: e.userSelectionActive, elementsSelectable: e.elementsSelectable, dragging: e.paneDragging}); const kc=(0, e.memo)((({isSelecting: t, selectionMode: n=Du.Full, panOnDrag: r, onSelectionStart: o, onSelectionEnd: a, onPaneClick: i, onPaneContextMenu: l, onPaneScroll: u, onPaneMouseEnter: s, onPaneMouseMove: c, onPaneMouseLeave: d, children: f})=>{
      const p=(0, e.useRef)(null); const h=uu(); const m=(0, e.useRef)(0); const g=(0, e.useRef)(0); const y=(0, e.useRef)(); const {userSelectionActive: v, elementsSelectable: b, dragging: w}=lu(_c, go); const S=()=>{
        h.setState({userSelectionActive: !1, userSelectionRect: null}), m.current=0, g.current=0;
      }; const x=(e)=>{
        i?.(e), h.getState().resetSelectedElements(), h.setState({nodesSelectionActive: !1});
      }; const E=u?(e)=>u(e):void 0; const _=b&&(t||v); return e.createElement('div', {className: lo(['react-flow__pane', {dragging: w, selection: t}]), onClick: _?void 0:Ec(x, p), onContextMenu: Ec(((e)=>{
Array.isArray(r)&&r?.includes(2)?e.preventDefault():l?.(e);
      }), p), onWheel: Ec(E, p), onMouseEnter: _?void 0:s, onMouseDown: _?(e)=>{
        const {resetSelectedElements: n, domNode: r}=h.getState(); if (y.current=r?.getBoundingClientRect(), !b||!t||0!==e.button||e.target!==p.current||!y.current) return; const {x: a, y: i}=Nu(e, y.current); n(), h.setState({userSelectionRect: {width: 0, height: 0, startX: a, startY: i, x: a, y: i}}), o?.(e);
      }:void 0, onMouseMove: _?(e)=>{
        const {userSelectionRect: r, nodeInternals: o, edges: a, transform: i, onNodesChange: l, onEdgesChange: u, nodeOrigin: s, getNodes: c}=h.getState(); if (!t||!y.current||!r) return; h.setState({userSelectionActive: !0, nodesSelectionActive: !1}); const d=Nu(e, y.current); const f=r.startX??0; const p=r.startY??0; const v={...r, x: d.x<f?d.x:f, y: d.y<p?d.y:p, width: Math.abs(d.x-f), height: Math.abs(d.y-p)}; const b=c(); const w=ls(o, v, i, n===Du.Partial, !0, s); const S=us(w, a).map(((e)=>e.id)); const x=w.map(((e)=>e.id)); if (m.current!==x.length) {
          m.current=x.length; const e=xc(b, x); e.length&&l?.(e);
        } if (g.current!==S.length) {
          g.current=S.length; const e=xc(a, S); e.length&&u?.(e);
        }h.setState({userSelectionRect: v});
      }:c, onMouseUp: _?(e)=>{
        if (0!==e.button) return; const {userSelectionRect: t}=h.getState(); !v&&t&&e.target===p.current&&x?.(e), h.setState({nodesSelectionActive: m.current>0}), S(), a?.(e);
      }:void 0, onMouseLeave: _?(e)=>{
        v&&(h.setState({nodesSelectionActive: m.current>0}), a?.(e)), S();
      }:d, ref: p, style: sc}, f, e.createElement(yc, null));
    })); function Cc(e, t) {
      if (!e.parentNode) return !1; const n=t.get(e.parentNode); return !!n&&(!!n.selected||Cc(n, t));
    } function Oc(e, t, n) {
      let r=e; do {
        if (r?.matches(t)) return !0; if (r===n.current) return !1; r=r.parentElement;
      } while (r); return !1;
    } function Nc(e, t, n, r) {
      return Array.from(e.values()).filter(((n)=>(n.selected||n.id===r)&&(!n.parentNode||!Cc(n, e))&&(n.draggable||t&&void 0===n.draggable))).map(((e)=>({id: e.id, position: e.position||{x: 0, y: 0}, positionAbsolute: e.positionAbsolute||{x: 0, y: 0}, distance: {x: n.x-(e.positionAbsolute?.x??0), y: n.y-(e.positionAbsolute?.y??0)}, delta: {x: 0, y: 0}, extent: e.extent, parentNode: e.parentNode, width: e.width, height: e.height, expandParent: e.expandParent})));
    } function Mc(e, t, n, r, o=[0, 0], a) {
      const i=function(e, t) {
        return t&&'parent'!==t?[t[0], [t[1][0]-(e.width||0), t[1][1]-(e.height||0)]]:t;
      }(e, e.extent||r); let l=i; if ('parent'!==e.extent||e.expandParent) {
        if (e.extent&&e.parentNode&&'parent'!==e.extent) {
          const t=n.get(e.parentNode); const {x: r, y: a}=as(t, o).positionAbsolute; l=[[e.extent[0][0]+r, e.extent[0][1]+a], [e.extent[1][0]+r, e.extent[1][1]+a]];
        }
      } else if (e.parentNode&&e.width&&e.height) {
        const t=n.get(e.parentNode); const {x: r, y: a}=as(t, o).positionAbsolute; l=t&&xu(r)&&xu(a)&&xu(t.width)&&xu(t.height)?[[r+e.width*o[0], a+e.height*o[1]], [r+t.width-e.width+e.width*o[0], a+t.height-e.height+e.height*o[1]]]:l;
      } else a?.('005', au.error005()), l=i; let u={x: 0, y: 0}; if (e.parentNode) {
        const t=n.get(e.parentNode); u=as(t, o).positionAbsolute;
      } const s=l&&'parent'!==l?mu(t, l):t; return {position: {x: s.x-u.x, y: s.y-u.y}, positionAbsolute: s};
    } function Pc({nodeId: e, dragItems: t, nodeInternals: n}) {
      const r=t.map(((e)=>({...n.get(e.id), position: e.position, positionAbsolute: e.positionAbsolute}))); return [e?r.find(((t)=>t.id===e)):r[0], r];
    }kc.displayName='Pane'; const Tc=(e, t, n, r)=>{
      const o=t.querySelectorAll(e); if (!o||!o.length) return null; const a=Array.from(o); const i=t.getBoundingClientRect(); const l=i.width*r[0]; const u=i.height*r[1]; return a.map(((e)=>{
        const t=e.getBoundingClientRect(); return {id: e.getAttribute('data-handleid'), position: e.getAttribute('data-handlepos'), x: (t.left-i.left-l)/n, y: (t.top-i.top-u)/n, ...pu(e)};
      }));
    }; function Rc(e, t, n) {
      return void 0===n?n:(r)=>{
        const o=t().nodeInternals.get(e); o&&n(r, {...o});
      };
    } function Ac({id: e, store: t, unselect: n=!1, nodeRef: r}) {
      const {addSelectedNodes: o, unselectNodesAndEdges: a, multiSelectionActive: i, nodeInternals: l, onError: u}=t.getState(); const s=l.get(e); s?(t.setState({nodesSelectionActive: !1}), s.selected?(n||s.selected&&i)&&(a({nodes: [s], edges: []}), requestAnimationFrame((()=>r?.current?.blur()))):o([e])):u?.('012', au.error012(e));
    } function Ic(e) {
      return (t, n, r)=>e?.(t, r);
    } function zc({nodeRef: t, disabled: n=!1, noDragClassName: r, handleSelector: o, nodeId: a, isSelectable: i, selectNodesOnDrag: l}) {
      const u=uu(); const [s, c]=(0, e.useState)(!1); const d=(0, e.useRef)([]); const f=(0, e.useRef)({x: null, y: null}); const p=(0, e.useRef)(0); const h=(0, e.useRef)(null); const m=(0, e.useRef)({x: 0, y: 0}); const g=(0, e.useRef)(null); const y=(0, e.useRef)(!1); const v=(0, e.useRef)(!1); const b=function() {
        const t=uu(); return (0, e.useCallback)((({sourceEvent: e})=>{
          const {transform: n, snapGrid: r, snapToGrid: o}=t.getState(); const a=e.touches?e.touches[0].clientX:e.clientX; const i=e.touches?e.touches[0].clientY:e.clientY; const l={x: (a-n[0])/n[2], y: (i-n[1])/n[2]}; return {xSnapped: o?r[0]*Math.round(l.x/r[0]):l.x, ySnapped: o?r[1]*Math.round(l.y/r[1]):l.y, ...l};
        }), []);
      }(); return (0, e.useEffect)((()=>{
        if (t?.current) {
          const e=za(t.current); const s=({x: e, y: t})=>{
            const {nodeInternals: n, onNodeDrag: r, onSelectionDrag: o, updateNodePositions: i, nodeExtent: l, snapGrid: s, snapToGrid: p, nodeOrigin: h, onError: m}=u.getState(); f.current={x: e, y: t}; let y=!1; let v={x: 0, y: 0, x2: 0, y2: 0}; if (d.current.length>1&&l) {
              const e=is(d.current, h); v=bu(e);
            } if (d.current=d.current.map(((r)=>{
              const o={x: e-r.distance.x, y: t-r.distance.y}; p&&(o.x=s[0]*Math.round(o.x/s[0]), o.y=s[1]*Math.round(o.y/s[1])); const a=[[l[0][0], l[0][1]], [l[1][0], l[1][1]]]; d.current.length>1&&l&&!r.extent&&(a[0][0]=r.positionAbsolute.x-v.x+l[0][0], a[1][0]=r.positionAbsolute.x+(r.width??0)-v.x2+l[1][0], a[0][1]=r.positionAbsolute.y-v.y+l[0][1], a[1][1]=r.positionAbsolute.y+(r.height??0)-v.y2+l[1][1]); const i=Mc(r, o, n, a, h, m); return y=y||r.position.x!==i.position.x||r.position.y!==i.position.y, r.position=i.position, r.positionAbsolute=i.positionAbsolute, r;
            })), !y) return; i(d.current, !0, !0), c(!0); const b=a?r:Ic(o); if (b&&g.current) {
              const [e, t]=Pc({nodeId: a, dragItems: d.current, nodeInternals: n}); b(g.current, e, t);
            }
          }; const w=()=>{
            if (!h.current) return; const [e, t]=yu(m.current, h.current); if (0!==e||0!==t) {
              const {transform: n, panBy: r}=u.getState(); f.current.x=(f.current.x??0)-e/n[2], f.current.y=(f.current.y??0)-t/n[2], r({x: e, y: t})&&s(f.current);
            }p.current=requestAnimationFrame(w);
          }; const S=(e)=>{
            const {nodeInternals: n, multiSelectionActive: r, nodesDraggable: o, unselectNodesAndEdges: s, onNodeDragStart: c, onSelectionDragStart: p}=u.getState(); v.current=!0; const h=a?c:Ic(p); l&&i||r||!a||n.get(a)?.selected||s(), a&&i&&l&&Ac({id: a, store: u, nodeRef: t}); const m=b(e); if (f.current=m, d.current=Nc(n, o, m, a), h&&d.current) {
              const [t, r]=Pc({nodeId: a, dragItems: d.current, nodeInternals: n}); h(e.sourceEvent, t, r);
            }
          }; if (!n) {
            const n=function() {
              let e; let t; let n; let r; let o=Jl; let a=eu; let i=tu; let l=nu; const u={}; const s=xo('start', 'drag', 'end'); let c=0; let d=0; function f(e) {
                e.on('mousedown.drag', p).filter(l).on('touchstart.drag', g).on('touchmove.drag', y, Da).on('touchend.drag touchcancel.drag', v).style('touch-action', 'none').style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
              } function p(i, l) {
                if (!r&&o.call(this, i, l)) {
                  const u=b(this, a.call(this, i, l), i, l, 'mouse'); u&&(za(i.view).on('mousemove.drag', h, La).on('mouseup.drag', m, La), qa(i.view), ja(i), n=!1, e=i.clientX, t=i.clientY, u('start', i));
                }
              } function h(r) {
                if (Fa(r), !n) {
                  const o=r.clientX-e; const a=r.clientY-t; n=o*o+a*a>d;
                }u.mouse('drag', r);
              } function m(e) {
                za(e.view).on('mousemove.drag mouseup.drag', null), Ua(e.view, n), Fa(e), u.mouse('end', e);
              } function g(e, t) {
                if (o.call(this, e, t)) {
                  let n; let r; const i=e.changedTouches; const l=a.call(this, e, t); const u=i.length; for (n=0; n<u; ++n)(r=b(this, l, e, t, i[n].identifier, i[n]))&&(ja(e), r('start', e, i[n]));
                }
              } function y(e) {
                let t; let n; const r=e.changedTouches; const o=r.length; for (t=0; t<o; ++t)(n=u[r[t].identifier])&&(Fa(e), n('drag', e, r[t]));
              } function v(e) {
                let t; let n; const o=e.changedTouches; const a=o.length; for (r&&clearTimeout(r), r=setTimeout((function() {
                  r=null;
                }), 500), t=0; t<a; ++t)(n=u[o[t].identifier])&&(ja(e), n('end', e, o[t]));
              } function b(e, t, n, r, o, a) {
                let l; let d; let p; const h=s.copy(); let m=Ha(a||n, t); if (null!=(p=i.call(e, new Zl('beforestart', {sourceEvent: n, target: f, identifier: o, active: c, x: m[0], y: m[1], dx: 0, dy: 0, dispatch: h}), r))) {
                  return l=p.x-m[0]||0, d=p.y-m[1]||0, function n(a, i, s) {
                    let g; const y=m; switch (a) {
                      case 'start': u[o]=n, g=c++; break; case 'end': delete u[o], --c; case 'drag': m=Ha(s||i, t), g=c;
                    }h.call(a, e, new Zl(a, {sourceEvent: i, subject: p, target: f, identifier: o, active: g, x: m[0]+l, y: m[1]+d, dx: m[0]-y[0], dy: m[1]-y[1], dispatch: h}), r);
                  };
                }
              } return f.filter=function(e) {
                return arguments.length?(o='function'==typeof e?e:Gl(!!e), f):o;
              }, f.container=function(e) {
                return arguments.length?(a='function'==typeof e?e:Gl(e), f):a;
              }, f.subject=function(e) {
                return arguments.length?(i='function'==typeof e?e:Gl(e), f):i;
              }, f.touchable=function(e) {
                return arguments.length?(l='function'==typeof e?e:Gl(!!e), f):l;
              }, f.on=function() {
                const e=s.on.apply(s, arguments); return e===s?f:e;
              }, f.clickDistance=function(e) {
                return arguments.length?(d=(e=+e)*e, f):Math.sqrt(d);
              }, f;
            }().on('start', ((e)=>{
              const {domNode: t, nodeDragThreshold: n}=u.getState(); 0===n&&S(e); const r=b(e); f.current=r, h.current=t?.getBoundingClientRect()||null, m.current=Nu(e.sourceEvent, h.current);
            })).on('drag', ((e)=>{
              const t=b(e); const {autoPanOnNodeDrag: n, nodeDragThreshold: r}=u.getState(); if (!y.current&&v.current&&n&&(y.current=!0, w()), !v.current) {
                const n=t.xSnapped-(f?.current?.x??0); const o=t.ySnapped-(f?.current?.y??0); Math.sqrt(n*n+o*o)>r&&S(e);
              }(f.current.x!==t.xSnapped||f.current.y!==t.ySnapped)&&d.current&&v.current&&(g.current=e.sourceEvent, m.current=Nu(e.sourceEvent, h.current), s(t));
            })).on('end', ((e)=>{
              if (v.current&&(c(!1), y.current=!1, v.current=!1, cancelAnimationFrame(p.current), d.current)) {
                const {updateNodePositions: t, nodeInternals: n, onNodeDragStop: r, onSelectionDragStop: o}=u.getState(); const i=a?r:Ic(o); if (t(d.current, !1, !1), i) {
                  const [t, r]=Pc({nodeId: a, dragItems: d.current, nodeInternals: n}); i(e.sourceEvent, t, r);
                }
              }
            })).filter(((e)=>{
              const n=e.target; return !e.button&&(!r||!Oc(n, `.${r}`, t))&&(!o||Oc(n, o, t));
            })); return e.call(n), ()=>{
              e.on('.drag', null);
            };
          }e.on('.drag', null);
        }
      }), [t, n, r, o, i, u, a, l, b]), s;
    } function Dc() {
      const t=uu(); return (0, e.useCallback)(((e)=>{
        const {nodeInternals: n, nodeExtent: r, updateNodePositions: o, getNodes: a, snapToGrid: i, snapGrid: l, onError: u, nodesDraggable: s}=t.getState(); const c=a().filter(((e)=>e.selected&&(e.draggable||s&&void 0===e.draggable))); const d=i?l[0]:5; const f=i?l[1]:5; const p=e.isShiftPressed?4:1; const h=e.x*d*p; const m=e.y*f*p; o(c.map(((e)=>{
          if (e.positionAbsolute) {
            const t={x: e.positionAbsolute.x+h, y: e.positionAbsolute.y+m}; i&&(t.x=l[0]*Math.round(t.x/l[0]), t.y=l[1]*Math.round(t.y/l[1])); const {positionAbsolute: o, position: a}=Mc(e, t, n, r, void 0, u); e.position=a, e.positionAbsolute=o;
          } return e;
        })), !0, !1);
      }), []);
    } const Lc={ArrowUp: {x: 0, y: -1}, ArrowDown: {x: 0, y: 1}, ArrowLeft: {x: -1, y: 0}, ArrowRight: {x: 1, y: 0}}; const jc=(t)=>{
      const n=({id: n, type: r, data: o, xPos: a, yPos: i, xPosOrigin: l, yPosOrigin: u, selected: s, onClick: c, onMouseEnter: d, onMouseMove: f, onMouseLeave: p, onContextMenu: h, onDoubleClick: m, style: g, className: y, isDraggable: v, isSelectable: b, isConnectable: w, isFocusable: S, selectNodesOnDrag: x, sourcePosition: E, targetPosition: _, hidden: k, resizeObserver: C, dragHandle: O, zIndex: N, isParent: M, noDragClassName: P, noPanClassName: T, initialized: R, disableKeyboardA11y: A, ariaLabel: I, rfId: z, hasHandleBounds: D})=>{
        const L=uu(); const j=(0, e.useRef)(null); const F=(0, e.useRef)(E); const q=(0, e.useRef)(_); const U=(0, e.useRef)(r); const B=b||v||c||d||f||p; const $=Dc(); const H=Rc(n, L.getState, d); const W=Rc(n, L.getState, f); const V=Rc(n, L.getState, p); const K=Rc(n, L.getState, h); const Q=Rc(n, L.getState, m); (0, e.useEffect)((()=>()=>{
          j.current&&C?.unobserve(j.current);
        }), []), (0, e.useEffect)((()=>{
          if (j.current&&!k) {
            const e=j.current; R&&D||(C?.unobserve(e), C?.observe(e));
          }
        }), [k, R, D]), (0, e.useEffect)((()=>{
          const e=U.current!==r; const t=F.current!==E; const o=q.current!==_; j.current&&(e||t||o)&&(e&&(U.current=r), t&&(F.current=E), o&&(q.current=_), L.getState().updateNodeDimensions([{id: n, nodeElement: j.current, forceUpdate: !0}]));
        }), [n, r, E, _]); const Y=zc({nodeRef: j, disabled: k||!v, noDragClassName: P, handleSelector: O, nodeId: n, isSelectable: b, selectNodesOnDrag: x}); return k?null:e.createElement('div', {'className': lo(['react-flow__node', `react-flow__node-${r}`, {[T]: v}, y, {selected: s, selectable: b, parent: M, dragging: Y}]), 'ref': j, 'style': {zIndex: N, transform: `translate(${l}px,${u}px)`, pointerEvents: B?'all':'none', visibility: R?'visible':'hidden', ...g}, 'data-id': n, 'data-testid': `rf__node-${n}`, 'onMouseEnter': H, 'onMouseMove': W, 'onMouseLeave': V, 'onContextMenu': K, 'onClick': (e)=>{
          const {nodeDragThreshold: t}=L.getState(); if (b&&(!x||!v||t>0)&&Ac({id: n, store: L, nodeRef: j}), c) {
            const t=L.getState().nodeInternals.get(n); t&&c(e, {...t});
          }
        }, 'onDoubleClick': Q, 'onKeyDown': S?(e)=>{
          if (!Cu(e)) {
            if (_u.includes(e.key)&&b) {
              const t='Escape'===e.key; Ac({id: n, store: L, unselect: t, nodeRef: j});
            } else !A&&v&&s&&Object.prototype.hasOwnProperty.call(Lc, e.key)&&(L.setState({ariaLiveMessage: `Moved selected node ${e.key.replace('Arrow', '').toLowerCase()}. New position, x: ${~~a}, y: ${~~i}`}), $({x: Lc[e.key].x, y: Lc[e.key].y, isShiftPressed: e.shiftKey}));
          }
        }:void 0, 'tabIndex': S?0:void 0, 'role': S?'button':void 0, 'aria-describedby': A?void 0:`${Bs}-${z}`, 'aria-label': I}, e.createElement(es, {value: n}, e.createElement(t, {id: n, data: o, type: r, xPos: a, yPos: i, selected: s, isConnectable: w, sourcePosition: E, targetPosition: _, dragging: Y, dragHandle: O, zIndex: N})));
      }; return n.displayName='NodeWrapper', (0, e.memo)(n);
    }; const Fc=(e)=>{
      const t=e.getNodes().filter(((e)=>e.selected)); return {...is(t, e.nodeOrigin), transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`, userSelectionActive: e.userSelectionActive};
    }; const qc=(0, e.memo)((function({onSelectionContextMenu: t, noPanClassName: n, disableKeyboardA11y: r}) {
      const o=uu(); const {width: a, height: i, x: l, y: u, transformString: s, userSelectionActive: c}=lu(Fc, go); const d=Dc(); const f=(0, e.useRef)(null); if ((0, e.useEffect)((()=>{
        r||f.current?.focus({preventScroll: !0});
      }), [r]), zc({nodeRef: f}), c||!a||!i) return null; const p=t?(e)=>{
        const n=o.getState().getNodes().filter(((e)=>e.selected)); t(e, n);
      }:void 0; return e.createElement('div', {className: lo(['react-flow__nodesselection', 'react-flow__container', n]), style: {transform: s}}, e.createElement('div', {ref: f, className: 'react-flow__nodesselection-rect', onContextMenu: p, tabIndex: r?void 0:-1, onKeyDown: r?void 0:(e)=>{
        Object.prototype.hasOwnProperty.call(Lc, e.key)&&d({x: Lc[e.key].x, y: Lc[e.key].y, isShiftPressed: e.shiftKey});
      }, style: {width: a, height: i, top: u, left: l}}));
    })); const Uc=(e)=>e.nodesSelectionActive; const Bc=({children: t, onPaneClick: n, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: a, onPaneContextMenu: i, onPaneScroll: l, deleteKeyCode: u, onMove: s, onMoveStart: c, onMoveEnd: d, selectionKeyCode: f, selectionOnDrag: p, selectionMode: h, onSelectionStart: m, onSelectionEnd: g, multiSelectionKeyCode: y, panActivationKeyCode: v, zoomActivationKeyCode: b, elementsSelectable: w, zoomOnScroll: S, zoomOnPinch: x, panOnScroll: E, panOnScrollSpeed: _, panOnScrollMode: k, zoomOnDoubleClick: C, panOnDrag: O, defaultViewport: N, translateExtent: M, minZoom: P, maxZoom: T, preventScrolling: R, onSelectionContextMenu: A, noWheelClassName: I, noPanClassName: z, disableKeyboardA11y: D})=>{
      const L=lu(Uc); const j=Qs(f); const F=Qs(v); const q=F||O; const U=F||E; const B=j||p&&!0!==q; return (({deleteKeyCode: t, multiSelectionKeyCode: n})=>{
        const r=uu(); const {deleteElements: o}=lc(); const a=Qs(t, uc); const i=Qs(n); (0, e.useEffect)((()=>{
          if (a) {
            const {edges: e, getNodes: t}=r.getState(); const n=t().filter(((e)=>e.selected)); const a=e.filter(((e)=>e.selected)); o({nodes: n, edges: a}), r.setState({nodesSelectionActive: !1});
          }
        }), [a]), (0, e.useEffect)((()=>{
          r.setState({multiSelectionActive: i});
        }), [i]);
      })({deleteKeyCode: u, multiSelectionKeyCode: y}), e.createElement(mc, {onMove: s, onMoveStart: c, onMoveEnd: d, onPaneContextMenu: i, elementsSelectable: w, zoomOnScroll: S, zoomOnPinch: x, panOnScroll: U, panOnScrollSpeed: _, panOnScrollMode: k, zoomOnDoubleClick: C, panOnDrag: !j&&q, defaultViewport: N, translateExtent: M, minZoom: P, maxZoom: T, zoomActivationKeyCode: b, preventScrolling: R, noWheelClassName: I, noPanClassName: z}, e.createElement(kc, {onSelectionStart: m, onSelectionEnd: g, onPaneClick: n, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: a, onPaneContextMenu: i, onPaneScroll: l, panOnDrag: q, isSelecting: !!B, selectionMode: h}, t, L&&e.createElement(qc, {onSelectionContextMenu: A, noPanClassName: z, disableKeyboardA11y: D})));
    }; Bc.displayName='FlowRenderer'; const $c=(0, e.memo)(Bc); function Hc(e) {
      return {input: jc(e.input||Cs), default: jc(e.default||_s), output: jc(e.output||Ns), group: jc(e.group||Ms), ...Object.keys(e).filter(((e)=>!['input', 'default', 'output', 'group'].includes(e))).reduce(((t, n)=>(t[n]=jc(e[n]||_s), t)), {})};
    } const Wc=(e)=>({nodesDraggable: e.nodesDraggable, nodesConnectable: e.nodesConnectable, nodesFocusable: e.nodesFocusable, elementsSelectable: e.elementsSelectable, updateNodeDimensions: e.updateNodeDimensions, onError: e.onError}); const Vc=(t)=>{
      const {nodesDraggable: n, nodesConnectable: r, nodesFocusable: o, elementsSelectable: a, updateNodeDimensions: i, onError: l}=lu(Wc, go); const u=(s=t.onlyRenderVisibleElements, lu((0, e.useCallback)(((e)=>s?ls(e.nodeInternals, {x: 0, y: 0, width: e.width, height: e.height}, e.transform, !0):e.getNodes()), [s]))); let s; const c=(0, e.useRef)(); const d=(0, e.useMemo)((()=>{
        if ('undefined'==typeof ResizeObserver) return null; const e=new ResizeObserver(((e)=>{
          const t=e.map(((e)=>({id: e.target.getAttribute('data-id'), nodeElement: e.target, forceUpdate: !0}))); i(t);
        })); return c.current=e, e;
      }), []); return (0, e.useEffect)((()=>()=>{
        c?.current?.disconnect();
      }), []), e.createElement('div', {className: 'react-flow__nodes', style: sc}, u.map(((i)=>{
        let u=i.type||'default'; t.nodeTypes[u]||(l?.('003', au.error003(u)), u='default'); const s=t.nodeTypes[u]||t.nodeTypes.default; const c=!!(i.draggable||n&&void 0===i.draggable); const f=!!(i.selectable||a&&void 0===i.selectable); const p=!!(i.connectable||r&&void 0===i.connectable); const h=!!(i.focusable||o&&void 0===i.focusable); const m=t.nodeExtent?mu(i.positionAbsolute, t.nodeExtent):i.positionAbsolute; const g=m?.x??0; const y=m?.y??0; const v=(({x: e, y: t, width: n, height: r, origin: o})=>n&&r?o[0]<0||o[1]<0||o[0]>1||o[1]>1?{x: e, y: t}:{x: e-n*o[0], y: t-r*o[1]}:{x: e, y: t})({x: g, y, width: i.width??0, height: i.height??0, origin: t.nodeOrigin}); return e.createElement(s, {key: i.id, id: i.id, className: i.className, style: i.style, type: u, data: i.data, sourcePosition: i.sourcePosition||Fu.Bottom, targetPosition: i.targetPosition||Fu.Top, hidden: i.hidden, xPos: g, yPos: y, xPosOrigin: v.x, yPosOrigin: v.y, selectNodesOnDrag: t.selectNodesOnDrag, onClick: t.onNodeClick, onMouseEnter: t.onNodeMouseEnter, onMouseMove: t.onNodeMouseMove, onMouseLeave: t.onNodeMouseLeave, onContextMenu: t.onNodeContextMenu, onDoubleClick: t.onNodeDoubleClick, selected: !!i.selected, isDraggable: c, isSelectable: f, isConnectable: p, isFocusable: h, resizeObserver: d, dragHandle: i.dragHandle, zIndex: i[Eu]?.z??0, isParent: !!i[Eu]?.isParent, noDragClassName: t.noDragClassName, noPanClassName: t.noPanClassName, initialized: !!i.width&&!!i.height, rfId: t.rfId, disableKeyboardA11y: t.disableKeyboardA11y, ariaLabel: i.ariaLabel, hasHandleBounds: !!i[Eu]?.handleBounds});
      })));
    }; Vc.displayName='NodeRenderer'; const Kc=(0, e.memo)(Vc); const Qc=(e, t, n)=>n===Fu.Left?e-t:n===Fu.Right?e+t:e; const Yc=(e, t, n)=>n===Fu.Top?e-t:n===Fu.Bottom?e+t:e; const Xc='react-flow__edgeupdater'; const Gc=({position: t, centerX: n, centerY: r, radius: o=10, onMouseDown: a, onMouseEnter: i, onMouseOut: l, type: u})=>e.createElement('circle', {onMouseDown: a, onMouseEnter: i, onMouseOut: l, className: lo([Xc, `${Xc}-${u}`]), cx: Qc(n, o, t), cy: Yc(r, o, t), r: o, stroke: 'transparent', fill: 'transparent'}); const Zc=()=>!0; const Jc=(t)=>{
      const n=({id: n, className: r, type: o, data: a, onClick: i, onEdgeDoubleClick: l, selected: u, animated: s, label: c, labelStyle: d, labelShowBg: f, labelBgStyle: p, labelBgPadding: h, labelBgBorderRadius: m, style: g, source: y, target: v, sourceX: b, sourceY: w, targetX: S, targetY: x, sourcePosition: E, targetPosition: _, elementsSelectable: k, hidden: C, sourceHandleId: O, targetHandleId: N, onContextMenu: M, onMouseEnter: P, onMouseMove: T, onMouseLeave: R, edgeUpdaterRadius: A, onEdgeUpdate: I, onEdgeUpdateStart: z, onEdgeUpdateEnd: D, markerEnd: L, markerStart: j, rfId: F, ariaLabel: q, isFocusable: U, isUpdatable: B, pathOptions: $, interactionWidth: H})=>{
        const W=(0, e.useRef)(null); const [V, K]=(0, e.useState)(!1); const [Q, Y]=(0, e.useState)(!1); const X=uu(); const G=(0, e.useMemo)((()=>`url('#${ns(j, F)}')`), [j, F]); const Z=(0, e.useMemo)((()=>`url('#${ns(L, F)}')`), [L, F]); if (C) return null; const J=Tu(n, X.getState, l); const ee=Tu(n, X.getState, M); const te=Tu(n, X.getState, P); const ne=Tu(n, X.getState, T); const re=Tu(n, X.getState, R); const oe=(e, t)=>{
          if (0!==e.button) return; const {edges: r, isValidConnection: o}=X.getState(); const a=t?v:y; const i=(t?N:O)||null; const l=t?'target':'source'; const u=o||Zc; const s=t; const c=r.find(((e)=>e.id===n)); Y(!0), z?.(e, c, l), vs({event: e, handleId: i, nodeId: a, onConnect: (e)=>I?.(c, e), isTarget: s, getState: X.getState, setState: X.setState, isValidConnection: u, edgeUpdaterType: l, onEdgeUpdateEnd: (e)=>{
            Y(!1), D?.(e, c, l);
          }});
        }; const ae=()=>K(!0); const ie=()=>K(!1); const le=!k&&!i; return e.createElement('g', {'className': lo(['react-flow__edge', `react-flow__edge-${o}`, r, {selected: u, animated: s, inactive: le, updating: V}]), 'onClick': (e)=>{
          const {edges: t, addSelectedEdges: r, unselectNodesAndEdges: o, multiSelectionActive: a}=X.getState(); const l=t.find(((e)=>e.id===n)); l&&(k&&(X.setState({nodesSelectionActive: !1}), l.selected&&a?(o({nodes: [], edges: [l]}), W.current?.blur()):r([n])), i&&i(e, l));
        }, 'onDoubleClick': J, 'onContextMenu': ee, 'onMouseEnter': te, 'onMouseMove': ne, 'onMouseLeave': re, 'onKeyDown': U?(e)=>{
          if (_u.includes(e.key)&&k) {
            const {unselectNodesAndEdges: t, addSelectedEdges: r, edges: o}=X.getState(); 'Escape'===e.key?(W.current?.blur(), t({edges: [o.find(((e)=>e.id===n))]})):r([n]);
          }
        }:void 0, 'tabIndex': U?0:void 0, 'role': U?'button':'img', 'data-testid': `rf__edge-${n}`, 'aria-label': null===q?void 0:q||`Edge from ${y} to ${v}`, 'aria-describedby': U?`${$s}-${F}`:void 0, 'ref': W}, !Q&&e.createElement(t, {id: n, source: y, target: v, selected: u, animated: s, label: c, labelStyle: d, labelShowBg: f, labelBgStyle: p, labelBgPadding: h, labelBgBorderRadius: m, data: a, style: g, sourceX: b, sourceY: w, targetX: S, targetY: x, sourcePosition: E, targetPosition: _, sourceHandleId: O, targetHandleId: N, markerStart: G, markerEnd: Z, pathOptions: $, interactionWidth: H}), B&&e.createElement(e.Fragment, null, ('source'===B||!0===B)&&e.createElement(Gc, {position: E, centerX: b, centerY: w, radius: A, onMouseDown: (e)=>oe(e, !0), onMouseEnter: ae, onMouseOut: ie, type: 'source'}), ('target'===B||!0===B)&&e.createElement(Gc, {position: _, centerX: S, centerY: x, radius: A, onMouseDown: (e)=>oe(e, !1), onMouseEnter: ae, onMouseOut: ie, type: 'target'})));
      }; return n.displayName='EdgeWrapper', (0, e.memo)(n);
    }; function ed(e) {
      return {default: Jc(e.default||Zu), straight: Jc(e.bezier||Qu), step: Jc(e.step||Ku), smoothstep: Jc(e.step||Vu), simplebezier: Jc(e.simplebezier||Bu), ...Object.keys(e).filter(((e)=>!['default', 'bezier'].includes(e))).reduce(((t, n)=>(t[n]=Jc(e[n]||Zu), t)), {})};
    } function td(e, t, n=null) {
      const r=(n?.x||0)+t.x; const o=(n?.y||0)+t.y; const a=n?.width||t.width; const i=n?.height||t.height; switch (e) {
        case Fu.Top: return {x: r+a/2, y: o}; case Fu.Right: return {x: r+a, y: o+i/2}; case Fu.Bottom: return {x: r+a/2, y: o+i}; case Fu.Left: return {x: r, y: o+i/2};
      }
    } function nd(e, t) {
      return e?1!==e.length&&t?t&&e.find(((e)=>e.id===t))||null:e[0]:null;
    } function rd(e) {
      const t=e?.[Eu]?.handleBounds||null; const n=t&&e?.width&&e?.height&&void 0!==e?.positionAbsolute?.x&&void 0!==e?.positionAbsolute?.y; return [{x: e?.positionAbsolute?.x||0, y: e?.positionAbsolute?.y||0, width: e?.width||0, height: e?.height||0}, t, !!n];
    } const od=[{level: 0, isMaxLevel: !0, edges: []}]; const ad={[ju.Arrow]: ({color: t='none', strokeWidth: n=1})=>e.createElement('polyline', {style: {stroke: t, strokeWidth: n}, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', points: '-5,-4 0,0 -5,4'}), [ju.ArrowClosed]: ({color: t='none', strokeWidth: n=1})=>e.createElement('polyline', {style: {stroke: t, fill: t, strokeWidth: n}, strokeLinecap: 'round', strokeLinejoin: 'round', points: '-5,-4 0,0 -5,4 -5,-4'})}; const id=({id: t, type: n, color: r, width: o=12.5, height: a=12.5, markerUnits: i='strokeWidth', strokeWidth: l, orient: u='auto-start-reverse'})=>{
      const s=function(t) {
        const n=uu(); return (0, e.useMemo)((()=>Object.prototype.hasOwnProperty.call(ad, t)?ad[t]:(n.getState().onError?.('009', au.error009(t)), null)), [t]);
      }(n); return s?e.createElement('marker', {className: 'react-flow__arrowhead', id: t, markerWidth: `${o}`, markerHeight: `${a}`, viewBox: '-10 -10 20 20', markerUnits: i, orient: u, refX: '0', refY: '0'}, e.createElement(s, {color: r, strokeWidth: l})):null;
    }; const ld=({defaultColor: t, rfId: n})=>{
      const r=lu((0, e.useCallback)((({defaultColor: e, rfId: t})=>(n)=>{
        const r=[]; return n.edges.reduce(((n, o)=>([o.markerStart, o.markerEnd].forEach(((o)=>{
          if (o&&'object'==typeof o) {
            const a=ns(o, t); r.includes(a)||(n.push({id: a, color: o.color||e, ...o}), r.push(a));
          }
        })), n)), []).sort(((e, t)=>e.id.localeCompare(t.id)));
      })({defaultColor: t, rfId: n}), [t, n]), ((e, t)=>!(e.length!==t.length||e.some(((e, n)=>e.id!==t[n].id))))); return e.createElement('defs', null, r.map(((t)=>e.createElement(id, {id: t.id, key: t.id, type: t.type, color: t.color, width: t.width, height: t.height, markerUnits: t.markerUnits, strokeWidth: t.strokeWidth, orient: t.orient}))));
    }; ld.displayName='MarkerDefinitions'; const ud=(0, e.memo)(ld); const sd=(e)=>({nodesConnectable: e.nodesConnectable, edgesFocusable: e.edgesFocusable, edgesUpdatable: e.edgesUpdatable, elementsSelectable: e.elementsSelectable, width: e.width, height: e.height, connectionMode: e.connectionMode, nodeInternals: e.nodeInternals, onError: e.onError}); const cd=({defaultMarkerColor: t, onlyRenderVisibleElements: n, elevateEdgesOnSelect: r, rfId: o, edgeTypes: a, noPanClassName: i, onEdgeUpdate: l, onEdgeContextMenu: u, onEdgeMouseEnter: s, onEdgeMouseMove: c, onEdgeMouseLeave: d, onEdgeClick: f, edgeUpdaterRadius: p, onEdgeDoubleClick: h, onEdgeUpdateStart: m, onEdgeUpdateEnd: g, children: y})=>{
      const {edgesFocusable: v, edgesUpdatable: b, elementsSelectable: w, width: S, height: x, connectionMode: E, nodeInternals: _, onError: k}=lu(sd, go); const C=function(t, n, r) {
        return function(e, t, n=!1) {
          let r=-1; const o=e.reduce(((e, o)=>{
            const a=xu(o.zIndex); let i=a?o.zIndex:0; if (n) {
              const e=t.get(o.target); const n=t.get(o.source); const r=o.selected||e?.selected||n?.selected; const l=Math.max(n?.[Eu]?.z||0, e?.[Eu]?.z||0, 1e3); i=(a?o.zIndex:0)+(r?l:0);
            } return e[i]?e[i].push(o):e[i]=[o], r=i>r?i:r, e;
          }), {}); const a=Object.entries(o).map((([e, t])=>{
            const n=+e; return {edges: t, level: n, isMaxLevel: n===r};
          })); return 0===a.length?od:a;
        }(lu((0, e.useCallback)(((e)=>t?e.edges.filter(((t)=>{
          const r=n.get(t.source); const o=n.get(t.target); return r?.width&&r?.height&&o?.width&&o?.height&&function({sourcePos: e, targetPos: t, sourceWidth: n, sourceHeight: r, targetWidth: o, targetHeight: a, width: i, height: l, transform: u}) {
            const s={x: Math.min(e.x, t.x), y: Math.min(e.y, t.y), x2: Math.max(e.x+n, t.x+o), y2: Math.max(e.y+r, t.y+a)}; s.x===s.x2&&(s.x2+=1), s.y===s.y2&&(s.y2+=1); const c=bu({x: (0-u[0])/u[2], y: (0-u[1])/u[2], width: i/u[2], height: l/u[2]}); const d=Math.max(0, Math.min(c.x2, s.x2)-Math.max(c.x, s.x)); const f=Math.max(0, Math.min(c.y2, s.y2)-Math.max(c.y, s.y)); return Math.ceil(d*f)>0;
          }({sourcePos: r.positionAbsolute||{x: 0, y: 0}, targetPos: o.positionAbsolute||{x: 0, y: 0}, sourceWidth: r.width, sourceHeight: r.height, targetWidth: o.width, targetHeight: o.height, width: e.width, height: e.height, transform: e.transform});
        })):e.edges), [t, n])), n, r);
      }(n, _, r); return S?e.createElement(e.Fragment, null, C.map((({level: n, edges: r, isMaxLevel: y})=>e.createElement('svg', {key: n, style: {zIndex: n}, width: S, height: x, className: 'react-flow__edges react-flow__container'}, y&&e.createElement(ud, {defaultColor: t, rfId: o}), e.createElement('g', null, r.map(((t)=>{
        const [n, r, y]=rd(_.get(t.source)); const [S, x, C]=rd(_.get(t.target)); if (!y||!C) return null; let O=t.type||'default'; a[O]||(k?.('011', au.error011(O)), O='default'); const N=a[O]||a.default; const M=E===Iu.Strict?x.target:(x.target??[]).concat(x.source??[]); const P=nd(r.source, t.sourceHandle); const T=nd(M, t.targetHandle); const R=P?.position||Fu.Bottom; const A=T?.position||Fu.Top; const I=!!(t.focusable||v&&void 0===t.focusable); const z=void 0!==l&&(t.updatable||b&&void 0===t.updatable); if (!P||!T) return k?.('008', au.error008(P, t)), null; const {sourceX: D, sourceY: L, targetX: j, targetY: F}=((e, t, n, r, o, a)=>{
          const i=td(n, e, t); const l=td(a, r, o); return {sourceX: i.x, sourceY: i.y, targetX: l.x, targetY: l.y};
        })(n, P, R, S, T, A); return e.createElement(N, {key: t.id, id: t.id, className: lo([t.className, i]), type: O, data: t.data, selected: !!t.selected, animated: !!t.animated, hidden: !!t.hidden, label: t.label, labelStyle: t.labelStyle, labelShowBg: t.labelShowBg, labelBgStyle: t.labelBgStyle, labelBgPadding: t.labelBgPadding, labelBgBorderRadius: t.labelBgBorderRadius, style: t.style, source: t.source, target: t.target, sourceHandleId: t.sourceHandle, targetHandleId: t.targetHandle, markerEnd: t.markerEnd, markerStart: t.markerStart, sourceX: D, sourceY: L, targetX: j, targetY: F, sourcePosition: R, targetPosition: A, elementsSelectable: w, onEdgeUpdate: l, onContextMenu: u, onMouseEnter: s, onMouseMove: c, onMouseLeave: d, onClick: f, edgeUpdaterRadius: p, onEdgeDoubleClick: h, onEdgeUpdateStart: m, onEdgeUpdateEnd: g, rfId: o, ariaLabel: t.ariaLabel, isFocusable: I, isUpdatable: z, pathOptions: 'pathOptions'in t?t.pathOptions:void 0, interactionWidth: t.interactionWidth});
      })))))), y):null;
    }; cd.displayName='EdgeRenderer'; const dd=(0, e.memo)(cd); const fd=(e)=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`; function pd({children: t}) {
      const n=lu(fd); return e.createElement('div', {className: 'react-flow__viewport react-flow__container', style: {transform: n}}, t);
    } const hd={[Fu.Left]: Fu.Right, [Fu.Right]: Fu.Left, [Fu.Top]: Fu.Bottom, [Fu.Bottom]: Fu.Top}; const md=({nodeId: t, handleType: n, style: r, type: o=Lu.Bezier, CustomComponent: a, connectionStatus: i})=>{
      const {fromNode: l, handleId: u, toX: s, toY: c, connectionMode: d}=lu((0, e.useCallback)(((e)=>({fromNode: e.nodeInternals.get(t), handleId: e.connectionHandleId, toX: (e.connectionPosition.x-e.transform[0])/e.transform[2], toY: (e.connectionPosition.y-e.transform[1])/e.transform[2], connectionMode: e.connectionMode})), [t]), go); const f=l?.[Eu]?.handleBounds; let p=f?.[n]; if (d===Iu.Loose&&(p=p||f?.['source'===n?'target':'source']), !l||!p) return null; const h=u?p.find(((e)=>e.id===u)):p[0]; const m=h?h.x+h.width/2:(l.width??0)/2; const g=h?h.y+h.height/2:l.height??0; const y=(l.positionAbsolute?.x??0)+m; const v=(l.positionAbsolute?.y??0)+g; const b=h?.position; const w=b?hd[b]:null; if (!b||!w) return null; if (a) return e.createElement(a, {connectionLineType: o, connectionLineStyle: r, fromNode: l, fromHandle: h, fromX: y, fromY: v, toX: s, toY: c, fromPosition: b, toPosition: w, connectionStatus: i}); let S=''; const x={sourceX: y, sourceY: v, sourcePosition: b, targetX: s, targetY: c, targetPosition: w}; return o===Lu.Bezier?[S]=Gu(x):o===Lu.Step?[S]=Wu({...x, borderRadius: 0}):o===Lu.SmoothStep?[S]=Wu(x):o===Lu.SimpleBezier?[S]=Uu(x):S=`M${y},${v} ${s},${c}`, e.createElement('path', {d: S, fill: 'none', className: 'react-flow__connection-path', style: r});
    }; md.displayName='ConnectionLine'; const gd=(e)=>({nodeId: e.connectionNodeId, handleType: e.connectionHandleType, nodesConnectable: e.nodesConnectable, connectionStatus: e.connectionStatus, width: e.width, height: e.height}); function yd({containerStyle: t, style: n, type: r, component: o}) {
      const {nodeId: a, handleType: i, nodesConnectable: l, width: u, height: s, connectionStatus: c}=lu(gd, go); return a&&i&&u&&l?e.createElement('svg', {style: t, width: u, height: s, className: 'react-flow__edges react-flow__connectionline react-flow__container'}, e.createElement('g', {className: lo(['react-flow__connection', c])}, e.createElement(md, {nodeId: a, handleType: i, style: n, type: r, CustomComponent: o, connectionStatus: c}))):null;
    } function vd(t, n) {
      return (0, e.useRef)(null), uu(), (0, e.useMemo)((()=>n(t)), [t]);
    } const bd=({nodeTypes: t, edgeTypes: n, onMove: r, onMoveStart: o, onMoveEnd: a, onInit: i, onNodeClick: l, onEdgeClick: u, onNodeDoubleClick: s, onEdgeDoubleClick: c, onNodeMouseEnter: d, onNodeMouseMove: f, onNodeMouseLeave: p, onNodeContextMenu: h, onSelectionContextMenu: m, onSelectionStart: g, onSelectionEnd: y, connectionLineType: v, connectionLineStyle: b, connectionLineComponent: w, connectionLineContainerStyle: S, selectionKeyCode: x, selectionOnDrag: E, selectionMode: _, multiSelectionKeyCode: k, panActivationKeyCode: C, zoomActivationKeyCode: O, deleteKeyCode: N, onlyRenderVisibleElements: M, elementsSelectable: P, selectNodesOnDrag: T, defaultViewport: R, translateExtent: A, minZoom: I, maxZoom: z, preventScrolling: D, defaultMarkerColor: L, zoomOnScroll: j, zoomOnPinch: F, panOnScroll: q, panOnScrollSpeed: U, panOnScrollMode: B, zoomOnDoubleClick: $, panOnDrag: H, onPaneClick: W, onPaneMouseEnter: V, onPaneMouseMove: K, onPaneMouseLeave: Q, onPaneScroll: Y, onPaneContextMenu: X, onEdgeUpdate: G, onEdgeContextMenu: Z, onEdgeMouseEnter: J, onEdgeMouseMove: ee, onEdgeMouseLeave: te, edgeUpdaterRadius: ne, onEdgeUpdateStart: re, onEdgeUpdateEnd: oe, noDragClassName: ae, noWheelClassName: ie, noPanClassName: le, elevateEdgesOnSelect: ue, disableKeyboardA11y: se, nodeOrigin: ce, nodeExtent: de, rfId: fe})=>{
      const pe=vd(t, Hc); const he=vd(n, ed); return function(t) {
        const n=lc(); const r=(0, e.useRef)(!1); (0, e.useEffect)((()=>{
          !r.current&&n.viewportInitialized&&t&&(setTimeout((()=>t(n)), 1), r.current=!0);
        }), [t, n.viewportInitialized]);
      }(i), e.createElement($c, {onPaneClick: W, onPaneMouseEnter: V, onPaneMouseMove: K, onPaneMouseLeave: Q, onPaneContextMenu: X, onPaneScroll: Y, deleteKeyCode: N, selectionKeyCode: x, selectionOnDrag: E, selectionMode: _, onSelectionStart: g, onSelectionEnd: y, multiSelectionKeyCode: k, panActivationKeyCode: C, zoomActivationKeyCode: O, elementsSelectable: P, onMove: r, onMoveStart: o, onMoveEnd: a, zoomOnScroll: j, zoomOnPinch: F, zoomOnDoubleClick: $, panOnScroll: q, panOnScrollSpeed: U, panOnScrollMode: B, panOnDrag: H, defaultViewport: R, translateExtent: A, minZoom: I, maxZoom: z, onSelectionContextMenu: m, preventScrolling: D, noDragClassName: ae, noWheelClassName: ie, noPanClassName: le, disableKeyboardA11y: se}, e.createElement(pd, null, e.createElement(dd, {edgeTypes: he, onEdgeClick: u, onEdgeDoubleClick: c, onEdgeUpdate: G, onlyRenderVisibleElements: M, onEdgeContextMenu: Z, onEdgeMouseEnter: J, onEdgeMouseMove: ee, onEdgeMouseLeave: te, onEdgeUpdateStart: re, onEdgeUpdateEnd: oe, edgeUpdaterRadius: ne, defaultMarkerColor: L, noPanClassName: le, elevateEdgesOnSelect: !!ue, disableKeyboardA11y: se, rfId: fe}, e.createElement(yd, {style: b, type: v, component: w, containerStyle: S})), e.createElement('div', {className: 'react-flow__edgelabel-renderer'}), e.createElement(Kc, {nodeTypes: pe, onNodeClick: l, onNodeDoubleClick: s, onNodeMouseEnter: d, onNodeMouseMove: f, onNodeMouseLeave: p, onNodeContextMenu: h, selectNodesOnDrag: T, onlyRenderVisibleElements: M, noPanClassName: le, noDragClassName: ae, disableKeyboardA11y: se, nodeOrigin: ce, nodeExtent: de, rfId: fe})));
    }; bd.displayName='GraphView'; const wd=(0, e.memo)(bd); const Sd=[[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]]; const xd={rfId: '1', width: 0, height: 0, transform: [0, 0, 1], nodeInternals: new Map, edges: [], onNodesChange: null, onEdgesChange: null, hasDefaultNodes: !1, hasDefaultEdges: !1, d3Zoom: null, d3Selection: null, d3ZoomHandler: void 0, minZoom: .5, maxZoom: 2, translateExtent: Sd, nodeExtent: Sd, nodesSelectionActive: !1, userSelectionActive: !1, userSelectionRect: null, connectionNodeId: null, connectionHandleId: null, connectionHandleType: 'source', connectionPosition: {x: 0, y: 0}, connectionStatus: null, connectionMode: Iu.Strict, domNode: null, paneDragging: !1, noPanClassName: 'nopan', nodeOrigin: [0, 0], nodeDragThreshold: 0, snapGrid: [15, 15], snapToGrid: !1, nodesDraggable: !0, nodesConnectable: !0, nodesFocusable: !0, edgesFocusable: !0, edgesUpdatable: !0, elementsSelectable: !0, elevateNodesOnSelect: !0, fitViewOnInit: !1, fitViewOnInitDone: !1, fitViewOnInitOptions: void 0, onSelectionChange: [], multiSelectionActive: !1, connectionStartHandle: null, connectionEndHandle: null, connectionClickStartHandle: null, connectOnClick: !0, ariaLiveMessage: '', autoPanOnConnect: !0, autoPanOnNodeDrag: !0, connectionRadius: 20, onError: ku, isValidConnection: void 0}; const Ed=({children: t})=>{
      const n=(0, e.useRef)(null); return n.current||(n.current=(r=(e, t)=>({...xd, setNodes: (n)=>{
        const {nodeInternals: r, nodeOrigin: o, elevateNodesOnSelect: a}=t(); e({nodeInternals: Js(n, r, o, a)});
      }, getNodes: ()=>Array.from(t().nodeInternals.values()), setEdges: (n)=>{
        const {defaultEdgeOptions: r={}}=t(); e({edges: n.map(((e)=>({...r, ...e})))});
      }, setDefaultNodesAndEdges: (n, r)=>{
        const o=void 0!==n; const a=void 0!==r; const i=o?Js(n, new Map, t().nodeOrigin, t().elevateNodesOnSelect):new Map; e({nodeInternals: i, edges: a?r:[], hasDefaultNodes: o, hasDefaultEdges: a});
      }, updateNodeDimensions: (n)=>{
        const {onNodesChange: r, nodeInternals: o, fitViewOnInit: a, fitViewOnInitDone: i, fitViewOnInitOptions: l, domNode: u, nodeOrigin: s}=t(); const c=u?.querySelector('.react-flow__viewport'); if (!c) return; const d=window.getComputedStyle(c); const {m22: f}=new window.DOMMatrixReadOnly(d.transform); const p=n.reduce(((e, t)=>{
          const n=o.get(t.id); if (n) {
            const r=pu(t.nodeElement); r.width&&r.height&&(n.width!==r.width||n.height!==r.height||t.forceUpdate)&&(o.set(n.id, {...n, [Eu]: {...n[Eu], handleBounds: {source: Tc('.source', t.nodeElement, f, s), target: Tc('.target', t.nodeElement, f, s)}}, ...r}), e.push({id: n.id, type: 'dimensions', dimensions: r}));
          } return e;
        }), []); Zs(o, s); const h=i||a&&!i&&ec(t, {initial: !0, ...l}); e({nodeInternals: new Map(o), fitViewOnInitDone: h}), p?.length>0&&r?.(p);
      }, updateNodePositions: (e, n=!0, r=!1)=>{
        const {triggerNodeChanges: o}=t(); o(e.map(((e)=>{
          const t={id: e.id, type: 'position', dragging: r}; return n&&(t.positionAbsolute=e.positionAbsolute, t.position=e.position), t;
        })));
      }, triggerNodeChanges: (n)=>{
        const {onNodesChange: r, nodeInternals: o, hasDefaultNodes: a, nodeOrigin: i, getNodes: l, elevateNodesOnSelect: u}=t(); if (n?.length) {
          if (a) {
            const t=Js(wc(n, l()), o, i, u); e({nodeInternals: t});
          }r?.(n);
        }
      }, addSelectedNodes: (n)=>{
        const {multiSelectionActive: r, edges: o, getNodes: a}=t(); let i; let l=null; r?i=n.map(((e)=>Sc(e, !0))):(i=xc(a(), n), l=xc(o, [])), rc({changedNodes: i, changedEdges: l, get: t, set: e});
      }, addSelectedEdges: (n)=>{
        const {multiSelectionActive: r, edges: o, getNodes: a}=t(); let i; let l=null; r?i=n.map(((e)=>Sc(e, !0))):(i=xc(o, n), l=xc(a(), [])), rc({changedNodes: l, changedEdges: i, get: t, set: e});
      }, unselectNodesAndEdges: ({nodes: n, edges: r}={})=>{
        const {edges: o, getNodes: a}=t(); const i=r||o; rc({changedNodes: (n||a()).map(((e)=>(e.selected=!1, Sc(e.id, !1)))), changedEdges: i.map(((e)=>Sc(e.id, !1))), get: t, set: e});
      }, setMinZoom: (n)=>{
        const {d3Zoom: r, maxZoom: o}=t(); r?.scaleExtent([n, o]), e({minZoom: n});
      }, setMaxZoom: (n)=>{
        const {d3Zoom: r, minZoom: o}=t(); r?.scaleExtent([o, n]), e({maxZoom: n});
      }, setTranslateExtent: (n)=>{
        t().d3Zoom?.translateExtent(n), e({translateExtent: n});
      }, resetSelectedElements: ()=>{
        const {edges: n, getNodes: r}=t(); rc({changedNodes: r().filter(((e)=>e.selected)).map(((e)=>Sc(e.id, !1))), changedEdges: n.filter(((e)=>e.selected)).map(((e)=>Sc(e.id, !1))), get: t, set: e});
      }, setNodeExtent: (n)=>{
        const {nodeInternals: r}=t(); r.forEach(((e)=>{
          e.positionAbsolute=mu(e.position, n);
        })), e({nodeExtent: n, nodeInternals: new Map(r)});
      }, panBy: (e)=>{
        const {transform: n, width: r, height: o, d3Zoom: a, d3Selection: i, translateExtent: l}=t(); if (!a||!i||!e.x&&!e.y) return !1; const u=Bl.translate(n[0]+e.x, n[1]+e.y).scale(n[2]); const s=[[0, 0], [r, o]]; const c=a?.constrain()(u, s, l); return a.transform(i, c), n[0]!==c.x||n[1]!==c.y||n[2]!==c.k;
      }, cancelConnection: ()=>e({connectionNodeId: xd.connectionNodeId, connectionHandleId: xd.connectionHandleId, connectionHandleType: xd.connectionHandleType, connectionStatus: xd.connectionStatus, connectionStartHandle: xd.connectionStartHandle, connectionEndHandle: xd.connectionEndHandle}), reset: ()=>e({...xd})}), o=Object.is, r?mo(r, o):mo)), e.createElement(ou, {value: n.current}, t); let r; let o;
    }; Ed.displayName='ReactFlowProvider'; const _d=({children: t})=>(0, e.useContext)(ru)?e.createElement(e.Fragment, null, t):e.createElement(Ed, null, t); _d.displayName='ReactFlowWrapper'; const kd={input: Cs, default: _s, output: Ns, group: Ms}; const Cd={default: Zu, straight: Qu, step: Ku, smoothstep: Vu, simplebezier: Bu}; const Od=[0, 0]; const Nd=[15, 15]; const Md={x: 0, y: 0, zoom: 1}; const Pd={width: '100%', height: '100%', overflow: 'hidden', position: 'relative', zIndex: 0}; const Td=(0, e.forwardRef)((({nodes: t, edges: n, defaultNodes: r, defaultEdges: o, className: a, nodeTypes: i=kd, edgeTypes: l=Cd, onNodeClick: u, onEdgeClick: s, onInit: c, onMove: d, onMoveStart: f, onMoveEnd: p, onConnect: h, onConnectStart: m, onConnectEnd: g, onClickConnectStart: y, onClickConnectEnd: v, onNodeMouseEnter: b, onNodeMouseMove: w, onNodeMouseLeave: S, onNodeContextMenu: x, onNodeDoubleClick: E, onNodeDragStart: _, onNodeDrag: k, onNodeDragStop: C, onNodesDelete: O, onEdgesDelete: N, onSelectionChange: M, onSelectionDragStart: P, onSelectionDrag: T, onSelectionDragStop: R, onSelectionContextMenu: A, onSelectionStart: I, onSelectionEnd: z, connectionMode: D=Iu.Strict, connectionLineType: L=Lu.Bezier, connectionLineStyle: j, connectionLineComponent: F, connectionLineContainerStyle: q, deleteKeyCode: U='Backspace', selectionKeyCode: B='Shift', selectionOnDrag: $=!1, selectionMode: H=Du.Full, panActivationKeyCode: W='Space', multiSelectionKeyCode: V=(Mu()?'Meta':'Control'), zoomActivationKeyCode: K=(Mu()?'Meta':'Control'), snapToGrid: Q=!1, snapGrid: Y=Nd, onlyRenderVisibleElements: X=!1, selectNodesOnDrag: G=!0, nodesDraggable: Z, nodesConnectable: J, nodesFocusable: ee, nodeOrigin: te=Od, edgesFocusable: ne, edgesUpdatable: re, elementsSelectable: oe, defaultViewport: ae=Md, minZoom: ie=.5, maxZoom: le=2, translateExtent: ue=Sd, preventScrolling: se=!0, nodeExtent: ce, defaultMarkerColor: de='#b1b1b7', zoomOnScroll: fe=!0, zoomOnPinch: pe=!0, panOnScroll: he=!1, panOnScrollSpeed: me=.5, panOnScrollMode: ge=zu.Free, zoomOnDoubleClick: ye=!0, panOnDrag: ve=!0, onPaneClick: be, onPaneMouseEnter: we, onPaneMouseMove: Se, onPaneMouseLeave: xe, onPaneScroll: Ee, onPaneContextMenu: _e, children: ke, onEdgeUpdate: Ce, onEdgeContextMenu: Oe, onEdgeDoubleClick: Ne, onEdgeMouseEnter: Me, onEdgeMouseMove: Pe, onEdgeMouseLeave: Te, onEdgeUpdateStart: Re, onEdgeUpdateEnd: Ae, edgeUpdaterRadius: Ie=10, onNodesChange: ze, onEdgesChange: De, noDragClassName: Le='nodrag', noWheelClassName: je='nowheel', noPanClassName: Fe='nopan', fitView: qe=!1, fitViewOptions: Ue, connectOnClick: Be=!0, attributionPosition: $e, proOptions: He, defaultEdgeOptions: We, elevateNodesOnSelect: Ve=!0, elevateEdgesOnSelect: Ke=!1, disableKeyboardA11y: Qe=!1, autoPanOnConnect: Ye=!0, autoPanOnNodeDrag: Xe=!0, connectionRadius: Ge=20, isValidConnection: Ze, onError: Je, style: et, id: tt, nodeDragThreshold: nt, ...rt}, ot)=>{
      const at=tt||'1'; return e.createElement('div', {...rt, 'style': {...et, ...Pd}, 'ref': ot, 'className': lo(['react-flow', a]), 'data-testid': 'rf__wrapper', 'id': tt}, e.createElement(_d, null, e.createElement(wd, {onInit: c, onMove: d, onMoveStart: f, onMoveEnd: p, onNodeClick: u, onEdgeClick: s, onNodeMouseEnter: b, onNodeMouseMove: w, onNodeMouseLeave: S, onNodeContextMenu: x, onNodeDoubleClick: E, nodeTypes: i, edgeTypes: l, connectionLineType: L, connectionLineStyle: j, connectionLineComponent: F, connectionLineContainerStyle: q, selectionKeyCode: B, selectionOnDrag: $, selectionMode: H, deleteKeyCode: U, multiSelectionKeyCode: V, panActivationKeyCode: W, zoomActivationKeyCode: K, onlyRenderVisibleElements: X, selectNodesOnDrag: G, defaultViewport: ae, translateExtent: ue, minZoom: ie, maxZoom: le, preventScrolling: se, zoomOnScroll: fe, zoomOnPinch: pe, zoomOnDoubleClick: ye, panOnScroll: he, panOnScrollSpeed: me, panOnScrollMode: ge, panOnDrag: ve, onPaneClick: be, onPaneMouseEnter: we, onPaneMouseMove: Se, onPaneMouseLeave: xe, onPaneScroll: Ee, onPaneContextMenu: _e, onSelectionContextMenu: A, onSelectionStart: I, onSelectionEnd: z, onEdgeUpdate: Ce, onEdgeContextMenu: Oe, onEdgeDoubleClick: Ne, onEdgeMouseEnter: Me, onEdgeMouseMove: Pe, onEdgeMouseLeave: Te, onEdgeUpdateStart: Re, onEdgeUpdateEnd: Ae, edgeUpdaterRadius: Ie, defaultMarkerColor: de, noDragClassName: Le, noWheelClassName: je, noPanClassName: Fe, elevateEdgesOnSelect: Ke, rfId: at, disableKeyboardA11y: Qe, nodeOrigin: te, nodeExtent: ce}), e.createElement(Fs, {nodes: t, edges: n, defaultNodes: r, defaultEdges: o, onConnect: h, onConnectStart: m, onConnectEnd: g, onClickConnectStart: y, onClickConnectEnd: v, nodesDraggable: Z, nodesConnectable: J, nodesFocusable: ee, edgesFocusable: ne, edgesUpdatable: re, elementsSelectable: oe, elevateNodesOnSelect: Ve, minZoom: ie, maxZoom: le, nodeExtent: ce, onNodesChange: ze, onEdgesChange: De, snapToGrid: Q, snapGrid: Y, connectionMode: D, translateExtent: ue, connectOnClick: Be, defaultEdgeOptions: We, fitView: qe, fitViewOptions: Ue, onNodesDelete: O, onEdgesDelete: N, onNodeDragStart: _, onNodeDrag: k, onNodeDragStop: C, onSelectionDrag: T, onSelectionDragStart: P, onSelectionDragStop: R, noPanClassName: Fe, nodeOrigin: te, rfId: at, autoPanOnConnect: Ye, autoPanOnNodeDrag: Xe, onError: Je, connectionRadius: Ge, isValidConnection: Ze, nodeDragThreshold: nt}), e.createElement(zs, {onSelectionChange: M}), ke, e.createElement(du, {proOptions: He, position: $e}), e.createElement(Ks, {rfId: at, disableKeyboardA11y: Qe})));
    })); function Rd(t) {
      return (n)=>{
        const [r, o]=(0, e.useState)(n); const a=(0, e.useCallback)(((e)=>o(((n)=>t(e, n)))), []); return [r, o, a];
      };
    }Td.displayName='ReactFlow'; const Ad=Rd(wc); const Id=Rd((function(e, t) {
      return bc(e, t);
    })); function zd(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const Dd=rn({name: 'query', initialState: {query: [{string: 'SELECT', parent: 'clause', hasComma: !1}], removedNode: {}, numOfClauses: 1, numOfColumns: 0, tableConnected: !1, isModalOpen: !1, currentParent: '', addedParent: '', isColumnModalOpen: !1, selectedJoin: ''}, reducers: {addColumn: function(e, t) {
      const n=e.query; const r=function(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e;
        }(e)||function(e, t) {
          let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
            let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
              if (a=(n=n.call(e)).next, 0===t) {
                if (Object(n)!==n) return; u=!1;
              } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
            } catch (e) {
              s=!0, o=e;
            } finally {
              try {
                if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
              } finally {
                if (s) throw o;
              }
            } return l;
          }
        }(e, t)||function(e, t) {
          if (e) {
            if ('string'==typeof e) return zd(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zd(e, t):void 0;
          }
        }(e, t)||function() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
      }(e.query, 1)[0]; const o=e.query.length; const a=t.payload; const i=t.payload.foreignConnections; const l=e.query.some((function(e) {
        return !!i&&i.includes(e.string);
      })); const u=e.query.some((function(e) {
        return e.string===t.payload.parent;
      })); const s=e.query.findIndex((function(e) {
        return 'FROM'===e.string;
      })); if (e.numOfClauses>1&&-1!==s) for (let c=1; c<s; c++)e.query[c].string.endsWith(',')||(e.query[c].string+=','); e.numOfClauses>2&&n.push(a), 1===n.length&&r&&(e.numOfClauses++, n.push(a, {string: 'FROM', parent: 'clause'}, {string: a.parent, parent: a.parent})), u&&r&&2===e.numOfClauses&&n.splice(s, 0, a), !u&&o>1&&(l?(e.query.splice(s, 0, t.payload), e.query.splice(s+3, 0, {string: t.payload.parent, parent: t.payload.parent})):alert('this table has no connections!'));
    }, removeColumn: function(e, t) {
      e.removedNode=t.payload, t.payload.string.endsWith(',')||(e.query=e.query.filter((function(e) {
        return t.payload.string!==e.string.slice(0, -1);
      }))), e.query=e.query.filter((function(e) {
        return t.payload.string!==e.string;
      })), e.numOfColumns>1&&e.numOfColumns--, e.query.some((function(e) {
        return 'FROM'===e.string;
      }))&&e.query.length<4&&e.query.length>2&&(e.query.length>1&&e.numOfClauses>=2&&e.numOfClauses--, e.query=e.query.slice(0, -2)); for (let n=0; n<e.query.length; n++)'FROM'===e.query[n].string&&n>1&&e.query[n-1].string.endsWith(',')&&(e.query[n-1].string=e.query[n-1].string.slice(0, -1));
    }, addClauseOrCondition: function(e, t) {
'='!==t.payload&&'*'!==t.payload?(e.query.push({string: t.payload, parent: 'clause'}), e.numOfClauses++):(e.query.push({string: t.payload, parent: 'condition', inputVisible: !0}), e.numOfClauses++);
    }, removeClauseOrCondition: function(e, t) {
      e.removedNode=t.payload, e.query=e.query.filter((function(e, n) {
        return !(e.string===t.payload.string&&n===t.payload.index);
      })), e.numOfClauses>1&&'value'!==t.payload.parent&&e.numOfClauses--;
    }, addInput: function(e, t) {
      e.query.push(t.payload);
    }, addJoin: function(e, t) {
      const n=t.payload; const r=n.currentParent; const o=n.addedParent; const a=n.selectedJoin; const i=n.selectedColumnOne; const l=n.selectedColumnTwo; ('CROSS JOIN'!==a||'CROSS JOIN'===a)&&e.query.push({string: ''.concat(a, ' ').concat(o, ' ON ').concat(r, '.').concat(i, ' = ').concat(o, '.').concat(l), parent: 'JOIN'}), e.isModalOpen=!1;
    }, removeInputWindow: function(e) {
      e.query[e.query.length-2].inputVisible=!1;
    }, removeValue: function(e, t) {
      e.removedNode=t.payload, e.query=e.query.filter((function(e, n) {
        return !(e.string===t.payload.string&&e.parent===t.payload.parent);
      }));
    }, openModal: function(e, t) {
      const n=e.query.findIndex((function(e) {
        return 'FROM'===e.string;
      })); e.currentParent=e.query[n+1].string, e.addedParent=t.payload.parent, console.log('have we reached the dispatch???'), e.isModalOpen=!0;
    }, openColumnModal: function(e, t) {
      e.isColumnModalOpen=!0, e.selectedJoin=t.payload;
    }}}); const Ld=Dd.actions; const jd=Ld.addColumn; const Fd=Ld.removeColumn; const qd=Ld.addClauseOrCondition; const Ud=Ld.removeClauseOrCondition; const Bd=Ld.addInput; const $d=Ld.addJoin; const Hd=Ld.removeInputWindow; const Wd=Ld.removeValue; const Vd=Ld.openModal; const Kd=(Ld.currentParent, Ld.addedParent, Ld.openColumnModal); const Qd=Dd.reducer; function Yd(e) {
      return Yd='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
      }, Yd(e);
    } function Xd() {
      Xd=function() {
        return t;
      }; let e; var t={}; const n=Object.prototype; const r=n.hasOwnProperty; const o=Object.defineProperty||function(e, t, n) {
        e[t]=n.value;
      }; const a='function'==typeof Symbol?Symbol:{}; const i=a.iterator||'@@iterator'; const l=a.asyncIterator||'@@asyncIterator'; const u=a.toStringTag||'@@toStringTag'; function s(e, t, n) {
        return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t];
      } try {
        s({}, '');
      } catch (e) {
        s=function(e, t, n) {
          return e[t]=n;
        };
      } function c(e, t, n, r) {
        const a=t&&t.prototype instanceof y?t:y; const i=Object.create(a.prototype); const l=new P(r||[]); return o(i, '_invoke', {value: C(e, n, l)}), i;
      } function d(e, t, n) {
        try {
          return {type: 'normal', arg: e.call(t, n)};
        } catch (e) {
          return {type: 'throw', arg: e};
        }
      }t.wrap=c; const f='suspendedStart'; const p='suspendedYield'; const h='executing'; const m='completed'; const g={}; function y() {} function v() {} function b() {} let w={}; s(w, i, (function() {
        return this;
      })); const S=Object.getPrototypeOf; const x=S&&S(S(T([]))); x&&x!==n&&r.call(x, i)&&(w=x); const E=b.prototype=y.prototype=Object.create(w); function _(e) {
        ['next', 'throw', 'return'].forEach((function(t) {
          s(e, t, (function(e) {
            return this._invoke(t, e);
          }));
        }));
      } function k(e, t) {
        function n(o, a, i, l) {
          const u=d(e[o], e, a); if ('throw'!==u.type) {
            const s=u.arg; const c=s.value; return c&&'object'==Yd(c)&&r.call(c, '__await')?t.resolve(c.__await).then((function(e) {
              n('next', e, i, l);
            }), (function(e) {
              n('throw', e, i, l);
            })):t.resolve(c).then((function(e) {
              s.value=e, i(s);
            }), (function(e) {
              return n('throw', e, i, l);
            }));
          }l(u.arg);
        } let a; o(this, '_invoke', {value: function(e, r) {
          function o() {
            return new t((function(t, o) {
              n(e, r, t, o);
            }));
          } return a=a?a.then(o, o):o();
        }});
      } function C(t, n, r) {
        let o=f; return function(a, i) {
          if (o===h) throw new Error('Generator is already running'); if (o===m) {
            if ('throw'===a) throw i; return {value: e, done: !0};
          } for (r.method=a, r.arg=i; ;) {
            const l=r.delegate; if (l) {
              const u=O(l, r); if (u) {
                if (u===g) continue; return u;
              }
            } if ('next'===r.method)r.sent=r._sent=r.arg; else if ('throw'===r.method) {
              if (o===f) throw o=m, r.arg; r.dispatchException(r.arg);
            } else 'return'===r.method&&r.abrupt('return', r.arg); o=h; const s=d(t, n, r); if ('normal'===s.type) {
              if (o=r.done?m:p, s.arg===g) continue; return {value: s.arg, done: r.done};
            }'throw'===s.type&&(o=m, r.method='throw', r.arg=s.arg);
          }
        };
      } function O(t, n) {
        const r=n.method; const o=t.iterator[r]; if (o===e) return n.delegate=null, 'throw'===r&&t.iterator.return&&(n.method='return', n.arg=e, O(t, n), 'throw'===n.method)||'return'!==r&&(n.method='throw', n.arg=new TypeError('The iterator does not provide a \''+r+'\' method')), g; const a=d(o, t.iterator, n.arg); if ('throw'===a.type) return n.method='throw', n.arg=a.arg, n.delegate=null, g; const i=a.arg; return i?i.done?(n[t.resultName]=i.value, n.next=t.nextLoc, 'return'!==n.method&&(n.method='next', n.arg=e), n.delegate=null, g):i:(n.method='throw', n.arg=new TypeError('iterator result is not an object'), n.delegate=null, g);
      } function N(e) {
        const t={tryLoc: e[0]}; 1 in e&&(t.catchLoc=e[1]), 2 in e&&(t.finallyLoc=e[2], t.afterLoc=e[3]), this.tryEntries.push(t);
      } function M(e) {
        const t=e.completion||{}; t.type='normal', delete t.arg, e.completion=t;
      } function P(e) {
        this.tryEntries=[{tryLoc: 'root'}], e.forEach(N, this), this.reset(!0);
      } function T(t) {
        if (t||''===t) {
          const n=t[i]; if (n) return n.call(t); if ('function'==typeof t.next) return t; if (!isNaN(t.length)) {
            let o=-1; const a=function n() {
              for (;++o<t.length;) if (r.call(t, o)) return n.value=t[o], n.done=!1, n; return n.value=e, n.done=!0, n;
            }; return a.next=a;
          }
        } throw new TypeError(Yd(t)+' is not iterable');
      } return v.prototype=b, o(E, 'constructor', {value: b, configurable: !0}), o(b, 'constructor', {value: v, configurable: !0}), v.displayName=s(b, u, 'GeneratorFunction'), t.isGeneratorFunction=function(e) {
        const t='function'==typeof e&&e.constructor; return !!t&&(t===v||'GeneratorFunction'===(t.displayName||t.name));
      }, t.mark=function(e) {
        return Object.setPrototypeOf?Object.setPrototypeOf(e, b):(e.__proto__=b, s(e, u, 'GeneratorFunction')), e.prototype=Object.create(E), e;
      }, t.awrap=function(e) {
        return {__await: e};
      }, _(k.prototype), s(k.prototype, l, (function() {
        return this;
      })), t.AsyncIterator=k, t.async=function(e, n, r, o, a) {
        void 0===a&&(a=Promise); const i=new k(c(e, n, r, o), a); return t.isGeneratorFunction(n)?i:i.next().then((function(e) {
          return e.done?e.value:i.next();
        }));
      }, _(E), s(E, u, 'Generator'), s(E, i, (function() {
        return this;
      })), s(E, 'toString', (function() {
        return '[object Generator]';
      })), t.keys=function(e) {
        const t=Object(e); const n=[]; for (const r in t)n.push(r); return n.reverse(), function e() {
          for (;n.length;) {
            const r=n.pop(); if (r in t) return e.value=r, e.done=!1, e;
          } return e.done=!0, e;
        };
      }, t.values=T, P.prototype={constructor: P, reset: function(t) {
        if (this.prev=0, this.next=0, this.sent=this._sent=e, this.done=!1, this.delegate=null, this.method='next', this.arg=e, this.tryEntries.forEach(M), !t) for (const n in this)'t'===n.charAt(0)&&r.call(this, n)&&!isNaN(+n.slice(1))&&(this[n]=e);
      }, stop: function() {
        this.done=!0; const e=this.tryEntries[0].completion; if ('throw'===e.type) throw e.arg; return this.rval;
      }, dispatchException: function(t) {
        if (this.done) throw t; const n=this; function o(r, o) {
          return l.type='throw', l.arg=t, n.next=r, o&&(n.method='next', n.arg=e), !!o;
        } for (let a=this.tryEntries.length-1; a>=0; --a) {
          const i=this.tryEntries[a]; var l=i.completion; if ('root'===i.tryLoc) return o('end'); if (i.tryLoc<=this.prev) {
            const u=r.call(i, 'catchLoc'); const s=r.call(i, 'finallyLoc'); if (u&&s) {
              if (this.prev<i.catchLoc) return o(i.catchLoc, !0); if (this.prev<i.finallyLoc) return o(i.finallyLoc);
            } else if (u) {
              if (this.prev<i.catchLoc) return o(i.catchLoc, !0);
            } else {
              if (!s) throw new Error('try statement without catch or finally'); if (this.prev<i.finallyLoc) return o(i.finallyLoc);
            }
          }
        }
      }, abrupt: function(e, t) {
        for (let n=this.tryEntries.length-1; n>=0; --n) {
          const o=this.tryEntries[n]; if (o.tryLoc<=this.prev&&r.call(o, 'finallyLoc')&&this.prev<o.finallyLoc) {
            var a=o; break;
          }
        }a&&('break'===e||'continue'===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null); const i=a?a.completion:{}; return i.type=e, i.arg=t, a?(this.method='next', this.next=a.finallyLoc, g):this.complete(i);
      }, complete: function(e, t) {
        if ('throw'===e.type) throw e.arg; return 'break'===e.type||'continue'===e.type?this.next=e.arg:'return'===e.type?(this.rval=this.arg=e.arg, this.method='return', this.next='end'):'normal'===e.type&&t&&(this.next=t), g;
      }, finish: function(e) {
        for (let t=this.tryEntries.length-1; t>=0; --t) {
          const n=this.tryEntries[t]; if (n.finallyLoc===e) return this.complete(n.completion, n.afterLoc), M(n), g;
        }
      }, catch: function(e) {
        for (let t=this.tryEntries.length-1; t>=0; --t) {
          const n=this.tryEntries[t]; if (n.tryLoc===e) {
            const r=n.completion; if ('throw'===r.type) {
              var o=r.arg; M(n);
            } return o;
          }
        } throw new Error('illegal catch attempt');
      }, delegateYield: function(t, n, r) {
        return this.delegate={iterator: T(t), resultName: n, nextLoc: r}, 'next'===this.method&&(this.arg=e), g;
      }}, t;
    } function Gd(e, t, n, r, o, a, i) {
      try {
        var l=e[a](i); var u=l.value;
      } catch (e) {
        return void n(e);
      }l.done?t(u):Promise.resolve(u).then(r, o);
    } function Zd(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const Jd=function(t) {
      let n; let r; let o; const a=t.data; const i=t.isConnectable; const l=gr((function(e) {
        return e.queryReducer.removedNode;
      })); const u=gr((function(e) {
        return e.queryReducer.query;
      })); const s=(r=(0, e.useState)(!1), o=2, function(e) {
        if (Array.isArray(e)) return e;
      }(r)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(r, o)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return Zd(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zd(e, t):void 0;
        }
      }(r, o)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }()); const c=s[0]; const d=s[1]; const f=Or(); const p=(0, e.useRef)(null); a.label===a.primaryKey?n='PK':a.foreignKey&&a.foreignKey.includes(a.label)&&(n='FK'), console.log('Data and Label => ', a, n), (0, e.useEffect)((function() {
        if (l) {
          let e=l.string; 'string'==typeof e&&e.endsWith(',')&&(e=e.slice(0, -1)), e===a.label&&l.parent===a.parent&&(d(!1), p.current.className='flowButton');
        }
      }), [l, a.label, a.parent]); const h=function() {
        const e=function(e) {
          return function() {
            const t=this; const n=arguments; return new Promise((function(r, o) {
              const a=e.apply(t, n); function i(e) {
                Gd(a, r, o, i, l, 'next', e);
              } function l(e) {
                Gd(a, r, o, i, l, 'throw', e);
              }i(void 0);
            }));
          };
        }(Xd().mark((function e(t) {
          let n; let r; let o; return Xd().wrap((function(e) {
            for (;;) {
              switch (e.prev=e.next) {
                case 0: n=t.foreignKeyTables, r=u.some((function(e) {
                  return !!n&&n.includes(e.string);
                })), o=u.some((function(e) {
                  return e.string===t.parent;
                })), d((function(e) {
                  return !e;
                })), !o&&u.length>1?(console.log('are we in !isParentIncluded?'), f(Vd({parent: t.parent}))):c||!o&&!r&&1!==u.length?f(Fd({string: t.label, parent: t.parent})):f(jd({string: t.label, parent: t.parent, isColumn: !0, hasComma: !1, foreignConnections: t.foreignKeyTables})); case 6: case 'end': return e.stop();
              }
            }
          }), e);
        }))); return function(t) {
          return e.apply(this, arguments);
        };
      }(); return a.parent?e.createElement('div', null, e.createElement(xs, {type: 'target', position: Fu.Top, isConnectable: i}), e.createElement('div', null, e.createElement('button', {ref: p, type: 'button', id: ''.concat(a.parent, '.').concat(a.label), name: 'button', onClick: function() {
        return h(a);
      }, style: {width: '300px', height: '50px'}, className: ''.concat(c?'flowButton clicked':'flowButton')}, e.createElement('div', {className: 'nodeGrid'}, e.createElement('span', null, e.createElement('span', {className: 'label'}, a.label), n&&e.createElement('span', {className: 'FKPK'}, '( '.concat(n, ' )'))), e.createElement('span', {className: 'dataType'}, a.dataType)))), e.createElement(xs, {type: 'source', position: Fu.Bottom, isConnectable: i})):e.createElement('div', null, e.createElement(xs, {type: 'target', position: Fu.Top, isConnectable: i}), e.createElement('div', null, e.createElement('button', {ref: p, type: 'button', id: ''.concat(a.parent, '.').concat(a.label), name: 'button', onClick: function() {
        return h(a);
      }, style: {width: '300px', height: '50px'}, className: ''.concat(c?'flowButton clicked':'flowButton')}, a.label)), e.createElement(xs, {type: 'source', position: Fu.Bottom, isConnectable: i}));
    }; const ef=o(72); const tf=o.n(ef); const nf=o(825); const rf=o.n(nf); const of=o(659); const af=o.n(of); const lf=o(56); const uf=o.n(lf); const sf=o(159); const cf=o.n(sf); const df=o(113); const ff=o.n(df); const pf=o(739); const hf={}; function mf(e, t) {
      return function(e) {
        if (Array.isArray(e)) return e;
      }(e)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(e, t)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return gf(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gf(e, t):void 0;
        }
      }(e, t)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    } function gf(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    }hf.styleTagTransform=ff(), hf.setAttributes=uf(), hf.insert=af().bind(null, 'head'), hf.domAPI=rf(), hf.insertStyleElement=cf(), tf()(pf.A, hf), pf.A&&pf.A.locals&&pf.A.locals; const yf=function(t) {
      const n=t.data; const r=[]; const o=[]; !function() {
        let e=0; const t=Math.ceil(Math.sqrt(Object.keys(n).length)); let a=0; for (const i in n) {
          const l=''.concat(i); r.push({id: l, type: 'custom', position: {x: 370*e, y: 700*a}, data: {label: i, foreignKeyTables: n[i].connections}, style: {width: 200, height: 70*n[i].length}}); let u=0; for (const s in n[i].columns)console.log('Column => ', s), r.push({id: ''.concat(l, ' ').concat(s), type: 'custom', position: {x: 0, y: 50*++u}, data: {label: s, dataType: n[i].columns[s], parent: l, primaryKey: n[i].primaryKey, foreignKey: n[i].foreignKey}, parentNode: l, draggable: !1}); if (n[i].connections) for (let c=0; c<n[i].connections.length; c++)o.push({source: i, target: n[i].connections[c]}); console.log('Row Length, Column Num => ', t, a), (e+1)%t==0?(a++, e=0):e+=1;
        }
      }(); const a=(0, e.useMemo)((function() {
        return {custom: Jd};
      }), []); const i=mf(Ad(r), 3); const l=i[0]; const u=(i[1], i[2]); const s=mf(Id(o), 3); const c=s[0]; const d=(s[1], s[2]); return e.createElement('div', {className: 'db-flow-wrapper', style: {width: '100%', height: '1000px'}}, e.createElement(Td, {nodes: l, edges: c, defaultEdgeOptions: {type: 'smoothstep'}, onNodesChange: u, onEdgesChange: d, nodeTypes: a, fitView: !0}));
    }; const vf=o(312); const bf=o.n(vf); const wf=o.p+'73182608525d9c4ce826eb83ab08cc2c.png'; const Sf=[{top: !0, label: 'SELECT'}, {top: !0, label: 'FROM'}, {top: !0, label: 'WHERE'}, {top: !0, label: 'GROUP BY'}, {top: !0, label: 'ORDER BY'}, {top: !0, label: 'JOIN'}, {top: !0, label: 'HAVING'}, {top: !0, label: 'DISTINCT'}, {top: !0, label: 'LIMIT'}, {top: !0, label: 'INSERT INTO'}, {label: 'Clauses', submenu: [{label: 'SELECT'}, {label: 'FROM'}, {label: 'GROUP BY'}, {label: 'HAVING'}, {label: 'ORDER BY'}, {label: 'LIMIT'}, {label: 'OFFSET'}, {label: 'DISTINCT'}, {label: 'LIKE'}, {label: 'IN'}, {label: 'BETWEEN'}]}, {label: 'Comparison Operators', submenu: [{label: '='}, {label: '>'}, {label: '<'}, {label: '>='}, {label: '<='}, {label: '!='}, {label: '<>'}]}, {label: 'Arithmetic Operators', submenu: [{label: '+'}, {label: '-'}, {label: '*'}, {label: '/'}, {label: '%'}]}, {label: 'Operators', submenu: [{label: 'AND'}, {label: 'OR'}, {label: 'NOT'}, {label: 'BETWEEN'}, {label: 'EXISTS'}, {label: 'IN'}, {label: 'IS NULL'}, {label: 'IS NOT NULL'}, {label: 'LIKE'}, {label: 'NOT'}, {label: 'OR'}]}]; const xf=o.p+'6ad3da20dc4ca6df8055441bb10b08c0.png'; function Ef(e) {
      return Ef='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
      }, Ef(e);
    } function _f(e, t) {
      const n=Object.keys(e); if (Object.getOwnPropertySymbols) {
        let r=Object.getOwnPropertySymbols(e); t&&(r=r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
      } return n;
    } function kf(e) {
      for (let t=1; t<arguments.length; t++) {
        var n=null!=arguments[t]?arguments[t]:{}; t%2?_f(Object(n), !0).forEach((function(t) {
          Cf(e, t, n[t]);
        })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):_f(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      } return e;
    } function Cf(e, t, n) {
      let r; return r=function(e, t) {
        if ('object'!=Ef(e)||!e) return e; const n=e[Symbol.toPrimitive]; if (void 0!==n) {
          const r=n.call(e, 'string'); if ('object'!=Ef(r)) return r; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return String(e);
      }(t), (t='symbol'==Ef(r)?r:String(r))in e?Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}):e[t]=n, e;
    } function Of(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const Nf=function() {
      let t; let n; const r=Or(); const o=(t=(0, e.useState)({}), n=2, function(e) {
        if (Array.isArray(e)) return e;
      }(t)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(t, n)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return Of(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Of(e, t):void 0;
        }
      }(t, n)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }()); const a=o[0]; const i=o[1]; const l=function(e, t) {
        e.stopPropagation(); const n=e.target.querySelector('ul'); const o=e.target.getAttribute('data-index'); if (!n) return r(qd(t)), void(document.querySelector('.nestedMenu').style.display='none'); const l=a[o]; i(kf(kf({}, a), {}, Cf({}, o, !l))), 'none'!==n.style.display&&n.style.display?n.style.display='none':n.style.display='inline-block';
      }; const u=function t(n) {
        return e.createElement('ul', {className: 'submenu'}, n.map((function(n, r) {
          return e.createElement('li', {key: r, onClick: function(e) {
            return l(e, n.label);
          }}, n.label, n.submenu&&t(n.submenu));
        })));
      }; return e.createElement(e.Fragment, null, e.createElement('div', {className: 'queryBuilder', onClick: function(e) {
        return l(e, '');
      }, onChange: function(e) {
        r(qd(e.target.value));
      }}, 'Add +', e.createElement('ul', {className: 'nestedMenu'}, Sf.map((function(t, n) {
        return e.createElement('li', {'value': t.label, 'key': n, 'data-index': n, 'className': t.top?'top10':'', 'onClick': function(e) {
          return l(e, t.label);
        }}, t.label, t.submenu&&e.createElement('img', {className: a[n]?'dropdownIconExpanded':'dropdownIcon', src: xf}), t.submenu&&u(t.submenu));
      })))));
    }; const Mf=function() {
      const t=gr((function(e) {
        return e.queryReducer;
      })); const n=Or(); const r=function(e) {
        'SELECT'!==e.string&&('clause'===e.parent||'condition'===e.parent||'input'===e.parent?n(Ud({string: e.string, parent: e.parent, index: e.index})):'value'===e.parent?n(Wd({string: e.string, parent: e.parent, index: e.index})):n(Fd({string: e.string, parent: e.parent})));
      }; let o=0; const a=t.query.map((function(t, a) {
        return e.createElement(e.Fragment, {key: o++}, '='===t.string&&t.inputVisible?e.createElement(e.Fragment, null, e.createElement('button', {onClick: function() {
          return r({string: t.string, parent: t.parent, index: a});
        }, id: t.parent, value: t.string, key: o++}, t.string), e.createElement('input', {type: 'text', onKeyDown: function(e) {
          let t; 'Enter'===e.key&&(t=e.target.value, n(Bd({string: t, parent: 'value'})), n(Hd()));
        }})):'clause'===t.parent&&'SELECT'!==t.string?e.createElement(e.Fragment, null, e.createElement('br', null), e.createElement('button', {onClick: function() {
          return r({string: t.string, parent: t.parent, index: a});
        }, id: t.parent, value: t.string, key: o++}, t.string)):t.hasComma?e.createElement('button', {onClick: function() {
          return r({string: t.string, parent: t.parent, index: a});
        }, id: t.parent, value: t.string, key: o++}, t.string, ','):e.createElement('button', {onClick: function() {
          return r({string: t.string, parent: t.parent, index: a});
        }, id: t.parent, value: t.string, key: o++}, t.string));
      })); return e.createElement('div', {className: 'db-query-container'}, e.createElement('p', null, 'YOUR QUERY:'), e.createElement('section', null, e.createElement('img', {src: wf, alt: 'copy query icon', onClick: function() {
        const e=t.query.map((function(e) {
          return e.string;
        })).join(' '); navigator.clipboard.writeText(e).then((function() {
          return alert('Query copied to clipboard');
        })).catch((function(e) {
          return console.error('Unable to copy query to clipboard: ', e);
        }));
      }}), e.createElement('div', {className: 'queryAndButton'}, a, e.createElement(Nf, {className: 'clause-dropdown'}))));
    }; const Pf=o.p+'be9deffa546db0002bdf1aa25889294b.png'; function Tf(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const Rf=function() {
      let t; let n; const r=gr((function(e) {
        return e.queryReducer.currentParent;
      })); const o=gr((function(e) {
        return e.queryReducer.addedParent;
      })); const a=(t=(0, e.useState)(), n=2, function(e) {
        if (Array.isArray(e)) return e;
      }(t)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(t, n)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return Tf(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tf(e, t):void 0;
        }
      }(t, n)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }()); const i=a[0]; const l=a[1]; const u=Or(); const s=[{type: 'INNER JOIN', innerText: 'Inner Join selects records that have a common matching value between '.concat(r, ' and ').concat(o, '.')}, {type: 'FULL JOIN', innerText: 'Full Join (Full Outer Join) returns all records if there is any match in '.concat(r, ' and ').concat(o, '. \n            Non-matching rows will return null for those values.')}, {type: 'RIGHT JOIN', innerText: 'Right Join returns all records '.concat(o, ' and matching records from ').concat(r, '. \n            If there are no matches in ').concat(r, ' they will return null.')}, {type: 'LEFT JOIN', innerText: 'Right Join returns all records '.concat(r, ' and matching records from ').concat(o, '. \n            If there are no matches in ').concat(o, ' they will return null.')}, {type: 'CROSS JOIN', innerText: 'Cross Join combines each row from '.concat(r, ' with each row from ').concat(o, ' for all possible combinations.\n            WARNING: Can get very computationally expensive! Processing time can increase exponentially depending on size of tables!')}]; const c=function(e) {
        'BUTTON'===e.target.tagName&&u(Kd(e.target.value));
      }; return e.createElement('div', {className: 'modal'}, e.createElement('h3', null, 'How would you like to join ', e.createElement('br', null), ''.concat(r, ' and ').concat(o, '?')), s.map((function(t, n) {
        return e.createElement(e.Fragment, null, e.createElement('button', {key: n+'button', className: 'button modalButton', onClick: c, value: t.type}, t.type, e.createElement('img', {key: n+'img', onClick: function() {
          return e=t.type, void l(i?null:e); let e;
        }, src: Pf})), e.createElement('p', {key: n+'p', id: 'innerJoin', style: {display: i===t.type?'block':'none'}}, t.innerText));
      })));
    }; function Af(e, t) {
      return function(e) {
        if (Array.isArray(e)) return e;
      }(e)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(e, t)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return If(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?If(e, t):void 0;
        }
      }(e, t)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    } function If(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const zf=function() {
      const t=Or(); const n=gr((function(e) {
        return e.queryReducer;
      })); const r=n.currentParent; const o=n.addedParent; const a=n.selectedJoin; const i=(n.isOpen, gr((function(e) {
        return e.api.mutations.databaseSchema.data[r];
      }))); const l=gr((function(e) {
        return e.api.mutations.databaseSchema.data[o];
      })); const u=Af((0, e.useState)(), 2); const s=u[0]; const c=u[1]; const d=Af((0, e.useState)(), 2); const f=d[0]; const p=d[1]; const h=[]; Object.keys(i.columns).forEach((function(e) {
        const t={column: e, type: 'character varying'===i.columns[e]?'charvar':i.columns[e]}; i.foreignKey.includes(e)&&(t.key='FK'), e===i.primaryKey&&(t.key='PK'), h.push(t);
      })); const m=[]; Object.keys(l.columns).forEach((function(e) {
        const t={column: e, type: 'character varying'===l.columns[e]?'charvar':l.columns[e]}; l.foreignKey.includes(e)&&(t.key='FK'), e===l.primaryKey&&(t.key='PK'), m.push(t);
      })), console.log(m, h, 'tableOne and tableTwo map'); const g=function(e, t) {
t===r?c(s?null:e):t===o&&p(f?null:e);
      }; return e.createElement('div', {className: 'on-columns-modal'}, e.createElement('h3', null, 'Select which columns you\'d like to connect?'), e.createElement('div', {className: 'tableOne'}, e.createElement('h3', null, r), h.map((function(t, n) {
        return e.createElement('button', {className: ''.concat(s===t.column?'flowButton clicked':'flowButton'), key: n, onClick: function() {
          return g(t.column, r);
        }}, e.createElement('span', null, e.createElement('span', null, t.column), e.createElement('span', {className: 'FKPK'}, t.key?'( '.concat(t.key, ' )'):'')), e.createElement('span', {className: 'dataType'}, t.type));
      }))), e.createElement('h1', null, 'ON'), e.createElement('div', {className: 'tableTwo'}, e.createElement('h3', null, o), m.map((function(t, n) {
        return e.createElement('button', {className: ''.concat(f===t.column?'flowButton clicked':'flowButton'), key: n, onClick: function() {
          return g(t.column, o);
        }}, e.createElement('span', null, e.createElement('span', null, t.column), e.createElement('span', {className: 'FKPK'}, t.key?'( '.concat(t.key, ' )'):'')), e.createElement('span', {className: 'dataType'}, t.type));
      }))), e.createElement('button', {onClick: function() {
        t($d({currentParent: r, addedParent: o, selectedColumnOne: s, selectedColumnTwo: f, selectedJoin: a}));
      }, className: 'button'}, 'Add to Query'));
    }; function Df(e, t) {
      return function(e) {
        if (Array.isArray(e)) return e;
      }(e)||function(e, t) {
        let n=null==e?null:'undefined'!=typeof Symbol&&e[Symbol.iterator]||e['@@iterator']; if (null!=n) {
          let r; let o; let a; let i; const l=[]; let u=!0; let s=!1; try {
            if (a=(n=n.call(e)).next, 0===t) {
              if (Object(n)!==n) return; u=!1;
            } else for (;!(u=(r=a.call(n)).done)&&(l.push(r.value), l.length!==t); u=!0);
          } catch (e) {
            s=!0, o=e;
          } finally {
            try {
              if (!u&&null!=n.return&&(i=n.return(), Object(i)!==i)) return;
            } finally {
              if (s) throw o;
            }
          } return l;
        }
      }(e, t)||function(e, t) {
        if (e) {
          if ('string'==typeof e) return Lf(e, t); let n=Object.prototype.toString.call(e).slice(8, -1); return 'Object'===n&&e.constructor&&(n=e.constructor.name), 'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lf(e, t):void 0;
        }
      }(e, t)||function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    } function Lf(e, t) {
      (null==t||t>e.length)&&(t=e.length); for (var n=0, r=new Array(t); n<t; n++)r[n]=e[n]; return r;
    } const jf=function() {
      const t=Df((0, e.useState)(!1), 2); const n=(t[0], t[1]); const r=gr((function(e) {
        return e.queryReducer.isModalOpen;
      })); const o=gr((function(e) {
        return e.queryReducer.isColumnModalOpen;
      })); const a=Df(Ur({fixedCacheKey: 'databaseSchema'}), 2); const i=(a[0], a[1]); const l=i.data; const u=i.error; const s=i.isLoading; const c=i.isSuccess; return s?e.createElement('div', null, 'Loading...'):u?e.createElement('div', null, 'Error:', u):c&&l?(console.log('Data => ', l), e.createElement('div', {className: 'chart-page-container'}, e.createElement(Mf, null), e.createElement(bf(), {isOpen: r, shouldCloseOnEsc: !0, className: 'overlay', onRequestClose: function() {
        n(!1);
      }}, o&&e.createElement(zf, null), !o&&e.createElement(Rf, null)), e.createElement(yf, {data: l}))):void 0;
    }; const Ff=function() {
      return e.createElement('div', {className: 'form-container'}, e.createElement('h2', null, 'Fill out your credentials below ', e.createElement('br', null), ' to get started'), e.createElement(Vr, {location: 'local'}));
    }; const qf=function() {
      return e.createElement('div', null, e.createElement('h2', null, 'Fill out your credentials below ', e.createElement('br', null), 'to get started'), e.createElement(Vr, {location: 'hosted'}));
    }; const Uf=function() {
      return e.createElement(Zr, null, e.createElement(io, null), e.createElement('div', null, e.createElement(ue, null, e.createElement(ie, {path: '/', element: e.createElement(oo, null)}), e.createElement(ie, {path: '/chart', element: e.createElement(jf, null)}), e.createElement(ie, {path: '/formpage', element: e.createElement(Ff, null)}), e.createElement(ie, {path: '/hostedFormPage', element: e.createElement(qf, null)}))));
    }; const Bf=o(563); const $f={}; function Hf(e) {
      return Hf='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e) {
        return typeof e;
      }:function(e) {
        return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e;
      }, Hf(e);
    } function Wf(e, t, n) {
      let r; return r=function(e, t) {
        if ('object'!=Hf(e)||!e) return e; const n=e[Symbol.toPrimitive]; if (void 0!==n) {
          const r=n.call(e, 'string'); if ('object'!=Hf(r)) return r; throw new TypeError('@@toPrimitive must return a primitive value.');
        } return String(e);
      }(t), (t='symbol'==Hf(r)?r:String(r))in e?Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}):e[t]=n, e;
    }$f.styleTagTransform=ff(), $f.setAttributes=uf(), $f.insert=af().bind(null, 'head'), $f.domAPI=rf(), $f.insertStyleElement=cf(), tf()(Bf.A, $f), Bf.A&&Bf.A.locals&&Bf.A.locals; const Vf=function(e) {
      const t=function(e) {
        const {thunk: t=!0, immutableCheck: n=!0, serializableCheck: r=!0, actionCreatorCheck: o=!0}=e??{}; const a=new Nt; return t&&('boolean'==typeof t?a.push(Et):a.push(_t(t.extraArgument))), a;
      }; const {reducer: n, middleware: r, devTools: o=!0, preloadedState: a, enhancers: i}=e||{}; let l; let u; if ('function'==typeof n)l=n; else {
        if (!he(n)) throw new Error(fn(1)); l=ge(n);
      }u='function'==typeof r?r(t):t(); let s=ye; o&&(s=kt({trace: !1, ...'object'==typeof o&&o})); const c=function(...e) {
        return (t)=>(n, r)=>{
          const o=t(n, r); let a=()=>{
            throw new Error(ce(15));
          }; const i={getState: o.getState, dispatch: (e, ...t)=>a(e, ...t)}; const l=e.map(((e)=>e(i))); return a=ye(...l)(o.dispatch), {...o, dispatch: a};
        };
      }(...u); const d=((e)=>function(t) {
        const {autoBatch: n=!0}=t??{}; const r=new Nt(e); return n&&r.push(((e={type: 'raf'})=>(t)=>(...n)=>{
          const r=t(...n); let o=!0; let a=!1; let i=!1; const l=new Set; const u='tick'===e.type?queueMicrotask:'raf'===e.type?It:'callback'===e.type?e.queueNotification:At(e.timeout); const s=()=>{
            i=!1, a&&(a=!1, l.forEach(((e)=>e())));
          }; return Object.assign({}, r, {subscribe(e) {
            const t=r.subscribe((()=>o&&e())); return l.add(e), ()=>{
              t(), l.delete(e);
            };
          }, dispatch(e) {
            try {
              return o=!e?.meta?.[Tt], a=!o, a&&(i||(i=!0, u(s))), r.dispatch(e);
            } finally {
              o=!0;
            }
          }});
        })('object'==typeof n?n:void 0)), r;
      })(c); return me(l, a, s(...'function'==typeof i?i(d):d()));
    }({reducer: Wf(Wf({}, qr.reducerPath, qr.reducer), 'queryReducer', Qd), middleware: function(e) {
      return e().concat(qr.middleware);
    }}); !function(e, t) {
      !function() {
        const t=()=>e(xn()); Cn||'undefined'!=typeof window&&window.addEventListener&&(window.addEventListener('visibilitychange', (()=>{
'visible'===window.document.visibilityState?t():e(En());
        }), !1), window.addEventListener('focus', t, !1), window.addEventListener('online', (()=>e(_n())), !1), window.addEventListener('offline', (()=>e(kn())), !1), Cn=!0);
      }();
    }(Vf.dispatch), n.createRoot(document.getElementById('root')).render(e.createElement(xr, {store: Vf}, e.createElement(Uf, null)));
  })();
})();
