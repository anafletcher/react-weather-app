import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Alicia Fletcher and is{" "}
          <a
            href="https://updated-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
