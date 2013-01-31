`namespace-js/src/namespace.js:164`
```javascript

   var lastLeaf = nsList[nsList.length-1];
            current[lastLeaf] = merge(current[lastLeaf] || {}, nsObj.getStash());
        },
        loadImport: function(nsObj,importName){
            if( importName ){
                merge( this.stash, nsObj.getExport(importName) );
            }else{
                this._mergeStashWithNS( nsObj );
            }
        },
        define: function(callback){
            var nsDef = this, nsObj = this.namespaceObject;
            this.defineCallback = function($c) {
                var ns = { 
                    provide : function(obj){
                        nsObj.merge(obj);
                        $c();
                    } 
                }; 
                merge(ns, nsDef.getStash());
                merge(ns, nsObj.getStash());
                callback(ns);
            };
        },
        getStash: function(){
            return this.stash;
        },
        valueOf: function(){
            return "#NamespaceDefinition<"+this.namespaceObject+"> uses :" + this.useList.join(',');
        },
        apply: function(callback){
            var nsDef = this;
            createProcedure(nsDef.requires)
            .next(nsDef.defineCallback)
            .call(nsDef,function(){
                callback( nsDef.getStash() );
            });
        }
    });

    var createNamespace = function(fqn){
        return new NamespaceDefinition(
            NamespaceObjectFactory.create(fqn || 'main')
        );
    };
    merge(createNamespace, {
        'Object'  : NamespaceObjectFactory,
        Definition: NamespaceDefinition,
        Proc      : createProcedure
    });
    return createNamespace;
})();

Namespace.use = function(useSyntax){ return Namespace().use(useSyntax); }
Namespace.fromInternal = Namespace.GET = (function(){
    var get = (function(){
        var createRequester = function() {
            var xhr;
            try { xhr = new XMLHttpRequest() } catch(e) {
                try { xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch(e) {
                    try { xhr = new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch(e) {
                        try { xhr = new ActiveXObject("Msxml2.XMLHTTP") } catch(e) {
                            try { xhr = new ActiveXObject("Microsoft.XMLHTTP") } catch(e) {
                                throw new Error( "This browser does not support XMLHttpRequest." )
                            }
                        }
                    }
                }
            }
            return xhr;
        };
        var isSuccessStatus = function(status) {
            return (status >= 200 && status < 300) || 
                    status == 304 || 
                    status == 1223 ||
                    (!status && (location.protocol == "file:" || location.protocol == "chrome:") );
        };
        
        return function(url,callback){
            var xhr = createRequester();
            xhr.open('GET',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if( isSuccessStatus( xhr.status || 0 )){
                        callback(true,xhr.responseText);
                    }else{
                        callback(false);
                    }
                }
            };
            xhr.send('')
        };
    })();

    return function(url,isManualProvide){
        return function(ns){
            get(url,function(isSuccess,responseText){
                if( isSuccess ){
                    if( isManualProvide )
                        return eval(responseText);
                    else
                        return ns.provide( eval( responseText ) );
                }else{
                    var pub = {};
                    pub[url] = 'loading error';
                    ns.provide(pub);
                }
            });
        };
    };
})();

Namespace.fromExternal = (function(){
    var callbacks = {};
    var createScriptElement = function(url,callback){
        var scriptElement = document.createElement('script');

        scriptElement.loaded = false;
        
        scriptElement.onload = function(){
            this.loaded = true;
            callback();
        };
        scriptElement.onreadystatechange = function(){
            if( !/^(loaded|complete)$/.test( this.readyState )) return;
            if( this.loaded ) return;
            scriptElement.loaded = true;
            callback();
        };
        scriptElement.src = url;
        document.body.appendChild( scriptElement );
        return scriptElement.src;
    };
    var domSrc = function(url){
        return function(ns){
            var src = createScriptElement(url,function(){
                var name = ns.CURRENT_NAMESPACE;
                var cb = callbacks[name];
                delete callbacks[name];
                cb( ns );
            });
        }
    };
    domSrc.registerCallback = function(namespace,callback) {
        callbacks[namespace] = callback;
    };
    return domSrc;
})();

try{ module.exports = Namespace; }catch(e){}
```