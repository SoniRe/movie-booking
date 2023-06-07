import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./About.css";

function About(props) {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const { movieName, movieSummary, rating, movieImage } = data;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [movie, setMovie] = useState(movieName);

  const handle = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pswd);
    localStorage.setItem("movie", movie);
  };

  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setActive((isActive) => !isActive);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="bg__header">
      <div className="bg-card">
        <div className="bg-card__image">
          <img src={movieImage} alt="moive pic" className="bg-img" />
        </div>
        <div className="bg-card__details">
          <h2 className="bg-card__heading">{movieName}</h2>
          <h3 className="bg-card__rating">⭐ {rating}/10</h3>
          <p className="bg-card__paragraph">
            <div dangerouslySetInnerHTML={{ __html: movieSummary }}></div>
          </p>
          <a onClick={handleClick} className="bg-btn">
            Book Now
          </a>
        </div>
      </div>

      <div
        className="form"
        style={{
          display: isActive ? "initial" : "none",
        }}
      >
        <h1 className="form__heading">{movieName}</h1>
        <input
          type="name"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          className="form__input"
        />

        <input
          type="email"
          placeholder="Email or Phone number"
          onChange={(e) => setEmail(e.target.value)}
          className="form__input"
        />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPswd(e.target.value)}
          className="form__input"
        />

        <button className="form__button" onClick={handle}>
          Book
        </button>
        <div>
          <div>{localStorage.getItem("name")}</div>
          <div>{localStorage.getItem("email")}</div>
          <div>{localStorage.getItem("password")}</div>
          <div>{localStorage.getItem("movie")}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
