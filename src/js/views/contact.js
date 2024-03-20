import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/contact.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";

export const Contact = () => {

	// const {store, actions}= useContext(Context)
	// 	console.log(store.demo);

	// const {contacts, setContacts}= useState()	

	// function getAllContacts() {
	// 	fetch('https://playground.4geeks.com/apis/fake/contact/agenda')
	// 	.then((response)=>response.json())
	// 	.then((data)=>setContacts(data.results))
	// 	.catch((error)=>console.log(error))
	// }

	// useEffect(()=>{
	// 	getAllContacts()
	// },[])

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