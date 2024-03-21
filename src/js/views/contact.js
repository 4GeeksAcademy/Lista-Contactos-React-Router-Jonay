import React, { useContext, useEffect, useState } from "react"; //1. importar el Hook useContext (para consumir la info)
import { Context } from "../store/appContext.js"; //2. importar el contexto
import "../../styles/contact.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";

export const Contact = () => {


	// console.log(useContext(Context));

	const {store, actions}= useContext(Context) // DESTRUCTURING DE OBJETOS (esto se hace SIEMPRE)
		// console.log(store.demo);   // DENTRO DE DEMO HAY UN ARRAY Y HAY QUE HACER UN .map PARA CONSULTARLO//

	
////// -------------Esta funcion elimina una position del Array por su indice----------------------////
// function deletecontact(position) {
// 	const arrayfiltered = agenda.filter((item, index) => index !== position)
// 	setAgenda(arrayfiltered)
// 	putTask(arrayfiltered);
// 	}

	// ---------------CREAR UNA ---- function create() --------------///
	

// console.log(store.contacts); // Esta informacion la pasamos a flux en el Store por eso la llamamos así store.contacts

	useEffect(()=>{
		actions.getAllContacts()
	},[])

	return (
	<div>
		<div className="boton-contact">
			<Link to="/addcontact">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</div>
				{
					store.contacts.map((contact) => {
						return (
						<li key={contact.id}> 
							<ContactCard contact={contact}/> 
						</li>
						)
					})
				}
  	</div>
);
};