import React from 'react';
import HeaderThree from "../common/header/HeaderThree";

import FooterOne from '../common/footer/FooterOne';
import { useParams } from 'react-router-dom';
import BreadcrumbElevator from '../common/breadcrumb/BreadcrumbElevator';

import SingleElevatorContracting from '../components/elevator/SingleElevatorContracting';

const ElevatorDetail = () => {
  const { slug} = useParams();
  
  return (
    <>
    <HeaderThree />
    <BreadcrumbElevator
        heading={slug} 
    />
    <SingleElevatorContracting />
   
    <FooterOne />
</>
  )
}

export default ElevatorDetail
