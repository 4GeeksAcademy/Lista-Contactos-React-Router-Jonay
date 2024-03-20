import React from "react";
import "../../styles/addcontact.css";
import { Link } from "react-router-dom";

export const AddContact = () => {
	return (
        <div className="form">
            <h1 className="title">Add a new contact</h1>
            <form>
            <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Enter phone"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress" className="form-label">Address</label>
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
