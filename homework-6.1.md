`three_js//src/loaders/JSONLoader.js`
```javascript
    for ( i = 0; i < json.uvs.length; i++ ) {

			if ( json.uvs[ i ].length ) nUvLayers ++;

		}

		for ( i = 0; i < nUvLayers; i++ ) {

			geometry.faceUvs[ i ] = [];
			geometry.faceVertexUvs[ i ] = [];

		}

		offset = 0;
		zLength = vertices.length;

		while ( offset < zLength ) {
            //while offset is less than zlength

			vertex = new THREE.Vector3();
            // and vertex = new THREE.Vector3
            // get these dimensions
			vertex.x = vertices[ offset ++ ] * scale;
			vertex.y = vertices[ offset ++ ] * scale;
			vertex.z = vertices[ offset ++ ] * scale;
           
			geometry.vertices.push( vertex );
             // and push these vertices to list vertex

		}

		offset = 0;
		zLength = faces.length;

		while ( offset < zLength ) {
        // while offset is less than zlength
			type = faces[ offset ++ ];
        // and type = faces index of offset +1

			isQuad          	= isBitSet( type, 0 );
			hasMaterial         = isBitSet( type, 1 );
			hasFaceUv           = isBitSet( type, 2 );
			hasFaceVertexUv     = isBitSet( type, 3 );
			hasFaceNormal       = isBitSet( type, 4 );
			hasFaceVertexNormal = isBitSet( type, 5 );
			hasFaceColor	    = isBitSet( type, 6 );
			hasFaceVertexColor  = isBitSet( type, 7 );
            // this comment was in the code already
			//console.log("type", type, "bits", isQuad, hasMaterial, hasFaceUv, hasFaceVertexUv, hasFaceNormal, hasFaceVertexNormal, hasFaceColor, hasFaceVertexColor);
             
			if ( isQuad ) {
                // and if this is true

				face = new THREE.Face4();
                // and this

				face.a = faces[ offset ++ ];
				face.b = faces[ offset ++ ];
				face.c = faces[ offset ++ ];
				face.d = faces[ offset ++ ];

				nVertices = 4;
                // then nVertices is equal to 4
			} else {
                // or if the following is true
				face = new THREE.Face3();

				face.a = faces[ offset ++ ];
				face.b = faces[ offset ++ ];
				face.c = faces[ offset ++ ];

				nVertices = 3;
                // then nVertices is equal to 3
			}

			if ( hasMaterial ) {
                // if the following is true
				materialIndex = faces[ offset ++ ];
                // and this
				face.materialIndex = materialIndex;
                // and this
                
			}

			// to get face <=> uv index correspondence

			fi = geometry.faces.length;
            
			if ( hasFaceUv ) {
                // and if hasFaceUv

				for ( i = 0; i < nUvLayers; i++ ) {
                // for these variables 
					uvLayer = json.uvs[ i ];
                    // and this
					uvIndex = faces[ offset ++ ];
                    // and this

					u = uvLayer[ uvIndex * 2 ];
                    // and this
					v = uvLayer[ uvIndex * 2 + 1 ];
                    // and this

					geometry.faceUvs[ i ][ fi ] = new THREE.Vector2( u, v );
                    // than this is true
				}

			}

			if ( hasFaceVertexUv ) {
                // and if hasFaceVertexUv

				for ( i = 0; i < nUvLayers; i++ ) {
                // for these variables
					uvLayer = json.uvs[ i ];
                    // and this
					uvs = [];
                    // and this

					for ( j = 0; j < nVertices; j ++ ) {
                    // and for these variables
						uvIndex = faces[ offset ++ ];
                        // and this

						u = uvLayer[ uvIndex * 2 ];
                        // and this
						v = uvLayer[ uvIndex * 2 + 1 ];
                        // and this
						uvs[ j ] = new THREE.Vector2( u, v );
                        // and this
					}

					geometry.faceVertexUvs[ i ][ fi ] = uvs;
                    // than this
				}

			}

			if ( hasFaceNormal ) {
                // if hasFaceNormal
                // has these all the following variables
				normalIndex = faces[ offset ++ ] * 3;
                

				normal = new THREE.Vector3();

				normal.x = normals[ normalIndex ++ ];
				normal.y = normals[ normalIndex ++ ];
				normal.z = normals[ normalIndex ];
                
				face.normal = normal;
                // than this is true

			}

			if ( hasFaceVertexNormal ) {
                // if hasFaceVertexNormal

				for ( i = 0; i < nVertices; i++ ) {
                    // for these variables
                    // if the following is true
					normalIndex = faces[ offset ++ ] * 3;

					normal = new THREE.Vector3();

					normal.x = normals[ normalIndex ++ ];
					normal.y = normals[ normalIndex ++ ];
					normal.z = normals[ normalIndex ];
                    
					face.vertexNormals.push( normal );
                    // than push these to list normal 

				}

			}


			if ( hasFaceColor ) {

				colorIndex = faces[ offset ++ ];

				color = new THREE.Color( colors[ colorIndex ] );
				face.color = color;

			}


			if ( hasFaceVertexColor ) {

				for ( i = 0; i < nVertices; i++ ) {

					colorIndex = faces[ offset ++ ];

					color = new THREE.Color( colors[ colorIndex ] );
					face.vertexColors.push( color );

				}

			}

			geometry.faces.push( face );

		}

	};
```