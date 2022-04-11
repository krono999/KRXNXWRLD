import React from "react";
import ReactDOM from "react-dom";
import Parallax, { Layer } from "react-parallax-scroll";
import NavBar from '../src/components/navBar/NavBar'
import "./styles.css";

function App() {
  return (
    <div className="body">
      <Parallax>
        <NavBar />
        <div className="separator" />
        <Layer>
          <Layer className="banner banner-1" settings={{ speed: 0.45 }}>
            <div className="boxOne"></div>
          </Layer>
          <div className="separator" />
          <Layer className="banner banner-2" settings={{ speed: 0.45 }}>
            <div className="boxTwo"></div>
          </Layer>
          <div className="separator" />
          <Layer className="banner banner-3" settings={{ speed: 0.45 }}>
            <div className="boxThree"></div>
          </Layer>
          <Layer className="banner banner-4" settings={{ speed: 0.45 }}>
            <div className="boxFour"></div>
          </Layer>
        </Layer>
        <Layer>
        </Layer>

      </Parallax>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
