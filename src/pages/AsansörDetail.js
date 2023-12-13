import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import FooterOne from '../common/footer/FooterOne';
import BrandOne from '../components/brand/BrandOne';
import SingleAsansörContracting from '../Kişiler/Hümeyra/asansor/SingleAsansörContracting';
import { useParams } from 'react-router-dom';

const AsansörDetail = () => {
  const { categorySlug,slug} = useParams();
  return (
    <>
    <HeaderThree />
    <Breadcrumb
        heading={slug} currentPage={categorySlug}
    />
    <SingleAsansörContracting />
    <BrandOne />
    <FooterOne />
</>
  )
}

export default AsansörDetail
