import React from "react";
import aboutUs from "./../images/about-us.svg";
import truckIcon from "./../images/truck-icon.svg";
import trackIcon from "./../images/tracking-icon.svg";
import booking from "../images/booking-icon.svg";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="right-side">
          <img src={aboutUs} alt="auto hauler trucks" />
          <div className="decor-board"></div>
        </div>
        <div className="left-side">
          <h1>About Us</h1>
          <h4>Find Out Informatively About Auto Hauler</h4>
          <p>
            We are an experienced carrier to transport vehicles safely across
            Canada & US. We are capable of transporting all types of vehicles,
            whether you have a small car, suv, dually truck, stretch limousine,
            a school bus or a Semi Truck. We are Experts in Safely Transporting
            Exotic and Luxury Vehicles for Corporate Clients and Dealerships.
          </p>
          <div className="features">
            <div className="icon">
              <img src={truckIcon} alt="fast shipping service" />
              <h5>Fast Shipping</h5>
            </div>
            <div className="icon">
              <img src={trackIcon} alt="easy tracking " />
              <h5>Easy Tracking</h5>
            </div>
            <div className="icon">
              <img src={booking} alt="easy get a quote" />
              <h5>Convenient Booking</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
