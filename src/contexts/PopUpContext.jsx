import { createContext, useState } from "react";

export const PopUpContext = createContext(null);

const PopUpContextProvider = (props) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {props.children}
    </PopUpContext.Provider>
  );
};

export default PopUpContextProvider;
