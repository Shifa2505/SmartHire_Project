import "./App.css";
import React, { Component } from "react";
//import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/company";
import Jobs from "./components/jobs";
import Header from "./components/Header";
import AboutComponent from "./components/AboutComponent";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/aboutcomponent" element={<AboutComponent />} />
            <Route exact path="/header" element={<Header />} />
          </Routes>
        </Router>
      </>
    );
  }
}

