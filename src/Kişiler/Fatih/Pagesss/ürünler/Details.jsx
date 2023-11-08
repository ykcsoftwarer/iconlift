import React from "react";
import HeaderThree from "../../../common/header/HeaderThree";
import Breadcrumb from "../../../common/breadcrumb/Breadcrumb";
import SinglePortfolioContent from "../../../components/single-portfolio/SinglePortfolioContent";
import FooterOne from "../../../../common/footer/FooterOne";

const Details = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb heading="Lüks Kabin" currentPage="Lüks Kabin" />
      <SinglePortfolioContent />
      <FooterOne />
    </>
  );
};

export default Details;
