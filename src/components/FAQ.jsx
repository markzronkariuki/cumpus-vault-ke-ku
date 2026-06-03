import React, { useState } from "react";

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  // FAQ DATA
  const faqs = [
    {
      question: "Is my luggage safe?",
      answer:
        "Yes. All items are tagged, recorded, and stored securely under CCTV monitoring."
    },

    {
      question: "Can I access my items during holidays?",
      answer:
        "Yes, but prior notice is required before collection."
    },

    {
      question: "What if I lose my receipt?",
      answer:
        "Your booking can still be verified using your phone number and student ID."
    },

    {
      question: "Do you offer pickup services?",
      answer:
        "Yes. Pickup services are available near KU hostels at an additional fee."
    },

    {
      question: "Can I reserve before holidays begin?",
      answer:
        "Yes. Early reservations are encouraged because slots are limited."
    }
  ];

  // TOGGLE FUNCTION
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (

    <section
      className="container py-5"
      id="faq"
    >

      {/* TITLE */}
      <div className="text-center mb-5">

        <h1
          className="fw-bold"
          style={{
            color: "#002366"
          }}
        >
          Frequently Asked Questions
        </h1>

        <p className="text-muted">
          Everything students usually ask us.
        </p>

      </div>

      {/* FAQ LIST */}
      <div className="row justify-content-center">

        <div className="col-md-8">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="card shadow-sm border-0 mb-3 rounded-4 overflow-hidden"
            >

              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                className="p-4 d-flex justify-content-between align-items-center"
                style={{
                  cursor: "pointer",
                  background: "#ffffff"
                }}
              >

                <h5
                  className="mb-0 fw-bold"
                  style={{
                    color: "#002366"
                  }}
                >
                  {faq.question}
                </h5>

                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#25D366"
                  }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>

              </div>

              {/* ANSWER */}
              {openIndex === index && (

                <div
                  className="p-4"
                  style={{
                    background: "#f5f7fb"
                  }}
                >

                  <p className="mb-0 text-muted">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default FAQ;