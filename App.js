import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={8} country="us" category="general" />}/>
        <Route exact path="/contact" element={<Contact key="contact" pageSize={8} country="us" category="contact" />}/>
        <Route exact path="/business" element={<News key="business" pageSize={8} country="us" category="business" />}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country="us" category="entertainment" />}/>
        <Route exact path="/general" element={<News key="general" pageSize={8} country="us" category="general" />}/>
        <Route exact path="/health" element={<News key="health" pageSize={8} country="us" category="health" />}/>
        <Route exact path="/science" element={<News key="science" pageSize={8} country="us" category="science" />}/>
        <Route exact path="/sports" element={<News key="sports" pageSize={8} country="us" category="sports" />}/>
        <Route exact path="/technology" element={<News key="technology" pageSize={8} country="us" category="technology" />}/>
        <Route exact path="/Login" element={<Login key="Login" />}/>
        </Routes>
        <Footer />
      </div>
        </Router>
        </>
    );
  }
}