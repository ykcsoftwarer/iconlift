import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import FooterOne from "../common/footer/FooterOne";
import Spare from "../components/spare/Spare";
import BreadcrumbSpare from "../common/breadcrumb/BreadcrumbSpare";

const SparePart = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbSpare heading="Yedek Parça Çeşitleri" />
      <Spare />
      <FooterOne />
    </>
  );
};

export default SparePart;
