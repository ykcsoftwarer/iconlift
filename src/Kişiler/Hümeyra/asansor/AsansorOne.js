import React from 'react';
import {Link} from 'react-router-dom';

export default class AsansorOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-one-sec">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                {/* <span className="left"></span>
                                <h6>Our Services</h6> <span className="right"></span> */}
                            </div>
                            <h2 className="sec-title__title">Asansör Çeşitleri</h2>
                        </div>

                        <div className="row">
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/yolcu.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Yolcu Asansörü</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut aliquip ea commodo 
                                                consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/yuk.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Yük Asansörü</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut aliquip ea commodo 
                                                consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/Tac Mahal.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Lüks Asansörleri</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut aliquip ea commodo 
                                                consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/yapayzeka.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Akıll/Yapay Zekalı Asansörler </Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut aliquip ea commodo 
                                                consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/hidrolik.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Hidrolik Asansör</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Yapının içerisinde makine dairesinin olmadığı ve kullanıcı trafik yoğunluğunun az olduğu konutlarda, fabrikalarda, alışveriş merkezlerinde ve villalarda hidrolik asansörler daha çok tercih edilir. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img ">
                                        <img src={publicUrl+"assets/images/asansörler/makine daireli 2.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Makine Daireli Asansör</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut aliquip ea commodo 
                                                consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/dairesiz.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Makine Dairesiz Asansör</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Makine dairesi olan yapıların çoğu zaman bina estetiğine ve görüntüsüne olumsuz etkisi gözlemlenmektedir. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/asansörler/diğer.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Diğer Asansörler</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut aliquip ea commodo 
                                                consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}