import React, { useEffect } from "react";
import { connect } from "react-redux";
import { User, fetchUsers } from "../redux/actions/actions";
import { Store } from "../redux/reducers";
import { usersReducer } from "../redux/reducers/User";
import "./App.css";

interface AppProps {
	users: User[];
	fetchUsers(): any;
}

function App(props: AppProps) {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<>
						asd
						<button onClick={(e) => props.fetchUsers()}> Get Users</button>
						{props.users.length ? (
							props.users.map((e) => {
								return <h4> {e.id}</h4>;
							})
						) : (
							<h4>No users</h4>
						)}
					</>
				</header>
			</div>
		</>
	);
}
const mapStateToProps = (state: Store): { users: User[] } => {
	return { users: state.users };
};
export default connect(mapStateToProps, { fetchUsers })(App);
