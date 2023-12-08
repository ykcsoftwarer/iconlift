import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
 

const IconContext = createContext();

export function useIconContext() {
  return useContext(IconContext);
}

export function IconProvider({ children }) {
  const [menü, setMenü] = useState([]);
  const [lang, setLang] = useState("tr");
  const [data, setData] = useState([]);
  const [langData, setLangData] = useState([]);
  
  const fetchMenüData = async () => {
    try {
      if(lang == "tr") {

        const responseMenü = await axios.get(
          "https://iconlift.com.tr/api/v1/menu.php?lang=tr&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b"
        );
        setMenü(responseMenü.data.data)
      }
      else if(lang =="en"){
        const responseMenü = await axios.get(
          "https://iconlift.com.tr/api/v1/menu.php?lang=en&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b"
        );
        setMenü(responseMenü.data.data)
      }else{
        const responseMenü = await axios.get(
          "https://iconlift.com.tr/api/v1/menu.php?lang=tr&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b"
        );
        setMenü(responseMenü.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/page.php?slug=index&lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b`
      );
      
      return setData(responseMenü.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLangData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/translations.php?lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b `
      );
      
      return setLangData(responseMenü.data)
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    fetchMenüData()
    fetchData()
    fetchLangData()
   
  }, [lang]);
  console.log("data=>",data);
  const contextValue = {
    menü,
    lang,
    data,
    langData,
    setLang,
  };

  return (
    <IconContext.Provider value={contextValue}>{children}</IconContext.Provider>
  );
}
