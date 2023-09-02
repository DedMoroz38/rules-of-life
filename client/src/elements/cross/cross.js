import React from "react";
import Styles from "./cross.module.scss";
import cross from "../../images/cross.svg";

export const Cross = ({ onClickFn, extraStyles }) => {
  return (
    <img
      style={extraStyles}
      className={Styles.cross}
      src={cross}
      alt=""
      onClick={onClickFn}
    />
  );
};
