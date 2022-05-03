import React from "react";
import ReactDOM from "react-dom";

/*Modal Hrnet */
const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
      <>
        <div className="overlay" onClick={hide}></div>
        <div className="modal_container">
          <i className="far fa-times-circle close_button" onClick={hide}></i>
          <div className="'content_modal_container">
            <h2 className="modal_title">Modal HRnet</h2>
            <p className="text">
              Vous pouvez cliquer sur le bouton "close" ou en dehors de la modal
              pour la fermer
            </p>
          </div>
        </div>
      </>, document.body
    ) :
    null;

export default Modal;
