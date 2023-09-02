import React from "react";
import { Heading } from "../../elements/heading/heading";
import SwipingGallery from "../Swiper/Swiper";
import Styles from "./Company.module.scss";
import { useWidthContext } from "../../ContextProviders/WidthProvider";

const Company = () => {
  const { width } = useWidthContext();

  return (
    <div className={Styles.main}>
      <Heading
        name={"Компании, с которыми работаем"}
        extraStyles={{ margin: "0 auto" }}
      />
      <SwipingGallery
        slidesPerView={width <= 440 ? 1 : width <= 1030 ? 2 : 3}
        arrowSize={"46px"}
        slideDimentions={
          width <= 440
            ? {
                height: "143px",
                width: "350px",
              }
            : width <= 1030
            ? {
                height: "151px",
                width: "370px",
              }
            : {
                height: "162px",
                width: "398px",
              }
        }
        arrowPosition={"-15px"}
      />
    </div>
  );
};

export default Company;
