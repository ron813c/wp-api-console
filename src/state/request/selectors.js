import { isArray } from 'lodash';

import { explodeEndpointPathParts, getEndpointUrl } from './utils';

export const getSelectedEndpoint = state => state.request.endpoint;

export const getUrl = state => state.request.url;

export const getPathValues = state => {
	const endpoint = getSelectedEndpoint( state );
	if ( ! endpoint ) {
		return {};
	}
	const pathArgs = Object.keys( endpoint.request.path );

	return pathArgs.reduce( ( ret, arg ) => {
		return {
			...ret,
			[ arg ]: state.request.pathValues[ arg ],
		};
	}, {} );
};

export const getMethod = state => state.request.method;

export const getQueryParams = state => {
	const endpoint = getSelectedEndpoint( state );
	if ( ! endpoint ) {
		return {};
	}
	const queryArgs = Object.keys( endpoint.request.query || {} );

	return queryArgs.reduce( ( ret, arg ) => {
		if (
			! state.request.queryParams[ arg ] || (
				isArray( state.request.queryParams[ arg ] ) &&
				! state.request.queryParams[ arg ].length
			)
		) {
			return ret;
		}
		return {
			...ret,
			[ arg ]: state.request.queryParams[ arg ],
		};
	}, {} );
};

export const getBodyParams = state => {
	const endpoint = getSelectedEndpoint( state );
	if ( ! endpoint ) {
		return {};
	}
	const bodyArgs = Object.keys( endpoint.request.body || {} );

	return bodyArgs.reduce( ( ret, arg ) => {
		return {
			...ret,
			[ arg ]: state.request.bodyParams[ arg ],
		};
	}, {} );
};

export const getEndpointPathParts = state => {
	const endpoint = getSelectedEndpoint( state );
	if ( ! endpoint ) {
		return [];
	}

	return explodeEndpointPathParts( endpoint );
};

export const getCompleteQueryUrl = state => {
	const endpoint = getSelectedEndpoint( state );
	if ( ! endpoint ) {
		return getUrl( state );
	}
	const pathValues = getPathValues( state );
	const endpointUrl = getEndpointUrl( endpoint, pathValues );
	const queryParams = getQueryParams( state );
	const buildParamUrl = ( param, value ) => {
		if ( isArray( value ) ) {
			return value.map( subvalue => `${ param }[]=${ encodeURIComponent( subvalue ) }` )
				.join( '&' );
		}

		return `${ param }=${ encodeURIComponent( value ) }`;
	};
	const queryString = Object.keys( queryParams ).length === 0
		? ''
		: '?' + Object.keys( queryParams )
			.map( param => buildParamUrl( param, queryParams[ param ] ) )
			.join( '&' );

	return endpointUrl + queryString;
};

export const getRequestMethod = state => {
	const endpoint = getSelectedEndpoint( state );

	return endpoint ? endpoint.method : getMethod( state );
};

export const filterEndpoints = ( state, endpoints ) => {
	const url = getUrl( state ).toLowerCase();

	return endpoints.filter( endpoint =>
		endpoint.pathLabeled.toLowerCase().indexOf( url ) !== -1 ||
		endpoint.description.toLowerCase().indexOf( url ) !== -1
	);
};
