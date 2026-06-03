import React from "react";

const Contact = () => {

  return (

    <section
      className="container py-5"
      id="contact"
    >

      {/* TITLE */}
      <div className="text-center mb-5">

        <h1
          className="fw-bold"
          style={{
            color: "#002366"
          }}
        >
          Need Help?
        </h1>

        <p className="text-muted">
          Contact Campus Vault KE anytime.
        </p>

      </div>

      <div className="row">

        {/* CONTACT INFO */}
        <div className="col-md-5 mb-4">

          <div className="card shadow border-0 rounded-4 p-4 h-100">

            <h3
              className="fw-bold mb-4"
              style={{
                color: "#002366"
              }}
            >
              Contact Information
            </h3>

            {/* PHONE */}
            <div className="mb-4">

              <h5>📞 Phone</h5>

              <p className="text-muted">
                +254 700 000 000
              </p>

            </div>

            {/* WHATSAPP */}
            <div className="mb-4">

              <h5>💬 WhatsApp</h5>

              <p className="text-muted">
                Chat with us anytime.
              </p>

            </div>

            {/* EMAIL */}
            <div className="mb-4">

              <h5>📧 Email</h5>

              <p className="text-muted">
                support@campusvaultke.com
              </p>

            </div>

            {/* LOCATION */}
            <div>

              <h5>📍 Location</h5>

              <p className="text-muted">
                Near Kenyatta University Hostels
              </p>

            </div>

          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="col-md-7 mb-4">

          <div className="card shadow border-0 rounded-4 p-4">

            <h3
              className="fw-bold mb-4"
              style={{
                color: "#002366"
              }}
            >
              Send Message
            </h3>

            <form>

              {/* NAME */}
              <div className="mb-3">

                <label className="form-label fw-bold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />

              </div>

              {/* EMAIL */}
              <div className="mb-3">

                <label className="form-label fw-bold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />

              </div>

              {/* PHONE */}
              <div className="mb-3">

                <label className="form-label fw-bold">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />

              </div>

              {/* MESSAGE */}
              <div className="mb-4">

                <label className="form-label fw-bold">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Type your message..."
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="btn btn-success rounded-pill px-5"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* MAP SECTION */}
      <div className="mt-5">

        <div className="card shadow border-0 rounded-4 overflow-hidden">

          <iframe
            title="Campus Vault KE Location"
            src="https://maps.google.com/maps?q=Kenyatta%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>

  );
};

export default Contact;