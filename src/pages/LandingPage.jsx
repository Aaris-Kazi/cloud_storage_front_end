 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom';
import vault from '../vault.svg';

function LandinPage() {
  return (
    <div className='container app'>
      <div className="row body text-center align-center">
        <div className="col body border-body">
          <span className="h5 landing_page">
            WELCOME TO THE VAULT
          </span>
          <br />
          <span className="h5 landing_page">A cloud based backup drive</span>
          <br />
          <img src={vault} className="welcome_banner" alt="logo" />
          <br />
          <Link to={'/login'}>
            <button type="button" className='btn btn-primary'>PROCEED</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandinPage;