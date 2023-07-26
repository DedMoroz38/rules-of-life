import React from "react";
import Styles from "./ContactUs.module.scss";
import { Heading } from "../../elements/heading/heading";
import calendar from "../../images/calendar.svg";
import phoneBook from "../../images/phoneBook.svg";
import mailLetter from "../../images/mailLetter.svg";

const ContactUs = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.heading_container}>
        <Heading name="Свяжитесь с нами," />
        <Heading name="и мы согласуем вашу вывеску" />
      </div>
      <div className={Styles.contactsBox}>
        <a href="tel:88000007711" className={Styles.contactBox}>
          <div className={Styles.imageBox}>
            <img src={phoneBook} alt="телефон" />
          </div>
          <p>8 (800)000-77-11</p>
        </a>
        <a href="" className={Styles.contactBox}>
          <div className={Styles.imageBox}>
            <img src={mailLetter} alt="mail" />
          </div>
          <p>mail.gmal.com</p>
        </a>
        <a href="" className={Styles.contactBox}>
          <div className={Styles.imageBox}>
            <img src={calendar} alt="календарь" />
          </div>
          <div className={Styles.scheduleBox}>
            <p>9:00 – 18:00</p>
            <p>сб, вс - выходной</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
