import React from "react";
import gaming from "../../assets/gaming.jpg";
import laptop from "../../assets/laptop.jpg";
import office from "../../assets/office.jpg";
import { FaTruck } from "react-icons/fa";
import "./offersSection.css";

const OffersSection = () => {
  
  return (
    <div className="d-flex justify-content-center">
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-2">Избрани понуди</h2>
        <h5 className="text-center text-muted mb-5">
          Моќни конфигурации за гејминг, работа и учење
        </h5>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="product-img-wrapper">
                <img
                  src={gaming}
                  className="product-img-full"
                  alt="Гејмерска конфигурација"
                />
              </div>
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">Гејмерска конфигурација</h5>
                <ul className="list-unstyled small text-muted mb-3">
                  <li>✅ Intel / AMD процесор</li>
                  <li>✅ Моќна гејмерска графичка</li>
                  <li>✅ RAM/SSD за брзо вчитување</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAPTOP */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="product-img-wrapper">
                <img src={laptop} className="product-img-full" alt="Модерни лаптопи" />
              </div>
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">Модерни лаптопи</h5>
                <ul className="list-unstyled small text-muted mb-3">
                  <li>✅ За работа, студии и забава</li>
                  <li>✅ Најнови модели и брендови</li>
                  <li>✅ Гаранција и поддршка</li>
                </ul>
              </div>
            </div>
          </div>

          {/* OFFICE */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="product-img-wrapper">
                <img src={office} className="product-img-full" alt="Канцелариски системи" />
              </div>
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">Канцелариски системи</h5>
                <ul className="list-unstyled small text-muted mb-3">
                  <li>✅ Оптимизирани за продуктивност</li>
                  <li>✅ Тивки и ефикасни</li>
                  <li>✅ Совршени за бизнис</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="delivery text-white rounded-4 p-5 mt-5">
          <div className="mb-3 fs-1">
            <FaTruck />
          </div>
          <h4 className="fw-bold mb-2">Достава до адреса низ цела Македонија</h4>
          <p className="small mb-4">
            Гратис достава за пратки над 2.000 денари | Плаќање при испорака |
            Гаранција на сите производи
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
