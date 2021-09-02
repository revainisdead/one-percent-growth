// https://redux-toolkit.js.org/tutorials/quick-start

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers.js";

// https://redux-toolkit.js.org/usage/usage-guide

const configureStore = (preloadedState={}) => {
    const middlewares = [thunkMiddleware];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancers,
    );

    return store;
};


export const store = configureStore();
