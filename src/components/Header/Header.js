import React from "react";
import Selector from "../Selector/Selector";
import Styles from "./Header.module.scss";
import wa from "../../images/wa.svg";
import vk from "../../images/vk.svg";
import tg from "../../images/tg.svg";

const Header = () => {
  const setSort = () => {};
  const setOpenedSelector = () => {};
  const openedSelector = () => {};

  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <div className={Styles.left}>
          <h1 className={Styles.heading}>ПРАВИЛА ЖИЗНИ</h1>
          <Selector
            fields={["Сначала легкие", "Сначала сложные"]}
            onClickFunction={setSort}
            heading={"акции"}
            setOpenedSelector={setOpenedSelector}
            name={"акции"}
            openedSelector={openedSelector}
          />
        </div>
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
        <Selector
          fields={["Сначала легкие", "Сначала сложные"]}
          onClickFunction={setSort}
          heading={"Москва"}
          setOpenedSelector={setOpenedSelector}
          name={"город"}
          openedSelector={openedSelector}
        />
        <p className={Styles.phone}>+7 800 000 77 11</p>
      </header>
    </div>
  );
};

export default Header;
