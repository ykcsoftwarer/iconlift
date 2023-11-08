import React from 'react';
import {Link} from 'react-router-dom';



export default class SingleAsansörContracting extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-details-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="services-details__content">
                                    <div className="services-details__img1">
                                        <img src={publicUrl+"assets/images/asansörler/makine dairesiz 5.jpg"} alt="" />
                                    </div>
                                    <div className="services-details__text-box1">
                                        <div className="title">
                                            <h2>Makine Dairesiz Asansörler</h2>
                                        </div>
                                        <p className="text-1">Makine dairesi olan yapıların çoğu zaman bina estetiğine ve görüntüsüne olumsuz etkisi gözlemlenmektedir. </p>

                                        <p className="text-2">Diğer taraftan da makine dairesi olmayan yapılarda da asansör kullanımının gerçekleşmesi için dişlisiz makine motor teknolojisi ortaya konmuştur. </p>
                                        <br />
                                        <p className="text-2">Bu asansör motorları sayesinde, makine dairesi problemi ortadan kalkmaktadır. Asansör makine motorunun frekans kontrollü olmasından dolayı, asansör kabininin seyri sırasında hassas duruşu, kalkışı, sessiz ve titreşimsiz çalışmasıyla kullanıcıya keyif ve konfor sunmaktadır.    </p>
                                        <br />
                                        <p className="text-2">Dişlisiz makine motorları, dişlili makine motorlarına göre daha çok enerji tasarrufu sağlar. </p>
                                        <br />
                                        <p className="text-2">Bu sistemdeki asansörler, çoğunlukla konut, otobüs terminalleri, havaalanları, çok katlı iş merkezi ve mağazalar, alışveriş merkezleri ile kültür, sağlık ve eğitim hizmeti verilen yapılarda kullanılmaktadır.</p>
                                        <br />
                                        <p className="text-2">Diğer taraftan da makine dairesi olmayan yapılarda da asansör kullanımının gerçekleşmesi için dişlisiz makine motor teknolojisi ortaya konmuştur. </p>
                                        
                                    </div>

                                    {/* <div className="services-details__text-box2 bg-primary">
                                        <div className="row bg-primary">
                                            <div className="col-xl-5">
                                                <div className="services-details__text-box2-img">
                                                    <img src={publicUrl+"assets/images/services/services-details-img2.jpg"} alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="services-details__text-box2-content">
                                                    <div className="title">
                                                        <h2>Planning Work</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat </p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p>Ut enim ad minim veniam</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p> voluptate velit esse cillum dolore eu </p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p>Kuis nostrud exercitation ullamco </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div className="services-details__text-box3 bg-primary">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia
                                            consequuntur magni dolores eos qui ratione volsnesciunt.Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit amet, consectetur, sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore </p>

                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>

                                                <div className="text">
                                                    <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate
                                                    </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>

                                                <div className="text">
                                                    <p>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                        occaecat
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}


                                    {/* Start Services Details Tab Box */}
                                 
                                    {/* End Services Details Tab Box */}
                                </div>
                            </div>
                            {/* End Services Details Content */}

                            {/* Start Services Details Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="services-details__sidebar">
                                    {/* <ServiceSearch /> */}

                                    {/* Start Services Details Sidebar Single */}
                                    <div className="services-details__sidebar-single services-details-category">
                                        <div className="title">
                                            <h2>Asansör Sistemleri</h2>
                                        </div>
                                        <ul className="services-details-category-list">
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`} className="active">Makine Daireli Asansör
                                                <span className="icon-right-arrow"></span></Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Makine Dairesiz Asansör<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Akıllı/Yapay Zeka Asansörleri<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Hidrolik Asansörler<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Yük Asansörleri<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Yolcu Asansörleri<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Lüks Asansörler<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/asansörDetail`}>Diğer Asansörler<span className="icon-right-arrow"></span></Link></li>
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
            </>
        )
    }
}