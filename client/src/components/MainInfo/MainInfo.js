import React, { useEffect, useState } from "react";
import Styles from "./MainInfo.module.scss";
import { OrangeButton } from "../../elements/orangeButton/button";
import { Heading } from "../../elements/heading/heading";
import bear from "../../images/bear.png";
import PhotoAttachModalWindow from "../AttachPhoto/AttachPhoto.js";
import { useWidthContext } from "../../ContextProviders/WidthProvider";

const MainInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWidthContext();

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
          extraStyles={width >= 1030 ? { width: "900px" } : null}
        />
        <p className={Styles.description}>Описание</p>
        <OrangeButton
          onClickFunction={() => setIsOpen(!isOpen)}
          name="Прикрепить фотографию"
          width="388px"
        />
        <div className={Styles.right}>
          <img src={bear} alt="фото" />
        </div>
      </div>
      <div className={Styles.descriptionContainer}>
        <div className={Styles.descriptionBox}>{descriptionTexts[0]}</div>
        <div className={Styles.descriptionBox}>{descriptionTexts[1]}</div>
        <div className={Styles.descriptionBox}>{descriptionTexts[2]}</div>
      </div>
      {isOpen && <PhotoAttachModalWindow setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MainInfo;
