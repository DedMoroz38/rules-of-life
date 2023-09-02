import React from "react";
import SwipingGallery from "../Swiper/Swiper";
import { Heading } from "../../elements/heading/heading";
import Styles from "./Porfolio.module.scss";
import { useWidthContext } from "../../ContextProviders/WidthProvider";

const Portfolio = () => {
  const { width } = useWidthContext();

  return (
    <div className={Styles.container}>
      <Heading
        name="Портфолио"
        extraStyles={{ margin: "0 auto", marginBottom: "47px" }}
      />
      <SwipingGallery
        slidesPerView={width <= 1030 ? 1 : 2}
        arrowSize={"70px"}
        slideDimentions={
          width <= 440
            ? {
                height: "425px",
                width: "300px",
              }
            : width <= 1030
            ? {
                height: "500px",
                width: "353px",
              }
            : {
                height: "611px",
                width: "431px",
              }
        }
        arrowPosition={width <= 1030 ? "130px" : "-80px"}
        swiperWidth={width <= 1030 ? "auto" : "908px"}
      />
    </div>
  );
};

export default Portfolio;
