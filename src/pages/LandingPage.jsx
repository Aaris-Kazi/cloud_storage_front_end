
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import landingimg1 from '../img/landingimg1.jpeg';
import landingimg2 from '../img/landingimg2.jpeg';

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
        <div className="row">
          <div className="col-6 landing-img left">
            <img src={landingimg2} alt="" srcset="" className='img-fluid landing' />
          </div>
          <div className="col-6 landing">
            <span className="h1 whiteColor">People-first collaboration apps to supercharge teamwork</span>
            <p className="h6 whiteColor marginTop">Drive integrates with Docs, Sheets, and Slides, cloud-native collaboration apps that enable your team to create content and collaborate more effectively in real time.</p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col text-align-center">
            <span className="h4 whiteColor">Ready to get started?</span>
            <br />
            <Link to={'/home'} className='text-link'><button type="button" className='btn btn-primary top whiteColor'>Go to drive</button></Link>
          </div>
        </div>
        <div className="row">
          <div className="col padding">
            <div className="row">
              <span className="h6 whiteColor">Follow Us</span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandinPage;