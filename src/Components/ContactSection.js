import React from 'react';
import { Button } from 'react-materialize';

import facebook from '../images/facebook-black.png';
import smartPhone from '../images/smartphoneIcon.png';
import instagram from '../images/instagramBlack.png';

const ContactSection = () => (
  <div id="contact-container" style={styles.contactContainer}>
    <h5 className="white-text">Call us for take out</h5>
    <a style={styles.socialButtons} className="btn btn-large orange darken-3" href="tel:9784584619" name="button">
      <img style={styles.socialIcons} src={smartPhone} alt="" />
      <span>(978)458-4619</span>
    </a>
    <h5 className="white-text">Tag us on Instagram</h5>
    <a style={styles.socialButtons} className="btn btn-large orange darken-3" href="https://www.instagram.com/henglayrestaurant/" target="_#">
      <img style={styles.socialIcons} src={instagram} alt="" />
      #HengLayRestaurant
    </a>
    <h5 className="white-text">Follow us on Facebook</h5>
    <a style={styles.socialButtons} className="btn btn-large orange darken-3" href="https://www.facebook.com/HengLayRestaurant/" target="_#">
      <img style={styles.socialIcons} src={facebook} alt="" />
      /HengLayRestaurant
    </a>
  </div>
);

const styles = {
  contactContainer: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: 'white',
    alignText: 'center'
  },
  socialButtons: {
    lineHeight: '3.5rem',
    marginBottom: '2rem'
  },
  socialIcons: {
    height: '2rem',
    width: '2rem',
    marginTop:'0.5',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    verticalAlign: 'middle'
  }
}

export default ContactSection;
