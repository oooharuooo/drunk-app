import React from "react";

import HomePage from "./pages/HomePage";
import FooterPage from "./pages/FooterPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import Choices from "./data/Choices";

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
					<Route path="/about">
						<AboutPage />
					</Route>
					<Route path="/">
						<HomePage />
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
	grid-template-rows: 100px auto 50px;
`;
