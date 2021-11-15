import React from "react";
import { Link } from "react-router-dom";
import HomeData from "../JSON/home.json";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const homeElements = HomeData.map((obj) => {
    const { name, path } = obj;
    return (
      <div key={uuidv4()} className="container-btn-house">
        <Link to={path}>
          <button
            className={
              name === "Shop"
                ? "btn-shop"
                : name === "Decoration Services"
                ? "btn-deco"
                : name === "Events"
                ? "btn-events"
                : name === "Rental Services"
                ? "btn-rental"
                : name === "Ballet/Pilates"
                ? "btn-ballet"
                : "btn-technical"
            }
          >
            {name}
          </button>
        </Link>
      </div>
    );
  });

  const cardElements = HomeData.map((obj) => {
    const { name, path, img, description } = obj;
    return (
      <div key={uuidv4()} className="card-element">
        <div className="card-top">
          <h3>{name}</h3>
          {/* Card Logo */}
          <div className="container-card-logo">
            <div className="logo-colors orange"></div>
            <div className="logo-colors violet"></div>
            <div className="logo-colors green"></div>
            <div className="logo-colors blue"></div>
            <div className="logo-colors red"></div>
          </div>
        </div>
        <p>{description}</p>
        <img src={img} alt="site images" />
        <div className="container-bottom-btn">
          <Link to={path}>
            <button>Go to {name}</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="home">
      <div className="bg-home">
        <img
          src={process.env.PUBLIC_URL + "../images/bg-barrels.png"}
          alt="barrels"
        />
      </div>
      <div className="home-top">
        <div className="roof"></div>
        <h1>Casa Verde</h1>
        <p>RAUM FÜR IDEEN</p>
      </div>
      <div className="wrapper-btn-house">{homeElements}</div>
      <div>{cardElements}</div>
    </div>
  );
};

export default Home;
