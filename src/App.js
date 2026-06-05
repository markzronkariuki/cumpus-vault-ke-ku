import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// COMPONENTS
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Chatbot from './components/Chatbot';


// PAGES

import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import BookStorage from './components/BookStorage';
import TrackStorage from './components/TrackStorage';
import AdminLogin from "./AdminLogin";
import GetBookings from "./components/GetBookings";







function App() {

  return (

    <BrowserRouter>

      <div className="App">

        {/* NAVBAR */}
        <Navbar />

        {/* HERO SECTION */}
        <Carousel />

        

        {/* HOMEPAGE SECTION */}
        <div className="container py-5">

          <h1
            className="text-center fw-bold"
            style={{
              color: "#002366"
            }}
          >
            Campus Vault KE
          </h1>

          <p className="text-center mb-5">
            Smart Holiday Storage for University Students
          </p>

          {/* CARDS */}
          <div className="row">

            {/* CARD 1 */}
            <div className="col-md-4 mb-4">

              <div className="card shadow border-0 p-4 text-center h-100 rounded-4">

                <h1>🔐</h1>

                <h4 className="fw-bold">
                  Secure Storage
                </h4>

                <p>
                  CCTV monitored and safely tagged luggage.
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="col-md-4 mb-4">

              <div className="card shadow border-0 p-4 text-center h-100 rounded-4">

                <h1>💸</h1>

                <h4 className="fw-bold">
                  Affordable Prices
                </h4>

                <p>
                  Store your items from only Ksh 300.
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="col-md-4 mb-4">

              <div className="card shadow border-0 p-4 text-center h-100 rounded-4">

                <h1>📱</h1>

                <h4 className="fw-bold">
                  Easy Booking
                </h4>

                <p>
                  Book storage within less than 2 minutes.
                </p>

              </div>
              

            </div>

          </div>

          {/* BUTTON */}
          <div className="text-center mt-5">

            
            <Link
  to="/bookstorage"
  className="btn btn-success btn-lg rounded-pill px-5"
>
  Book Storage Now
</Link>
              <Link
    to="/track"
    className="btn btn-primary btn-lg rounded-pill px-4 m-2"
  >
    Track Item
  </Link>
            <Link
  to="/contact"
  className="btn btn-outline-primary btn-lg rounded-pill px-4 m-2"
>
  Contact Us
</Link>


          </div>

        </div>
        <div className="container my-5">

  <h2 className="text-center mb-4">
    Find Us at Kenyatta University
  </h2>

  <div className="shadow rounded overflow-hidden">

    <iframe
      title="Campus Vault KE Map"
      src="https://maps.google.com/maps?q=Kenyatta%20University%20Main%20Campus&t=&z=15&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>

  </div>

</div>

        {/* ROUTES */}
        <Routes>
          <Route path="/faq" element={<FAQ />} />

        <Route
  path="/bookstorage"
  element={<BookStorage />}
/>
              <Route
    path="/track"
    element={<TrackStorage />}
  />
    <Route
  path="/contact"
  element={<Contact />}
/>
<Route
  path="/admin-login"
  element={<AdminLogin />}
/>


<Route
  path="/bookings"
  element={<GetBookings />}
/>
<Route path="/getbookings" element={<GetBookings />} />



          

        </Routes>

      </div>

      {/* CHATBOT */}
      <Chatbot />

      {/* pricing  */}
      <Pricing />

    </BrowserRouter>

  );
}

export default App;