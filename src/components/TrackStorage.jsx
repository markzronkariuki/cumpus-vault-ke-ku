import React, { useState } from "react";

const TrackStorage = () => {

  const [bookingId, setBookingId] = useState("");
  const [result, setResult] = useState(null);

  const handleTrack = () => {

    // Sample data
    if (bookingId === "CVK001") {

      setResult({
        name: "Mark Kariuki",
        storageType: "Medium Package",
        status: "Securely Stored",
        date: "15 May 2026"
      });

    } else {

      setResult({
        error: "Booking not found."
      });

    }
  };

  return (

    <div className="container py-5">

      {/* TITLE */}
      <div className="text-center mb-5">

        <h1
          className="fw-bold"
          style={{ color: "#002366" }}
        >
          Track Your Stored Items
        </h1>

        <p className="text-muted">
          Enter your Booking ID to check status.
        </p>

      </div>

      {/* SEARCH CARD */}
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow border-0 rounded-4 p-4">

            <label className="fw-bold mb-2">
              Booking ID
            </label>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Example: CVK001"
              value={bookingId}
              onChange={(e) =>
                setBookingId(e.target.value)
              }
            />

            <button
              className="btn btn-success"
              onClick={handleTrack}
            >
              Track Item
            </button>

          </div>

        </div>

      </div>

      {/* RESULTS */}
      {result && (

        <div className="row justify-content-center mt-5">

          <div className="col-md-6">

            <div className="card shadow border-0 rounded-4 p-4">

              {result.error ? (

                <h5 className="text-danger">
                  {result.error}
                </h5>

              ) : (

                <>
                  <h4
                    className="fw-bold mb-4"
                    style={{ color: "#002366" }}
                  >
                    Storage Details
                  </h4>

                  <p>
                    <strong>Name:</strong>
                    {" "}
                    {result.name}
                  </p>

                  <p>
                    <strong>Storage Type:</strong>
                    {" "}
                    {result.storageType}
                  </p>

                  <p>
                    <strong>Stored On:</strong>
                    {" "}
                    {result.date}
                  </p>

                  <p>
                    <strong>Status:</strong>
                    {" "}
                    <span className="badge bg-success">
                      {result.status}
                    </span>
                  </p>

                </>
              )}

            </div>

          </div>

        </div>

      )}

    </div>

  );
};

export default TrackStorage;