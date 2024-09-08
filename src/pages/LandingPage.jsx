
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import landingimg1 from '../img/landingimg1.jpeg';

function LandinPage() {
  return (
    <div className='background'>
      <Navbar />
      <div className="container landing">
        <div className="row">
          <div className="col-6 landing">
            <span className="h1 whiteColor">Easy and secure access to your content</span>
            <p className="h6 whiteColor marginTop">Store, share, and collaborate on files and folders from your mobile device, tablet, or computer</p>
            <div className="row">
              <div className="col-12 maxwidth"><p className="whiteColor">Don't have an account?</p></div>
              <div className="col-12"><Link to={'/register'} className='text-link'><button type="button" className='btn whiteColor'>Sign up at no cost</button></Link></div>
            </div>
          </div>
          <div className="col-6 landing-img">
            <img src={landingimg1} alt="" srcset="" className='img-fluid landing' />
          </div>
        </div>
        <hr></hr>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default LandinPage;