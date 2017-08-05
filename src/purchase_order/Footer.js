import React from 'react';

const Footer = ({ handlePrintContent, handleCloseModal }) => (
  <div className='row footer-buttons'>
    <div className='col-md-5'>
      <button onClick={handlePrintContent} className='btn btn-default'>Print</button>
    </div>
    <div className='col-md-4'>
      <button onClick={handleCloseModal} className='btn btn-danger'>Close</button>
    </div>
  </div>
);

export default Footer;
