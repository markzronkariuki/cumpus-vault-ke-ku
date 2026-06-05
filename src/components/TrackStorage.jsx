import React, { useState } from "react";
import axios from "axios";

function TrackStorage() {

  const [bookingId, setBookingId] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const handleTrack = async (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append("booking_id", bookingId);

    try {

      const response = await axios.post(
        "https://doreen.alwaysdata.net/api/trackstorage",
        formData
      );

      if (response.data.booking) {

        setResult(response.data.booking);
        setMessage("");

      } else {

        setResult(null);
        setMessage("Booking ID not found");

      }

    } catch (error) {

      console.log(error);

      setResult(null);
      setMessage("Server connection failed");

    }

  };

  return (

    <div className="container py-5">

      <h2 className="text-center mb-4">
        Track Storage
      </h2>

      <form onSubmit={handleTrack}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(e) =>
            setBookingId(e.target.value)
          }
          required
        />

        <button
          type="submit"
          className="btn btn-success"
        >
          Track Storage
        </button>

      </form>

      {message && (

        <div className="alert alert-danger mt-4">
          {message}
        </div>

      )}

      {result && (

        <div className="card mt-4 shadow">

          <div className="card-body">

            <h3 className="text-success">
              Storage Available
            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {result.fullname}
            </p>

            <p>
              <strong>Storage Type:</strong>{" "}
              {result.storage_type}
            </p>

            <p>
              <strong>Item Description:</strong>{" "}
              {result.item_description}
            </p>

          </div>

        </div>

      )}

    </div>

  );
}

export default TrackStorage;