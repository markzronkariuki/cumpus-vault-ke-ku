import React from "react";

const Carousel = () => {
  return (
    <section className="container-fluid p-0">
      <div
        id="campusVaultCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#campusVaultCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#campusVaultCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#campusVaultCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Carousel Content */}
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="position-relative">
              <img
                src="images/student-storage1.jpg"
                alt="Campus Vault KE"
                className="d-block w-100"
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  filter: "brightness(60%)",
                }}
              />

              {/* Overlay Content */}
              <div
                className="position-absolute top-50 start-50 translate-middle text-center text-white"
                style={{ width: "90%" }}
              >
                <h5
                  className="fw-bold text-uppercase mb-3"
                  style={{
                    color: "#90EE90",
                    letterSpacing: "2px",
                  }}
                >
                  Smart Holiday Storage
                </h5>

                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    lineHeight: "1.2",
                  }}
                >
                  Why Pay Rent <br />
                  For An Empty Room?
                </h1>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.4rem)",
                    maxWidth: "700px",
                    margin: "0 auto",
                  }}
                >
                  Store your luggage safely near KU from only
                  <span className="fw-bold text-warning">
                    {" "}
                    Ksh 300
                  </span>
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-success btn-lg px-4 py-3 rounded-pill fw-bold">
                    Book Storage Now
                  </button>

                  <button className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="position-relative">
              <img
                src="images/student-storage2.jpg"
                alt="Secure Storage"
                className="d-block w-100"
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  filter: "brightness(60%)",
                }}
              />

              <div
                className="position-absolute top-50 start-50 translate-middle text-center text-white"
                style={{ width: "90%" }}
              >
                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  }}
                >
                  Safe. Affordable. <br />
                  Student-Friendly.
                </h1>

                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  }}
                >
                  CCTV monitored storage with secure item tagging
                  and digital receipts.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="position-relative">
              <img
                src="images/student-storage3.jpg"
                alt="Holiday Storage"
                className="d-block w-100"
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  filter: "brightness(60%)",
                }}
              />

              <div
                className="position-absolute top-50 start-50 translate-middle text-center text-white"
                style={{ width: "90%" }}
              >
                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  }}
                >
                  Don’t Carry <br />
                  Stress Home.
                </h1>

                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  }}
                >
                  Reserve secure student storage in less than
                  2 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#campusVaultCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#campusVaultCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
