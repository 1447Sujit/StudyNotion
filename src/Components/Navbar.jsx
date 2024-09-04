import logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  function h() {
    toast.success("Logged Out");
  }

  return (
    <div className="navContainer">
      {/* Logo */}
      <Link className="logoLink" to="/">
        {/* <img src={logo} alt="Logo Image"  className="navLogo"/> */}
        <p className="logoName">StudyNotion</p>  
      </Link>

      {/* NavSection */}
      <nav>
        <ul className="navSection">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/">About</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login-Signup-Logout-Dashboard */}
      <div className="navButton">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
