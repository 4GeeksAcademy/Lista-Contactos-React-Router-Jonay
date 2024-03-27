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
			console.log(state);
	console.log(useContext(Context));

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
				store.contacts.map((contact) => {
					return (
						
						<div key={contact.id}>
							{/* <ContactCard contact={contact} /> 
							<ModalDelete /> */}

							<ContactCard contact={contact} 
							showModal={()=>setState({show:"block"})}
							/>
							<ModalDelete show={state.show}/>
						</div>
					)
				})
			}
		</div>
	);
};


{/* <div className="blog container">
			<input className="list container border-0 py-3" type="text" 
					onChange={(event) => {setNewTask(event.target.value)}} 
					onKeyDown={writeTask} value={newTask} placeholder="Añadir nueva tarea"/>
					
			<ul className="list-group list-group-flush">
					{tasks.map((task,index) => { return (<li className="list-group-item py-3 ms-3" key={index}> {task.label}   
						<span className="delete" onClick={() => deletetask(index)}><i className="fa-solid fa-xmark"></i></span></li>)
					}
					)}	
			</ul>
				<div className="contador border-top p-3"><span>{tasks.length} tasks</span></div>	
		</div>
		<div>
			<span className="buttonDelete" onClick={() => deleteList()}><button className="btn btn-danger mt-4" type="button">DELETE</button></span>
			</div> */}