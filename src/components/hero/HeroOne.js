import React from 'react';
import {Link} from 'react-router-dom';

export default class HeroOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.slider-carousel').length) {
            $('.slider-carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              nav: false,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 6000,
              navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow"></span>'],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                1024: {
                  items: 1
                }
              }
            });
          }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="slider-one-sec style3">
                    <div className="slider-carousel owl-carousel owl-theme">
                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/iconLift/ourSliderPicture/sliderImage1.png)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>ICONLİFT</h3>
                                            <h2>Sizler için üretiyoruz<br /></h2>
                                            <p>
                                                Motivasyonumuzu müşterilerimizin memnuniyetinden alıyoruz...
                    
                                                 </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Devamını Oku +">Devamını Oku +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Slider One Single */}

                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/iconLift/ourSliderPicture/liftpicture1.webp)'}}>
                            </div>
                            <div className="container pl-0">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content text-center">
                                            <h3>Türkiye'nin En iyi Asansör Firması</h3>
                                            <h2>Modern Tarz <br /> 
                                            Güncel Görünümler</h2>
                                            <p>ICONLİFT
                                                
                                                </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Devamını Oku +">Devamını Oku+</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* End Slider One Single */}

                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/iconLift/ourSliderPicture/iconlift3.jpg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>ICONLIFT</h3>
                                            <h2>Kaliteli Ürünler
                                                <br />
                                            Güleryüzlü Hizmet
                                            
                                            </h2>
                                            <p> <br /> 
                                            
                                      
                                                 </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Devamını Oku +">Devamını Oku+</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     
                        </div>

                        {/* End Slider One Single */}
                    </div>
                </section>
            </>
        )
    }
}