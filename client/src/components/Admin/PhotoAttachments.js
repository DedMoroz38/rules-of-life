import React from "react";
import Styles from "./Forms.module.scss";

const PhotoAttachments = ({ forms }) => {
  console.log(forms);

  return (
    <>
      {forms?.photoForms &&
        forms.photoForms.map((form) => (
          <div className={Styles.formBox} key={form.id}>
            <div className={Styles.imagesBox}>
              {form.file_names.map((photo, index) => (
                <img
                  key={index}
                  src={`${process.env.REACT_APP_FILES_URL}/${photo}`}
                  alt=""
                />
              ))}
            </div>
            <p>
              Имя: <span>{form.name}</span>
            </p>
            <p>
              Город: <span>{form.city}</span>
            </p>
            <p>
              Номер телефона: <span>{form.phone_number}</span>
            </p>
            <p>
              Коментарий: <span>{form.comment}</span>
            </p>
          </div>
        ))}
    </>
  );
};

export default PhotoAttachments;
