import React from "react";
import Line from "../images/heading-service.svg";
import bubble from "../images/bubbleBackground.svg";
import service1 from "../images/service-1.svg";
import service2 from "../images/service-2.svg";
import service3 from "../images/service-3.svg";

export const Service = () => {
  return (
    <sections className="service" id="service">
      <div className="container">
        <img className="bubble" src={bubble} alt="bubble background" />
        <div className="heading">
          <h1>Our Services</h1>
          <img src={Line} alt="decorated heading" />
        </div>
        <div className="service-board">
          <div className="top">
            <div className="top board">
              <img src={service1} alt="auto hauler service image1" />
              <div className="details">
                <h4>Classic Car Shipping</h4>
                <p>
                  Alberta Auto Transport is experienced in safely transporting
                  your classic ride across Canada & the US
                </p>
              </div>
            </div>
            <div className="top board">
              <img src={service2} alt="auto hauler service image2" />
              <div className="details">
                <h4>Dealership Transfer</h4>
                <p>
                  We transport all New & Used Vehicles for All Dealerships. We
                  also provide vehicle transportation for Car Rental Companies.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom board">
              <img src={service3} alt="auto hauler service image3" />
              <div className="details">
                <h4>Heavy Duty Truck Transportation</h4>
                <p>
                  We at Alberta Auto Transport have the experience and the
                  equipment to transport Heavy Trucks, Modified Heavy Trucks and
                  Highway Trucks...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </sections>
  );
};
