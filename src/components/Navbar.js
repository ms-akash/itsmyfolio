import React from 'react';
import './styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Fade } from "react-awesome-reveal";

function Navbar() {
  return (
    <div>
        <Fade direction='down'>
        <header>
        <div className="nav-container">
            <nav>
                  <div className="logo-wrap">
                      <a href="#" className="logo">ItsMy<span style={{ color: 'darkorchid' }}>Folio</span></a>
                  </div>
                  <div>
                  <ul className="nav-ul">
                    <li className="nav-li"><a href="#">Profile</a></li>
                    <li className="nav-li"><a href="#">About</a></li>
                    <li className="nav-li"><a href="#">Projects</a></li>
                    <li className="nav-li"><a href="#">Contact</a></li>
                  </ul>
                  <div className="icon">
                    <MenuIcon />
                  </div>
                    </div>
                    <div className='socialmedia'>
                          <a href="https://github.com/ms-akash" target="_blank"><GitHubIcon /></a>
                          <a href="https://www.linkedin.com/in/akashms0211/" target="_blank"><LinkedInIcon /></a>
                          <a href="https://instagram.com/akash_0226_?igshid=MDM4ZDc5MmU=" target="_blank"><InstagramIcon /></a>
                    </div>
            </nav>
        </div>
          </header>
          </Fade>
    </div>
  );
}

export default Navbar;
