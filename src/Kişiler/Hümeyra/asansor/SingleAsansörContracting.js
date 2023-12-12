import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { useIconContext } from '../../../context/Context';



const SingleAsansörContracting = () => {
    useEffect(() => {
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
    }, []);

    const {slug}= useParams()
    const {fetchPageData, page ,lang}= useIconContext()
    useEffect(() => {
        
            fetchPageData(slug)
    
    },[lang,slug])

    const modulPage = page?.filter((page) => page?.modulName === "categoriesmenu");
    const pageData= modulPage.map((page) => page?.data );
    
    console.log("product",pageData);
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
                                            <h2>Makine Dairesiz Asansörler
                                           

                                            </h2>
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
  );
};

export default SingleAsansörContracting;