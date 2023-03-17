import React from 'react';
import './styles/Profile.css';
import Typed from 'typed.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Fade } from "react-awesome-reveal";

function Profile() {
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Programer.',
                'Developer.'
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

  return (
    <div className="profile">
        <Fade direction='left'>
      <section>
              <div className='sm'>
                  <a href="https://github.com/ms-akash" target="_blank"><GitHubIcon /></a>
                  <a href="https://www.linkedin.com/in/akashms0211/" target="_blank"><LinkedInIcon /></a>
                  <a href="https://instagram.com/akash_0226_?igshid=MDM4ZDc5MmU=" target="_blank"><InstagramIcon /></a>
              </div>
        <div className='header'>
            <p>Hello I Am Akash MS</p>
        </div>
        <div className='typer'>
                  <h1 style={{ color: 'rgb(65, 65, 65)' }}>I'm a</h1>
                  <h1 className='type'><span style={{ color: 'darkorchid' }} ref={el} ></span></h1>
        </div>
        <div> 
            <p className='info'>Welcome to ItsMyFolio. Myself Akash, I am a software engineering student and a frontend developer.</p>
        </div>
      </section>
        <div className="buttons">
            <div><a href="https://drive.google.com/file/d/1HW6R-ojAn8XbMihllNwbeFtkf31Imk-7/view?usp=sharing" target="_blank"><button>View Resume</button></a></div>
            <div><a href="mailto:msakash200@gmail.com"><button>Hire Me</button></a></div>
        </div>
          </Fade>
          <div className='Expand'>
              <a href="#"><ExpandMoreIcon sx={{ fontSize: 35 }} /></a>
          </div>

    </div>
  );
}
export default Profile;
