import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import headingBackground from "../images/bbq-chicken.jpg";
import headingBanner from "../images/henglaytitle.png";

const AboutSection = () => (
  <div id="home-container" style={styles.homeContainer}>
    <div className="container">
      <img id="henglay-title" style={{ width: '100%' }} src={`${headingBanner}`} alt="" />
      <h1 style={styles.khmerText}>ភោជនីយដ្ឋាន ហេង ទ្បាយ</h1>
      <p style={styles.tagline}>A Taste Of Traditional Cambodian Cuisine</p>
      <Link className="btn btn-large orange darken-3 hoverable" to="/menu">View Our Menu</Link>
    </div>
  </div>
);

const styles = {
  homeContainer: {
    paddingTop: '3rem',
  },
  khmerText: {
    marginTop: '-2rem',
    color: 'white',
    width: '100%'
  },
  tagline: {
    color: '#c62828',
    fontSize: '2em',
    fontweight: 700
  }
}
export default AboutSection;
