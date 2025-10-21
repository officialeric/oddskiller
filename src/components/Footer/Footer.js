import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="row my-3 py-2">
      <div className="col-md-4 offset-md-4 footer-area">
        <p>© {currentYear} GIVATIPS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
