git# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. For this assignment, pick one or more Javascript files from your project (you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!

`three.js/docs/page.js:4`
```javascript
    var section = /\/(manual|api)\//.exec( window.location.pathname )[ 1 ].toString().split( '.html' )[ 0 ];
    // Variable: section
    // Assignment operator: =
    // Integer: 1
```
    
'three.js/docs/page.js:7`
```javascript
    if ( section == 'manual' )
    // Element: section
    // Comparison operator: ==
    // Operand: 'manual'
```

'three.js/docs/page.js:62-71`
```javascript
    {

    	var elements = document.getElementsByTagName( 'code' );

		for ( var i = 0; i < elements.length; i ++ ) {

			var e = elements[ i ];
			e.className += ' prettyprint';

		}
        // Block: everything within the curly brackets
        // Variable: elements
        // Assignment operator: =
        // Function: document.getElementByTagName
        // Comparison operator: <
        // Arithmetic operator: ++
        // Assignment operator: +=
        // String literal: prettyprint
```

'three.js/build/three.js:38'
```javascript
    return ( -1 < index && index ) === (this.length - t.length);
    // Statement: return
    // Interger: -1
    // Comparison operator: <
    // Logical operator; &&
    // Operand: index
    // Comparison operator: ===
    // Arithmetic operator: -
```

'three.js/build/three.js:58'
```javascript
    var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
    // Variable: vendors
    // Arithmetic operator: =
    // Array: [ 'ms', 'moz', 'webkit', 'o' ]
    // Elements: ms, moz, webkit, o
```

'three.js/build/three.js:67'
```javascript
    if ( window.requestAnimationFrame === undefined )
    // Statement: if
    // Function: window.requestAnimationFrame
    // Comparison operator: ===
    // Special literal: undefined
```

'three.js/build/three.js:71'
```javascript
    		var currTime = Date.now(), timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
            // Variable: currTime
            // Arithmetic operator: =
            // Function: timeToCall
            // Arithmetic operator: =
            // Function: Math.max( 0, 16 - ( currTime - lastTime ) )
```

'three.js/build/three.js:10205'
```javascript
    function handle_hierarchy( node, id, parent, material, obj )
    // Function: handle_hierarchy
    // Array: ( node, id, parent, material, obj )
    // Elements: node, id, parent, material, obj
```

'three.js/build/three.js:10270'
```javascript
    async_callback_gate
    // Constant: async_callback_gate
```

'three.js/editor/js/ui/Sidebar.Material.js: 33'
```javascript
        materialNameRow.add( new UI.Text().setValue( 'Name' ).setColor( '#666' ) );
        // Function: materialNameRow.add
        // Literal: 'Name'
```

'three.js/editor/js/ui/Sidebar.Material.js: 233'
```javascript
        if ( material instanceof materialClasses[ materialClass.getValue() ] == false ) {
        // Statement: if
        // Comparison operator: ==
        // Boolean: false
```

'three.js/editor/js/ui/Sidebar.Material.js: 240'
```javascript
    if ( material.color !== undefined )
    // Statement: if
    // Object: material.color
    // Comparison operator: !==
    // Value: undefined
```

'three.js/editor/js/ui/Sidebar.Material.js: 355'
```javascript
                    material.specularMap = specularMapEnabled ? materialSpecularMap.getValue() : null;
                    // Object: material.specularMap
                    // Arithmetic operator: =
                    // Conditional operator: ?
                    // SpecialLiteral: null
```

'three.js/editor/js//ui/Sidebar.Material.js: 362'
```javascript
                    if ( specularMapEnabled ) textureWarning = true;
                    // Statment: if
                    // Arithmetic operator: =
                    // Boolean: true
```

'three.js/editor/js/ui/Sidebar.Material.js: 456'
```javascript
        for ( var key in materialClasses ) {
        // Statement: for
        // Variable: key
        // In operator: in
```

'three.js/source/cameras/PerspectiveCamera.js: 96'
```javascript
            var left = aspect * bottom;
            // Variable: left
            // Arithmetic operator: =
            // Arithmetic operator: *
```

