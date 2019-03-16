import React from 'react';
import { Button, Footer } from 'react-materialize';
import { Link } from 'react-router-dom';

import facebook from '../images/facebook-black.png';
import smartPhone from '../images/smartphoneIcon.png';
import instagram from '../images/instagramBlack.png';

const FooterSection = () => (
  <Footer id="footer" copyrights="2019 Copyright HengLayRestaurant.com"
  moreLinks={
    <Link className="grey-text text-lighten-4 right" to="/signIn">Heng Lay</Link>
  }
  links={
    <ul>
      <li className="white-text">153 Liberty St Lowell, Ma 01851</li>
      <li><a className="white-text" target="_blank" href="https://www.facebook.com/HengLayRestaurant/">Facebook Page</a></li>
      <li><a className="white-text" target="_blank" href="https://www.instagram.com/henglayrestaurant/" target="_#">Instagram Page</a></li>
      <li><Link className="white-text" to="/menu">Menu</Link></li>
      <li style={{ marginTop: '0.5rem' }}><a className="white-text" target="_blank" href="https://vincentguo.net">Site Developer</a></li>
    </ul>
  }
  className=''
>
    <h5 className="white-text">Heng Lay Restaurant</h5>
    <p className="grey-text text-lighten-4">We serve authentic Cambodian cuisines. Dine in or take-out!</p>
</Footer>
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

export default FooterSection;
