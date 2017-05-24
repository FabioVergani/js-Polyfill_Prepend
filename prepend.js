(function(w){
	var o=w.Element.prototype,p="prepend";
	if(!((p in o) && o.hasOwnProperty(p))){
		Object.defineProperty(o,p,{
			value:function(){
				var d=w.document,a=d.createDocumentFragment(),m=arguments,l=m.length,i=0,b;
				while(i<l){b=m[i];a.appendChild((b instanceof Node)?b:d.createTextNode(String(b)));++i};
				(b=this).insertBefore(a,b.firstChild);
			}
		})
	}
})(window);
