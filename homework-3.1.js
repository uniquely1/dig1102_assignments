`namespace-js/src/namespace.js:2`
```javascript

var Namespace = ( function () {} );
    
    /* utility */
    
    var merge = function ( target, source ) {
        for ( var p in source )        
            if ( source.hasOwnProperty ( p )) target [ p ] = source [ p ];
                return target;
    };
    var _assertValidFQN = function ( fqn ) {
        if ( ! (/^[a-z0-9_.]+/ ).test ( fqn )) throw ( 'invalid namespace' );
    };
    
/* Merge Procedure */

    var Procedure = function _Private_Class_Of_Proc () {
        merge ( this, {
            state  : {},
            steps  : [],
            _status: 'init'
        });
    };
    
    merge ( Procedure.prototype, {
        next: function ( state ) {
            if ( state ) this.enqueue ( state );
                return this;
        },
        isRunning: function () {
            return ( this._status === 'running' );
        },
        enqueue: function ( state ){
            this.steps.push ( state );
        },
        dequeue: function (){
            return this.steps.shift ();
        },
        call: function ( initialState,callback ) {
            
            if ( this.isRunning () )  throw ( "do not run twice" ); 
            this.state = initialState || {};
            this.enqueue ( function ( $c ) {
                $c ();
                if ( callback ) callback ( this );
            });
            this._status = 'running';
            this._invoke ();
        },
        _invoke: function (){
            var _self = this;
            var step  = _self.dequeue ();
            if ( !step ){
                _self._status = 'finished';
                return;
            }
            if ( step.call ) {
                return step.call ( _self.state, function _cont ( state ) {
                    if ( state ) _self.state = state;
                    _self._invoke ();
                });
            }
            
/* Finish Process */

            var finishedProcess = 0;
            if ( step.length === 0 ) _self._invoke ();
                for ( var i = 0, l = step.length; i < l ; i ++ ) {
                    step [ i ] .call ( _self.state, function _joinWait () {
                        finishedProcess ++;
                        if ( finishedProcess == l ) {
                            _self._invoke ();
                    }
                });
            }
        }
    });

/*Create Procedure*/

    var createProcedure = function ( state ) {
        return new Procedure () .next ( state );
    };
    
/* Merge Namespace Object */

    var NamespaceObject = function _Private_Class_Of_NamespaceObject ( fqn ) {
        merge ( this, {
            stash: { CURRENT_NAMESPACE : fqn },
            fqn  : fqn,
            proc : createProcedure()
        });
    };
    
    merge ( NamespaceObject.prototype, {
        enqueue: function ( context) { 
            this.proc.next ( context); 
        },
        call: function ( state, callback ) { 
            this.proc.call ( state, callback ); 
        },
        valueOf: function () { 
            return '#NamespaceObject <' + this.fqn + '>'; 
        },
        merge: function ( obj ) {
            merge ( this.stash, obj );
                return this;
        },
        getStash: function () {
            return this.stash;
        },
        getExport: function ( importName ) {
            if ( importName === '*' ) return this.stash;
            
/* Import Names */

            var importNames = importName.split (','),
                retStash    = {};
            for ( var i = 0, l = importNames.length; i < l; i ++ ) {
                var names = importNames [ i ] .split ( '=>' );
                if ( 1 < names.length ) {
                  retStash [ names [1] ] = this.stash [ names [0] ];
                }
                else {
                  retStash [ importNames [i] ] = this.stash [ importNames [ i ] ];
                }
            }
            return retStash;
        }
    });
    
/* NamespaceObjectFactory */

    var NamespaceObjectFactory = ( function () {
        var cache = {};
        return {
            create :function ( fqn ) {
                _assertValidFQN ( fqn ); 
                return ( cache [ fqn ] || ( cache [ fqn ] = new NamespaceObject ( fqn )));
            }
        };
    })();
    
/*NamespaceDefinition */

    var NamespaceDefinition = function _Private_Class_Of_NamespaceDefinition ( nsObj ) {
        merge ( this, {
            namespaceObject: nsObj,
            requires       : [],
            useList        : [],
            stash          : {},
            defineCallback : undefined
        });
        var _self = this;
        nsObj.enqueue ( function ( $c ) { _self.apply ( $c ); } );
    };

    merge ( NamespaceDefinition.prototype, {
        use: function ( syntax ) {
            this.useList.push( syntax );
            var splitted   = syntax.split( /\s+/ );
            var fqn        = splitted [ 0 ];
            splitted [ 0 ] = '';
            var importName = splitted.join('');
            _assertValidFQN ( fqn );
            this.requires.push( function ( $c ) {
                var context = this;
                var require = NamespaceObjectFactory.create ( fqn );
                require.call( this, function ( state ) {
                    context.loadImport ( require,importName );
                    $c();
                });
            });
            return this;
         }
    },
    
/* mergeStashWithNS */ 

        _mergeStashWithNS function ( nsObj ) {
            var nsList  = nsObj.fqn.split( /\./ );
            var current = this.getStash ();

            for ( var i = 0, l=nsList.length; i < l -1; i ++ ) {
                if ( !current[nsList [ i ] ] ) current [ nsList [ i ] ] = {};
                current = current [ nsList [ i ] ];
            }
        }
        
```