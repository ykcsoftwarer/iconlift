import React, { useEffect } from "react";
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

import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

import Details from "./pages/ProductDetails";
import { useIconContext } from "./context/Context";

import SparePart from "./pages/SparePart";
import SpareDetail from "./pages/SpareDetail";

function App() {
  const { productPath, asansorPath, isLoading, sparePath } = useIconContext();
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <h2 className="loader-page">
            <span>İ</span>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>L</span>
            <span>İ</span>
            <span>F</span>
            <span>T</span>
          </h2>
        </div>
      ) : (
        <Router>
          <ScrollToTopRoute />

          <Routes>
            <Route path={`/index`} exact element={<HomeDefault />} />

            <Route path={`/${productPath}`} exact element={<Product />} />

            <Route
              path={`/${productPath}/:slug`}
              exact
              element={<ProductDetail />}
            />
            <Route
              path={`/${productPath}/:categorySlug/:slug`}
              exact
              element={<Details />}
            />

            <Route
              path={`/${asansorPath}`}
              exact
              element={<AsansörSistemleri />}
            />
            <Route
              path={`/${asansorPath}/:slug`}
              exact
              element={<AsansörDetail />}
            />
            <Route path={`/${sparePath}`} exact element={<SparePart />} />
            <Route
              path={`/${sparePath}/:slug`}
              exact
              element={<SpareDetail />}
            />
            <Route
              path={`/kurumsal/vizyonumuz`}
              exact
              element={<GeneralContracting />}
            />
            <Route
              path={`/kurumsal/misyonumuz`}
              exact
              element={<MetrialManagment />}
            />
            <Route
              path={`/kurumsal/hakkimizdan`}
              exact
              element={<ServicesPage />}
            />
            <Route path={`iletisim`} exact element={<ContactPage />} />
            <Route path={`/*`} exact element={<Error />} />
          </Routes>
          <ScrollToTop
            className="scrollUp"
            smooth
            top="1500"
            component={<FaAngleUp />}
          />
        </Router>
      )}
    </>
  );
}

export default App;
