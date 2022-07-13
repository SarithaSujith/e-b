import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar(props) {
  return (
    <div className="navbar">
    <div className="leftside">
      LOGO
    </div>
    <div className="rightside">
      
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Link to="/sell">Sell</Link>
      <Link to="/contact">Contact</Link>
      
      <div >
        <a className='uk-icon-link' uk-icon="cart" href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="/login"> Login</a>
      </div>
    </div>
  </div>
);
}
  
export default Navbar