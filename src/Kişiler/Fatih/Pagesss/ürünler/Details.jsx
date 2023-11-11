import React from "react";
import HeaderThree from "../../../../common/header/HeaderThree";
import Breadcrumb from "../../../../common/breadcrumb/Breadcrumb";
import IlUrün from "../../comp/IlUrün";
import FooterOne from "../../../../common/footer/FooterOne";
import { useParams } from "react-router-dom";


const Details = () => {
  const {type , name}= useParams()
  return (
    <>
      <HeaderThree />
      <Breadcrumb heading={type} currentPage={type} product={name}/>
      <IlUrün />
      <FooterOne />

    </>
  );
};

export default Details;
