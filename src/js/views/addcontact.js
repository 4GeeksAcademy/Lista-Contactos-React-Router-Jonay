import React, { useState} from "react";
import "../../styles/addcontact.css";
import { Link } from "react-router-dom";

export const AddContact = () => {

// -----------------FUNCION addContact() -------------//

//     const [newContact,setNewContact]=useState({})
//  	const [agenda,setAgenda]=useState([])

// ////// -------------Esta funcion añade un contacto nueva en el Array al presionar ENTER----------------------////
// 	function addcontact(event) {
// 		// console.log(event);
// 		if (event.key === "Enter") {
// 			// console.log("Agregar contacto");
// 			setAgenda(agenda.concat( {
//                 "full_name": {contact.full_name},
//                 "email": {contact.email},
//                 "agenda_slug": "jonay",
//                 "address":{contact.address},
//                 "phone":{contact.phone}
//             }))
// 			setNewContact("");
// 			putTask(agenda.concat( { label: newContact, done: false }));
// 		}
// 	}

 

// Crear evento OnSubmit

	return (
        <div className="form">
            <h1 className="title">Add a new contact</h1>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"> Full name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Enter phone"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Enter address" />
                </div>
                <button type="submit" className="save btn btn-primary">save</button>
            </form>
            <Link to="/">
				<span className="mb-0 h5">or get back to contacts</span>
			</Link>
        </div>
        );
    };
