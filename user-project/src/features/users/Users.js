import React, { useEffect, useState } from "react";
import MuiDatatable from "mui-datatables";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import UserContext from "./UserContext";

import AddEditUser from "./AddEditUser";
import UserService from "../../services/UserService";
const Users = () => {
  const [userList, setUserList] = useState([]);
  const [operation, setOperation] = useState("add");
  const [open, setOpen] = useState(false);
  const [initialUser, setInitialUser] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const loadUsers = async () => {
    // api call
    const response = await UserService.fetchAll();
    setUserList(response.data.data);
  };

  const addUser = () => {
    setInitialUser({});
    setOperation("add");
    setOpen(true);
  };

  const editUser = (user) => {
    setInitialUser(user);
    setOperation("edit");
    setOpen(true);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
            loadUsers();
          })
          .catch((err) => {
            console.error(err);
            Swal.fire(
              "Not Deleted!",
              "Your record has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "mobile",
      label: "Mobile",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "age",
      label: "Age",
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = userList[index];
          return (
            <>
              <IconButton color="success" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>

              <IconButton color="error" onClick={() => deleteUser(user?._id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <section>
      <Button variant="contained" onClick={addUser}>
        New +
      </Button>
      <UserContext.Provider
        value={{ open, handleClose, operation, initialUser, loadUsers }}
      >
        <AddEditUser />
      </UserContext.Provider>
      <MuiDatatable title="User List" data={userList} columns={columns} />
    </section>
  );
};

export default Users;
