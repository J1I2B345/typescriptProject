import { combineReducers } from "redux";
import { User } from "../actions/actions";
import { usersReducer } from "./User";

export interface Store {
	users: User[];
}
export const reducers = combineReducers<Store>({ users: usersReducer });

export default reducers;
