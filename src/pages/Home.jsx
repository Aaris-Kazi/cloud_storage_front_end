import React from 'react'

export const Home = () => {
    const username = localStorage.getItem("cloud_drive_username");
    const token = localStorage.getItem("cloud_drive_access_token");
    if (token != null) {
      return (
        <div className='whiteColor'>Hi, {username}</div>
      );
    } else {
      return (
        <div className='whiteColor'>Please login</div>
      );

    }
}
