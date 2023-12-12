import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useIconContext } from "../../../context/Context";


const CategoryProduct = ({menu}) => {
  const {productPath } = useIconContext()
  const location = useLocation();
console.log(menu);
  return (
    <div className="services-details__sidebar-single services-details-category">
      <div className="title">
        <h2>Ürünler Category</h2>
      </div>
      <ul className="services-details-category-list">
      {menu?.map((item)=>{
        return (
          <>
        
        <li>
          <Link
            to={`/${productPath}/${item?.slug}`}
            className={location.pathname === `/${productPath}/${item?.slug}` ? "active" : ""}
          >
            {item?.title}
            <span className="icon-right-arrow"></span>
          </Link>
        </li>
          </>
        )
      })}
       
       
       
      </ul>
    </div>
  );
};

export default CategoryProduct;
