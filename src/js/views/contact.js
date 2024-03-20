import React from "react";
import "../../styles/contact.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";

export const Contact = () => {
	return (
	<div>
		<Link to="/addcontact">
					<button className="addbtn btn btn-success m-4 me-4">Add new contact</button>
				</Link>
				<div>
					<ContactCard />	
				</div>
  </div>
);
};