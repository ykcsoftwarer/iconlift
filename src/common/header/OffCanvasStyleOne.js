// import React, { useEffect, useState } from "react";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from "react-router-dom";
// import { useIconContext } from "../../context/Context";

// function OffCanvasStyleOne() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const { fetchPageData, lang, page, about, translations } = useIconContext();

//   useEffect(() => {
//     if (lang === "tr") {
//       fetchPageData("hakkimizdan");
//     } else if (lang === "en") {
//       fetchPageData("about-us");
//     }
//   }, [lang]);
//   const data = page?.find((item) => item?.modulName === "productdetails")?.data;
//   const siteData = about?.data;
//   const transData = translations?.data;
//   const socialMedia = siteData?.socialMedia;
//   return (
//     <>
//       <div className="side-content-button">
//         <Link
//           to="#"
//           variant="primary"
//           className="navSidebar-button"
//           onClick={handleShow}
//         >
//           <span className="decor"></span>
//           <span className="decor"></span>
//           <span className="decor"></span>
//         </Link>

//         <Offcanvas
//           show={show}
//           onHide={handleClose}
//           className="xs-sidebar-group info-group info-sidebar isActive"
//         >
//           <div className="xs-overlay xs-bg-black"></div>
//           <div className="xs-sidebar-widget">
//             <div className="sidebar-widget-container">
//               <Offcanvas.Header
//                 closeButton
//                 className="close-side-widget"
//               ></Offcanvas.Header>
//               <div className="sidebar-textwidget">
//                 <div className="sidebar-info-contents">
//                   <div className="content-inner">
//                     <div className="logo">
//                       <Link to="/">
//                         <img src="/assets/images/resources/logo-1.png" alt="" />
//                       </Link>
//                     </div>
//                     <div className="content-box">
//                       <h4>{data?.title1}</h4>
//                       <div className="inner-text">
//                         <p>{data?.content1}</p>
//                       </div>
//                     </div>

//                     <div className="form-inner">
//                       <h4>{transData?.contactNav}</h4>
//                       <form action="index.html" method="post">
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             required=""
//                           />
//                         </div>
//                         <div className="form-group">
//                           <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             required=""
//                           />
//                         </div>
//                         <div className="form-group">
//                           <textarea
//                             name="message"
//                             placeholder="Message..."
//                           ></textarea>
//                         </div>
//                         <div className="form-group message-btn">
//                           <button
//                             className="thm-btn"
//                             data-text="Submit Now +"
//                             type="submit"
//                             data-loading-text="Please wait..."
//                           >
//                             Submit Now
//                           </button>
//                         </div>
//                       </form>
//                     </div>

//                     <div className="sidebar-contact-info">
//                       <h4>Contact Info</h4>
//                       <ul>
//                         <li>
//                           <span className=" icon-maps-and-flags"></span>{" "}
//                           {siteData?.adress01}
//                         </li>
//                         <li>
//                           <span className="icon-phone-call-1"></span>
//                           <a href={siteData?.phone02}>{siteData?.phone02}</a>
//                         </li>
//                         <li>
//                           <span className="icon-email-1"></span>
//                           <a href={`mailto:${siteData?.email}`}>
//                             {siteData?.email}
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="thm-social-link1">
//                       <ul className="social-box">
//                         <li>
//                           <a href={socialMedia?.facebook}>
//                             <span className="icon-facebook-app-symbol"></span>
//                           </a>
//                         </li>
//                         <li>
//                           <a href={`https://wa.me/${siteData?.whatsapp}`}>
//                             <span className="fa fa-whatsapp"></span>
//                           </a>
//                         </li>

//                         <li>
//                           <a href={socialMedia?.instagram}>
//                             <span className="icon-linkedin"></span>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Offcanvas>
//       </div>
//     </>
//   );
// }

// export default OffCanvasStyleOne;
