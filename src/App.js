import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/anafletcher"
            default="_blank"
            rel="noreferrer"
          >
            Alicia Fletcher
          </a>
          , is{" "}
          <a
            href="https://updated-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and is{" "}
          <a
            href="https://updated-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
