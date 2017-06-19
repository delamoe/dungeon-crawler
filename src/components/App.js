import React, { Component } from 'react';

import Board from './Board';

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

export default App;