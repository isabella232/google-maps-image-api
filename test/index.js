var imageAPI = require( '../' );

imageAPI( {

	type: 'staticmap',
	center: '43.653226,-79.3831843',
	style: 'feature:landscape|hue:0xFF00FF|saturation:100|lightness:-50'
})
.then( function( img ) {

	document.body.appendChild( img );
})
.catch( function( e ) {

	console.log( e.stack );
});

imageAPI( {

	type: 'streetview',
	location: 'Bay Street, Toronto'
})
.then( function( img ) {

	document.body.appendChild( img );
})
.catch( function( e ) {

	console.log( e.stack );
});