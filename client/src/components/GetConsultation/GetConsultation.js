import React, { useRef, useState } from "react";
import Styles from "./GetConsultation.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";
import { OrangeButton } from "../../elements/orangeButton/button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import PhoneInput from "../PhoneInput/PhoneInput";
import { CountryCodeSelector } from "../../elements/countryCodeSelector/countryCodeSelector";
import { sendConsultationData } from "../../utils/sendConsultationData";
import { useDropDownMessageContext } from "../../ContextProviders/DropDownMessageProvider";
import { LoadingSpinner } from "../../elements/loadingSpinner/loadingSpinner";

const GetConsultation = ({ setIsOpen }) => {
  const boxRef = useRef(null);
  const name = useRef();
  const city = useRef();
  const [countryCode, setCountryCode] = useState("+7");
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);
  useOutsideAlerter(boxRef, () => setIsOpen(false));
  const [loading, setLoading] = useState(false);
  const { setMessage, setIsShown } = useDropDownMessageContext();

  const sendData = () => {
    sendConsultationData(
      {
        name: name.current.value,
        city: city.current.value,
        phoneNumber: `${countryCode}${phone}`,
      },
      setLoading,
      setMessage,
      setIsShown,
      setIsOpen
    );
  };

  return (
    <div className={Styles.main} ref={boxRef}>
      <h2>Консультация</h2>
      <p className={Styles.subtext}>
        Оставьте ваши данные и мы свяжемся с&nbsp;вами в течении часа
      </p>
      <p className={Styles.fieldName}>
        Как вас зовут?<span>*</span>
      </p>
      <input ref={name} type="text" placeholder="Иван" />
      <p className={Styles.fieldName}>
        Из какого вы города?<span>*</span>
      </p>
      <input ref={city} type="text" placeholder="Москва" />
      <p className={Styles.fieldName}>
        Введите ваш номер телефона<span>*</span>
      </p>
      <div className={Styles.phoneBox}>
        <CountryCodeSelector
          countryCode={countryCode}
          setCountryCode={setCountryCode}
        />
        <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
      </div>
      <p className={Styles.subtext}>
        Отправляя, вы соглашаетесь с политикой конфиденциальности
      </p>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <OrangeButton
          name="Отправить"
          width="275px"
          onClickFunction={() => sendData()}
        />
      )}
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
