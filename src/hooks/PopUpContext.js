import { createContext, useState } from "react";

export const PopUpContext = createContext(null);

const PopUpContextProvider = (props) => {
  let popUpClosed = JSON.parse(localStorage.getItem("popupclosed") || false);
  popUpClosed = popUpClosed ? false : "Disclaimer";
  const [popUp, setPopUp] = useState(popUpClosed);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {props.children}
    </PopUpContext.Provider>
  );
};

export default PopUpContextProvider;
