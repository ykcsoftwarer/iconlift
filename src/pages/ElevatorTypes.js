import React from 'react'
import HeaderThree from "../common/header/HeaderThree";

import FooterOne from '../common/footer/FooterOne';

import { useParams } from 'react-router-dom';
import BreadcrumbElevator from '../common/breadcrumb/BreadcrumbElevator';
import ElevatorOne from '../components/elevator/ElevatorOne';


const ElevatorTypes = () => {
  const { slug} = useParams();
  console.log("aa",slug)
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