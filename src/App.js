import React from "react";
import SearchEngine from "./SearchEngine";
import Spotify from "react-spotify-embed";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <SearchEngine defaultCity="Los Angeles" />
        </div>
      </div>
      <div className="playlist">
        <Spotify link="https://open.spotify.com/playlist/0L7F6yo5BKXZZ22JjukP7f?si=888304f6b0364894" />
      </div>
      <footer>
        Vaporwave City Pop-Inspired Weather App 🎵
        <br />
        Coded by{" "}
        <a
          href="https://optimistic-torvalds-560c7b.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephanie Parra
        </a>{" "}
        •{" "}
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
