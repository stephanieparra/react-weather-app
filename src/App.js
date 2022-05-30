import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        This project was coded by{" "}
        <a
          href="https://optimistic-torvalds-560c7b.netlify.app"
          target="_blank"
        >
          Stephanie Parra
        </a>{" "}
        and is{" "}
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
