import { createContext, useContext, useEffect, useState } from "react";

const DropDownMessageContext = createContext(false);
export const useDropDownMessageContext = () => {
  const currentContext = useContext(DropDownMessageContext);

  if (!currentContext) {
    throw new Error("DropDownMessageContext is null!");
  }

  return currentContext;
};

const DropDownMessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setIsShown(false);
    }, 5000);
  }, [message]);

  return (
    <DropDownMessageContext.Provider
      value={{
        setMessage,
        message,
        isShown,
        setIsShown,
      }}
    >
      {children}
    </DropDownMessageContext.Provider>
  );
};

export default DropDownMessageProvider;
