import React from "react";
import { Link } from "react-router-dom";

export default class LogoWhite extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <div className="logo">
          <Link to={process.env.PUBLIC_URL + `/`}>
            <img
              src={publicUrl + "assets/images/logo/iconlift_logo4.jpg"}
              alt="Logo"
            />{" "}
          </Link>
        </div>
      </>
    );
  }
}
