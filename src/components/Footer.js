import React from 'react';
import { LinkedIn } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import "../styles/Footer.css"


function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Instagram/>
                <LinkedIn/>
                <Email/>
            </div>

            <p>&copy; 2023 adhithyashine.in</p>
        </div>
    )
}

export default Footer;