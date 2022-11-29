import React from "react";
import logo from "../assets/logo-svg.svg";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import BusinessIcon from "@mui/icons-material/Business";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="top-side">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="details">
            <div className="detail hours">
              <QueryBuilderIcon className="icon" />
              <div>
                {" "}
                <h5>Opening Hours</h5>
                <h5>Weekdays: 8:00-5:00</h5>
              </div>
            </div>
            <div className="detail addresses">
              <BusinessIcon className="icon" />
              <h5>Address:</h5>
            </div>
            <div className="detail contact">
              <h5>Contact</h5>
              <div className="email">
                <EmailIcon className="icon" />
                <h5>order@autohauler.ca</h5>
              </div>

              <div className="phone">
                <PermPhoneMsgIcon />
                <div>
                  <h5>604-880-0009</h5>
                  <h5>647-504-4444</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bot-side">
          <h5>Copyright © 2022 Auto Hauler Inc. - All Rights Reserved.</h5>
        </div>
      </div>
    </section>
  );
};
