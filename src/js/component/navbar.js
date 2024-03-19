import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo">
					<button className="btn btn-primary m-2">Check the Context in action</button>
				</Link> */}
				<Link to="/addcontact">
					<button className="btn btn-success m-2 me-4">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
