import React from "react";
import { Link } from "react-router-dom";

const LogoWhite=({logo})=> {
  
    return (
      <>
        <div className="logo">
          <Link to={`/index`}>
            <img
              src={logo}
              alt="Logo"
            />{" "}
          </Link>
        </div>
      </>
    );
  }
export default  LogoWhite;