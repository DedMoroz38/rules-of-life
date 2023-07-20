import React, { useEffect, useState } from "react";
import Styles from "./Services.module.scss";
import { OrangeButton } from "../../elements/orangeButton/button";
import { Heading } from "../../elements/heading/heading";
import ConsultaionModalWindow from "../GetConsultation/GetConsultation";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.cssText = `
        overflow: hidden;
        padding-right: 10px;
      `)
      : (document.body.style.cssText = `
        overflow: visible;
        padding-right: 0;
      `);
  }, [isOpen]);

  return (
    <div className={Styles.container}>
      <Heading name="Услуги" extraStyles={{ marginBottom: "15px" }} />
      <p className={Styles.description}>Предлагаем следующие виды услуг</p>
      <p className={Styles.description}>
        Подготовительный этап / Основной этап / Дополнительные услуги
      </p>
      <div className={Styles.servicesContainer}>
        <div className={Styles.serviceBox}>
          <p className={Styles.serviceHeading}>Подготовительный этап:</p>
          <p className={Styles.serviceName}>Service</p>
          <p className={Styles.serviceName}>Service</p>
          <p className={Styles.serviceName}>Service</p>
        </div>
        <div className={Styles.serviceBox}>
          <p className={Styles.serviceHeading}>Согласование / разработка:</p>
          <p className={Styles.serviceName}>Service</p>
          <p className={Styles.serviceName}>Service</p>
          <p className={Styles.serviceName}>Service</p>
        </div>
        <div className={Styles.serviceBox}>
          <p className={Styles.serviceHeading}>Дополнительные услуги:</p>
          <p className={Styles.serviceName}>Service</p>
          <p className={Styles.serviceName}>Service</p>
          <p className={Styles.serviceName}>Service</p>
        </div>
      </div>
      <div className={Styles.buttonBox}>
        <OrangeButton
          onClickFunction={() => setIsOpen(!isOpen)}
          name="Получить консультацию"
          width="393px"
        />
      </div>
      {isOpen && <ConsultaionModalWindow setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Services;
