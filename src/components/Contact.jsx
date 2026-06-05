import React, { useState } from "react";
import axios from "axios";


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendMessage = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {

      const response = await axios.post(
        "https://doreen.alwaysdata.net/api/contact",
        formData
      );

      setResponseMessage(response.data.message);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

    } catch (error) {

      console.log(error);

      setResponseMessage(
        "Failed to send message"
      );

    }
  };

  return (

    <section
      className="container py-5"
      id="contact"
    >

      <div className="text-center mb-5">

        <h1
          className="fw-bold"
          style={{ color: "#002366" }}
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
              style={{ color: "#002366" }}
            >
              Contact Information
            </h3>

            <div className="mb-4">
              <h5>📞 Phone</h5>
              <p className="text-muted">
                +254 116 375 166
              </p>
            </div>

            <div className="mb-4">
              <h5>💬 WhatsApp</h5>
              <p className="text-muted">
                Chat with us anytime
              </p>
            </div>

            <div className="mb-4">
              <h5>📧 Email</h5>
              <p className="text-muted">
                support@campusvault.de.sir.amos@gmail.com
              </p>
            </div>

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
              style={{ color: "#002366" }}
            >
              Send Message
            </h3>

            {responseMessage && (

              <div className="alert alert-info">
                {responseMessage}
              </div>

            )}

            <form onSubmit={sendMessage}>

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

              </div>

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  required
                />

              </div>

              <div className="mb-4">

                <label className="form-label fw-bold">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  required
                ></textarea>

              </div>

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

      {/* MAP */}
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