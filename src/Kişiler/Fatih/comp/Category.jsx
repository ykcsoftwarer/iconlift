import React from "react";
import { Link } from "react-router-dom";
import liftApi from "../../../data/data";

const Category = ({menu}) => {
  const api = liftApi
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
            to={`/urunler/${item?.slug}`}
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

export default Category;
