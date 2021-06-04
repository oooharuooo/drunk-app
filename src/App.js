import React from "react";

import MainPage from "./pages/MainPage";
import FooterPage from "./pages/FooterPage";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import Choices from "./data/Choices";
import Beer from "./animation/Beer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const App = () => {
	const randomChoice = Math.floor(Math.random() * Choices.length);
	const {
		languages: { eng, viet },
	} = Choices[randomChoice];

	return (
		<Router>
			<Container>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<MainPage />
					</Route>
					<Route exact path="/"></Route>
					<Route exact path="/about">
						<AboutPage />
					</Route>
					<Route exact path="/game">
						<GamePage />
					</Route>
				</Switch>
				<FooterPage />
			</Container>
		</Router>
	);
};

export default App;

const Container = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: 100px auto 20px;
`;
