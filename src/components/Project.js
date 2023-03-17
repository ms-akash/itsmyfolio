import React from 'react';
import './styles/Project.css';
import FB from './images/FB.png';
import PSM from './images/PSM.png';
import BS from './images/BS.png';

function Project() {
  return (
    <div>
      <div className="project-container"> 
        <h2 className="project-title">Projects</h2>
        <a href="https://github.com/ms-akash/Simple-Banking-System-using-Java-and-OOPs" target="_blank">
        <div className="project-card">
          <img className='img-proj' src={BS} alt='project-image' />
            <div className="p-d">
            <h2>Simple Banking Management using JAVA and OOPs</h2>
            <p className="project-description">Developed a console application using JAVA and OOPs conceptions to design a simple banking system with basic fetures like depositing money, withdrawal od money and bank transactions.</p>
          </div>
        </div>
        </a>
        <a href="https://github.com/ms-akash/Pregnancy-Safety-Management" target="_blank">
        <div className="project-card">
          <img className='img-proj' src={PSM} alt='project-image' />
          <div className="p-d">
            <h2>Pregnancy Safety Management using JAVA and OOPs</h2>
            <p className="project-description">The objective of this project is to create an application where the database of all the hospitals in a region were centralised therefore sharing the information among the hospitals.By doing this, every hospital will have the patient’s medical history, which will help them to avoid those situation. As a result every hospital is well informed about the patient which will be helpful for them in many ways.
</p>
          </div>
        </div>
        </a>
        <a href="https://github.com/ms-akash/Facebook-Login-Clone" target="_blank">
        <div className="project-card">
          <img className='img-proj' src={FB} alt='project-image' />
          <div className="p-d">
            <h2>Facebook login front end design</h2>
            <p className="project-description">Cloned the facebook login template using HTML and CSS</p>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
