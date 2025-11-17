import React from "react";
import { FaLaptop, FaGamepad, FaTools, FaShippingFast, FaArrowRight } from "react-icons/fa";
import "./servicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services-section py-5 text-center" id="services-section">
      <div className="container">
        <h2 className="fw-bold mb-2">Наши услуги</h2>
        <h5 className="text-muted mb-5">Комплетни решенија за сите ваши компјутерски потреби</h5>

        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="service-card shadow-sm border-0 rounded-4 p-4 h-100">
            <div className="d-flex justify-content-center">
              <div className="icon-box bg-gradient-green mb-3">
                <FaLaptop className="fs-3 text-white" />
              </div>
              </div>
              <h5 className="fw-bold">Продажба на лаптопи и десктоп компјутери</h5>
              <p className="text-muted small">Широк избор на нови лаптопи и десктоп системи за секоја употреба и буџет.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="service-card shadow-sm border-0 rounded-4 p-4 h-100">
              <div className="d-flex justify-content-center">
              <div className="icon-box bg-gradient-lime mb-3">
                <FaGamepad className="fs-3 text-white" />
              </div>
              </div>
              <h5 className="fw-bold">Склопување и надградба на системи</h5>
              <p className="text-muted small">Склопување на гејминг, учебни и канцелариски конфигурации по мера.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="service-card shadow-sm border-0 rounded-4 p-4 h-100">
              <div className="d-flex justify-content-center">
              <div className="icon-box bg-gradient-orange mb-3">
                <FaTools className="fs-3 text-white" />
              </div>
              </div>
              <h5 className="fw-bold">Поправка и оптимизација</h5>
              <p className="text-muted small">Брз и сигурен сервис за поправка, оптимизација и одржување на вашата опрема.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="service-card shadow-sm border-0 rounded-4 p-4 h-100">
            <div className="d-flex justify-content-center">
              <div className="icon-box bg-gradient-purple mb-3">
                <FaShippingFast className="fs-3 text-white" />
              </div>
            </div>
              <h5 className="fw-bold">Достава до адреса</h5>
              <p className="text-muted small">Плаќање со испорака и гаранција. Гратис достава за пратки над 2.000 денари.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
