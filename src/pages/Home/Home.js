import React from 'react'
import { Toaster } from "react-hot-toast";
import { Header, Footer } from '../../components'
import { Box, Hero, Maps, ServicesList, SafetyList, Works } from '../../components/HomeComponents'

const Home = () => {
  return (
    <>
      <Toaster /> 
      <Header />
      {/* ======= Hero Section ======= */}
      <Hero />
      {/* End Hero */}
      <main id="main">
        {/* ======= Icon Boxes Section ======= */}
        <section id="icon-boxes" className="icon-boxes">
          <div className="container">
            <div className="row">
              <Box />
            </div>
          </div>
        </section>
        {/* End Icon Boxes Section */}
        {/* ======= About Us Section ======= */}
        <section id="vision" className="vision">
          <div className="container" data-aos="fade-up">
            <div className="section-title-left">
              <h2>About Frekantcy</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Frekantcy is an indigenous company duly registered under the laws of
                  Nigeria with the aim of providing a complete range of engineering,
                  procurement and maintenance services for the Marine/Oil & Gas, Allied
                  Industry, construction and manufacturing company. our services are cost effective, efficient and safe.
                </p>
                <p>
                  we have been actively involved in the provision of various services to the oil and gas sector, private and overnment agencies. these services include: Electrical installations and repairs, Mechanical Enineering services, Air condition installation and Repairs, procument and Leasing services. we have a proven track record of performance and timely delivery.
                </p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 m-me">
                <div className="section-title-me">
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To create a change in the
                  indigenous cooperate perspective by utilizing the power of our best and available local workforce while providing high quality services at the best value to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Why Us Section ======= */}
        <section id="operation" className="operation">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Services & Operation</h2>
            </div>
            <div className="row">
              <div className="col-lg-5 align-items-stretch position-relative video-box" style={{ backgroundImage: 'url("assets/img/why-us.jpg")' }} data-aos="fade-right">
                {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn mb-4" /> */}
              </div>
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch" data-aos="fade-left">
                <div className="content">
                  <p>
                    Frekantcy Nigeria Enterprises
                    carries out repair and maintenance
                    of Industrial and Marine
                  </p>
                  <ServicesList />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Why Us Section */}
        {/* ======= Services Section ======= */}
        <section id="safety-policy" className="safety-policy">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Safety Policy</h2>
              <p>it is our policy to conduct all her operations in a safe manner, to ensure good health of it's personnel, environment and being sensitive to needs and concerns of the community around its area of operation.</p>
              <p>Frekantcy Nigeria Enterprises will manage its operations in such a way as to achieve the following:</p>
            </div>
            <div className="row">
              <SafetyList />
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Cta Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Want to know more ?</h3>
                <p> want to know more about us, hit that button to check us out and understand what we stand for.</p>
              </div>
              <div className="col-lg-3 about-btn-container text-center">
                <a className="about-btn align-middle" href="/about">About Us</a>
              </div>
            </div>
          </div>
        </section>
        {/* End about Section */}
        {/* ======= Portfoio Section ======= */}
        <section id="work-services" className="work-services mb-5">
          <div className="" data-aos="fade-up">
            <div className="container section-title">
              <h2>Our Works & Services</h2>
              <p>Frekantcy Nigeria Enterprises has an array of capabilities in the various sectors, providing quality logistic services and supply for rigs, vessels, industries, offices, homes etc. From electrical to mechanical equipments, emergency response and salvage for all industries. Our skills and experience are constantly evolving, allowing us to provide our clients with a bespoke, fully integrated solution fron project planning and consultancy through to personnel and equipment supply and project execution.</p>
            </div>
            <Works />
          </div>
        </section>
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
            <div className="row mt-1 d-flex justify-content-end" data-aos="fade-right" data-aos-delay={100}>
              <div className="col-lg-5">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>2, Effurun -Sapele Road, Effurun, Delta State</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>frekantcy2013@gmail.com // frekantcy@yahoo.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>08037197217</p>
                  </div>
                  <div className="whatsapp">
                    <i className="bi bi-whatsapp" />
                    <h4>WhatsApp:</h4>
                    <p>08085447470</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay={100}>
                <Maps />
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}

      <Footer />
      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>

    </>
  )
}

export default Home