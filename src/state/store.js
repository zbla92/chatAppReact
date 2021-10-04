import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

export const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

if (window.location.search === '?debug') {
	persistor.purge();
}
