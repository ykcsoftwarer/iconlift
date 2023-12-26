import React from 'react'
import HeaderThree from "../common/header/HeaderThree";

import FooterOne from '../common/footer/FooterOne';


import BreadcrumbElevator from '../common/breadcrumb/BreadcrumbElevator';
import ElevatorOne from '../components/elevator/ElevatorOne';


const ElevatorTypes = () => {
  
  
  return (
    <>
     <HeaderThree />
     <BreadcrumbElevator
               heading="Asansör Çeşitleri"  
            />
            <ElevatorOne/>
            {/* <BrandOne /> */}
            <FooterOne />
    </>
  )
}

export default ElevatorTypes