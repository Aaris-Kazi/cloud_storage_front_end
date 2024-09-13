import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  const username = localStorage.getItem("cloud_drive_username");
  const token = localStorage.getItem("cloud_drive_access_token");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/api/v1/directory/",
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          }
        }
      )
      .then(resp => {
        setData(resp.data.direcotries);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <div className="container response text-center">
        <div className="spinner-border text-primary mx-auto p-2">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      </div>
    );
  }

  if (token != null) {
    return (
      <div className="container">
        <div className='whiteColor'><span className='loginHeaderText'> Hi, {username}</span></div>
        <div className="container">
          <div className="row">
            {
              data.map((value) => (

                <div className="col-2">
                  <div className='backgroudBlack folderColor'><FontAwesomeIcon icon={faFolder} /></div>
                  <span className="whiteColor">{value}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='whiteColor'><FontAwesomeIcon icon={faUser} /> <span className='loginHeaderText'>Please login</span> </div>
        
      </div>
    );

  }

}

export default Home;
