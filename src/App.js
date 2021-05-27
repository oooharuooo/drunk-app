import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Choices from "./data/Choices";

const App = () => {
	const randomChoice = Math.floor(Math.random() * Choices.length);
	const {
		languages: { eng, viet },
	} = Choices[randomChoice];

	return (
		<>
			<Header />
			<Footer />
		</>
	);
};

export default App;
