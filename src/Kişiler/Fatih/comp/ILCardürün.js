import React from 'react';
import {Link} from 'react-router-dom';


const ILCardürün = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <>
    <section className="team-one-sec">
        <div className="container">
            <div className="sec-title text-center">
                <div className="sec-title__tagline">
                    <span className="left"></span>
                    <h6>Kabinler</h6> <span className="right"></span>
                </div>
                <h2 className="sec-title__title">Kabin Ürünleri</h2>
            </div>
            <div className="row">
                {/* Start Team One Single */}
                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <img src={publicUrl+"assets/images/diğer asansörler/Panoramik-2.png"} alt="" />
                            <div className="content-box">
                                <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Panoramik Kabin</Link></h2>
                                {/* <span>Senior Worker</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team One Single */}

                {/* Start Team One Single */}
                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <img src={publicUrl+"assets/images/lüks kabinler/asansor_kabin10.jpg"} alt="" />
                            <div className="content-box">
                                <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Lüks Kabin</Link></h2>
                                {/* <span>Senior Worker</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team One Single */}

                {/* Start Team One Single */}
                <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <img src={publicUrl+"assets/images/cam kabin/resa-lift-Panoramik-Kabin-2.jpg"} alt="" />
                            <div className="content-box">
                                <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Cam Kabin</Link></h2>
                                {/* <span>Senior Worker</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team One Single */}
            </div>
        </div>
    </section>
</>
  )
}

export default ILCardürün