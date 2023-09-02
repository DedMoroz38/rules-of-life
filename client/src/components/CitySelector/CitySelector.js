import React, { useEffect, useRef, useState } from "react";
import searchIson from "../../images/searchIcon.svg";
import Styles from "./CitySelector.module.scss";
import { Cross } from "../../elements/cross/cross";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { useCitySelection } from "../../ContextProviders/CitySelectionProvider";
import ModalWindow from "../ModalWindow/ModalWindow";

const CitySelectorWrapper = () => {
  const boxRef = useRef(null);
  const { isOpen, setIsOpen, setCity, userInput, setUserInput } =
    useCitySelection();
  useOutsideAlerter(boxRef, () => {
    setIsOpen(false);
    setUserInput("");
  });

  const cities = [
    "Aberdeen",
    "Abilene",
    "Akron",
    "Albany",
    "Albuquerque",
    "Alexandria",
    "Allentown",
    "Amarillo",
    "Anaheim",
    "Anchorage",
    "Ann Arbor",
    "Antioch",
    "Apple Valley",
    "Appleton",
    "Arlington",
    "Arvada",
    "Asheville",
    "Athens",
    "Atlanta",
    "Atlantic City",
    "Augusta",
    "Aurora",
    "Austin",
    "Bakersfield",
    "Baltimore",
    "Barnstable",
    "Baton Rouge",
    "Beaumont",
    "Bel Air",
    "Bellevue",
    "Berkeley",
    "Санкт-Петербург",
  ];
  const [filteredCities, setFilteredCities] = useState([...cities]);
  useEffect(() => {
    setFilteredCities([
      ...cities.filter((city) => {
        return city.toLowerCase().startsWith(userInput.toLowerCase());
      }),
    ]);
  }, [userInput]);

  return (
    <div
      className={Styles.main}
      ref={boxRef}
      style={isOpen ? { display: "block" } : null}
    >
      <div className={Styles.headerBox}>
        <p className={Styles.heading}>Ваш город</p>
        <Cross
          onClickFn={() => {
            setIsOpen(!isOpen);
            setUserInput("");
          }}
        />
      </div>
      <div className={Styles.inputContainer}>
        <div className={Styles.inputBox}>
          <img src={searchIson} alt="поиск" />
          <input
            type="text"
            placeholder="Найти город"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
        </div>
      </div>
      <div className={Styles.commonCitiesBox}>
        <div className={Styles.commonCity}>
          {filteredCities.map((city, index) => (
            <p
              onClick={() => {
                setCity(city);
                setIsOpen(false);
                setUserInput("");
              }}
              key={index}
            >
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const CitySelector = () => {
  return (
    <ModalWindow>
      <CitySelectorWrapper />
    </ModalWindow>
  );
};

export default CitySelector;
