import "../scss/sidebar.scss";
import "primeicons/primeicons.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faDumbbell,
  faHouse,
  faCalendarAlt,
  faCloud,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { TumblrShareButton, TumblrIcon } from "react-share";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(null);
  const componentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const [showWeather, setShowWeather] = useState(false);

  const [stopwatch, setStopwatch] = useState(false);

  const handleWeatherClick = () => {
    setShowWeather(!showWeather);
  };

  const handleStopwatchClick = () => {
    setStopwatch(!stopwatch);
  };

  const handleCalendarIconClick = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setIsLogged(Boolean(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLogged(false);
  };

  useEffect(() => {
    if (isLogged === false) {
      navigate("signin");
    }
  }, [isLogged]);

  return (
    <div className="card flex justify-content-center">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div className="sidebar--container" ref={componentRef}>
          <h1 className="sidebar--header">HOME</h1>
          <div className="icons--sidebar--wrapper__main">
            <FontAwesomeIcon icon={faRunning} />
            <FontAwesomeIcon icon={faDumbbell} />
          </div>
          <div className="icons--sidebar--wrapper__second">
            <TumblrShareButton
              url={"https://www.example.com"}
              quote={"My best Personal Record!"}
              hashtag="#BestPersonalRecord"
            >
              <TumblrIcon size={52} round />
            </TumblrShareButton>
            <TwitterShareButton
              url={"https://www.example.com"}
              quote={"My best Personal Record!"}
              hashtag="#BestPersonalRecord"
            >
              <TwitterIcon size={52} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={"https://www.example.com"}
              quote={"My best Personal Record"}
              hashtag="#BestPersonalRecord"
            >
              <FacebookIcon size={52} round />
            </FacebookShareButton>
          </div>
          <div className="footer--icons">
            <div className="logout--wrapper">
              <button onClick={handleLogout} className="logout--button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="header--active__icons">
        <Link to="/calendar" style={{ color: "#fff", cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            onClick={handleCalendarIconClick}
          />
          {showCalendar && <Calendar onChange={onChange} value={value} />}
        </Link>

        <Button onClick={() => setVisible(true)}>
          <FontAwesomeIcon icon={faHouse} />
        </Button>
        <Link to="/weather" style={{ color: "#fff", cursor: "pointer" }}>
          <FontAwesomeIcon icon={faCloud} onClick={handleWeatherClick} />
        </Link>
        <Link to="/stopwatch" style={{ color: "#fff", cursor: "pointer" }}>
          <FontAwesomeIcon icon={faStopwatch} onClick={handleStopwatchClick} />
        </Link>
      </div>
    </div>
  );
};

export default SidebarComponent;
