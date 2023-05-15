import { createContext, useState, useEffect } from "react";

export const ReleaseCountdownContext = createContext(null);

const ReleaseCountdownContextProvider = ( props ) => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const releaseDate = new Date("May 15, 2023 19:00:00 GMT+2");

    const getCountdown = setInterval(() => {
      const now = new Date();
      const dateDiff = releaseDate - now;
      if (dateDiff <= 0) {
        setCountdown(0);
        clearInterval(getCountdown);
      } else {
        const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
        setCountdown({days, hours, minutes, seconds});
      }
    }, 1000);

    return () => {
      clearInterval(getCountdown);
    }
  }, []);

  return <ReleaseCountdownContext.Provider value={countdown}>
    {props.children}
  </ReleaseCountdownContext.Provider>
}

export default ReleaseCountdownContextProvider;
