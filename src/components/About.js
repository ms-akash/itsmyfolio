import React from 'react';
import './styles/About.css';
import styled from 'styled-components';
import myphoto from './images/myphoto.jpeg';

function About() {
  return (
    <div>
          <div className="aboutme">
          <div className="about">
          <h1 className="title">About Me</h1>
          <div className="me"> 
          <img src = {myphoto} alt="myphoto" width='250px' height='250px'/>      
          <div className="text">    
          <p className='grade'>I am Akash. I am a Software Engineering student and a Frontend developer. </p>
          <p className='grade'>I have a good knowledge of computer science fundementals along with the basic understanding of data structures and algorithms and databse management systems.</p>
          <p className='grade' >I am looking for a competitive career with a progressive environment that provides an opportunity to
            capitalize my skills and abilities where I can learn from work experience and grow along with the
            organization.</p>
            </div>
          </div>
            </div>
            <div className="education">
                <div className="edu-card">
                  <h3>SSLC</h3>
                  <p>Completed with a grade of 91%</p>
                </div>
              <div className="edu-card">
            <h3>HSC</h3>
            <p>Completed with a grade of 77%</p>
              </div>
            <div className="edu-card">
            <h3>BE CSE</h3>
            <p>Currently pursing with a CGPA of 8.44</p>
            </div>
            </div>
          </div>
 
    </div>
  );
}


export default About;
