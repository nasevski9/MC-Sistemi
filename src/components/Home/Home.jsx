import React from "react";
import pc from "../../assets/pc-setup.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import OffersSection from "../OffersSection/OffersSection";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";

export default function Home() {
  return (
    <>
    <section className="home d-flex justify-content-center text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="mb-3 text-info">
              📍 Пробиштип, Македонија
            </div>

            <h1 className="fw-bold mb-3">
              Моќни компјутери.<br/>
              <span className="text-primary">Брза поддршка.</span><br />
              <span className="text-success">Достава низ цела Македонија.</span>
            </h1>

            <p className="mb-4">
              Нови лаптопи, склопени гејмерски конфигурации, поправки и надградби — сè на едно место.
              Експертни решенија за секоја потреба.
            </p>


            <div className="d-flex gap-4 mt-4 small fw-semibold">
              <div><FaCheckCircle className="text-success m-2 text-center" />Брза достава</div>
              <div><FaShieldAlt className="text-success m-2 text-center" />Гаранција</div>
              <div><FaTools className="text-success m-2 text-center" />Професионален сервис</div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-lg">
              <img
                src={pc}
                alt="Gamer setup"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServicesSection />
    <OffersSection />
    <WhyChooseUs />
    <ContactSection />
    </>
  );
}
