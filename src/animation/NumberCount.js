import React from "react";

import styled from "styled-components";

const NumberCount = () => {
	return (
		<Wrapper>
			<h2>1,2,3... Dzô !!!</h2>
		</Wrapper>
	);
};

export default NumberCount;
const Wrapper = styled.div`
	align-self: center;
	h2 {
		
		animation: count 0.5s ease-in-out 1.5s;
        animation-fill-mode:both;
        transform: scale(2);
		}
	}

	@keyframes count {
		from {
			opacity: 0;
			transform: translateY(50%);
		}
		to {
			opacity: 1;
			transform: scale(2);
		}
	}
`;
