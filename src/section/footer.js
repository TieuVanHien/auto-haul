import React from "react";
import logo from "../assets/logo-svg.svg";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import BusinessIcon from "@mui/icons-material/Business";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Link } from "@mui/material";

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
              <div className="address-detail">
                <h5>Address:</h5>
                <h5>731 41 Ave NE, Calgary, AB T2E 6R5</h5>
              </div>
            </div>
            <div className="detail contact">
              <div className="email">
                <EmailIcon className="icon" />
                <Link
                  className="email-link"
                  onClick={() =>
                    (window.location = "mailto:autohauler88@gmail.com")
                  }
                >
                  order@autohauler.ca
                </Link>
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
