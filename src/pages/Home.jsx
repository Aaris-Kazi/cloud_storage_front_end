import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
    const username = localStorage.getItem("cloud_drive_username");
    const token = localStorage.getItem("cloud_drive_access_token");
    if (token != null) {
      return (
        <div className='whiteColor'><span className='loginHeaderText'> Hi, {username}</span></div>
      );
    } else {
      return (
        <div>
          <div className='whiteColor'><FontAwesomeIcon icon={ faUser } /> <span className='loginHeaderText'>Please login</span> </div>
          <div className='backgroudBlack folderColor'><FontAwesomeIcon icon={faFolder} /></div>
        </div>
      );

    }
}
