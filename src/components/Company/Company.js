import React from "react";
import { Heading } from "../../elements/heading/heading";
import SwipingGallery from "../Swiper/Swiper";
import Styles from "./Company.module.scss";

const Company = () => {
  return (
    <div className={Styles.main}>
      <Heading
        name={"Компании, с которыми работаем"}
        extraStyles={{ margin: "140px auto 51px" }}
      />
      <SwipingGallery
        slidesPerView={3}
        arrowSize={"46px"}
        slideDimentions={{
          height: "162px",
          width: "398px",
        }}
        arrowPosition={"-23px"}
      />
    </div>
  );
};

export default Company;
