const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">

                    {/* About section */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">MyCompany</h5>
                        <p>
                            Empowering businesses with modern web solutions. We provide tools and services to boost your productivity and growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
                        <p><a href="#" className="text-light text-decoration-none">Home</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Services</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Pricing</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Contact</a></p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                        <p><i className="fas fa-home me-3"></i> San José, Costa Rica</p>
                        <p><i className="fas fa-envelope me-3"></i> support@mycompany.com</p>
                        <p><i className="fas fa-phone me-3"></i> +506 1234 5678</p>
                    </div>

                    {/* Newsletter / Widget */}
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Subscribe</h5>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Enter email"
                            />
                            <button className="btn btn-outline-light">Subscribe</button>
                        </form>
                        <div className="mt-3">
                            <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-light"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="mb-4" />

                {/* Copyright */}
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <p className="text-end">Built with 💙 by You</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
