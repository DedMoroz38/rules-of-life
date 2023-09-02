import React from "react";
import Styles from "./Forms.module.scss";

const Consultations = ({ forms }) => {
  return (
    <>
      {forms?.consultationForms &&
        forms.consultationForms.map((form) => (
          <div className={Styles.formBox} key={form.id}>
            <p>
              Имя: <span>{form.name}</span>
            </p>
            <p>
              Город: <span>{form.city}</span>
            </p>
            <p>
              Номер телефона: <span>{form.phone_number}</span>
            </p>
          </div>
        ))}
    </>
  );
};

export default Consultations;
