import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://662ba564de35f91de159028e.mockapi.io/curd-operation", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between m-2">
          <h2>Add Records</h2>
          <Link to="/read">
          <button className="btn btn-primary">Show Record</button>
          </Link>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
