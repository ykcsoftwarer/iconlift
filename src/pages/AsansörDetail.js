import React from 'react';
import HeaderThree from "../common/header/HeaderThree";

import FooterOne from '../common/footer/FooterOne';
import { useParams } from 'react-router-dom';
import BreadcrumbElevator from '../common/breadcrumb/BreadcrumbElevator';
import SingleAsansörContracting from '../components/asansor/SingleAsansörContracting';

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
