import React from 'react'
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='Logobox'>
        <h1>KHUSHI <i className="fa fa-code"></i></h1>
      </div>
      <div className='Menu'>
        <ul>
          <li>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
           <li>
            <Link to="/about" className='nav-link'>About</Link>
          </li>
           <li>
            <Link to="/Project" className='nav-link'>Projects</Link>
          </li>
           <li>
            <Link to="/Contact" className='nav-link'>Contact</Link>
          </li>
        </ul>
      </div>
      <button className="talk-btn">Let's talk</button>
    </nav>
    </>
    
  )
}

