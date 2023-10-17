import axios from "axios";
import UserService from "../../services/UserService";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  // const [userList, setUserList] = useState([]);

  //   const getData = () => {
  //     Axios.get("https://63e34eaf65ae4931770c5257.mockapi.io/crud")
  //       .then((response) => {
  //         setApiData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   };
  const handleDelete = (id) => {
    axios
      .delete(`https://63e34eaf65ae4931770c5257.mockapi.io/crud/${id}`)
      .then(() => {
        // getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setDataToStorage = (name, mobile, email, status, age) => {
    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("status", status);
    localStorage.setItem("age", age);
  };
  //======================================================================

  const loadUsers = async () => {
    // api call
    const response = await UserService.fetchAll();
    setApiData(response.data.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Age</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.status}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link to="/edit">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            setDataToStorage(
                              item.name,
                              item.mobile,
                              item.email,
                              item.status,
                              item.age
                            )
                          }
                        >
                          EDIT
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (window.confirm("Are You Sure To Delete Data ?")) {
                            handleDelete(item.id);
                          }
                        }}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
