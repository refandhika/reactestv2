(this.webpackJsonpreactestv2=this.webpackJsonpreactestv2||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),i=a.n(c),r=(a(29),a(7)),s=a(5),o=(a(30),a(20)),m=a.n(o);var u=function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("h1",null,"Welcome Home!"),l.a.createElement("p",null,"This is our home, welcome and make it yours!"),l.a.createElement("p",null,"Navigation is on your left, you can't miss it."))},p=a(9),h=a(10),d=a(12),E=a(11),g=a(13),v=(a(31),["Lorem","Ipsum","Dolor","Sit","Amet"]),f=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={total:v.length,index:0,fading:!1},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.changeText()}),4e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timerID)}},{key:"changeText",value:function(){var e=this,t=this.state.total,a=this.state.index;this.setState({fading:!0}),this.timer=setTimeout((function(n){a<t-1?e.setState({index:a+1}):e.setState({index:0}),e.setState({fading:!1})}),500)}},{key:"render",value:function(){var e=this.state.index,t="Part-inner";return this.state.fading&&(t="Part-inner faded"),l.a.createElement("div",{className:"FadingText"},l.a.createElement("h2",null,"Fading Text"),l.a.createElement("p",null,"Below is an example of changing text with fading animation. Useful for fade changing a word. Or even a sentences."),l.a.createElement("div",{className:"Example"},l.a.createElement("p",null,"This ",l.a.createElement("span",{className:"Part"},l.a.createElement("span",{className:t},v[e]))," will changing every 4 seconds.")))}}]),t}(l.a.Component),y=a(21),x=a.n(y),N=(a(32),["Lorem","Ipsum","Dolor","Sit","Amet"]),b=function(e){function t(e){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).call(this,e))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e={strings:N,typeSpeed:50,backSpeed:50,loop:!0,backDelay:4e3,showCursor:!1};this.typed=new x.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"TypingText"},l.a.createElement("h2",null,"Typing Text"),l.a.createElement("p",null,"Below is an example of changing text with typing animation using library ",l.a.createElement("strong",null,"Typed.js"),". Useful for re-typing a word. Or a part of sentences."),l.a.createElement("div",{className:"Example"},l.a.createElement("p",null,"This ",l.a.createElement("span",{className:"Part"},l.a.createElement("span",{className:"Part-inner",ref:function(t){e.el=t}}))," will changing every 4 seconds.")))}}]),t}(l.a.Component);var w=function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("h1",null,"Changing Text"),l.a.createElement(f,null),l.a.createElement(b,null))};var k=function(){return l.a.createElement("div",{className:"MultiSection"},l.a.createElement("h1",null,"Multi Section"))};var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,{basename:"/reactestv2/"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"App-brand"},l.a.createElement(r.b,{to:"/"},l.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})))),l.a.createElement("div",{className:"App-content"},l.a.createElement("aside",{className:"App-side"},l.a.createElement("nav",{className:"App-nav"},l.a.createElement(r.b,{to:"/",className:"App-link"},"Home"),l.a.createElement(r.b,{to:"/changing-text",className:"App-link"},"Changing Text"),l.a.createElement(r.b,{to:"/multi-section",className:"App-link"},"Multi Section"))),l.a.createElement("main",{className:"App-main"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(u,null)),l.a.createElement(s.a,{path:"/changing-text"},l.a.createElement(w,null)),l.a.createElement(s.a,{path:"/multi-section"},l.a.createElement(k,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4c7bb6f0.chunk.js.map