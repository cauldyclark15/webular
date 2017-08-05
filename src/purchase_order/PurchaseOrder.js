import React from 'react';
import Modal from 'react-modal';

import PrintPurchaseOrder from './PrintPurchaseOrder';
import Footer from './Footer';

const customStyles = {
  content : {
    left         : '25%',
    right        : '25%',
    maxHeight    : 1200,
    overFlow    : 'auto'
  }
};

const PurchaseOrder = ({ isOpen, handleCloseModal, handlePrintContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Purchase Order'
      style={customStyles}
    >
      <PrintPurchaseOrder/>
      <div className='row po-modal-buttons'>
        <div className='col-md-12'>
          <div className='pull-right'>
            <Footer handleCloseModal={handleCloseModal} handlePrintContent={handlePrintContent}/>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PurchaseOrder;
