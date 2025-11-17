import React from "react";
import "./whyChooseUs.css";
import { FaMapMarkerAlt, FaUsersCog, FaBolt, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section py-5" id="why-choose-us-section">
      <div className="container text-center">
        <h2 className="fw-bold mb-5 text-white">
          Зошто да изберете <span className="highlight">MC Sistemi?</span>
        </h2>

        {/* Icons Row */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="why-card text-center">
              <div className="icon-box bg-gradient-green mx-auto mb-3">
                <FaMapMarkerAlt className="fs-3 text-white" />
              </div>
              <h5 className="fw-bold text-white">Локален бизнис</h5>
              <p className="text-light small">
                Локален бизнис од Пробиштип – близу до тебе. Лесна комуникација
                и брза поддршка.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="why-card text-center">
              <div className="icon-box bg-gradient-yellow mx-auto mb-3">
                <FaUsersCog className="fs-3 text-white" />
              </div>
              <h5 className="fw-bold text-white">Експертски тим</h5>
              <p className="text-light small">
                Експерти за склопување и сервис. Надградба – без грижи.
                Професионално извршување.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="why-card text-center">
              <div className="icon-box bg-gradient-orange mx-auto mb-3">
                <FaBolt className="fs-3 text-white" />
              </div>
              <h5 className="fw-bold text-white">Брза достава</h5>
              <p className="text-light small">
                Брза достава низ цела Македонија со конкурентни цени. Добиј го
                брзо она што ти треба.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="why-card text-center">
              <div className="icon-box bg-gradient-blue mx-auto mb-3">
                <FaShieldAlt className="fs-3 text-white" />
              </div>
              <h5 className="fw-bold text-white">Гаранција</h5>
              <p className="text-light small">
                Гаранција на сета опрема. Купувај со доверба и сигурност за
                квалитетот.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-box mx-auto mb-4 p-4">
          <div className="row">
            <div className="col-md-4 border-end">
              <h3 className="fw-bold text-primary">500+</h3>
              <p className="text-light small">Задоволни клиенти</p>
            </div>
            <div className="col-md-4 border-end">
              <h3 className="fw-bold text-success">10+</h3>
              <p className="text-light small">Години искуство</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold text-orange">24/7</h3>
              <p className="text-light small">Онлајн поддршка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
