import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import server_error from '../img/server_error.jpeg';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ContentBox = () => {
  const token = localStorage.getItem("cloud_drive_access_token");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        setError(true);
      });
  }, [token]);

  if (loading) {
    return (
      <div className="container response text-center justify-content-center">
        <div className="spinner-border text-primary mx-auto p-2">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container response text-center error_banner">
        <img className="img-fluid error_banner" src={server_error} alt="" srcset="" />
      </div>
    );
  }

  if (token != null) {
    return (
      <div className="container context">
        <div className="row padding-box">
          <span className="h4 whiteColor">All Storage</span>
        </div>
        <div className="row backgound">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope='col'>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value) => (
                  <tr>
                    {value.includes(".") ? <td><span className='margin-left'><FontAwesomeIcon icon={faFile} size='xl' className='folderColor margin-right-file'/>{value}</span></td> : <td><span className='margin-left'><FontAwesomeIcon icon={faFolder} size='xl' className='folderColor margin-right'/>{value}</span></td>}
                  </tr>
                ))
              }
            </tbody>
          </table>
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

export default ContentBox