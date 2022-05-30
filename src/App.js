import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        This project was coded by Stephanie Parra and is{" "}
        <a
          href="https://github.com/stephanieparra/react-weather-app"
          target="_blank"
        >
          open-sourced.
        </a>
      </p>
    </div>
  );
}
