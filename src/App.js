import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Los Angeles" />

        <footer>
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
        </footer>
      </div>
    </div>
  );
}
