import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

import Category from '../../comp/Category';
import HeaderThree from '../../../../common/header/HeaderThree';
import liftApi from '../../../../data/data';
import { useIconContext } from '../../../../context/Context';




const ProductDetail = () => {
    const {slug}= useParams()
    const {fetchPageData, page ,lang}= useIconContext()
    useEffect(() => {
        
            fetchPageData(slug)
      return ()=>{
        fetchPageData(slug)
      }
    },[lang,slug])
    console.log("product",page);
    const modulPage= page?.filter(page => page.modulName=== "module1")
    console.log("modulPage",modulPage);
    return (
        <>
        <HeaderThree />
            <section className="blog-list-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                        <h1>{page[0]["data"].title1}</h1>
                            <div className="blog-list__left">
                                {/* Start Blog List Single */}
                                {modulPage?.map((k,index) =>{
                                    const item= k.data
                                    return (
                                        <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="blog-list__single-img">
                                                <img src={item?.image} alt="#" />
                                            </div>
                                        </div>

                                        <div className="col-xl-7">
                                            <div className="blog-list__single-content">
                                               
                                                <h2><Link to={`/ürünler/${slug}/${item?.name}`}>{item?.title2}</Link>
                                                </h2>
                                                <p>{item?.content1}</p>
                                                <div className="btn-box">
                                                    <Link to={`/ürünler/${slug}/${item?.name}`}>Read More <span className="icon-plus-sign"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}
                                {/* End Blog List Single */}

                              
                                {/* End Blog List Single */}

                                {/* Start Styled Pagination */}
                                <div className="blog-list__pagination">
                                    <ul className="styled-pagination clearfix">
                                        <li className="prev"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-double-left"></span></Link>
                                        </li>
                                        <li><Link to={process.env.PUBLIC_URL + `/`} className="active">1</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + `/`}>2</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + `/`}>3</Link></li>
                                        <li className="next"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-double-right"></span></Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* Start Styled Pagination */}
                            </div>
                        </div>


                        {/* Start Sidebar */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar sidebar__blog-list">
                                <Category/>
                            </div>
                        </div>
                        {/* End Sidebar */}

                    </div>
                </div>
            </section>
        </>
    )


}

export default ProductDetail

