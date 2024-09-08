
import { useState, useEffect } from 'react';

export const Auth = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    useEffect(()=>{
        const username = localStorage.getItem("cloud_drive_username");
        const token = localStorage.getItem("cloud_drive_access_token");
        setisAuthenticated(token != null);
    }, []);
  return (
    isAuthenticated
  );
}


export default Auth;