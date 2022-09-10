import { combineReducers } from "redux";
import { User } from "../actions/actions";
import { usersReducer } from "./User";

export interface Store {
	users: User[];
}

export const reducers = combineReducers<Store>({ users: usersReducer });

export interface initialState {
	counter: number;
}

const initialState: initialState = {
	counter: 1,
};

interface action {
	type: string;
}

const reducer = (state: initialState = initialState, action: action) => {
	return state;
};

export default reducers;
