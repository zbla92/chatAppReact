import { useEffect, useRef } from 'react';

/**
 * Extends useState functonality by providing previous state for the give state variable hooked via useState.
 * Note that adding result of this hook to another hook's conditions will trigger another call to that hook with rendering cycle offset by one
 * @param {*} value variable from useState
 */
const usePrevious = value => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export default usePrevious;
