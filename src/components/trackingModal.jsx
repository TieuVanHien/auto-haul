import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Button,
  TextareaAutosize,
  Typography,
  Modal,
} from "@mui/material";

export const TrackingModal = ({ OpenModal, CloseModal }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1mqa5ua",
        "template_8i4job8",
        form.current,
        "rzG_LRj0lLd3n2l0Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const style = {
    position: "absolute",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={OpenModal}
        onClose={CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="trackingModal" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fill Out The Form To Track Your Vehicle
          </Typography>
          <Typography
            className="form-container"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <form ref={form} onSubmit={sendEmail} className="trackingForm">
              <TextField
                className="input"
                variant="outlined"
                label="Name"
                placeholder="John Wick"
                type="text"
                name="name"
                fullWidth="true"
                required="true"
              />
              <TextField
                className="input"
                variant="outlined"
                label="Email"
                placeholder="john.doe@gmail.com"
                type="email"
                name="email"
                fullWidth="true"
                required="true"
              />
              <TextField
                className="input"
                variant="outlined"
                label="Vehicle or Vin Number"
                placeholder="4Y1SL65848Z411439"
                type="text"
                name="vehicle"
                fullWidth="true"
                required="required"
              />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message"
                minRows={8}
                name="message"
                style={{
                  width: "95%",
                  padding: "0.5em",
                  fontFamily: "Helvetica",
                }}
                required="required"
              />
              <Button
                className="button"
                variant="contained"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
