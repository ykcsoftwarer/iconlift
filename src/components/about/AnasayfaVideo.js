import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useIconContext } from '../../context/Context';

const AnasayfaVideo = () => {


    const { data } = useIconContext();
    const Module1Data = data?.find((k)=> k.modulName === "module1")?.data
    
    // const Module1Data = data[2]?.data

    const content1 = Module1Data?.content1;
    const parser = new DOMParser();
    const cleanHtml = parser.parseFromString(content1, "text/html")?.body
      .textContent;
    const dangerouslyHtml = { __html: cleanHtml };
  
   useEffect(() => {

        const $ = window.$;
        
        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false,
            });
        }
          
    }, []);
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>

                <div className="about-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-three__img">
                                    <div className="inner">
                                        <img src={Module1Data?.image} alt="#" />
                                        <div className="about-three__img-video wow zoomIn" data-wow-delay="100ms">
                                            <a href={Module1Data?.url} className="video-popup">
                                                <div className="about-three__img-video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="about-three__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6> {Module1Data?.title1}
 </h6> 
                                        </div>
                                        {/* <h2 className="sec-title__title">{Module1Data?.title2}
</h2> */}
                                    </div>

                                    <div className="about-three__content-inner">
                                        <div className="text1">
                                            <p dangerouslySetInnerHTML={dangerouslyHtml}></p>
                                        </div>
                                        <div className="text2">
                                            <h4>İconlift Asansör Seçmenin Faydaları </h4>
                                        </div>
                                        <ul className="about-three__content-list">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> 
Kaliteden taviz vermeyen</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Zamanında bitirilen iş ilkesi</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Eğitimle kendini yenileyen</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Müşteri memnuniyetini benimseyen</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Kaliteli ve güvenilir ürünleri Kullanan Firmadır</p>
                                                </div>
                                            </li>
                                        </ul>
                                        {/* <div className="about-three__content-btn">
                                            <Link href={`${process.env.PUBLIC_URL}/about-one`} className="thm-btn" data-text="Discover More +">
                                                Discover More +</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       
            </>
        )
    }
    export default AnasayfaVideo;