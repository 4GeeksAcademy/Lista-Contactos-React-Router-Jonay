import React from "react";
import "../../styles/contactcard.css";


export const ContactCard = () => {
	return (
	<div>
		<div className="card">
			<div className="card-body">
				<img src="..." className="card-img-left" alt="..."/>
				<h4 className="card-title">Mike Anamendolla</h4>
				<h6 className="location-text mb-2 text-body-secondary"><i className="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd</h6>
				<h6 className="phone-text"><i className="fa-solid fa-phone-flip"></i> 676117153</h6>
				<h6 className="email-text"><i className="fa-solid fa-envelope"></i> Mike.ana@example.com</h6>
				<i className="fa-solid fa-pencil"></i>
				<i className="fa-solid fa-trash-can"></i>
			</div>
		</div>
  </div>
);
};