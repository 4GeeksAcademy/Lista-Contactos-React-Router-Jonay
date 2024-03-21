import React, { useContext, useEffect, useState } from "react"; //1. importar el Hook useContext (para consumir la info)
import { Context } from "../store/appContext.js"; //2. importar el contexto
import "../../styles/contact.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";

export const Contact = () => {


	// console.log(useContext(Context));

	const {store, actions}= useContext(Context) // DESTRUCTURING DE OBJETOS (esto se hace SIEMPRE)
		// console.log(store.demo);   // DENTRO DE DEMO HAY UN ARRAY Y HAY QUE HACER UN .map PARA CONSULTARLO//

	


	// ---------------CREAR UNA ---- function createUser() --------------///
	

/**-----------------------------ANTIGUAMENTE SE CREARIA LA FUNCION AQUI EN EL COMPONENTE------------------------
----------------------PERO COMO VA A SER UNA FUNCION GLOBAL LA VAMOS A CREAR EN FLUX ACTIONS---------------------*////
			// function getAllContacts() {
			// 	fetch('https://playground.4geeks.com/apis/fake/contact/agenda')
			// 	.then((response)=>response.json())
			// 	.then((data)=>setContacts(data[3]))
			// 	.catch((error)=>console.log(error))
			// }
/**-----------------------------ANTIGUAMENTE SE CREARIA LA FUNCION AQUI EN EL COMPONENTE------------------------
----------------------PERO COMO VA A SER UNA FUNCION GLOBAL LA VAMOS A CREAR EN FLUX ACTIONS---------------------*////

// console.log(store.contacts); // Esta informacion la pasamos a flux en el Store por eso la llamamos así store.contacts

	useEffect(()=>{
		actions.getAllContacts()
	},[])

	return (
	<div>
		<Link to="/addcontact">
					<button className="addbtn btn btn-success m-4 me-4">Add new contact</button>
				</Link>
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