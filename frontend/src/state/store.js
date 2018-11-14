import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import * as reducers from './ducks'

export default function configureStore(initialState = {}) {
    const rootReducer = combineReducers(reducers)
    const middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()))
    return createStore(
        rootReducer,
        initialState,
        middleware
    )
}