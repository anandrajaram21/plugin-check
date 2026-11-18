// Production build output that inlines the React 19 DOM renderer. React 19
// still declares the legacy `react.element` symbol, but only to recognize
// elements created by older builds, next to its own `react.transitional.element`.
// The renderer also caches fibers under `__reactFiber$`, so neither marker may
// flag it as a pre-19 copy.
( function ( exports ) {
	var legacyElement = Symbol.for( "react.element" );
	var transitionalElement = Symbol.for( "react.transitional.element" );
	var randomKey = Math.random().toString( 36 ).slice( 2 );
	var fiberKey = "__reactFiber$" + randomKey;
	var internals = {
		__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: {},
	};
	function isElement( value ) {
		return value.$$typeof === transitionalElement || value.$$typeof === legacyElement;
	}
	exports.createRoot = function ( container ) {
		container[ fiberKey ] = null;
		return { render: isElement, internals: internals };
	};
}( {} ) );
