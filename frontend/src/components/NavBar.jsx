import { Link, NavLink } from "react-router-dom";

const NavBar = ({cart, showCart, setShowCart}) => {

  const clickHandle = () => {
    let boolean = showCart;
    setShowCart(boolean => !boolean);

    
  }

  return (
    <nav className="navBar navbar navbar-expand-lg navbar-dark">

      <div className="container-fluid">

        <h2 className="logo">Mi Shop</h2>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="nav-links ms-auto">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/producto"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Producto
            </NavLink>

            {/* <NavLink
              to="/carrito"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              🛒 Carrito
            </NavLink> */}

            <button className="btn btn-outline-light w-100 position-relative" style={{ borderWidth: "2px" }} 
            onClick={clickHandle}> 
              
              🛒 Carrito
              
              {
        cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
            </span>
        )}
              
              </button>
          {console.log("Mostrando el booleano del navBar: ", showCart)}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;