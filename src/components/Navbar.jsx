import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link" to="/">
                                Home 🏠
                            </Link>
                            <Link className="nav-link" to="/Contacto">
                                Contacto 📒
                            </Link>
                        </div>
                        <p className="title">
                            Happy Cake 🧁
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;