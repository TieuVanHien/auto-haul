import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button } from "@mui/material";
import recForm from "../images/form.svg";

export const FormSubmit = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_crkbyyc",
        "template_io5dk0a",
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
  return (
    <section className="form">
      <div className="container">
        <div className="formContact">
          <h3>Get A Quote!</h3>
          <form ref={form} onSubmit={sendEmail} className="formFill">
            <TextField
              className="input"
              variant="standard"
              label="Name"
              placeholder="John Wick"
              type="text"
              name="name"
              required="true"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <TextField
              className="input"
              variant="standard"
              label="Email"
              placeholder="jane.doe@gmail.com"
              type="email"
              name="email"
              required="true"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <TextField
              className="input"
              variant="standard"
              label="Phone"
              placeholder="(888) 888-8888"
              type="tel"
              name="phone"
              required="true"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="standard"
              label="Vehicle"
              placeholder="Vehicle - Make, Model, Year"
              type="text"
              name="vehicle"
              required="required"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="standard"
              label="From"
              placeholder="City"
              type="text"
              name="fromCity"
              required="required"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="standard"
              label="To"
              placeholder="City"
              type="text"
              name="toCity"
              required="required"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="standard"
              label="Running or Non-Running"
              placeholder="Status"
              type="text"
              name="status"
              required="required"
              sx={{
                "& .MuiInputLabel-root": { color: "green" },
                borderBottom: "2px solid white",
                borderRadius: 1,
              }}
              InputLabelProps={{
                style: { color: "white", fontWeight: "bold " },
              }}
              inputProps={{
                style: {
                  fontFamily: "nunito",
                  color: "white",
                  fontWeight: "500",
                },
              }}
            />
            <Button
              className="button"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit Quote
            </Button>
          </form>
        </div>
        <div className="right">
          <img src={recForm} alt="rectagle with hauler" />
        </div>
      </div>
    </section>
  );
};
