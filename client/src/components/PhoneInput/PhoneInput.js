import React from "react";
import InputMask from "comigo-tech-react-input-mask";
import Styles from "./PhoneInput.module.scss";

const PhoneInput = ({ value, onChange }) => {
  return (
    <InputMask
      className={Styles.phoneInput}
      mask="(999)999-99-99"
      value={value}
      onChange={onChange}
    ></InputMask>
  );
};

export default PhoneInput;
