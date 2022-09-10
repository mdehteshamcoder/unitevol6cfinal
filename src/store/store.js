import { reducer as authreducer } from "./auth/reducer";
import {applyMiddleware, combineReducers, compose, legacy_createStore as  createStore} from "redux";
import thunk from "redux-thunk";
const rootreducer = combineReducers( {
auth : authreducer
})


export const store = createStore(rootreducer,compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))