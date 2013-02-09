git add`dig1102_assigments/homework-3.1.js:120`
```javascript

  var importNames = importName.split (','),
  //split queue of imported names and seperate with a ,
  
                retStash    = {};
            for ( var i = 0, l = importNames.length; i < l; i ++ ) {
                // length of importNames list is at least 1
                
                var names = importNames [ i ] .split ( '=>' );
                if ( 1 < names.length ) {
                  retStash [ names [1] ] = this.stash [ names [0] ];
                }
                else {
                  retStash [ importNames [i] ] = this.stash [ importNames [ i ] ];
                }
            }
            return retStash;
                
```
`dig1102-assignments/homework-3.1.js:149`
```javascript

var NamespaceDefinition = function _Private_Class_Of_NamespaceDefinition ( nsObj ) {
        merge ( this, {
            namespaceObject: nsObj,
            requires       : [],
            useList        : [],
            stash          : {},
            defineCallback : undefined
        });
        // this var is equal to the function _Private_Class_Of_NamespaceDefinition which uses these definitions:
        //merge ( this ), { namespceObject: nsObj, requires : [], useList: [], stash: {}, defineCallback: undefined
        
        var _self = this;
        nsObj.enqueue ( function ( $c ) { _self.apply ( $c ); } );
    };
```
`dig1102-assignmenets/homework-3.1.2.js:5`
```javascript

current [ lastLeaf ]
// dictionary called lastLeaf
```

`dig1102-assignments/homework-3.1.2.js:63
```javascript

merge ( createNamespace, {
        'Object'  : NamespaceObjectFactory,
        Definition: NamespaceDefinition,
        Proc      : createProcedure
    } );
    return createNamespace;
    // merge list createNamespace using these definitions: 'Object":NamespaceObjectFactory, Definition: NamespaceDefinition, Proc: createProcedure
} )();
```
`dig1102-assignments/three.js/three.js:84`
```javascript

// GL STATE CONSTANTS

THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;

THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
//this is a dictionary
```

`dig1102-assignments/three.js/three.js:355`
```javascript

    	if ( /^rgb\((\d+),(\d+),(\d+)\)$/i.test( style ) ) {
        // if ( /^rgb... ) ) { 
// this starts definitions for a dictionary based on these criteria 
			var color = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec( style );

			this.r = Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255;
			this.g = Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255;
			this.b = Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255;
this ends the dictionary
			return this;
            // when these values are found return each one: r, g, b
            

		}
```

`dig1102-assignments/three.js/examples/js/exporters/GeometryExporter.js:15`
```javascript

    for ( var i = 0; i < geometry.vertices.length; i ++ ) {

    		var vertex = geometry.vertices[ i ];
			vertices.push( vertex.x, vertex.y, vertex.z );
            // for variable i when these criteria are met and there is a list then push these (vertex.x, vertex.y, vertex.z 
```

`dig1102-assignments/three.js/examples//js/exproters/GeometryExporter.js:139`
```javascript

function setBit( value, position, enabled ) {
                // this array is a list of values needed for this function

    		return enabled ? value | ( 1 << position ) : value & ( ~ ( 1 << position) );

		}

		function getNormalIndex( x, y, z ) {
                            
				var hash = x.toString() + y.toString() + z.toString();
                // these are variables that will be added to list

				if ( normalsHash[ hash ] !== undefined ) {

					return normalsHash[ hash ];

				}

				normalsHash[ hash ] = normals.length / 3;
               
				normals.push( x, y, z );
                // this is pushing the above returned values to the end of the hash list

				return normalsHash[ hash ];

		}
```



