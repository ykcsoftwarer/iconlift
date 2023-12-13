import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { useIconContext } from '../../context/Context';

const ServiceThree = () => {
    const {slug}= useParams()
    const {fetchPageData , data ,asansorPath,lang  } = useIconContext();
    const categoriesData = data?.find((k)=> k.modulName === "categories")?.data
    useEffect(() => {
        if(lang === "tr"){
  
            fetchPageData ("asansor-cesitleri")
        }else if(lang === "en"){
            fetchPageData ("asansor-cesitleri")
        }
    },[lang,slug])
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-three">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" /></div>
                    <div className="shape2 rotate-me"><img src={publicUrl+"assets/images/update1.0/services-v3-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                         
                                <div className="services-three__top">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                        <span className="left"></span> <h6>İCONLİFT</h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title"> <br /> Asansör Sistemleri</h2>
                                    </div>
                             
                                </div>
                            </div>
                        </div>

                        <div className="row">
{categoriesData?.map((k,index)=>{
return (
    <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="services-three__single">
        <div className="services-three__single__bg"
         style={{backgroundImage: `url(${k.image})`}}
        ></div>
        <div className="services-three__single-icon">
            <span className="icon-crane"></span>
        </div>
        <h3 className=''>
            <Link 
           to={`/${asansorPath}/${k?.slug}`}>{k.title}</Link></h3>
        <p>Lorem ipsum is simply free text dolor amett consec adipisc.</p>
        <div className="btn-box">
            <Link 
            to={`/${asansorPath}/${k?.slug}`}>
                <span className="icon-right-arrow"></span></Link>
        </div>
    </div>
</div>
)

})}
                           
                         

                          
                        </div>
                    </div>
                </section>
            </>
        )
    }
    export default ServiceThree;