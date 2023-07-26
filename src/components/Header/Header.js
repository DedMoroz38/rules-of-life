import React, { useEffect, useRef, useState } from "react";
import Selector from "../Selector/Selector";
import Styles from "./Header.module.scss";
import wa from "../../images/wa.svg";
import vk from "../../images/vk.svg";
import tg from "../../images/tg.svg";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);
  useOutsideAlerter(boxRef, () => setIsOpen(false));

  useEffect(() => {
    isOpen
      ? (document.body.style.cssText = `
        overflow: hidden;

      `)
      : (document.body.style.cssText = `
        overflow: visible;
      `);
  }, [isOpen]);

  return (
    <div className={Styles.main} ref={boxRef}>
      <h1 className={Styles.heading}>ПРАВИЛА ЖИЗНИ</h1>
      <header
        className={Styles.header}
        style={isOpen ? { display: "flex" } : null}
      >
        <Selector fields={["акции", "акции2", "акции3", "акции4"]} />
        <div className={Styles.contactBox}>
          <a href="">
            <img src={wa} alt="whats app" />
          </a>
          <a href="">
            <img src={tg} alt="telegram" />
          </a>
          <a href="">
            <img src={vk} alt="vkontakte" />
          </a>
        </div>
        <Selector fields={["Москва", "Казань", "Питер", "Лондон"]} />
        <a className={Styles.phone} href="">
          +7 800 000 77 11
        </a>
      </header>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${Styles.menuBtn} ${isOpen ? Styles.open : ""}`}
      >
        <div className={Styles.menuBtn__burger}></div>
      </div>
    </div>
  );
};

export default Header;
