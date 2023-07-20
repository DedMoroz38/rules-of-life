import React from "react";
import Styles from "./ContactUs.module.scss";
import { Heading } from "../../elements/heading/heading";
import calendar from "../../images/calendar.svg";
import phoneBook from "../../images/phoneBook.svg";
import mailLetter from "../../images/mailLetter.svg";

const ContactUs = () => {
  return (
    <div className={Styles.main}>
      <Heading name="Свяжитесь с нами" extraStyles={{ lineHeight: "48px" }} />
      <Heading
        name="и мы согласуем вашу вывеску"
        extraStyles={{ lineHeight: "48px" }}
      />
      <div className={Styles.contactsBox}>
        <div className={Styles.contactBox}>
          <div className={Styles.imageBox}>
            <img src={phoneBook} alt="телефон" />
          </div>
          <p>8 (800)000-77-11</p>
        </div>
        <div className={Styles.contactBox}>
          <div className={Styles.imageBox}>
            <img src={mailLetter} alt="mail" />
          </div>
          <p>mail.gmal.com</p>
        </div>
        <div className={Styles.contactBox}>
          <div className={Styles.imageBox}>
            <img src={calendar} alt="календарь" />
          </div>
          <div className={Styles.scheduleBox}>
            <p>9:00 – 18:00</p>
            <p>сб, вс - выходной</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
