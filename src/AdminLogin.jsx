import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const loginAdmin = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    try {

      const response = await axios.post(
        "https://doreen.alwaysdata.net/api/admin/login",
        formData
      );

      
      if (response.data.success) {

  localStorage.setItem(
    "adminLoggedIn",
    "true"
  );

  navigate("/getbookings");
}
    } catch (error) {

      if (error.response) {

        setMessage(
          error.response.data.message
        );

      } else {

        setMessage(
          "Server connection failed"
        );

      }
    }
  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-4">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Admin Login
              </h2>

              {message && (

                <div className="alert alert-info">
                  {message}
                </div>

              )}

              <form onSubmit={loginAdmin}>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  required
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;