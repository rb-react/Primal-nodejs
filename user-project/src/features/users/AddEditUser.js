import React, { useContext } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import UserForm from "./UserForm";
import UserContext from "./UserContext";

const AddEditUser = () => {
  const { open, handleClose, operation } = useContext(UserContext);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{operation == "edit" ? "Edit" : "Add"}User</DialogTitle>
      <DialogContent>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddEditUser;
