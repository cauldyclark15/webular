import React from 'react';
import logo from '../images/logo.png';
import barcode from '../images/barcode.png';

const Header = () => (
  <div className='po-header'>
    <div className='pull-right date-po-barcode'>
      <p>Aug 3, 2017</p>
      <p>PO# 1000012</p>
      <div className='barcode'>
        <img className='po-barcode' src={barcode} alt='barcode'/>
      </div>
    </div>
    <div className='company-info-logo'>
      <div className='logo'>
        <img className='po-logo' src={logo} alt='Webular'/>
      </div>
      <h4>Webular LLC</h4>
      <p>363 N University Ave</p>
      <p>Provo, Utah 84601</p>
      <p>Phone: 801-717-8543</p>
      <p>Email: ken@webular.com</p>
    </div>
  </div>
)

export default Header;