'threee.js/source/cameras/PerspectiveCamera.js: 104' 
```javascript
            top - ( this.y + this.height ) * height / this.fullHeight,
            // Arithmetic operator: -
            // String: ( this.y + this.height )
            // Arithmetic operator: +
            // Arithmetic operator: *
            // Arithmetic operator: /
```

'three.js/source/core/BufferGeometry.js: 48'
```javascript
        if ( positionArray !== undefined ) {
            
        // Statement: if
        // String: ( positionArray !== undefined )
        // Compariason operator: !==
        // Special Literal: undefined
```

'three.js/source/core/BufferGeometry.js: 85'
```javascript
            if( positions.length >= 3 ) {
            // Statement: if
            // String: ( positions.length >= 3 )
            // Comparison operator: >=
            // Interger: 3
```

'three.js/source/core/BufferGeometry.js: 91'
```javascript
            for ( var i = 3, il = positions.length; i < il; i += 3 ) {
            // Statement: for
            // Variable: i
            // Arthimetic operator: =
            // Literal: i1
            // Arithmetic operator: =
            // Object: positions
            // Object property: length
            // Comparison operator: <
            // Variable: i
            // Assignment operator: +=
            // Integer: 3
```

'three.js/source/core/BufferGeometry.js: 103'
```javascript
            } else if ( x > bb.max.x ) {
            // Statement: else if
            // Variable: x
            // Arithmetic operator: >
            // Variable: bb.max.x
```

'three.js/source/core/BufferGeometry.js: 133'
```javascript
        if ( positions === undefined || positions.length === 0 )
        // Statement: if 
        // Object: positions
        // Comparison operator: ===
        // Special literal: undefined
        // Object: positions
        // Object property: length
        // Comparison operator: ===
        // Integer: 0
```

'three.js/source/core/BufferGeometry.js: 144'
```javascript
        if ( this.boundingSphere === null )
        // Statement: if
        // Object: this
        // Object property: boundingSphere
        // Comparison operator: ===
        // Special literal: null
```

'three.js/source/core/BufferGeometry.js: 150'
```javascript
            var positions = this.attributes[ "position" ].array;
            // Variable: positions
            // Arithmetic operator: =
            // Object: this
            // Object property: attributes
            // Object property name: position
```

'three.js/source/core/BufferGeometry.js: 163'
```javascript
                radiusSq =  x * x + y * y + z * z;
                // Object: radiusSq
                // Arithmetic operator:=
                // Variables: x, x, y, y, z, z
                // Arithmetic operators: *, +
```

'three.js/source/core/Geometry.js: 324'
```javascript
            if ( ! face.__originalVertexNormals ) face.__originalVertexNormals = [];
            // Statement: if
            // Logical operator: ! 
            // Constant: face._originalVertexNormals
            // Arithmetic operator: =
```

'three.js/source/core/Geometry.js: 471'
```javascript
            for ( j = 0, jl = offsets.length; j < jl; ++ j )
            // Statement: for
            // Object: j
            // Arithmetic operator: =
            // Integer: 0
            // Object: j1
            // Arithmetic operator: =
            // Object: offsets
            // Object property: length
            // Object: j
            // Arithmetic operator: <
            // Object: j1
            // Arithmetic operator: ++
```

'three.js/source/core/Geometry.js: 471'
```javascript
                tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();
                // Object: tmp
                // Object property: sub
                // Literal: n.multiplyScalar
```

'three.js/source/core/Object3D.js: 112'
```javascript
            if ( this.useQuaternion === false )  
            // Statement: if
            // Arithmetic operator: ===
            // Boolean: false
```

'three.js/source/core/Object3D.js: 126'
```javascript
        add: function ( object ) {
        // Function: object
```


'three.js/source/core/Object3D.js: 150'
```javascript
            while ( scene.parent !== undefined ) {
            // Comparison operator: !==
            // Special literal: undefined
```

'three.js/source/core/Object3D.js: 156'
```javascript
             if ( scene !== undefined && scene instanceof THREE.Scene )  {
            // Statement: if
            // Object: scene
            // Comparison operator: !==
            // Logical operator: &&
```

