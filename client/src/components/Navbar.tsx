import { Link } from 'react-router-dom'
import Logo from '../assets/car-logo.png'
import './navbar.css';
import Slider from './Slider';

const Navbar =() => {

    return (
 <>
      <nav className="navbar navbar-expand-sm navbar-light" id="neubar">
            <div className="container">
            <Link to="/">
              <a className="navbar-brand" href=''><img src={Logo} height="60"/></a>
              </Link>  
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          
              <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a className="nav-link mx-2 active" aria-current="page">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2">Pricing</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Company
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item">Blog</a></li>
                      <li><a className="dropdown-item">About Us</a></li>
                      <li><a className="dropdown-item">Contact us</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
      
              <Slider/>
              </>
       
        
     
    )
}

export default Navbar
