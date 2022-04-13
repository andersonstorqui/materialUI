import React from "react";
import { Snackbar } from "@mui/material/";
import MuiAlert from "@mui/material/Alert";

export const Toast = ({ open, severity, text, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    const onClose = () => {};
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        {text}
      </MuiAlert>
    </Snackbar>
  );
};
