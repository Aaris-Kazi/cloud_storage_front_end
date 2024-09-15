import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import googlecloud from '../googlecloud.svg';
const NavbarHome = () => {
    const username = localStorage.getItem("cloud_drive_username");
    const width = window.innerWidth;
    return (
        <nav className='navbar bg-body-tertiary fixed-top justify-content-center background'>
            <div className='container-fluid justify-content-between background'>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <div className='whiteColor'><FontAwesomeIcon icon={faBars} /></div>
                </button>
                <Link to={'/home'} className='navbar-brand whiteColor'>
                    <img className='backgroudWhite' src={googlecloud} alt="" srcSet="" /> Cloud Drive
                </Link>
                <button className="btn whiteColor background paddedButton">
                    <FontAwesomeIcon icon={faUser} />
                    {
                        width > 601 ? <span className="h6 username-nav">{username}</span> : <span className="h6 username-nav"></span>
                    }
                </button>

                <div className="offcanvas offcanvas-end background" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                    <Link to={'/home'} className='offcanvas-title whiteColor'>
                    <img className='backgroudWhite' src={googlecloud} alt="" srcSet="" />
                </Link>
                        <button type="button" className="btn-close whiteCOlor" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item whiteColor">
                                Files
                            </li>
                            <li className="nav-item whiteColor">
                                Photos
                            </li>
                            <li className="nav-item whiteColor">
                                Music
                            </li>
                            <li className="nav-item whiteColor">
                                Total Storage 373.22 MB of 2.25 GB
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarHome