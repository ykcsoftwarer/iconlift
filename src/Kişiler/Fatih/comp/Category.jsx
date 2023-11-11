import React from "react";
import { Link } from "react-router-dom";
import liftApi from "../../../data/data";

const Category = () => {
  const api = liftApi

  return (
    <div className="services-details__sidebar-single services-details-category">
      <div className="title">
        <h2>Ürünler Category</h2>
      </div>
      <ul className="services-details-category-list">
      {api.map((item)=>{
        return (
          <>
        
        <li>
          <Link
            to={process.env.PUBLIC_URL + `/ürünler/${item.type}`}
            className="active"
          >
            {item.type}
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
