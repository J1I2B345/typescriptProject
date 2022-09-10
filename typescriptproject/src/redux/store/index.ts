import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { User } from "../actions/actions";
import reducers from "../reducers";

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
