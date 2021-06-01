import React from "react";

import Beer from "../images/Beer.svg";
import VietnamFlag from "../images/vietnam.svg";
import USFlag from "../images/united-states.svg";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
	return (
		<Nav className="navbar">
			<ul className="navbar-container">
				<li className="navbar-logo">
					<Link to="/">
						<img src={Beer} alt="beer" />
					</Link>
				</li>

				<li className="navbar-links">
					<ul className="navbar-links-container">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li className="navbar-btn-translate">
							<button>
								<img src={USFlag} alt="United States Flag" />
							</button>
							<button>
								<img src={VietnamFlag} alt="Vietnam Flag" />
							</button>
						</li>
					</ul>
				</li>
				<li className="navbar-header">
					<h1>Endless Drinks</h1>
				</li>
			</ul>
		</Nav>
	);
};

export default NavBar;

const Nav = styled.nav`
	background-color: #ffe6e6;
	img {
		width: 50px;
		height: 50px;
	}
	.navbar {
		&-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}
		&-links {
			&-container {
				background-color: steelblue;
				display: flex;
			}
		}
		&-header {
			flex-grow: 1;
			text-align: center;
		}

		&-btn-translate {
			img {
				width: 25px;
				height: 25px;
			}
		}
	}
`;
