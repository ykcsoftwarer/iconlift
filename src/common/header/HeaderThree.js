import React from "react";
// import { Link } from "react-router-dom";

// import OffCanvasStyleOne from "./OffCanvasStyleOne";
import LogoWhite from "./LogoWhite";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import NiceSelect from "./NiceSelect";
import { useIconContext } from "../../context/Context";

const HeaderThree = () => {
  const { translations, about } = useIconContext();
  const data = translations?.data;
  const siteData = about?.data;
  const logo = siteData?.logo02;
  console.log("trans", about);
  return (
    <>
      <header className="main-header main-header-one clearfix">
        <div className="main-header-one__wrapper">
          <div className="main-header-one__top">
            <div className="container-fluid">
              <div className="main-header-one__top-inner">
                <div className="main-header-one__left">
                  <LogoWhite logo={logo} />
                </div>

                <div className="main-header-one__middle">
                  <ul>
                    <li>
                      <NiceSelect />
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>

                      <div className="text">
                        <span>{data?.header3}</span>
                        <p>{siteData?.adress01}</p>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>

                      <div className="text">
                        <span>{data?.header2}</span>
                        <p className="email">
                          <a href={`mailto:${siteData?.email}`}>
                            {siteData?.email}
                          </a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>

                      <div className="text">
                        <span>{data?.header1}</span>
                        <p className="number">
                          <a href={siteData?.phone02}>{siteData?.phone02}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main-header-one__right">
                  {/* <OffCanvasStyleOne /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-one__bottom">
            <div className="container-fluid">
              <div className="main-header-one__bottom-inner">
                <div className="main-header-one__bottom-left">
                  <nav className="main-menu main-menu--1">
                    <div className="main-menu__inner">
                      <MobileMenu />
                      <div className="stricky-one-logo">
                        <LogoWhite  logo={logo}/>
                      </div>
                      <Nav />

                      {/* <Nav /> */}
                    </div>
                  </nav>
                </div>

                <div className="main-header-one__bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderThree;
