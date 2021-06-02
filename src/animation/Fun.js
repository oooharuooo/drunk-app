import React from "react";
import { ReactComponent as HavingFun } from "../images/having_fun2.svg";

import styled from "styled-components";

const Fun = () => {
	return (
		<Wrapper>
			<HavingFun />
		</Wrapper>
	);
};

export default Fun;

const Wrapper = styled.div`
	svg {
		width: 100%;
		height: auto;
	}

	#girl {
		&-1 {
			animation: walking-from-left 1.5s linear;
		}
		&-2 {
			animation: walking-from-right 1.5s linear;
		}
	}

	.walking {
		transform-origin: center;
		transform-box: fill-box;
		animation: walking-step 0.3s linear 0s 5;
	}

	.beer-raising {
		transform-origin: center;
		transform-box: fill-box;
		animation: raising 1s linear 1s;
	}

	#guy-2-arm,
	#girl-2-arm {
		animation: raising-2 1s linear 1s;
	}

	${"" /* Animation-keyframes */}
	@keyframes walking-step {
		from {
			transform: rotate(5deg);
		}
		to {
			transform: rotate(-5deg);
		}
	}
	@keyframes walking-from-left {
		from {
			transform: translateX(-5rem);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes walking-from-right {
		from {
			transform: translateX(5rem);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes raising {
		from {
			transform: translateY(-0.1rem);
		}
		to {
			transform: translateY(-1rem);
		}
	}
	@keyframes raising-2 {
		from {
			transform: translateY(-0.1rem);
		}
		to {
			transform: translateY(-0.3rem);
		}
	}
`;