'three.js/source/core/Object3D.js: 209'
```javascript        
        for ( var i = 0, l = this.children.length; i < l; i ++ ) {
        // Statement: for
        // Variable: i
        // Arithmetic operator: =
        // Integer: 0
        // Integer: 1
        // Object: this
        // Properties: children, length
        // Variable: i
        // Arithmetic operator: <
        // Integer: 1
        // Variable: i
        // Arithmetic operator: ++
```

'three.js/source/core/Object3D.js: 219'
```javascript
            if ( recursive === true ) {
            // Statement: if
            // Object: recursive
            // Arithmeticd operator: ===
            // Boolean: true
```

'three.js/source/extras/ScenUtils.js: 11'
```javascript
        for ( var i = 0, l = materials.length; i < l; i ++ ) {
        // Statement: for
        // Variable: i
        // Arithmetic operator: =
        // Integer: 0
        // Integer: 1
        // Arithmetic operator: =
        // Object: materials
        // Obkject property: length
        // Variable: i
        // Arithmetic operator: <
        // Integer: 1
        // Arithmetic operator: ++
```


'three.js/source/extras/ScenUtils.js: 21'
```javascript
    detach : function ( child, parent, scene ) {
    // Function: detach
    // Array: child, parent, scene
```

'three.js/source/extras/lights/HemisphereLight.js: 11'
```javascript
    this.position = new THREE.Vector3( 0, 100, 0 );
    // Object: this
    // Object property: position
    // Arithmetic operator: =
    // Object: THREE
    // Object property: Vector3
    // Value array: 0, 100, 0
```

'three.js/source/extras/lights/HemisphereLight.js: 13'
```javascript
    this.intensity = ( intensity !== undefined ) ? intensity : 1;
    // Object: this
    // Object property: intensity
    // Arithmetic operator: =
    // Value: intensity
    // Comparison operator: !==
    // Special literal: undefined
```

'three.js/source/extras/lights/PointLight.js: 5'
```javascript
THREE.PointLight = function ( hex, intensity, distance ) {
// Object: THREE
// Object property: PointLight
// Arithmetic operator: =
// Function: function
// Value array: hex, intensity, distance
```

'three.js/source/extras/lights/SpotLight.js: 14'
```javascript
this.angle = ( angle !== undefined ) ? angle : Math.PI / 2;
// Object: this
// Object property: angle
// Arithmetic operator: =
// Value: angle
// Comparison operator: !=
// Special literal: undefined
// Object: Math
// Object property: PI
// Arithmetic operator: / 
// Integer: 2
```

'three.js/source/extras/lights/SpotLight.js: 15'
```javascript
this.exponent = ( exponent !== undefined ) ? exponent : 10;
// Object: this
// Object property: exponent
// Arithmetic operators: =, !==
```

'three.js/source/extras/loaders/JSONLoader.js: 8'
```javascript
THREE.Loader.call( this, showStatus );
// Object: THREE
// Object property: Loader
// Function: call
// Value array: this, showstatus
```

'three.js/source/extras/loaders/JSONLoader.js: 22'
```javascript
texturePath = texturePath && ( typeof texturePath === "string" ) ? texturePath : this.extractUrlBase( url );
// Object: texturePath
// Arithmetic operator: =
// Object: texturePath
// Logical operator: &&
```

'three.js/source/extras/loaders/JSONLoader.js: 44'
```javascript
                    context.createModel( json, callback, texturePath );
                    // Object: context
                    // Object property: createModel
                    // Value array: json, callback, texturePath
```
    
'three.js/source/extras/loaders/JSONLoader.js: 48'
```javascript
                    console.warn( "THREE.JSONLoader: [" + url + "] seems to be unreachable or file there is empty" );
                    // Object: console
                    // Object property: warn
                    // Arithmetic operator: =
```

'three.js/source/extras/loaders/JSONLoader.js: 64'
```javascript
        } else if ( xhr.readyState === xhr.LOADING ) {
        // Statement: else if
        // Arithmetic operator: ===
```

'three.js/source/extras/loaders/JSONLoader.js: 70'
```javascript
                    length = xhr.getResponseHeader( "Content-Length" );
                    // Value: length
                    // Arithmetic operator: =
                    // Object: xhr
                    // Object property: getResponseHeader
                    // Object property name: Content-Length
```



    
