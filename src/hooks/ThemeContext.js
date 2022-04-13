import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const savedTheme = JSON.parse(localStorage.getItem("theme") || false);
  //const [theme, setTheme] = useState(savedTheme);
  const [theme, setTheme] = useState(false); // TODO

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
