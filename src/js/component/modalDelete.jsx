import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
// import "../../styles/modalDelete.css";


export const ModalDelete = ({ setModal, stateModal, contact }) => { /* Aqui le digo que recibe estas 3 propiedades*/

    // console.log(stateModal.show);
    const { store, actions } = useContext(Context)
    // console.log(store.contactToDelete.id);

    // let id = store.contactToDelete.id
    // console.log(id);

    function handleDelete() { /* cuando hago click en la papelera llamo a mi funcion y le paso el id y uso el setModal none para que se cierre*/
        actions.deleteContact(store.contactToDelete.id)
        setModal({ show: "none" })
    }


    return (
        <div>
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: stateModal.show }}>  {/* aqui coloco el display de acuerdo al stateModal.show */}
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => { setModal({ show: "none" }) }}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>If you delete this thing the entire universe will go down! </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => { setModal({ show: "none" }) }}>Oh no!</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={handleDelete} /* Cuando hago click en cerrar lo paso a none*/
                            >
                                Yes baby!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};