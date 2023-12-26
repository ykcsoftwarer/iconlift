import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useIconContext } from "../../context/Context";

const IlUrün = () => {
  const { slug } = useParams();
  const { fetchPageData, page, lang } = useIconContext();
  useEffect(() => {
    fetchPageData(slug);
  }, [lang]);
  const modulPage = page?.filter(
    (page) => page?.modulName === "productdetails"
  );
  const data = modulPage[0]?.data;

  const content1 = data?.content1;
  const parser = new DOMParser();
  const cleanHtml = parser.parseFromString(content1, "text/html")?.body
    .textContent;
  const dangerouslyHtml = { __html: cleanHtml };

  return (
    <>
      <section className="faq-one">
        <div className="container">
          <div className="row">
            {/* Start Faq One Img */}
            <div className="col-xl-6">
              <div
                className="faq-one__img wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src={data?.image} alt="#" />
              </div>
            </div>
            {/* End Faq One Img */}

            {/* Start Faq One Accordion */}
            <div className="col-xl-6">
              <div className="faq-one__accordion">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6>{data?.title1}</h6> <span className="right"></span>
                  </div>
                  <h2 className="sec-title__title">TEKNİK ÖZELLİKLER</h2>
                </div>
                <div className="ürün-table">
                  {/* <ul >
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
                                            <hr/> */}
                  {/* <p>dangerouslySetInnerHTML={dangerouslyHtml}</p> */}
                  <p
                    className="text-[14px] lg:text-[16px] text-center xl:px-4 w-full"
                    dangerouslySetInnerHTML={dangerouslyHtml}
                  ></p>

                  {/* {data?.content1} */}
                </div>
              </div>
            </div>
            {/* End Faq One Accordion */}
          </div>
        </div>
      </section>
    </>
  );
};

export default IlUrün;
