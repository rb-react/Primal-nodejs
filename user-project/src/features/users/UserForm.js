import React, { useContext, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Grid, TextField, Button, MenuItem, Select } from "@mui/material";
import UserContext from "./UserContext";
import UserService from "../../services/UserService";

const UserForm = () => {
  const [user, setUser] = useState({
    status: "active",
  });
  const { operation, initialUser, handleClose, loadUsers } =
    useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("User: ", user);
    if (operation == "edit") {
      //put
      UserService.updateUser(user?._id, user)
        .then((response) => {
          alert("User Updated...");
          handleClose();
          loadUsers();
        })
        .catch((err) => {
          console.error(err);
          alert("Could not updated...");
        });
    } else {
      //post
      UserService.createUser(user)
        .then((response) => {
          alert("User created...");
          handleClose();
          loadUsers();
        })
        .catch((err) => {
          console.error(err);
          alert("Could not created...");
        });
    }
  };

  useEffect(() => {
    if (initialUser) setUser({ ...user, ...initialUser });
  }, [initialUser]);

  return (
    <Container>
      <h2>User Form</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Mobile"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            labelId="status"
            label="Status"
            name="status"
            value={user.status}
            onChange={handleChange}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            {operation == "edit" ? "Update" : "Create"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserForm;
