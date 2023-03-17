import React from 'react';
import './styles/Skills.css'
import node from './images/node.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import bootstrap from './images/bootstrap.png';
import react from './images/react.png';
import java from './images/java.png';
import mongodb from './images/mongodb.png';
import mysql from './images/mysql.png';

function Skills() {
  return (
    <div className="skills">
        <h1 className="skills-head">Technical Skills</h1>
        <div className="skills-icons">
            <div className="cards">
                <img src={html} alt = "node" width = "75px" height = "75px" />
                <h2>HTML</h2>
                <p>HTML is a web development language.</p>
            </div>
              <div className="cards">
                  <img src={css} alt="node" width="75px" height="75px" />
                  <h2>CSS</h2>
                  <p>CSS is stylesheet used to style html pages.</p>
              </div>
              <div className="cards">
                  <img src={js} alt="node" width="75px" height="75px" />
                  <h2>Javascript</h2>
                  <p>Javascript is a scripting language.</p>
              </div>
              <div className="cards">
                  <img src={bootstrap} alt="node" width="75px" height="75px" />
                  <h2>Bootstrap</h2>
                  <p>Bootstrap is a CSS framework.</p>
              </div>
              <div className="cards">
                  <img src={react} alt="node" width="75px" height="75px" />
                  <h2>React js</h2>
                  <p>React js is frontend javascript library.</p>
              </div>
              <div className="cards">
                  <img src={node} alt="node" width="75px" height="75px" />
                  <h2>Node js</h2>
                  <p>Node js is backend javascript library.</p>
              </div>
              <div className="cards">
                  <img src={mongodb} alt="node" width="75px" height="75px" />
                  <h2>MongoDB</h2>
                  <p>MongoDB is a Non-Relational database.</p>
              </div>
              <div className="cards">
                  <img src={mysql} alt="node" width="75px" height="75px" />
                  <h2>MySQL</h2>
                  <p>MySQL is a Relational database.</p>
              </div>
              <div className="cards">
                  <img src={java} alt="node" width="75px" height="75px" />
                  <h2>Java</h2>
                  <p>Java is an object oriented programming language.</p>
              </div>
        </div>
    </div>
  );
}

export default Skills;
