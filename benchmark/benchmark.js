/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var fromCodePoint = require( '@stdlib/string-from-code-point' );
var pkg = require( './../package.json' ).name;
var rtrim = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof String.prototype.trimRight !== 'function' )
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var whitespace;
	var str;
	var out;
	var i;

	whitespace = '\\f\\n\\r\\t\\v\\u0020\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = fromCodePoint( i%126 ) + 'eep boop' + whitespace;
		out = rtrim( str );
		if ( !isString( out ) ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', opts, function benchmark( b ) {
	var whitespace;
	var str;
	var out;
	var i;

	whitespace = '\\f\\n\\r\\t\\v\\u0020\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = fromCodePoint( i%126 ) + 'eep boop' + whitespace;
		out = str.trimRight();
		if ( !isString( out ) ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});