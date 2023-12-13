import React from 'react';
import {Link} from 'react-router-dom';

const LogoBox =({logo})=> {
   
       
        return (
            <>
                <div className="logo-box">
                    <Link to={`/index`}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
            </>
        )
    }
export default LogoBox