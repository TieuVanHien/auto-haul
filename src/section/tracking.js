import React from "react";
import trackingImg from "../images/tracking.svg";
import { Button } from "@mui/material";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";

export const Tracking = () => {
  return (
    <section className="tracking">
      <div className="container">
        <div className="left-side">
          <img src={trackingImg} alt="tracking" />
        </div>
        <div className="right-side">
          <h1>Tracking</h1>
          <ShareLocationIcon fontSize="large" />
          <p>
            Auto Hauler makes it easy for our customers to track their vehicles
            during transportation progess
          </p>
          <Button className="button" size="large" variant="contained">
            Track Your Vehicle
          </Button>
        </div>
      </div>
    </section>
  );
};
