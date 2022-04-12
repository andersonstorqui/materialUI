import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ open, onClose, severity, text }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity}>{text}</Alert>
      </Snackbar>
    </>
  );
};

export default Toast;
