import React from "react";
import "./contactSection.css";
import contactImage from "../../assets/contact.jpg";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Вашата порака е испратена!", {
      position: "top-right",
      autoClose: 3000,
    });

    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    });

    form.reset();
  };

  return (
    <section className="contact-section py-5" id="contact-section">
      <ToastContainer />

      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-image-wrapper">
              <img src={contactImage} alt="Contact Us" className="contact-image" />
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6">
            <div className="contact-text">
              <div className="blue-line"></div>
              <h2 className="fw-bold mb-3">
                Имаш прашање? <span className="highlight">Контактирај нè!</span>
              </h2>

              <h5 className="text-muted mb-4">
                Пополни ја формата и нашиот тим ќе ти одговори во најбрз можен рок.
              </h5>

              {/* Form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="contact-form mb-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Вашето име"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Вашата е-пошта"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Вашата порака"
                    required
                  ></textarea>
                </div>

                <button type="submit">Испрати порака</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
