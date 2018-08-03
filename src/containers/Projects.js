import React, { Component } from 'react';
import './Projects.css';
import Menu from 'Menu';
import Item from 'Item';
import hotspot from '../images/projects/hotspot.png'
import shelfx from '../images/projects/shelfx.png'
import thundr from '../images/projects/thundr.png'
import underthebuff from '../images/projects/underthebuff.png'
import scopevr from '../images/projects/scopevr.png'
import snake from '../images/projects/snake.png'
import bgsub from '../images/projects/bgsub.png'
import softrobot from '../images/projects/softrobot.png'
import face from '../images/projects/face.png'
import { Link } from 'react-router-dom';


export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <header className="Projects-header">
          <Link to='/'><Menu class="Menu-item" title="margalit"/></Link>
          <Link to='/projects'><Menu class="Menu-item active" title="projects" /></Link>
        </header>
        <h2>Mobile Apps</h2>
        <Item title="Hotspot" tools="React Native & Firebase" description="Hotspot lets you find fun events nearby or add your own. I initially made the backend of this app in mySQL and Node.js but eventually switched to Firebase as it provided better authentication and scaling for a single developer. It is available on both iOS and Android." image={hotspot} link="http://tryhotspot.app/"/>
        <Item title="ShelfX" tools="React Native" description="ShelfX lets customers shop at existing automated vending machines. Use the camera to scan the QR code or locate which machines are nearby. I made the app with React Native and integrated it with an existing Ruby on Rails Back end. It is available on both iOS and Android." image={shelfx} link="http://www.shelfx.com/"/>
        <h2>Web Apps</h2>
        <Item title="Thundr" tools="React & Node.js" description="Thundr lets you connect your existing LIFX Wi-Fi enabled LED smart lights and visualize your music. It uses the LIFX HTTP API and will soon implement the LIFX LAN API for faster connections." image={thundr} link="http://thundr.io/"/>
        <Item title="Scope" tools="A-Frame & JavaScript" description="Scope is a virtual reality demonstration of a sensor package detecting objects in space. All of the models were edited in Blender in order to ensure that the scaling was correct. This site works best with a Google Cardboard." image={scopevr} link="http://scope.surge.sh/"/>
        <Item title="Under the Buff" tools="HTML & CSS" description="Under The Buff is a student-run Internet comedy show that produces short episodes and videos targeted to the undergraduate community of the University of Colorado at Boulder. I created the website and email sign up for this site." image={underthebuff} link="http://underthebuff.com/"/>
        <h2>Embedded Apps</h2>
        <Item title="Snake" tools="C" description="The classic Snake game was made on a PIC18F87K22 using a GLCD and push buttons. Different difficulties were made by adjusting the timer and the low priority interrupt was used to update the cells and handle the timer. No high priority interrupt was used." image={snake} link="https://github.com/guymargalit/snake"/>
        <Item title="Background Subtraction" tools="C++ & Python" description="Background Subtraction is used to detect an unknown object at a distance of 100 meters. Once detected, the apparent centroid is calculated and the corresponding turning angles are outputted. This was initially implemented in Python for simulations and later in C++ for integration with hardware." image={bgsub} link="https://github.com/CU-SCOPE/acquire-sim"/>
        <Item title="Face Detection" tools="Python" description="Using basic haarcascades from OpenCV, an inital face detection was implemented with Flask in order to show how many people are looking at the camera at a given time. This was implemented on a Raspberry Pi 3 as well and used as a demo at CES 2018." image={face} link="https://github.com/guymargalit/face-detection"/>
        <Item title="Soft Robot" tools="Arduino" description='Soft Robot was an attempt at making a soft grasper with Smooth-On ECOFLEX 00-30. This involved a series of attempts making molds for a possible gripper and then creating a system with an Arduino, an air pump and a solenoid valve. These were used to control the gripper along with 1/8" OD tubing.' image={softrobot} link="https://github.com/guymargalit/soft-robot"/>
        <h2> </h2>
      </div>
    );
  }
}
