import React from "react";
import { Link, useParams } from "react-router-dom";




const IlUrün = () => {
    const {slug}= useParams()
    let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
        <section className="faq-one">
                    <div className="container">
                        <div className="row">
                            {/* Start Faq One Img */}
                            <div className="col-xl-6">
                                <div className="faq-one__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <img src={publicUrl+"assets/images/update1.0/faq-v1-img1.jpg"} alt="#" />
                                </div>
                            </div>
                            {/* End Faq One Img */}

                            {/* Start Faq One Accordion */}
                            <div className="col-xl-6">
                                <div className="faq-one__accordion">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>{slug}</h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">TEKNİK ÖZELLİKLER</h2>
                                    </div>
                                    <div className="ürün-table">
                                            <ul >
                                                <li> 100% Insurance</li>
                                                <li>Custom Business Rules</li>
                                                <li>Professional Design</li>
                                                <li>Design and Build</li>
                                                <li>10 Year maintenance</li>
                                            </ul>
                                            <hr/>
                                            <ul >
                                                <li> 100% Insurance</li>
                                                <li>Custom Business Rules</li>
                                                <li>Professional Design</li>
                                                <li>Design and Build</li>
                                                <li>10 Year maintenance</li>
                                            </ul>
                                            <hr/>
                                         
                                        </div>
                                </div>
                            </div>
                            {/* End Faq One Accordion */}
                        </div>
                    </div>
                </section>
      </>
  )
}

export default IlUrün



