import React, { useEffect, useState } from "react";
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

function App() {
  const [data, setdata] = useState();
  const dataFecth = liftApi
    
  console.log(dataFecth);
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
          path={`${process.env.PUBLIC_URL}/`}
          exact
          element={<HomeDefault />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/ürünler/:type`}
          exact
          element={<ProductDetail/>}
        />

        <Route
          path={`${process.env.PUBLIC_URL}/ürünler`}
          exact
          element={<Product  />}
        />

        <Route
          path={`${process.env.PUBLIC_URL}/asansör`}
          exact
          element={<AsansörSistemleri />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/asansörDetail`}
          exact
          element={<AsansörDetail />}
        />

        <Route
          path={`${process.env.PUBLIC_URL}/vizyonumuz`}
          exact
          element={<GeneralContracting />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/misyonmuz`}
          exact
          element={<MetrialManagment />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/hakkimizda`}
          exact
          element={<ServicesPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/iletisim`}
          exact
          element={<ContactPage />}
        />
        {/* <Route path={`${process.env.PUBLIC_URL}/*`} exact element={<Error />} /> */}
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
