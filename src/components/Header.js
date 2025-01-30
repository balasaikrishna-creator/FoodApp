import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "antd";
import logo from '../assests/images/logo.png'

function Header() {
    return (
        <div className='main'>
            <div style={{width : "70%" , backgroundColor : "black"}}>
                <Link to ="/">
                    <img src={logo} alt='logo' style={{height:'80px' , width:"fit-content" , marginLeft : "30px"}}/>
                </Link>
                {/* <p className='main-header'>{"Hey, Welcome! Let us treat you to a great dining experience"}</p> */}
            </div>
            <div className='button-container'>
            <div className='header'>
                <Link to="/about">
                    <Button className='about-us-button'>About us</Button>
                </Link>
            </div>
            <div className='header2'>
                <Link to="/contact">
                    <Button className='about-us-button'>Contact us</Button>
                </Link>
            </div>
            </div>
        </div> 
    );
}

export default Header;