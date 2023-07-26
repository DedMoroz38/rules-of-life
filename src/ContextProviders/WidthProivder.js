import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const WidthContext = createContext("0px");
export const useWidthContext = () => {
  const currentWidthContext = useContext(WidthContext);

  if (!currentWidthContext) {
    throw new Error("WidthContext is null!");
  }

  return currentWidthContext;
};

const WidthProvider = ({ children }) => {
  const [width, setWidth] = useState("");
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => {
      changeWidth();
    });
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <WidthContext.Provider
      value={{
        width,
      }}
    >
      {children}
    </WidthContext.Provider>
  );
};

export default WidthProvider;
