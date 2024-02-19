import ReactDom from "react-dom";
import { BackDrop } from "../Loader/Loader";
import { Fragment } from "react";
const Modal = ({ onClose, children }) => {
  return ReactDom.createPortal(
    <Fragment>
      <BackDrop onClose={onClose} />
      <div className="modal">
        <button type="close" onClick={onClose}>
          X
        </button>
        <div className="content"> {children}</div>
      </div>
    </Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
