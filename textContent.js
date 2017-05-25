(function(w){
	function f(a,b,c){var o=a,p=b;if(!((p in o)&&o.hasOwnProperty(p))){Object.defineProperty(o,p,c)}}
	var E=w.Element.prototype;
	f(E,'prepend',{value:function(){var d=w.document,n=w.Node,a=d.createDocumentFragment(),m=arguments,l=m.length,i=0,b;while(i<l){b=m[i];a.appendChild((b instanceof n)?b:d.createTextNode(String(b)));++i};(b=this).insertBefore(a,b.firstChild)}})
	f(E,'textContent',{value:{get:function(){return innerText.get.call(this)},set:function(x){return innerText.set.call(this,x)}}});
})(window);
