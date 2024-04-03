import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/contactcard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ModalDelete } from "../component/modalDelete.jsx";


export const ContactCard = ({ contact, setModal }) => {

	const { store, actions } = useContext(Context)
	// console.log(contact);
	const navigate = useNavigate()

	
	// function handleDelete() {
	// 	actions.deleteContact(contact.id)
	// }

	return (
		<>
		<div className="card m-3">
			<div className="card-body m-0">
				<div className="add-del">
					<span className="edit me-5" onClick={() => {
						actions.seeContact(contact)
						navigate("/editcontact")
					}}><i className="fa-solid fa-pencil"></i></span>
					<span className="delete" onClick={()=>{
						actions.contactToDelete(contact)
						setModal({show:"block"})
					}}><i className="fa-solid fa-trash-can"></i></span>
				</div>
				<img src="data:image/jpeg;base64,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" className="card-img-left mb-5 ms-5" alt="..." />
				<div className="description">
					<h4 className="card-title">{contact?.name}</h4>
					<h6 className="location-text mb-2 text-body-secondary"><i className="fa-solid fa-location-dot"></i> {contact?.address}</h6>
					<h6 className="phone-text"><i className="fa-solid fa-phone-flip"></i> {contact?.phone}</h6>
					<h6 className="email-text"><i className="fa-solid fa-envelope"></i> {contact?.email}</h6>
				</div>
			</div>
		</div>
    {/* //------------------------------------------------------MODAL-------------------------------------------------------------------// */}
	
	</>
	);
};


