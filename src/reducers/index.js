import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import operationReducer from "./operationReducer";

const rootReducer = combineReducers({
  operation: operationReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
