import React, { useEffect, useState } from "react";
import Styles from "./Selector.module.scss";

const Selector = ({
  fields,
  onClickFunction,
  heading,
  setOpenedSelector,
  name,
  openedSelector,
}) => {
  const [selectState, setSelectState] = useState(false);

  const selectOpen = () => {
    setSelectState(!selectState);
    setOpenedSelector(name);
  };

  useEffect(() => {
    if (openedSelector === null) return;
    if (openedSelector !== name) {
      setSelectState(false);
    }
  }, [openedSelector]);

  return (
    <div
      className={`${Styles["__select"]} ${
        selectState ? Styles["__select_active"] : ""
      }`}
      onClick={selectOpen}
    >
      <div className={`${Styles["__select__title"]}`}>{heading}</div>
      <div className={`${Styles["__select__content"]}`}>
        {fields.map((field, index) => {
          return (
            <div
              key={index}
              className={`${Styles["__select__label"]}`}
              onClick={() => onClickFunction(field)}
            >
              <input
                id="singleSelect0"
                className={`${Styles["__select__input"]}`}
                type="radio"
                name="singleSelect"
                defaultChecked={true}
              />
              <p>{field}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Selector;
