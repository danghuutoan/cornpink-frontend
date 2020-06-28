import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<Link className="navbar-brand" to="/">
				The A Brand
			</Link>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/shop">
							Shop
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/blog">
							Blog
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about-us">
							About us
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link disabled" to="#">
							Disabled
						</Link>
					</li>
				</ul>

				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
