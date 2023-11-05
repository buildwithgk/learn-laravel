import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   const buttonStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    marginTop: '10px',
    zIndex: '1',
  };
  return (
    <div>
      {/* Spinner Start */}
       {/* <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>*/}
      {/* ... */}
      {/* Spinner End */}
      
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              {/*<small className="me-3 text-white-50"><i className="fas fa-map-marker-alt me-2 text-secondary"></i>Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar,</small>*/}
              <small className="me-3 text-white-50"><i className="fas fa-envelope me-2 text-secondary"></i>support@jlktechnology.com</small>
              <small className="text-white-50"><i className="fas fa-phone-alt me-2 text-secondary"></i>+91 8949-2635-41</small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
            <div className="top-link">
              {/* Social Media Links */}
              	<a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
	            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
	            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
	            <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      
      {/* Navbar Start */}
      <div className="container-fluid" style={{ backgroundColor: 'black', important: 'true'  }}>
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <Link to="/" className="navbar-brand">
              {/*<h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>*/}
              <img src="/path/img/newone.png" alt="Logo" className="img-fluid" /> {/* Replace "/path/to/your/logo.png" with the actual path to your logo image */}
            </Link>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" style={buttonStyle}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Services</Link>
                <Link to="/project" className="nav-item nav-link">Projects</Link>
                <div className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                  <div className="dropdown-menu rounded">
                    <Link to="/blog" className="dropdown-item">Our Blog</Link>
                    <Link to="/team" className="dropdown-item">Our Team</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shrink-0">
              {/* Phone and Search */}
               <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                    <a href="" className="position-relative animated tada infinite">
                        <i className="fa fa-phone-alt text-white fa-2x"></i>
                        <div className="position-absolute" style={{ top: "-7px", left: "20px" }}>
                            <span><i className="fa fa-comment-dots text-secondary"></i></span>
                        </div>
                    </a>
                </div>
                <div className="d-flex flex-column pe-4 border-end">
                    <span className="text-white-50">Have any questions?</span>
                    <span className="text-secondary">Call: + 8949 2635 41</span>
                </div>
                <div className="d-flex align-items-center justify-content-center ms-4 ">
                    <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
                </div>
              {/* ... */}
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
};

export default Header;