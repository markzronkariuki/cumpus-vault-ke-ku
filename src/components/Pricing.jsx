import React from "react";

const Pricing = () => {

  return (

    <section
      className="container py-5"
      id="pricing"
    >

      {/* TITLE */}
      <div className="text-center mb-5">

        <h1
          className="fw-bold"
          style={{
            color: "#002366"
          }}
        >
          Affordable Student Rates
        </h1>

        <p className="text-muted">
          Safe storage packages for every student need.
        </p>

      </div>

      {/* PRICING CARDS */}
      <div className="row">

        {/* SMALL PACKAGE */}
        <div className="col-md-3 mb-4">

          <div className="card shadow border-0 rounded-4 p-4 h-100 text-center">

            <h1>🎒</h1>

            <h4
              className="fw-bold mt-3"
              style={{
                color: "#002366"
              }}
            >
              Small Package
            </h4>

            <h2 className="text-success fw-bold my-3">
              Ksh 300 - 500
            </h2>

            <p className="text-muted">
              Perfect for:
            </p>

            <ul className="list-unstyled">

              <li>✔ backpacks</li>

              <li>✔ clothes bags</li>

              <li>✔ books</li>

            </ul>

            <button
              className="btn btn-success rounded-pill mt-3"
            >
              Book Now
            </button>

          </div>

        </div>

        {/* MEDIUM PACKAGE */}
        <div className="col-md-3 mb-4">

          <div className="card shadow border-0 rounded-4 p-4 h-100 text-center">

            <h1>🧳</h1>

            <h4
              className="fw-bold mt-3"
              style={{
                color: "#002366"
              }}
            >
              Medium Package
            </h4>

            <h2 className="text-primary fw-bold my-3">
              Ksh 700 - 1,000
            </h2>

            <p className="text-muted">
              Perfect for:
            </p>

            <ul className="list-unstyled">

              <li>✔ suitcases</li>

              <li>✔ medium boxes</li>

              <li>✔ kitchen items</li>

            </ul>

            <button
              className="btn btn-primary rounded-pill mt-3"
            >
              Book Now
            </button>

          </div>

        </div>

        {/* LARGE PACKAGE */}
        <div className="col-md-3 mb-4">

          <div className="card shadow border-0 rounded-4 p-4 h-100 text-center">

            <h1>🛏️</h1>

            <h4
              className="fw-bold mt-3"
              style={{
                color: "#002366"
              }}
            >
              Large Package
            </h4>

            <h2 className="text-warning fw-bold my-3">
              Ksh 1,000 - 1,500
            </h2>

            <p className="text-muted">
              Perfect for:
            </p>

            <ul className="list-unstyled">

              <li>✔ mattresses</li>

              <li>✔ beddings</li>

              <li>✔ multiple luggage</li>

            </ul>

            <button
              className="btn btn-warning rounded-pill mt-3"
            >
              Book Now
            </button>

          </div>

        </div>

        {/* FULL ROOM */}
        <div className="col-md-3 mb-4">

          <div className="card shadow border-0 rounded-4 p-4 h-100 text-center">

            <h1>🏠</h1>

            <h4
              className="fw-bold mt-3"
              style={{
                color: "#002366"
              }}
            >
              Full Room
            </h4>

            <h2 className="text-danger fw-bold my-3">
              Custom Pricing
            </h2>

            <p className="text-muted">
              Perfect for:
            </p>

            <ul className="list-unstyled">

              <li>✔ beds</li>

              <li>✔ chairs</li>

              <li>✔ full room items</li>

            </ul>

            <button
              className="btn btn-danger rounded-pill mt-3"
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>

      {/* EARLY BIRD SECTION */}
      <div className="mt-5">

        <div
          className="card border-0 shadow rounded-4 p-5 text-center"
          style={{
            background: "#002366",
            color: "white"
          }}
        >

          <h2 className="fw-bold mb-3">
            🎉 Early Bird Discount
          </h2>

          <p className="mb-4">
            Reserve your storage 2 weeks early and save Ksh 200.
          </p>

          <button
            className="btn btn-success rounded-pill px-5"
          >
            Reserve Early
          </button>

        </div>

      </div>

    </section>

  );
};

export default Pricing;