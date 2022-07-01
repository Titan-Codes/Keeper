import React from 'react';

function Footer(){
    const year = new Date().getFullYear();

    return <div>
        <footer>Copyright © {year}</footer>
    </div>
}

export default Footer;