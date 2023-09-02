import React, { useEffect, useState } from "react";
import Styles from "./FAQSelector.module.scss";
import infoArrow from "../../images/infoArrow.svg";

export const FAQSelector = ({ boldText, thinText, answerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.questionBox} onClick={() => setIsOpen(!isOpen)}>
        <p>
          — <span>{boldText}</span> {thinText}
        </p>
        <img
          className={isOpen ? Styles.rotate : null}
          src={infoArrow}
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div className={Styles.answerBox}>
          <p className={Styles.answer}>{answerText}</p>
        </div>
      )}
    </>
  );
};
