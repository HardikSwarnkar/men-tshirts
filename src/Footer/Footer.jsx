import React from 'react';
import './Footer.css';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AppsIcon from '@mui/icons-material/Apps';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Footer2 } from './Footer2';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>
        <div className="footer-row">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
        </div>
        <div className="footer-row">
          <h3 className="social">KEEP IN TOUCH</h3>
          <div>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookIcon className="social1"></FacebookIcon>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <TwitterIcon className="social1"></TwitterIcon>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <YouTubeIcon className="social1"></YouTubeIcon>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon className="social1"></InstagramIcon>
            </a>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};
