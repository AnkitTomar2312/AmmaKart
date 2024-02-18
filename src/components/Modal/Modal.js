import ReactDom from "react-dom";
import { BackDrop } from "../Loader/Loader";
import { Fragment } from "react";
const Modal = ({ onClose }) => {
  return ReactDom.createPortal(
    <Fragment>
      <BackDrop onClose={onClose} />
      <div className="modal">
        This is Modal!!
        <button onClick={onClose}>X</button>
      </div>
    </Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
