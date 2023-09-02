import { useDropDownMessageContext } from "../../ContextProviders/DropDownMessageProvider";
import Styles from "./dropDownMessage.module.scss";

export const DropDownMessage = () => {
  const { message, isShown } = useDropDownMessageContext();

  return (
    <div className={Styles.dropDown}>
      <p>{isShown && message}</p>
    </div>
  );
};
