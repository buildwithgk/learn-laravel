// resources/js/Index.jsx
import React from 'react';

export default function Index() {
    return (
        <div>
           <div className="container-fluid px-0">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="path/img/carousel-1.jpg" className="img-fluid" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                    <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="path/img/carousel-2.jpg" className="img-fluid" alt="Second slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                    <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
          </div>
              <div className="container-fluid bg-secondary py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">99</h1>
                                <h5 className="text-white mt-1">Success in getting happy customer</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">25</h1>
                                <h5 className="text-white mt-1">Thousands of successful business</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">120</h1>
                                <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">5</h1>
                                <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 my-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="h-100 position-relative">
                                <img src="path/img/about-1.jpg" className="img-fluid w-75 rounded" alt="" style={{marginbottom:"25%"}} />
                                <div className="position-absolute w-75" style={{ top: "25%", left: "25%"}}>
                                    <img src="path/img/about-2.jpg" className="img-fluid w-100 rounded" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            <h5 className="text-primary">About Us</h5>
                            <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                            <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                            <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
             <div className="container-fluid services py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxwidth: "600px" }}>
                        <h5 className="text-primary">Our Services</h5>
                        <h1>Services Built Specifically For Your Business</h1>
                    </div>
                    <div className="row g-5 services-inner">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Web Design</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-file-code fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Web Development</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-external-link-alt fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">UI/UX Design</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Web Cecurity</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Digital Marketing</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Programming</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid project py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxwidth: "600px"}}>
                        <h5 className="text-primary">Our Project</h5>
                        <h1>Our Recently Completed Projects</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="path/img/project-1.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Web design</h4>
                                            <p className="m-0 text-white">Web Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="path/img/project-2.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Cyber Security</h4>
                                            <p className="m-0 text-white">Cyber Security Core</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="path/img/project-3.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Mobile Info</h4>
                                            <p className="m-0 text-white">Upcomming Phone</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="path/img/project-4.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Web Development</h4>
                                            <p className="m-0 text-white">Web Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="path/img/project-5.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Digital Marketing</h4>
                                            <p className="m-0 text-white">Marketing Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="path/img/project-6.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">keyword Research</h4>
                                            <p className="m-0 text-white">keyword Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid blog py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxwidth: "600px" }}>
                        <h5 className="text-primary">Our Blog</h5>
                        <h1>Latest Blog & News</h1>
                    </div>
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="blog-item position-relative bg-light rounded">
                                <img src="path/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: "-28px" , right: "20px" }}>Web Design</span>
                                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ margintop: "-75px"}}>
                                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                        <a href="" className="btn text-white">Read More</a>
                                    </div>
                                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                        <div className="blog-icon-1">
                                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                        </div>
                                        <div className="blog-icon-2">
                                            <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                                            <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content text-center position-relative px-3" style={{ margintop: "-25px" }}>
                                    <img src="path/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="">By Daniel Martin</h5>
                                    <span className="text-secondary">24 March 2023</span>
                                    <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                                </div>
                                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="blog-item position-relative bg-light rounded">
                                <img src="path/img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: "-28px" , right: "20px" }}>Development</span>
                                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ margintop: "-75px" }}>
                                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                        <a href="" className="btn text-white ">Read More</a>
                                    </div>
                                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                        <div className="blog-icon-1">
                                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                        </div>
                                        <div className="blog-icon-2">
                                            <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                                            <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content text-center position-relative px-3" style={{ margintop: "-25px" }}>
                                    <img src="path/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="">By Daniel Martin</h5>
                                    <span className="text-secondary">23 April 2023</span>
                                    <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                                </div>
                                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="blog-item position-relative bg-light rounded">
                                <img src="path/img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: "-28px" , right: "20px" }}>Mobile App</span>
                                <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ margintop: "-75px" }}>
                                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                        <a href="" className="btn text-white ">Read More</a>
                                    </div>
                                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                        <div className="blog-icon-1">
                                            <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                        </div>
                                        <div className="blog-icon-2">
                                            <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                                            <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content text-center position-relative px-3" style={{ margintop: "-25px" }}>
                                    <img src="path/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="">By Daniel Martin</h5>
                                    <span className="text-secondary">30 jan 2023</span>
                                    <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                                </div>
                                <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
