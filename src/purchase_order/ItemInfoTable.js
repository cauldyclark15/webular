import React from 'react';

const ItemInfoTable = () => (
  <table className='table'>
    <thead>
      <tr>
        <th>Item</th>
        <th>Type</th>
        <th>Number/Description</th>
        <th>Unit Cost</th>
        <th>Qty</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Purchase</td>
        <td>R00601 ADEPT Methyl Sulfonyl Methane 40-80M MSM</td>
        <td>10.0000</td>
        <td>80 kg</td>
        <td>$800.00</td>
      </tr>
    </tbody>
  </table>
)

export default ItemInfoTable;
