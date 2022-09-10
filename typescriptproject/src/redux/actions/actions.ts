import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url: string = "http://localhost:3001/api/users";

export interface User {
	id: number;
	name: string;
	lastName: string;
}

export interface FetchUsersAction {
	type: ActionTypes.fetchUsers;
	payload: User[];
}

export const fetchUsers = () => async (dispatch: Dispatch) => {
	let users = await axios.get<User[]>(url);
	dispatch<FetchUsersAction>({
		type: ActionTypes.fetchUsers,
		payload: users.data,
	});
};
