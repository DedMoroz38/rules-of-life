import React from "react";
import Styles from "./FAQ.module.scss";
import { Heading } from "../../elements/heading/heading";
import infoArrow from "../../images/infoArrow.svg";

const FAQ = () => {
  return (
    <div className={Styles.container}>
      <Heading name="FAQ" extraStyles={{ marginTop: "183px" }} />
      <p className={Styles.subHeading}>Часто задаваемые вопросы</p>
      <div className={Styles.informationBox}>
        <div className={Styles.information}>
          <p>Информация 1</p>
          <img src={infoArrow} alt="arrow" />
        </div>
        <div className={Styles.information}>
          <p>Информация 2</p>
          <img src={infoArrow} alt="arrow" />
        </div>
        <div className={Styles.information}>
          <p>Информация 3</p>
          <img src={infoArrow} alt="arrow" />
        </div>
        <div className={Styles.information}>
          <p>Информация 4</p>
          <img src={infoArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
export default FAQ;
