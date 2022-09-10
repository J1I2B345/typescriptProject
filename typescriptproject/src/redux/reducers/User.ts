import { User, FetchUsersAction } from "../actions/actions";
import { ActionTypes } from "../actions/types";

export const usersReducer = (state: User[] = [], action: FetchUsersAction) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload;
		default:
			return state;
	}
};
