import React, { useEffect, useState } from 'react'
// import {Link} from 'react-scroll'

import{ urlFor, client } from '../lib/sanityClient';

const navLinks = [
  { 
    name: 'Home',
  },
  { 
    name: 'Vision',
  },
  {
    name: 'Operation',
  },
  {
    name: 'OperatiSafety-policyon',
  },
  {
    name: 'About',
  },
  {
    name: 'Services',
  },
  {
    name: 'Contact',
  },
];

const Header = () => {
  const [topbar, setTopbar] = useState('topbar'); 
  const [header, setHeader] = useState('header');
  const [logo, setLogo] = useState([])
  const [active, setActive] = useState('app__Navbar-menu')
  const [activeLink, setActiveLink] = useState('active')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  
  const headerScrolled = () => {
    window.scrollY > 90 ? setHeader('header header-scrolled') : setHeader('header')  
    window.scrollY > 90 ? setTopbar('topbar topbar-scrolled') : setTopbar('topbar')  
  }
  
  useEffect(() => {
    header && headerScrolled()

    const query = '*[_type == "logo"]';
  
    client.fetch(query)  
      .then((data) => {
        setLogo(data)
      })
  }, [onscroll, document, headerScrolled])

  const navToggle = () => {
    // show & unshow the nav menu
    active === 'app__Navbar-menu' ? setActive('app__Navbar-menu nav__active') : setActive('app__Navbar-menu') 

    // ToggleIcon
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }

  return (
    <>
        {/* ======= Top Bar ======= */}
        <div className={`${topbar} fixed-top d-flex align-items-center`}>
          <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <div>
                <i className="bi bi-envelope-fill" /><a href="mailto:contact@example.com">frekantcy2013@gmail.com // frekantcy@yahoo.com </a>
              </div>
              <div>
                <i className="bi bi-phone-fill phone-icon" /> 08037197217
                <i className="bi bi-whatsapp phone-icon" /> 08037197217
              </div>
            </div>
          </div>
        </div>
        {/* ======= Header ======= */}
        <header className={`${header} fixed-top d-flex align-items-center`}>
          <div className="container d-flex align-items-center justify-content-between">   
          {logo.map((item, index) => (
            <img key={index} src={urlFor(item.imgUrl).width(40).height(40).url()} alt={item.name}></img>
          ))}

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#vision">Vision</a></li>
                <li><a className="nav-link scrollto" href="#operation">Operation</a></li>
                <li><a className="nav-link scrollto" href="#safety-policy">Safety-policy</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div> 
            </nav>
          </div>
        </header>
        {/* End Header */}
    </>
  )
}

export default Header