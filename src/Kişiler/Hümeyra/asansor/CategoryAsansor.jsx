import React from "react";
import { Link } from "react-router-dom";
import { useIconContext } from "../../../context/Context";


const CategoryAsansor = ({menu}) => {
  const {asansorPath } = useIconContext()
console.log(menu);
  return (
    <div className="services-details__sidebar-single services-details-category">
      <div className="title">
        <h2>Asansor Category</h2>
      </div>
      <ul className="services-details-category-list">
      {menu?.map((item)=>{
        return (
          <>
        
        <li>
          <Link
            to={`/${asansorPath}/${item?.slug}`}
            className="active"
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

export default CategoryAsansor;