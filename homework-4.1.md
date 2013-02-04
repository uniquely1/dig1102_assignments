`dig1102_assigments/homework-3.1.js:120`
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
                
                

