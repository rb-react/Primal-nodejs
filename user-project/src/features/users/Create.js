import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// const defaultValue = {
//   name: "",
//   mobile: "",
//   email: "",
//   status: "",
//   age: "",
// };

const Create = () => {
  // const [apiData, setApiData] = useState([defaultValue]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://63e34eaf65ae4931770c5257.mockapi.io/crud", {
      name: name,
      mobile: mobile,
      email: email,
      status: status,
      age: age,
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="row justify-content-around ">
        <div className="col-md-4 ">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center rounded-3 mt-4">
            <h1 className="text-light">Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="d-flex">Enter Name: </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="form-group">
              <label className="d-flex">Enter Mobile: </label>
              <input
                type="string"
                placeholder="Mobile"
                className="form-control"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="form-group">
              <label className="d-flex">Enter Email: </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label className="d-flex">Enter Status: </label>
              {/* <input
                type="string"
                placeholder="Status"
                className="form-control"
                onChange={(e) => setStatus(e.target.value)}
              /> */}
              <select
                // value={selectMenu}
                className="d-flex"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <br />
            <div className="form-group">
              <label className="d-flex">Enter Age: </label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
