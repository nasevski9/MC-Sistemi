import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLaptop, FaGamepad, FaTools, FaTruck, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; 
import './footer.css'

export default function Footer() {


  
  return (
    <footer className="pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Logo and Description */}
          <div className="col-lg-4 col-md-6 me-lg-5">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img src={logo} alt="MC Sistemi" width="300" className="me-2" />
            </div>
            <p className="mb-3">
              Вашиот доверлив партнер за<br /> компјутерска опрема, сервис<br /> и поддршка
              во Македонија.
            </p>
            <div className="d-flex gap-3 justify-content-center">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/mcsistemipro"
                className="btn rounded d-flex align-items-center justify-content-center"
                style={{
                backgroundColor: "#1877F2",
                color: "white",
                width: "35px",
                height: "35px",
                }}
            >
                <FaFacebookF />
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/mc_sistemi/"
                className="btn rounded d-flex align-items-center justify-content-center"
                style={{
                background:
                    "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                color: "white",
                width: "35px",
                height: "35px",
                }}
            >
                <FaInstagram />
            </a>
            </div>

          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold fs-3 mb-3">Услуги</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaLaptop className="text-primary me-2" />
                Продажба на лаптопи
              </li>
              <li className="mb-2">
                <FaGamepad className="text-success me-2" />
                Гејминг конфигурации
              </li>
              <li className="mb-2">
                <FaTools className="text-warning me-2" />
                Сервис и надградба
              </li>
              <li>
                <FaTruck className="text-info me-2" />
                Брза достава
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold fs-3 mb-3">Контакт</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="text-primary me-2" />
                Јордан Стојанов 12, Пробиштип
              </li>
              <li className="mb-2">
                <FaPhoneAlt className="text-success me-2" />
                076 203 080
              </li>
              <li>
                <FaEnvelope className="text-info me-2" />
                  mcsistemipro@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center small">
          <p className="mb-2 mb-md-0">
            © 2025 MC Sistemi. Сите права задржани.
          </p>
        </div>
      </div>
    </footer>
  );
}
