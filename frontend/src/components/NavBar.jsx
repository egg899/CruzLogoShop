import { Link, NavLink } from "react-router-dom";

const NavBar = ({
  cart,
  showCart,
  setShowCart,
  setShowLogin,
  user,
  logout
}) => {

  const clickHandleCart = () => {
    setShowCart(prev => !prev);
  };

  return (
    <nav className="navBar navbar navbar-expand-lg navbar-dark">

  <div className="container-fluid">

    {/* BRAND (IZQUIERDA) */}
    <Link to="/" className="navbar-brand d-flex align-items-center">
      <img
        src="/images/Cruz Logo.jpg"
        alt="Logo"
        height="60"
      />
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">

      <div className="ms-auto d-flex align-items-center gap-4">

        {/* LINKS */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link text-white ${isActive ? "fw-bold" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/producto"
          className={({ isActive }) =>
            `nav-link text-white ${isActive ? "fw-bold" : ""}`
          }
        >
          Productos
        </NavLink>

        {/* CARRITO */}
        <button
          className="btn btn-outline-light position-relative"
          onClick={clickHandleCart}
        >
          Carrito 🛒

          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              {cart.length}
            </span>
          )}
        </button>

        {/* USER / LOGIN */}
        {!user ? (
          <button
            className="btn btn-light"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        ) : (
          <div className="d-flex align-items-center gap-2">

            <span className="badge bg-dark px-3 py-2">
              👤 {user.username}
            </span>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={logout}
            >
              Logout
            </button>

          </div>
        )}

      </div>

    </div>

  </div>
</nav>
  );
};

export default NavBar;