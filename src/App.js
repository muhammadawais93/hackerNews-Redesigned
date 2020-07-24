import React from 'react';
import Header from './Components/Header';
import TopSotries from './Components/Stories/List';
import AskSotries from './Components/Ask/List';
import JobStories from './Components/Job/List';
import { Route, Switch } from "react-router-dom";

import './App.scss';

function App() {
	return (
		<div className="hackerNews">
			<Header />
			<Switch>
				<Route path="/" exact component={TopSotries}></Route>
				<Route path="/ask" component={AskSotries}></Route>
				<Route path="/jobs" component={JobStories}></Route>
			</Switch>
		</div>
	);
}

export default App;
