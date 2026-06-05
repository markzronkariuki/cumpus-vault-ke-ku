import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [, setUser] = useState(null);

  // GET LOGGED USER
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  // LOGOUT
  const Logout = () => {
    localStorage.removeItem("user");
    setUser(null);

    window.location.href = "/";
  };

  return (
    <section className="sticky-top shadow-sm">
      <nav
        className="navbar navbar-expand-lg navbar-dark px-3 py-3"
        style={{
          background: "#002366"
        }}
      >
        <div className="container-fluid">

          {/* LOGO */}
          <a
            href="/"
            className="navbar-brand fw-bold d-flex align-items-center"
            style={{
              fontSize: "1.5rem",
              color: "white"
            }}
          >
            <span
              style={{
                background: "#25D366",
                color: "white",
                padding: "6px 10px",
                borderRadius: "10px",
                marginRight: "10px",
                fontSize: "1rem"
              }}
            >
              🔒
            </span>

            Campus Vault KE
          </a>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div
            className="collapse navbar-collapse"
            id="navbarcollapse"
          >
            <div className="navbar-nav ms-auto align-items-lg-center">

              <a
                href="/"
                className="nav-link text-white mx-2 fw-semibold"
              >
                Home
              </a>

              <a
                href="/pricing"
                className="nav-link text-white mx-2 fw-semibold"
              >
                Pricing
              </a>
              <a
                href="/bookstorage"
                className="nav-link text-white mx-2 fw-semibold"
              >
                Book Storage
              </a>
              <a
                href="/track"
                className="nav-link text-white mx-2 fw-semibold"
              >
                Track Item
              </a>
              <a
                href="/faq"
                className="nav-link text-white mx-2 fw-semibold"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="nav-link text-white mx-2 fw-semibold"
              >
                Contact
              </a>
              <a
  href="/admin-login"
  className="nav-link text-white mx-2 fw-semibold"
>
  Admin Login
</a>

<button
  onClick={Logout}
  className="btn btn-danger ms-2"
>
  Logout
</button>


              

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/254116375166"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 ms-lg-3 mt-3 mt-lg-0 fw-bold"
                style={{
                  background: "#25D366",
                  color: "white"
                }}
              >
                WhatsApp
              </a>

            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;