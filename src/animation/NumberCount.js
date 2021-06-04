import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 5 },
	},
};

const NumberCount = () => {
	return (
		<Wrapper>
			<motion.h2 initial="hidden" animate="visible" variants={variants}>
				1,2,3... Dzô !!!
			</motion.h2>
		</Wrapper>
	);
};

export default NumberCount;
const Wrapper = styled.div`
	align-self: center;
`;
