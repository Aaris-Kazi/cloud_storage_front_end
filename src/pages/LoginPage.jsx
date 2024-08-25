import vault from '../vault.svg';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className='container app'>
            <div className="row body text-center align-center">
                <div className="col body border-body">
                    <span className="h5 landing_page">Sign in</span>
                    <br />
                    <img src={vault} className="login_banner" alt="logo" />
                    <form action="" method="post">

                        <div className="form mb-3">
                            <input type="email" name='email' className="form-control" id="floatingEmail" placeholder="name@example.com" />
                        </div>
                        <div className="form mb-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="password" />
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