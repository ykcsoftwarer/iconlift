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
  const [page, setPage] = useState([]);
  const [langData, setLangData] = useState([]);
  const [productPath, setproductPath] = useState("urunler");
  const [asansorPath, setasansorPath] = useState("asansor-cesitleri");
  const [translations, setTranslations] = useState();
  const [about, setAbout] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const productLang = () => {
    if (lang == "tr") {
      setproductPath("urunler");
    } else if (lang == "en") {
      setproductPath("products");
    }
  };
  const asansorLang = () => {
    if (lang == "tr") {
      setasansorPath("asansor-cesitleri");
    } else if (lang == "en") {
      setasansorPath("elevator-types");
    }
  };

  // APİ FETCH
  const fetchPageData = async (item = "index") => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/page.php?slug=${item}&lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b`
      );

      return setPage(responseMenü.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAboutData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/site.php?token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b`
      );

      return setAbout(responseMenü.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTranslationData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/translations.php?lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b `
      );

      return setTranslations(responseMenü.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/page.php?slug=index&lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b`
      );

      return setData(responseMenü.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLangData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/translations.php?lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b `
      );

      return setLangData(responseMenü.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMenüData = async () => {
    try {
      const responseMenü = await axios.get(
        `https://iconlift.com.tr/api/v1/menu.php?lang=${lang}&token=ClKROBblaxToDgTAaykLumdfvPEcAeKXG6e4Wj3W4HIEOF7qrz7fvOekBGu1nhWcWwTEhIo6ETkddb3a08ee4dafd32007b4304d1992383b`
      );
      setMenü(responseMenü.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenüData();
    fetchData();
    fetchLangData();
    productLang();
    asansorLang();
    fetchTranslationData();
    fetchAboutData();
    setTimeout(() => {
      setIsLoading(false);
    },2000);
  }, [lang]);

  const contextValue = {
    menü,
    lang,
    data,
    langData,
    page,
    productPath,
    asansorPath,
    translations,
    about,
    isLoading,

    setLang,
    fetchPageData,
  };

  return (
    <IconContext.Provider value={contextValue}>{children}</IconContext.Provider>
  );
}
