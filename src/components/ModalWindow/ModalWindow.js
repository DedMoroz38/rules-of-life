import React from "react";
import Styles from "./ModalWindow.module.scss";
import ReactDOM from "react-dom";

const ModalWindow = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <div className={`${Styles.blur}`} />
      <div className={`${Styles.component}`}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalWindow;
