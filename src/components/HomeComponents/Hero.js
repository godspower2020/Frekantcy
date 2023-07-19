import React from 'react'

const Hero = () => {
  return (
    <>
        <section id="hero" className="d-flex justify-cntent-center align-items-center">
          <div id="heroCarousel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
            <div className="carousel-item active">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">WELCOME TO <span>FREKANTCY</span></h2>
                <p className="animate__animated animate__fadeInUp">repair and maintenance of the Industrial and Marine sector</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">VALUE ENGINEERING</h2>
                <p className="animate__animated animate__fadeInUp">providing high quality services at the best value to our clients</p>
              </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </section>
    </>
  )
}

export default Hero