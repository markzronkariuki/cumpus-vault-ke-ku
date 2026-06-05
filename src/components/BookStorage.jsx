import React, { useState } from "react";
import axios from "axios";

function BookStorage() {

  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [hostel, setHostel] = useState("");
  const [room, setRoom] = useState("");
  const [storageType, setStorageType] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [pickupOption, setPickupOption] = useState("");
  const [message, setMessage] = useState("");

  const submitBooking = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", fullname);
    formData.append("phone", phone);
    formData.append("hostel", hostel);
    formData.append("room_number", room);
    formData.append("storage_type", storageType);
    formData.append("duration", duration);
    formData.append("item_description", description);
    formData.append("pickup_option", pickupOption);

    try {

      const response = await axios.post(
        "https://doreen.alwaysdata.net/api/bookstorage",
        formData
      );

      setMessage(response.data.message);

      setFullname("");
      setPhone("");
      setHostel("");
      setRoom("");
      setStorageType("");
      setDuration("");
      setDescription("");
      setPickupOption("");

    } catch (error) {

      console.log(error);

      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Server connection failed");
      }

    }

  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Book Storage
      </h2>

      {message && (
        <div className="alert alert-info">
          {message}
        </div>
      )}

      <form onSubmit={submitBooking}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={fullname}
          onChange={(e)=>setFullname(e.target.value)}
          required
        />

        

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Hostel"
          value={hostel}
          onChange={(e)=>setHostel(e.target.value)}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Room Number"
          value={room}
          onChange={(e)=>setRoom(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={storageType}
          onChange={(e)=>setStorageType(e.target.value)}
          required
        >
          <option value="">Select Storage Type</option>
          <option value="Small">Small Package</option>
          <option value="Medium">Medium Package</option>
          <option value="Large">Large Package</option>
          <option value="Full Room">Full Room Package</option>
        </select>

        <select
          className="form-control mb-3"
          value={duration}
          onChange={(e)=>setDuration(e.target.value)}
          required
        >
          <option value="">Select Duration</option>
          <option value="1 Month">1 Month</option>
          <option value="2 Months">2 Months</option>
        </select>

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Describe your items"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
        />

        <select
          className="form-control mb-3"
          value={pickupOption}
          onChange={(e)=>setPickupOption(e.target.value)}
          required
        >
          <option value="">Select Pickup Option</option>
          <option value="I Will Deliver Myself">
            I Will Deliver Myself
          </option>
          <option value="Need Pickup Assistance">
            Need Pickup Assistance
          </option>
        </select>

        <button
          type="submit"
          className="btn btn-success"
        >
          Reserve Storage
        </button>

      </form>

    </div>
  );
}

export default BookStorage;