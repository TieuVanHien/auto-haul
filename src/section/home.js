import React from "react";
import Button from "@mui/material/Button";
import Rectangle from "./../images/rectangleHome.svg";
import HomeImg from "./../images/nav-image.svg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <img className="vector" src={Rectangle} alt="decorated rectagle" />
        <div className="left-side">
          <h1>Affordable Auto Hauler Service</h1>
          <p>
            We provide car shipping for cars, trucks, heavy duty work trucks and
            exotic cars. Our team is experienced and professional car shipping
            company
          </p>
          <Button className="button" size="large" variant="contained">
            <Link
              href="#form"
              className="link"
              to="form"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              Get A Quote
            </Link>
          </Button>
        </div>
        <div className="right-side">
          <div className="homeImg">
            {" "}
            <img src={HomeImg} alt={"vector img in home page"} />
          </div>
        </div>
      </div>
    </section>
  );
};
