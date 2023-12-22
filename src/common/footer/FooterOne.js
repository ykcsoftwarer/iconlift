import React from 'react';
import { Link } from 'react-router-dom';
import { useIconContext } from '../../context/Context';
import LogoWhite from '../header/LogoWhite';

const FooterOne = ({ }) => {

    let { langData } = useIconContext()
    const footerData = langData["data"]
    let publicUrl = process.env.PUBLIC_URL + '/'
    // console.log("footerdata",footerData);

    const { translations, about } = useIconContext();
    const data = translations?.data;
    const siteData = about?.data;
    const logo = siteData?.logo02;
    // console.log("trans", about);

    return (
        <>
            <footer className="footer-one-sec">
                <div className="footer-one__pattern" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/pattern/footer-v1-pattern.png)' }}></div>
                <div className="footer-one__top">
                    <div className="footer-one__top-img"
                        style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/resources/footer-v1-img3.png)' }}
                        >

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__top-inner">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                            <div className="footer-widget__column footer-widget__about">
                                                <div className="logo-box footer-widget__about-logo">

                                                    <Link to={`/`}>
                                                        {/* <img src={logo} alt="Logo" />   */}
                                                        <LogoWhite logo={logo} />
                                                    </Link>

                                                </div>
                                                {/* <div className="footer-widget__about-logo">
                                                        <Link to="/">
                                                        <img src="../../../public/assets/images/logo/iconliftlogo.jpg" alt="Logo" />
                                                        <img src={publicUrl+"assets/images/resources/logo-1.png"} alt="Logo" />
                                                        </Link>
                                                    </div> */}

                                                <p className="footer-widget__about-text">Duis aute irure dolor in reprehenderit
                                                    on voluptate velit esse cillum dolore eu nulla pariatur. Excepteur sint
                                                    occaecat</p>

                                                <div className="footer-widget__about-social-link">
                                                    <ul>
                                                        <li>
                                                            <a href="https://facebook.com">
                                                                <span className="first icon-facebook-app-symbol"></span>
                                                                <span className="second icon-facebook-app-symbol"></span>
                                                            </a>
                                                        </li>
     <li>
                                                            <a href="https://linkedin.com">
                                                                <span className="first icon-linkedin"></span>
                                                                <span className="second icon-linkedin"></span>
                                                            </a>
                                                        </li>
                                                   
                                                        <li>
                                                            <a href="https://www.instagram.com">
                                                            <span className="first icon-pinterest"></span>
                                                                <span className="second icon-pinterest"></span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="https://pinterest.com">
                                                                <span className="first icon-pinterest"></span>
                                                                <span className="second icon-pinterest"></span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="https://twitter.com">
                                                                <span className="first icon-twitter"></span>
                                                                <span className="second icon-twitter"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                        <h2 className="footer-widget__title ">{data?.footerTitle1}</h2>
                                            <div className="footer-widget__column footer-widget__services">

                                                <ul className="footer-widget__services-list">
                                                    <li className="footer-widget__services-list-item"><Link to="/services">{data?.footerProjects}</Link></li>
                                                    <li  className="footer-widget__services-list-item"><Link to="/blog">{data?.footerRequests}</Link></li>
                                                    <li className="footer-widget__services-list-item"><Link to="/portfolio">{data?.footerOffers}</Link></li>
                                                    <li className="footer-widget__services-list-item"><Link to="/">{data?.footerExperience}</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                            <div className="footer-widget__column footer-widget__explore">
                                        <h2 className="footer-widget__title">{data?.footerTitle2}</h2>

                                                <ul className="footer-widget__explore-list">
                                                    <li className="footer-widget__explore-list-item"><Link to="/abaut">{data?.footerPlanning}</Link></li>
                                                    <li className="footer-widget__explore-list-item"><Link to="/">{data?.footerCost}</Link></li>
                                                    <li className="footer-widget__explore-list-item"><Link to="/">{data?.footerViews}</Link></li>
                                                    <li className="footer-widget__explore-list-item"><Link to="/">{data?.footerIndustry}</Link></li>
                                                    <li className="footer-widget__explore-list-item"><Link to="/">{data?.footerReform}</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                                <div className="footer-widget__column footer-widget__posts">
                                                    <h2 className="footer-widget__title">Featured Posts</h2>
                                                    <div className="footer-widget__posts-list">
                                                        <ul>
                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/resources/footer-v1-img1.jpg"} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}><span className="icon-link"></span></Link>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p><Link to={process.env.PUBLIC_URL + `/blog-details`}>Althought Many People May <br /> Overlook The Need</Link></p>
                                                                    <span>12 june 2022</span>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="img-box">
                                                                    <img src={publicUrl+"assets/images/resources/footer-v1-img2.jpg"} alt="" />
                                                                    <div className="overlay-icon">
                                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}><span className="icon-link"></span></Link>
                                                                    </div>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p><Link to={process.env.PUBLIC_URL + `/blog-details`}>Veterans In Business Network <br /> National Conference</Link></p>
                                                                    <span>12 june 2022</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-one__bottom clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__bottom-inner">
                                    <div className="footer-one__bottom-text">
                                        <p>Copyright &copy;2022. Tüm Hakları <Link to="/">[YKÇ-FS-KÇ-HY]</Link> aittir.</p>
                                    </div>

                                    <div className="footer-one__bottom-list">
                                        <ul>
                                            <li><Link to="/about-one">Şartlarımız & Projelerimiz </Link></li>
                                            <li><Link to="/about-one"> Hizmetler </Link></li>
                                            <li><Link to="/about-one">Kariyerimiz</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default FooterOne