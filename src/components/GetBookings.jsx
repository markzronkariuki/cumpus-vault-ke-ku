import React, { useEffect, useState } from "react";
import axios from "axios";

function GetBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        "https://doreen.alwaysdata.net/api/getbookings"
      );

      const data = await response.json();

      setBookings(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <h3>Loading bookings...</h3>;
  }

  return (
    <div className="container">
      <h2>Storage Bookings</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Hostel</th>
            <th>Room Number</th>
            <th>Storage Type</th>
            <th>Duration</th>
            <th>Item Description</th>
            <th>Pickup Option</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.booking_id}</td>
              <td>{booking.fullname}</td>
              <td>{booking.phone}</td>
              <td>{booking.hostel}</td>
              <td>{booking.room_number}</td>
              <td>{booking.storage_type}</td>
              <td>{booking.duration}</td>
              <td>{booking.item_description}</td>
              <td>{booking.pickup_option}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetBookings;