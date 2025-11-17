import React from "react";
import "./contactSection.css";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import contactImage from '../../assets/contact.jpg';

const ContactSection = () => {
  return (
    <section className="contact-section py-5" id="contact-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-image-wrapper">
              <img src={contactImage} alt="Contact Us" className="contact-image" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="col-lg-6">
            <div className="contact-text">
              <div className="blue-line"></div>
              <h2 className="fw-bold mb-3">
                Имаш прашање? <span className="highlight">Јави ни се!</span>
              </h2>
              <h5 className="text-muted mb-4">
                Нашиот тим е секогаш достапен да ти помогне со избор, нарачка или
                технички прашања. Контактирај нè преку телефон, WhatsApp или на
                нашата Facebook страница.
              </h5>

              {/* Contact Info Cards */}
              <div className="contact-card bg-light mb-3">
                <div className="icon-box blue-bg">
                  <MdEmail className="text-white fs-5" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted small mb-0">
                    mcsistemipro@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact-card bg-light mb-3">
                <div className="icon-box green-bg">
                  <BsFillTelephoneFill className="text-white fs-5" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Телефон</h6>
                  <p className="text-muted small mb-0">
                    076203080
                  </p>
                </div>
              </div>

              <a href="https://www.facebook.com/mcsistemipro">
              <div className="contact-card bg-light mb-4">
                <div className="icon-box fb-bg">
                  <FaFacebookF className="text-white fs-5" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Facebook</h6>
                  <p className="text-muted small mb-0">
                    Следи нè за нови модели и понуди
                  </p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
 