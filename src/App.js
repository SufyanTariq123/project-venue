import React, { Component } from "react";
import Header from "./components/header_footer/Header";
import "./resources/Styles.css";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNnfo/VenueNfo";
import Highlight from "./components/highlights";
import Footer from "./components/header_footer/Footer";
export default class App extends Component {
  render() {
    return (
      <div style={{ height: "1000px", backgroundColor: "grey" }}>
        <Header />

        <Featured />
        <VenueNfo />
        <Highlight />
        <Footer />
      </div>
    );
  }
}
