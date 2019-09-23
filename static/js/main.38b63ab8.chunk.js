(window["webpackJsonprecipe-app"]=window["webpackJsonprecipe-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(69)},40:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),s=(a(40),a(6)),l=a(7),o=a(11),m=a(8),d=a(12),u=a(9),p=a.n(u),f=a(10),h=a(33),g=a.n(h),E=(a(67),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),console.log("hello",a.handleSubmit),a.props.getRecipes(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"formContainer"},r.a.createElement("input",{className:"formInput",type:"text",name:"recipeName",placeholder:"enter word ie. chicken"}),r.a.createElement("button",null,r.a.createElement(f.Link,{activeClass:"active",to:"container",spy:!0,smooth:!0,offset:0,duration:600,className:"formButton"}),r.a.createElement("i",{"aria-hidden":"true",title:"Arrow down icon",className:"fas fa-arrow-down"})," Find Recipe")))}}]),t}(n.Component)),b=a(18),v=a.n(b),w=a(34),N=function(e){var t=function(){var t=Object(w.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://www.food2fork.com/api/get?key=".concat("30c105daaed4f60bf6a575ed72e9bb81","&rId=").concat(a));case 2:n=t.sent,e.setCurrentIngredients(n.data.recipe),e.getModal(!0);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"innerWrapper"},r.a.createElement("div",{id:"formButton",className:"container"},e.myRecipes.map(function(e,a){return r.a.createElement("div",{id:"container",key:a,tabIndex:"0",className:"recipeContainer"},r.a.createElement("div",{className:"recipeImageTitle"},r.a.createElement("img",{className:"recipeImage",src:e.image_url,alt:e.title}),r.a.createElement("h2",{className:"recipeTitle"},e.title)),r.a.createElement("div",{className:"recipeContent"},r.a.createElement("p",{className:"recipePublisher"},r.a.createElement("span",{className:"publisher"},"Publisher:"),e.publisher),r.a.createElement("button",{onClick:function(){return t(e.recipe_id)},className:"ingredientsButton"},"View Ingredients")))}))))},k=function(e,t){return r.a.createElement("div",{key:t,className:"modal"},r.a.createElement("div",{className:"modalImageContainer"},r.a.createElement("div",{className:"modalImageSize"},r.a.createElement("img",{className:"modalImage",src:e.ingredientsObject.image_url,alt:e.ingredientsObject.title}))),r.a.createElement("div",{className:"modalContents"},r.a.createElement("h1",{className:"modalTitle"},e.ingredientsObject.title),r.a.createElement("div",{className:"modalIngredients"},e.ingredientsObject.ingredients?e.ingredientsObject.ingredients.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("li",{key:t},e))}):null),r.a.createElement("button",{className:"recipeButton"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.ingredientsObject.source_url},r.a.createElement("i",{"aria-hidden":"true",title:"External link",className:"fas fa-external-link-alt"}),"  Get Recipe! ")),r.a.createElement("button",{onClick:function(){return e.closeModal(!1)},className:"closeButton"},r.a.createElement("i",{"aria-hidden":"true",title:"Close icon",className:"fas fa-window-close"}),"  Close ")))},y="30c105daaed4f60bf6a575ed72e9bb81",C="https://www.food2fork.com/api/search",j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).setCurrentIngredients=function(t){e.setState({currentIngredients:t})},e.getRecipes=function(t){t.preventDefault();var a=t.target.elements.recipeName.value;p()({method:"GET",url:C,dataResponse:"json",params:{key:y,q:a,format:"json"}}).then(function(t){if(0===t.data.recipes.length)g()({title:"Sorry..., That word cannot be found, please try another!",icon:"error"});else{var a=t.data.recipes.slice(0,6);e.setState({recipes:a,hasRecipes:!1}),f.animateScroll.scrollTo(600)}}).catch(function(e){return e})},e.getModal=function(t){e.setState({isModalShown:t})},e.closeModal=function(t){e.setState({isModalShown:t})},e.state={recipes:[],currentIngredients:[],hasRecipes:!0,isModalShown:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"headerContainer"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"headerContents"},r.a.createElement("div",{className:"foodieLogo"},"foodie ",r.a.createElement("span",{role:"img","aria-label":"folk, plate and knife"},"\ud83c\udf7d")),r.a.createElement("h1",{className:"headerTitle"},"what's cooking tonight? "),r.a.createElement("p",{className:"typeWord"},"Type a word to get a recipe below!"),r.a.createElement(E,{getRecipes:function(t){return e.getRecipes(t)}})))),r.a.createElement("div",{className:"modalContainer"},r.a.createElement(N,{id:"recipe",myRecipes:this.state.recipes,setCurrentIngredients:this.setCurrentIngredients,getModal:this.getModal}),this.state.isModalShown?r.a.createElement(k,{ingredientsObject:this.state.currentIngredients,closeModal:this.closeModal}):null),r.a.createElement("footer",{className:"recipeFooter"},r.a.createElement("p",{className:"footerCopy"}," Created by Whitney Reid \xa9 2019")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.38b63ab8.chunk.js.map