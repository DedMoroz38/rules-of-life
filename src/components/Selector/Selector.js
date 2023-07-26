import React, { useEffect, useState } from "react";
import Styles from "./Selector.module.scss";

const Selector = ({ fields }) => {
  return (
    <div className={Styles.selectionBox}>
      <select className={Styles.select}>
        {fields.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Selector;
