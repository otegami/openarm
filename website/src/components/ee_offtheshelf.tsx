import React from 'react';
import ComponentPhoto from './ComponentPhoto';

const components = [
  { name: 'Miniature Linear Guide Standard Block', image: 'rse2b10-155.png', model: 'RSE2B10-155', qty: 2, unitPrice: '¥14,940', totalPrice: '¥29,880', supplier: 'MiSUMi'},
  { name: 'M3x5 bolt', image: 'm3_5.png', model: 'CBE3-5', qty: 8, unitPrice: '¥70', totalPrice: '¥560', supplier: 'MiSUMi'},
  { name: 'M3x8 bolt', image: 'm3_8.png', model: 'CBE3-8', qty: 20, unitPrice: '¥56', totalPrice: '¥1,120', supplier: 'MiSUMi'},
  { name: 'Small Diameter Head bolts M3x6', image: 'kbbs3_6.png', model: 'KBBS3-6', qty: 32, unitPrice: '¥228', totalPrice: '¥7,296', supplier: 'MiSUMi'},
  { name: 'Step Bolt', image: 'dbsy4-5-4.png', model: 'DBSY4-5-4', qty: 8, unitPrice: '¥440', totalPrice: '¥3520', supplier: 'MiSUMi'},
  { name: 'Bearing', image: 'mr126zz.png', model: 'MR126ZZ', qty: 8, unitPrice: '¥482', totalPrice: '¥3856', supplier: 'MiSUMi'},

];

export default function OffTheShelfTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ height: '8em', textAlign: 'center', borderBottom: '5px solid #ccc' }}>
          <th>Name</th>
          <th>Photo</th>
          <th>Model Number</th>
          <th>Quantity</th>
          <th>Unit Price (JPY)</th>
          <th>Total Price (JPY)</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {components.map((comp) => (
          <tr key={comp.name} style={{ height: '10em', textAlign: 'center', backgroundColor: 'transparent' }}>
            <td>{comp.name}</td>
            <td><ComponentPhoto src={require(`@site/static/img/BOM/ee/${comp.image}`).default} alt={comp.name} /></td>
            <td>{comp.model}</td>
            <td>{comp.qty}</td>
            <td>{comp.unitPrice}</td>
            <td>{comp.totalPrice}</td>
            <td>{comp.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
