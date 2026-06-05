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