



function NavbarComponent() {

    return (
    
            
              
      <nav className="navbar navbar-expand-sm navbar-light" id="neubar">
            <div className="container">
              <a className="navbar-brand" href="#"><img src="/static_files/images/logos/logo_2.png" height="60" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          
              <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">Pricing</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Company
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Blog</a></li>
                      <li><a className="dropdown-item" href="#">About Us</a></li>
                      <li><a className="dropdown-item" href="#">Contact us</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}

export default NavbarComponent
