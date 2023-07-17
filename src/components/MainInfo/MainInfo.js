import React from "react";
import Styles from "./MainInfo.module.scss";
import { OrangeButton } from "../../elements/orangeButton/button";
import { Heading } from "../../elements/heading/heading";

const MainInfo = () => {
  const descriptionTexts = [
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac commodo dui. Maecenas a dignissim diam",
  ];

  return (
    <div className={Styles.box}>
      <div className={Styles.main}>
        <p className={Styles.subHeading}>Подзаголовок</p>
        <Heading
          name={"Выполним работу за 45 дней в любом городе России"}
          extraStyles={{ width: "900px" }}
        />
        <p className={Styles.description}>Описание</p>
        <OrangeButton name="Прикрепить фотографию" />
        <div className={Styles.right}></div>
      </div>
      <div className={Styles.descriptionContainer}>
        <div className={Styles.descriptionBox}>{descriptionTexts[0]}</div>
        <div className={Styles.descriptionBox}>{descriptionTexts[1]}</div>
        <div className={Styles.descriptionBox}>{descriptionTexts[2]}</div>
        {/* {descriptionTexts.map((text, index) => {
          <div key={index} className={Styles.descriptionBox}>
            {text}
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default MainInfo;
