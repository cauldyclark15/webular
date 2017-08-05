import React from 'react';

const BuyerInfoTable = () => (
  <table className='table'>
    <thead>
      <tr>
        <th>Buyer</th>
        <th>Payment Terms</th>
        <th>FOB Point</th>
        <th>Shipping Terms</th>
        <th>Ship Via</th>
        <th>Fullfillment Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ken Ojuka</td>
        <td>Net 60</td>
        <td>Origin</td>
        <td>Freight collect</td>
        <td>Delivery</td>
        <td>Jun 25, 2017</td>
      </tr>
    </tbody>
  </table>
)

export default BuyerInfoTable;