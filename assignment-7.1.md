`three_js/build/three.js: 278`
```javascript

    setRGB: function ( r, g, b ) {
    // setRGb name of function
		this.r = r;
		this.g = g;
		this.b = b;
    // arguments are this.r =r, this.g=g, this.b=b
		return this;
    // return values of this
	},
   
   //invocations on lines 621, 9639, 10426
   // lines invoked on
```
`three_js/build/three.js;621`

```
   
   
   
`three_js/build/three.js: 858`
```javascript
    normalize: function () {
        // function name normalize

		var l = this.length();
        // defines var for this.length

		if ( l === 0 ) {
        // says if var 1 is equal to 0
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 1;
        // use these varibales
		} else {
        
			l = 1 / l;
            // says or if var 1 is equal to 1

			this.x = this.x * l;
			this.y = this.y * l;
			this.z = this.z * l;
			this.w = this.w * l;
            // use these varibales

		}

		return this;
        // and return these values for this
        // invocations of this are on lines 1249, 1739, 2398

	},
    
```