import React from "react";
import SwipingGallery from "../Swiper/Swiper";
import { Heading } from "../../elements/heading/heading";
import Styles from "./Porfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={Styles.container}>
      <Heading
        name="Портфолио"
        extraStyles={{ margin: "0 auto", marginBottom: "47px" }}
      />
      <SwipingGallery />
    </div>
  );
};

export default Portfolio;
