import React from 'react';

const InfoBox = ({ boxLabel, children, classNames }) => (
  <div className={classNames}>
    <div>
      <label>
        <h4>{boxLabel}</h4>
      </label>
      <div className='infobox'>
        {children}
      </div>
    </div>
  </div>
);

export default InfoBox;
