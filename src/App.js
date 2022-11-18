import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <SearchEngine defaultCity="Los Angeles" />
        </div>
      </div>

      <footer>
        City Pop-Inspired Weather App
        <br />
        Coded by{" "}
        <a
          href="https://optimistic-torvalds-560c7b.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephanie Parra
        </a>{" "}
        •
        <a
          href="https://github.com/stephanieparra/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced
        </a>
      </footer>
    </>
  );
}
