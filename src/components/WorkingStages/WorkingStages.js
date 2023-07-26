import React from "react";
import Styles from "./WorkingStages.module.scss";
import { Heading } from "../../elements/heading/heading";

const WorkingStages = () => {
  return (
    <div className={Styles.main}>
      <Heading name="Этапы нашей работы" />
      <div className={Styles.pipeLine}>
        <div className={Styles.stageBox}>
          <p className={Styles.number}>1</p>
          <p className={Styles.stageName}>запрашиваем необходимые документы</p>
        </div>
        <div className={Styles.stageBox}>
          <p className={Styles.number}>2</p>
          <p className={Styles.stageName}>
            подготавливаем документы на&nbsp;подпись
          </p>
        </div>
        <div className={Styles.stageBox}>
          <p className={Styles.number}>3</p>
          <p className={Styles.stageName}>собираем данные по требованиям</p>
        </div>
        <div className={Styles.stageBox}>
          <p className={Styles.number}>4</p>
          <p className={Styles.stageName}>
            формируем и отправляем на утверждение
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingStages;
