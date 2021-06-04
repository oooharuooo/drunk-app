import React from "react";

import NumberCount from "../animation/NumberCount";
import Fun from "../animation/Fun";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core/";

const MainPage = () => {
	return (
		<Main>
			<NumberCount />
			<Fun />
			<Link to="/game">
				<Button variant="contained">Play</Button>
			</Link>
		</Main>
	);
};

export default MainPage;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	padding: 0.2rem 1rem;

	.having-fun {
		svg {
			width: 100%;
			height: auto;
		}
	}
	#girl-1 {
		background-color: red;
	}
	a {
		place-self: center;
		button {
			color: white;
			max-width: fit-content;
			background-color: #778eb5;
			font-size: 2rem;
		}
	}
`;
