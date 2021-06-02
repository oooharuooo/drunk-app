import React from "react";

import Fun from "../animation/Fun";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core/";

const MainPage = () => {
	return (
		<Main>
			<Fun />
			<Button variant="contained">
				<Link to="/game">Play</Link>
			</Button>
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
