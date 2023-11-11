import React from 'react';
import {Link, useParams} from 'react-router-dom';

import Category from '../../comp/Category';
import HeaderThree from '../../../../common/header/HeaderThree';
import liftApi from '../../../../data/data';




const ProductDetail = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const {type}=useParams()
    const api = liftApi
    
    const filteredData = api?.find(item => item.type == type);
    const kabinlerProducts =  filteredData.products ;

     
    console.log("denem12",kabinlerProducts);
    return (
        <>
        <HeaderThree />
            <section className="blog-list-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                        <h1>{type.toLocaleUpperCase()}</h1>
                            <div className="blog-list__left">
                                {/* Start Blog List Single */}
                                {kabinlerProducts?.map((item,index) =>{
                                    return (
                                        <div className="blog-list__single wow animated fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="blog-list__single-img">
                                                <img src={publicUrl+ item.image} alt="#" />
                                            </div>
                                        </div>

                                        <div className="col-xl-7">
                                            <div className="blog-list__single-content">
                                               
                                                <h2><Link to={process.env.PUBLIC_URL + `/ürünler/${type}/${item.name}`}>{item.name}</Link>
                                                </h2>
                                                <p>There are many variations of passages of Lorem Ipsum available, but
                                                    majority have suffered alteration in some form, by injected humour</p>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/ürünler/${type}/${item.name}`}>Read More <span className="icon-plus-sign"></span></Link>
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

