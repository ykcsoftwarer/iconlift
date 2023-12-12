import React from "react";
import { Link } from "react-router-dom";
import LogoBlack from "./LogoBlack";

import MobileMenu from "./MobileMenu";
import LogoBox from "./LogoBox";

import NiceSelect from "./NiceSelect";
import Nav from "./Nav";
import { useIconContext } from "../../context/Context";

const HeaderOne = () => {
  const { translations, about } = useIconContext();
  const data = translations?.data;
  const siteData = about?.data;
  const logo= siteData?.logo01
  console.log("trans", about);
  return (
    <>
      <header className="main-header main-header-three clearfix">
        <div className="main-header-three__wrapper">
          <div className="main-header-three__top clearfix">
            <div className="container">
              <div className="main-header-three__top-inner">
                <div className="left">
                  <NiceSelect />
                </div>

                <div className="right">
                  <div className="title">
                    <p>{data?.navTop}</p>
                  </div>

                  <ul className="social-links">
                    <li>
                      <a href="https://facebook.com">
                        <span className="icon-facebook-app-symbol"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://google.com">
                        <span className="icon-google-plus-logo"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-three__middle">
            <div className="container">
              <div className="main-header-three__middle-inner">
                <LogoBox logo={logo} />

                <div className="contact-info">
                  <ul>
                    <li>
                      <div className="icon-box">
                        <span className="icon-pin"></span>
                      </div>
                      <div className="text-box">
                        <h3>{data?.header3}</h3>
                        <p>
                        {siteData?.adress01}
                          {/* Fevziçakmak mh. 10762 sk. B-Blok <br /> No : 8 B
                          Karatay / Konya */}
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-email"></span>
                      </div>
                      <div className="text-box">
                        <h3>{data?.header2}</h3>
                        <p className="email">
                          <a href="mailto:needhelp@company.com">
                            {siteData?.email}
                          </a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="text-box">
                        <h3>{data?.header1}</h3>
                        <p className="number">
                          <a href={siteData?.phone02}>{siteData?.phone02}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-three__bottom">
            <div className="container">
              <div className="main-header-three__bottom-inner">
                <div className="main-header-one__bottom-left">
                  <nav className="main-menu main-menu--1">
                    <div className="main-menu__inner">
                      <MobileMenu />
                      <div className="stricky-one-logo">
                        <LogoBlack />
                      </div>
                      <Nav />
                    </div>
                  </nav>
                </div>

                <div className="main-header-one__bottom-right">
                  {/* <div className="search-box">
                                            <SearchButton />
                                        </div>

                                        <div className="cart-btn">
                                            <Link to={process.env.PUBLIC_URL + `/`}>
                                                <span className="icon-shopping-bag-1"></span><span className="count">0</span>
                                            </Link>
                                        </div>

                                        <div className="side-content-button-box">
                                            <OffCanvasStyleOne />
                                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
};

export default HeaderOne;
