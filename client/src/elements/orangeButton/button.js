import Styles from "./button.module.scss";

export const OrangeButton = ({ name, width, onClickFunction }) => {
  return (
    <button
      onClick={onClickFunction}
      className={Styles.button}
      style={{ width: width }}
    >
      {name}
    </button>
  );
};
