import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
// import "../../styles/modalDelete.css";


export const ModalDelete = (props) => {

    console.log(props.show);
    const { store, actions } = useContext(Context)
    // console.log(id);

    function handleDelete() {
		actions.deleteContact(contact.id)
	}

    return (
        <div>
            <div className="modal" tabIndex="-1" role="dialog" style={{display:props.show}}>  {/* //--style={{display: prop.showModal()}} */}
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleDelete}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};