import React from 'react';

import Header from './Header';
import ShipTo from './ShipTo';
import VendorInfo from './VendorInfo';
import ItemInfoTable from './ItemInfoTable';
import BuyerInfoTable from './BuyerInfoTable';
import Signature from './Signature';

const PrintPurchaseOrder = () => {
  return (
    <div className='po-main' id='po-main'>
      <div className='po-normalized'>
        <Header/>
        <div className='row infobox-main'>
          <div className='col-md-6 po-vendor'>
            <VendorInfo/>
          </div>
          <div className='col-md-6 po-ship-to'>
            <ShipTo/>
          </div>
        </div>
        <div className='row po-table'>
          <div className='col-md-12'>
            <BuyerInfoTable/>
          </div>
          <div className='col-md-12'>
            <ItemInfoTable/>
          </div>
        </div>
        <Signature/>
      </div>
    </div>
  )
}

export default PrintPurchaseOrder;
