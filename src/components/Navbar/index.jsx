import { useRef } from 'react';
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Navbar() {
  const navRef = useRef();
  const btnRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("is-open");
    btnRef.current.classList.toggle("is-open");
  }

  return(
      <>
        <nav id="navbar-desktop">
          <Link to="/"><img src='/img/logo2.png'></img></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="https://github.com/devrafamenegon/ramapi" target="_blank">About</a></li>
            <li><Link to="/search">Search</Link></li>
            <li><a href="https://rickandmortyapi.com/" target="_blank">API</a></li>
          </ul>
        </nav>
      
        <div id="navbar-mobile" className="mobile">
          <img src='/img/logo2.png'></img>
          <button id="burger" className="open-navbar" onClick={showNavbar} ref={btnRef}>
            <span className="burger"></span>
            <span className="burger-text">Menu</span>
          </button>
          
          <nav className="navbar" id="navbar" ref={navRef}>
            <ul onClick={showNavbar}>
              <li><Link to="/">Home</Link></li>
              <li><a href="https://github.com/devrafamenegon/ramapi" target="_blank">About</a></li>
              <li><Link to="/search">Search</Link></li>
              <li><a href="https://rickandmortyapi.com/" target="_blank">API</a></li>
            </ul>
          </nav>
        </div>
      </>  
    )
}