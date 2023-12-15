import React from 'react'
import HeaderThree from "../common/header/HeaderThree";

import FooterOne from '../common/footer/FooterOne';
import AsansorOne from '../Kişiler/Hümeyra/asansor/AsansorOne';
import { useParams } from 'react-router-dom';
import BreadcrumbElevator from '../common/breadcrumb/BreadcrumbElevator';


const AsansörSistemleri = () => {
  const { slug} = useParams();
  console.log("aa",slug)
  return (
    <>
     <HeaderThree />
     <BreadcrumbElevator
               heading="Asansör Çeşitleri"  
            />
            <AsansorOne />
            {/* <BrandOne /> */}
            <FooterOne />
    </>
  )
}

export default AsansörSistemleri