import React from 'react'
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import AsansorOne from '../Kişiler/Hümeyra/asansor/AsansorOne';

const AsansörSistemleri = () => {
  return (
    <>
     <HeaderThree />
     <Breadcrumb
                heading="Asansör Çesitleri"
                currentPage="Asansör Çeşitleri" 
            />
            <AsansorOne />
            <BrandOne />
            <FooterOne />
    </>
  )
}

export default AsansörSistemleri