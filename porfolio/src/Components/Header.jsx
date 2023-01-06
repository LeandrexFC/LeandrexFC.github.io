import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../AllCss/App.css'

class Header extends Component {
  render() {
    return (
      <header>
        <Link id='projects' to="/projects"> Projects </Link>
        <Link  id='about' to="/about"> About </Link>
        <Link id='contact' to="/contact"> Contact </Link>
      </header>
    )
  }
}

export default Header;