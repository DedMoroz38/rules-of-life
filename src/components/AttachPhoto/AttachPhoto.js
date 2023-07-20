import React, { useRef, useState } from "react";
import Styles from "./AttachPhoto.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";
import { OrangeButton } from "../../elements/orangeButton/button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import clip from "../../images/clip.svg";
import PhoneInput from "../PhoneInput/PhoneInput";
import trash from "../../images/trash.svg";
import { CountryCodeSelector } from "../../elements/countryCodeSelector/countryCodeSelector";

const AttachPhoto = ({ setIsOpen }) => {
  const boxRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  useOutsideAlerter(boxRef, () => setIsOpen(false));
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);

  const clearInput = (event) => {
    event.target.value = null;
  };

  const attachPhoto = (event) => {
    const photosFromFiles = event.target.files;
    setPhotos([...photosFromFiles]);
  };

  const removeAttachment = (fileIndex) => {
    setPhotos([...photos.filter((photo, index) => fileIndex != index)]);
  };

  return (
    <div className={Styles.main} ref={boxRef}>
      <h2>Прикрепить фото</h2>
      <p className={Styles.subtext}>Ответим в течении суток</p>
      <p className={Styles.fieldName}>
        Как вас зовут?<span>*</span>
      </p>
      <input type="text" placeholder="Иван" />
      <p className={Styles.fieldName}>
        Из какого вы города?<span>*</span>
      </p>
      <div className={Styles.phoneBox}>
        <CountryCodeSelector />
        <input type="text" placeholder="Москва" />
      </div>
      <p className={Styles.fieldName}>
        Введите номер телефона<span>*</span>
      </p>
      <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
      <p className={Styles.fieldName}>
        Прикрепить фото<span>*</span>
      </p>
      <div
        className={Styles.filesBox}
        style={photos.length > 1 ? { height: "115px" } : null}
      >
        {photos.length === 0 ? (
          <>
            <p>PDF, JPG</p>
          </>
        ) : (
          <div className={`${Styles.fileNamesBox} ${Styles.file}`}>
            {photos.map((photo, index) => {
              return (
                <div>
                  <p key={index} className={Styles.fileName}>
                    {photo.name}
                  </p>
                  <img
                    onClick={() => removeAttachment(index)}
                    src={trash}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        )}
        <label htmlFor="attachFile">
          <img src={clip} alt="" />
        </label>
        <input
          style={{ display: "none" }}
          onClick={(e) => clearInput(e)}
          onChange={(e) => attachPhoto(e)}
          accept="image/*"
          type="file"
          multiple
          id="attachFile"
        />
      </div>
      <p className={Styles.fieldName}>Оставить комментарий</p>
      <input type="text" placeholder="добавить" />
      <p className={Styles.subtext}>
        Отправляя, вы соглашаетесь с&nbsp;политикой конфиденциальности
      </p>
      <OrangeButton name="Отправить" width="275px" />
    </div>
  );
};

const PhotoAttachModalWindow = ({ setIsOpen }) => {
  return (
    <ModalWindow>
      <AttachPhoto setIsOpen={setIsOpen} />
    </ModalWindow>
  );
};

export default PhotoAttachModalWindow;
