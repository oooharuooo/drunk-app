import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import having_fun from "../images/having_fun.svg";

import { Button } from "@material-ui/core/";

const MainPage = () => {
	return (
		<Main>
			<div>
				<img src={having_fun} alt="people are having fun" />
			</div>
			<Button variant="contained">
				<Link to="/game">Play</Link>
			</Button>
		</Main>
	);
};

export default MainPage;

const Main = styled.main`
	img {
		width: 100%;
		height: auto;
	}
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	padding: 0.2rem 1rem;

	button {
		max-width: fit-content;
		background-color: #778eb5;
		place-self: center;
		font-size: 2.5rem;
		a {
			color: white;
		}
	}
`;
