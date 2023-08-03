import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'

import{ urlFor, client } from '../lib/sanityClient';

const navLinks = [
  { 
    name: 'Home',
    id: 'home'
  },
  { 
    name: 'Vision',
    id: 'vision'
  },
  {
    name: 'Operation',
    id: 'operation'
  },
  {
    name: 'Safety-policy',
    id: 'safety-policy'
  },
  {
    name: 'About',
    id: 'about'
  },
  {
    name: 'Services',
    id: 'work-services'
  },
  {
    name: 'Contact',
    id: 'contact'
  },
];

const Header = () => {
  const [topbar, setTopbar] = useState('topbar'); 
  const [header, setHeader] = useState('header');
  const [logo, setLogo] = useState([])
  const [activeNav, setActiveNav] = useState('app__navbar-menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const [homeId, setHomeId] = useState('home')
  const [menuHomeBody, setMenuHomeBody] = useState('')
  
  const headerScrolled = () => {
    window.scrollY > 90 ? setHeader('header header-scrolled') : setHeader('header')  
    window.scrollY > 90 ? setTopbar('topbar topbar-scrolled') : setTopbar('topbar')  
  }
  
  useEffect(() => {
    // make sure Home link active underline shows up on both mobile and desktop
    // window.innerWidth > '991px' && setHomeId('hero')
    // console.log(window.innerWidth);

    header && headerScrolled()

    const query = '*[_type == "logo"]';
  
    client.fetch(query)  
      .then((data) => {
        setLogo(data)
      })
  }, [onscroll, document, headerScrolled])

  const navToggle = () => {
    // show & unshow the nav menu
    activeNav === 'app__navbar-menu' ? setActiveNav('app__navbar-menu nav__open') : setActiveNav('app__navbar-menu') 
    
    // ToggleIcon
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')

    // no scroll on nav open
    // menuHomeBody === '' ? setMenuHomeBody('no-scroll') : setMenuHomeBody('')
    // document.body.style.overflow = "hidden" ((prevOverflowHidden) => !prevOverflowHidden);
  }

  return (
    <div id='home'>
      {/* ======= Top Bar ======= */}
      <div className={`${topbar} fixed-top d-flex align-items-center`}>
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <div className='topbar-emails'>
              <i className="bi bi-envelope-fill" />
              <a href="mailto:frekantcy2013@gmail.com" target='_blank' rel="noreferrer">frekantcy2013@gmail.com</a>
              <span> // </span>
              <a href="mailto:frekantcy@yahoo.com" target='_blank' rel="noreferrer">frekantcy@yahoo.com</a>
            </div>
            <div className='topbar-phones'>
              <i className="bi bi-phone phone-icon" /><a href='tel:+2348037197217' target='_blank' rel="noreferrer">08037197217</a> 
              <i className="bi bi-whatsapp phone-icon" /><a href='https://wa.me/+2348037197217' target='_blank' rel="noreferrer">08037197217</a> 
            </div>
          </div>
        </div>
      </div>
      {/* ======= Header ======= */}
      <header className={`${header} fixed-top d-flex align-items-center`}>
        <div className="container d-flex align-items-center justify-content-between">   
        {logo.map((item, index) => (
          <a href="/"><img key={index} src={urlFor(item.imgUrl).width(40).height(40).url()} alt={item.name}></img></a>
        ))}

          <div id="navbar" className="navbar">
            <ul className={activeNav}>
                {navLinks.map((link, index) => (
                  <li>
                    <Link
                      onClick={navToggle}
                      key={link + index}
                      className={`nav-link scrollto`}
                      to={link.id}
                      spy={true} 
                      smooth={true} 
                      offset={0} 
                      duration={0} 
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div> 
          </div>
        </div>
      </header>
      {/* End Header */}
    </div>
  )
}

export default Header
