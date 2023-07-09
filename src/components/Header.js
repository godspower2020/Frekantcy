import React, { useEffect, useState } from 'react'
import{ urlFor, client } from '../lib/sanityClient';

const Header = () => {
  const [logo, setLogo] = useState([])

  useEffect(() => {
    const query = '*[_type == "logo"]';
  
    client.fetch(query)
      .then((data) => {
        setLogo(data)
      })
  }, [])

  return (
    <>
        {/* ======= Top Bar ======= */}
        <div id="topbar" className="fixed-top d-flex align-items-center ">
          <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope-fill" /><a href="mailto:contact@example.com">frekantcy2013@gmail.com // frekantcy@yahoo.com </a>
              <i className="bi bi-phone-fill phone-icon" /> 08037197217
              <i className="bi bi-whatsapp phone-icon" /> 08037197217
            </div>
          </div>
        </div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center ">
          <div className="container d-flex align-items-center justify-content-between">   
          {logo.map((item, index) => (
            <img key={index} src={urlFor(item.imgUrl).width(40).height(40).url()} alt={item.name}></img>
          ))}

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </header>
        {/* End Header */}
    </>
  )
}

export default Header