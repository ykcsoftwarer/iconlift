import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useIconContext } from "../../context/Context";



const CategoryElevator = ({menu}) => {
  const {asansorPath } = useIconContext()
  const location = useLocation();

  return (
    <div className="services-details__sidebar-single services-details-category">
      <div className="title">
        <h2>Elevator Category</h2>
      </div>
      <ul className="services-details-category-list">
      {menu?.map((item)=>{
        return (
          <>
        
        <li>
          <Link
            to={`/${asansorPath}/${item?.slug}`}
            className={location.pathname === `/${asansorPath}/${item?.slug}` ? "active" : ""}
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

export default CategoryElevator;