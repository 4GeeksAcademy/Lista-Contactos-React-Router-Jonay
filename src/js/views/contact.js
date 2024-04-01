import React, { useContext, useEffect, useState } from "react"; //1. importar el Hook useContext (para consumir la info)
import { Context } from "../store/appContext.js"; //2. importar el contexto
import "../../styles/contact.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard.jsx";
import { ModalDelete } from "../component/modalDelete.jsx";

export const Contact = () => {

	const [state,setState] = useState({
		show: "none"
	})
	const [contactToDelete, setContactToDelete] = useState({}) //Esto es para almacenar el contacto que quiero eliminar cuando muestre el modal
	
	// console.log(state);

	// console.log(useContext(Context));

	const { store, actions } = useContext(Context) // DESTRUCTURING DE OBJETOS (esto se hace SIEMPRE)
	// console.log(store.demo);   // DENTRO DE DEMO HAY UN ARRAY Y HAY QUE HACER UN .map PARA CONSULTARLO//

	// console.log(store.contacts); // Esta informacion la pasamos a flux en el Store por eso la llamamos así store.contacts

	useEffect(() => {
		actions.getAllContacts()
	}, [])

	return (
		<div>
			<div className="boton-contact">
				<Link to="/addcontact">
					
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			{
				store.contacts && store.contacts.length > 0 && store.contacts.map((contact) => {
					return (
						
						<div key={contact.id}>
							<ContactCard  /*cuando llamo al componente ContactCard le paso 3 props:
											el contacto, la funcion para modificar el estado del modal y
											la funcion para modificar el estado del contacto a eliminar*/
							contact={contact} 
							setModal={setState}
							setContactToDelete={setContactToDelete}
							/> 
							<ModalDelete 
							setModal={setState}
							stateModal={state}
							contact={contactToDelete}
							/>
							{/* <ModalDelete /* aqui al ModalDelete le paso el estado, la funcion que modifica ese estado y el contacto a eliminar
							setModal={setState.show} 
							stateModal={state.show} 
							contact={contactToDelete}
							/> */} 

						
						</div>
					)
				})
			}
		</div>
	);
};