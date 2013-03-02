`jQuery/src/core.js:800`
```javascript
// function name isArraylike
   // argument is obj
   //variables 
   //*length 
   //*type
   // line 804 is a conditional argument
   // line 808 is a conditional argument
   // line 812 contains the return values for the entire function 

function isArraylike( obj ) {
    
    var length = obj.length,
		type = jQuery.type( obj );        
        

	if ( jQuery.isWindow( obj ) ) {
       return false;
	}
   
	if ( obj.nodeType === 1 && length ) {
       return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}
```


`jQuery/src/effects.js: 586`
```javascript

// function name genFx
// arguments type and includeWidth
// variables
// *type
// *attrs
// *i
// line 594 is a conditional argument
// lind 599 is a conditional argument
// line 603 returns values for attrs if line 599 is truthy
function genFx( type, includeWidth ) {
    var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}
```

`jQuery/src/attributes.js: 395`
```javascript

// anonymous function for prop
// arguements elem, name, value
// variables
// *ret
// *hooks
// *notxml
// *nType
// lines 400-413 are conditional arguments
// line 414 returns value for ret if previous conditional arguments are truthy
// line 417 returns value for elem name if previous conditional arguments are falsey
// line 422 returns value for ret if line 413 conditions aren't truthy but line 421 conditions are truthy
// line 425 returns value for elem name if line 421 conditions aren't truthy
    prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},
```
    
