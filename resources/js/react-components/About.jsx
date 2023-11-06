// resources/js/About.jsx
import React from 'react';

export default function About() {
    return (
        <div>
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/*<div className="container-fluid bg-secondary py-5">
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
            </div>*/}
            
            {/*<div className="container-fluid py-5 my-5">*/}
            <div className="container-fluid">        
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="h-100 position-relative">
                                <img src="path/img/about-1.jpg" className="img-fluid w-75 rounded" alt="" style={{ marginbottom: "25%"}} />
                                <div className="position-absolute w-75" style={{ top: "25%" , left: "25%"}}>
                                    <img src="path/img/about-2.jpg" className="img-fluid w-100 rounded" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            <h5 className="text-primary">About Us</h5>
                             <h1 className="mb-4">Transforming Your Ideas Into Great Software</h1>
                            <p>Our mission is to create incredible and powerful products to help in your business growth.</p>
                            <p className="mb-4">We are a software consulting and development company that offers innovative solutions to meet the client’s business needs. Our team of professionals has wide expertise in Web Design and Development, Mobile and Desktop Applications and Online Marketing Solutions. We provide our customers with reliable and error-free software applications, regardless of complexity. Our top-notch developers use the latest software methodologies and technologies. We overcome the challenges of working with an offshore team and deliver a quality product while meeting time-to-market demands..</p>
                            <p className="mb-4">We help you tap the opportunities for growth and innovation by building cutting-edge web applications using latest technologies that redefine emerging market trends and create new opportunities for your online business.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">        
                <div className="container py-5">
                    <div className="row abt_prt animatedParent animateOnce">
                        <div className="col-md-4 ">
                            <img src="https://www.xornor.co/wp-content/uploads/2018/11/our_vision.jpg" className="animated growIn1 " alt="our vision" />
                            <h4 className="in_sub_title">Our Vision</h4>
                            <p className="p_text">
                            Our vision is to help our clients materialize their idea, through technology and top-notch solutions. Our philosophy is to develop quality products, after understanding the requirements, use cases and business goals so that we deliver what you have envisioned.            </p>
                        </div>
                        <div className="col-md-4 animatedParent animateOnce" data-sequence="500">
                            <img src="https://www.xornor.co/wp-content/uploads/2018/11/pexels.jpg" className="animated growIn1 " alt="team &amp; office culture" />
                            <h4 className="in_sub_title">Team &amp; Office Culture</h4>
                            <p className="p_text">
                            We are passionate about our work and the key to our success is ‘Teamwork’. We collaboratively work towards customers’ satisfaction and we love it when they love our work. The happiness of our clients keeps us going and inspire us to build a masterpiece every single time.            </p>
                        </div>
                        <div className="col-md-4 animatedParent animateOnce" data-sequence="500">
                            <img src="https://www.xornor.co/wp-content/uploads/2018/11/ourmission.jpg" className="animated growIn1 " alt="our mission" />
                            <h4 className="in_sub_title">Our Mission</h4>
                            <p className="p_text">                  
                            The Mission of Xornor Software Technologies is to deliver the highest quality of customer service on time, with a sense of innovation, commitment and disruptive thinking. We take care of every technical and market aspect so that the product adds a plus to the client’s business growth.            </p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container-fluid pb-5 mb-5 team">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxwidth: "600px"}}>
                        <h5 className="text-primary">Our Team</h5>
                        <h1>Meet our expert Team</h1>
                    </div>
                    {/*owl-carousel class removed*/}
                    <div className="team-carousel wow fadeIn" data-wow-delay=".5s">
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src="path/img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src="path/img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src="path/img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src="path/img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    );
}
