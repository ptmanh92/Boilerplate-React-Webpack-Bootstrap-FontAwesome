import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/_styles.scss";

const App = () => {
	return (
		<Container fluid>
			<h1>Boilerplate: React 18.2.0 + Webpack 5.75.0 + Bootstrap 5.2.3 + Font Awesome 6.2.1</h1>
			{/* <Routes>
				<Route path="/" element={<OtherElement to="/other_route" />} />
				<Route path="/" element={<Home />} />
			</Routes> */}
		</Container>
	);
};

export default App;
