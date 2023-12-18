import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useIconContext } from "../../context/Context";



const CategorySpare = ({menu}) => {
  const {sparePath } = useIconContext()
  const location = useLocation();
console.log(menu);
  return (
    <div className="services-details__sidebar-single services-details-category">
      <div className="title">
        <h2>Spare Part Category</h2>
      </div>
      <ul className="services-details-category-list">
      {menu?.map((item)=>{
        return (
          <>
        
        <li>
          <Link
            to={`/${sparePath}/${item?.slug}`}
            className={location.pathname === `/${sparePath}/${item?.slug}` ? "active" : ""}
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

export default CategorySpare;