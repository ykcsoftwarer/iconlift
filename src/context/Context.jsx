import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
 

const IconContext = createContext();

export function useIconContext() {
  return useContext(IconContext);
}

export function IconProvider({ children }) {
  const [menü, setMenü] = useState([]);
  const [lang, setLang] = useState("tr");
  const [example3, setExample3] = useState([]);

  const fetchData = async () => {
    try {
      if(lang == "tr") {

        const responseMenü = await axios.get(
          "https://iconlift.com.tr/api/v1/menu.php?lang=tr&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b"
        );
        setMenü(responseMenü.data.data)
      }
      else if(lang=="en"){
        const responseMenü = await axios.get(
          "https://iconlift.com.tr/api/v1/menu.php?lang=en&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b"
        );
        setMenü(responseMenü.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [lang]);
  
  const contextValue = {
    menü,
    lang,
    example3,

    setLang,
  };

  return (
    <IconContext.Provider value={contextValue}>{children}</IconContext.Provider>
  );
}
