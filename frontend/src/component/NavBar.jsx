import './NavBar.css';
import {Link} from "react-router-dom";
  const NavBar = () => {
  return(
    <nav className="nav-bar">
      <Link to="/">
       <h2>Torbita Online-Food</h2>
      </Link>
      <Link to="/">
        Home
      </Link>
      <Link to="/About" className='about__link'>
        About
      </Link>
      <Link to="/Menu" className='menu__link'>
        Menu
      </Link>
      <Link to="/Cart" className='cart__link'>
        <div className="nav-bag">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="35" 
            height="35" 
            fill="currentColor"
            class="bi bi-cart2"
            viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
          <span className="bag-quantity">
            <span>0</span>
          </span>
        </div>
      </Link>
      <div className="sideMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
   
  );
};

export default NavBar;