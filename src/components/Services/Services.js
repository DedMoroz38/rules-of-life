import React from "react";
import Styles from "./Services.module.scss";
import { OrangeButton } from "../../elements/orangeButton/button";
import { Heading } from "../../elements/heading/heading";

const Services = () => {
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
        <OrangeButton name="Получить консультацию" />
      </div>
    </div>
  );
};

export default Services;
