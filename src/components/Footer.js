import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from 'react-loader-spinner'

const initialState = {name: '', email: '', subject: '', message: ''}

const Footer = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false)

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    
    emailjs.sendForm('service_2tuxsjv', 'template_54abgyb', e.target, '_qrR0cXB1aI8pF9JG')
      .then((result) => {
          setLoading(false)
          setFormData(initialState)
          toast.success('Message successfully submitted')

      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                  <form role="form" className="php-email-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required value={name} onChange={handleChange} />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required value={email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required value={subject} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required value={message} onChange={handleChange} />
                    </div>
                    <div className="text-center">
                      <button type="submit">
                      {loading ? 
                        <div className='straight-button'>
                          <TailSpin height="20" width="20" radius="9" color="blue" ariaLabel="loading" wrapperStyle wrapperClass /> 
                          <span>sending...</span>
                        </div> :
                        <>
                          Send message
                        </>               
                        }
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                  2, Effurun -Sapele Road, Effurun, Delta State. Nigeria <br /><br />
                    <strong>Phone:</strong> 08037197217<br />
                    <strong>Email:</strong> frekantcy2013@gmail.com // frekantcy@yahoo.com<br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 footer-info">
                  <h3>About Frekantcy</h3>
                  <p>reach us out on social media.</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Frekantcy</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        {/* End Footer */}
    </>
  )
}

export default Footer