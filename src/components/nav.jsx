import React, { useState } from "react";
import Logo from "./../assets/logo-svg.svg";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import { Sling as Hamburger } from "hamburger-react";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Hamburger
          size={25}
          color="white"
          rounded
          toggled={close}
          toggle={setClose}
          aria-expanded={close}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
        />
        <div className="links">
          <Link
            href="#home"
            className="link"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            // onClick={() => {
            //   setClose(false);
            //   setOpen(false);
            // }}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="link"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            // onClick={() => {
            //   setClose(false);
            //   setOpen(false);
            // }}
          >
            About
          </Link>
          <Link
            href="#service"
            className="link"
            to="service"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            // onClick={() => {
            //   setClose(false);
            //   setOpen(false);
            // }}
          >
            Service
          </Link>
          <Link
            href="#tracking"
            className="link"
            to="tracking"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            // onClick={() => {
            //   setClose(false);
            //   setOpen(false);
            // }}
          >
            Tracking
          </Link>
        </div>
        <div className="contact-btn">
          <Button className="button" variant="contained">
            <Link
              href="#Contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              // onClick={() => {
              //   setClose(false);
              //   setOpen(false);
              // }}
            >
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
