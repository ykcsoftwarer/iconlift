import React from "react";
import IlUrün from "../../comp/IlUrün";
import { Link } from "react-router-dom";
import HeaderThree from "../../../../common/header/HeaderThree";
import Breadcrumb from "../../../../common/breadcrumb/Breadcrumb";
import FooterOne from "../../../../common/footer/FooterOne";
import BenefitsOne from "../../comp/categoryDetail";


const Kabin = () => {
  return (
    <>
      <HeaderThree />

      <Breadcrumb heading="Kabin" currentPage="Kabin" />
     
      <section className="services-details-page">
        <div className="container">
          <div className="row">
            {/* Start Services Details Content */}
            <div className="col-xl-7 col-lg-7">
            <BenefitsOne />
            </div>
            {/* End Services Details Content */}

            {/* Start Services Details Sidebar */}
            <div className="col-xl-5 col-lg-5">
              <div className="services-details__sidebar">
                {/* <ServiceSearch /> */}

                {/* Start Services Details Sidebar Single */}
                <div className="services-details__sidebar-single services-details-category">
                  <div className="title">
                    <h2>Ürünler Category</h2>
                  </div>
                  <ul className="services-details-category-list">
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/general-contracting`}
                      >
                        Kabinler
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + `/metrial-managment`}>
                        Motor
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/building-renovation`}
                      >
                        Kumanda Panosu
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/architecture-design`}
                      >
                        Buttonlar
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/multistory-build`}
                        className="active"
                      >
                        Halatlar
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/multistory-build`}
                        className="active"
                      >
                        Raylar
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/multistory-build`}
                        className="active"
                      >
                        Mekanik Aksanlar
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={process.env.PUBLIC_URL + `/multistory-build`}
                        className="active"
                      >
                        Bağlantı Paraçaları
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End Services Details Sidebar Single */}

                {/* <ButtonBox />
                <ServiceContactBox /> */}
              </div>
            </div>
            {/* End Services Details Sidebar */}
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  );
};

export default Kabin;
