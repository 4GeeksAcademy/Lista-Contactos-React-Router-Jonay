import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/addcontact.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Contact } from "./contact.js";

export const AddContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    // -----------------------------------------------------FUNCION addContact() ------------------------------------------//

    // ------------------------Modificar los datos del formulario JUNTO AL BODY DE FLUX----------------------------------//
    function handleSubmit(e) {
        e.preventDefault()
        const contact = {
            name,
            email,
            address,
            phone
        }
        actions.createContact(contact)
        navigate("/")
        actions.getAllContacts()

        // store.contacts()
        // setFullName(""),
        // setEmail({}),
        // setAddress({}),
        // setPhone({})
        // console.log(fullName,email,phone,address);
    }

    return (
        <div className="form">
            <h1 className="title">Add a new contact</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"> Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Full name" onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Enter phone" onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Enter address" onChange={(event) => { setAddress(event.target.value) }} />
                </div>
                <button type="submit" className="save btn btn-primary">save</button>

            </form>
            <Link to="/">
                <span className="mb-0 h5">or get back to contacts</span>
            </Link>
        </div>
    );
};







// ----------Otra Forma -----------DE---PASAR ESTA FUNCION AL EVENTO onSubmit------------------------//
// function handleSubmit(e) {
//     e.preventDefault()
//     const contact= {
//         "full_name": fullName,
// 		"email": email,
// 		"agenda_slug": "jonay",
// 		"address": address,
// 		"phone":phone
//     }
//     actions.createContact(contact)

//     // console.log(fullName,email,phone,address);
// }
// ----------Otra Forma -----------DE---PASAR ESTA FUNCION AL EVENTO onSubmit------------------------//