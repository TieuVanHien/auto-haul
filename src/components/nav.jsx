import React from "react";
import Logo from "./../assets/logo-svg.svg";
import { Link } from "react-scroll";
import { Button } from "@mui/material";

export const Nav = () => {
  return (
    <section className="nav">
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link
            href="#home"
            className="link"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
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
            duration={700}
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
            duration={700}
            // onClick={() => {
            //   setClose(false);
            //   setOpen(false);
            // }}
          >
            Service
          </Link>
        </div>
        <div className="contact-btn">
          <Button className="button" variant="contained">
            <Link
              href="#Contact"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
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
    </section>
  );
};
