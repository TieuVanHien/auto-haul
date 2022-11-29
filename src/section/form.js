import React from "react";
import { TextField, Button } from "@mui/material";
import recForm from "../images/form.svg";

export const FormSubmit = () => {
  const inputProps = {
    color: "#1c1c1c",
    fontWeight: "bold",
  };
  return (
    <section className="form">
      <div className="container">
        <div className="formContact">
          <h3>Get A Quote!</h3>
          <form className="formFill">
            <TextField
              className="input"
              variant="outlined"
              label="Name"
              placeholder="John Wick"
              type="text"
              required="required"
              inputProps={inputProps}
            />
            <TextField
              className="input"
              variant="outlined"
              label="Email"
              placeholder="jane.doe@gmail.com"
              type="email"
              required="required"
            />
            <TextField
              className="input"
              variant="outlined"
              label="Phone"
              placeholder="(888) 888-8888"
              type="tel"
              required="required"
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="outlined"
              label="Vehicle"
              placeholder="Vehicle - Make, Model, Year"
              type="text"
              required="required"
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="outlined"
              label="From"
              placeholder="City"
              type="text"
              required="required"
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="outlined"
              label="To"
              placeholder="City"
              type="text"
              required="required"
            />
            <TextField
              className="input"
              min={1}
              max={20}
              variant="outlined"
              label="Running or Non-Running"
              placeholder="Status"
              type="text"
              required="required"
            />
            <Button className="button" size="large" type="submit">
              Submit Resevation
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
