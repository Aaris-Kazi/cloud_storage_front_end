import { useState } from 'react';
import vault from '../vault.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const baseUrl = "http://127.0.0.1:8000";
    const url = baseUrl + "/auth/login/";
    const headers = {
        "Content-Type": "application/json",
    };
    
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const resp = await axios.post(
                url,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: headers,
                }
            );

            if (resp.status === 200) {
                localStorage.setItem("cloud_drive_username", resp.data.username);
                localStorage.setItem("cloud_drive_access_token", resp.data.access_token);
                navigate('/home/')
            }

        } catch (error) {
            console.error(error);
            
        }
    };

    return (
        <div className='container app'>
            <div className="row body text-center align-center">
                <div className="col body border-body">
                    <span className="h5 landing_page">Sign in</span>
                    <br />
                    <Link to={'/'}>
                        <img src={vault} className="login_banner" alt="logo" />
                    </Link>
                    <form onSubmit={handleSubmit}>

                        <div className="form mb-3">
                            <input type="email" name='email' className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form mb-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='btn btn-primary'>Login</button>

                    </form>
                    <div className="row">
                        <span className='whiteColor topSpacing'>Not having and account?</span>
                        <Link to={'/register'}>
                            <span className='whiteColor'>Register</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;