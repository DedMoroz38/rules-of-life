import React from "react";
import Styles from "./PriceSheet.module.scss";
import { Heading } from "../../elements/heading/heading";
import bear from "../../images/bear.png";

const PriceSheet = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <Heading name="Прайс-лист" />
        <p className={`${Styles.name} ${Styles.firstService}`}>Услуга</p>
      </div>
      <div className={Styles.line}>
        <p className={`${Styles.name} ${Styles.innerName}`}>Услуга</p>
        <div className={Styles.lineBox}>
          <button className={Styles.calculateButton}>
            Рассчитать стоимость
          </button>
        </div>
        <img src={bear} alt="" />
      </div>
      <div className={Styles.container}>
        <p className={`${Styles.name} ${Styles.lastService}`}>
          Пролонгация услуги
        </p>
      </div>
    </div>
  );
};
export default PriceSheet;
