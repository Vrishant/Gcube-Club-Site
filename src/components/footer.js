import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Envelope, Instagram , Discord, Linkedin} from 'react-bootstrap-icons'; // Import specific icons

const Footer = () => {
  return (
    <footer
      className="text-light py-4"
      style={{
        background: 'linear-gradient(135deg,rgb(0, 0, 0),rgb(36, 36, 36))', // Gradient background
      }}
    >
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About <em1>GCUBE</em1></h5>
            <p><em1>GCUBE</em1> is your ultimate platform for game development and creativity. 
            <b> Get. Game. Going.</b>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className='blue1'>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">About</a>
              </li>
              <li>
                <a href="/games" className="text-light text-decoration-none">Games</a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 blue1">
            <h5>Follow Us</h5>
            <div>
              <a href="/contact" className="text-light me-3 icon">
                <Envelope size={24} /> 
              </a>
              <a href="https://www.instagram.com/g_cube.pesu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="text-light me-3 icon">
                <Instagram size={24} /> 
              </a>
              <a href="https://discord.gg/NnPZZHcU" className="text-light me-3 icon" target='_blank'>
                <Discord size={24} /> 
              </a>
              <a href="https://www.linkedin.com/company/g-cube-pesu/posts/?feedView=all">
                <Linkedin size={24}  className="text-light me-3 icon" target='_blank'/>
              </a>
              {/* <a href="#" className="text-light me-3 icon">
                <Linkedin size={24} /> 
              </a> */}
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="mb-0">&copy; 2025 GCUBE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;