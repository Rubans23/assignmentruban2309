import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('sessionId');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('logged_in');
    localStorage.removeItem('sessionToken');
    navigate('/');
  };

  return (
    <div className="navbardiv">
      <nav>
        <span className="nav_logo">R</span>
        <span className="nav_links">
          <a className="link" href="/home">
            Home
          </a>
          <a className="link" href="/user">
            Users
          </a>
          <a className="link" href="/query">
          Query
          </a>
          <a className="link" href="/" onClick={handleLogout}>Logout</a>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
//new