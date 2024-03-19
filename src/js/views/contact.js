import React from "react";
import "../../styles/contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
	return (
	<div>
		<div className="card">
			<div className="card-body">
				<img src="..." className="card-img-left" alt="..."/>
				<h5 className="card-title">Mike Anamendolla</h5>
				<h6 className="location-text mb-2 text-body-secondary"><i class="fa-solid fa-location-dot"></i> Card subtitle</h6>
				<h6 className="phone-text"><i class="fa-solid fa-phone-flip"></i> 676117153</h6>
				<h6 className="email-text"><i class="fa-solid fa-envelope"></i> Mike.ana@example.com</h6>
				<i className="fa-solid fa-pencil"></i>
				<i className="fa-solid fa-trash-can"></i>
			</div>
		</div>
  </div>
);
};