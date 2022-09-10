import React, { useEffect } from "react";
import { connect } from "react-redux";
import { User, fetchUsers } from "../redux/actions/actions";
import { Store } from "../redux/reducers";
import "./App.css";

interface AppProps {
	users: User[];
	fetchUsers(): any;
}

function App(props: AppProps) {
	useEffect(() => {
		props.fetchUsers();
	});
	return (
		<div className="App">
			<header className="App-header">asd</header>
		</div>
	);
}
const mapStateToProps = (state: Store): { users: User[] } => {
	return { users: state.users };
};
export default connect(mapStateToProps, { fetchUsers })(App);
