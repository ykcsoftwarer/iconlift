import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIconContext } from "../../context/Context";

const HeroOne = () => {
  const { data } = useIconContext();
    const sliderData = data?.find((k)=> k.modulName === "slider")?.data
    

    console.log("slider",sliderData);
  useEffect(() => {
    const $ = window.$;

    if ($(".slider-carousel").length) {
      $(".slider-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        margin: 0,
        nav: false,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-right-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <section className="slider-one-sec style3">
        <div className="slider-carousel owl-carousel owl-theme">
          {/* denem */}
          {sliderData?.map((k, index) => {
            
            return (
              <div className="slider-one__single" key={index}>
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      `url(${k.image})`,
                  }}
                ></div>
                <div className="container">
                  <div className="row clearfix">
                    <div className="col-xl-12">
                      <div className="slider-one__single-content">
                      <h3>{k.title1}</h3>
                      <h2>{k.title2}</h2>
                      <p>{k.button}</p>
                      {/* <div className="btn-box">
                        <Link
                          to={k.url}
                          className="thm-btn"
                          data-text={k.button}
                        >
                          {k.button}
                        </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

         
        </div>
      </section>
    </>
  );
};

export default HeroOne;
