import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AboutSection from '../Components/AboutSection';
import LocationSection from '../Components/LocationSection';
import ContactSection from '../Components/ContactSection';
import FooterSection from '../Components/FooterSection';
import headingBackground from "../images/bbq-chicken.jpg";
import headingBanner from "../images/henglaytitle.png";
// const headingBackground = <img src={logo} />

const Home = ({isAdmin}) => (
  <Fragment>
    { isAdmin && <Link to="/admin">Admin</Link>}
    <AboutSection />
    <LocationSection />
    <ContactSection />
    <FooterSection />
  </Fragment>
);

const styles = {
  homeContainer: {
    width: '100%'
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

export default Home;
