import React from 'react';
import {Link} from "react-router-dom";
import LogoWhite from './LogoWhite';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import OffCanvasStyleOne from './OffCanvasStyleOne';
import SearchButton from './SearchButton';
import LogoBox from './LogoBox';

const HeaderThree = () => {
    return (
        <>
            <header className="main-header main-header-one clearfix">
                <div className="main-header-one__wrapper">

                    <div className="main-header-one__top">
                        <div className="container-fluid">
                            <div className="main-header-one__top-inner">

                                <div className="main-header-one__left">
                                    <LogoWhite />
                                </div>

                                <div className="main-header-one__middle">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>

                                            <div className="text">
                                                <span>Konumumuz</span>
                                                <p>Fevziçakmak mh. 10762 sk. B-Blok No: 8 B Karatay/Konya</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>

                                            <div className="text">
                                                <span>Çevrimiçi Destek</span>
                                                <p className="email"><a href="mailto:info@iconlift.com">info@iconlift.com</a>
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-phone-call"></span>
                                            </div>

                                            <div className="text">
                                                <span>İletisim</span>
                                                <p className="number"><a href="tel:03325028282">0332 502 82 82</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="main-header-one__right">
                                    <OffCanvasStyleOne />
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
                                                <LogoWhite />
                                            </div>
                                            <Nav />
                                        </div>
                                    </nav>
                                </div>


                                <div className="main-header-one__bottom-right">
                                   

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            
        </>
    )
}

export default HeaderThree;