import React, { useEffect, useRef, useState } from "react";
import Selector from "../Selector/Selector";
import Styles from "./Header.module.scss";
import wa from "../../images/wa2.svg";
import vk from "../../images/vk2.svg";
import tg from "../../images/tg2.svg";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import CitySelector from "../CitySelector/CitySelector";
import CitySelectionProvider, {
  useCitySelection,
} from "../../ContextProviders/CitySelectionProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);
  useOutsideAlerter(boxRef, () => setIsOpen(false));
  const {
    isOpen: isOpenCitySelector,
    setIsOpen: setIsOpenCitySelector,
    city,
    setUserInput,
  } = useCitySelection();

  return (
    <>
      {isOpenCitySelector && <CitySelector />}
      <div className={Styles.main} ref={boxRef}>
        <h1 className={Styles.heading}>ПРАВИЛА ЖИЗНИ</h1>
        <header
          className={`${Styles.header} ${isOpen ? Styles.change_bg : ""}`}
        >
          <Selector fields={["акции", "акции2", "акции3", "акции4"]} />
          <div className={Styles.contactBox}>
            <a className={Styles.WA} href="">
              <img src={wa} alt="whats app" />
            </a>
            <a href="">
              <img src={tg} alt="telegram" />
            </a>
            <a href="">
              <img src={vk} alt="vkontakte" />
            </a>
          </div>
          <button
            className={`${Styles.citySelector} ${
              isOpenCitySelector ? Styles.citySelectorOpen : ""
            }`}
            onClick={() => {
              setIsOpenCitySelector(true);
              setUserInput("");
              setIsOpen(false);
            }}
          >
            {city}
          </button>
          <a className={Styles.phone} href="tel:+7800000-77-11">
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
    </>
  );
};

export default Header;
