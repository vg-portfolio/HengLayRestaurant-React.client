import React, { Component } from 'react';
import { Row, Col, Navbar, NavItem, Icon, Button, Table } from 'react-materialize';
import { NavLink, Link } from 'react-router-dom';

import Pic1 from '../images/henglaypic.jpg';
import Pic2 from '../images/location-pic2.jpg';
import Pic3 from '../images/location-pic3.png';


const LocationSection = () => (
    <div style={styles.locationContainer}>
      <Row className="text-center container hide-on-small-only">
        <ul style={styles.imageContainer}>
          <li>
            <img className="responsive-img" style={styles.circleImages} src={Pic1}/>
          </li>
          <li>
            <img className="responsive-img" style={styles.circleImages} src={Pic2}/>
          </li>
          <li>
            <img className="responsive-img" style={styles.circleImages} src={Pic3}/>
          </li>
        </ul>
      </Row>
      <Row className="container">
        <Col s={12} m={6}>
          <h5 className="center">153 Liberty Street
            <br/>
            <span style={{fontSize: '1rem'}}>Lowell, MA 01851</span>
          </h5>
          <blockquote className="black-text">
            <Table className="center">
              <tbody>
                <tr>
                  <td>Mon</td>
                  <td>8:00am - 7:00pm</td>
                </tr>
                <tr>
                  <td>Tues</td>
                  <td>8:00am - 7:00pm</td>
                </tr>
                <tr style={{color: '#b71c1c'}}>
                  <td>Wed</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Thur</td>
                  <td>8:00am - 7:00pm</td>
                </tr>
                <tr>
                  <td>Fri</td>
                  <td>8:00am - 7:00pm</td>
                </tr>
                <tr>
                  <td>Sat</td>
                  <td>8:00am - 7:00pm</td>
                </tr>
                <tr>
                  <td>Sun</td>
                  <td>8:00am - 7:00pm</td>
                </tr>
              </tbody>
            </Table>
          </blockquote>
        </Col>
        <Col s={12} m={6} className="valign-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.91577462827547!2d-71.32523951147958!3d42.6332442264045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a47aea310af9%3A0x29c9212daefefda5!2s153+Liberty+St%2C+Lowell%2C+MA+01851!5e0!3m2!1sen!2sus!4v1552690790826" frameBorder="0" style={styles.map} allowFullScreen></iframe>
        </Col>
      </Row>
    </div>
);

const styles = {
  locationContainer: {
    width: '100%',
    height: '100%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: 'white',
    alignText: 'center'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  circleImages: {
    height: '15rem',
    width: '15rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    borderRadius: '100%'
  },
  map: {
    border: 0,
    width: '100%',
    height: '20rem'
  }
}
export default LocationSection;
