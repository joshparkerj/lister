(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(24)},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),s=(n(16),n(7)),c=n(1),l=n(2),m=n(3),u=n(5),p=n(4),f=n(6);n(18);var d=function(t){return i.a.createElement("div",{className:"Draggable",draggable:!0,onDragStart:function(e){return t.ods(e,t.item)}},t.item.content,i.a.createElement("button",{className:"delete-button",onClick:t.deleteItem},"X"))},v=(n(20),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(p.a)(e).call(this))).addItem=function(e){e.preventDefault(),t.props.addItem({list:t.props.title,content:t.state.item}),t.setState({item:""})},t.hc=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t.onDragOver=function(t){t.preventDefault()},t.onDrop=function(e){var n=e.dataTransfer.getData("id");t.props.moveItem(n,t.props.title)},t.onDragStart=function(t,e){t.dataTransfer.setData("content",e.content),t.dataTransfer.setData("id",e.ID)},t.deleteItem=function(e){t.props.removeItem(e)},t.itemMapper=function(e,n){return i.a.createElement(d,{key:n,item:e,ods:t.onDragStart,deleteItem:function(){return t.deleteItem(e.ID)}})},t.removeList=function(){t.props.removeList(t.props.listIndex)},t.state={item:""},t}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Droppable",onDragOver:this.onDragOver,onDrop:this.onDrop},i.a.createElement("div",{className:"droppable-top"},i.a.createElement("h1",null,this.props.title),i.a.createElement("button",{className:"delete-button",onClick:this.removeList},"X")),i.a.createElement("form",{autocomplete:"off",onSubmit:this.addItem},i.a.createElement("button",{type:"submit"},"ADD ITEM TO THIS LIST"),i.a.createElement("input",{onChange:this.hc,name:"item",value:this.state.item})),this.props.items.map(this.itemMapper))}}]),e}(a.Component)),h=(n(22),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(p.a)(e).call(this))).hc=function(e){t.setState(Object(c.a)({},e.target.name,e.target.value))},t.addList=function(e){e.preventDefault(),t.setState({listTitles:[].concat(Object(s.a)(t.state.listTitles),[t.state.listTitle]),listTitle:""})},t.removeList=function(e){t.setState({listTitles:t.state.listTitles.filter(function(t,n){return n!==e})})},t.addItem=function(e){e.ID=t.state.nextID,t.setState({items:[].concat(Object(s.a)(t.state.items),[e]),nextID:t.state.nextID+1})},t.moveItem=function(e,n){t.setState({items:t.state.items.map(function(t){return t.ID===parseInt(e)&&(t.list=n),t})})},t.removeItem=function(e){t.setState({items:t.state.items.filter(function(t){return t.ID!==e})})},t.listMapper=function(e,n){return i.a.createElement(v,{key:n,listIndex:n,title:e,items:t.state.items.filter(function(t){return t.list===e}),addItem:t.addItem,removeItem:t.removeItem,moveItem:t.moveItem,removeList:t.removeList})},t.state={listTitles:[],listTitle:"",items:[],nextID:0},t}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("form",{autocomplete:"off",onSubmit:this.addList},i.a.createElement("button",{type:"submit"},"ADD ANOTHER LIST"),i.a.createElement("input",{onChange:this.hc,name:"listTitle",value:this.state.listTitle})),i.a.createElement("div",{className:"the-lists"},this.state.listTitles.map(this.listMapper)))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d98ce54e.chunk.js.map