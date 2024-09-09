import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import googlecloud from "../googlecloud.svg"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top background">
            <div className="container-fluid background">
                <Link to={"/"} className='navbar-brand'>
                    <img className='backgroudWhite' src={googlecloud} alt="" srcset="" />
                    <span className="h6 whiteColor">Cloud Drive</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div className='whiteColor'><FontAwesomeIcon icon={faBars} /></div>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"}  className='text-link'><span className="h6 whiteColor">Overview</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"}  className='text-link'><span className="h6 whiteColor">Features</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"}  className='text-link'><span className="h6 whiteColor">Customer</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} aria-disabled="true"  className='text-link'><span className="h6 whiteColor">Download</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;
