const NavBar = () => {

    const pages = ["Home", "Features", "Pricing", "Disabled","Store"]
    return (
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container-fluid d-flex ">
                <div className="navbar-brand ps-2  ">
                    <a className="navbar-brand link-light" href="#">Start Bootstrap</a>
                     </div>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
               

                <div className="collapse navbar-collapse justify-content-end link-light " id="navbarNav">
                    <ul className="navbar-nav">
                        {pages.map((page) => {
                            return (
                                <li className="nav-item " key= {page}>
                                    <a className="nav-link link-light" href="#">{page}</a>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default NavBar