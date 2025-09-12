import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>

        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)}>
          Contact
        </NavLink>
      </div>

      <div className="search-section">
        <input type="search" className="search-area" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
