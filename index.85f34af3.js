!function(e,t){let n=document.createElement("ul");for(let l in e.append(n),t){let e=document.createElement("li");if(e.textContent=l,n.append(e),Object.keys(t[l]).length>0){let n=document.createElement("ul");for(let r in e.append(n),t[l]){let e=document.createElement("li");if(e.textContent=r,n.append(e),Object.keys(t[l][r]).length>0){let n=document.createElement("ul");for(let a in e.append(n),t[l][r]){let e=document.createElement("li");e.textContent=a,n.append(e)}}}}}}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.85f34af3.js.map
