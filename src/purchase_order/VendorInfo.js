import React from 'react';
import InfoBox from './InfoBox';

const VendorInfo = () => (
  <InfoBox classNames='po-content-info' boxLabel='Vendor:'>
    <div>
      <h4 className='po-label'>Intermountain Nutrition</h4>
      <p>Node</p>
      <p>Provo, Utah 84606</p>
    </div>
  </InfoBox>
);

export default VendorInfo;
