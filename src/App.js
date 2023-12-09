import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";

import Error from "./pages/Error";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import AsansörSistemleri from "./pages/AsansörSistemleri";
import AsansörDetail from "./pages/AsansörDetail";
import GeneralContracting from "./pages/Vizyonumuz";
import ServicesPage from "./pages/Hakkimizda";
import MetrialManagment from "./pages/Misyonumuz";
import ContactPage from "./pages/Iletisim";

import Product from "./Kişiler/Fatih/Pagesss/ürünler/Product";
import ProductDetail from "./Kişiler/Fatih/Pagesss/ürünler/ProductDetail";
import liftApi from "./data/data";
import Details from "./Kişiler/Fatih/Pagesss/ürünler/Details";
import { useIconContext } from "./context/Context";

function App() {
  const [data, setdata] = useState();
  const{menü}=useIconContext()
  
  
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Router>
      <ScrollToTopRoute />
      
      <Routes>
        <Route
          path={`/index`}
          exact
          element={<HomeDefault />}
        />
        <Route
          path={`/urunler/:slug`}
          exact
          element={<ProductDetail/>}
        />
        <Route
          path={`/urunler/:slug/:slug`}
          exact
          element={<Details/>}
        />

        <Route
          path={`/urunler`}
          exact
          element={<Product  />}
        />

        <Route
          path={`/asansor-cesitleri`}
          exact
          element={<AsansörSistemleri />}
        />
        <Route
          path={`/asansor-cesitleri/:slug`}
          exact
          element={<AsansörDetail />}
        />

        <Route
          path={`/vizyonumuz`}
          exact
          element={<GeneralContracting />}
        />
        <Route
          path={`/misyonmuz`}
          exact
          element={<MetrialManagment />}
        />
        <Route
          path={`/hakkimizda`}
          exact
          element={<ServicesPage />}
        />
        <Route
          path={`/iletisim`}
          exact
          element={<ContactPage />}
        />
        {/* <Route path={`/*`} exact element={<Error />} /> */}
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;
