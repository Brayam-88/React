import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  return (
<header className="row">
    <div className="col-12">
        <div className="navbar navbar-expand-lg navbar-light bg-SECONDARY mt-3">
            <div className="container-fluid">
                <img className="img" src="../.././src/assets/logo BM.jpeg" alt=" logo burzaco market" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                <nav className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            Productos
                        </li>
                        <li className="nav-item">
                             Nosotros
                        </li>
                        <li className="nav-item">
                            Envios
                        </li>
                        <li className="nav-item">
                            Contacto
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </div>        
    </div>
</header>
  )
}

export default Navbar