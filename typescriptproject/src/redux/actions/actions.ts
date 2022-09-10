import axios, { AxiosError } from "axios";
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
	try {
		let users = await axios.get<User[]>(url);
		dispatch<FetchUsersAction>({
			type: ActionTypes.fetchUsers,
			payload: users.data,
		});
	} catch (e) {
		console.log(e);
		// //Manage all types of error
		// if (e instanceof TypeError) {
		// 	// A TypeError
		// } else if (e instanceof RangeError) {
		// 	// Handle the RangeError
		// } else if (e instanceof EvalError) {
		// 	// you guessed it: EvalError
		// } else if (typeof e === "string") {
		// 	// The error is a string
		// } else if (axios.isAxiosError(e)) {
		// 	// axios does an error check for us!
		// 	console.log(e?.response?.data);
		// } else {
		// 	// everything else
		// 	console.log(e);
		// }
	}
};
