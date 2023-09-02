import { createContext, useContext, useState } from "react";

const CitySelectionContext = createContext(false);
export const useCitySelection = () => {
  const currentState = useContext(CitySelectionContext);

  if (!currentState) {
    throw new Error("WidthContext is null!");
  }

  return currentState;
};

const CitySelectionProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("Москва");
  const [userInput, setUserInput] = useState("");

  return (
    <CitySelectionContext.Provider
      value={{
        isOpen,
        setIsOpen,
        city,
        setCity,
        userInput,
        setUserInput,
      }}
    >
      {children}
    </CitySelectionContext.Provider>
  );
};

export default CitySelectionProvider;
