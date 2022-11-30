import React, { useState } from "react";
import trackingImg from "../images/tracking.svg";
import { Button } from "@mui/material";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { TrackingModal } from "../components/trackingModal";

export const Tracking = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
          <Button
            className="button"
            onClick={() => setOpen(true)}
            size="large"
            variant="contained"
          >
            Track Your Vehicle
          </Button>
        </div>
        {open && <TrackingModal OpenModal={open} CloseModal={handleClose} />}
      </div>
    </section>
  );
};
