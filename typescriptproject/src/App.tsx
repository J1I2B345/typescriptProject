import React, { useState, Component } from "react";
import "./App.css";

//si le vamos a pasar props, tienen que ir acá ... si no va a tirar error.
// en donde le pasamos las props solo las pasamos.
interface AppProps {
	title: string;
}
// destructuring
// sin destructuring sería App(props: AppProps)
//                ^^
//                ||              /// el tipo de archivo que devuelve App por si esta en modo estricto
//                ||                    ^^
//                ||                    ||
// functional
// function App({ title }: AppProps): JSX.Element {
// 	const [counter, setCounter] = useState(0);
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1> Workshop {title} </h1>
//        <h1>{counter}</h1>
// 				<button onClick={() => setCounter(counter + 1)}> increment</button>
// 				<button onClick={() => setCounter(counter - 1)}> decrement</button>
// 			</header>
// 		</div>
// 	);
// }

//CLASS

//opción 1
// sin este interface tira error al usar this.state.counter => dice que no existe en readonly{}
// interface AppState {
// 	counter: number;
// }
// class App extends Component<AppProps, AppState> {
//opción 1

//opción 2
class App extends Component<AppProps> {
	state = {
		counter: 0,
		title: this.props.title,
	};
	//opción 2
	constructor(props: AppProps) {
		super(props);
		this.state = { title: props.title, counter: 0 };
	}
	onIncrement = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};
	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h5> Workshop {this.state.title} </h5>
					<h1>{this.state.counter}</h1>
					<button onClick={this.onIncrement}>Increment</button>
					<button onClick={this.onDecrement}> Decrement</button>
				</header>
			</div>
		);
	}
}

export default App;
