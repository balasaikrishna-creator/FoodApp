import React from 'react';
import { Button } from "antd";
import { Link } from 'react-router-dom';

function WelcomePage() {

    return(
        <>
        <div className='welcome-container'>
            <Link to = "/menu">
                <Button className='explore-button'>Explore Menu</Button>
            </Link>
        </div>    
        </>
    )

}
export default WelcomePage;