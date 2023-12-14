import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

import FooterOne from '../common/footer/FooterOne';

import SingleAsansörContracting from '../Kişiler/Hümeyra/asansor/SingleAsansörContracting';
import { useParams } from 'react-router-dom';
import BreadcrumbElevator from '../common/breadcrumb/BreadcrumbElevator';

const AsansörDetail = () => {
  const { slug} = useParams();
  console.log("hh",slug)
  return (
    <>
    <HeaderThree />
    <BreadcrumbElevator
        heading={slug} 
    />
    <SingleAsansörContracting />
   
    <FooterOne />
</>
  )
}

export default AsansörDetail
