import Styles from "./button.module.scss";

export const OrangeButton = ({ name }) => {
  return <button className={Styles.button}>{name}</button>;
};
