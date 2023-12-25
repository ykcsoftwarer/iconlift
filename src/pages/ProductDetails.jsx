import React from "react";
import HeaderThree from "../common/header/HeaderThree";

import IlUrün from "../components/product/IlUrün";
import FooterOne from "../common/footer/FooterOne";
import { useParams } from "react-router-dom";
import BreadcrumbProduct from "../common/breadcrumb/BreadcrumbProduct ";

const Details = () => {
  const { categorySlug, slug } = useParams();
  const repSlug = slug.replace(/-/g, " ");
  console.log(categorySlug);
  return (
    <>
      <HeaderThree />
      <BreadcrumbProduct
        heading={repSlug}
        currentPage={categorySlug}
        product={repSlug}
      />
      <IlUrün />
      <FooterOne />
    </>
  );
};

export default Details;
