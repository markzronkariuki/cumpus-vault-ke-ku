import React, { useState } from "react";
import axios from "axios";

const BookStorage = () => {

  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [hostel, setHostel] = useState("");
  const [room, setRoom] = useState("");
  const [storageType, setStorageType] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const submitBooking = async (e) => {

    e.preventDefault();

    const data = {
      fullname,
      phone,
      hostel,
      room,
      storage_type: storageType,
      duration,
      item_description: description
    };

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/api/bookstorage",
        data
      );

      setMessage(
        `Booking Successful! Booking ID: ${response.data.booking_id}`
      );

      // Clear form
      setFullname("");
      setPhone("");
      setHostel("");
      setRoom("");
      setStorageType("");
      setDuration("");
      setDescription("");

    } catch (error) {

      console.log(error);

      setMessage(
        "Booking failed. Please try again."
      );
    }
  };

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow border-0 rounded-4">

            <div className="card-body p-4">

              <h2
                className="text-center mb-4 fw-bold"
                style={{ color: "#002366" }}
              >
                Book Storage
              </h2>

              {message && (

                <div className="alert alert-success">
                  {message}
                </div>

              )}

              <form onSubmit={submitBooking}>

                {/* FULL NAME */}
                <div className="mb-3">

                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={fullname}
                    onChange={(e) =>
                      setFullname(e.target.value)
                    }
                    required
                  />

                </div>

                {/* PHONE */}
                <div className="mb-3">

                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    required
                  />

                </div>

                {/* HOSTEL */}
                <div className="mb-3">

                  <label className="form-label">
                    Hostel Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={hostel}
                    onChange={(e) =>
                      setHostel(e.target.value)
                    }
                    required
                  />

                </div>

                {/* ROOM */}
                <div className="mb-3">

                  <label className="form-label">
                    Room Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={room}
                    onChange={(e) =>
                      setRoom(e.target.value)
                    }
                  />

                </div>

                {/* STORAGE TYPE */}
                <div className="mb-3">

                  <label className="form-label">
                    Storage Type
                  </label>

                  <select
                    className="form-control"
                    value={storageType}
                    onChange={(e) =>
                      setStorageType(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Select Storage Type
                    </option>

                    <option value="Small">
                      Small Package
                    </option>

                    <option value="Medium">
                      Medium Package
                    </option>

                    <option value="Large">
                      Large Package
                    </option>

                    <option value="Full Room">
                      Full Room Package
                    </option>

                  </select>

                </div>

                {/* DURATION */}
                <div className="mb-3">

                  <label className="form-label">
                    Storage Duration
                  </label>

                  <select
                    className="form-control"
                    value={duration}
                    onChange={(e) =>
                      setDuration(e.target.value)
                    }
                    required
                  >

                    <option value="">
                      Select Duration
                    </option>

                    <option value="1 Month">
                      1 Month
                    </option>

                    <option value="2 Months">
                      2 Months
                    </option>

                    <option value="Custom">
                      Custom Dates
                    </option>

                  </select>

                </div>

                {/* DESCRIPTION */}
                <div className="mb-3">

                  <label className="form-label">
                    Describe Your Items
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Example: 1 mattress, 2 bags, books, utensils"
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                    required
                  ></textarea>

                </div>

                {/* PHOTO UPLOAD */}
                <div className="mb-4">

                  <label className="form-label">
                    Upload Item Photos
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    multiple
                  />

                </div>

                {/* PICKUP OPTION */}
                <div className="mb-4">

                  <label className="form-label">
                    Pickup Option
                  </label>

                  <select className="form-control">

                    <option>
                      I Will Deliver Myself
                    </option>

                    <option>
                      Need Pickup Assistance
                    </option>

                  </select>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Reserve Storage
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default BookStorage;