import React from 'react';

const Signature = () => (
  <div className='po-signature'>
    <div className='row'>
      <div className='col-md-6 po-ship-to'>
        <p>Approval: _______________________</p>
      </div>
      <div className='col-md-3 po-ship-to po-date'>
        <p>Date: __________</p>
      </div>
      <div className='col-md-3 po-ship-to po-price'>
        <p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $800.00</p>
      </div>
    </div>
  </div>
)

export default Signature;
