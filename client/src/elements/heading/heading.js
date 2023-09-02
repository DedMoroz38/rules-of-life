import React from "react";
import Styles from "./heading.module.scss";

export const Heading = ({ name, extraStyles }) => {
  return (
    <p className={Styles.heading} style={extraStyles}>
      {name}
    </p>
  );
};
