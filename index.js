import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board';

class App extends Component {
	render() {
		return (
			<div className="App">
			<h1>Dungeon Crawler</h1>
				<Board />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));