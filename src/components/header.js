import React from "react";
import "./App.css";


function Header(){
    return (
        <div className="header">
            <div className="profile-img">
                <img className="avatar" src="https://res.cloudinary.com/start-ng/image/upload/v1585951180/v_cwwm2l.jpg" alt=""/>
            </div>
            <div className="favicon">
                <img className="icon" src="https://res.cloudinary.com/start-ng/image/upload/v1590437712/new-twitter-logo-vector-512_viqnnk.png" alt=""/>
            </div>
            <div className="home">
                <img className="home-img" src="https://res.cloudinary.com/start-ng/image/upload/v1590438649/download_copy_jywte1.svg" alt="https://onlineconvertfree.com/convert-format/png-to-svg/"/>
            </div>
        </div>
    )
}

export default Header;