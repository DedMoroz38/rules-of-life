import React, { useCallback, useRef, useState } from "react";
import Styles from "./GetConsultation.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";
import { OrangeButton } from "../../elements/orangeButton/button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import PhoneInput from "../PhoneInput/PhoneInput";
import { CountryCodeSelector } from "../../elements/countryCodeSelector/countryCodeSelector";

const GetConsultation = ({ setIsOpen }) => {
  const boxRef = useRef(null);
  useOutsideAlerter(boxRef, () => setIsOpen(false));
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);

  return (
    <div className={Styles.main} ref={boxRef}>
      <h2>Консультация</h2>
      <p className={Styles.subtext}>
        Оставьте ваши данные и мы свяжемся с&nbsp;вами в течении часа
      </p>
      <p className={Styles.fieldName}>
        Как вас зовут?<span>*</span>
      </p>
      <input type="text" placeholder="Иван" />
      <p className={Styles.fieldName}>
        Из какого вы города?<span>*</span>
      </p>
      <input type="text" placeholder="Москва" />
      <p className={Styles.fieldName}>
        Введите ваш номер телефона<span>*</span>
      </p>
      <div className={Styles.phoneBox}>
        <CountryCodeSelector />
        <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
      </div>
      <p className={Styles.subtext}>
        Отправляя, вы соглашаетесь с политикой конфиденциальности
      </p>
      <OrangeButton name="Отправить" width="275px" />
    </div>
  );
};

const ConsultaionModalWindow = ({ setIsOpen }) => {
  return (
    <ModalWindow>
      <GetConsultation setIsOpen={setIsOpen} />
    </ModalWindow>
  );
};

export default ConsultaionModalWindow;
