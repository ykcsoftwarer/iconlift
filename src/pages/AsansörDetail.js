import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import FooterOne from '../common/footer/FooterOne';
import BrandOne from '../components/brand/BrandOne';
import SingleAsansörContracting from '../Kişiler/Hümeyra/asansor/SingleAsansörContracting';

const AsansörDetail = () => {
  return (
    <>
    <HeaderThree />
    <Breadcrumb
        heading="makine dairesiz  asansör"
        currentPage="Makine Dairesiz Asansör" 
    />
    <SingleAsansörContracting />
    <BrandOne />
    <FooterOne />
</>
  )
}

export default AsansörDetail
