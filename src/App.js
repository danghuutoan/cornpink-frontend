import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/Shop";
import Navbar from "./components/common/Navbar";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main role="main">
				<div className="content">
					<Switch>
						<Route path="/shop" component={Shop} />
						<Route path="/blog" component={Blog} />
						<Route path="/about-us" component={AboutUs} />
						<Route path="/" exact component={Home} />
					</Switch>
				</div>
			</main>
		</div>
	);
}

export default App;
