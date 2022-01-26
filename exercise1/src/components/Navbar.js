import React from 'react';
import HsLogo from '../hs.svg';

const Navbar = () => {
    return(
        <div className="Navbar">
            <img className="Navbar-logo" src={HsLogo} alt="logo"/>
            <ul className="Navbar-links">
                <li className="Navbar-linkitems"><button className="Navbar-linkbutton">Etusivu</button></li>
                <li className="Navbar-linkitems"><button className="Navbar-linkbutton">Uutiset</button></li>
                <li className="Navbar-linkitems"><button className="Navbar-linkbutton">Lehdet</button></li>
                <li className="Navbar-linkitems"><button className="Navbar-linkbutton">Asiakaspalvelu</button></li>
            </ul>
            <button className="Navbar-orderbutton">Tilaa</button>
            <button className="Navbar-linkbutton">Kirjaudu</button>
            <button className="Navbar-linkbutton">Valikko</button>
        </div>
    )
}

export default Navbar;